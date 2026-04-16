"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Car,
  ShoppingBag,
  Utensils,
  Hotel,
  Camera,
  Waves,
  Plane,
  MapPin,
  Moon,
  Sun,
  Navigation,
} from "lucide-react";

const OkinawaTrip = () => {
  const [activeSection, setActiveSection] = useState("day1");
  const [isSticky, setIsSticky] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const navWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 최초 접속 시 테마 확인
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
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
      date: "5월 21일 (목)",
      schedules: [
        {
          time: "13:35 - 15:00",
          title: "나하 공항 도착 및 렌트카 수령",
          desc: "나하 공항 도착 후 토미구스쿠 자야스 지점으로 이동하여 차량 2대 인수 및 카시트 확인",
          icon: <Car size={16} />,
          tags: ["#이동", "#렌트카"],
          mapQuery: "오달렌터카 나하공항점",
        },
        {
          time: "15:30 - 17:00",
          title: "이아스쇼핑몰 점심 및 쇼핑",
          desc: "2층 푸드코트에서 바다 전망 식사 후, 1층 이온 스타일 마트에서 기저귀 및 야식 등 필수품 쾌적하게 쇼핑",
          icon: <ShoppingBag size={16} />,
          tags: ["#식사", "#쇼핑"],
          mapQuery: "이아스 오키나와 토요사키 주차장",
        },
        {
          time: "18:30",
          title: "그랜드 머큐어 잔파 리조트 체크인",
          desc: "숙소 체크인 후 마트 초밥/도시락으로 저녁 식사 및 휴식",
          icon: <Hotel size={16} />,
          tags: ["#숙소", "#휴식"],
          mapQuery: "그랜드 머큐어 오키나와 잔파 곶 리조트",
        },
      ],
    },
    {
      id: "day2",
      title: "2일차",
      date: "5월 22일 (금)",
      schedules: [
        {
          time: "08:30 - 10:15",
          title: "리조트 조식 및 만좌모",
          desc: "고퀄리티 뷔페 조식 후 만좌모로 이동하여 장모님과 채린이를 포함한 8인 가족 단체 사진 촬영",
          icon: <Camera size={16} />,
          tags: ["#식사", "#관광"],
          mapQuery: "만좌모 주차장",
        },
        {
          time: "11:00 - 12:00",
          title: "점심: 하마스시 나고점",
          desc: "나고 시내에서 회전초밥",
          icon: <Utensils size={16} />,
          tags: ["#식사", "#맛집"],
          mapQuery: "하마스시 나고점",
        },
        {
          time: "13:00 - 16:30",
          title: "추라우미 수족관",
          desc: "거대 수조 고래상어 관람 및 야외 오키짱 돌고래 쇼 관람",
          icon: <Waves size={16} />,
          tags: ["#관광", "#수족관"],
          mapQuery: "추라우미 수족관 주차장 P7",
        },
        {
          time: "17:00 - 18:30",
          title: "저녁: 미정",
          desc: "미정",
          icon: <Utensils size={16} />,
          tags: ["#식사", "#저녁"],
          mapQuery: "미정",
        },
      ],
    },
    {
      id: "day3",
      title: "3일차",
      date: "5월 23일 (토)",
      schedules: [
        {
          time: "08:30 - 12:00",
          title: "오전 휴양 및 수영장",
          desc: "리조트 조식 후 최신 워터 슬라이드와 유수풀에서 여유로운 물놀이",
          icon: <Waves size={16} />,
          tags: ["#휴양", "#액티비티"],
          mapQuery: "그랜드 머큐어 오키나와 잔파 곶 리조트",
        },
        {
          time: "12:30 - 13:30",
          title: "점심: 킨치치소바 (Gala 아오이우미)",
          desc: "숙소 5분 거리의 바다 뷰 수제 소바. 단백질 담백한 국물로 아이도 먹기 좋음",
          icon: <Utensils size={16} />,
          tags: ["#식사", "#점심"],
          mapQuery: "킨치치소바 오키나와",
        },
        {
          time: "14:30 - 18:00",
          title: "아메리칸 빌리지 관광 및 쇼핑",
          desc: "이온몰 차탄점에 주차 후 거리 산책, 블루씰 아이스크림, 캐릭터 샵 등 관광",
          icon: <ShoppingBag size={16} />,
          tags: ["#쇼핑", "#관광"],
          mapQuery: "이온몰 차탄점 주차장",
        },
        {
          time: "18:30 - 20:00",
          title: "저녁: 스테이크 하우스 88",
          desc: "아메리칸 빌리지 내 대형 단체석 구비. 여행 마지막 밤의 든든한 고기 만찬",
          icon: <Utensils size={16} />,
          tags: ["#식사", "#저녁"],
          mapQuery: "스테이크 하우스 88 아메리칸 빌리지",
        },
      ],
    },
    {
      id: "day4",
      title: "4일차",
      date: "5월 24일 (일)",
      schedules: [
        {
          time: "07:30 - 09:15",
          title: "마지막 조식 및 체크아웃",
          desc: "여유로운 아침 식사 후 남부로 출발",
          icon: <Hotel size={16} />,
          tags: ["#식사", "#이동"],
        },
        {
          time: "10:15 - 11:15",
          title: "돈키호테 토미구스쿠점",
          desc: "오픈 시간에 맞춘 광속 쇼핑 및 면세 수속 미션",
          icon: <ShoppingBag size={16} />,
          tags: ["#쇼핑", "#기념품"],
          mapQuery: "돈키호테 오키나와 토미구스쿠 주차장",
        },
        {
          time: "11:15 - 12:00",
          title: "차량 반납 및 공항 도착",
          desc: "주유소 경유, 렌트카 반납 후 나하 공항 국제선 터미널 이동 (14:35 비행기)",
          icon: <Plane size={16} />,
          tags: ["#이동", "#귀국"],
          mapQuery: "나하공항 국제선 출발",
        },
      ],
    },
  ];

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
      className="min-h-screen bg-[#f3f4f6] dark:bg-[#0a0c10] text-[#1a1a1a] dark:text-slate-200 pb-32 antialiased selection:bg-[#ffeb3b]/60 dark:selection:bg-blue-500/30 relative transition-colors duration-500"
      style={{ fontFamily: '"Pretendard", system-ui, sans-serif' }}
    >
      <header className="max-w-6xl mx-auto px-6 pt-32 pb-8 relative z-10">
        <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-[11px] tracking-[0.2em] uppercase mb-6">
          <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full"></span>
          <span>Family Trip Planner</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.3] text-black dark:text-white mb-8 break-keep relative">
          8인 대가족이 함께하는
          <br className="md:block hidden" />
          <span className="mt-3 relative z-10 font-bold text-5xl md:text-7xl inline-block tracking-tight">
            오키나와 여행
            <span className="absolute left-0 bottom-1 w-full h-[12px] bg-[#ffeb3b] dark:bg-blue-500 -z-10 rounded-sm transition-colors"></span>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed font-light break-keep">
          2026. 05. 21 - 05. 24 (3박 4일)
        </p>
      </header>

      {/* 스티키 네비게이션 (글래스모피즘 투명도 및 블러 강화) */}
      <div
        ref={navWrapperRef}
        className="sticky top-8 z-[100] w-full flex justify-center px-6 mb-16 pointer-events-none"
      >
        <nav className="pointer-events-auto flex items-center gap-8 px-10 py-4 rounded-full border border-white/40 dark:border-slate-700/50 bg-white/60 dark:bg-[#1a1d24]/60 backdrop-blur-md shadow-lg shadow-slate-200/50 dark:shadow-none transition-colors">
          {itinerary.map((day) => (
            <button
              key={day.id}
              onClick={() => scrollToSection(day.id)}
              className={`text-[14px] font-medium relative transition-colors px-2 py-1 ${
                activeSection === day.id
                  ? "text-black dark:text-white font-bold"
                  : "text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white"
              }`}
            >
              {day.title}
              {activeSection === day.id && (
                <motion.span
                  layoutId="active-nav-indicator"
                  className="absolute -bottom-1.5 left-0 w-full h-1 bg-[#ffeb3b] dark:bg-blue-500 rounded-full"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </button>
          ))}

          {/* 메뉴 구분선 및 다크모드 아이콘 */}
          <div className="w-px h-4 bg-slate-300 dark:bg-slate-700/80 mx-1"></div>
          <button
            onClick={toggleTheme}
            className="p-1 rounded-full transition-all text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
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
                      className="text-slate-400 dark:text-slate-500"
                    />
                    <h2 className="text-[15px] font-semibold text-slate-400 dark:text-slate-500">
                      {day.title}
                    </h2>
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight text-black dark:text-white transition-colors">
                    {day.date}
                  </h3>
                </div>
              </div>

              {/* 우측: 타임라인 카드 */}
              <div className="lg:col-span-8 space-y-6">
                {day.schedules.map((schedule, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-[#12141a] rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-md dark:shadow-none transition-all group"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-slate-400 dark:text-slate-500 text-[15px]">
                        <span className="border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30 px-2.5 py-1 rounded-md flex items-center gap-2.5 transition-colors">
                          {React.cloneElement(
                            schedule.icon as React.ReactElement<any>,
                            { size: 18 },
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
                      </div>

                      <p className="text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed break-keep transition-colors">
                        {schedule.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-5 border-t border-slate-50 dark:border-slate-800/50 flex flex-wrap gap-3 text-[13px] text-slate-800 dark:text-slate-200 font-medium transition-colors">
                      {schedule.tags.map((tag) => (
                        <span key={tag} className="relative z-10">
                          {tag}
                          <span className="absolute left-0 bottom-0 w-full h-[6px] bg-[#ffeb3b]/60 dark:bg-blue-500/40 -z-10 transition-colors"></span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>

      <footer className="max-w-6xl mx-auto px-6 mt-32 text-center pb-24 border-t border-slate-200 dark:border-slate-800 pt-16 text-[12px] tracking-widest text-slate-400 dark:text-slate-500 uppercase transition-colors">
        <p className="italic font-medium">© 2026 FAMILY TRIP PLANNER</p>
      </footer>
    </div>
  );
};

export default OkinawaTrip;
