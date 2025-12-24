import Link from "next/link";

interface Project {
  label: string;
  href: string;
}

export function ProjectGroup({
  title,
  projects,
}: {
  title: string;
  projects: Project[];
}) {
  return (
    <article className="w-full max-w-4xl">
      <h2 className="text-center font-coraboard text-5xl sm:text-6xl text-white/90">
        {title}
      </h2>

      <nav className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5
                       hover:bg-white/10 hover:border-white/20 transition
                       backdrop-blur"
          >
            <div className="text-xl font-semibold">{p.label}</div>
            <div className="mt-2 text-sm text-white/55">View details →</div>
          </Link>
        ))}
      </nav>
    </article>
  );
}
