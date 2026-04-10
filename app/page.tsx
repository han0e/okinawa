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
} from "lucide-react";

const Portfolio = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [currentRenderIndex, setCurrentRenderIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("work");
  const [isRenderModalOpen, setIsRenderModalOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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
      images: ["/images/salarium_1.png", "/images/salarium_2.png"],
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
        { id: "header", name: "work" },
        { id: "work-anchor", name: "work" },
        { id: "design-anchor", name: "design" },
        { id: "footer", name: "footer" },
      ];
      const scrollPosition = window.scrollY + 250;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          if (
            scrollPosition >= top &&
            scrollPosition < top + element.offsetHeight
          ) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id === "header" ? "work" : id);
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
    <div className="min-h-screen bg-[#f3f4f6] text-[#1a1a1a] pb-32 font-sans font-light antialiased selection:bg-[#ffeb3b]/60 relative">
      {/* Intro & Header */}
      <header
        id="header"
        className="max-w-6xl mx-auto px-6 pt-32 pb-8 relative z-10"
      >
        <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px] tracking-[0.2em] uppercase mb-6">
          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
          <span>Connecting Silos with Tech</span>
        </div>
        <h1 className="text-4xl md:text-7xl font-light tracking-tighter leading-[1.1] text-black mb-8 break-keep relative">
          실무와 기술 사이의 빈틈을 메우는
          <br className="md:block hidden" />
          <span className="relative z-10 font-bold">
            김한영
            <span className="absolute left-0 bottom-1 w-full h-[12px] bg-[#ffeb3b] -z-10 rounded-sm"></span>
          </span>
          입니다.
        </h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed font-light break-keep">
          현장의 메커니즘을 이해하고 데이터를 설계하는 조력자입니다.
        </p>
      </header>

      {/* Sticky 네비게이션 */}
      <div className="sticky top-8 z-[100] w-full flex justify-center px-6 mb-24 pointer-events-none">
        <nav className="pointer-events-auto flex items-center gap-8 px-10 py-4 rounded-full border border-slate-200 bg-white/90 backdrop-blur-xl shadow-2xl shadow-slate-300/40">
          {[
            { name: "KIM HAN YEONG", id: "header" },
            { name: "Work", id: "work" },
            { name: "Design", id: "design" },
            { name: "Contact", id: "footer" },
          ].map((item, index) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className={`font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] relative transition-colors ${index === 0 ? "text-black border-r border-slate-200 pr-8 font-bold hidden md:block" : "text-slate-400 hover:text-black"} ${
                activeSection === item.id ||
                (item.id === "header" && activeSection === "work") ||
                (item.id === "footer" && activeSection === "footer")
                  ? "text-black font-bold"
                  : ""
              }`}
            >
              {item.name}
              {(activeSection === item.id ||
                (item.id === "header" && activeSection === "work") ||
                (item.id === "footer" && activeSection === "footer")) &&
                index !== 0 && (
                  <span className="absolute -bottom-1.5 left-0 w-full h-1 bg-[#ffeb3b] rounded-full"></span>
                )}
            </button>
          ))}
        </nav>
      </div>

      <main className="max-w-6xl mx-auto px-6 space-y-20 relative z-0">
        {/* Engineering Core */}
        <section className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden font-light">
          <div className="flex flex-col lg:flex-row gap-12 relative z-10">
            <div className="lg:w-1/3">
              <div className="flex items-center gap-3 text-blue-600 uppercase tracking-[0.3em] font-bold text-xs mb-6 font-mono">
                <Settings size={18} />
                <span>Engineering Core</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-black uppercase mb-6 leading-none tracking-tight">
                Field Experience
                <br />& System PM
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                데이터의 단절을 해결하여 업무 효율을 개선하는 실무
                엔지니어입니다.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 font-light">
              <div className="space-y-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 text-black font-semibold text-sm uppercase font-mono">
                  <Cpu size={14} className="text-blue-600" />
                  <h4>Technical Support</h4>
                </div>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  현대차 협력사 설계 경력 및 남양연구소 자율주행 로봇 기술 지원
                  수행.
                </p>
              </div>
              <div className="space-y-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 text-black font-semibold text-sm uppercase font-mono">
                  <ShieldCheck size={14} className="text-blue-600" />
                  <h4>System Management</h4>
                </div>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  SAP B1 도입 PM 및 실무 연계 프로그램 직접 제작/자동화 구현.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <div className="space-y-10">
          <section className="space-y-6">
            <div
              id="work-anchor"
              className="flex items-center gap-3 border-b border-slate-200 pb-3"
            >
              <Monitor size={16} className="text-slate-400" />
              <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400 font-mono">
                Internal Programs
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {projects
                .filter((p) => p.type === "program")
                .map((p) => (
                  <div
                    key={p.id}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group h-full"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-center font-mono text-slate-400 text-[9px]">
                        <span className="border border-slate-100 bg-slate-50 px-2 py-0.5 rounded">
                          {p.lang}
                        </span>
                        {p.hasImages && (
                          <span className="font-bold text-blue-500 uppercase tracking-widest">
                            Detail
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-black group-hover:text-blue-600 transition-colors tracking-tight">
                        {p.title}
                      </h3>
                      <p className="text-[13px] text-slate-500 leading-relaxed line-clamp-2">
                        {p.desc}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-6 pt-5 border-t border-slate-50">
                      <div className="flex gap-4 font-mono text-[11px] text-slate-800 tracking-[0.1em] font-bold uppercase">
                        {p.displayTech?.map((t) => (
                          <span key={t} className="relative z-10">
                            {t}
                            <span className="absolute left-0 bottom-0 w-full h-[6px] bg-[#ffeb3b]/60 -z-10"></span>
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
            <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
              <Globe size={16} className="text-slate-400" />
              <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400 font-mono">
                Web Applications
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {projects
                .filter((p) => p.type === "web")
                .map((p) => (
                  <div
                    key={p.id}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group h-full"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-center font-mono text-slate-400 text-[9px]">
                        <span className="border border-slate-100 bg-slate-50 px-2 py-0.5 rounded uppercase">
                          {p.lang}
                        </span>
                        <span className="font-bold text-emerald-500 uppercase tracking-widest">
                          Live
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-black tracking-tight group-hover:text-emerald-500 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-[13px] text-slate-500 leading-relaxed line-clamp-2">
                        {p.desc}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-6 pt-5 border-t border-slate-50">
                      <div className="flex gap-4 font-mono text-[11px] text-slate-800 tracking-[0.1em] font-bold uppercase">
                        {p.displayTech?.map((t) => (
                          <span key={t} className="relative z-10">
                            {t}
                            <span className="absolute left-0 bottom-0 w-full h-[6px] bg-[#ffeb3b]/60 -z-10"></span>
                          </span>
                        ))}
                      </div>
                      {p.hasLink && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all shadow-md"
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
        <section className="bg-white rounded-[2rem] border border-slate-200 shadow-sm relative group overflow-hidden transition-all duration-500">
          <div className="p-8 md:p-10 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Palette size={20} className="text-slate-400" />
              <h2 className="text-[11px] font-medium uppercase tracking-[0.3em] text-slate-400 font-mono">
                Design & Visualization
              </h2>
            </div>
            <div className="flex gap-4 font-mono text-[10px] text-slate-400 uppercase tracking-widest">
              <span>AutoCAD</span> / <span>Solidworks</span> /{" "}
              <span>KeyShot</span> / <span>SketchUp</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-4 p-8 md:p-12 space-y-6 flex flex-col justify-center">
              <div id="design-anchor" className="scroll-mt-40">
                <h3 className="text-2xl font-bold text-black leading-tight uppercase tracking-tighter font-black">
                  Technical
                  <br />
                  Illustration
                </h3>
              </div>
              <p className="text-[13px] text-slate-600 leading-relaxed break-keep">
                사내 설비의 정밀 모델링 및 하이엔드 렌더링을 수행합니다. 정확한
                의사결정을 지원하는 고해상도 시각 자료를 제공합니다.
              </p>
              <div className="flex flex-wrap gap-4 font-mono text-[11px] text-slate-800 font-bold uppercase tracking-widest">
                <span className="relative z-10">
                  #Modeling
                  <span className="absolute left-0 bottom-0 w-full h-[6px] bg-[#ffeb3b]/60 -z-10"></span>
                </span>
                <span className="relative z-10">
                  #Rendering
                  <span className="absolute left-0 bottom-0 w-full h-[6px] bg-[#ffeb3b]/60 -z-10"></span>
                </span>
              </div>
            </div>

            {/* 카드 내 슬라이더 컨트롤 */}
            <div
              className="lg:col-span-8 relative min-h-[350px] lg:min-h-[500px] h-full w-full bg-slate-50 overflow-hidden cursor-zoom-in group/image"
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
                <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[11px] font-bold font-mono text-black uppercase tracking-widest flex items-center gap-2 shadow-sm border border-slate-100">
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
                  className="p-3 bg-white/40 backdrop-blur-md text-black rounded-full opacity-0 group-hover/image:opacity-100 transition-all pointer-events-auto hover:bg-white shadow-lg"
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
                  className="p-3 bg-white/40 backdrop-blur-md text-black rounded-full opacity-0 group-hover/image:opacity-100 transition-all pointer-events-auto hover:bg-white shadow-lg"
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
        className="max-w-6xl mx-auto px-6 mt-32 text-center pb-24 border-t border-slate-200 pt-16 font-mono text-[10px] tracking-[0.5em] uppercase"
      >
        <div className="mb-10 flex flex-col items-center gap-4">
          <p className="text-slate-400 tracking-widest lowercase italic">
            get in touch
          </p>
          <a
            href="mailto:han0e@kakao.com"
            className="text-[18px] font-bold text-black tracking-normal lowercase relative z-10 group"
          >
            han0e@kakao.com
            <span className="absolute left-0 bottom-1 w-full h-[8px] bg-[#ffeb3b]/60 -z-10 group-hover:h-full transition-all duration-300"></span>
          </a>
        </div>
        <p className="mt-20 text-slate-500 italic font-light tracking-widest">
          © 2026 KIM HAN YEONG — ALL RIGHTS RESERVED
        </p>
      </footer>

      {/* --- [핵심 수정] 렌더링 확대 모달 (마우스 + 키보드 컨트롤 지원) --- */}
      {isRenderModalOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setIsRenderModalOpen(false)}
        >
          <button className="absolute top-8 right-8 p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all z-[210]">
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
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white rounded-full transition-all z-[210]"
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
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white rounded-full transition-all z-[210]"
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
            className="relative w-full max-w-6xl h-full md:h-auto max-h-[90vh] bg-white rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full text-black z-[120]"
              onClick={closeModal}
            >
              <X size={24} />
            </button>
            <div className="relative w-full md:w-[60%] h-1/2 md:h-auto bg-slate-50 flex items-center justify-center min-h-[300px]">
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
                    className="p-2 bg-white/80 hover:bg-blue-600 hover:text-white rounded-full transition-all shadow-md"
                    onClick={prevSlide}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    className="p-2 bg-white/80 hover:bg-blue-600 hover:text-white rounded-full transition-all shadow-md"
                    onClick={nextSlide}
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>
            <div className="w-full md:w-[40%] p-10 flex flex-col justify-between overflow-y-auto bg-white border-l border-slate-50">
              <div className="space-y-6 text-left">
                <header className="space-y-1">
                  <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold font-mono">
                    Detail View
                  </span>
                  <h3 className="text-2xl font-bold text-black uppercase tracking-tight">
                    {selectedProject.title}
                  </h3>
                </header>
                <div className="space-y-4 font-light text-slate-600 text-sm leading-relaxed">
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
