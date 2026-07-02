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

-- Public storage bucket for blog images (cover + inline). Uploads go through
-- the local admin using the service role (which bypasses RLS); a public bucket
-- means the resulting URLs are readable by anyone. Safe to run repeatedly.
insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true)
on conflict (id) do nothing;

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
  'The Cost of Building a Custom Web App in 2026',
  'Our actual starting prices for web apps, custom systems and AI bots — plus exactly what moves a project up or down the range.',
  $md$Most tech agencies dodge this question. We don't — here are our actual starting prices for 2026.

## Our pricing, in plain numbers

| What you need | Typical investment |
| --- | --- |
| Landing page / Marketing site | from $800 |
| Small web app / Business tool / SaaS MVP | $3,000 – $7,000 |
| Custom system or Core platform | from $10,000 |
| AI chatbot / Automation agent | $1,500 – $4,000 |

These are real starting ranges, not a "contact us for a quote" bait. Where you land inside a range comes down to three specific things.

## What moves the price?

- **Scope** — the number of distinct screens and user roles. A system with two roles and five screens costs far less than a multi-tenant platform with forty screens.
- **Integrations** — every external system (CRM, ERP, payment gateways, AI APIs) you connect adds engineering and security testing time.
- **Edge cases** — the rare-but-real situations your business logic must handle flawlessly. This is exactly where "simple" projects quietly grow in complexity.

## A worked example

Say you need a visual product configurator for your sales team: about 6-8 screens, an admin dashboard, and a single CRM integration. That sits squarely in the **$3,000 – $7,000** small-app band — closer to the lower end if your pricing rules are clean, and higher if they're full of custom exceptions.

> We don't just write code. We digitize your business logic using modern stacks.

Want an exact number for your project? [Book a free 15-minute call](/#contact) and we'll scope it out with you on the spot.
$md$,
  'Chi phí xây dựng Web App tùy chỉnh năm 2026',
  'Bảng giá khởi điểm thật cho web app, hệ thống tùy chỉnh và bot AI — kèm đúng những yếu tố khiến dự án đắt hay rẻ hơn.',
  $md$Hầu hết các agency công nghệ đều né tránh câu hỏi này. TicoSystem thì không — dưới đây là các mức giá khởi điểm thực tế của chúng tôi trong năm 2026.

## Bảng giá, nói thẳng bằng con số

| Bạn cần gì | Mức đầu tư phổ biến |
| --- | --- |
| Landing page / Web giới thiệu | từ 5.000.000 VNĐ |
| Web app / Công cụ nghiệp vụ / SaaS MVP | 20.000.000 - 40.000.000 VNĐ |
| Hệ thống tùy chỉnh / Nền tảng lõi | từ 60.000.000 VNĐ |
| Chatbot AI / Trợ lý ảo tự động hóa | 15.000.000 – 30.000.000 VNĐ |

Đây là khoảng giá khởi điểm thật, không phải mồi nhử "liên hệ để báo giá". Việc dự án của bạn nằm ở đâu trong khoảng đó phụ thuộc vào ba yếu tố chính.

## Điều gì làm giá tăng hay giảm?

- **Quy mô (Scope)** — số lượng màn hình và phân quyền người dùng. Một hệ thống với hai vai trò quản lý sẽ tối ưu chi phí hơn rất nhiều so với một nền tảng đa tầng phức tạp với hàng chục màn hình.
- **Tích hợp (Integrations)** — mọi kết nối với hệ thống bên ngoài (CRM, ERP, cổng thanh toán, AI API) đều đòi hỏi thêm thời gian phát triển và kiểm thử bảo mật nghiêm ngặt.
- **Logic đặc thù (Edge cases)** — những tình huống nghiệp vụ hiếm gặp nhưng bắt buộc phần mềm phải xử lý chuẩn xác. Đây chính là yếu tố cốt lõi khiến các dự án tưởng chừng "đơn giản" lại âm thầm phình to.

## Một ví dụ tính giá thật

Giả sử bạn cần một công cụ cấu hình sản phẩm trực quan (visual configurator) cho đội ngũ sales: khoảng 6-8 màn hình, một vai trò quản trị viên, và tích hợp trực tiếp với hệ thống CRM. Dự án này sẽ nằm gọn trong nhóm web app nhỏ **20.000.000 - 40.000.000 VNĐ** — tiến về mức thấp nếu bộ quy tắc tính giá của bạn gọn gàng, và sẽ cao hơn nếu có quá nhiều tùy biến ngoại lệ.

> Chúng tôi không chỉ gõ code. Chúng tôi số hóa logic vận hành của doanh nghiệp bạn bằng những công nghệ hiện đại nhất.

Bạn muốn một con số chính xác cho dự án của mình? [Đặt lịch tư vấn miễn phí 15 phút](/vi#contact) — chúng ta sẽ cùng nhau bóc tách và ước lượng ngay tại chỗ.
$md$
)
on conflict (slug) do nothing;
