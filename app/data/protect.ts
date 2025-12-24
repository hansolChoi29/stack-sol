export type Post = {
  id: number;
  title: string;
  author: string;
  status: "트러블슈팅" | "성능 개선";
  content: string;
};

export const CAMKEEPPOSTS: Post[] = [
  {
    id: 1,
    title: "JWT 인터셉터 예외 처리",
    author: "한솔",
    status: "트러블슈팅",
    content: `JWT 인터셉터 예외 처리JWT 인터셉터 예외 처리JWT 인터셉터 예외 처리JWT 인터셉터 예외 처리JWT 인터셉터 예외 처리JWT 인터셉터 예외 처리JWT 인터셉터 예외 처리JWT 인터셉터 예외 처리JWT 인터셉터 예외 처리JWT 인터셉터 예외 처리JWT 인터셉터 예외 처리JWT 인터셉터 예외 처리JWT 인터셉터 예외 처리JWT 인터셉터 예외 처리JWT 인터셉터 예외 처리JWT 인터셉터 예외 처리JWT 인터셉터 예외 처리JWT 인터셉터 예외 처리JWT 인터셉터 예외 처리JWT 인터셉터 예외 처리JWT 인터셉터 예외 처리JWT 인터셉터 예외 처리JWT 인터셉터 예외 처리JWT 인터셉터 예외 처리`,
  },
  {
    id: 2,
    title: "포트폴리오 구조 안내",
    author: "한솔",
    status: "성능 개선",
    content: `포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내포트폴리오 구조 안내`,
  },
  {
    id: 3,
    title: "JWT 인터셉터 예외 처리",
    author: "한솔",
    status: "트러블슈팅",
    content: `상세 내상세 내상세 내상세 내상세 내상세 내용...`,
  },
  {
    id: 4,
    title: "포트폴리오 구조 안내",
    author: "한솔",
    status: "성능 개선",
    content: `상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내.`,
  },
];

export const COREBOARDPOSTS: Post[] = [
  {
    id: 1,
    title: "TestContainers docker 8초 -> 5초",
    author: "한솔",
    status: "성능 개선",
    content: `TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초TestContainers docker 8초 -> 5초`,
  },
  {
    id: 2,
    title: "포트폴리오 구조 안내",
    author: "한솔",
    status: "트러블슈팅",
    content: `상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내.`,
  },
  {
    id: 3,
    title: "TestContainers docker 8초 -> 5초",
    author: "한솔",
    status: "성능 개선",
    content: `상세 내상세 내상세 내상세 내상세 내상세 내용...`,
  },
  {
    id: 4,
    title: "포트폴리오 구조 안내",
    author: "한솔",
    status: "트러블슈팅",
    content: `상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내.`,
  },
  {
    id: 5,
    title: "TestContainers docker 8초 -> 5초",
    author: "한솔",
    status: "성능 개선",
    content: `상세 내상세 내상세 내상세 내상세 내상세 내용...`,
  },
  {
    id: 6,
    title: "포트폴리오 구조 안내",
    author: "한솔",
    status: "트러블슈팅",
    content: `상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내.`,
  },
];

export const MOMENTIXPOSTS: Post[] = [
  {
    id: 1,
    title: "CICD",
    author: "한솔",
    status: "성능 개선",
    content: `상세 내상세 내상세 내상세 내상세 내상세 내용...`,
  },
  {
    id: 2,
    title: "이메일 인증",
    author: "한솔",
    status: "트러블슈팅",
    content: `상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내.`,
  },
];

export const DGOOPOSTS: Post[] = [
  {
    id: 1,
    title: "소셜로그인 메타데이터",
    author: "한솔",
    status: "성능 개선",
    content: `소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터`,
  },
  {
    id: 2,
    title: "이메일 인증",
    author: "한솔",
    status: "트러블슈팅",
    content: `이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증`,
  },
  {
    id: 3,
    title: "이메일 인증",
    author: "한솔",
    status: "트러블슈팅",
    content: `상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내.`,
  },
  {
    id: 4,
    title: "소셜로그인 메타데이터",
    author: "한솔",
    status: "성능 개선",
    content: `소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터소셜로그인 메타데이터`,
  },
  {
    id: 5,
    title: "이메일 인증",
    author: "한솔",
    status: "트러블슈팅",
    content: `상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내.`,
  },
  {
    id: 6,
    title: "이메일 인증",
    author: "한솔",
    status: "트러블슈팅",
    content: `이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증이메일 인증`,
  },
];
