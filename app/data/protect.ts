// posts.ts

export type Project = "CAMKEEP" | "COREBOARD" | "MOMENTIX" | "DGOO";
export type PostType = "TROUBLESHOOTING" | "PERFORMANCE";

export const POST_TYPE_LABEL: Record<PostType, "트러블슈팅" | "성능 개선"> = {
  TROUBLESHOOTING: "트러블슈팅",
  PERFORMANCE: "성능 개선",
} as const;

export type Post = {
  /** 전역 유니크 */
  id: string; // 예: "coreboard-014"
  /** 라우팅 유니크 */
  slug: string; // 예: "layer-responsibility-pr14"
  project: Project;

  title: string;
  author: string;
  type: PostType;

  /** 리스트 카드용 짧은 요약 */
  summary: string;

  /** 상세 렌더링용(없어도 됨) */
  problem?: string;
  solution?: string;
  result?: string;

  /** UI가 content만 쓰고 있으면 여기만 렌더해도 됨 */
  content: string;

  /** 선택: PR/링크/태그 */
  refs?: {
    pr?: number;
    repo?: "CoreBoard" | "Momentix" | "Dgoo" | "Camkeep";
    url?: string;
  };
  tags?: string[];
};

const AUTHOR = "한솔" as const;

const makePost = (p: Omit<Post, "author"> & { author?: string }): Post => ({
  author: p.author ?? AUTHOR,
  ...p,
});

const joinSections = (s: {
  summary: string;
  problem?: string;
  solution?: string;
  result?: string;
}) => {
  const parts = [
    `요약: ${s.summary}`,
    s.problem ? `\n문제:\n${s.problem}` : "",
    s.solution ? `\n해결:\n${s.solution}` : "",
    s.result ? `\n결과:\n${s.result}` : "",
  ].filter(Boolean);

  return parts.join("\n");
};

