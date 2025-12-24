"use client";

import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { COREBOARDPOSTS } from "@/app/data/protect";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
export function CoreBoardContent() {
  const router = useRouter();
  const [q, setQ] = useState("");

  const rows = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return COREBOARDPOSTS;

    return COREBOARDPOSTS.filter((p) => {
      return (
        String(p.title ?? "")
          .toLowerCase()
          .includes(query) ||
        String(p.author ?? "")
          .toLowerCase()
          .includes(query) ||
        String(p.status ?? "")
          .toLowerCase()
          .includes(query)
      );
    });
  }, [q]);

  return (
    <section className="hero-shell min-h-[100dvh] bg-white text-[#FFC767]">
      <div className="mx-auto w-full max-w-6xl px-6 py-10 space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm text-black/60">
              트러블슈팅, 기록, 구조화한 내용을 모아두는 공간
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full sm:max-w-md">
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="제목/작성자/상태 검색"
              className="bg-white text-black border-black/15 focus-visible:ring-[#FFC767]"
            />
          </div>
          <div className="text-sm text-black/60">
            총 <span className="font-semibold text-black">{rows.length}</span>개
          </div>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-black/10 bg-white overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-black/[0.03]">
                <TableHead className="w-[80px] text-black/70">번호</TableHead>
                <TableHead className="text-black/70">제목</TableHead>
                <TableHead className="w-[140px] text-black/70">
                  작성자
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {rows.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="h-28 text-center text-black/60"
                  >
                    검색 결과가 없어요.
                  </TableCell>
                </TableRow>
              ) : (
                rows.map((r) => (
                  <TableRow
                    key={r.id}
                    onClick={() => router.push(`/coreboard/${r.id}`)}
                    className="cursor-pointer hover:bg-black/[0.03] transition-colors"
                  >
                    <TableCell className="text-black/70">{r.id}</TableCell>

                    <TableCell className="text-black">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{r.title}</span>
                        {r.status === "트러블슈팅" && (
                          <Badge className="bg-[#FFC767] text-black hover:opacity-90">
                            트러블슈팅
                          </Badge>
                        )}
                        {r.status === "성능 개선" && (
                          <Badge variant="secondary" className="text-black/80">
                            성능개선
                          </Badge>
                        )}
                      </div>

                      {/* optional: 미리보기 한 줄 */}
                      {r.content && (
                        <p className="mt-1 line-clamp-1 text-sm text-black/55">
                          {String(r.content)}
                        </p>
                      )}
                    </TableCell>

                    <TableCell className="text-black/70">{r.author}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
