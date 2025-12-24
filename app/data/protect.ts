export type CamkeepPost = {
  id: number;
  title: string;
  author: string;
  createdAt: string;
  views: number;
  status: "트러블슈팅" | "일반";
  content: string;
};

export const CAMKEEPPOSTS: CamkeepPost[] = [
  {
    id: 1,
    title: "JWT 인터셉터 예외 처리",
    author: "한솔",
    createdAt: "2025-12-24",
    views: 91,
    status: "트러블슈팅",
    content: `상세 내상세 내상세 내상세 내상세 내상세 내용...`,
  },
  {
    id: 2,
    title: "공지: 포트폴리오 구조 안내",
    author: "한솔",
    createdAt: "2025-12-23",
    views: 312,
    status: "트러블슈팅",
    content: `상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내상세 내.`,
  },
];