export const POSTS: Post[] = [
  // ---------------- CAMKEEP ----------------
  makePost({
    id: "camkeep-001",
    slug: "jwt-interceptor-exception",
    project: "CAMKEEP",
    title: "JWT 인터셉터 예외 처리",
    type: "TROUBLESHOOTING",
    summary: "JWT 인증 예외 케이스를 분리하고, 에러 응답 일관성을 확보했다.",
    content: "JWT 인증 예외 케이스를 분리하고, 에러 응답 일관성을 확보했다.",
    tags: ["auth", "interceptor"],
  }),

  // ---------------- COREBOARD (기존 성능/더미 ) ----------------
  makePost({
    id: "coreboard-001",
    slug: "testcontainers-8s-to-5s",
    project: "COREBOARD",
    title: "TestContainers docker 8초 -> 5초",
    type: "PERFORMANCE",
    summary:
      "테스트 컨테이너 구동 시간을 최적화해 전체 테스트 시간을 단축했다.",
    content:
      "테스트 컨테이너 구동 시간을 최적화해 전체 테스트 시간을 단축했다.",
    tags: ["testcontainers", "ci"],
  }),

  // ---------------- COREBOARD (진짜 글 4개) ----------------
  makePost({
    id: "coreboard-014",
    slug: "layer-responsibility-pr14",
    project: "COREBOARD",
    title: "레이어 책임 분리 + BoardController 테스트 보강 (PR #14)",
    type: "TROUBLESHOOTING",
    summary:
      "Service의 DTO 가공 책임을 제거해 계층을 정리하고, update/delete 예외 테스트(403/404)를 추가해 신뢰도를 올렸다.",
    problem:
      "- Service 레이어가 DTO를 감싸/가공하는 로직까지 담당해 레이어 책임이 섞였다.\n- update/delete에서 403/404 예외 시나리오 테스트가 부족했다.\n- HTTP 멱등성 관점에서 로직/응답 기준 정리가 필요했다.",
    solution:
      "- Service에서 DTO 포장/가공을 제거하고, 도메인 규칙/검증/처리에 집중하도록 정리했다.\n- 권한 없음/리소스 없음(403/404) 예외 흐름 테스트를 추가했다.\n- 멱등성 관점에서 반복 요청 시 기대 동작/응답을 정비했다.",
    result:
      "- 레이어 경계가 선명해졌고, 실패 시나리오까지 테스트로 고정되어 회귀 위험이 줄었다.",
    content: joinSections({
      summary:
        "Service의 DTO 가공 책임을 제거해 계층을 정리하고, update/delete 예외 테스트(403/404)를 추가해 신뢰도를 올렸다.",
      problem:
        "- Service 레이어가 DTO를 감싸/가공하는 로직까지 담당해 레이어 책임이 섞였다.\n- update/delete에서 403/404 예외 시나리오 테스트가 부족했다.\n- HTTP 멱등성 관점에서 로직/응답 기준 정리가 필요했다.",
      solution:
        "- Service에서 DTO 포장/가공을 제거하고, 도메인 규칙/검증/처리에 집중하도록 정리했다.\n- 권한 없음/리소스 없음(403/404) 예외 흐름 테스트를 추가했다.\n- 멱등성 관점에서 반복 요청 시 기대 동작/응답을 정비했다.",
      result:
        "- 레이어 경계가 선명해졌고, 실패 시나리오까지 테스트로 고정되어 회귀 위험이 줄었다.",
    }),
    refs: { pr: 14, repo: "CoreBoard" },
    tags: ["layering", "test", "idempotency"],
  }),

  makePost({
    id: "coreboard-018",
    slug: "service-coverage-dto-separation-pr18",
    project: "COREBOARD",
    title: "Board Service 커버리지 확보 + DTO 역할 분리 (PR #18)",
    type: "TROUBLESHOOTING",
    summary:
      "DTO를 request/command/result/response로 분리하고, API별 실패 기준(403/404/409) 중심으로 테스트를 확장했다.",
    problem:
      "- Service단에서 DTO 역할이 섞여 ‘입력-처리-출력’ 경계가 흐려졌다.\n- 주요 API의 에러 케이스(403/404/409) 기준 테스트가 부족했다.",
    solution:
      "- DTO를 역할별로 분리(request/command/result/response)해 책임을 정리했다.\n- create(404/409), findOne(404), update/delete(403) 기준으로 실패 케이스 테스트를 보강했다.",
    result:
      "- 예외 정책이 테스트로 고정되고, Service 코드의 가독성과 유지보수성이 개선됐다.",
    content: joinSections({
      summary:
        "DTO를 request/command/result/response로 분리하고, API별 실패 기준(403/404/409) 중심으로 테스트를 확장했다.",
      problem:
        "- Service단에서 DTO 역할이 섞여 ‘입력-처리-출력’ 경계가 흐려졌다.\n- 주요 API의 에러 케이스(403/404/409) 기준 테스트가 부족했다.",
      solution:
        "- DTO를 역할별로 분리(request/command/result/response)해 책임을 정리했다.\n- create(404/409), findOne(404), update/delete(403) 기준으로 실패 케이스 테스트를 보강했다.",
      result:
        "- 예외 정책이 테스트로 고정되고, Service 코드의 가독성과 유지보수성이 개선됐다.",
    }),
    refs: { pr: 18, repo: "CoreBoard" },
    tags: ["dto", "service-test", "error-policy"],
  }),

  makePost({
    id: "coreboard-032",
    slug: "xss-block-pr32",
    project: "COREBOARD",
    title: "XSS: 클라이언트 스크립트 실행 차단 (PR #32)",
    type: "TROUBLESHOOTING",
    summary:
      "입력값 반영 흐름에서 XSS를 차단하고, 방어 동작을 테스트로 검증했다.",
    problem:
      "- 사용자 입력이 화면/응답에 그대로 반영되면 악성 스크립트가 브라우저에서 실행될 수 있다.",
    solution:
      "- 입력/출력 경로에 XSS 방어 처리를 적용했다.\n- 방어 동작을 확인하는 테스트(“xss test success”)를 추가했다.",
    result:
      "- 보안 요구사항이 테스트로 고정되어, 회귀로 인한 취약점 재발 가능성이 줄었다.",
    content: joinSections({
      summary:
        "입력값 반영 흐름에서 XSS를 차단하고, 방어 동작을 테스트로 검증했다.",
      problem:
        "- 사용자 입력이 화면/응답에 그대로 반영되면 악성 스크립트가 브라우저에서 실행될 수 있다.",
      solution:
        "- 입력/출력 경로에 XSS 방어 처리를 적용했다.\n- 방어 동작을 확인하는 테스트(“xss test success”)를 추가했다.",
      result:
        "- 보안 요구사항이 테스트로 고정되어, 회귀로 인한 취약점 재발 가능성이 줄었다.",
    }),
    refs: { pr: 32, repo: "CoreBoard" },
    tags: ["security", "xss", "test"],
  }),

  makePost({
    id: "coreboard-033",
    slug: "swagger-static-resource-pr33",
    project: "COREBOARD",
    title: "Swagger UI는 정적 리소스: 인터셉터 오해 정리 (PR #33)",
    type: "TROUBLESHOOTING",
    summary:
      "Swagger UI는 컨트롤러가 아니라 정적 리소스이며, 인터셉터 적용 범위를 혼동하지 않도록 정리했다.",
    problem:
      "- /swagger-ui/index.html 을 컨트롤러 요청으로 오해하면 인터셉터/인가 충돌로 착각하기 쉽다.",
    solution:
      "- Swagger UI는 정적 리소스(HTML)이고 Spring이 파일을 내려준다는 점을 정리했다.\n- 인터셉터는 컨트롤러 핸들러 요청에만 동작한다는 결론을 문서화했다.\n- 단, Spring Security 사용 시 정적 리소스도 필터 체인에서 잡힐 수 있어 예외 설정이 필요하다는 조건을 함께 명시했다.",
    result:
      "- 불필요한 디버깅/오해를 줄이고 인증/인가 적용 범위를 정확히 이해하게 됐다.",
    content: joinSections({
      summary:
        "Swagger UI는 컨트롤러가 아니라 정적 리소스이며, 인터셉터 적용 범위를 혼동하지 않도록 정리했다.",
      problem:
        "- /swagger-ui/index.html 을 컨트롤러 요청으로 오해하면 인터셉터/인가 충돌로 착각하기 쉽다.",
      solution:
        "- Swagger UI는 정적 리소스(HTML)이고 Spring이 파일을 내려준다는 점을 정리했다.\n- 인터셉터는 컨트롤러 핸들러 요청에만 동작한다는 결론을 문서화했다.\n- 단, Spring Security 사용 시 정적 리소스도 필터 체인에서 잡힐 수 있어 예외 설정이 필요하다는 조건을 함께 명시했다.",
      result:
        "- 불필요한 디버깅/오해를 줄이고 인증/인가 적용 범위를 정확히 이해하게 됐다.",
    }),
    refs: { pr: 33, repo: "CoreBoard" },
    tags: ["swagger", "static-resource", "interceptor"],
  }),
];

// ✅ 프로젝트별로 렌더링할 때는 filter로 뽑아쓰기
export const getPostsByProject = (project: Project) =>
  POSTS.filter((p) => p.project === project);

export const CAMKEEPPOSTS = getPostsByProject("CAMKEEP");
export const COREBOARDPOSTS = getPostsByProject("COREBOARD");
export const MOMENTIXPOSTS = getPostsByProject("MOMENTIX");
export const DGOOPOSTS = getPostsByProject("DGOO");

// ✅ 뱃지(한글 라벨) 필요하면 이렇게 쓰기
export const getPostTypeLabel = (type: PostType) => POST_TYPE_LABEL[type];
