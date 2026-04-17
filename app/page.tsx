"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  ShoppingBag,
  Utensils,
  UtensilsCrossed,
  Hotel,
  Camera,
  Plane,
  MapPin,
  Moon,
  Sun,
  Navigation,
  PersonStanding,
  Sailboat,
  ShoppingCart,
  BedDouble,
  Fish,
  Cloud,
  WavesLadder,
  PlaneLanding,
  BaggageClaim,
  PlaneTakeoff,
  Bus,
  Wallet,
  X,
} from "lucide-react";

// Custom Dolphin SVG Path (provided by User)
const DolphinIcon = ({
  size = 24,
  className = "",
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 1280 696"
    preserveAspectRatio="xMidYMid meet"
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      transform="translate(0.000000, 696.000000) scale(0.100000, -0.100000)"
      fill="currentColor"
      stroke="none"
    >
      <path d="M6429 6950 c-420 -38 -714 -201 -917 -510 -31 -47 -56 -86 -57 -88 -1 -1 -76 -9 -166 -17 -933 -85 -1771 -292 -2514 -620 -1167 -515 -1964 -1310 -2100 -2094 -9 -47 -15 -146 -15 -226 l0 -143 -71 -61 c-38 -34 -143 -116 -232 -183 -344 -261 -417 -372 -315 -484 11 -12 27 -37 36 -55 29 -57 64 -74 145 -73 126 1 282 51 627 201 515 224 535 231 975 353 418 116 760 193 1190 270 135 24 171 28 181 18 6 -7 63 -95 126 -195 342 -538 563 -759 858 -860 108 -37 263 -59 344 -49 l53 7 -49 82 c-123 203 -223 449 -268 662 -25 113 -37 377 -25 520 6 77 9 87 29 95 24 9 399 52 606 70 207 18 706 24 900 11 540 -36 871 -101 1715 -336 360 -101 387 -110 514 -174 323 -161 585 -373 1246 -1006 461 -441 633 -585 805 -674 47 -24 87 -45 89 -47 2 -2 -31 -40 -73 -85 -248 -264 -395 -546 -396 -761 0 -127 52 -258 161 -407 l62 -84 21 65 c39 119 128 208 289 289 43 22 164 74 270 115 228 90 327 140 385 193 l42 39 50 -24 c116 -56 190 -69 390 -69 183 1 187 1 435 53 138 28 297 59 355 67 204 29 416 15 584 -39 42 -13 76 -21 76 -17 0 4 -23 36 -51 72 -146 183 -304 304 -554 425 -251 121 -519 197 -1095 309 -190 37 -350 73 -356 79 -6 6 -44 90 -83 186 -333 805 -745 1544 -1189 2135 -230 305 -397 500 -667 774 -591 602 -1198 1039 -1956 1411 l-207 101 -30 68 c-40 89 -56 174 -50 268 7 102 41 186 133 322 39 58 74 112 79 119 8 14 -184 15 -335 2z" />
    </g>
  </svg>
);

const OkinawaTrip = () => {
  const [activeSection, setActiveSection] = useState("day1");
  const [isSticky, setIsSticky] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isCostModalOpen, setIsCostModalOpen] = useState(false);
  const navWrapperRef = useRef<HTMLDivElement>(null);

  const costs = [
    { item: "항공권", price: "3,295,550", note: "티웨이" },
    {
      item: "숙소",
      price: "2,510,554",
      note: "그랜드 머큐어 오키나와 케이프 잔파 리조트",
    },
    { item: "렌트카1", price: "298,700", note: "" },
    { item: "렌트카2", price: "298,700", note: "" },
    {
      item: "츄라우미 입장료",
      price: "110,000",
      note: "8인 기준 / 추후 구매(예약일로부터 28일 제약)",
    },
    { item: "글라스보트", price: "70,000", note: "8인 기준" },
    { item: "만좌모", price: "6,600", note: "8인 기준" },
    { item: "주유비", price: "100,000", note: "대당 약 5만원 / 2대 예상" },
    { item: "합계", price: "6,690,104", note: "", isTotal: true },
    { item: "인당비용", price: "836,263", note: "", isPerPerson: true },
  ];

  useEffect(() => {
    // 최초 접속 시 테마 확인 (저장된 값이 없으면 기본 '라이트 모드')
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  };

  // 여행 일정 데이터
  const itinerary = [
    {
      id: "day1",
      title: "1일차",
      date: "5월 21일 (목) — 안녕? 오키나와",
      schedules: [
        {
          time: "11:00",
          title: "인천공항에서 출발(TW0281)",
          desc: "티웨이항공 TW0281편으로 인천공항 출발",
          icon: <PlaneTakeoff size={16} />,
          travelTime: "비행 약 2시간 35분",
        },
        {
          time: "13:35",
          title: "나하 공항 도착 및 입국 수속",
          desc: "나하 공항 도착 후 입국 수속 후 렌트카 버스로 탑승",
          icon: <BaggageClaim size={16} />,
          travelTime: "렌트카 회사 셔틀버스로 약 25분 (공항 → 오달렌트카)",
        },
        {
          time: "15:00",
          title: "렌터카 수령",
          desc: "오달렌트카 토미구스쿠 자야스 지점에서 차량 2대 인수",
          icon: <Car size={16} />,
          travelTime: "차로 약 34분 (오달렌터카 → 파르코시티)",
        },
        {
          time: "15:40 - 17:00",
          title: "파르코시티에서 장보기",
          desc: "1층 마트에서 생수, 맥주, 간식 등 필수품 쇼핑(회/초밥등..)",
          icon: <ShoppingCart size={16} />,
          mapQuery: "산에이 파르코시티 우라소에",
          travelTime: "차로 약 60분 (파르코시티 → 잔파 리조트)",
        },
        {
          time: "18:15~20",
          title: "리조트 체크인",
          desc: "체크인 및 휴식. 저녁은 마트 도시락/초밥으로 방에서 편하게 해결",
          icon: <BedDouble size={16} />,
          mapQuery: "그랜드 머큐어 오키나와 잔파 곶 리조트",
        },
      ],
    },
    {
      id: "day2",
      title: "2일차",
      date: "5월 22일 (금) — 아메리칸빌리지",
      schedules: [
        {
          time: "07:30 - 12:30",
          title: "조식 후 리조트 수영장",
          desc: "조식 후 리조트 수영장에서 물놀이 및 휴양",
          icon: <WavesLadder size={16} />,
          tags: ["#휴양", "#수영장"],
          travelTime: "차로 약 5분 (리조트 인근)",
        },
        {
          time: "12:30 - 13:30",
          title: "점심: 킨치치소바",
          desc: "리조트에서 5분 거리, 바다 뷰가 펼쳐지는 수제 소바 맛집",
          icon: <Utensils size={16} />,
          tags: ["#식사", "#점심"],
          mapQuery: "킨치치소바 오키나와",
          travelTime: "차로 약 40분 (킨치치소바 → 아메리칸 빌리지)",
        },
        {
          time: "14:30 - 18:00",
          title: "아메리칸 빌리지",
          desc: "이온몰 차탄점에 주차 후 거리 산책, 블루씰 아이스크림, 캐릭터 샵 등 쇼핑과 관광",
          icon: <ShoppingBag size={16} />,
          mapQuery: "이온몰 차탄점 주차장",
          travelTime: "도보 약 5분",
        },
        {
          time: "18:10 - 19:00",
          title: "저녁: 스테이크 하우스 88",
          desc: "아메리칸 빌리지점. 대형 단체석 구비, 여행의 하이라이트 고기 만찬",
          icon: <Utensils size={16} />,
          mapQuery: "스테이크 하우스 88 아메리칸 빌리지",
          travelTime: "차로 약 40분 (아메리칸 빌리지 → 잔파 리조트)",
        },
      ],
    },
    {
      id: "day3",
      title: "3일차",
      date: "5월 23일 (토) — 북부 투어",
      schedules: [
        {
          time: "08:00",
          title: "리조트 조식",
          desc: "리조트 뷔페 조식으로 여유롭게 하루 시작",
          icon: <Utensils size={16} />,
          mapQuery: "그랜드 머큐어 오키나와 잔파 곶 리조트",
          travelTime: "차로 약 32분 (잔파 리조트 → 만좌모)",
        },
        {
          time: "10:00 - 10:15",
          title: "만좌모 관람",
          desc: "코끼리 코 모양의 절벽 전망대에서 에메랄드빛 바다 감상.",
          icon: <Camera size={16} />,
          mapQuery: "만좌모 주차장",
          travelTime: "차로 약 20분 (만좌모 → 유리보트탑승장)",
        },
        {
          time: "10:35 - 11:35",
          title: "부세나 해중공원",
          desc: "투명한 바닥으로 바닷속 산호초와 열대어 감상.\n유리보트만 탈게요~",
          icon: <Sailboat size={16} />,
          mapQuery: "부세나해중공원 주차장",
          websiteUrl: "https://www.busena-marinepark.com/korea/index.html",
          travelTime: "차로 약 20분 (부세나 → 점심)",
        },
        {
          time: "11:00 - 12:00",
          title: "점심",
          desc: "뭐먹을지 알려주실분..추천받습니다.",
          icon: <Utensils size={16} />,
          travelTime: "차로 약 30분 (나고 → 추라우미수족관)",
        },
        {
          time: "13:00 - 16:30",
          title: "추라우미 수족관",
          desc: "세계 최대급 수족관. 고래상어 관람 및 야외 돌고래 쇼\n시간: 10:30 / 11:30 / 13:00 / 15:00 / 17:00",
          icon: <Fish size={16} />,
          mapQuery: "추라우미 수족관 주차장 P7",
          travelTime: "차로 약 20분",
        },
        {
          time: "17:00 - 18:30",
          title: "저녁",
          desc: "뭐먹을지 알려주실분..추천받습니다.",
          icon: <Utensils size={16} />,
          travelTime: "차로 약 1시간 (북부 → 잔파 리조트)",
        },
        {
          time: "20:00",
          title: "숙소 복귀 및 휴식",
          desc: "숙소 도착 후 내일을 위해 편안하게 휴식",
          icon: <Hotel size={16} />,
          mapQuery: "그랜드 머큐어 오키나와 잔파 곶 리조트",
        },
      ],
    },
    {
      id: "day4",
      title: "4일차",
      date: "5월 24일 (일) — 안녕, 오키나와",
      schedules: [
        {
          time: "07:30 - 09:00",
          title: "조식",
          desc: "리조트에서의 마지막 아침 식사",
          icon: <Utensils size={16} />,
        },
        {
          time: "09:15",
          title: "체크아웃 및 남부 이동",
          desc: "리조트 체크아웃 후 나하 남부로 출발",
          icon: <Car size={16} />,
          travelTime: "차로 약 60분 (잔파 → 토미구스쿠)",
        },
        {
          time: "10:15 - 11:15",
          title: "돈키호테 토미구스쿠점",
          desc: "기념품 쇼핑",
          icon: <ShoppingBag size={16} />,
          mapQuery: "돈키호테 오키나와 토미구스쿠 주차장",
          travelTime: "차로 약 15분 (토미구스쿠 → 주유소 → 렌터카 반납)",
        },
        {
          time: "11:15 - 11:45",
          title: "주유 및 렌터카 반납",
          desc: "주유소 들러 연료 채운 후 렌터카 반납",
          icon: <Car size={16} />,
          travelTime: "차로 약 15분 (렌터카 반납 → 나하 공항)",
        },
        {
          time: "12:00",
          title: "나하 공항 도착",
          desc: "출발 2시간 30분~3시간 전 공항 도착. 국제선 체크인 및 출국 수속",
          icon: <BaggageClaim size={16} />,
          mapQuery: "나하공항 국제선 출발",
        },
        {
          time: "14:35",
          title: "한국으로 출발 (TW0282)",
          desc: "티웨이항공 TW0282편으로 인천 향해 출발.\n안녕, 오키나와!",
          icon: <PlaneTakeoff size={16} />,
          travelTime: "비행 약 2시간 25분",
        },
        {
          time: "약 17:00",
          title: "인천공항 도착",
          desc: "TW0282편 인천국제공항 도착\n수하물 수취 후 해산!",
          icon: <PlaneLanding size={16} />,
          mapQuery: "인천국제공항",
        },
      ],
    },
  ];

  const [activeAnimations, setActiveAnimations] = useState<
    {
      id: number;
      cardKey: string;
      type:
        | "plane"
        | "luggage"
        | "cart"
        | "pool"
        | "meal"
        | "camera"
        | "boat"
        | "churaumi"
        | "car"
        | "bus";
    }[]
  >([]);

  const triggerAnimation = (cardKey: string, title: string) => {
    let type:
      | "plane"
      | "luggage"
      | "cart"
      | "pool"
      | "meal"
      | "camera"
      | "boat"
      | "churaumi"
      | "car"
      | "bus"
      | null = null;
    const isMealTitle =
      /조식|소바|점심|저녁|스테이크|식당|식사|타마고|호토모토|우후야|카이센테이|블루씰|스시|맛집/.test(
        title,
      );

    if (title.includes("출발")) {
      type = "plane";
    } else if (title.includes("나하 공항 도착")) {
      type = "bus";
    } else if (
      title.includes("돈키호테") ||
      title.includes("아메리칸 빌리지") ||
      title.includes("장보기")
    ) {
      type = "cart";
    } else if (title.includes("수영장")) {
      type = "pool";
    } else if (title.includes("만좌모")) {
      type = "camera";
    } else if (title.includes("츄라우미") || title.includes("수족관")) {
      type = "churaumi";
    } else if (
      title.includes("렌터카") ||
      title.includes("렌트카") ||
      title.includes("남부 이동")
    ) {
      type = "car";
    } else if (
      title.includes("부세나") ||
      title.includes("해중공원") ||
      title.includes("보트")
    ) {
      type = "boat";
    } else if (isMealTitle) {
      type = "meal";
    }

    if (!type) return; // 지정된 카드가 아니면 애니메이션 없음

    const id = Date.now();
    setActiveAnimations((prev) => [...prev, { id, cardKey, type }]);
    setTimeout(() => {
      setActiveAnimations((prev) => prev.filter((a) => a.id !== id));
    }, 2800);
  };

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      if (navWrapperRef.current) {
        const wrapperTop = navWrapperRef.current.getBoundingClientRect().top;
        setIsSticky(wrapperTop <= 32);
      }

      const scrollPosition = window.scrollY + 250;
      for (const day of itinerary) {
        const element = document.getElementById(`${day.id}-anchor`);
        if (element) {
          const top = element.offsetTop;
          if (
            scrollPosition >= top &&
            scrollPosition < top + element.offsetHeight
          ) {
            setActiveSection(day.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [itinerary]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(`${id}-anchor`);
    if (element) {
      const offset = 160;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="min-h-screen text-[#1a1a1a] dark:text-slate-200 pb-32 antialiased selection:bg-[#8bd6f5]/60 dark:selection:bg-blue-500/30 relative transition-colors duration-500"
      style={{ fontFamily: '"Pretendard", system-ui, sans-serif' }}
    >
      {/* 베이스 배경색 레이어 (이미지보다 뒤에 위치) */}
      <div className="fixed inset-0 bg-[#f3f6f6] dark:bg-[#0a0c10] -z-20 transition-colors duration-500" />

      {/* 헤더 배경 이미지 영역 (글래스모피즘 적용) */}
      <div className="fixed top-0 left-0 w-full h-[500px] md:h-[700px] -z-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: 'url("/images/hero_bg.jpg")',
          }}
        />
        <div className="absolute inset-0 bg-white/10 dark:bg-black/40 backdrop-blur-[10px]" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#f3f6f6] dark:to-[#0a0c10]" />
      </div>

      <header className="max-w-6xl mx-auto px-6 pt-32 pb-8 relative z-10">
        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-[11px] tracking-[0.2em] uppercase mb-6">
          <span className="w-1.5 h-1.5 bg-slate-600 dark:bg-slate-400 rounded-full"></span>
          <span>Family Trip Planner</span>
        </div>
        <p className="text-sm md:text-lg font-medium text-slate-700 dark:text-slate-300 mb-3 tracking-tight"></p>
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 break-keep relative filter-[drop-shadow(0_2px_12px_rgba(0,60,120,0.15))]">
          <span className="bg-clip-text text-transparent bg-linear-to-b from-[#004c94] to-[#2273bc] dark:from-[#f3f6f6] dark:to-[#c0c3c3]">
            오키나와
          </span>{" "}
          <span className="relative z-10 inline-block text-[#ffffff] dark:text-white">
            가족여행
            <span className="absolute left-0 -bottom-[3px] md:-bottom-[6px] w-full h-[12px] md:h-[24px] bg-[#8eddff] dark:bg-blue-600/60 -z-10 rounded-sm transition-all"></span>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed font-light break-keep">
          2026. 05. 21 - 05. 24 (3박 4일)
        </p>
      </header>

      {/* 스티키 네비게이션 (글래스모피즘 투명도 및 블러 강화) */}
      <div
        ref={navWrapperRef}
        className="sticky top-8 z-100 w-full flex justify-center px-2 md:px-6 mb-16 pointer-events-none"
      >
        <nav
          className="pointer-events-auto flex items-center gap-2 md:gap-8 px-3 md:px-10 py-2.5 md:py-4 rounded-full border border-white/40 dark:border-slate-700/40 backdrop-blur-[20px] shadow-[0_4px_34px_rgba(0,0,0,0.15)] dark:shadow-none transition-all max-w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{
            background: isDark
              ? "linear-gradient(135deg, rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.3) 30%)"
              : "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3) 30%)",
          }}
        >
          {itinerary.map((day) => (
            <button
              key={day.id}
              onClick={() => scrollToSection(day.id)}
              className={`text-[12px] md:text-[14px] font-medium relative transition-colors px-1.5 md:px-2 py-1 whitespace-nowrap shrink-0 ${
                activeSection === day.id
                  ? "text-black dark:text-white font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white"
              }`}
            >
              {day.title}
              {activeSection === day.id && (
                <motion.span
                  layoutId="active-nav-indicator"
                  className="absolute -bottom-1 left-0 w-full h-[3px] md:h-1 bg-[#8bd6f5] dark:bg-blue-500 rounded-full"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </button>
          ))}

          <button
            onClick={() => setIsCostModalOpen(true)}
            className={`text-[12px] md:text-[14px] font-medium transition-colors px-1.5 md:px-2 py-1 items-center gap-1.5 hidden md:flex ${
              isCostModalOpen
                ? "text-black dark:text-white"
                : "text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white"
            }`}
          >
            <Wallet size={14} />
            비용
          </button>

          {/* 모바일용 비용 버튼 (아이콘만) */}
          <button
            onClick={() => setIsCostModalOpen(true)}
            className="md:hidden p-1.5 text-slate-600 dark:text-slate-400"
          >
            <Wallet size={16} />
          </button>

          {/* 메뉴 구분선 및 다크모드 아이콘 */}
          <div className="w-px h-3 md:h-4 bg-slate-400 dark:bg-slate-700/80 mx-1 shrink-0"></div>
          <button
            onClick={toggleTheme}
            className="p-1 md:p-1.5 shrink-0 rounded-full transition-all text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? (
              <Sun className="w-4 h-4 md:w-4 md:h-4" />
            ) : (
              <Moon className="w-4 h-4 md:w-4 md:h-4" />
            )}
          </button>
        </nav>
      </div>

      <main className="max-w-4xl mx-auto px-6 space-y-24 relative z-0">
        {itinerary.map((day) => (
          <section key={day.id} id={`${day.id}-anchor`} className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* 좌측: 일자 타이틀 (스크롤 시 고정되도록 sticky 적용) */}
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3 mb-4 transition-colors">
                    <MapPin
                      size={18}
                      className="text-slate-700 dark:text-slate-300"
                    />
                    <h2 className="text-[15px] font-semibold text-slate-700 dark:text-slate-300">
                      {day.title}
                    </h2>
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight text-black dark:text-white transition-colors">
                    {day.date.split(" — ")[0]}
                    {day.date.includes(" — ") && (
                      <span className="block text-xl font-semibold text-slate-500 dark:text-slate-400 mt-1 tracking-normal">
                        {day.date.split(" — ")[1]}
                      </span>
                    )}
                  </h3>
                </div>
              </div>

              {/* 우측: 타임라인 카드 */}
              <div className="lg:col-span-8">
                {day.schedules.map((schedule, idx) => (
                  <div key={idx}>
                    <div
                      key={idx}
                      onClick={() =>
                        triggerAnimation(`${day.id}-${idx}`, schedule.title)
                      }
                      className={`rounded-[50px] p-6 md:p-8 backdrop-blur-[20px] transition-all group relative overflow-hidden ${
                        schedule.title.includes("출발") ||
                        schedule.title.includes("도착 및 입국") ||
                        schedule.title.includes("돈키호테") ||
                        schedule.title.includes("아메리칸 빌리지") ||
                        schedule.title.includes("장보기") ||
                        schedule.title.includes("수영장") ||
                        schedule.title.includes("만좌모") ||
                        schedule.title.includes("부세나") ||
                        schedule.title.includes("츄라우미") ||
                        schedule.title.includes("수족관") ||
                        schedule.title.includes("렌터카") ||
                        schedule.title.includes("렌트카") ||
                        schedule.title.includes("남부 이동") ||
                        /조식|소바|점심|저녁|스테이크|식당|식사|타마고|호토모토|우후야|카이센테이|블루씰|스시|맛집/.test(
                          schedule.title,
                        )
                          ? "cursor-pointer active:scale-[0.98]"
                          : ""
                      } ${
                        (schedule.icon as React.ReactElement<any>).type ===
                        Utensils
                          ? "border border-pink-100/70 dark:border-pink-900/20 shadow-[0_4px_34px_rgba(240,100,150,0.06)]"
                          : "border border-white/40 dark:border-slate-800/50 shadow-[0_4px_34px_rgba(0,0,0,0.08)]"
                      }`}
                      style={{
                        background: (() => {
                          const isMeal =
                            (schedule.icon as React.ReactElement<any>).type ===
                            Utensils;
                          if (isDark) {
                            return isMeal
                              ? "linear-gradient(135deg, rgba(30, 20, 28, 0.45), rgba(28, 18, 26, 0.45) 30%)"
                              : "linear-gradient(135deg, rgba(18, 20, 26, 0.45), rgba(18, 20, 26, 0.45) 30%)";
                          }
                          return isMeal
                            ? "linear-gradient(135deg, rgba(255, 252, 254, 0.45), rgba(255, 250, 253, 0.45) 30%)"
                            : "linear-gradient(135deg, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.45) 30%)";
                        })(),
                      }}
                    >
                      <AnimatePresence>
                        {activeAnimations
                          .filter((a) => a.cardKey === `${day.id}-${idx}`)
                          .map((a) => (
                            <React.Fragment key={a.id}>
                              {a.type === "plane" && (
                                <>
                                  {/* 구름 1 */}
                                  <motion.div
                                    initial={{
                                      x: "150%",
                                      y: 0,
                                      opacity: 0,
                                      scale: 0.9,
                                    }}
                                    animate={{
                                      x: "-50%",
                                      y: 0,
                                      opacity: [0, 0.6, 0.6, 0],
                                    }}
                                    transition={{
                                      duration: 1.6,
                                      times: [0, 0.2, 0.8, 1],
                                      ease: "linear",
                                    }}
                                    className="absolute pointer-events-none"
                                    style={{ right: "10%", top: "15%" }}
                                  >
                                    <Cloud
                                      size={80}
                                      className="text-white/60 dark:text-slate-200/20 fill-current"
                                    />
                                  </motion.div>

                                  {/* 구름 2 */}
                                  <motion.div
                                    initial={{
                                      x: "-150%",
                                      y: 0,
                                      opacity: 0,
                                      scale: 0.8,
                                    }}
                                    animate={{
                                      x: "80%",
                                      y: 0,
                                      opacity: [0, 0.5, 0.5, 0],
                                    }}
                                    transition={{
                                      duration: 1.5,
                                      times: [0, 0.2, 0.8, 1],
                                      ease: "linear",
                                      delay: 0.1,
                                    }}
                                    className="absolute pointer-events-none"
                                    style={{ left: "10%", top: "45%" }}
                                  >
                                    <Cloud
                                      size={50}
                                      className="text-white/50 dark:text-slate-200/15 fill-current"
                                    />
                                  </motion.div>

                                  {/* 비행기 */}
                                  <motion.div
                                    initial={{
                                      x: "-120%",
                                      y: "100%",
                                      rotate: 25,
                                      opacity: 0,
                                    }}
                                    animate={{
                                      x: "200%",
                                      y: "-100%",
                                      rotate: 25,
                                      opacity: [0, 1, 1, 0],
                                    }}
                                    transition={{
                                      duration: 1.2,
                                      ease: "easeOut",
                                      delay: 0.4,
                                    }}
                                    className="absolute pointer-events-none drop-shadow-sm flex items-center justify-center"
                                    style={{ left: "10%", top: "40%" }}
                                  >
                                    <Plane
                                      size={80}
                                      className="text-blue-500/20 dark:text-sky-400/20 fill-current relative z-10"
                                    />
                                  </motion.div>
                                </>
                              )}

                              {(a.type === "luggage" ||
                                a.type === "cart" ||
                                a.type === "car" ||
                                a.type === "bus") && (
                                <motion.div
                                  initial={{ x: -100, opacity: 0 }}
                                  animate={{
                                    x: 800,
                                    opacity: [0, 1, 1, 0],
                                  }}
                                  transition={{
                                    duration: 2.0,
                                    ease: "linear",
                                    times: [0, 0.15, 0.8, 1],
                                  }}
                                  className="absolute pointer-events-none drop-shadow-sm flex items-center justify-center z-10"
                                  style={{ left: 0, bottom: "-4px" }}
                                >
                                  {a.type === "luggage" && (
                                    <BaggageClaim
                                      size={100}
                                      className="text-blue-500/20 dark:text-sky-400/20 fill-current"
                                    />
                                  )}
                                  {a.type === "cart" && (
                                    <ShoppingCart
                                      size={100}
                                      className="text-blue-500/20 dark:text-sky-400/20 fill-current"
                                    />
                                  )}
                                  {a.type === "car" && (
                                    <motion.div
                                      animate={{
                                        y: [16, 10, 16, 12, 16],
                                        rotate: [0, -3, 3, -1, 0],
                                      }}
                                      transition={{
                                        duration: 0.35,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                      }}
                                    >
                                      <Car
                                        size={100}
                                        className="text-teal-400/30 dark:text-teal-400/40 fill-current"
                                      />
                                    </motion.div>
                                  )}
                                  {a.type === "bus" && (
                                    <motion.div
                                      animate={{
                                        y: [16, 10, 16, 12, 16],
                                        rotate: [0, -3, 3, -1, 0],
                                      }}
                                      transition={{
                                        duration: 0.35,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                      }}
                                    >
                                      <Bus
                                        size={100}
                                        className="text-indigo-400/30 dark:text-indigo-400/40 fill-current"
                                      />
                                    </motion.div>
                                  )}
                                </motion.div>
                              )}

                              {a.type === "pool" && (
                                <motion.div
                                  initial={{ y: "100%", opacity: 0 }}
                                  animate={{
                                    y: ["100%", "30%", "30%", "100%"],
                                    opacity: [0, 1, 1, 0],
                                  }}
                                  transition={{
                                    duration: 2.6,
                                    times: [0, 0.3, 0.7, 1],
                                    ease: "easeInOut",
                                  }}
                                  className="absolute inset-x-0 bottom-0 pointer-events-none z-0 flex flex-col"
                                  style={{ height: "70%" }}
                                >
                                  {/* 뒤쪽 파도 전체 레이어 */}
                                  <div className="absolute inset-0 flex flex-col text-cyan-500 dark:text-cyan-700 opacity-40">
                                    <div className="relative w-full h-[40px] overflow-hidden -mb-px">
                                      <motion.div
                                        animate={{ x: ["-50%", "0%"] }}
                                        transition={{
                                          duration: 3,
                                          repeat: Infinity,
                                          ease: "linear",
                                        }}
                                        className="absolute bottom-0 w-[200%] h-full flex"
                                      >
                                        <svg
                                          viewBox="0 0 2000 100"
                                          preserveAspectRatio="none"
                                          className="w-full h-full fill-current"
                                        >
                                          <path d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1150,100 1350,0 1500,50 C1650,100 1850,0 2000,50 L2000,100 L0,100 Z" />
                                        </svg>
                                      </motion.div>
                                    </div>
                                    <div className="w-full grow bg-current" />
                                  </div>

                                  {/* 앞쪽 파도 전체 레이어 */}
                                  <div className="absolute inset-0 flex flex-col text-cyan-400 dark:text-cyan-500 opacity-50">
                                    <div className="relative w-full h-[40px] overflow-hidden -mb-px">
                                      <motion.div
                                        animate={{ x: ["0%", "-50%"] }}
                                        transition={{
                                          duration: 2.2,
                                          repeat: Infinity,
                                          ease: "linear",
                                        }}
                                        className="absolute bottom-0 w-[200%] h-full flex"
                                      >
                                        <svg
                                          viewBox="0 0 2000 100"
                                          preserveAspectRatio="none"
                                          className="w-full h-full fill-current"
                                        >
                                          <path d="M0,50 C150,0 350,100 500,50 C650,0 850,100 1000,50 C1150,0 1350,100 1500,50 C1650,0 1850,100 2000,50 L2000,100 L0,100 Z" />
                                        </svg>
                                      </motion.div>
                                    </div>
                                    <div className="w-full grow bg-current" />
                                  </div>
                                </motion.div>
                              )}

                              {a.type === "meal" && (
                                <motion.div
                                  initial={{
                                    y: 150,
                                    x: 0,
                                    rotate: 0,
                                    opacity: 0,
                                  }}
                                  animate={{
                                    y: [150, -50, 150],
                                    x: [0, 80],
                                    rotate: [0, 20, 40],
                                    opacity: [0, 1, 1, 0],
                                  }}
                                  transition={{
                                    y: {
                                      duration: 1.1,
                                      times: [0, 0.5, 1],
                                      ease: ["easeOut", "easeIn"],
                                    },
                                    x: {
                                      duration: 1.1,
                                      ease: "linear",
                                    },
                                    rotate: {
                                      duration: 1.1,
                                      ease: "easeInOut",
                                    },
                                    opacity: {
                                      duration: 1.1,
                                      times: [0, 0.1, 0.85, 1],
                                      ease: "linear",
                                    },
                                  }}
                                  className="absolute bottom-0 pointer-events-none drop-shadow-sm flex items-center justify-center z-10 pb-4"
                                  style={{ right: "30%" }}
                                >
                                  <UtensilsCrossed
                                    size={80}
                                    className="text-slate-400/40 dark:text-slate-400/40 fill-current"
                                  />
                                </motion.div>
                              )}

                              {a.type === "camera" && (
                                <>
                                  <motion.div
                                    initial={{
                                      y: 150,
                                      opacity: 0,
                                      rotate: -10,
                                    }}
                                    animate={{
                                      y: [150, -20, -20, 150],
                                      opacity: [0, 1, 1, 0],
                                      rotate: [-10, 0, 0, 10],
                                    }}
                                    transition={{
                                      duration: 1.6,
                                      times: [0, 0.2, 0.8, 1],
                                      ease: "easeInOut",
                                    }}
                                    className="absolute bottom-6 inset-x-0 pointer-events-none drop-shadow-xl flex items-center justify-center z-20"
                                  >
                                    <Camera
                                      size={80}
                                      className="text-slate-500/30 dark:text-slate-300/20 fill-current"
                                    />
                                  </motion.div>
                                  <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 0, 0.8, 0, 0.4, 0],
                                    }}
                                    transition={{
                                      duration: 1.6,
                                      times: [0, 0.35, 0.4, 0.5, 0.55, 0.7],
                                    }}
                                    className="absolute inset-0 bg-white/90 z-20 pointer-events-none rounded-[50px] mix-blend-overlay"
                                  />
                                </>
                              )}

                              {a.type === "boat" && (
                                <>
                                  {/* 대장 물고기 (가상 앞장) */}
                                  <motion.div
                                    initial={{ x: -200, y: 15, opacity: 0 }}
                                    animate={{
                                      x: 300,
                                      y: [15, 5, 15, 5, 15],
                                      opacity: [0, 1, 1, 0],
                                    }}
                                    transition={{
                                      duration: 2.6,
                                      times: [0, 0.1, 0.9, 1],
                                      ease: "linear",
                                      delay: 0,
                                    }}
                                    className="absolute bottom-6 inset-x-0 pointer-events-none drop-shadow-md z-20 flex items-center justify-center"
                                  >
                                    <Fish
                                      size={65}
                                      strokeWidth={1.5}
                                      className="text-cyan-600/30 dark:text-cyan-400/20 fill-current"
                                    />
                                  </motion.div>

                                  {/* 중간 물고기 (살짝 위쪽) */}
                                  <motion.div
                                    initial={{ x: -220, y: -5, opacity: 0 }}
                                    animate={{
                                      x: 280,
                                      y: [-5, -15, -5, -15, -5],
                                      opacity: [0, 1, 1, 0],
                                    }}
                                    transition={{
                                      duration: 2.4,
                                      times: [0, 0.1, 0.9, 1],
                                      ease: "linear",
                                      delay: 0.15,
                                    }}
                                    className="absolute bottom-8 inset-x-0 pointer-events-none drop-shadow-sm z-20 flex items-center justify-center"
                                  >
                                    <Fish
                                      size={45}
                                      strokeWidth={1.5}
                                      className="text-blue-500/30 dark:text-sky-300/20 fill-current"
                                    />
                                  </motion.div>

                                  {/* 꼬마 물고기 1 */}
                                  <motion.div
                                    initial={{ x: -240, y: 5, opacity: 0 }}
                                    animate={{
                                      x: 250,
                                      y: [5, 0, 5, 0, 5],
                                      opacity: [0, 1, 1, 0],
                                    }}
                                    transition={{
                                      duration: 2.3,
                                      times: [0, 0.1, 0.9, 1],
                                      ease: "linear",
                                      delay: 0.25,
                                    }}
                                    className="absolute bottom-2 inset-x-0 pointer-events-none drop-shadow-sm z-20 flex items-center justify-center"
                                  >
                                    <Fish
                                      size={28}
                                      className="text-teal-500/40 dark:text-teal-300/30 fill-current"
                                    />
                                  </motion.div>

                                  {/* 꼬마 물고기 2 */}
                                  <motion.div
                                    initial={{ x: -260, y: 12, opacity: 0 }}
                                    animate={{
                                      x: 230,
                                      y: [12, -2, 12, -2, 12],
                                      opacity: [0, 1, 1, 0],
                                    }}
                                    transition={{
                                      duration: 2.2,
                                      times: [0, 0.1, 0.9, 1],
                                      ease: "linear",
                                      delay: 0.35,
                                    }}
                                    className="absolute bottom-10 inset-x-0 pointer-events-none drop-shadow-sm z-20 flex items-center justify-center"
                                  >
                                    <Fish
                                      size={20}
                                      className="text-blue-400/40 dark:text-blue-200/30 fill-current"
                                    />
                                  </motion.div>

                                  {/* 노란 물고기 (포인트) */}
                                  <motion.div
                                    initial={{ x: -180, y: -2, opacity: 0 }}
                                    animate={{
                                      x: 320,
                                      y: [-2, 15, -2, 10, -2],
                                      opacity: [0, 1, 1, 0],
                                    }}
                                    transition={{
                                      duration: 2.5,
                                      times: [0, 0.1, 0.9, 1],
                                      ease: "linear",
                                      delay: 0.2,
                                    }}
                                    className="absolute bottom-5 inset-x-0 pointer-events-none drop-shadow-md z-20 flex items-center justify-center"
                                  >
                                    <Fish
                                      size={36}
                                      className="text-amber-400/50 dark:text-yellow-400/50 fill-current"
                                    />
                                  </motion.div>
                                </>
                              )}

                              {a.type === "churaumi" && (
                                <>
                                  {/* 돌고래 점프 1 (단독) */}
                                  <motion.div
                                    initial={{
                                      x: 250,
                                      y: 100,
                                      rotate: 50,
                                      opacity: 0,
                                    }}
                                    animate={{
                                      x: 0,
                                      y: [100, -90, 100],
                                      rotate: [90, 0, -95],
                                      opacity: [0, 1, 1, 0],
                                    }}
                                    transition={{
                                      duration: 2.0,
                                      ease: "easeInOut",
                                      times: [0, 0.1, 0.9, 1],
                                    }}
                                    className="absolute bottom-6 inset-x-0 pointer-events-none drop-shadow-xl z-30 flex items-center justify-center"
                                  >
                                    <DolphinIcon
                                      size={100}
                                      className="text-slate-500/60 dark:text-gray-400/60 fill-current"
                                    />
                                  </motion.div>
                                </>
                              )}
                            </React.Fragment>
                          ))}
                      </AnimatePresence>
                      <div className="space-y-4 relative z-10">
                        <div className="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[14px]">
                          <span className="border border-slate-200/60 dark:border-slate-700/50 bg-white/70 dark:bg-slate-800/40 px-3.5 py-1.5 rounded-full flex items-center gap-2.5 transition-colors shadow-sm font-medium">
                            {React.cloneElement(
                              schedule.icon as React.ReactElement<any>,
                              { size: 16 },
                            )}{" "}
                            {schedule.time}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 relative">
                          <h4 className="text-xl font-bold text-black dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {schedule.title}
                          </h4>
                          {schedule.mapQuery && (
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(schedule.mapQuery)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all flex items-center justify-center shrink-0 group/nav gap-1"
                              title={`${schedule.title} 구글 지도 안내`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Navigation
                                size={13}
                                className="group-hover/nav:animate-pulse"
                              />
                              <span className="text-[12px] font-bold tracking-tight">
                                길안내
                              </span>
                            </a>
                          )}
                          {(schedule as any).websiteUrl && (
                            <a
                              href={(schedule as any).websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 text-amber-600 dark:text-amber-400 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 dark:hover:text-white transition-all flex items-center justify-center shrink-0 gap-1"
                              title="공식 홈페이지 확인"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span className="text-[12px] font-bold tracking-tight">
                                운행여부 체크
                              </span>
                            </a>
                          )}
                        </div>

                        <p className="text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed break-keep transition-colors whitespace-pre-line">
                          {schedule.desc}
                        </p>
                      </div>
                    </div>
                    {schedule.travelTime && (
                      <div className="flex items-center gap-2 py-2 px-4 text-[13px] text-slate-500 dark:text-slate-400">
                        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 whitespace-nowrap backdrop-blur-sm">
                          {schedule.travelTime?.includes("도보") ? (
                            <PersonStanding
                              size={12}
                              className="opacity-70 shrink-0"
                            />
                          ) : schedule.travelTime?.includes("비행") ? (
                            <Plane size={12} className="opacity-70 shrink-0" />
                          ) : (
                            <Car size={12} className="opacity-70 shrink-0" />
                          )}
                          {schedule.travelTime}
                        </span>
                        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
                      </div>
                    )}
                    {!schedule.travelTime && <div className="h-5" />}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* 비용 모달 */}
      <AnimatePresence>
        {isCostModalOpen && (
          <div className="fixed inset-0 z-200 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCostModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-[40px] shadow-2xl overflow-hidden border border-white/20 dark:border-slate-800"
            >
              <div className="p-6 md:p-10">
                <div className="flex items-center justify-between mb-8 md:mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <Wallet size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-black dark:text-white tracking-tight">
                        여행 경비 내역
                      </h2>
                      <p className="text-[12px] md:text-sm text-slate-500 font-medium mt-0.5">
                        성인 8인 기준 예상 비용 (항공/숙소/렌트/입장료)
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsCostModalOpen(false)}
                    className="p-2.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-400"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="bg-slate-50/50 dark:bg-slate-800/30 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800/50 overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[400px]">
                    <thead>
                      <tr className="border-b border-slate-200/50 dark:border-slate-700/50">
                        <th className="px-4 md:px-6 py-4 text-[11px] md:text-[12px] font-bold text-slate-400 uppercase tracking-widest">
                          항목
                        </th>
                        <th className="px-4 md:px-6 py-4 text-[11px] md:text-[12px] font-bold text-slate-400 uppercase tracking-widest text-right">
                          금액
                        </th>
                        <th className="px-4 md:px-6 py-4 text-[11px] md:text-[12px] font-bold text-slate-400 uppercase tracking-widest">
                          비고
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                      {costs.map((row, idx) => (
                        <tr
                          key={idx}
                          className={`${
                            row.isTotal || row.isPerPerson
                              ? "bg-blue-500/5 dark:bg-blue-500/10"
                              : "hover:bg-white/50 dark:hover:bg-white/5 transition-colors"
                          }`}
                        >
                          <td
                            className={`px-4 md:px-6 py-4 text-[13px] md:text-[14px] whitespace-nowrap ${
                              row.isTotal || row.isPerPerson
                                ? "font-bold text-blue-600 dark:text-blue-400"
                                : "text-slate-700 dark:text-slate-300 font-medium"
                            }`}
                          >
                            {row.item}
                          </td>
                          <td
                            className={`px-4 md:px-6 py-4 text-[13px] md:text-[14px] text-right tabular-nums whitespace-nowrap ${
                              row.isTotal || row.isPerPerson
                                ? "font-bold text-blue-600 dark:text-blue-400"
                                : "text-slate-900 dark:text-white font-semibold"
                            }`}
                          >
                            {row.price}
                            <span className="text-[11px] md:text-[12px] ml-1 font-normal text-slate-400">
                              {row.price === "미정" ? "" : "원"}
                            </span>
                          </td>
                          <td className="px-4 md:px-6 py-4 text-[12px] md:text-[13px] text-slate-500 wrap-break-word leading-relaxed min-w-[120px]">
                            {row.note}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 p-5 bg-amber-50/50 dark:bg-amber-900/10 rounded-2xl border border-amber-100/50 dark:border-amber-900/20">
                  <p className="text-[12px] text-amber-700/80 dark:text-amber-400/80 leading-relaxed font-medium whitespace-pre-line">
                    {`* 렌트카2 비용 및 현지 식비, 기타 개인 경비는 제외된 사전 확정/예상액입니다.\n* 츄라우미 입장료는 방문 28일 전 예약이 필요합니다.`}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="max-w-4xl mx-auto px-6 py-20 mt-24 border-t border-slate-200 dark:border-slate-800 transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-1 rounded-[6px] bg-black dark:bg-white text-white dark:text-black text-[10px] font-black tracking-tighter uppercase">
                Okinawa
              </span>
              <span className="text-xs font-bold text-slate-400 tracking-tight">
                2026 Family Trip Planner
              </span>
            </div>
            <p className="text-sm text-slate-500 font-medium">
              &copy; 오키나와 여행 가이드@2026, Hanyeong Kim
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {["React", "Next.js", "Tailwind", "Framer Motion", "Lucide"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 text-[11px] font-bold text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50 transition-colors hover:border-slate-400"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OkinawaTrip;
