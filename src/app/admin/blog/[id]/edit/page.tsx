import { notFound } from "next/navigation";
import PostEditor from "@/components/admin/PostEditor";
import { adminGetPost } from "@/lib/supabaseAdmin";

export const dynamic = "force-dynamic";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await adminGetPost(id);
  if (!post) notFound();

  return <PostEditor post={post} />;
}
