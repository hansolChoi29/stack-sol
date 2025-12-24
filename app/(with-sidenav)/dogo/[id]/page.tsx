import { COREBOARDPOSTS, DGOOPOSTS } from "@/app/data/protect";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function DoGoDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const post = DGOOPOSTS.find((p) => String(p.id) === id);
  if (!post) return notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-10 space-y-6 bg-white">
      <header className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge
            variant={post.status === "트러블슈팅" ? "default" : "secondary"}
            className={
              post.status === "트러블슈팅" ? "bg-[#221A1A] text-black" : ""
            }
          >
            {post.status}
          </Badge>
        </div>

        <h1 className="text-3xl font-semibold text-black">{post.title}</h1>
      </header>

      <article className="rounded-xl border border-black/10 bg-white p-6 text-black whitespace-pre-wrap leading-7">
        {post.content}
      </article>

      <Link
        href="/dogo"
        className="border p-2 text-sm rounded-2xl hover:bg-gray-200"
      >
        뒤로가기
      </Link>
    </main>
  );
}
