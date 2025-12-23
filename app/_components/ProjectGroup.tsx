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
    <article className="project-group ">
      <h2 className="project-title">{title}</h2>
      <nav className="project-links">
        {projects.map((p) => (
          <Link key={p.href} href={p.href}>
            {p.label}
          </Link>
        ))}
      </nav>
    </article>
  );
}
