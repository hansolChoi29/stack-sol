"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const PROJECTS = [
  { slug: "coreboard", label: "CoreBoard" },
  { slug: "momentix", label: "Momentix" },
  { slug: "camkeep", label: "Camkeep" },
  { slug: "dogo", label: "DoGo" },
] as const;

// Recored<K,V> :키가 K인 객체이고, 값은 V다
const NAV_THEME: Record<
  (typeof PROJECTS)[number]["slug"], // PROJECTS 배열에서 slug만 뽑아오겠다, number는 배열의 원소 하나 타입
  {
    bg: string;
    fg: string;
    muted: string;
    activeBg: string;
    border: string;
  }
> = {
  camkeep: {
    bg: "#578E7E",
    fg: "#FFFAEC",
    muted: "rgba(255,250,236,0.70)",
    activeBg: "rgba(236, 255, 243, 0.14)",
    border: "#578E7E",
  },
  dogo: {
    bg: "#221A1A",
    fg: "#EEC18D",
    muted: "rgba(238,193,141,0.70)",
    activeBg: "rgba(238,193,141,0.14)",
    border: "#221A1A",
  },
  momentix: {
    bg: "#241E7A",
    fg: "#FFFFFF",
    muted: "rgba(255,255,255,0.70)",
    activeBg: "rgba(255,255,255,0.14)",
    border: "#241E7A",
  },
  coreboard: {
    bg: "#0A008F",
    fg: "#8C84F8",
    muted: "rgba(123, 114, 250, 0.816)",
    activeBg: "rgba(173, 167, 255, 0.14)",
    border: "#0A008F",
  },
};

function getSlugFromPath(pathname: string) {
  // pathname: "/momentix", "/momentix/abc" etc
  const seg = pathname.split("/")[1] ?? "";
  if (
    seg === "coreboard" ||
    seg === "momentix" ||
    seg === "camkeep" ||
    seg === "dogo"
  )
    return seg;
  return null;
}

export default function SideNav() {
  const pathname = usePathname();

  const slug = getSlugFromPath(pathname);
  // slug가 null이면(이상한 경로) 그냥 기본값
  const theme = slug ? NAV_THEME[slug] : NAV_THEME.coreboard;

  return (
    <aside
      className="sticky top-0 h-[100dvh] w-[110px] flex flex-col items-center gap-3.5 px-[10px] py-[18px] backdrop-blur"
      style={{
        backgroundColor: theme.bg,
        color: theme.fg,
        borderRight: `1px solid ${theme.border}`,
      }}
    >
      <Link
        href="/"
        className="mb-2 font-extrabold tracking-[1px]"
        style={{ color: theme.fg }}
      >
        STACK
      </Link>

      <div className="flex flex-col gap-3">
        {PROJECTS.map((p) => {
          const active =
            pathname === `/${p.slug}` || pathname.startsWith(`/${p.slug}/`);

          return (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className={[
                "text-[12px] px-[7px] py-[10px] rounded-[12px] no-underline",
                " [writing-mode:vertical-rl] rotate-180",
                active ? "" : "",
              ].join(" ")}
              style={{
                color: active ? theme.fg : theme.muted,
                backgroundColor: active ? theme.activeBg : "transparent",
              }}
            >
              {p.label}
            </Link>
          );
        })}
      </div>

      <div className="mt-auto text-[11px]" style={{ color: theme.muted }}>
        v0.1
      </div>
    </aside>
  );
}
