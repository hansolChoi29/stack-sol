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
    content: `상세 내상세 내상세 내상세 내상세 내상세 내용...`,
  },
  {
    id: 2,
    title: "공지: 포트폴리오 구조 안내",
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
    content: `상세 내상세 내상세 내상세 내상세 내상세 내용...`,
  },
  {
    id: 2,
    title: "공지: 포트폴리오 구조 안내",
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
