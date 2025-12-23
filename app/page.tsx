"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

// 페이지 전환 시 Link가 기본임
// useRouter를 사용하여 프로그래밍 방식으로 페이지 전환하는 건 코드 로직 타고 조건/처리 후 이동할 때 유용
// 예시 : 로그인 성공하여 보내기,  제출 후 이동 등 //
export default function Home() {
  return (
    <section className="min-h-dvh font-coraboard text-white bg-[#8C84F8] flex flex-col gap-24 p-8 justify-center items-center">
      <article>
        <div className="flex flex-col gap-12">
          <div className="flex justify-center items-center text-6xl">
            backend
          </div>
          <div className="flex gap-14 text-2xl text-black">
            <Link className="hover:text-2xl" href="/coreboard">
              Coreboard
            </Link>
            <Link href="/momentix">Momentix</Link>
          </div>
        </div>
      </article>
      <article>
        <div className="flex flex-col gap-12">
          <div className="flex justify-center items-center text-6xl">
            frontend
          </div>
          <div className="flex gap-14 text-2xl text-black">
            <Link href="/camkeep">Camkeep</Link>
            <Link href="/dogo">Dogo</Link>
          </div>
        </div>
      </article>
      <article></article>
    </section>
  );
}
