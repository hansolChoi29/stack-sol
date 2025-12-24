import { HomeContent } from "./_components/HomeContent";
const LINES = [
  "수많은 트러블슈팅을 마주했습니다.",
  "하지만 문제를 해결하는 것보다",
  "기록하고 구조화하는 일이 더 어려웠습니다.",
];
export default function Home() {
  return (
    <main>
      <section className="hero-shell min-h-[100dvh] flex items-center justify-center px-6">
        <div className="relative w-full max-w-5xl">
          <div className="hero-glow" aria-hidden="true" />

          <div className="mx-auto max-w-4xl text-center">
            <p className="hero-kicker">
              Troubleshooting Platform
              <span className="hero-dot" />
              Portfolio
            </p>

            <h1 className="mt-6 font-coraboard hero-title">
              {LINES.map((t, i) => (
                <span key={t} className={`block hero-line delay-${i + 1}`}>
                  {t}
                </span>
              ))}
              <span className="block mt-5 hero-line delay-4">
                <span className="brand">TroubleShooting</span> Web Platform
              </span>
            </h1>

            <p className="mt-6 hero-sub hero-line delay-5">
              해결로 끝내지 않고, 재사용 가능한 기록으로 남긴다.
            </p>

            {/* CTA 버튼 */}
            <div className="mt-10 flex items-center justify-center gap-3 hero-line delay-6">
              <a href="#projects" className="btn-primary">
                Explore projects
              </a>
              <a href="/coreboard" className="btn-ghost">
                Start with Coreboard →
              </a>
            </div>

            <div className="mt-12 hero-scroll hero-line delay-7">scroll</div>
          </div>
        </div>
      </section>
      <div id="projects">
        <HomeContent />
      </div>
    </main>
  );
}
