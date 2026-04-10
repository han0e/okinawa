"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Globe,
  Monitor,
  X,
  ExternalLink,
  Settings,
  Cpu,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Box,
  Palette,
  Maximize2,
  Aperture,
  Sun,
  Moon,
} from "lucide-react";
import {
  SiAutocad,
  SiSketchup,
  SiDassaultsystemes,
  SiSap,
} from "react-icons/si";
import { TbBrandOffice } from "react-icons/tb";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [currentRenderIndex, setCurrentRenderIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("header");
  const [isRenderModalOpen, setIsRenderModalOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const navWrapperRef = useRef<HTMLDivElement>(null);

  // 37장 최적화 이미지 경로
  const visualizationImages = [
    "/images/render (1).webp",
    "/images/render (2).webp",
    "/images/render (3).webp",
    "/images/render (4).webp",
    "/images/render (5).webp",
    "/images/render (6).webp",
    "/images/render (7).webp",
    "/images/render (8).webp",
    "/images/render (9).webp",
    "/images/render (10).webp",
    "/images/render (11).webp",
    "/images/render (12).webp",
    "/images/render (13).webp",
    "/images/render (14).webp",
    "/images/render (15).webp",
    "/images/render (16).webp",
    "/images/render (17).webp",
    "/images/render (18).webp",
    "/images/render (19).webp",
    "/images/render (20).webp",
    "/images/render (21).webp",
    "/images/render (22).webp",
    "/images/render (23).webp",
    "/images/render (24).webp",
    "/images/render (25).webp",
    "/images/render (26).webp",
    "/images/render (27).webp",
    "/images/render (28).webp",
    "/images/render (29).webp",
    "/images/render (30).webp",
    "/images/render (31).webp",
    "/images/render (32).webp",
    "/images/render (33).webp",
    "/images/render (34).webp",
    "/images/render (35).webp",
    "/images/render (36).webp",
    "/images/render (37).webp",
  ];

  const projects = [
    {
      id: "scraping_engine",
      title: "전자결재 스크래핑 엔진",
      type: "program",
      lang: "Node.js (Playwright)",
      tech: ["Playwright", "PM2", "Pocketbase"],
      displayTech: ["#Playwright", "#PM2", "#Pocketbase"],
      desc: "전자결재 시스템에서 근무 내역 및 결재 상태를 추출하여 Pocketbase DB에 자동 적재하는 엔진입니다.",
      detailDesc:
        "ERP와 단절된 시스템 환경을 극복하기 위해 Playwright를 활용한 스크래핑 로직을 구축했습니다. PM2를 통한 프로세스 상시 모니터링으로 데이터 수집의 안정성을 확보했습니다.",
      features: [
        "결재 상태 실시간 트래킹",
        "비정형 데이터의 정형 DB화",
        "PM2 기반 무중단 운영",
      ],
      hasImages: false,
      hasLink: false,
    },
    {
      id: "salarium",
      title: "Salarium: 급여관리",
      type: "program",
      lang: "C# WPF",
      tech: ["WPF", "Pocketbase", "Supabase", "SMTP"],
      displayTech: ["#WPF", "#Pocketbase", "#Supabase"],
      desc: "스크래핑 데이터를 기반으로 급여를 재산출하고 명세서 발송 및 리포트를 자동 생성하는 솔루션입니다.",
      detailDesc:
        "Pocketbase API와 Supabase DB를 연동하여 정산 데이터를 관리합니다. 사내 수식을 적용한 급여 계산 후 PDF/Excel 리포트 출력 및 이메일 자동 발송 기능을 통합했습니다.",
      features: [
        "PDF/Excel 리포트 엔진",
        "자동 이메일 발송 시스템",
        "데이터 정합성 자가 검증",
      ],
      images: [
        "/images/salarium_1.png",
        "/images/salarium_2.png",
        "/images/salarium_3.png",
        "/images/salarium_4.png",
        "/images/salarium_5.png",
      ],
      hasImages: true,
      hasLink: false,
    },
    {
      id: "gen",
      title: "근태생성기",
      type: "program",
      lang: "C# WPF",
      tech: ["WPF", "Pocketbase", "LLM API"],
      displayTech: ["#WPF", "#Pocketbase", "#AI-Normalization"],
      desc: "세콤 미사용 인원의 비정형 수동 데이터를 AI API로 정규화하여 근태 데이터를 자동 생성합니다.",
      detailDesc:
        "수동 기입 데이터의 텍스트 패턴을 AI API로 분석하여 정형화된 근태 포맷으로 변환합니다. Pocketbase를 통해 관리하며 최종 결과물을 엑셀로 산출합니다.",
      features: [
        "AI 기반 텍스트 정규화",
        "수동 기입 오류 자동 교정",
        "엑셀 통합 리포트 출력",
      ],
      images: ["/images/gen.png"],
      hasImages: true,
      hasLink: false,
    },
    {
      id: "macro",
      title: "근태 체크 매크로",
      type: "program",
      lang: "Python",
      tech: ["PyAutoGUI", "Image Recognition"],
      displayTech: ["#PyAutoGUI", "#Image-Recognition"],
      desc: "SAP B1의 반복적인 근태 승인 업무를 이미지 인식 기반으로 월 단위 자동 처리하는 RPA입니다.",
      detailDesc:
        "좌표값이 아닌 화면의 버튼 이미지를 직접 매칭하여 UI 변화에 유연하게 대응합니다. 매일 수행하던 단순 반복 업무를 월 단위로 일괄 처리하여 시간을 단축했습니다.",
      features: [
        "이미지 매칭 기반 UI 탐색",
        "동적 환경 대응 로직",
        "RPA 업무 자동화",
      ],
      hasImages: false,
      hasLink: false,
    },
    {
      id: "japan",
      title: "일본어 단어 학습 앱",
      type: "web",
      lang: "React (Vite)",
      tech: ["React", "Supabase"],
      displayTech: ["#React", "#Supabase"],
      desc: "Supabase DB를 활용한 개인 학습용 일본어 퀴즈 및 학습 앱입니다.",
      url: "https://japan-neon.vercel.app/",
      hasImages: false,
      hasLink: true,
    },
    {
      id: "sjcal",
      title: "연차/근태 현황 조회",
      type: "web",
      lang: "Next.js",
      tech: ["Next.js", "Supabase"],
      displayTech: ["#Next.js", "#Supabase"],
      desc: "사내 연차 잔여분과 근태 현황을 실시간으로 확인하는 대시보드입니다.",
      url: "https://sjcal.vercel.app/",
      hasImages: false,
      hasLink: true,
    },
    {
      id: "cssj",
      title: "과거 CS 내역 조회",
      type: "web",
      lang: "React (Vite)",
      tech: ["React", "Supabase"],
      displayTech: ["#React", "#Supabase"],
      desc: "분산된 CS 이력을 통합 조회하여 빠른 업무 대응을 지원하는 웹 앱입니다.",
      url: "https://cssj.vercel.app/",
      hasImages: false,
      hasLink: true,
    },
    {
      id: "att-nu",
      title: "근태기록 조회 서비스",
      type: "web",
      lang: "HTML",
      tech: ["HTML", "CSS"],
      displayTech: ["#HTML", "#Vanilla-CSS"],
      desc: "개별 근태 로그를 정갈한 레이아웃으로 확인 가능한 정적 웹 서비스입니다.",
      url: "https://att-nu.vercel.app/",
      hasImages: false,
      hasLink: true,
    },
  ];

  const selectedProject = projects.find((p) => p.id === selectedProjectId);
  const closeModal = useCallback(() => {
    setSelectedProjectId(null);
    setCurrentImgIndex(0);
  }, []);
  const nextSlide = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (selectedProject?.images)
        setCurrentImgIndex(
          (prev) => (prev + 1) % selectedProject.images!.length,
        );
    },
    [selectedProject],
  );
  const prevSlide = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (selectedProject?.images)
        setCurrentImgIndex(
          (prev) =>
            (prev - 1 + selectedProject.images!.length) %
            selectedProject.images!.length,
        );
    },
    [selectedProject],
  );

  // --- [핵심 추가] 키보드 컨트롤 로직 ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 렌더링 모달이 열려있을 때
      if (isRenderModalOpen) {
        if (e.key === "ArrowLeft") {
          setCurrentRenderIndex(
            (prev) =>
              (prev - 1 + visualizationImages.length) %
              visualizationImages.length,
          );
        } else if (e.key === "ArrowRight") {
          setCurrentRenderIndex(
            (prev) => (prev + 1) % visualizationImages.length,
          );
        } else if (e.key === "Escape") {
          setIsRenderModalOpen(false);
        }
      }
      // 프로젝트 상세 모달이 열려있을 때
      else if (selectedProject) {
        if (e.key === "ArrowLeft" && selectedProject.images) {
          setCurrentImgIndex(
            (prev) =>
              (prev - 1 + selectedProject.images!.length) %
              selectedProject.images!.length,
          );
        } else if (e.key === "ArrowRight" && selectedProject.images) {
          setCurrentImgIndex(
            (prev) => (prev + 1) % selectedProject.images!.length,
          );
        } else if (e.key === "Escape") {
          closeModal();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    isRenderModalOpen,
    selectedProject,
    visualizationImages.length,
    closeModal,
  ]);

  // 스크롤 및 Sticky 처리 로직
  useEffect(() => {
    const handleScroll = () => {
      if (navWrapperRef.current) {
        const wrapperTop = navWrapperRef.current.getBoundingClientRect().top;
        setIsSticky(wrapperTop <= 32);
      }

      const sections = [
        { id: "header", name: "header" },
        { id: "work-anchor", name: "work" },
        { id: "design-anchor", name: "design" },
        { id: "footer", name: "footer" },
      ];
      let currentSection = "header";
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 250) {
            currentSection = section.name;
          }
        }
      }

      // Check if scrolled to the absolute bottom
      if (
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight - 100
      ) {
        currentSection = "footer";
      }

      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const targetId =
      id === "work" ? "work-anchor" : id === "design" ? "design-anchor" : id;
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 160;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${isDarkMode ? "dark" : ""} min-h-screen bg-[#f3f4f6] dark:bg-[#0f1117] text-[#1a1a1a] dark:text-slate-100 pb-32 font-sans font-light antialiased selection:bg-[#ffeb3b]/60 relative`}
    >
      {/* Intro & Header */}
      <header
        id="header"
        className="max-w-6xl mx-auto px-6 pt-32 pb-8 relative z-10"
      >
        <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 font-mono text-[11px] tracking-[0.2em] uppercase mb-6">
          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
          <span>Connecting Silos with Tech</span>
        </div>
        <h1 className="text-4xl md:text-7xl font-light tracking-tighter leading-[1.1] text-black dark:text-white mb-8 break-keep relative">
          실무와 기술 사이의 빈틈을 메우는
          <br className="md:block hidden" />
          <span className="relative z-10 inline-block font-bold mt-2 text-black dark:text-white">
            <span className="absolute left-0 -bottom-1 w-full h-[12px] bg-[#ffee00] -z-10 rounded-sm"></span>
            김한영
          </span>
          입니다.
        </h1>
        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed font-light break-keep">
          현장의 메커니즘을 이해하고 데이터를 설계하는 조력자입니다.
        </p>
      </header>

      {/* Sticky 네비게이션 */}
      <div className="sticky top-8 z-[100] w-full flex justify-center px-6 mb-24 pointer-events-none">
        <nav className="pointer-events-auto flex items-center gap-8 px-10 py-4 rounded-full bg-white/70 dark:bg-[#181a20]/40 backdrop-blur-md border border-white/80 dark:border-slate-700/80 shadow-lg">
          {[
            { name: "KIM HAN YEONG", id: "header" },
            { name: "Work", id: "work" },
            { name: "Design", id: "design" },
            { name: "Contact", id: "footer" },
          ].map((item, index) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className={`font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] relative transition-colors ${
                index === 0
                  ? "border-r border-slate-200 dark:border-slate-700/60 pr-8 hidden md:block"
                  : ""
              } ${
                activeSection === item.id
                  ? "text-black dark:text-white font-bold"
                  : "text-slate-400 dark:text-slate-500 hover:text-black dark:hover:text-white"
              }`}
            >
              <span className="relative z-10 inline-block">
                {item.name}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-[#ffee00] rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </span>
            </button>
          ))}

          {/* Dark Mode Toggle */}
          <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700 ml-2"></div>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="ml-2 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
          >
            {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </nav>
      </div>

      <main className="max-w-6xl mx-auto px-6 space-y-20 relative z-0">
        {/* Engineering Core */}
        <section
          id="work-anchor"
          className="scroll-mt-40 bg-white dark:bg-[#181a20] rounded-[2rem] p-8 md:p-12 border border-slate-200 dark:border-slate-700/60 shadow-sm dark:shadow-none relative overflow-hidden font-light"
        >
          <div className="flex flex-col lg:flex-row gap-12 relative z-10">
            <div className="lg:w-1/3">
              <div className="flex items-center gap-3 text-blue-600 uppercase tracking-[0.3em] font-bold text-xs mb-6 font-mono">
                <Settings size={18} />
                <span>Engineering Core</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-black dark:text-white uppercase mb-6 leading-none tracking-tight">
                Field Experience
                <br />& System PM
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                데이터의 단절을 해결하여 업무 효율을 개선하는 실무
                엔지니어입니다.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 font-light">
              <div className="space-y-4 p-5 bg-slate-50 dark:bg-[#1e2129] rounded-2xl border border-slate-100 dark:border-slate-700/40">
                <div className="flex items-center gap-2 text-black dark:text-white font-semibold text-sm uppercase font-mono">
                  <Cpu size={14} className="text-blue-600" />
                  <h4>Technical Support</h4>
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  현대차 협력사 설계 경력 및 남양연구소 자율주행 로봇 기술 지원
                  수행.
                </p>
              </div>
              <div className="space-y-4 p-5 bg-slate-50 dark:bg-[#1e2129] rounded-2xl border border-slate-100 dark:border-slate-700/40">
                <div className="flex items-center gap-2 text-black dark:text-white font-semibold text-sm uppercase font-mono">
                  <ShieldCheck size={14} className="text-blue-600" />
                  <h4>System Management</h4>
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  SAP B1 도입 PM 및 실무 연계 프로그램 직접 제작/자동화 구현.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <div className="space-y-10">
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-700/60 pb-3">
              <Monitor
                size={16}
                className="text-slate-400 dark:text-slate-500"
              />
              <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 font-mono">
                Internal Programs
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {projects
                .filter((p) => p.type === "program")
                .map((p) => (
                  <div
                    key={p.id}
                    className="bg-white dark:bg-[#181a20] rounded-2xl p-6 border border-slate-200 dark:border-slate-700/60 shadow-sm dark:shadow-none hover:shadow-md transition-all flex flex-col justify-between group h-full"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-center font-mono text-slate-400 dark:text-slate-500 text-[9px]">
                        <span className="border border-slate-100 dark:border-slate-700/40 bg-slate-50 dark:bg-[#1e2129] px-2 py-0.5 rounded">
                          {p.lang}
                        </span>
                        {p.hasImages && (
                          <span className="font-bold text-blue-500 uppercase tracking-widest">
                            Detail
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-blue-600 transition-colors tracking-tight">
                        {p.title}
                      </h3>
                      <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                        {p.desc}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-6 pt-5 border-t border-slate-50 dark:border-slate-700/40">
                      <div className="flex gap-4 font-mono text-[11px] text-slate-800 dark:text-slate-200 tracking-[0.1em] font-bold uppercase">
                        {p.displayTech?.map((t) => (
                          <span key={t} className="relative z-10">
                            {t}
                            <span className="absolute left-0 bottom-0 w-full h-[6px] bg-[#ffee00]/70 dark:bg-[#ffee00]/30 -z-10"></span>
                          </span>
                        ))}
                      </div>
                      {p.hasImages && (
                        <button
                          onClick={() => setSelectedProjectId(p.id)}
                          className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-blue-600 transition-all shadow-md"
                        >
                          <ArrowRight size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-700/60 pb-3">
              <Globe size={16} className="text-slate-400 dark:text-slate-500" />
              <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 font-mono">
                Web Applications
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {projects
                .filter((p) => p.type === "web")
                .map((p) => (
                  <div
                    key={p.id}
                    className="bg-white dark:bg-[#181a20] rounded-2xl p-6 border border-slate-200 dark:border-slate-700/60 shadow-sm dark:shadow-none hover:shadow-md transition-all flex flex-col justify-between group h-full"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-center font-mono text-slate-400 dark:text-slate-500 text-[9px]">
                        <span className="border border-slate-100 dark:border-slate-700/40 bg-slate-50 dark:bg-[#1e2129] px-2 py-0.5 rounded uppercase">
                          {p.lang}
                        </span>
                        <span className="font-bold text-emerald-500 uppercase tracking-widest">
                          Live
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-black dark:text-white tracking-tight group-hover:text-emerald-500 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                        {p.desc}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-6 pt-5 border-t border-slate-50 dark:border-slate-700/40">
                      <div className="flex gap-4 font-mono text-[11px] text-slate-800 dark:text-slate-200 tracking-[0.1em] font-bold uppercase">
                        {p.displayTech?.map((t) => (
                          <span key={t} className="relative z-10">
                            {t}
                            <span className="absolute left-0 bottom-0 w-full h-[6px] bg-[#ffee00]/70 dark:bg-[#ffee00]/30 -z-10"></span>
                          </span>
                        ))}
                      </div>
                      {p.hasLink && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-emerald-500 hover:text-white transition-all shadow-md"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </div>

        {/* Design Section (상하 패딩 없애고 꽉 차게) */}
        <section
          id="design-anchor"
          className="scroll-mt-40 bg-white dark:bg-[#181a20] rounded-[2rem] border border-slate-200 dark:border-slate-700/60 shadow-sm dark:shadow-none relative group overflow-hidden transition-all duration-500"
        >
          <div className="p-8 md:p-10 border-b border-slate-100 dark:border-slate-700/40 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Palette
                size={20}
                className="text-slate-400 dark:text-slate-500"
              />
              <h2 className="text-[11px] font-medium uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 font-mono">
                Design & Visualization
              </h2>
            </div>
            <div className="flex gap-4 font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              <span>AutoCAD</span> / <span>Solidworks</span> /{" "}
              <span>KeyShot</span> / <span>SketchUp</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-4 p-8 md:p-12 space-y-6 flex flex-col justify-center">
              {/* Software Icons */}
              <div className="flex gap-5 mb-6 flex-wrap">
                {[
                  {
                    name: "AutoCAD",
                    icon: <SiAutocad size={46} />,
                    color: "from-[#E32119] to-[#8A140F]",
                    shadow: "shadow-[#E32119]/40",
                  },
                  {
                    name: "Solidworks",
                    icon: <SiDassaultsystemes size={44} />,
                    color: "from-[#D9252A] to-[#A31C1F]",
                    shadow: "shadow-[#D9252A]/40",
                  },
                  {
                    name: "Office 365",
                    icon: <TbBrandOffice size={44} strokeWidth={1.5} />,
                    color: "from-[#D83B01] to-[#BA3301]",
                    shadow: "shadow-[#D83B01]/40",
                  },
                  {
                    name: "SketchUp",
                    icon: <SiSketchup size={40} />,
                    color: "from-[#005F9E] to-[#003B63]",
                    shadow: "shadow-[#005F9E]/30",
                  },
                  {
                    name: "KeyShot",
                    icon: <Aperture size={46} strokeWidth={1.5} />,
                    color: "from-[#111827] to-[#030712]",
                    shadow: "shadow-slate-900/40",
                  },
                  {
                    name: "SAP B1",
                    icon: <SiSap size={46} />,
                    color: "from-[#0FAAFF] to-[#007AC9]",
                    shadow: "shadow-[#0FAAFF]/40",
                  },
                ].map((sw) => (
                  <div key={sw.name} className="group/icon relative mt-2">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${sw.color} flex items-center justify-center text-white shadow-xl ${sw.shadow} border-t border-white/20 group-hover/icon:-translate-y-1.5 group-hover/icon:shadow-2xl transition-all duration-400 cursor-default`}
                    >
                      {sw.icon}
                    </div>
                    {/* Glassmorphism Tooltip */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-white/70 dark:bg-[#181a20]/60 backdrop-blur-md border border-white/80 dark:border-slate-700/80 shadow-lg opacity-0 group-hover/icon:opacity-100 transition-all duration-300 pointer-events-none z-20 translate-y-1 group-hover/icon:translate-y-0 text-slate-800 dark:text-slate-200 text-[10px] font-bold font-mono tracking-widest uppercase whitespace-nowrap">
                      {sw.name}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black dark:text-white leading-tight uppercase tracking-tighter font-black">
                  Technical
                  <br />
                  Illustration
                </h3>
              </div>
              <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed break-keep">
                사내 설비의 정밀 모델링 및 하이엔드 렌더링을 수행합니다. 정확한
                의사결정을 지원하는 고해상도 시각 자료를 제공합니다.
              </p>
              <div className="flex flex-wrap gap-4 font-mono text-[11px] text-slate-800 dark:text-slate-200 font-bold uppercase tracking-widest">
                <span className="relative z-10">
                  #Modeling
                  <span className="absolute left-0 bottom-0 w-full h-[6px] bg-[#ffee00]/70 dark:bg-[#ffee00]/30 -z-10"></span>
                </span>
                <span className="relative z-10">
                  #Rendering
                  <span className="absolute left-0 bottom-0 w-full h-[6px] bg-[#ffee00]/70 dark:bg-[#ffee00]/30 -z-10"></span>
                </span>
              </div>
            </div>

            {/* 카드 내 슬라이더 컨트롤 */}
            <div
              className="lg:col-span-8 relative min-h-[350px] lg:min-h-[500px] h-full w-full bg-slate-50 dark:bg-[#1e2129] overflow-hidden cursor-zoom-in group/image"
              onClick={() => setIsRenderModalOpen(true)}
            >
              <Image
                src={visualizationImages[currentRenderIndex]}
                alt="Rendering"
                fill
                className="object-cover transition-transform duration-700 group-hover/image:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white dark:bg-[#181a20]/90 backdrop-blur-md px-4 py-2 rounded-full text-[11px] font-bold font-mono text-black dark:text-white uppercase tracking-widest flex items-center gap-2 shadow-sm dark:shadow-none border border-slate-100 dark:border-slate-700/40">
                  <Maximize2 size={14} /> Click to Expand
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-4 pointer-events-none">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentRenderIndex(
                      (p) =>
                        (p - 1 + visualizationImages.length) %
                        visualizationImages.length,
                    );
                  }}
                  className="p-3 bg-white dark:bg-[#181a20]/40 backdrop-blur-md text-black dark:text-white rounded-full opacity-0 group-hover/image:opacity-100 transition-all pointer-events-auto hover:bg-white dark:bg-[#181a20] shadow-lg"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentRenderIndex(
                      (p) => (p + 1) % visualizationImages.length,
                    );
                  }}
                  className="p-3 bg-white dark:bg-[#181a20]/40 backdrop-blur-md text-black dark:text-white rounded-full opacity-0 group-hover/image:opacity-100 transition-all pointer-events-auto hover:bg-white dark:bg-[#181a20] shadow-lg"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="footer"
        className="max-w-6xl mx-auto px-6 mt-32 text-center pb-24 border-t border-slate-200 dark:border-slate-700/60 pt-16 font-mono text-[10px] tracking-[0.5em] uppercase"
      >
        <div className="mb-10 flex flex-col items-center gap-4">
          <p className="text-slate-400 dark:text-slate-500 tracking-widest lowercase italic">
            get in touch
          </p>
          <a
            href="mailto:han0e@kakao.com"
            className="text-[18px] font-bold text-black dark:text-white tracking-normal lowercase relative z-10 group"
          >
            han0e@kakao.com
            <span className="absolute left-0 bottom-1 w-full h-[8px] bg-[#ffee00]/70 dark:bg-[#ffee00]/30 -z-10 group-hover:h-full transition-all duration-300"></span>
          </a>
        </div>
        <div className="mt-20 flex flex-col items-center gap-6">
          <p className="text-slate-500 dark:text-slate-400 italic font-light tracking-widest">
            © 2026 KIM HAN YEONG — ALL RIGHTS RESERVED
          </p>
          <div className="flex flex-col items-center gap-3">
            <p className="text-[11px] text-slate-400 dark:text-slate-500 tracking-wide font-light break-keep text-center">
              이 페이지는 <span className="font-bold text-slate-600 dark:text-slate-300">Vibe Coding</span>으로 제작되었으며, 다음 패키지가 사용되었습니다.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion", "Lucide Icons"].map((tech) => (
                <span key={tech} className="px-2.5 py-1 bg-slate-200/50 dark:bg-[#1e2129] border border-slate-300/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 text-[9px] font-mono rounded-full uppercase tracking-widest shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* --- [핵심 수정] 렌더링 확대 모달 (마우스 + 키보드 컨트롤 지원) --- */}
      {isRenderModalOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setIsRenderModalOpen(false)}
        >
          <button className="absolute top-8 right-8 p-3 bg-white dark:bg-[#181a20]/10 text-white rounded-full hover:bg-white dark:bg-[#181a20]/20 transition-all z-[210]">
            <X size={28} />
          </button>

          {/* 마우스 좌측 넘기기 버튼 */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentRenderIndex(
                (p) =>
                  (p - 1 + visualizationImages.length) %
                  visualizationImages.length,
              );
            }}
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 p-4 bg-white dark:bg-[#181a20]/10 hover:bg-white dark:bg-[#181a20]/30 backdrop-blur-md text-white rounded-full transition-all z-[210]"
          >
            <ChevronLeft size={32} />
          </button>

          {/* 마우스 우측 넘기기 버튼 */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentRenderIndex(
                (p) => (p + 1) % visualizationImages.length,
              );
            }}
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 p-4 bg-white dark:bg-[#181a20]/10 hover:bg-white dark:bg-[#181a20]/30 backdrop-blur-md text-white rounded-full transition-all z-[210]"
          >
            <ChevronRight size={32} />
          </button>

          {/* 이미지 컨테이너 (100% 초과 확대 방지) */}
          <div
            className="relative w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={visualizationImages[currentRenderIndex]}
              alt="Rendering Detail"
              className="max-w-full max-h-full object-scale-down shadow-2xl rounded-sm"
            />
            {/* 현재 페이지 번호 인디케이터 */}
            <div className="absolute bottom-4 md:bottom-[-20px] text-white/50 font-mono text-[11px] tracking-widest bg-black/50 px-4 py-1.5 rounded-full">
              {currentRenderIndex + 1} / {visualizationImages.length}
            </div>
          </div>
        </div>
      )}

      {/* 프로젝트 모달 (마우스 + 키보드 지원 연동됨) */}
      {selectedProject && selectedProject.hasImages && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-[200] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-6xl h-full md:h-auto max-h-[90vh] bg-white dark:bg-[#181a20] rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-6 right-6 p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-black dark:text-white z-[120]"
              onClick={closeModal}
            >
              <X size={24} />
            </button>
            <div className="relative w-full md:w-[60%] h-1/2 md:h-auto bg-slate-50 dark:bg-[#1e2129] flex items-center justify-center min-h-[300px]">
              <Image
                src={selectedProject.images![currentImgIndex]}
                alt="Detail"
                fill
                className="object-contain p-6 md:p-12"
                priority
              />
              {selectedProject.images!.length > 1 && (
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between">
                  <button
                    className="p-2 bg-white dark:bg-[#181a20]/80 hover:bg-blue-600 hover:text-white rounded-full transition-all shadow-md"
                    onClick={prevSlide}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    className="p-2 bg-white dark:bg-[#181a20]/80 hover:bg-blue-600 hover:text-white rounded-full transition-all shadow-md"
                    onClick={nextSlide}
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>
            <div className="w-full md:w-[40%] p-10 flex flex-col justify-between overflow-y-auto bg-white dark:bg-[#181a20] border-l border-slate-50 dark:border-slate-700/40">
              <div className="space-y-6 text-left">
                <header className="space-y-1">
                  <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold font-mono">
                    Detail View
                  </span>
                  <h3 className="text-2xl font-bold text-black dark:text-white uppercase tracking-tight">
                    {selectedProject.title}
                  </h3>
                </header>
                <div className="space-y-4 font-light text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {selectedProject.detailDesc || selectedProject.desc}
                </div>
              </div>
              <button
                onClick={closeModal}
                className="mt-8 w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all text-[11px] uppercase tracking-widest"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
