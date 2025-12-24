"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_THEME, PROJECTS } from "../data/Intro";
import { getSlugSideFromPath } from "../lib/utils";

export default function SideNav() {
  const pathname = usePathname();

  const slug = getSlugSideFromPath(pathname);
  // slug가 null이면(이상한 경로) 그냥 기본값
  const theme = slug ? NAV_THEME[slug] : NAV_THEME.coreboard;

  return (
    <aside
      className="fixed left-0 top-0 z-50 h-screen w-[110px] flex flex-col items-center gap-3.5 px-[10px] py-[18px] backdrop-blur"
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
