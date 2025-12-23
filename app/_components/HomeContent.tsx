import { ProjectGroup } from "./ProjectGroup";

export function HomeContent() {
  return (
    <section className="home-shell font-coraboard">
      <ProjectGroup
        title="backend"
        projects={[
          { label: "Coreboard", href: "/coreboard" },
          { label: "Momentix", href: "/momentix" },
        ]}
      />

      <ProjectGroup
        title="frontend"
        projects={[
          { label: "Camkeep", href: "/camkeep" },
          { label: "Dogo", href: "/dogo" },
        ]}
      />
    </section>
  );
}
