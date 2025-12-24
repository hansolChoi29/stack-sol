"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { PROJECT_META } from "../data/Intro";
import { getSlugTopFromPath } from "../lib/utils";

export default function TopNav() {
  const pathname = usePathname();
  const slug = useMemo(() => getSlugTopFromPath(pathname), [pathname]);
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
