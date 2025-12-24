"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type Slug = "coreboard" | "momentix" | "camkeep" | "dogo";

const PROJECT_META: Record<
  Slug,
  {
    name: string;
    stack: string[];
    theme: {
      bg: string;
      fg: string;
      muted: string;
      border: string;
      chipBg: string;
    };
    features: { title: string; ahrwjr: string; bullets: string[] };
  }
> = {
  camkeep: {
    name: "Camkeep",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    theme: {
      bg: "#578E7E",
      fg: "#FFFAEC",
      muted: "rgba(255,250,236,0.75)",
      border: "rgba(255,250,236,0.18)",
      chipBg: "rgba(255,250,236,0.14)",
    },
    features: {
      title: "Camkeep (캠핑 준비 플랫폼)",
      ahrwjr:
        "캠핑을 하다보면 준비는 번거롭고 정보는 흩어져 있고 한 곳에서 준비할 수 있도록 만든 프로젝트",
      bullets: [
        "캠핑 준비 흐름 정리",
        "정보를 한 곳에 구조화",
        "사용 시나리오 중심 UI",
      ],
    },
  },
  dogo: {
    name: "Dogo",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    theme: {
      bg: "#221A1A",
      fg: "#EEC18D",
      muted: "rgba(238,193,141,0.78)",
      border: "rgba(238,193,141,0.18)",
      chipBg: "rgba(238,193,141,0.14)",
    },
    features: {
      title: "Dogo (호텔 예약 중개 플랫폼)",
      ahrwjr:
        "당신의 특별한 하루를 더 특별하게 만들어줄 최고의 선택 호텔 예약 중개 플랫폼",
      bullets: [
        "호텔/예약 도메인 모델링",
        "사용자 동선 기반 구성",
        "확장 가능한 구조",
      ],
    },
  },
  momentix: {
    name: "Momentix",
    stack: ["Spring Boot", "MySQL", "Redis", "AWS EC2"],
    theme: {
      bg: "#241E7A",
      fg: "#FFFFFF",
      muted: "rgba(255,255,255,0.75)",
      border: "rgba(255,255,255,0.18)",
      chipBg: "rgba(255,255,255,0.14)",
    },
    features: {
      title: "Momentix (공연 티케팅 플랫폼)",
      ahrwjr:
        "공연 티케팅 플랫폼으로, 사용자 경험과 안정성을 중점으로 설계되었습니다.",
      bullets: ["이메일 인증 흐름", "CI/CD 자동 배포", "동시성 고려 설계"],
    },
  },
  coreboard: {
    name: "CoreBoard ",
    stack: ["Spring Boot", "JWT", "Test", "MySQL"],
    theme: {
      bg: "#0A008F",
      fg: "#8C84F8",
      muted: "rgba(140,132,248,0.78)",
      border: "rgba(140,132,248,0.20)",
      chipBg: "rgba(140,132,248,0.14)",
    },
    features: {
      title: "CoreBoard (미니 게시판)",
      ahrwjr:
        "이 프로젝트의 목적으로는 기능 구현이 아니라 인증 인가, 요청 흐름, 책임 분리, 테스트 가능성 같은 백엔드의 코어를 직접 설계하고 검증하는 데 있다",
      bullets: [
        " Lombok not used - 객체 구조와 책임을 명확히 이해하기 위해 ",
        "Spring Security not used - 인증 / 인가 흐름을 직접 설계하고 통제하기 위해",
      ],
    },
  },
};

function getSlugFromPath(pathname: string): Slug | null {
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

export default function TopNav() {
  const pathname = usePathname();
  const slug = useMemo(() => getSlugFromPath(pathname), [pathname]);
  const [open, setOpen] = useState(false);

  if (!slug) return null;

  const meta = PROJECT_META[slug];

  return (
    <>
      {/* TopBar */}
      <header
        className="sticky top-0 z-40 border-b backdrop-blur"
        style={{
          background: meta.theme.bg,
          color: meta.theme.fg,
          borderColor: meta.theme.border,
        }}
      >
        <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-6 py-4">
          {/* Left: Title */}
          <div className="min-w-0">
            <div className="text-2xl font-extrabold tracking-tight">
              {meta.name}
            </div>
          </div>

          {/* Right: Stack + Button */}
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 md:flex">
              {meta.stack.slice(0, 6).map((s) => (
                <span
                  key={s}
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    background: meta.theme.chipBg,
                    color: meta.theme.fg,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            <button
              onClick={() => setOpen(true)}
              className="rounded-full px-4 py-2 text-sm font-bold transition hover:opacity-90"
              style={{
                background: meta.theme.chipBg,
                color: meta.theme.fg,
                border: `1px solid ${meta.theme.border}`,
              }}
            >
              특징
            </button>
          </div>
        </div>
      </header>

      {/* Modal */}
      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* overlay */}
          <button
            className="absolute inset-0 bg-black/45"
            onClick={() => setOpen(false)}
            aria-label="close"
          />

          {/* modal */}
          <div
            className="relative w-full max-w-lg rounded-2xl border bg-white p-6 shadow-2xl"
            style={{ borderColor: meta.theme.border }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-extrabold text-zinc-900">
                  {meta.features.title}
                </div>
                <div className="mt-1 text-sm text-zinc-600">
                  {meta.features.ahrwjr}
                </div>
              </div>
            </div>

            {/* 구분선 */}
            <div
              className="mt-4 h-px w-full"
              style={{ background: meta.theme.border }}
            />

            <ul className="mt-4 space-y-2">
              {meta.features.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-zinc-800">
                  <span style={{ color: meta.theme.fg }}>•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="rounded-full px-4 py-2 text-sm font-bold text-zinc-700 hover:bg-zinc-100"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
