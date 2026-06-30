-- TicoSystem blog schema
-- Run this in the Supabase SQL Editor of the shared project.
-- Everything is prefixed with `tico_` so it never collides with the other
-- project that shares this database.

create table if not exists public.tico_blog_posts (
  id            uuid primary key default gen_random_uuid(),
  slug          text unique not null,
  status        text not null default 'draft'
                  check (status in ('draft', 'published')),
  published_at  timestamptz,
  cover_image   text,
  author        text default 'Tyler Tai Co',
  tags          text[] default '{}',

  -- English
  title_en      text,
  excerpt_en    text,
  content_en    text,            -- Markdown

  -- Vietnamese
  title_vi      text,
  excerpt_vi    text,
  content_vi    text,            -- Markdown

  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- Keep updated_at fresh on every write.
create or replace function public.tico_blog_set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists tico_blog_set_updated_at on public.tico_blog_posts;
create trigger tico_blog_set_updated_at
  before update on public.tico_blog_posts
  for each row execute function public.tico_blog_set_updated_at();

-- Fast lookups for the public list (newest published first).
create index if not exists tico_blog_posts_published_idx
  on public.tico_blog_posts (published_at desc)
  where status = 'published';

-- Row Level Security: the public (anon key) may ONLY read published posts.
-- Inserts/updates happen through the Supabase dashboard or the service role,
-- which bypasses RLS, so we deliberately add no write policy here.
alter table public.tico_blog_posts enable row level security;

drop policy if exists "Public can read published posts" on public.tico_blog_posts;
create policy "Public can read published posts"
  on public.tico_blog_posts
  for select
  using (status = 'published');

-- ---------------------------------------------------------------------------
-- Sample post so you can see the blog working immediately. Delete when ready.
-- ---------------------------------------------------------------------------
insert into public.tico_blog_posts
  (slug, status, published_at, tags, title_en, excerpt_en, content_en,
   title_vi, excerpt_vi, content_vi)
values (
  'how-much-does-a-custom-web-app-cost',
  'published',
  now(),
  array['web development', 'pricing'],
  'How Much Does a Custom Web App Cost in 2026?',
  'Our actual starting prices for web apps, custom systems and AI bots — plus exactly what moves a project up or down the range.',
  $md$Most agencies dodge this question. We won't — here are our actual starting prices.

## Our pricing, in plain numbers

| What you need | Typical investment |
| --- | --- |
| Landing page / marketing site | from $800 |
| Small web app or business tool | $3,000 – $7,000 |
| Custom system or platform | from $10,000 |
| AI chatbot or automation bot | $1,500 – $4,000 |

These are real starting ranges, not "contact us for a quote." Where you land inside a range comes down to three things.

## What moves the price

- **Scope** — the number of distinct screens and user roles. Two roles and five screens cost far less than ten roles and forty screens.
- **Integrations** — every external system (CRM, ERP, payment gateway) you connect adds engineering and testing time.
- **Edge cases** — the rare-but-real situations your business logic must handle correctly. This is where "simple" projects quietly grow.

## A worked example

Say you need a quoting tool for your sales team: a configurator with about 6 screens, one admin role, and a single CRM integration. That sits squarely in the **$3,000 – $7,000** small-app band — closer to the lower end if your pricing rules are clean, higher if they're full of exceptions.

> We don't just write code. We digitize your business logic.

Want an exact number for your project? [Book a free 15-minute call](/#contact) and we'll scope it with you on the spot.
$md$,
  'Chi phí làm web app riêng năm 2026 là bao nhiêu?',
  'Bảng giá khởi điểm thật cho web app, hệ thống tùy chỉnh và bot AI — kèm đúng những yếu tố khiến dự án đắt hay rẻ hơn.',
  $md$Hầu hết agency đều né câu hỏi này. Chúng tôi thì không — đây là mức giá khởi điểm thật của chúng tôi.

## Bảng giá, nói thẳng bằng con số

| Bạn cần gì | Mức đầu tư phổ biến |
| --- | --- |
| Landing / web giới thiệu | từ $800 |
| Web app / công cụ nghiệp vụ nhỏ | $3.000 – $7.000 |
| Hệ thống tùy chỉnh / nền tảng | từ $10.000 |
| Chatbot AI / bot tự động hóa | $1.500 – $4.000 |

Đây là khoảng giá khởi điểm thật, không phải kiểu "liên hệ để báo giá". Bạn nằm ở đâu trong khoảng đó phụ thuộc vào ba yếu tố.

## Điều gì làm giá tăng hay giảm

- **Phạm vi** — số màn hình và phân quyền người dùng. Hai vai trò với năm màn hình rẻ hơn nhiều so với mười vai trò và bốn mươi màn hình.
- **Tích hợp** — mỗi hệ thống bên ngoài (CRM, ERP, cổng thanh toán) cần kết nối đều thêm thời gian phát triển và kiểm thử.
- **Tình huống phức tạp** — những trường hợp ít gặp nhưng có thật mà phần mềm buộc phải xử lý đúng. Đây chính là chỗ khiến dự án "đơn giản" âm thầm phình to.

## Một ví dụ tính giá thật

Giả sử bạn cần công cụ báo giá cho đội sales: một configurator khoảng 6 màn hình, một vai trò quản trị, và một tích hợp CRM. Nó nằm gọn trong nhóm app nhỏ **$3.000 – $7.000** — gần mức thấp nếu quy tắc tính giá gọn gàng, cao hơn nếu nhiều ngoại lệ.

> Chúng tôi không chỉ viết code. Chúng tôi số hóa logic vận hành của doanh nghiệp bạn.

Muốn một con số chính xác cho dự án của mình? [Đặt lịch tư vấn miễn phí 15 phút](/vi#contact) — chúng tôi sẽ ước lượng ngay tại chỗ cùng bạn.
$md$
)
on conflict (slug) do nothing;
