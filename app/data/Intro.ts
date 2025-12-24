const LINES = [
  "에러를 마주할 때마다",
  "",
  "문제를 해결하는 것보다",
  "기록하고 구조화하는 일이 더 어려웠습니다.",
  "",
];
const PROJECTS = [
  { slug: "coreboard", label: "CoreBoard" },
  { slug: "momentix", label: "Momentix" },
  { slug: "camkeep", label: "Camkeep" },
  { slug: "dogo", label: "DoGo" },
] as const;

export type Slug = "coreboard" | "momentix" | "camkeep" | "dogo";

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

// Recored<K,V> :키가 K인 객체이고, 값은 V다
const NAV_THEME: Record<
  (typeof PROJECTS)[number]["slug"], // PROJECTS 배열에서 slug만 뽑아오겠다, number는 배열의 원소 하나 타입
  {
    bg: string;
    fg: string;
    muted: string;
    activeBg: string;
    border: string;
  }
> = {
  camkeep: {
    bg: "#578E7E",
    fg: "#FFFAEC",
    muted: "rgba(255,250,236,0.70)",
    activeBg: "rgba(236, 255, 243, 0.14)",
    border: "#578E7E",
  },
  dogo: {
    bg: "#221A1A",
    fg: "#EEC18D",
    muted: "rgba(238,193,141,0.70)",
    activeBg: "rgba(238,193,141,0.14)",
    border: "#221A1A",
  },
  momentix: {
    bg: "#241E7A",
    fg: "#FFFFFF",
    muted: "rgba(255,255,255,0.70)",
    activeBg: "rgba(255,255,255,0.14)",
    border: "#241E7A",
  },
  coreboard: {
    bg: "#0A008F",
    fg: "#8C84F8",
    muted: "rgba(123, 114, 250, 0.816)",
    activeBg: "rgba(173, 167, 255, 0.14)",
    border: "#0A008F",
  },
};
export { LINES, PROJECTS, PROJECT_META, NAV_THEME };
