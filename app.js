const INTERNAL_BASE_URL = "https://hr.company.local";

const categoryMeta = {
  Culture: {
    id: "culture",
    label: "Culture",
    icon: "C",
    accent: "#d95f55",
    description: "팀 소개, 사진첩, 동영상과 비즈니스 공유 자료를 모아 회사 문화를 소개합니다.",
  },
  "HR Guide": {
    id: "hr-guide",
    label: "HR Guide",
    icon: "H",
    accent: "#24787c",
    description: "신규입사자 기본 가이드와 조직도, 배치도, 비상연락망, 취업규칙, 평가, 보상, 복리후생, 연차, 건강검진 등 제도 정보를 안내합니다.",
  },
  "Work Tool": {
    id: "work-tool",
    label: "Work Tool",
    icon: "W",
    accent: "#6f9272",
    description: "Google Workspace, Groupware, IT/총무 지원 등 구성원이 매일 사용하는 업무 도구를 연결합니다.",
  },
  "Help Desk": {
    id: "help-desk",
    label: "Help Desk",
    icon: "D",
    accent: "#bf842d",
    description: "FAQ와 서식 자동 발급을 통해 구성원이 필요한 지원 자료를 빠르게 찾도록 돕습니다.",
  },
};

const hrTaxonomy = {
  culture: [
    {
      label: "팀 소개",
      items: [
        { title: "Team 업무 소개", note: "팀별 주요 업무와 협업 범위" },
      ],
    },
    { label: "사진첩", items: [{ title: "송년회, 워크샵 등", note: "행사 사진과 조직문화 기록" }] },
    { label: "동영상", items: [{ title: "SBS Biz 영상 등", note: "외부 공개 영상 및 회사 소개 자료" }] },
    {
      label: "비즈니스 공유",
      items: [
        { title: "최근 IR 자료", note: "공개가능 버전, 의사결정 필요" },
        { title: "인증", note: "벤처기업인증, 연구소인정서, 의료기기제조업인증서, 가족친화인증 등" },
      ],
    },
  ],
  "hr-guide": [
    {
      label: "온보딩",
      items: [
        { title: "신규입사자 기본 가이드", note: "워크툴 계정정보, 와이파이/프린트 설정, 메일서명, 회의실 예약, 프로필 등록 및 확인서 작성" },
        { title: "조직도", note: "조직 구조와 보고 라인" },
        { title: "배치도", note: "좌석 위치와 협업 상대 정보" },
        { title: "비상연락망", note: "긴급 상황 연락 기준과 담당자" },
      ],
    },
    {
      label: "제도 안내",
      items: [
        { title: "취업규칙", note: "원페이퍼 PPT 또는 인포그래픽 형태로 제작" },
        { title: "평가 제도", note: "평가 전체 로직 설명" },
        { title: "보상 제도", note: "임금인상 로직, 성과급 로직 설명, 공개가능 수준" },
        { title: "복리후생 제도", note: "Solmedix benefit booklet 설명" },
        { title: "경조사 제도", note: "경조 기준과 신청 절차" },
        { title: "연차 제도", note: "연차 운영 및 퇴직 시 연차 정산 안내" },
        { title: "퇴직금 산출", note: "퇴직금 산정 기준" },
        { title: "건강검진", note: "검진 대상과 신청/확인 절차" },
      ],
    },
    { label: "HR Year Calendar", items: [{ title: "연차촉진, 평가 및 보상 로드맵, 연말정산 등", note: "연간 HR 주요 일정" }] },
  ],
  "work-tool": [
    { label: "Google Workspace", items: [{ title: "Google Workspace", note: "메일, 드라이브, 캘린더, 문서 협업" }] },
    { label: "Groupware", items: [{ title: "Groupware", note: "전자결재, 공지, 사내 게시판" }] },
    { label: "IT/총무 지원", items: [{ title: "IT/총무 지원", note: "Wifi, Print, 비품 신청 등 업무 환경 지원" }] },
  ],
  "help-desk": [
    {
      label: "FAQ와 서식 자동 발급",
      items: [{ title: "재직증명서, 경력증명서, 명함신청", note: "FAQ 확인 및 서식 자동 발급" }],
    },
  ],
};

const resources = [
  {
    category: "Culture",
    group: "팀 소개",
    title: "Team Role & 개인 Role",
    description: "팀별 역할과 개인 업무 범위를 확인하는 소개 페이지입니다.",
    tags: ["팀 소개", "Role", "조직 이해"],
    url: `${INTERNAL_BASE_URL}/culture/team-role`,
  },
  {
    category: "HR Guide",
    group: "온보딩",
    title: "조직도, 배치도, 비상연락망",
    description: "부서, 리더, 좌석 정보와 긴급 연락 기준을 빠르게 확인합니다.",
    tags: ["조직도", "배치도", "비상연락망"],
    url: `${INTERNAL_BASE_URL}/guide/org-chart`,
  },
  {
    category: "HR Guide",
    group: "온보딩",
    title: "배치도",
    description: "오피스 좌석과 팀별 위치를 안내합니다.",
    tags: ["좌석", "오피스", "배치도"],
    url: `${INTERNAL_BASE_URL}/guide/seat-map`,
  },
  {
    category: "Culture",
    group: "사내 문화",
    title: "사진첩",
    description: "워크샵, 송년회 등 사내 이벤트 사진을 모아둡니다.",
    tags: ["워크샵", "송년회", "사진"],
    url: `${INTERNAL_BASE_URL}/culture/gallery`,
  },
  {
    category: "Culture",
    group: "사내 문화",
    title: "외부 영상",
    description: "회사와 조직 문화를 소개하는 외부 공개 영상을 연결합니다.",
    tags: ["영상", "브랜드", "문화"],
    url: `${INTERNAL_BASE_URL}/culture/videos`,
  },
  {
    category: "Culture",
    group: "비즈니스 공유",
    title: "인증",
    description: "벤처기업인증, 연구소인정서, 의료기기제조업인증서, 가족친화인증 등 회사 인증 자료를 모아둡니다.",
    tags: ["인증", "벤처기업인증", "연구소인정서", "의료기기제조업인증서", "가족친화인증"],
    url: `${INTERNAL_BASE_URL}/culture/certifications`,
  },
  {
    category: "HR Guide",
    group: "온보딩",
    title: "신규입사자 가이드",
    description: "입사 첫날부터 첫 주까지 필요한 체크리스트와 안내를 제공합니다.",
    tags: ["온보딩", "신규입사자", "가이드"],
    url: `${INTERNAL_BASE_URL}/guide/onboarding`,
  },
  {
    category: "HR Guide",
    group: "제도 안내",
    title: "취업규칙",
    description: "근무 기준, 절차, 구성원 권리와 의무를 확인합니다.",
    tags: ["취업규칙", "근무", "제도"],
    url: `${INTERNAL_BASE_URL}/guide/rules`,
  },
  {
    category: "HR Guide",
    group: "제도 안내",
    title: "평가 제도",
    description: "평가 주기, 기준, 프로세스를 안내합니다.",
    tags: ["평가", "성과", "프로세스"],
    url: `${INTERNAL_BASE_URL}/guide/performance`,
  },
  {
    category: "HR Guide",
    group: "제도 안내",
    title: "보상 제도",
    description: "급여, 인센티브, 보상 정책의 핵심 내용을 정리합니다.",
    tags: ["보상", "급여", "인센티브"],
    url: `${INTERNAL_BASE_URL}/guide/rewards`,
  },
  {
    category: "HR Guide",
    group: "제도 안내",
    title: "복리후생 제도",
    description: "구성원이 사용할 수 있는 복지와 지원 항목을 확인합니다.",
    tags: ["복리후생", "복지", "지원"],
    url: `${INTERNAL_BASE_URL}/guide/benefits`,
  },
  {
    category: "HR Guide",
    group: "제도 안내",
    title: "경조사 안내",
    description: "경조휴가, 경조금, 신청 절차를 안내합니다.",
    tags: ["경조사", "휴가", "신청"],
    url: `${INTERNAL_BASE_URL}/guide/family-events`,
  },
  {
    category: "HR Guide",
    group: "제도 안내",
    title: "연차 제도",
    description: "연차 발생, 사용, 정산 기준을 확인합니다.",
    tags: ["연차", "휴가", "정산"],
    url: `${INTERNAL_BASE_URL}/guide/annual-leave`,
  },
  {
    category: "HR Guide",
    group: "제도 안내",
    title: "퇴직금 산출",
    description: "퇴직금 계산 기준과 확인 절차를 안내합니다.",
    tags: ["퇴직금", "산출", "정산"],
    url: `${INTERNAL_BASE_URL}/guide/severance`,
  },
  {
    category: "HR Guide",
    group: "성장 지원",
    title: "교육훈련",
    description: "직무 교육, 외부 세미나, 성장 프로그램을 확인합니다.",
    tags: ["교육훈련", "성장", "학습"],
    url: `${INTERNAL_BASE_URL}/guide/training`,
  },
  {
    category: "HR Guide",
    group: "성장 지원",
    title: "도서 지원",
    description: "도서 구매와 학습 자료 지원 신청 기준을 안내합니다.",
    tags: ["도서", "지원", "학습"],
    url: `${INTERNAL_BASE_URL}/guide/books`,
  },
  {
    category: "Work Tool",
    group: "업무 도구",
    title: "Google Workspace",
    description: "메일, 드라이브, 캘린더, 문서 협업 도구로 이동합니다.",
    tags: ["Google", "Workspace", "협업"],
    url: `${INTERNAL_BASE_URL}/tools/google-workspace`,
  },
  {
    category: "Work Tool",
    group: "업무 도구",
    title: "Groupware",
    description: "전자결재, 공지, 사내 게시판 등 그룹웨어 메뉴입니다.",
    tags: ["Groupware", "전자결재", "공지"],
    url: `${INTERNAL_BASE_URL}/tools/groupware`,
  },
  {
    category: "Work Tool",
    group: "IT/총무 지원",
    title: "Wifi, Print 등",
    description: "무선 네트워크, 프린터, 장비 사용 방법을 안내합니다.",
    tags: ["Wifi", "Print", "IT"],
    url: `${INTERNAL_BASE_URL}/tools/it-support`,
  },
  {
    category: "Work Tool",
    group: "IT/총무 지원",
    title: "사내 비품 신청방법",
    description: "업무에 필요한 비품 신청 기준과 처리 절차를 확인합니다.",
    tags: ["비품", "총무", "신청"],
    url: `${INTERNAL_BASE_URL}/tools/supplies`,
  },
  {
    category: "Help Desk",
    group: "소통 및 지원",
    title: "FAQ",
    description: "자주 묻는 HR 질문과 답변을 빠르게 찾습니다.",
    tags: ["FAQ", "문의", "지원"],
    url: `${INTERNAL_BASE_URL}/help/faq`,
  },
  {
    category: "Help Desk",
    group: "소통 및 지원",
    title: "서식 자동 발급",
    description: "재직증명서, 경력증명서, 명함신청을 빠르게 진행합니다.",
    tags: ["서식자동발급", "재직증명서", "명함신청"],
    url: `${INTERNAL_BASE_URL}/help/forms`,
  },
];

let activeCategory = "All";
let activeQuery = "";
let toastTimer;

const categoryOverview = document.querySelector("#category-overview");
const categoryFeatureGrid = document.querySelector("#category-feature-grid");
const categoryTabs = document.querySelector("#category-tabs");
const resourceGrid = document.querySelector("#resource-grid");
const resultMeta = document.querySelector("#result-meta");
const emptyState = document.querySelector("#empty-state");
const globalSearch = document.querySelector("#global-search");
const searchPopularPanel = document.querySelector("#search-popular-panel");
const directorySearch = document.querySelector("#directory-search");
const toast = document.querySelector("#toast");
const heroImage = document.querySelector(".hero-image");
const heroImageTrigger = document.querySelector(".hero-image-trigger");
const heroGalleryLink = document.querySelector(".hero-gallery-link");
const mainPageToc = document.querySelector("#main-page-toc");
const calendarSpotlightTrigger = document.querySelector(".calendar-spotlight-trigger");
const calendarSpotlightImage = document.querySelector(".calendar-spotlight-media img");
const imageLightbox = document.querySelector("#image-lightbox");
const imageLightboxMedia = document.querySelector("#image-lightbox-media");
const imageLightboxClose = document.querySelector(".image-lightbox-close");
const imageLightboxStage = document.querySelector("#image-lightbox-stage");
const imageLightboxCanvas = document.querySelector("#image-lightbox-canvas");
const imageLightboxZoomValue = document.querySelector("#image-lightbox-zoom-value");
const imageLightboxZoomButtons = document.querySelectorAll("[data-lightbox-zoom]");
let imageLightboxZoom = 1;
let imageLightboxBaseSize = { width: 0, height: 0 };
let imageLightboxLastTrigger = null;
let imageLightboxDragState = null;
const IMAGE_LIGHTBOX_MIN_ZOOM = 0.5;
const IMAGE_LIGHTBOX_MAX_ZOOM = 3;
const IMAGE_LIGHTBOX_ZOOM_STEP = 0.25;

function normalize(value) {
  return value.trim().toLowerCase();
}

function getGroups(category) {
  return [...new Set(resources.filter((item) => item.category === category).map((item) => item.group))];
}

function isPlaceholderUrl(url) {
  return url.includes("hr.company.local");
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 3200);
}

function renderCategoryOverview() {
  if (!categoryOverview) {
    return;
  }

  categoryOverview.innerHTML = Object.values(categoryMeta)
    .map((meta) => {
      const count = resources.filter((item) => item.category === meta.label).length;
      const groups = getGroups(meta.label)
        .slice(0, 4)
        .map((group) => `<li>${group}</li>`)
        .join("");

      return `
        <article class="category-card reveal" id="${meta.id}">
          <div class="category-top">
            <span class="category-icon" style="background:${meta.accent}" aria-hidden="true">${meta.icon}</span>
            <span class="category-count">${count}개 콘텐츠</span>
          </div>
          <h3>${meta.label}</h3>
          <p>${meta.description}</p>
          <ul class="category-list">${groups}</ul>
        </article>
      `;
    })
    .join("");
}

function renderTabs() {
  if (!categoryTabs) {
    return;
  }

  const categories = ["All", ...Object.keys(categoryMeta)];
  categoryTabs.innerHTML = categories
    .map((category) => {
      const selected = category === activeCategory;
      const label = category === "All" ? "전체" : category;
      return `
        <button class="tab-button" type="button" role="tab" aria-selected="${selected}" data-category="${category}">
          ${label}
        </button>
      `;
    })
    .join("");

  categoryTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderTabs();
      renderResources();
    });
  });
}

function matchesQuery(item, query) {
  if (!query) {
    return true;
  }

  const target = [item.category, item.group, item.title, item.description, ...item.tags].join(" ");
  const normalizedTarget = normalize(target);
  return query.split(/\s+/).filter(Boolean).some((term) => normalizedTarget.includes(term));
}

function getFilteredResources() {
  const query = normalize(activeQuery);
  return resources.filter((item) => {
    const categoryMatch = activeCategory === "All" || item.category === activeCategory;
    return categoryMatch && matchesQuery(item, query);
  });
}

function createResourceCard(item) {
  const meta = categoryMeta[item.category];
  const card = document.createElement("a");
  card.className = "resource-card reveal";
  card.href = item.url;
  card.target = "_blank";
  card.rel = "noreferrer";
  card.style.setProperty("--accent", meta.accent);
  card.innerHTML = `
    <div class="resource-meta">
      <span class="chip">${item.category}</span>
      <span class="chip">${item.group}</span>
    </div>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    <div class="resource-footer">
      <span>${item.tags.slice(0, 2).join(" · ")}</span>
      <span aria-hidden="true">›</span>
    </div>
  `;

  card.addEventListener("click", (event) => {
    if (isPlaceholderUrl(item.url)) {
      event.preventDefault();
      showToast("사내 실제 URL 연결 전입니다. app.js의 INTERNAL_BASE_URL을 확정 주소로 교체하면 됩니다.");
    }
  });

  return card;
}

function renderResources() {
  if (!resourceGrid || !resultMeta || !emptyState) {
    return;
  }

  const filtered = getFilteredResources();
  resourceGrid.innerHTML = "";
  filtered.forEach((item) => resourceGrid.appendChild(createResourceCard(item)));
  resultMeta.textContent =
    activeCategory === "All"
      ? `전체 ${filtered.length}개 콘텐츠`
      : `${activeCategory} ${filtered.length}개 콘텐츠`;
  emptyState.hidden = filtered.length > 0;
  revealVisibleItems();
}

function setSearch(query) {
  activeQuery = query;
  globalSearch.value = query;
  if (directorySearch) {
    directorySearch.value = query;
  }
  renderResources();
}

function scrollToDirectory() {
  const directory = document.querySelector("#directory");
  if (directory) {
    directory.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  document.querySelector("#quick")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelector(".hero-search").addEventListener("submit", (event) => {
  event.preventDefault();
  runGlobalBlogSearch(globalSearch.value);
});

if (directorySearch) {
  directorySearch.addEventListener("input", (event) => {
    setSearch(event.target.value);
  });
}

document.querySelectorAll(".quick-card").forEach((card) => {
  card.addEventListener("click", (event) => {
    if (card.dataset.blogTarget) {
      event.preventDefault();
      window.location.hash = `#blog/${card.dataset.blogTarget}`;
      return;
    }

    event.preventDefault();
    activeCategory = "All";
    renderTabs();
    setSearch(card.dataset.query || "");
    scrollToDirectory();
  });
});

function revealVisibleItems() {
  document.querySelectorAll(".reveal").forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 24) {
      item.classList.add("is-visible");
    }
  });
}

function getTopbarScrollOffset(extra = 20) {
  const topbar = document.querySelector(".topbar");
  if (!topbar) {
    return 104;
  }

  return Math.ceil(topbar.getBoundingClientRect().bottom + extra);
}

function scrollToPanel(element, offset = getTopbarScrollOffset()) {
  if (!element) {
    return;
  }
  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

function normalizeHashTarget(hash) {
  const value = String(hash || "").trim();
  if (!value || value === "#") {
    return "#home";
  }

  return value.startsWith("#") ? value : `#${value}`;
}

function navigateToHash(hash, options = {}) {
  const targetHash = normalizeHashTarget(hash);
  const currentHash = normalizeHashTarget(window.location.hash || "#home");
  const shouldReplace = Boolean(options.replace);

  if (currentHash !== targetHash || shouldReplace) {
    try {
      const method = shouldReplace ? "replaceState" : "pushState";
      window.history[method](null, "", targetHash);
    } catch (error) {
      window.location.hash = targetHash;
    }
  }

  handleRoute();
}

function initInternalHashNavigation() {
  document.addEventListener("click", (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const link = event.target.closest?.("a[href]");
    if (!link) {
      return;
    }

    const href = link.getAttribute("href") || "";
    if (!href.startsWith("#")) {
      return;
    }

    event.preventDefault();
    navigateToHash(href);
  });
}

function initHeroPan() {
  const hero = document.querySelector(".hero");
  if (!hero) {
    return;
  }
  hero.style.setProperty("--hero-x", "50%");
  hero.style.setProperty("--hero-y", "46%");
}

function clampScrollValue(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function getScrollFocus(element) {
  const rect = element.getBoundingClientRect();
  const viewportMiddle = window.innerHeight / 2;
  const elementMiddle = rect.top + rect.height / 2;
  const range = viewportMiddle + rect.height / 2;
  const offset = clampScrollValue((elementMiddle - viewportMiddle) / Math.max(1, range), -1, 1);
  const focus = clampScrollValue(1 - Math.abs(offset));

  return { focus, offset };
}

const MAIN_PAGE_TOC_SECTION_IDS = ["home", "content-search", "quick", "hr-year-calendar", "faq"];

function getActiveMainPageSectionId() {
  const viewportFocusY = window.innerHeight * 0.42;
  let activeId = MAIN_PAGE_TOC_SECTION_IDS[0];
  let bestDistance = Number.POSITIVE_INFINITY;

  MAIN_PAGE_TOC_SECTION_IDS.forEach((id) => {
    const section = document.getElementById(id);
    if (!section || section.hidden) {
      return;
    }
    const rect = section.getBoundingClientRect();
    const sectionFocusY = rect.top + Math.min(rect.height, window.innerHeight) * 0.42;
    const isInView = rect.bottom > 120 && rect.top < window.innerHeight - 120;
    const distance = Math.abs(sectionFocusY - viewportFocusY);
    if (isInView && distance < bestDistance) {
      activeId = id;
      bestDistance = distance;
    }
  });

  return activeId;
}

function updateMainPageToc() {
  if (!mainPageToc) {
    return;
  }
  const isLandingVisible = !document.body.classList.contains("is-blog-mode");
  mainPageToc.setAttribute("aria-hidden", isLandingVisible ? "false" : "true");
  if (!isLandingVisible) {
    return;
  }

  const activeId = getActiveMainPageSectionId();
  mainPageToc.querySelectorAll("[data-main-toc-link]").forEach((link) => {
    const isActive = link.dataset.mainTocLink === activeId;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

let mainScrollFrame = 0;

function updateMainScrollResponse() {
  mainScrollFrame = 0;

  const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
  const topbar = document.querySelector(".topbar");
  const hero = document.querySelector(".hero");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isLandingVisible = !document.body.classList.contains("is-blog-mode");

  topbar?.classList.toggle("is-scrolled", scrollY > 18);
  updateMainPageToc();
  updateArticleSideToc();

  if (prefersReducedMotion || !isLandingVisible) {
    return;
  }

  if (hero && !hero.hidden) {
    const heroHeight = Math.max(hero.offsetHeight || 0, window.innerHeight);
    const progress = clampScrollValue(scrollY / heroHeight);
    const isNarrow = window.matchMedia("(max-width: 980px)").matches;
    const motionScale = isNarrow ? 0.58 : 1;

    hero.style.setProperty("--hero-scroll-progress", progress.toFixed(3));
    hero.style.setProperty("--hero-content-y", `${(-28 * progress * motionScale).toFixed(1)}px`);
    hero.style.setProperty("--hero-content-opacity", Math.max(0.76, 1 - progress * 0.28).toFixed(3));
    hero.style.setProperty("--hero-board-y", `${(48 * progress * motionScale).toFixed(1)}px`);
    hero.style.setProperty("--hero-board-scale", (1 - progress * 0.034).toFixed(3));
    hero.style.setProperty("--hero-board-rotate", `${(-2.2 + progress * 0.9).toFixed(3)}deg`);
    hero.style.setProperty("--hero-bg-shift", `${(34 * progress * motionScale).toFixed(1)}px`);
  }

  document.querySelectorAll(".quick-band, .calendar-spotlight-band, .faq-band").forEach((section) => {
    if (section.hidden) {
      return;
    }
    const { focus, offset } = getScrollFocus(section);
    section.style.setProperty("--section-scroll-focus", focus.toFixed(3));
    section.style.setProperty("--section-scroll-y", `${(offset * -24).toFixed(1)}px`);
    section.classList.toggle("is-scroll-focused", focus > 0.48);
  });

  document.querySelectorAll(".category-feature-card").forEach((card) => {
    const { focus, offset } = getScrollFocus(card);
    card.style.setProperty("--feature-scroll-focus", focus.toFixed(3));
    card.style.setProperty("--feature-glow-y", `${(offset * -18).toFixed(1)}px`);
  });
}

function requestMainScrollResponse() {
  if (mainScrollFrame) {
    return;
  }
  mainScrollFrame = window.requestAnimationFrame(updateMainScrollResponse);
}

function initMainScrollResponse() {
  updateMainScrollResponse();
  window.addEventListener("scroll", requestMainScrollResponse, { passive: true });
  window.addEventListener("resize", requestMainScrollResponse);
}

function initMainPageToc() {
  if (!mainPageToc) {
    return;
  }
  mainPageToc.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href") || "";
      const target = document.querySelector(href);
      if (!target) {
        return;
      }
      event.preventDefault();
      navigateToHash(href, { replace: true });
      scrollToPanel(target);
      window.setTimeout(requestMainScrollResponse, 160);
    });
  });
  updateMainPageToc();
}

function clampImageLightboxZoom(value) {
  return Math.min(IMAGE_LIGHTBOX_MAX_ZOOM, Math.max(IMAGE_LIGHTBOX_MIN_ZOOM, value));
}

function calculateImageLightboxBaseSize() {
  if (!imageLightboxMedia) {
    return { width: 0, height: 0 };
  }

  const naturalWidth = imageLightboxMedia.naturalWidth || 1;
  const naturalHeight = imageLightboxMedia.naturalHeight || 1;
  const horizontalPadding = window.innerWidth <= 640 ? 24 : 48;
  const verticalPadding = window.innerWidth <= 640 ? 112 : 132;
  const maxWidth = Math.max(260, window.innerWidth - horizontalPadding);
  const maxHeight = Math.max(260, window.innerHeight - verticalPadding);
  const ratio = Math.min(maxWidth / naturalWidth, maxHeight / naturalHeight, 1);

  return {
    width: Math.round(naturalWidth * ratio),
    height: Math.round(naturalHeight * ratio),
  };
}

function applyImageLightboxZoom(nextZoom = imageLightboxZoom, keepCenter = true, origin = null) {
  if (!imageLightboxMedia || !imageLightboxStage || !imageLightboxCanvas) {
    return;
  }

  const previousZoom = imageLightboxZoom || 1;
  const previousWidth = Math.max(1, imageLightboxBaseSize.width * previousZoom);
  const previousHeight = Math.max(1, imageLightboxBaseSize.height * previousZoom);
  const stageRect = imageLightboxStage.getBoundingClientRect();
  const focusX = origin ? origin.clientX - stageRect.left : imageLightboxStage.clientWidth / 2;
  const focusY = origin ? origin.clientY - stageRect.top : imageLightboxStage.clientHeight / 2;
  const centerX = (imageLightboxStage.scrollLeft + focusX) / previousWidth;
  const centerY = (imageLightboxStage.scrollTop + focusY) / previousHeight;

  imageLightboxZoom = clampImageLightboxZoom(nextZoom);
  const width = Math.round(imageLightboxBaseSize.width * imageLightboxZoom);
  const height = Math.round(imageLightboxBaseSize.height * imageLightboxZoom);

  imageLightboxStage.classList.toggle("is-zoomed", imageLightboxZoom > 1);
  imageLightboxMedia.style.width = `${width}px`;
  imageLightboxMedia.style.height = `${height}px`;
  imageLightboxCanvas.style.width = `${Math.max(imageLightboxStage.clientWidth, width)}px`;
  imageLightboxCanvas.style.height = `${Math.max(imageLightboxStage.clientHeight, height)}px`;

  if (imageLightboxZoomValue) {
    imageLightboxZoomValue.textContent = `${Math.round(imageLightboxZoom * 100)}%`;
  }

  imageLightboxZoomButtons.forEach((button) => {
    const direction = button.dataset.lightboxZoom;
    button.disabled =
      (direction === "out" && imageLightboxZoom <= IMAGE_LIGHTBOX_MIN_ZOOM) ||
      (direction === "in" && imageLightboxZoom >= IMAGE_LIGHTBOX_MAX_ZOOM);
  });

  window.requestAnimationFrame(() => {
    if (!keepCenter) {
      imageLightboxStage.scrollLeft = Math.max(0, (imageLightboxCanvas.clientWidth - imageLightboxStage.clientWidth) / 2);
      imageLightboxStage.scrollTop = Math.max(0, (imageLightboxCanvas.clientHeight - imageLightboxStage.clientHeight) / 2);
      return;
    }

    imageLightboxStage.scrollLeft = Math.max(0, width * centerX - focusX);
    imageLightboxStage.scrollTop = Math.max(0, height * centerY - focusY);
  });
}

function resetImageLightboxZoom() {
  imageLightboxZoom = 1;
  imageLightboxBaseSize = calculateImageLightboxBaseSize();
  applyImageLightboxZoom(1, false);
}

function openImageLightbox(sourceImage = heroImage, trigger = sourceImage) {
  if (!imageLightbox || !imageLightboxMedia || !sourceImage) {
    return;
  }

  imageLightboxLastTrigger = trigger || sourceImage;
  imageLightboxMedia.src = sourceImage.currentSrc || sourceImage.src;
  imageLightboxMedia.alt = sourceImage.alt || "이미지 원본";
  imageLightbox.hidden = false;
  document.body.classList.add("lightbox-open");
  imageLightboxZoom = 1;
  if (imageLightboxZoomValue) {
    imageLightboxZoomValue.textContent = "100%";
  }
  imageLightboxZoomButtons.forEach((button) => {
    button.disabled = true;
  });
  if (imageLightboxMedia.complete) {
    resetImageLightboxZoom();
  } else {
    imageLightboxMedia.addEventListener("load", resetImageLightboxZoom, { once: true });
  }
  imageLightboxClose?.focus();
}

function closeImageLightbox() {
  if (!imageLightbox) {
    return;
  }

  imageLightbox.hidden = true;
  document.body.classList.remove("lightbox-open");
  imageLightboxMedia?.removeAttribute("style");
  imageLightboxCanvas?.removeAttribute("style");
  imageLightboxDragState = null;
  imageLightboxStage?.classList.remove("is-dragging", "is-zoomed");
  imageLightboxLastTrigger?.focus?.();
}

function initHeroGalleryLink() {
  if (!heroGalleryLink) {
    return;
  }

  heroGalleryLink.addEventListener("click", (event) => {
    event.preventDefault();
    const targetHash = buildBlogHash("culture", "사진첩");
    navigateToHash(targetHash);
  });
}

function initImageLightbox() {
  if (!imageLightbox) {
    return;
  }

  heroImageTrigger?.addEventListener("click", () => openImageLightbox(heroImage, heroImageTrigger));
  calendarSpotlightTrigger?.addEventListener("click", () => openImageLightbox(calendarSpotlightImage, calendarSpotlightTrigger));
  imageLightboxClose?.addEventListener("click", closeImageLightbox);
  imageLightboxZoomButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.lightboxZoom === "in" ? 1 : -1;
      applyImageLightboxZoom(imageLightboxZoom + IMAGE_LIGHTBOX_ZOOM_STEP * direction);
    });
  });
  imageLightboxStage?.addEventListener(
    "wheel",
    (event) => {
      if (imageLightbox.hidden) {
        return;
      }
      event.preventDefault();
      const direction = event.deltaY < 0 ? 1 : -1;
      applyImageLightboxZoom(imageLightboxZoom + IMAGE_LIGHTBOX_ZOOM_STEP * direction, true, event);
    },
    { passive: false },
  );
  imageLightboxStage?.addEventListener("pointerdown", (event) => {
    if (imageLightbox.hidden || imageLightboxZoom <= 1) {
      return;
    }
    imageLightboxDragState = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      scrollLeft: imageLightboxStage.scrollLeft,
      scrollTop: imageLightboxStage.scrollTop,
    };
    imageLightboxStage.classList.add("is-dragging");
    imageLightboxStage.setPointerCapture?.(event.pointerId);
  });
  imageLightboxStage?.addEventListener("pointermove", (event) => {
    if (!imageLightboxDragState || imageLightboxDragState.pointerId !== event.pointerId) {
      return;
    }
    imageLightboxStage.scrollLeft = imageLightboxDragState.scrollLeft - (event.clientX - imageLightboxDragState.startX);
    imageLightboxStage.scrollTop = imageLightboxDragState.scrollTop - (event.clientY - imageLightboxDragState.startY);
  });
  const finishImageLightboxDrag = (event) => {
    if (imageLightboxDragState?.pointerId === event.pointerId) {
      imageLightboxStage?.releasePointerCapture?.(event.pointerId);
    }
    imageLightboxDragState = null;
    imageLightboxStage?.classList.remove("is-dragging");
  };
  imageLightboxStage?.addEventListener("pointerup", finishImageLightboxDrag);
  imageLightboxStage?.addEventListener("pointercancel", finishImageLightboxDrag);
  imageLightbox.addEventListener("click", (event) => {
    if (event.target === imageLightbox) {
      closeImageLightbox();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (imageLightbox.hidden) {
      return;
    }

    if (event.key === "Escape") {
      closeImageLightbox();
      return;
    }

    if (event.key === "+" || event.key === "=") {
      event.preventDefault();
      applyImageLightboxZoom(imageLightboxZoom + IMAGE_LIGHTBOX_ZOOM_STEP);
      return;
    }

    if (event.key === "-" || event.key === "_") {
      event.preventDefault();
      applyImageLightboxZoom(imageLightboxZoom - IMAGE_LIGHTBOX_ZOOM_STEP);
    }
  });
  window.addEventListener("resize", () => {
    if (!imageLightbox.hidden) {
      imageLightboxBaseSize = calculateImageLightboxBaseSize();
      applyImageLightboxZoom(imageLightboxZoom, false);
    }
  });
}

const blogCategories = [
  {
    slug: "culture",
    label: "Culture",
    description: "팀 업무와 개인 역할, 사진첩, 동영상, 공개 가능한 비즈니스 자료를 통해 회사의 일하는 방식과 문화를 소개합니다.",
    groups: hrTaxonomy.culture,
  },
  {
    slug: "hr-guide",
    label: "HR Guide",
    description: "신규입사자 온보딩부터 조직도, 배치도, 비상연락망, 취업규칙, 평가, 보상, 복리후생, 경조사, 연차, 퇴직금, 건강검진과 연간 HR 일정까지 안내합니다.",
    groups: hrTaxonomy["hr-guide"],
  },
  {
    slug: "work-tool",
    label: "Work Tool",
    description: "Google Workspace, Groupware, IT/총무 지원처럼 매일 사용하는 업무 도구와 지원 절차를 연결합니다.",
    groups: hrTaxonomy["work-tool"],
  },
  {
    slug: "help-desk",
    label: "Help Desk",
    description: "FAQ와 재직증명서, 경력증명서, 명함신청 등 서식 자동 발급을 빠르게 찾는 도움말 공간입니다.",
    groups: hrTaxonomy["help-desk"],
  },
];

const defaultSiteSettings = {
  hero: {
    eyebrow: "Internal HR Portal",
    titleLine1: "HR",
    titleLine2: "Lounge",
    copyLine1: "구성원의 온보딩부터 성장까지, 인사 제도와 업무 도구를",
    copyLine2: "한 곳에서 연결하고 지원합니다.",
    searchPlaceholder: "예: 연차, 연차 퇴직정산, 퇴직금, 취업규칙, 사진첩",
  },
  sections: {
    mainCategoryEyebrow: "Main Category",
    mainCategoryTitle: "HR Lounge 주요 메뉴",
    featuredLabel: "Featured Articles",
    blogEyebrow: "HR Lounge Blog",
    postListTitle: "주제별 HR 추천",
  },
  hrCalendar: {
    title: "HR Calendar",
    subtitle: "평가, 보상, 연차, 교육, 건강검진까지 한 화면에서 확인하는 연간 로드맵",
    note: "세부 시행일은 매년 공지와 회사 운영 기준에 따라 조정될 수 있습니다.",
    months: [
      { label: "1월", items: ["연말정산 간소화", "전년도 근태 마감", "연간 HR 계획"] },
      { label: "2월", items: ["연봉계약 갱신", "보상안 커뮤니케이션", "조직·인력 계획"] },
      { label: "3월", items: ["연봉인상 반영", "평가 목표 오픈", "신규·전환 배치"] },
      { label: "4월", items: ["사전신고서 마감", "1분기 온보딩 점검", "법정교육 계획"] },
      { label: "5월", items: ["평가 기준 리마인드", "건강검진 안내", "휴가 성수기 계획"] },
      { label: "6월", items: ["상반기 이슈 정리", "급여 데이터 점검", "조직문화 펄스"] },
      { label: "7월", items: ["연차촉진 1차", "하반기 목표 정렬", "법정교육 시작"] },
      { label: "8월", items: ["중간점검 시작", "평가 시즌 알림", "리더 피드백 가이드"] },
      { label: "9월", items: ["중간점검 마감", "보상 후보 리뷰", "채용·온보딩 회고"] },
      { label: "10월", items: ["연차촉진 2차", "퇴직연금 교육", "건강검진 독려"] },
      { label: "11월", items: ["최종평가 준비", "내년 인력 계획", "연말 근태 점검"] },
      { label: "12월", items: ["최종평가", "연차촉진 3차", "연말정산 사전안내", "조직개편 준비"] },
    ],
  },
  categories: {
    culture: {
      label: "Culture",
      description: "팀 업무와 개인 역할, 사진첩, 동영상, 공개 가능한 비즈니스 자료를 통해 회사의 일하는 방식과 문화를 소개합니다.",
    },
    "hr-guide": {
      label: "HR Guide",
      description: "신규입사자 온보딩부터 조직도, 배치도, 비상연락망, 취업규칙, 평가, 보상, 복리후생, 경조사, 연차, 퇴직금, 건강검진과 연간 HR 일정까지 안내합니다.",
    },
    "work-tool": {
      label: "Work Tool",
      description: "Google Workspace, Groupware, IT/총무 지원처럼 매일 사용하는 업무 도구와 지원 절차를 연결합니다.",
    },
    "help-desk": {
      label: "Help Desk",
      description: "FAQ와 재직증명서, 경력증명서, 명함신청 등 서식 자동 발급을 빠르게 찾는 도움말 공간입니다.",
    },
  },
  faq: {
    eyebrow: "FAQ",
    title: "자주 묻는 HR 질문",
    description: "구성원이 반복해서 찾는 온보딩, 제도, 업무 도구, 서식 관련 답변을 빠르게 확인할 수 있습니다.",
    items: [
      {
        question: "신규입사자는 어떤 순서로 온보딩 자료를 보면 되나요?",
        answer: "신규입사자 가이드에서 입사 전, 입사 당일, 첫 주 체크리스트를 순서대로 확인하면 됩니다.",
      },
      {
        question: "연차와 복리후생 기준은 어디에서 확인하나요?",
        answer: "HR Guide의 연차 제도, 복리후생 제도, 경조사 안내 게시글에서 최신 기준을 관리합니다.",
      },
      {
        question: "Google Workspace와 그룹웨어 안내는 어디에 있나요?",
        answer: "Work Tool 메뉴에서 메일, 드라이브, 캘린더, 전자결재, 사내 게시판 사용법을 확인할 수 있습니다.",
      },
      {
        question: "서식 자동 발급이나 문의는 어디로 가면 되나요?",
        answer: "Help Desk 메뉴에서 FAQ와 재직증명서, 경력증명서, 명함신청 자동 발급 절차를 모아 관리합니다.",
      },
    ],
  },
  featuredPostIds: {
    culture: [],
    "hr-guide": [],
    "work-tool": [],
    "help-desk": [],
  },
  popular: {
    searches: ["연차", "연차 퇴직정산", "퇴직금", "취업규칙", "사진첩"],
    postIds: ["culture-team-intro", "hr-guide-year-calendar", "culture-production-strategy-group"],
  },
  onboardingAccess: {
    emails: "",
  },
  notifications: {
    enabled: false,
    emails: "",
  },
  footer: {
    title: "HR Lounge",
    text: "People, culture and work support in one place.",
    topLabel: "맨 위로",
  },
  buttons: {
    siteSettings: "사이트 설정",
    writePost: "글 작성",
    listBack: "목록으로",
    editPost: "수정",
    savePost: "업로드",
    deletePost: "삭제",
    cancel: "취소",
    preview: "미리보기",
    premiumTemplate: "프리미엄 아티클",
    guideTemplate: "가이드 템플릿",
    faqTemplate: "FAQ 템플릿",
    coverUpload: "이미지 선택",
    clearCover: "삭제",
    coverNone: "선택된 이미지 없음",
    coverSelected: "대표 이미지 선택됨",
    settingsReset: "기본값 복원",
    settingsCancel: "닫기",
    settingsSave: "설정 저장",
    unlockConfirm: "확인",
  },
};

const HR_YEAR_CALENDAR_IMAGE = "./assets/hr-year-calendar.svg?v=20260523-calendar-edit";
let hrCalendarImageCacheKey = "";
let hrCalendarImageCacheValue = "";
const RESEARCH_LAB_THUMB_IMAGE = "./assets/research-lab-thumb.jpg";
const PRODUCTION_STRATEGY_THUMB_IMAGE = "./assets/production-strategy-thumb.jpg";
const SALES_MARKETING_THUMB_IMAGE = "./assets/sales-marketing-part.png";
const MANAGEMENT_SUPPORT_THUMB_IMAGE = "./assets/management-support-part.png";

const researchLabIntroContent = `
  <p class="article-lead">연구소는 회사의 주요 제품과 신규 아이템이 실제 제품으로 완성될 수 있도록 개발, 검증, 인허가, 양산 준비 과정을 이어가는 부서입니다. 아이디어가 단순한 기획에 머물지 않고 시제품 제작, 성능시험, 허가 접수, 양산 이관까지 연결될 수 있도록 제품화 전 과정을 관리합니다.</p>
  <div class="article-pill-row">
    <span class="article-pill">#연구소</span>
    <span class="article-pill">#핵심연구파트</span>
    <span class="article-pill">#전략기술파트</span>
    <span class="article-pill">#제품개발</span>
    <span class="article-pill">#인허가</span>
  </div>
  <p class="article-source-note">해당 글은 2026년도 사전목표신고서를 기반으로 작성되었습니다.</p>
  <h2>연구소 조직 구성</h2>
  <div class="article-org-chart article-org-chart-research">
    <div class="article-org-node article-org-root">
      <span class="article-org-role">연구소장</span>
      <strong>황선영 이사</strong>
      <span class="article-org-name">연구소 총괄</span>
    </div>
    <div class="article-org-branches">
      <div class="article-org-node">
        <span class="article-org-role">핵심연구파트</span>
        <strong>김동환 파트장</strong>
        <span class="article-org-name">파트 리드</span>
        <ul class="article-org-members">
          <li><span>최성규</span><small>선임</small></li>
          <li><span>유용진</span><small>선임</small></li>
        </ul>
      </div>
      <div class="article-org-node article-org-node-solo">
        <span class="article-org-role">전략기술파트</span>
        <strong>정종학 책임</strong>
        <span class="article-org-name">파트 담당</span>
      </div>
    </div>
  </div>
  <h2>연구소는 이런 일을 합니다</h2>
  <div class="article-work-map article-work-map-research">
    <div class="article-work-card">
      <div class="article-work-card-head">
        <span class="article-work-index">01</span>
        <strong class="article-work-title">제품 개발</strong>
      </div>
      <p class="article-work-body">Suture Anchor, Interference Screw, Cannula, Suture Passer 등 주요 제품을 개발하고 개선합니다.</p>
      <div class="article-work-collab">
        <span class="article-work-collab-label">협업 포인트</span>
        <span class="article-work-tags"><span>제품 사양</span><span>개발 일정</span><span>샘플 필요 시점</span></span>
      </div>
    </div>
    <div class="article-work-card">
      <div class="article-work-card-head">
        <span class="article-work-index">02</span>
        <strong class="article-work-title">검증 및 인허가</strong>
      </div>
      <p class="article-work-body">개발기록서 작성, 샘플 제작, 성능시험, 허가 접수와 허가 완료 준비를 담당합니다.</p>
      <div class="article-work-collab">
        <span class="article-work-collab-label">협업 포인트</span>
        <span class="article-work-tags"><span>시험 자료</span><span>허가 일정</span><span>제출 자료 기준</span></span>
      </div>
    </div>
    <div class="article-work-card">
      <div class="article-work-card-head">
        <span class="article-work-index">03</span>
        <strong class="article-work-title">양산 준비</strong>
      </div>
      <p class="article-work-body">양산 이관, CDMO 협조, 생산 관련 검토와 시제품 준비가 이어지도록 연결합니다.</p>
      <div class="article-work-collab">
        <span class="article-work-collab-label">협업 포인트</span>
        <span class="article-work-tags"><span>생산</span><span>품질</span><span>인허가 일정 정렬</span></span>
      </div>
    </div>
    <div class="article-work-card">
      <div class="article-work-card-head">
        <span class="article-work-index">04</span>
        <strong class="article-work-title">신규 과제</strong>
      </div>
      <p class="article-work-body">AI 로봇, 신규 아이템 발굴, 전략 제품 검토처럼 다음 가능성을 구체화합니다.</p>
      <div class="article-work-collab">
        <span class="article-work-collab-label">협업 포인트</span>
        <span class="article-work-tags"><span>사업 가능성</span><span>기술 검토</span><span>유관 부서 지원</span></span>
      </div>
    </div>
  </div>
  <h2>핵심연구파트 주요 업무</h2>
  <p>핵심연구파트는 주력 제품군의 개발 완성도와 일정 관리를 중심으로 움직입니다. Suture Anchor 제품군의 신규 패턴 검토, 허가 접수, 허가 완료, 양산 이관을 관리하며, All Suture와 Instability/소형 제품은 개발기록서 작성, 성능시험, 전용 핸들 및 기구 제작, 허가 준비까지 포함해 중점적으로 진행합니다.</p>
  <div class="article-card-grid article-member-card-grid">
    <div class="article-card">
      <strong>김동환 책임</strong>
      <p>핵심연구파트의 주요 개발 목표를 기준으로 제품별 일정과 산출물을 관리합니다. 주력 제품군의 개발 흐름이 끊기지 않도록 개발 자료, 시험 일정, 허가 일정, 생산 이관 시점을 연결합니다.</p>
      <span class="article-card-meta">파트 목표 · 개발 일정 · 산출물 관리</span>
    </div>
    <div class="article-card">
      <strong>최성규</strong>
      <p>Push type Lateral, Instability/소형 Suture Anchor, Cannula 신규 모델, CDMO 협조 업무를 중심으로 개발 진행과 인허가 준비를 담당합니다.</p>
      <span class="article-card-meta">Suture Anchor · Cannula · CDMO</span>
    </div>
    <div class="article-card">
      <strong>유용진</strong>
      <p>All Suture, Interference Screw, CDMO 협조, AI 로봇 제품기획 및 목업 제작, 기타 과제 진행 업무를 담당합니다.</p>
      <span class="article-card-meta">All Suture · Interference Screw · AI 로봇</span>
    </div>
  </div>
  <h2>전략기술파트 주요 업무</h2>
  <p>전략기술파트는 신규 제품과 미래 과제의 가능성을 구체화하는 역할을 맡고 있습니다. 기존 제품군의 다음 가능성을 검토하고, 신규 기술 과제가 실제 시제품과 개발 자료로 이어질 수 있도록 전략 과제의 실무를 정리합니다.</p>
  <div class="article-card-grid article-member-card-grid">
    <div class="article-card">
      <strong>정종학 책임</strong>
      <p>콜라겐 전달장치 개발 시제품, 약물방출형 생분해성 스페이서 개발 시제품, Suture Passer 허가 접수, CDMO 양산 시제품, AI 로봇 제품기획과 목업 제작을 담당합니다. 신규 과제의 기술 검토와 유관 부서 협업 포인트를 함께 정리합니다.</p>
      <span class="article-card-meta">콜라겐 전달장치 · 생분해성 스페이서 · Suture Passer · CDMO · AI 로봇</span>
    </div>
  </div>
`;

const productionStrategyGroupContent = `
  <p class="article-lead">생산전략그룹은 제품이 안정적으로 생산되고, 품질 기준과 인허가 요건을 충족하며, 실제 현장에서 계획대로 움직일 수 있도록 연결하는 실행 조직입니다. 생산계획, 원가, 재고, 생산성, 품질시스템, 인허가 대응을 한 흐름으로 묶어 제품이 개발 이후에도 지속적으로 공급될 수 있게 관리합니다.</p>
  <div class="article-pill-row">
    <span class="article-pill">#생산전략그룹</span>
    <span class="article-pill">#생산기획파트</span>
    <span class="article-pill">#품질경영파트</span>
    <span class="article-pill">#인허가파트</span>
    <span class="article-pill">#생산직</span>
  </div>
  <p class="article-source-note">해당 글은 2026년도 사전목표신고서를 기반으로 작성되었습니다.</p>
  <h2>생산전략그룹 조직 구성</h2>
  <div class="article-org-chart">
    <div class="article-org-node article-org-root">
      <span class="article-org-role">생산전략그룹</span>
      <strong>강호철 상무</strong>
      <span class="article-org-name">그룹장</span>
    </div>
    <div class="article-org-branches">
      <div class="article-org-node">
        <span class="article-org-role">생산기획파트</span>
        <ul class="article-org-members">
          <li>박지호 선임</li>
          <li>이숙진 책임</li>
          <li>신현경 선임</li>
          <li>박서연 주임</li>
        </ul>
      </div>
      <div class="article-org-node">
        <span class="article-org-role">품질경영파트</span>
        <ul class="article-org-members">
          <li>김용 파트장</li>
          <li>이은지 주임</li>
        </ul>
      </div>
      <div class="article-org-node">
        <span class="article-org-role">인허가파트</span>
        <ul class="article-org-members">
          <li>이혜령 파트장</li>
        </ul>
      </div>
      <div class="article-org-node">
        <span class="article-org-role">생산직</span>
        <ul class="article-org-members">
          <li>장윤미</li>
          <li>이슬기</li>
        </ul>
      </div>
    </div>
  </div>
  <h2>그룹 목표 구조</h2>
  <p>사전 목표신고서 기준으로 생산전략그룹은 품질경영파트, 인허가파트, 생산기획파트가 각각 명확한 업무 비중을 가지고 움직입니다. 공통적으로 중요한 기준은 일정 준수, 정해진 기간 내 완료, 안정적인 운영, 그리고 실적을 데이터로 확인할 수 있는 관리 체계입니다.</p>
  <div class="article-metric-grid">
    <div class="article-metric">
      <strong>01.</strong>
      <span>생산기획파트</span>
      <p>원가 절감, 안전재고, 생산계획 달성, 생산성 향상, 설비관리, 양산 이관, MOSAIC Factory 운영</p>
    </div>
    <div class="article-metric">
      <strong>02.</strong>
      <span>품질경영파트</span>
      <p>외부/내부 심사 대응, CAPA와 고객불만, QMS 정기검토, VMP, GMP 교육과 자격관리</p>
    </div>
    <div class="article-metric">
      <strong>03.</strong>
      <span>인허가파트</span>
      <p>국내 인허가, 해외 인허가, 자료 대응, CDMO RA 컨설팅, 유관 부서 지원</p>
    </div>
  </div>
  <h2>파트별 주요 역할</h2>
  <div class="article-card-grid">
    <div class="article-card">
      <strong>생산기획파트</strong>
      <p>생산 원가 절감, 재고 안정화, 생산계획 달성, 생산성 향상, 설비관리, 개발품 팩토리 이관을 중심으로 생산 운영의 뼈대를 잡습니다.</p>
      <span class="article-card-meta">계획 · 원가 · 재고 · 생산성 · 이관</span>
    </div>
    <div class="article-card">
      <strong>품질경영파트</strong>
      <p>외부/내부 심사 대응, CAPA와 고객불만 처리, QMS 문서 정기검토와 변경관리, 밸리데이션, GMP 교육을 통해 품질 시스템의 신뢰도를 관리합니다.</p>
      <span class="article-card-meta">QMS · CAPA · 심사 · 교육</span>
    </div>
    <div class="article-card">
      <strong>인허가파트</strong>
      <p>국내외 인허가, 임상 및 기술자료 대응, CDMO RA 컨설팅과 지원업무를 담당해 제품이 필요한 규제 기준을 충족하도록 준비합니다.</p>
      <span class="article-card-meta">국내외 인허가 · 자료 대응 · RA</span>
    </div>
    <div class="article-card">
      <strong>생산직</strong>
      <p>근태, 생산량, 주기 시간, 중단 시간, 환경 및 자재 관리처럼 현장 생산성과 공정 안정성에 직접 연결되는 지표를 관리합니다.</p>
      <span class="article-card-meta">현장 생산 · 생산성 · 공정 안정</span>
    </div>
  </div>
  <h2>구성원별 주요 업무</h2>
  <div class="article-card-grid article-member-card-grid">
    <div class="article-card">
      <strong>강호철 상무</strong>
      <p>생산전략그룹 전체 목표와 우선순위를 정렬하고, 생산기획·품질경영·인허가·현장 생산이 같은 방향으로 움직이도록 그룹 운영을 총괄합니다.</p>
      <span class="article-card-meta">그룹장 · 목표 정렬 · 의사결정</span>
    </div>
    <div class="article-card">
      <strong>박지호 선임</strong>
      <p>MOSAIC Factory 생산관리시스템 운영, 안전재고 확보, 생산성 향상, CDMO 대응, 공정관리와 데이터 정리를 중심으로 생산 기반을 관리합니다.</p>
      <span class="article-card-meta">MOSAIC · 안전재고 · 공정관리</span>
    </div>
    <div class="article-card">
      <strong>이숙진 책임</strong>
      <p>생산 현황 모니터링, 생산 운영 및 이관 관리, 앵커 사출 공정 안정화, 품질 시스템 및 협력 관리를 담당합니다.</p>
      <span class="article-card-meta">생산 모니터링 · 이관 · 공정 안정화</span>
    </div>
    <div class="article-card">
      <strong>신현경 선임 · 박서연 주임</strong>
      <p>현장 생산성과 근태, 생산량, 주기 시간, 중단 시간, 환경 및 자재 관리처럼 매일의 생산 안정성에 직접 연결되는 지표를 관리합니다.</p>
      <span class="article-card-meta">생산성 · 근태 · 현장 지표</span>
    </div>
    <div class="article-card">
      <strong>김용 파트장 · 이은지 주임</strong>
      <p>품질경영파트의 심사 대응, CAPA와 고객불만, QMS 문서관리, 밸리데이션, GMP 교육과 자격관리 업무를 수행합니다.</p>
      <span class="article-card-meta">품질경영 · CAPA · GMP</span>
    </div>
    <div class="article-card">
      <strong>이혜령 파트장</strong>
      <p>국내외 인허가와 의료자료, CDMO RA 컨설팅, 제품별 허가 자료 준비와 유관 부서 지원업무를 담당합니다.</p>
      <span class="article-card-meta">인허가 · RA · 자료 대응</span>
    </div>
  </div>
`;

const salesMarketingPartContent = `
  <p class="article-lead">영업마케팅파트는 제품이 시장에서 실제 매출과 고객 접점으로 이어질 수 있도록 영업 전략, 병원 및 대리점 네트워크, 해외 파트너십, 마케팅 활동을 함께 관리하는 조직입니다. 제품별 매출 목표를 관리하면서 시장 커뮤니케이션과 영업 운영 프로세스를 정리해 회사의 성장 동력을 넓혀갑니다.</p>
  <div class="article-pill-row">
    <span class="article-pill">#영업마케팅파트</span>
    <span class="article-pill">#매출성과</span>
    <span class="article-pill">#병원네트워크</span>
    <span class="article-pill">#해외파트너십</span>
    <span class="article-pill">#마케팅콘텐츠</span>
  </div>
  <p class="article-source-note">해당 글은 2026년도 사전목표신고서를 기반으로 작성되었습니다.</p>
  <h2>영업마케팅파트 조직 구성</h2>
  <div class="article-org-chart article-org-chart-compact">
    <div class="article-org-node article-org-root">
      <span class="article-org-role">영업마케팅파트</span>
      <strong>강호철 상무</strong>
      <span class="article-org-name">겸직</span>
    </div>
    <div class="article-org-branches">
      <div class="article-org-node">
        <span class="article-org-role">파트 구성원</span>
        <ul class="article-org-members">
          <li>유미 선임</li>
          <li>김다솜 선임</li>
        </ul>
      </div>
    </div>
  </div>
  <h2>파트 목표 구조</h2>
  <p>사전 목표신고서 기준으로 영업마케팅파트는 제품별 매출 성과 달성이 가장 큰 비중을 차지하고, 거래처 및 병원 네트워크 확장, 해외 수출 및 파트너십, 마케팅 활동, 운영 프로세스 개선이 함께 묶여 있습니다. 단순히 판매 결과만 보는 것이 아니라, 판매가 반복될 수 있는 시장 기반을 만드는 데 초점이 있습니다.</p>
  <div class="article-metric-grid">
    <div class="article-metric">
      <strong>01.</strong>
      <span>제품별 매출 성과</span>
      <p>연간 총 매출액과 제품별 매출 목표를 관리하고, 신규 판매처와 핵심 제품의 성과를 추적합니다.</p>
    </div>
    <div class="article-metric">
      <strong>02.</strong>
      <span>거래처·병원 네트워크</span>
      <p>대리점과 병원 코드 신규 등록, 고객 접점 확대, 영업 기반 확장을 관리합니다.</p>
    </div>
    <div class="article-metric">
      <strong>03.</strong>
      <span>마케팅 활동</span>
      <p>전시회, 학술 활동, 교육 세션, 마케팅 콘텐츠를 통해 제품 인지도와 시장 접점을 강화합니다.</p>
    </div>
    <div class="article-metric">
      <strong>04.</strong>
      <span>운영 프로세스</span>
      <p>영업과 마케팅 운영 시스템을 정리하고, 고객 대응과 내부 보고 흐름을 개선합니다.</p>
    </div>
    <div class="article-metric">
      <strong>05.</strong>
      <span>해외 수출·파트너십</span>
      <p>국외 판매 실적과 해외 파트너십 기회를 관리해 시장 확장의 가능성을 넓힙니다.</p>
    </div>
  </div>
  <h2>영업마케팅파트는 이런 일을 합니다</h2>
  <table>
    <tbody>
      <tr><th>업무 영역</th><th>주요 KPI</th><th>목표 방향</th></tr>
      <tr><td>매출 성과 관리</td><td>연간 총 매출액, 제품별 매출 목표</td><td>주력 제품과 신규 제품의 판매 성과를 월별로 확인하고 목표 대비 진행률을 관리합니다.</td></tr>
      <tr><td>네트워크 확장</td><td>대리점 및 병원 코드 신규 등록 건수</td><td>판매 가능 채널을 넓히고, 병원과 거래처 기반을 꾸준히 확대합니다.</td></tr>
      <tr><td>해외 수출 및 파트너십</td><td>국외 판매 실적 수, 해외 파트너 협의</td><td>해외 시장 진입 가능성을 확인하고 파트너십 기반을 단계적으로 만듭니다.</td></tr>
      <tr><td>마케팅 활동</td><td>마케팅 활동 수, 마케팅 콘텐츠 개발 수</td><td>전시회와 학술 활동, 제품 콘텐츠를 통해 제품 인지도와 고객 이해도를 높입니다.</td></tr>
      <tr><td>운영 프로세스 개선</td><td>영업/마케팅 운영시스템 수립</td><td>고객 응대, 보고, 콘텐츠 관리, 영업 지원 흐름을 표준화합니다.</td></tr>
    </tbody>
  </table>
  <h2>구성원별 주요 업무</h2>
  <div class="article-card-grid article-member-card-grid">
    <div class="article-card">
      <strong>강호철 상무</strong>
      <p>영업마케팅파트를 겸직하며 매출 목표, 시장 확장 방향, 주요 고객과 파트너십의 우선순위를 정렬합니다.</p>
      <span class="article-card-meta">겸직 · 목표 정렬 · 시장 전략</span>
    </div>
    <div class="article-card">
      <strong>유미 선임</strong>
      <p>영업관리 프로세스 수립, 고객 클레임 사후 처리, 마케팅 관리 프로세스 구축, 담당 업무 역량 강화를 중심으로 영업 운영 기반을 정리합니다.</p>
      <span class="article-card-meta">영업관리 · 고객 대응 · 프로세스</span>
    </div>
    <div class="article-card">
      <strong>김다솜 선임</strong>
      <p>전시회와 행사 기획, 콘텐츠 기획과 시장조사, 신규 사업 기획 및 관리, 영업/마케팅 프로세스 지원을 담당합니다.</p>
      <span class="article-card-meta">마케팅 기획 · 콘텐츠 · 시장조사</span>
    </div>
  </div>
`;

const managementSupportPartContent = `
  <p class="article-lead">경영지원파트는 회사의 자금, 회계, 인사총무, 과제관리, 사업기획 업무가 안정적으로 이어지도록 내부 운영 기반을 만드는 조직입니다. 투자와 자금 조달, 결산과 감사, 노무 리스크, 채용과 직원 경험, 정부과제 관리처럼 회사 운영의 신뢰도와 지속 가능성에 직접 연결되는 일을 담당합니다.</p>
  <div class="article-pill-row">
    <span class="article-pill">#경영지원파트</span>
    <span class="article-pill">#사업기획파트</span>
    <span class="article-pill">#재무회계</span>
    <span class="article-pill">#인사총무</span>
    <span class="article-pill">#과제관리</span>
  </div>
  <p class="article-source-note">해당 글은 2026년도 사전목표신고서를 기반으로 작성되었습니다.</p>
  <h2>경영지원파트 조직 구성</h2>
  <div class="article-org-chart">
    <div class="article-org-node article-org-root">
      <span class="article-org-role">경영지원파트 · 사업기획파트</span>
      <strong>이윤재 이사</strong>
      <span class="article-org-name">파트 리드</span>
    </div>
    <div class="article-org-branches">
      <div class="article-org-node">
        <span class="article-org-role">인사 · 총무</span>
        <ul class="article-org-members">
          <li>지준석 책임</li>
        </ul>
      </div>
      <div class="article-org-node">
        <span class="article-org-role">회계 · 자금</span>
        <ul class="article-org-members">
          <li>조혜승 선임</li>
        </ul>
      </div>
    </div>
  </div>
  <h2>파트 목표 구조</h2>
  <p>사전 목표신고서 기준으로 사업기획과 경영지원은 투자와 자금 조달을 중심으로 하되, 재무회계와 인사총무의 운영 안정성, 과제관리의 집행과 증빙 체계까지 함께 관리합니다. 회사가 성장하기 위해 필요한 외부 자금과 내부 운영 체계를 동시에 다지는 구조입니다.</p>
  <div class="article-metric-grid">
    <div class="article-metric">
      <strong>01.</strong>
      <span>사업기획</span>
      <p>경영자금 조달, 투자 검토기관 요청자료 대응, 투자자 정기 보고와 사후관리, 계약서 검토 및 체결 지원</p>
    </div>
    <div class="article-metric">
      <strong>02.</strong>
      <span>재무회계</span>
      <p>재무 실사와 투자금 실사 대응, 자금 집행관리, 재고 정합성, 매출채권 회수, 결산과 감사 대응</p>
    </div>
    <div class="article-metric">
      <strong>03.</strong>
      <span>인사총무</span>
      <p>근로시간 제도 전환, 컴플라이언스와 노무 리스크 관리, 채용 브랜딩, 직원 경험과 HR 운영 프로세스 관리</p>
    </div>
    <div class="article-metric">
      <strong>04.</strong>
      <span>과제관리</span>
      <p>과제비와 지원금 집행률, 증빙 규정 정비, 연차보고서 등 수행관리 지원, 신규 과제 접수 지원</p>
    </div>
  </div>
  <h2>경영지원파트는 이런 일을 합니다</h2>
  <table>
    <tbody>
      <tr><th>업무 영역</th><th>주요 KPI</th><th>목표 방향</th></tr>
      <tr><td>사업기획</td><td>자금 조달, 투자기관 대응, 투자자 사후관리, 계약 지원</td><td>시리즈B2 등 주요 펀딩과 투자 대응이 원활히 진행되도록 자료, 문의, 계약 흐름을 관리합니다.</td></tr>
      <tr><td>재무회계</td><td>실사 대응, 자금 집행, 재고 정합성, 매출채권, 결산/감사</td><td>회계와 자금 흐름의 정확도를 높이고, 외부 감사와 투자 실사에 대응 가능한 자료 체계를 만듭니다.</td></tr>
      <tr><td>인사총무</td><td>노무 리스크, 채용 브랜딩, 직원 경험, HR 오퍼레이션</td><td>근로시간 제도 전환과 컴플라이언스, 채용과 직원 경험을 안정적으로 운영합니다.</td></tr>
      <tr><td>과제관리</td><td>과제비 집행률, 증빙 규정, 수행관리, 신규 과제 접수</td><td>정부과제와 지원금이 규정에 맞게 집행되고, 증빙과 보고가 누락되지 않도록 관리합니다.</td></tr>
    </tbody>
  </table>
  <h2>구성원별 주요 업무</h2>
  <div class="article-card-grid article-member-card-grid">
    <div class="article-card">
      <strong>이윤재 이사</strong>
      <p>경영지원파트와 사업기획파트를 함께 맡아 투자와 자금 조달, 사업계획, 계약 검토, 주요 경영 의사결정 지원을 총괄합니다.</p>
      <span class="article-card-meta">사업기획 · 자금 조달 · 계약 지원</span>
    </div>
    <div class="article-card">
      <strong>지준석 책임</strong>
      <p>인사와 총무 영역에서 근로시간 제도 전환, 컴플라이언스와 노무 리스크 관리, 채용 브랜딩, 직원 경험 고도화, HR 운영 프로세스를 담당합니다.</p>
      <span class="article-card-meta">인사 · 총무 · 노무 리스크 · EX</span>
    </div>
    <div class="article-card">
      <strong>조혜승 선임</strong>
      <p>회계와 자금 영역에서 월 결산과 외부감사 대응, 투자 관련 자료 대응, 재고 정합성, 매출채권, 미지급금, 부가세 신고 업무를 담당합니다.</p>
      <span class="article-card-meta">회계 · 자금 · 결산 · 감사</span>
    </div>
  </div>
`;

const defaultBlogState = {
  version: 34,
  updatedAt: new Date().toISOString(),
  siteSettings: defaultSiteSettings,
  posts: [
    {
      id: "culture-team-intro",
      category: "culture",
      group: "팀 소개",
      subcategory: "Team 업무 소개",
      title: "연구소 업무 소개: 제품 개발에서 인허가, 양산 준비까지",
      summary: "연구소는 의료기기 제품 개발, 성능 검증, 인허가 준비, 양산 이관까지 제품화 전 과정을 담당합니다.",
      author: "People Team",
      tags: ["연구소", "팀소개", "핵심연구파트", "전략기술파트", "제품개발", "인허가"],
      takeaways: [
        "연구소는 개발, 검증, 인허가, 양산 준비를 연결하는 제품화 전 과정을 담당합니다.",
        "핵심연구파트는 주력 제품군의 개발 완성도와 일정 관리를 중심으로 운영됩니다.",
        "전략기술파트는 신규 기술 과제와 전략 제품 개발의 가능성을 구체화합니다.",
      ],
      relatedPostIds: [],
      image: RESEARCH_LAB_THUMB_IMAGE,
      updatedAt: "2026-05-22T00:00:00+09:00",
      content: researchLabIntroContent,
    },
    {
      id: "culture-production-strategy-group",
      category: "culture",
      group: "팀 소개",
      subcategory: "Team 업무 소개",
      title: "생산전략그룹 업무 소개: 생산계획, 품질, 인허가를 연결하는 실행 조직",
      summary: "생산전략그룹은 생산기획, 품질경영, 인허가, 현장 생산을 연결해 제품이 안정적으로 생산되고 공급될 수 있도록 관리합니다.",
      author: "People Team",
      tags: ["생산전략그룹", "팀소개", "생산기획파트", "품질경영파트", "인허가파트", "생산직"],
      takeaways: [
        "생산전략그룹은 생산계획, 품질경영, 인허가 대응, 현장 생산을 연결하는 실행 조직입니다.",
        "생산기획파트는 원가, 재고, 생산계획, 생산성, 설비관리, 양산 이관을 중심으로 운영됩니다.",
        "품질경영파트와 인허가파트는 QMS, CAPA, 밸리데이션, 국내외 인허가와 자료 대응을 통해 제품 공급의 신뢰도를 높입니다.",
      ],
      relatedPostIds: ["culture-team-intro"],
      image: PRODUCTION_STRATEGY_THUMB_IMAGE,
      updatedAt: "2026-05-22T00:00:00+09:00",
      content: productionStrategyGroupContent,
    },
    {
      id: "culture-sales-marketing-part",
      category: "culture",
      group: "팀 소개",
      subcategory: "Team 업무 소개",
      title: "영업마케팅파트 업무 소개: 매출 성장과 시장 접점을 만드는 팀",
      summary: "영업마케팅파트는 제품별 매출 성과, 병원 및 거래처 네트워크, 해외 파트너십, 마케팅 활동을 연결해 시장 기반을 넓힙니다.",
      author: "People Team",
      tags: ["영업마케팅파트", "팀소개", "매출성과", "병원네트워크", "해외파트너십", "마케팅"],
      takeaways: [
        "영업마케팅파트는 제품별 매출 성과와 고객 접점 확대를 중심으로 움직입니다.",
        "병원 및 대리점 네트워크, 해외 파트너십, 마케팅 콘텐츠를 함께 관리합니다.",
        "시장 반응을 내부 유관 부서와 연결해 제품 개선과 자료 준비가 이어지도록 지원합니다.",
      ],
      relatedPostIds: ["culture-team-intro", "culture-production-strategy-group"],
      image: SALES_MARKETING_THUMB_IMAGE,
      updatedAt: "2026-05-22T00:00:00+09:00",
      content: salesMarketingPartContent,
    },
    {
      id: "culture-management-support-part",
      category: "culture",
      group: "팀 소개",
      subcategory: "Team 업무 소개",
      title: "경영지원파트 업무 소개: 사업기획, 회계, 인사총무를 연결하는 운영 허브",
      summary: "경영지원파트는 사업기획, 재무회계, 인사총무, 과제관리를 연결해 회사 운영의 신뢰도와 지속 가능성을 높입니다.",
      author: "People Team",
      tags: ["경영지원파트", "사업기획파트", "팀소개", "재무회계", "인사총무", "과제관리"],
      takeaways: [
        "경영지원파트는 투자와 자금 조달, 회계, 인사총무, 과제관리를 연결하는 내부 운영 허브입니다.",
        "사업기획은 펀딩, 투자기관 대응, 계약 검토와 경영 의사결정 지원을 중심으로 움직입니다.",
        "재무회계와 인사총무는 결산, 감사, 자금, 노무 리스크, 직원 경험처럼 운영 신뢰도에 직접 연결되는 일을 담당합니다.",
      ],
      relatedPostIds: ["culture-team-intro", "culture-production-strategy-group", "culture-sales-marketing-part"],
      image: MANAGEMENT_SUPPORT_THUMB_IMAGE,
      updatedAt: "2026-05-22T00:00:00+09:00",
      content: managementSupportPartContent,
    },
    {
      id: "culture-gallery",
      category: "culture",
      title: "사내 행사 사진첩을 좋은 기록으로 남기는 법",
      summary: "워크샵, 송년회, 장기근속 포상 사진을 신규 구성원도 이해하기 쉬운 문화 아카이브로 정리합니다.",
      author: "People Team",
      tags: ["사진첩", "조직문화", "워크샵"],
      takeaways: [
        "사진만 모으기보다 행사 목적, 날짜, 참여 범위를 함께 기록합니다.",
        "대표 사진과 짧은 설명을 붙이면 회사 문화가 훨씬 잘 전달됩니다.",
        "공유 전 초상권과 외부 공개 가능 여부를 확인합니다.",
      ],
      updatedAt: new Date().toISOString(),
      content:
        "<h2>문화 기록은 왜 필요한가요?</h2><p>사내 행사는 지나가면 사라지는 경험이지만, 잘 정리된 기록은 신규 구성원이 회사 분위기를 이해하는 데 큰 도움이 됩니다. 사진첩은 단순한 앨범이 아니라 조직의 맥락을 전하는 자료입니다.</p><h2>사진첩 구성 기준</h2><ul><li>행사명, 일자, 장소, 참여 대상을 먼저 적습니다.</li><li>대표 사진 3~5장을 상단에 배치합니다.</li><li>행사의 목적과 기억할 장면을 짧은 문장으로 남깁니다.</li></ul><h2>공유 전 체크리스트</h2><p>외부 공개가 가능한 사진인지, 개인이 원하지 않는 사진이 포함되어 있지 않은지, 원본 파일 권한이 회사 내부로 제한되어 있는지 확인합니다.</p>",
    },
    {
      id: "hr-guide-onboarding",
      category: "hr-guide",
      title: "신규입사자 첫 주 온보딩 체크리스트",
      summary: "입사 전 준비부터 첫 주 적응까지, 신규 구성원이 놓치기 쉬운 절차를 순서대로 안내합니다.",
      author: "People Team",
      tags: ["온보딩", "신규입사자", "체크리스트"],
      takeaways: [
        "온보딩 글은 시간 순서대로 작성해야 실행 가능성이 높습니다.",
        "계정, 자리, 장비, 필수 교육은 입사 첫날 확인 항목으로 묶습니다.",
        "첫 주 말에는 팀 적응 상태와 추가 지원 필요 여부를 확인합니다.",
      ],
      updatedAt: new Date().toISOString(),
      content:
        "<h2>온보딩은 순서가 중요합니다</h2><p>신규입사자 안내는 정보량보다 실행 순서가 더 중요합니다. 구성원이 지금 무엇을 해야 하는지 바로 판단할 수 있도록 입사 전, 입사 당일, 첫 주로 나눠 안내합니다.</p><h2>시점별 체크리스트</h2><table><tbody><tr><th>시점</th><th>확인 항목</th><th>담당</th></tr><tr><td>입사 전</td><td>입사 서류, 계정 생성, 자리 배치, 장비 준비</td><td>HR / 총무</td></tr><tr><td>입사 당일</td><td>오리엔테이션, 장비 수령, 그룹웨어 접속, 보안 안내</td><td>HR / IT</td></tr><tr><td>첫 주</td><td>팀 소개, 기본 제도 안내, 필수 교육, 1:1 체크인</td><td>리더 / HR</td></tr></tbody></table><h2>자주 놓치는 부분</h2><p>입사 첫날에는 정보가 많기 때문에 모든 제도를 자세히 설명하기보다, 다시 찾아볼 수 있는 링크와 문의 채널을 남기는 것이 효과적입니다.</p>",
    },
    {
      id: "hr-guide-benefits",
      category: "hr-guide",
      title: "연차와 복리후생, 어디까지 사용할 수 있을까요?",
      summary: "연차 발생 기준, 경조사 지원, 복리후생 신청 절차를 구성원이 이해하기 쉬운 기준으로 정리했습니다.",
      author: "People Team",
      tags: ["연차", "복리후생", "경조사"],
      takeaways: [
        "제도 글은 대상, 기준, 신청 방법, 문의처를 분리해 적어야 합니다.",
        "예외 상황은 FAQ 형태로 하단에 정리하면 반복 문의를 줄일 수 있습니다.",
        "신청 링크와 마감 기준은 반드시 최신 상태로 유지합니다.",
      ],
      updatedAt: new Date().toISOString(),
      content:
        "<h2>먼저 확인할 기준</h2><p>연차와 복리후생은 구성원이 가장 자주 찾는 제도입니다. 글의 상단에는 대상, 기준일, 신청 경로를 명확히 적어야 합니다.</p><h2>항목별 안내</h2><ul><li>연차 발생 및 사용 기준</li><li>경조휴가와 경조금 신청 절차</li><li>복리후생 신청 가능 항목과 증빙 기준</li></ul><h2>신청 전 확인 사항</h2><p>제도별 승인자, 증빙 서류, 정산 마감일이 다를 수 있습니다. 신청 전 최신 공지와 그룹웨어 메뉴를 함께 확인해 주세요.</p>",
    },
    {
      id: "work-tool-google",
      category: "work-tool",
      title: "Google Workspace로 문서를 안전하게 공유하는 방법",
      summary: "메일, 드라이브, 캘린더, 문서 협업 도구를 회사 보안 기준에 맞게 사용하는 방법입니다.",
      author: "IT / People Team",
      tags: ["GoogleWorkspace", "Drive", "협업도구"],
      takeaways: [
        "Drive 문서는 공유 대상과 권한 수준을 먼저 확인해야 합니다.",
        "외부 공유가 필요한 문서는 소유자와 보안 기준을 명확히 둡니다.",
        "반복 협업 문서는 개인 드라이브보다 공유 드라이브를 권장합니다.",
      ],
      updatedAt: new Date().toISOString(),
      content:
        "<h2>협업 도구의 기본 원칙</h2><p>Google Workspace는 문서를 빠르게 공유할 수 있다는 장점이 있지만, 권한 설정이 느슨하면 정보 관리 리스크가 생깁니다. 문서 생성 시점부터 공유 범위를 정하는 습관이 필요합니다.</p><h2>도구별 사용 기준</h2><table><tbody><tr><th>도구</th><th>주요 용도</th><th>권장 기준</th></tr><tr><td>Gmail</td><td>사내외 커뮤니케이션</td><td>외부 발송 전 수신자와 첨부 파일 확인</td></tr><tr><td>Drive</td><td>문서 저장과 권한 관리</td><td>팀 문서는 공유 드라이브 사용</td></tr><tr><td>Calendar</td><td>회의 일정과 리소스 예약</td><td>회의 목적과 참석자 역할 기재</td></tr></tbody></table><h2>자주 발생하는 실수</h2><p>링크가 있는 모든 사용자에게 공개로 설정하거나, 퇴사자 소유 문서가 남는 경우가 있습니다. 중요한 문서는 소유권과 공유 범위를 정기적으로 점검합니다.</p>",
    },
    {
      id: "help-desk-faq",
      category: "help-desk",
      title: "HR 문의 전에 먼저 확인하면 좋은 FAQ",
      summary: "증명서, 연차, 비품, 서식 자동 발급처럼 반복 문의가 많은 항목을 빠르게 확인할 수 있습니다.",
      author: "People Team",
      tags: ["FAQ", "서식자동발급", "문의"],
      takeaways: [
        "FAQ는 질문 문장을 실제 구성원이 묻는 말로 작성하는 것이 좋습니다.",
        "답변에는 기준, 경로, 담당자를 함께 포함합니다.",
        "반복 문의가 생기면 기존 FAQ를 수정하거나 새 항목으로 추가합니다.",
      ],
      updatedAt: new Date().toISOString(),
      content:
        "<h2>FAQ를 사용하는 방법</h2><p>Help Desk의 FAQ는 구성원이 HR에 문의하기 전 스스로 답을 찾을 수 있도록 돕는 공간입니다. 답변은 짧게 쓰되, 실제 신청 경로와 담당자를 함께 남깁니다.</p><h2>자주 묻는 질문 예시</h2><ul><li>재직증명서와 경력증명서는 어디에서 자동 발급하나요?</li><li>명함신청은 어떤 정보가 필요한가요?</li><li>연차 정산 기준은 어디에서 확인하나요?</li></ul><h2>FAQ 업데이트 기준</h2><p>같은 질문이 2회 이상 반복되면 FAQ에 등록합니다. 이미 등록된 질문이라면 제목을 더 쉽게 바꾸거나 답변의 첫 문장을 보강합니다.</p>",
    },
    {
      id: "culture-org-chart",
      category: "hr-guide",
      group: "온보딩",
      subcategory: "조직도",
      title: "조직도, 배치도, 비상연락망을 빠르게 읽는 법",
      summary: "새로운 협업 상대를 찾을 때 조직도, 배치도, 비상연락망을 어떤 순서로 확인하면 좋은지 정리했습니다.",
      author: "People Team",
      tags: ["조직도", "배치도", "비상연락망"],
      takeaways: [
        "조직도는 보고 체계뿐 아니라 협업 요청 경로를 이해하는 자료입니다.",
        "배치도에는 위치 정보와 함께 방문 전 확인해야 할 근무 형태를 표시합니다.",
        "비상연락망은 긴급 상황에서 빠르게 연락할 기준과 담당자를 확인하는 자료입니다.",
      ],
      updatedAt: new Date().toISOString(),
      content:
        "<h2>먼저 확인할 정보</h2><p>조직도, 배치도, 비상연락망은 구성원이 협업 상대를 더 빠르게 찾고 긴급 상황에 대응하도록 돕는 기본 지도입니다. 부서명, 리더, 주요 역할, 근무 위치, 긴급 연락 기준을 함께 확인하면 문의 경로를 줄일 수 있습니다.</p><h2>추천 구성</h2><table><tbody><tr><th>구분</th><th>포함 내용</th></tr><tr><td>조직도</td><td>부서, 리더, 주요 담당 업무, 공통 문의 채널</td></tr><tr><td>배치도</td><td>층, 구역, 좌석, 재택/외근 참고 사항</td></tr><tr><td>비상연락망</td><td>긴급 연락 기준, 1차/2차 담당자, 연락 가능 시간</td></tr><tr><td>업데이트</td><td>최종 수정일, 수정 담당자, 변경 요청 방법</td></tr></tbody></table><h2>운영 팁</h2><p>조직 개편이나 신규 입사자가 있는 주에는 변경 사항을 빠르게 반영하고, 이미지 파일보다 링크형 문서로 관리하면 최신성을 유지하기 쉽습니다.</p>",
    },
    {
      id: "hr-guide-annual-leave",
      category: "hr-guide",
      title: "연차 사용과 휴가 정산 기준 한 번에 보기",
      summary: "연차 발생, 사용 신청, 잔여 연차 확인과 정산 기준을 구성원이 자주 묻는 질문 중심으로 안내합니다.",
      author: "People Team",
      tags: ["연차", "복리후생", "경조사"],
      takeaways: [
        "연차는 발생 기준, 사용 절차, 정산 기준을 한 화면에서 확인할 수 있어야 합니다.",
        "복리후생은 신청 가능 대상과 증빙 서류가 핵심입니다.",
        "자주 묻는 예외 상황은 FAQ로 분리하면 문의량을 줄일 수 있습니다.",
      ],
      updatedAt: new Date().toISOString(),
      content:
        "<h2>연차 안내의 핵심</h2><p>연차 제도 글은 구성원이 가장 먼저 찾는 기준을 앞쪽에 배치해야 합니다. 발생 기준, 사용 신청 경로, 반차/반반차 가능 여부, 정산 기준을 순서대로 정리합니다.</p><h2>복리후생 체크리스트</h2><ul><li>신청 대상과 지원 한도</li><li>필요 증빙과 제출 기한</li><li>승인 이후 지급 또는 정산 방식</li></ul><h2>문의 전 확인</h2><p>개별 상황에 따라 기준이 달라지는 항목은 예시를 함께 제공하면 좋습니다. 특히 경조사, 장기 휴가, 교육 지원처럼 증빙이 필요한 제도는 신청 전 준비물을 명확히 안내합니다.</p>",
    },
    {
      id: "hr-guide-year-calendar",
      category: "hr-guide",
      group: "HR Year Calendar",
      subcategory: "연차촉진, 평가 및 보상 로드맵, 연말정산 등",
      title: "HR Calendar: 연간 HR 운영 일정",
      summary: "연말정산, 평가, 보상, 연차촉진, 법정교육, 건강검진, 조직 운영 일정을 월별 캘린더로 정리했습니다.",
      author: "People Team",
      tags: ["HR Year Calendar", "인사평가", "연봉계약", "연차촉진", "연간 일정"],
      takeaways: [
        "1월 연말정산, 2~3월 보상 반영, 8~12월 평가 흐름을 월별로 확인합니다.",
        "연차촉진, 법정교육, 퇴직연금 교육, 건강검진처럼 놓치기 쉬운 운영 항목을 함께 배치했습니다.",
        "채용·온보딩, 조직문화, 인력계획까지 포함해 HR 운영 캘린더로 활용할 수 있습니다.",
      ],
      image: HR_YEAR_CALENDAR_IMAGE,
      updatedAt: new Date().toISOString(),
      content: `<figure class="article-figure"><img src="${HR_YEAR_CALENDAR_IMAGE}" alt="HR Calendar 월별 일정표" /><figcaption>연말정산, 평가, 보상, 연차촉진, 법정교육, 건강검진, 조직 운영 일정을 월별로 정리한 HR 캘린더입니다.</figcaption></figure><h2>월별 운영 포인트</h2><table><tbody><tr><th>월</th><th>주요 일정</th><th>확인 포인트</th></tr><tr><td>1월</td><td>연말정산 간소화, 전년도 근태 마감, 연간 HR 계획</td><td>자료 제출 경로, 근태 확정, 연간 공지 일정</td></tr><tr><td>2월</td><td>연봉계약 갱신, 보상안 커뮤니케이션, 조직·인력 계획</td><td>계약서 서명, 보상 메시지, 인력 수요</td></tr><tr><td>3월</td><td>연봉인상 반영, 평가 목표 오픈, 신규·전환 배치</td><td>급여 반영, 목표 작성 기준, 배치 안내</td></tr><tr><td>4월</td><td>사전신고서 마감, 1분기 온보딩 점검, 법정교육 계획</td><td>평가 목표 확정, 입사자 적응, 교육 일정</td></tr><tr><td>5월</td><td>평가 기준 리마인드, 건강검진 안내, 휴가 성수기 계획</td><td>평가 기준 재확인, 수검 대상, 휴가 분산</td></tr><tr><td>6월</td><td>상반기 이슈 정리, 급여 데이터 점검, 조직문화 펄스</td><td>상반기 회고, 급여 오류 예방, 구성원 의견</td></tr><tr><td>7월</td><td>연차촉진 1차, 하반기 목표 정렬, 법정교육 시작</td><td>미사용 연차 안내, 목표 보정, 교육 이수율</td></tr><tr><td>8월</td><td>중간점검 시작, 평가 시즌 알림, 리더 피드백 가이드</td><td>면담 일정, 평가 운영 공지, 피드백 품질</td></tr><tr><td>9월</td><td>중간점검 마감, 보상 후보 리뷰, 채용·온보딩 회고</td><td>중간 결과 정리, 후보군 검토, 채용 경험</td></tr><tr><td>10월</td><td>연차촉진 2차, 퇴직연금 교육, 건강검진 독려</td><td>사용 시기 지정, 교육 이수, 미수검자 확인</td></tr><tr><td>11월</td><td>최종평가 준비, 내년 인력 계획, 연말 근태 점검</td><td>평가 자료, 조직별 인력안, 근태 누락</td></tr><tr><td>12월</td><td>최종평가, 연차촉진 3차, 연말정산 사전안내, 조직개편 준비</td><td>성과 확정, 연차 마감, 서류 안내, 발령 준비</td></tr></tbody></table><h2>운영 메모</h2><p>정확한 시행일은 매년 공지 일정과 회사 운영 기준에 따라 조정될 수 있습니다. HR 캘린더는 세부 날짜보다 구성원이 미리 준비해야 할 흐름을 빠르게 확인하는 기준 화면으로 사용합니다.</p>`,
    },
    {
      id: "work-tool-groupware",
      category: "work-tool",
      title: "Groupware 승인과 공지를 놓치지 않는 방법",
      summary: "전자결재, 공지, 사내 게시판을 매일 확인해야 하는 이유와 기본 사용 흐름을 정리했습니다.",
      author: "IT / People Team",
      tags: ["Groupware", "전자결재", "공지"],
      takeaways: [
        "전자결재는 결재선과 첨부 문서 기준을 먼저 확인합니다.",
        "공지 게시판은 정책 변경과 운영 일정이 가장 먼저 올라오는 채널입니다.",
        "반복 양식은 즐겨찾기나 바로가기로 묶어두면 업무 시간을 줄일 수 있습니다.",
      ],
      updatedAt: new Date().toISOString(),
      content:
        "<h2>Groupware를 보는 순서</h2><p>Groupware는 전자결재와 공지, 사내 게시판을 연결하는 업무 허브입니다. 하루 업무를 시작할 때 결재 대기, 신규 공지, 요청 반려 내역을 순서대로 확인하면 누락을 줄일 수 있습니다.</p><h2>자주 쓰는 메뉴</h2><table><tbody><tr><th>메뉴</th><th>확인 포인트</th></tr><tr><td>전자결재</td><td>결재선, 첨부 파일, 반려 사유</td></tr><tr><td>공지</td><td>적용일, 대상자, 담당 부서</td></tr><tr><td>게시판</td><td>업무 요청, 사내 행사, 자료 공유</td></tr></tbody></table><h2>운영 팁</h2><p>중요 공지는 HR Lounge 글과 함께 연결해두면 구성원이 제도 설명과 실제 신청 경로를 한 번에 찾을 수 있습니다.</p>",
    },
    {
      id: "work-tool-it-support",
      category: "work-tool",
      title: "Wifi, 프린트, 비품 요청 전 확인할 것",
      summary: "업무 장비와 사무 환경 지원을 요청하기 전에 확인해야 할 정보와 신청 경로를 안내합니다.",
      author: "IT / Admin Team",
      tags: ["IT지원", "Wifi", "비품"],
      takeaways: [
        "장비 문제는 증상, 위치, 사용 기기를 함께 남기면 처리 속도가 빨라집니다.",
        "프린트와 Wifi 정보는 보안 기준에 맞춰 내부 공개 범위를 제한합니다.",
        "비품 요청은 수량, 용도, 필요 시점을 명확히 작성합니다.",
      ],
      updatedAt: new Date().toISOString(),
      content:
        "<h2>요청 전 체크리스트</h2><p>IT/총무 지원 요청은 필요한 정보를 처음부터 정확히 남기는 것이 중요합니다. 문제 증상, 발생 위치, 사용 장비, 필요한 시점을 함께 작성하면 담당자가 재문의 없이 처리할 수 있습니다.</p><h2>항목별 요청 기준</h2><ul><li>Wifi: 접속 위치, 기기 종류, 오류 메시지</li><li>프린트: 프린터 위치, 문서 형식, 출력 오류 화면</li><li>비품: 품목, 수량, 사용 목적, 필요 일자</li></ul><h2>처리 상태 확인</h2><p>요청 후에는 Groupware 또는 지정된 문의 채널에서 접수 상태를 확인합니다. 긴급 업무 영향이 있는 경우 제목에 긴급도를 표시합니다.</p>",
    },
    {
      id: "help-desk-forms",
      category: "help-desk",
      title: "서식 자동 발급: 재직증명서, 경력증명서, 명함신청",
      summary: "재직증명서, 경력증명서, 명함신청처럼 반복 요청되는 HR 서식 자동 발급 경로와 준비 기준을 모았습니다.",
      author: "People Team",
      tags: ["서식자동발급", "재직증명서", "경력증명서", "명함신청"],
      takeaways: [
        "자동 발급 항목은 신청 경로와 입력 정보를 먼저 안내합니다.",
        "재직증명서와 경력증명서는 제출처와 용도를 함께 확인합니다.",
        "명함신청은 표기명, 직함, 연락처, 수령 희망일을 정확히 입력합니다.",
      ],
      updatedAt: new Date().toISOString(),
      content:
        "<h2>자동 발급 기준</h2><p>서식 자동 발급 글은 파일을 내려받는 방식보다 구성원이 바로 신청하거나 발급 상태를 확인할 수 있도록 신청 경로, 입력 정보, 처리 기준을 함께 안내해야 합니다.</p><h2>대표 항목</h2><table><tbody><tr><th>항목</th><th>사용 상황</th><th>입력 정보</th></tr><tr><td>재직증명서</td><td>기관 제출, 대출, 비자 등 외부 확인</td><td>제출처, 용도, 발급 언어</td></tr><tr><td>경력증명서</td><td>외부 제출 또는 경력 확인</td><td>근무기간, 담당업무 포함 여부</td></tr><tr><td>명함신청</td><td>신규 입사, 직함 변경, 추가 제작</td><td>성명, 직함, 연락처, 수령 희망일</td></tr></tbody></table><h2>신청 전 확인</h2><p>외부 제출용 문서는 발급 소요 시간과 표기 기준이 다를 수 있습니다. 신청 전 제출처 요구사항과 국문/영문 여부를 먼저 확인해 주세요.</p>",
    },
    {
      id: "help-desk-contact",
      category: "help-desk",
      title: "HR 문의는 어떤 채널로 보내야 빠를까?",
      summary: "문의 유형별 담당 채널, 필요한 정보, 답변 기준 시간을 안내해 구성원이 빠르게 도움을 받을 수 있게 합니다.",
      author: "People Team",
      tags: ["문의", "지원채널", "HelpDesk"],
      takeaways: [
        "문의 유형별 담당 채널을 나누면 답변 속도와 정확도가 높아집니다.",
        "문의 내용에는 대상 제도, 희망 처리일, 관련 자료를 함께 적습니다.",
        "긴급 문의 기준을 명확히 하면 일반 문의 흐름이 안정됩니다.",
      ],
      updatedAt: new Date().toISOString(),
      content:
        "<h2>문의 채널을 나누는 이유</h2><p>HR 문의는 제도, 급여, 증명서, 복리후생처럼 성격이 다릅니다. 문의 유형별 채널을 구분하면 담당자가 빠르게 확인하고 필요한 자료를 정확히 안내할 수 있습니다.</p><h2>문의 작성 예시</h2><ul><li>문의 유형: 연차 정산 또는 복리후생 신청</li><li>필요 처리일: 언제까지 답변이 필요한지</li><li>첨부 자료: 증빙, 화면 캡처, 관련 문서 링크</li></ul><h2>답변 기준</h2><p>일반 문의는 접수 순서대로 처리하고, 급여 지급이나 외부 제출 기한처럼 업무 영향이 큰 건은 긴급 문의 기준에 따라 별도 확인합니다.</p>",
    },
  ],
};

let blogState = JSON.parse(JSON.stringify(defaultBlogState));
let currentBlogCategory = "culture";
let currentPostId = null;
let activeBlogTopic = "all";
let activeBlogSubtopic = "all";
let activeBlogSearchQuery = "";
let activeBlogListQuery = "";
let activeBlogSort = "basic";
let blogReady = false;
let saveTimer = 0;
let postDragStartOrder = [];
let postDragOrderChanged = false;
let postDragCommitted = false;
let postPointerDragItem = null;
let postPointerDragActive = false;
let postPointerStartX = 0;
let postPointerStartY = 0;
let postDragMoveEventName = "";
let postDragEndEventName = "";
let postDragCancelEventName = "";
let suppressPostSelectUntil = 0;
let previousRouteHash = "";
let currentRouteHash = window.location.hash || "#home";
const expandedBlogCategories = new Set();

const blogPage = document.querySelector("#blog-page");
const blogCategoryList = document.querySelector("#blog-category-list");
const blogTitle = document.querySelector("#blog-title");
const blogDescription = document.querySelector("#blog-description");
const blogStatus = document.querySelector("#blog-status");
const postList = document.querySelector("#post-list");
const postListTitle = document.querySelector("#post-list-title");
const postCountLabel = document.querySelector("#post-count-label");
const topicFilter = document.querySelector("#topic-filter");
const blogCurrentScope = document.querySelector("#blog-current-scope");
const blogListSearchInput = document.querySelector("#blog-list-search-input");
const blogSortButtons = document.querySelectorAll("[data-blog-sort]");
const taxonomyGuide = document.querySelector("#taxonomy-guide");
const contentSectionDivider = document.querySelector("#content-section-divider");
const postDetailPanel = document.querySelector("#post-detail-panel");
const postDetail = document.querySelector("#post-detail");
const detailSearchForm = document.querySelector("#detail-search-form");
const detailSearchInput = document.querySelector("#detail-search-input");
const editorPanel = document.querySelector("#editor-panel");
const postTitleInput = document.querySelector("#post-title-input");
const postSummaryInput = document.querySelector("#post-summary-input");
const postAuthorInput = document.querySelector("#post-author-input");
const postTagsInput = document.querySelector("#post-tags-input");
const postGroupSelect = document.querySelector("#post-group-select");
const postSubcategorySelect = document.querySelector("#post-subcategory-select");
const postImageInput = document.querySelector("#post-image-input");
const coverImageFileInput = document.querySelector("#cover-image-file-input");
const coverUploadButton = document.querySelector("#cover-upload-button");
const clearCoverButton = document.querySelector("#clear-cover-button");
const coverUploadLabel = document.querySelector("#cover-upload-label");
const coverPreview = document.querySelector("#cover-preview");
const relatedPostOptions = document.querySelector("#related-post-options");
const postEditor = document.querySelector("#post-editor");
const editorPreview = document.querySelector("#editor-preview");
const savePostButton = document.querySelector("#save-post-button");
const deletePostButton = document.querySelector("#delete-post-button");
const deleteDetailPostButton = document.querySelector("#delete-detail-post-button");
const newPostButton = document.querySelector("#new-post-button");
const previewPostButton = document.querySelector("#preview-post-button");
const editPostButton = document.querySelector("#edit-post-button");
const closeDetailButton = document.querySelector("#close-detail-button");
const siteSettingsButton = document.querySelector("#site-settings-button");
const siteSettingsPanel = document.querySelector("#site-settings-panel");
const postBackButton = document.querySelector("#post-back-button");
const cancelEditButton = document.querySelector("#cancel-edit-button");
const fontFamilySelect = document.querySelector("#font-family-select");
const fontSizeSelect = document.querySelector("#font-size-select");
const blockFormatSelect = document.querySelector("#block-format-select");
const headingHighlightSelect = document.querySelector("#heading-highlight-select");
const textColorInput = document.querySelector("#text-color-input");
const highlightColorInput = document.querySelector("#highlight-color-input");
const insertTableButton = document.querySelector("#insert-table-button");
const insertLinkButton = document.querySelector("#insert-link-button");
const insertLinkPreviewButton = document.querySelector("#insert-link-preview-button");
const tableStyleSelect = document.querySelector("#table-style-select");
const tableWidthRange = document.querySelector("#table-width-range");
const tablePaddingRange = document.querySelector("#table-padding-range");
const tableRowHeightRange = document.querySelector("#table-row-height-range");
const insertQuoteButton = document.querySelector("#insert-quote-button");
const insertSummaryBoxButton = document.querySelector("#insert-summary-box-button");
const insertFactBoxButton = document.querySelector("#insert-fact-box-button");
const insertCardListButton = document.querySelector("#insert-card-list-button");
const insertTocBlockButton = document.querySelector("#insert-toc-block-button");
const insertFigureBlockButton = document.querySelector("#insert-figure-block-button");
const insertChecklistButton = document.querySelector("#insert-checklist-button");
const insertCtaBoxButton = document.querySelector("#insert-cta-box-button");
const dividerStyleSelect = document.querySelector("#divider-style-select");
const insertDividerButton = document.querySelector("#insert-divider-button");
const editorImageFileInput = document.querySelector("#editor-image-file-input");
const insertImageButton = document.querySelector("#insert-image-button");
const setCoverFromEditorButton = document.querySelector("#set-cover-from-editor-button");
const imageWidthRange = document.querySelector("#image-width-range");
const removeEditorImageButton = document.querySelector("#remove-editor-image-button");
const tableRowsInput = document.querySelector("#table-rows-input");
const tableColsInput = document.querySelector("#table-cols-input");
let selectedEditorImage = null;
let selectedEditorBlock = null;
let savedEditorRange = null;
let tableResizeOverlay = null;
let tableResizeTarget = null;
let tableResizeDrag = null;
let tableResizeFrame = 0;
let orgChartResizeOverlay = null;
let orgChartResizeTarget = null;
let orgChartResizeDrag = null;
let orgChartResizeFrame = 0;
const EDITOR_SELECTABLE_BLOCK_SELECTOR = [
  ".article-toc-block",
  ".article-summary-box",
  ".article-checklist",
  ".article-card-grid",
  ".article-fact",
  ".article-figure",
  ".article-cta",
  ".article-link-preview",
  ".article-quote",
  ".article-divider",
  ".article-org-chart",
  ".article-metric-grid",
  "table",
].join(",");
const HEADING_HIGHLIGHT_CLASSES = [
  "article-heading-brush",
  "article-heading-marker",
  "article-heading-accent",
  "article-heading-box",
  "article-heading-side",
];
const ADMIN_AUTH_SESSION_KEY = "hr-lounge-admin-session-v1";
const BLOG_STATE_STORAGE_KEY = "hrLoungeBlogState";
const STATIC_BLOG_DATA_URL = "./blog-data.json?v=20260525-data";
const REMOTE_BLOG_API_URL = "./api/blog-data";
const LOCAL_PREVIEW_ADMIN_PASSWORD = "1966";
const ONBOARDING_ACCESS_SESSION_KEY = "hr-lounge-onboarding-email";
let isEditorUnlocked = false;
let adminSession = null;
let editorUnlockDialog = null;
let pendingEditorAction = null;
let siteSettingsOpenedFromHiddenBlogPage = false;

function hasAppsScriptBridge() {
  return typeof google !== "undefined" && google.script && google.script.run;
}

function setBlogStatus(message) {
  if (blogStatus) {
    blogStatus.textContent = message;
  }
}

function isAdminSessionUsable(session) {
  return Boolean(session && session.user && session.user.email && (!session.expiresAt || Number(session.expiresAt) > Date.now()));
}

function canUseRemoteBlogApi() {
  return typeof fetch === "function" && typeof window !== "undefined" && window.location.protocol !== "file:";
}

async function postRemoteBlogApi(payload) {
  if (!canUseRemoteBlogApi()) {
    return null;
  }

  let response;
  try {
    response = await fetch(REMOTE_BLOG_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    return null;
  }

  if (response.status === 404) {
    return null;
  }

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(result?.error || "원격 저장 API 요청에 실패했습니다.");
  }
  return result;
}

async function loginRemoteAdmin(password) {
  const result = await postRemoteBlogApi({ action: "login", password });
  if (!result) {
    return null;
  }
  if (!result.token || !result.user) {
    throw new Error("관리자 로그인 응답이 올바르지 않습니다.");
  }
  return {
    token: result.token,
    remote: true,
    user: result.user,
    expiresAt: Date.now() + Number(result.expiresIn || 21600) * 1000,
  };
}

async function saveBlogStateToRemote(state) {
  if (!adminSession?.remote || !adminSession?.token) {
    return null;
  }
  return postRemoteBlogApi({
    action: "save",
    token: adminSession.token,
    state,
  });
}

async function uploadBlogImageToRemote(dataUrl, options = {}) {
  if (!adminSession?.remote || !adminSession?.token || !String(dataUrl || "").startsWith("data:image/")) {
    return dataUrl;
  }

  const result = await postRemoteBlogApi({
    action: "uploadImage",
    token: adminSession.token,
    image: dataUrl,
    fileName: options.fileName || "image",
    kind: options.kind || "image",
  });
  if (!result?.url) {
    throw new Error("이미지 업로드 응답이 올바르지 않습니다.");
  }
  return result.url;
}

function readEditorUnlockState() {
  try {
    const storedSession = JSON.parse(sessionStorage.getItem(ADMIN_AUTH_SESSION_KEY) || "null");
    if (isAdminSessionUsable(storedSession)) {
      adminSession = storedSession;
      return true;
    }
    sessionStorage.removeItem(ADMIN_AUTH_SESSION_KEY);
    adminSession = null;
    return false;
  } catch (error) {
    adminSession = null;
    return false;
  }
}

function writeEditorUnlockState() {
  try {
    if (adminSession) {
      sessionStorage.setItem(ADMIN_AUTH_SESSION_KEY, JSON.stringify(adminSession));
    }
  } catch (error) {
    // Session storage can be unavailable in some embedded browser modes.
  }
}

function clearEditorUnlockState() {
  adminSession = null;
  isEditorUnlocked = false;
  try {
    sessionStorage.removeItem(ADMIN_AUTH_SESSION_KEY);
  } catch (error) {
    // Session storage can be unavailable in some embedded browser modes.
  }
}

function getAdminDisplayName() {
  return adminSession?.user?.name || adminSession?.user?.email || "관리자";
}

function syncEditorAccessStatus() {
  setBlogStatus(isEditorUnlocked ? `관리자 로그인: ${getAdminDisplayName()}` : "읽기 전용");
  syncAdminControlsVisibility();
}

function syncAdminControlsVisibility() {
  const settings = getSiteSettings();
  [newPostButton, editPostButton, deleteDetailPostButton, deletePostButton, savePostButton].forEach((button) => {
    if (button) {
      button.hidden = !isEditorUnlocked;
    }
  });

  const postListActions = newPostButton?.closest(".post-list-actions");
  if (postListActions) {
    postListActions.hidden = !isEditorUnlocked;
  }

  if (siteSettingsButton) {
    siteSettingsButton.textContent = isEditorUnlocked ? settings.buttons.siteSettings : "관리자 로그인";
    siteSettingsButton.setAttribute("aria-label", isEditorUnlocked ? "사이트 설정 열기" : "관리자 로그인");
  }
}

function hideEditorUnlockDialog() {
  if (editorUnlockDialog) {
    editorUnlockDialog.hidden = true;
  }
}

function ensureEditorUnlockDialog() {
  if (editorUnlockDialog) {
    return editorUnlockDialog;
  }

  editorUnlockDialog = document.createElement("div");
  const settings = getSiteSettings();
  editorUnlockDialog.className = "editor-unlock-modal";
  editorUnlockDialog.hidden = true;
  editorUnlockDialog.innerHTML = `
    <div class="editor-unlock-card" role="dialog" aria-modal="true" aria-labelledby="editor-unlock-title">
      <button class="editor-unlock-close" type="button" aria-label="닫기"></button>
      <p class="eyebrow">Admin Access</p>
      <h3 id="editor-unlock-title">관리자 로그인</h3>
      <p class="editor-unlock-help">관리자 비밀번호를 입력하세요.</p>
      <form class="editor-unlock-form">
        <label>
          <span>비밀번호</span>
          <input type="password" autocomplete="current-password" inputmode="numeric" />
        </label>
        <p class="editor-unlock-error" role="alert" hidden>비밀번호가 올바르지 않습니다.</p>
        <button class="editor-button primary" type="submit">${escapeHtml(settings.buttons.unlockConfirm)}</button>
      </form>
    </div>
  `;
  document.body.appendChild(editorUnlockDialog);

  const closeButton = editorUnlockDialog.querySelector(".editor-unlock-close");
  const form = editorUnlockDialog.querySelector(".editor-unlock-form");
  const passwordInput = editorUnlockDialog.querySelector('input[type="password"]');
  const error = editorUnlockDialog.querySelector(".editor-unlock-error");

  closeButton?.addEventListener("click", () => {
    pendingEditorAction = null;
    hideEditorUnlockDialog();
    syncEditorAccessStatus();
  });

  editorUnlockDialog.addEventListener("click", (event) => {
    if (event.target === editorUnlockDialog) {
      pendingEditorAction = null;
      hideEditorUnlockDialog();
      syncEditorAccessStatus();
    }
  });

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const password = passwordInput?.value || "";
    if (!password) {
      if (error) {
        error.hidden = false;
      }
      setBlogStatus("관리자 로그인 필요");
      passwordInput?.focus();
      return;
    }

    try {
      setBlogStatus("관리자 확인 중");
      adminSession = await loginEditorAdmin(password);
      isEditorUnlocked = true;
      writeEditorUnlockState();
      hideEditorUnlockDialog();
      syncEditorAccessStatus();
      const action = pendingEditorAction;
      pendingEditorAction = null;
      if (typeof action === "function") {
        window.setTimeout(action, 0);
      }
    } catch (loginError) {
      clearEditorUnlockState();
      if (error) {
        error.textContent = loginError?.message || "관리자 로그인에 실패했습니다.";
        error.hidden = false;
      }
      setBlogStatus("읽기 전용");
      passwordInput?.select();
    }
  });

  passwordInput?.addEventListener("input", () => {
    if (error) {
      error.hidden = true;
    }
  });

  return editorUnlockDialog;
}

function loginEditorAdmin(password) {
  if (hasAppsScriptBridge()) {
    return new Promise((resolve, reject) => {
      google.script.run
        .withSuccessHandler((result) => {
          if (!result || !result.token || !result.user) {
            reject(new Error("관리자 로그인 응답이 올바르지 않습니다."));
            return;
          }
          resolve({
            token: result.token,
            user: result.user,
            expiresAt: Date.now() + Number(result.expiresIn || 21600) * 1000,
          });
        })
        .withFailureHandler((error) => reject(new Error(error?.message || "관리자 로그인에 실패했습니다.")))
        .loginAdmin(password);
    });
  }

  return loginRemoteAdmin(password).then((remoteSession) => {
    if (remoteSession) {
      return remoteSession;
    }
    if (password !== LOCAL_PREVIEW_ADMIN_PASSWORD) {
      return Promise.reject(new Error("비밀번호가 올바르지 않습니다."));
    }
    return {
      token: `local-${Date.now()}`,
      local: true,
      user: {
        email: "local-admin",
        name: "관리자",
        role: "admin",
      },
      expiresAt: Date.now() + 6 * 60 * 60 * 1000,
    };
  });
}

function showEditorUnlockDialog(onUnlock = null) {
  const dialog = ensureEditorUnlockDialog();
  pendingEditorAction = typeof onUnlock === "function" ? onUnlock : null;
  const passwordInput = dialog.querySelector('input[type="password"]');
  const error = dialog.querySelector(".editor-unlock-error");
  if (error) {
    error.hidden = true;
  }
  if (passwordInput) {
    passwordInput.value = "";
  }
  dialog.hidden = false;
  window.setTimeout(() => passwordInput?.focus(), 0);
}

function requestEditorAccess(onUnlock = null) {
  if (isAdminSessionUsable(adminSession)) {
    isEditorUnlocked = true;
    return true;
  }

  clearEditorUnlockState();
  showEditorUnlockDialog(onUnlock);
  setBlogStatus("관리자 로그인 필요");
  return false;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderPostPreviewTitle(title) {
  const value = String(title || "");
  const match = value.match(/^(.+?업무 소개:)\s*(.+)$/);
  if (!match) {
    return escapeHtml(value);
  }
  return `<span class="post-preview-title-main">${escapeHtml(match[1])}</span> <span class="post-preview-title-subtitle">${escapeHtml(match[2])}</span>`;
}

function stripHtml(value) {
  const template = document.createElement("template");
  template.innerHTML = value || "";
  return template.content.textContent || "";
}

function normalizeTags(value, fallback = []) {
  const rawTags = Array.isArray(value) ? value : String(value || "").split(/[\s,#]+/);
  const normalized = rawTags
    .map((tag) => String(tag).replace(/^#/, "").trim())
    .filter(Boolean);
  return [...new Set(normalized.length ? normalized : fallback)].slice(0, 8);
}

function normalizeTakeaways(value, fallback = []) {
  const rawItems = Array.isArray(value) ? value : String(value || "").split(/\n+/);
  const normalized = rawItems.map((item) => String(item).trim()).filter(Boolean);
  return (normalized.length ? normalized : fallback).slice(0, 5);
}

function normalizeRelatedPostIds(value, currentId = "") {
  const rawIds = Array.isArray(value) ? value : String(value || "").split(/[\s,]+/);
  return [...new Set(rawIds.map((id) => String(id).trim()).filter((id) => id && id !== currentId))];
}

function normalizePostIdList(value, limit = 3) {
  const rawIds = Array.isArray(value) ? value : String(value || "").split(/[\s,]+/);
  return [...new Set(rawIds.map((id) => String(id).trim()).filter(Boolean))].slice(0, limit);
}

function normalizePopularSearches(value, fallback = defaultSiteSettings.popular.searches) {
  const rawItems = Array.isArray(value) ? value : String(value || "").split(/[\n,]+/);
  const normalized = rawItems.map((item) => String(item).trim()).filter(Boolean);
  return [...new Set(normalized.length ? normalized : fallback)].slice(0, 5);
}

function normalizePostOrder(value) {
  const order = Number(value);
  return Number.isFinite(order) ? order : null;
}

function comparePostsByOrder(a, b) {
  const aOrder = normalizePostOrder(a?.order);
  const bOrder = normalizePostOrder(b?.order);
  if (aOrder !== null && bOrder !== null && aOrder !== bOrder) {
    return aOrder - bOrder;
  }
  if (aOrder !== null && bOrder === null) {
    return -1;
  }
  if (aOrder === null && bOrder !== null) {
    return 1;
  }
  const dateDifference = new Date(b?.updatedAt || 0) - new Date(a?.updatedAt || 0);
  if (dateDifference) {
    return dateDifference;
  }
  return String(a?.title || "").localeCompare(String(b?.title || ""), "ko");
}

function normalizePostOrders(posts) {
  blogCategories.forEach((category) => {
    posts
      .filter((post) => post.category === category.slug)
      .sort(comparePostsByOrder)
      .forEach((post, index) => {
        post.order = index + 1;
      });
  });
  return posts;
}

function parseEmailList(value) {
  return [
    ...new Set(
      String(value || "")
        .split(/[\s,;]+/)
        .map((email) => email.trim().toLowerCase())
        .filter((email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)),
    ),
  ];
}

function cloneSiteSettings(settings = defaultSiteSettings) {
  return JSON.parse(JSON.stringify(settings));
}

function normalizeSettingText(value, fallback = "") {
  const text = value === null || value === undefined ? "" : String(value).trim();
  return text || fallback;
}

function normalizeSettingBoolean(value) {
  if (value === true) {
    return true;
  }
  const text = String(value || "").trim().toLowerCase();
  return ["true", "1", "yes", "on", "사용", "켜짐"].includes(text);
}

function normalizeHrCalendarItems(value, fallback = []) {
  const sourceItems = Array.isArray(value) ? value : String(value || "").split(/[\n,]+/);
  const items = sourceItems.map((item) => String(item || "").trim()).filter(Boolean).slice(0, 4);
  return items.length ? items : fallback.slice(0, 4);
}

function normalizeHrCalendarSettings(value = {}) {
  const source = value && typeof value === "object" ? value : {};
  const fallback = defaultSiteSettings.hrCalendar;
  const sourceMonths = Array.isArray(source.months) ? source.months : [];
  return {
    title: normalizeSettingText(source.title, fallback.title),
    subtitle: normalizeSettingText(source.subtitle, fallback.subtitle),
    note: normalizeSettingText(source.note, fallback.note),
    months: fallback.months.map((fallbackMonth, index) => {
      const sourceMonth = sourceMonths[index] && typeof sourceMonths[index] === "object" ? sourceMonths[index] : {};
      return {
        label: fallbackMonth.label,
        items: normalizeHrCalendarItems(sourceMonth.items ?? sourceMonth.itemsText, fallbackMonth.items),
      };
    }),
  };
}

function normalizeSiteSettings(value = {}) {
  const source = value && typeof value === "object" ? value : {};
  const settings = cloneSiteSettings(defaultSiteSettings);

  ["hero", "sections", "footer", "buttons"].forEach((groupName) => {
    const sourceGroup = source[groupName] && typeof source[groupName] === "object" ? source[groupName] : {};
    Object.keys(settings[groupName]).forEach((key) => {
      settings[groupName][key] = normalizeSettingText(sourceGroup[key], settings[groupName][key]);
    });
  });

  const sourceCategories = source.categories && typeof source.categories === "object" ? source.categories : {};
  settings.categories = {};
  blogCategories.forEach((category) => {
    const fallback = defaultSiteSettings.categories[category.slug] || category;
    const sourceCategory = sourceCategories[category.slug] && typeof sourceCategories[category.slug] === "object" ? sourceCategories[category.slug] : {};
    settings.categories[category.slug] = {
      label: normalizeSettingText(sourceCategory.label, fallback.label),
      description: normalizeSettingText(sourceCategory.description, fallback.description)
        .replaceAll("갤러리", "사진첩")
        .replaceAll("자리배치도", "배치도")
        .replaceAll("각종 서식 다운로드", "서식 자동 발급")
        .replaceAll("서식 다운로드", "서식 자동 발급"),
    };
  });

  const sourceFeaturedPostIds = source.featuredPostIds && typeof source.featuredPostIds === "object" ? source.featuredPostIds : {};
  settings.featuredPostIds = {};
  blogCategories.forEach((category) => {
    settings.featuredPostIds[category.slug] = normalizePostIdList(sourceFeaturedPostIds[category.slug]);
  });

  const sourcePopular = source.popular && typeof source.popular === "object" ? source.popular : {};
  settings.popular = {
    searches: normalizePopularSearches(sourcePopular.searches),
    postIds: normalizePostIdList(sourcePopular.postIds, 3),
  };

  settings.hrCalendar = normalizeHrCalendarSettings(source.hrCalendar);

  const sourceOnboardingAccess =
    source.onboardingAccess && typeof source.onboardingAccess === "object" ? source.onboardingAccess : {};
  settings.onboardingAccess = {
    emails: String(sourceOnboardingAccess.emails ?? defaultSiteSettings.onboardingAccess.emails ?? "").trim(),
  };

  const sourceNotifications =
    source.notifications && typeof source.notifications === "object" ? source.notifications : {};
  settings.notifications = {
    enabled: normalizeSettingBoolean(sourceNotifications.enabled),
    emails: String(sourceNotifications.emails ?? defaultSiteSettings.notifications.emails ?? "").trim(),
  };

  const sourceFaq = source.faq && typeof source.faq === "object" ? source.faq : {};
  settings.faq.eyebrow = normalizeSettingText(sourceFaq.eyebrow, settings.faq.eyebrow);
  settings.faq.title = normalizeSettingText(sourceFaq.title, settings.faq.title);
  settings.faq.description = normalizeSettingText(sourceFaq.description, settings.faq.description);

  const sourceItems = Array.isArray(sourceFaq.items) && sourceFaq.items.length ? sourceFaq.items : settings.faq.items;
  const itemCount = Math.max(settings.faq.items.length, Math.min(sourceItems.length, 8));
  settings.faq.items = Array.from({ length: itemCount }, (_, index) => {
    const sourceItem = sourceItems[index] && typeof sourceItems[index] === "object" ? sourceItems[index] : {};
    const fallbackItem = defaultSiteSettings.faq.items[index] || { question: "", answer: "" };
    return {
      question: String(sourceItem.question ?? fallbackItem.question ?? "").trim().replaceAll("서식 다운로드", "서식 자동 발급"),
      answer: String(sourceItem.answer ?? fallbackItem.answer ?? "").trim().replaceAll("서식 다운로드", "서식 자동 발급"),
    };
  });

  return settings;
}

function getSiteSettings() {
  return normalizeSiteSettings(blogState?.siteSettings || defaultSiteSettings);
}

function getSiteSettingPath(settings, path) {
  return String(path)
    .split(".")
    .reduce((current, key) => (current && Object.prototype.hasOwnProperty.call(current, key) ? current[key] : ""), settings);
}

function setSiteSettingPath(settings, path, value) {
  const keys = String(path).split(".");
  const lastKey = keys.pop();
  const target = keys.reduce((current, key, index) => {
    if (!current[key] || typeof current[key] !== "object") {
      current[key] = /^\d+$/.test(keys[index + 1]) ? [] : {};
    }
    return current[key];
  }, settings);
  target[lastKey] = value;
}

function escapeSvgText(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function truncateCalendarText(value, maxLength = 17) {
  const chars = Array.from(String(value || "").trim());
  return chars.length > maxLength ? `${chars.slice(0, maxLength - 1).join("")}…` : chars.join("");
}

function getHrCalendarItemKind(item) {
  const text = String(item || "");
  if (/연말정산|급여|근태|세무/.test(text)) {
    return "tax";
  }
  if (/연봉|보상|인상|계약/.test(text)) {
    return "pay";
  }
  if (/평가|목표|점검|피드백|사전신고/.test(text)) {
    return "review";
  }
  if (/연차|휴가/.test(text)) {
    return "leave";
  }
  if (/교육|준법|퇴직연금|성희롱|개인정보|안전/.test(text)) {
    return "edu";
  }
  if (/건강|검진/.test(text)) {
    return "health";
  }
  return "org";
}

function getHrCalendarKindColor(kind) {
  const colors = {
    tax: "#5b6f9d",
    pay: "#1f7d7a",
    review: "#d95f55",
    leave: "#648868",
    edu: "#c6801f",
    health: "#2f8f79",
    org: "#6b7fb5",
  };
  return colors[kind] || colors.org;
}

function renderHrCalendarMonthSvg(month, index) {
  const column = index % 4;
  const row = Math.floor(index / 4);
  const x = 64 + column * 362;
  const y = 220 + row * 242;
  const items = normalizeHrCalendarItems(month.items, []).slice(0, 4);
  const itemLines = items
    .map((item, itemIndex) => {
      const kind = getHrCalendarItemKind(item);
      const itemY = 112 + itemIndex * 30;
      return `<circle cx="36" cy="${itemY - 6}" r="6" fill="${getHrCalendarKindColor(kind)}"/><text class="item ${kind}" x="54" y="${itemY}">${escapeSvgText(truncateCalendarText(item))}</text>`;
    })
    .join("");
  return `
    <g transform="translate(${x} ${y})" filter="url(#cardShadow)">
      <rect width="320" height="218" rx="22" fill="#ffffff" opacity="0.94"/>
      <text class="month" x="28" y="64">${escapeSvgText(month.label)}</text>
      ${itemLines}
    </g>`;
}

function buildHrCalendarSvg(calendarSettings = getSiteSettings().hrCalendar) {
  const calendar = normalizeHrCalendarSettings(calendarSettings);
  const months = calendar.months.map(renderHrCalendarMonthSvg).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1080" viewBox="0 0 1600 1080" role="img" aria-labelledby="title desc">
  <title id="title">${escapeSvgText(calendar.title)}</title>
  <desc id="desc">${escapeSvgText(calendar.subtitle)}</desc>
  <defs>
    <linearGradient id="paper" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#fffaf3"/><stop offset="0.48" stop-color="#f7f9fc"/><stop offset="1" stop-color="#eef7f1"/>
    </linearGradient>
    <linearGradient id="wash" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#fff4e5" stop-opacity="0.9"/><stop offset="0.55" stop-color="#eef3ff" stop-opacity="0.75"/><stop offset="1" stop-color="#e8f6ee" stop-opacity="0.9"/>
    </linearGradient>
    <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#263241" flood-opacity="0.11"/>
    </filter>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#263241" flood-opacity="0.10"/>
    </filter>
    <pattern id="dotPattern" width="34" height="34" patternUnits="userSpaceOnUse">
      <circle cx="3" cy="3" r="1.6" fill="#cfd7e6" opacity="0.38"/>
    </pattern>
    <style>
      .base { font-family: Pretendard, "Noto Sans KR", "Apple SD Gothic Neo", Arial, sans-serif; }
      .title { fill: #171b25; font-size: 74px; font-weight: 900; letter-spacing: -1px; }
      .subtitle { fill: #566071; font-size: 27px; font-weight: 800; }
      .badge-text { fill: #6073ff; font-size: 18px; font-weight: 900; letter-spacing: 0.5px; }
      .legend-text { fill: #394150; font-size: 20px; font-weight: 850; }
      .month { fill: #171b25; font-size: 38px; font-weight: 900; }
      .item { font-size: 18px; font-weight: 800; }
      .note { fill: #798395; font-size: 18px; font-weight: 750; }
      .tax { fill: #5b6f9d; } .pay { fill: #1f7d7a; } .review { fill: #d95f55; } .leave { fill: #648868; } .edu { fill: #c6801f; } .health { fill: #2f8f79; } .org { fill: #6b7fb5; }
    </style>
  </defs>
  <rect width="1600" height="1080" rx="44" fill="url(#paper)"/>
  <rect width="1600" height="1080" fill="url(#dotPattern)" opacity="0.72"/>
  <path d="M0 880 C240 790 410 905 650 815 C910 720 1110 845 1600 765 L1600 1080 L0 1080 Z" fill="url(#wash)" opacity="0.72"/>
  <circle cx="200" cy="95" r="210" fill="#ffd6b2" opacity="0.22"/><circle cx="1370" cy="150" r="250" fill="#d9efe3" opacity="0.28"/>
  <g class="base">
    <rect x="64" y="46" width="242" height="38" rx="19" fill="#eef1ff"/><text class="badge-text" x="86" y="72">SOLMEDIX HR LOUNGE</text>
    <text class="title" x="64" y="142">${escapeSvgText(calendar.title)}</text>
    <text class="subtitle" x="68" y="184">${escapeSvgText(truncateCalendarText(calendar.subtitle, 38))}</text>
    <g filter="url(#softShadow)">
      <rect x="952" y="46" width="574" height="96" rx="26" fill="#ffffff" opacity="0.92"/>
      <circle cx="988" cy="78" r="8" fill="#5b6f9d"/><text class="legend-text" x="1010" y="85">세무·급여</text>
      <circle cx="1130" cy="78" r="8" fill="#1f7d7a"/><text class="legend-text" x="1152" y="85">보상</text>
      <circle cx="1250" cy="78" r="8" fill="#d95f55"/><text class="legend-text" x="1272" y="85">평가</text>
      <circle cx="1370" cy="78" r="8" fill="#648868"/><text class="legend-text" x="1392" y="85">연차</text>
      <circle cx="988" cy="115" r="8" fill="#c6801f"/><text class="legend-text" x="1010" y="122">교육·준법</text>
      <circle cx="1130" cy="115" r="8" fill="#2f8f79"/><text class="legend-text" x="1152" y="122">건강</text>
      <circle cx="1250" cy="115" r="8" fill="#6b7fb5"/><text class="legend-text" x="1272" y="122">조직·채용</text>
    </g>
    ${months}
    <text class="note" x="66" y="992">※ ${escapeSvgText(truncateCalendarText(calendar.note, 70))}</text>
  </g>
</svg>`;
}

function getHrCalendarImageDataUrl(settings = getSiteSettings()) {
  const calendar = normalizeHrCalendarSettings(settings.hrCalendar);
  const cacheKey = JSON.stringify(calendar);
  if (hrCalendarImageCacheKey === cacheKey && hrCalendarImageCacheValue) {
    return hrCalendarImageCacheValue;
  }
  hrCalendarImageCacheKey = cacheKey;
  hrCalendarImageCacheValue = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(buildHrCalendarSvg(calendar))}`;
  return hrCalendarImageCacheValue;
}

function hydrateHrCalendarImages(container = document) {
  const src = getHrCalendarImageDataUrl();
  const images = container.querySelectorAll?.('img[data-hr-calendar-image], img[src*="hr-year-calendar.svg"]') || [];
  images.forEach((image) => {
    image.src = src;
    image.alt = image.alt || "HR 캘린더 월별 일정표";
  });
  if (container === document && calendarSpotlightImage) {
    calendarSpotlightImage.src = src;
  }
}

function getCategoryBySlug(slug) {
  const category = blogCategories.find((item) => item.slug === slug) || blogCategories[0];
  const categorySettings = getSiteSettings().categories?.[category.slug] || {};
  return {
    ...category,
    label: categorySettings.label || category.label,
    description: categorySettings.description || category.description,
  };
}

function getCategoryTaxonomy(slug) {
  const category = getCategoryBySlug(slug);
  return category.groups || hrTaxonomy[category.slug] || [];
}

function getTaxonomyGroups(slug) {
  return getCategoryTaxonomy(slug).map((group) => group.label);
}

function getTaxonomyItems(slug, groupLabel) {
  const groups = getCategoryTaxonomy(slug);
  const group = groups.find((item) => item.label === groupLabel) || groups[0];
  return group?.items || [];
}

function getDefaultTaxonomyGroup(slug) {
  return getTaxonomyGroups(slug)[0] || "";
}

function getDefaultTaxonomyItem(slug, groupLabel) {
  return getTaxonomyItems(slug, groupLabel)[0]?.title || "";
}

function findTaxonomyMatch(slug, post = {}) {
  const category = getCategoryBySlug(slug);
  const searchable = [
    post.group,
    post.subcategory,
    post.title,
    post.summary,
    post.author,
    ...(Array.isArray(post.tags) ? post.tags : String(post.tags || "").split(/[\s,#]+/)),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  for (const group of getCategoryTaxonomy(category.slug)) {
    if (searchable.includes(group.label.toLowerCase())) {
      return { group: group.label, item: group.items[0] || null };
    }
    const matchedItem = group.items.find((item) => {
      const title = item.title.toLowerCase();
      return searchable.includes(title) || title.split(/[\s,/]+/).some((word) => word.length > 1 && searchable.includes(word));
    });
    if (matchedItem) {
      return { group: group.label, item: matchedItem };
    }
  }

  const defaultGroup = getCategoryTaxonomy(category.slug)[0];
  return { group: defaultGroup?.label || "", item: defaultGroup?.items?.[0] || null };
}

function normalizePostGroup(post, categorySlug = post?.category || currentBlogCategory) {
  const groups = getTaxonomyGroups(categorySlug);
  if (groups.includes(post?.group)) {
    return post.group;
  }
  return findTaxonomyMatch(categorySlug, post).group || getDefaultTaxonomyGroup(categorySlug);
}

function normalizePostSubcategory(post, categorySlug = post?.category || currentBlogCategory, groupLabel = "") {
  const group = groupLabel || normalizePostGroup(post, categorySlug);
  const items = getTaxonomyItems(categorySlug, group);
  if (items.some((item) => item.title === post?.subcategory)) {
    return post.subcategory;
  }
  const match = findTaxonomyMatch(categorySlug, post);
  if (match.group === group && match.item) {
    return match.item.title;
  }
  return getDefaultTaxonomyItem(categorySlug, group);
}

function getTaxonomyNote(categorySlug, groupLabel, subcategoryTitle) {
  return getTaxonomyItems(categorySlug, groupLabel).find((item) => item.title === subcategoryTitle)?.note || "";
}

function getPostGroup(post) {
  return normalizePostGroup(post, post?.category || currentBlogCategory);
}

function getPostSubcategory(post) {
  const categorySlug = post?.category || currentBlogCategory;
  const group = getPostGroup(post);
  return normalizePostSubcategory(post, categorySlug, group);
}

function getPostTaxonomyNote(post) {
  const categorySlug = post?.category || currentBlogCategory;
  const group = getPostGroup(post);
  const subcategory = getPostSubcategory(post);
  return post?.note || getTaxonomyNote(categorySlug, group, subcategory);
}

function isOnboardingPost(post) {
  return post?.category === "hr-guide" && getPostGroup(post) === "온보딩";
}

function getAllowedOnboardingEmails() {
  return parseEmailList(getSiteSettings().onboardingAccess?.emails);
}

function readOnboardingAccessEmail() {
  try {
    return (sessionStorage.getItem(ONBOARDING_ACCESS_SESSION_KEY) || "").trim().toLowerCase();
  } catch (error) {
    return "";
  }
}

function writeOnboardingAccessEmail(email) {
  try {
    sessionStorage.setItem(ONBOARDING_ACCESS_SESSION_KEY, email);
  } catch (error) {
    // Session storage can be unavailable in some embedded browser modes.
  }
}

function hasOnboardingAccess(post) {
  if (!isOnboardingPost(post)) {
    return true;
  }
  const allowedEmails = getAllowedOnboardingEmails();
  return allowedEmails.includes(readOnboardingAccessEmail());
}

function renderOnboardingAccessGate(post) {
  const allowedEmails = getAllowedOnboardingEmails();
  const helperText = allowedEmails.length
    ? "관리자가 등록한 이메일로만 이 온보딩 안내를 열람할 수 있습니다."
    : "아직 허용 이메일이 등록되지 않았습니다. 사이트 설정에서 신규입사자 이메일을 먼저 등록해 주세요.";
  return `
    <section class="onboarding-access-card" aria-label="온보딩 이메일 확인">
      <p class="eyebrow">Private Onboarding</p>
      <h2>이메일 확인 후 열람할 수 있습니다</h2>
      <p>${escapeHtml(helperText)}</p>
      <form class="onboarding-access-form">
        <label>
          <span>이메일</span>
          <input type="email" autocomplete="email" placeholder="name@company.com" required />
        </label>
        <button class="editor-button primary" type="submit">열람하기</button>
      </form>
      <p class="onboarding-access-error" role="alert" hidden>등록된 이메일이 아닙니다. 관리자에게 열람 이메일 등록을 요청해 주세요.</p>
    </section>
  `;
}

function bindOnboardingAccessGate(post) {
  const form = postDetail?.querySelector(".onboarding-access-form");
  if (!form) {
    return;
  }
  const input = form.querySelector("input");
  const error = postDetail.querySelector(".onboarding-access-error");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = (input?.value || "").trim().toLowerCase();
    const allowedEmails = getAllowedOnboardingEmails();
    if (!allowedEmails.includes(email)) {
      if (error) {
        error.hidden = false;
      }
      input?.select();
      return;
    }
    writeOnboardingAccessEmail(email);
    renderPostDetail(post);
  });
  input?.addEventListener("input", () => {
    if (error) {
      error.hidden = true;
    }
  });
}

function isSafeImageUrl(value) {
  return !value || /^(https?:|data:image\/|\.\/|\/)/i.test(value);
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

function normalizeHttpUrl(value) {
  const rawValue = String(value || "").trim();
  if (!rawValue) {
    return "";
  }

  const withProtocol = /^[a-z][a-z0-9+.-]*:/i.test(rawValue) ? rawValue : `https://${rawValue}`;
  try {
    const url = new URL(withProtocol);
    if (!/^https?:$/i.test(url.protocol)) {
      return "";
    }
    return url.href;
  } catch (error) {
    return "";
  }
}

function getUrlPreviewMeta(url) {
  try {
    const parsedUrl = new URL(url);
    const host = parsedUrl.hostname.replace(/^www\./i, "");
    const pathParts = parsedUrl.pathname.split("/").filter(Boolean).slice(0, 2);
    return {
      host,
      path: pathParts.length ? pathParts.join(" / ") : "URL 미리보기",
    };
  } catch (error) {
    return {
      host: "link",
      path: "URL 미리보기",
    };
  }
}

function getDefaultLinkName(url) {
  const meta = getUrlPreviewMeta(url);
  return meta.host || "첨부 링크";
}

function buildLinkPreviewHtml(url, name) {
  const meta = getUrlPreviewMeta(url);
  const label = String(name || "").trim() || getDefaultLinkName(url);
  const iconText = (label || meta.host || "L").trim().slice(0, 1).toUpperCase();
  return [
    `<a class="article-link-preview" href="${escapeAttribute(url)}">`,
    `<span class="article-link-preview-icon" aria-hidden="true">${escapeHtml(iconText)}</span>`,
    '<span class="article-link-preview-body">',
    `<strong class="article-link-preview-title">${escapeHtml(label)}</strong>`,
    `<small class="article-link-preview-meta">${escapeHtml(meta.host)} · ${escapeHtml(meta.path)}</small>`,
    "</span>",
    '<span class="article-link-preview-action">열기</span>',
    "</a><p><br></p>",
  ].join("");
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("이미지를 읽을 수 없습니다."));
    reader.readAsDataURL(file);
  });
}

function loadImage(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("이미지를 불러올 수 없습니다."));
    image.src = dataUrl;
  });
}

async function optimizeImageFile(file, options = {}) {
  if (!file || !file.type.startsWith("image/")) {
    throw new Error("이미지 파일만 선택할 수 있습니다.");
  }

  const source = await readFileAsDataUrl(file);
  if (file.type === "image/svg+xml") {
    return source;
  }

  const image = await loadImage(source);
  const maxWidth = options.maxWidth || 1280;
  const quality = options.quality || 0.78;
  const scale = Math.min(1, maxWidth / image.naturalWidth);
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.drawImage(image, 0, 0, width, height);
  const dataUrl = canvas.toDataURL("image/jpeg", quality);

  if (dataUrl.length > 900000) {
    showToast("이미지가 큽니다. Apps Script 저장 용량을 위해 더 작은 이미지 사용을 권장합니다.");
  }

  return dataUrl;
}

function getDefaultCoverImage() {
  return document.querySelector(".hero-image")?.currentSrc || document.querySelector(".hero-image")?.src || "";
}

function getPostImage(post) {
  if (post?.id === "hr-guide-year-calendar") {
    return getHrCalendarImageDataUrl();
  }
  return isSafeImageUrl(post?.image) && post.image ? post.image : getDefaultCoverImage();
}

function getPostThumbnailImage(post) {
  if (post?.id === "hr-guide-year-calendar") {
    return getHrCalendarImageDataUrl();
  }
  return isSafeImageUrl(post?.image) && post.image ? post.image : "";
}

function getPostTags(post) {
  const category = getCategoryBySlug(post?.category || currentBlogCategory);
  const group = getPostGroup(post);
  const subcategory = getPostSubcategory(post);
  return [
    ...new Set(
      [
        ...normalizeTags(post?.tags, []),
        group,
        subcategory,
        category.label.replace(/\s+/g, ""),
        "HR",
      ].filter(Boolean),
    ),
  ].slice(0, 8);
}

function getPostTakeaways(post) {
  const summary = post?.summary ? [post.summary] : [];
  return normalizeTakeaways(post?.takeaways, summary);
}

function getRelatedPosts(post) {
  const relatedIds = normalizeRelatedPostIds(post?.relatedPostIds, post?.id);
  if (!relatedIds.length) {
    return [];
  }

  const postsById = new Map(blogState.posts.map((item) => [String(item.id), item]));
  return relatedIds.map((id) => postsById.get(id)).filter(Boolean);
}

function getPostAuthor(post) {
  return String(post?.author || "People Team");
}

function formatPostDate(value) {
  const date = value ? new Date(value) : new Date();
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

function estimateReadingMinutes(content) {
  const text = stripHtml(content);
  const minutes = Math.max(1, Math.ceil(text.replace(/\s+/g, "").length / 650));
  return `${minutes}분 읽기`;
}

function prepareArticleBody(content) {
  const template = document.createElement("template");
  template.innerHTML = sanitizeHtml(content || "");
  const sourceNoteHtml = [...template.content.querySelectorAll(".article-source-note")]
    .map((note) => {
      const html = note.outerHTML;
      note.remove();
      return html;
    })
    .join("");
  const hasManualToc = Boolean(template.content.querySelector(".article-toc-block"));
  const headings = [];
  template.content.querySelectorAll("h2, h3").forEach((heading, index) => {
    const title = heading.textContent.trim();
    if (!title) {
      return;
    }
    const id = `section-${index + 1}`;
    heading.id = id;
    headings.push({ id, title, level: heading.tagName.toLowerCase() });
  });
  return { html: template.innerHTML, headings, hasManualToc, sourceNoteHtml };
}

function renderArticleAutoToc(articleBody, post) {
  const headings = articleBody?.headings || [];
  if (articleBody?.hasManualToc || headings.length < 2) {
    return "";
  }

  const links = headings
    .map((heading, index) => {
      const isSub = heading.level === "h3";
      const number = String(index + 1).padStart(2, "0");
      const levelLabel = isSub ? "Detail" : "Section";
      return `<a class="article-smart-toc-link${isSub ? " is-sub" : ""}" href="#${escapeAttribute(heading.id)}" data-article-toc-link="${escapeAttribute(heading.id)}">
        <span class="article-smart-toc-number">${number}</span>
        <strong>${escapeHtml(heading.title)}</strong>
        <em>${levelLabel}</em>
      </a>`;
    })
    .join("");

  return `
    <nav class="article-smart-toc" aria-label="글 목차" data-article-side-toc>
      <div class="article-smart-toc-head">
        <span>CONTENTS</span>
      </div>
      <div class="article-smart-toc-links">${links}</div>
    </nav>
  `;
}

const safeArticleClasses = new Set([
  "article-card",
  "article-card-grid",
  "article-card-meta",
  "article-member-card-grid",
  "article-checklist",
  "article-cta",
  "article-divider",
  "article-divider-dots",
  "article-divider-gradient",
  "article-divider-soft",
  "article-divider-tape",
  "article-divider-wave",
  "article-fact",
  "article-figure",
  "article-heading-accent",
  "article-heading-box",
  "article-heading-brush",
  "article-heading-marker",
  "article-heading-side",
  "article-highlight",
  "article-inline-note",
  "article-lead",
  "article-link-preview",
  "article-link-preview-action",
  "article-link-preview-body",
  "article-link-preview-icon",
  "article-link-preview-meta",
  "article-link-preview-title",
  "article-metric",
  "article-metric-grid",
  "article-org-branches",
  "article-org-chart",
  "article-org-chart-compact",
  "article-org-members",
  "article-org-name",
  "article-org-node",
  "article-org-node-solo",
  "article-org-role",
  "article-org-root",
  "article-org-chart-research",
  "article-pill",
  "article-pill-row",
  "article-quote",
  "article-source-note",
  "article-summary-box",
  "article-table",
  "article-table-accent",
  "article-table-card",
  "article-table-compact",
  "article-table-grid",
  "article-table-soft",
  "article-table-zebra",
  "article-toc-block",
  "article-toc-eyebrow",
  "article-toc-head",
  "article-toc-note",
  "article-toc-title",
  "article-work-body",
  "article-work-card",
  "article-work-card-head",
  "article-work-collab",
  "article-work-collab-label",
  "article-work-index",
  "article-work-map",
  "article-work-map-research",
  "article-work-tags",
  "article-work-title",
]);

function sanitizeStyle(value) {
  const allowed = new Set([
    "background-color",
    "border-radius",
    "color",
    "display",
    "font-family",
    "font-size",
    "height",
    "margin",
    "margin-left",
    "margin-right",
    "max-width",
    "padding",
    "text-align",
    "width",
  ]);
  return value
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const [rawName, ...rawValue] = part.split(":");
      const name = rawName.trim().toLowerCase();
      const styleValue = rawValue.join(":").trim();
      if (!allowed.has(name) || /url|expression|javascript/i.test(styleValue)) {
        return "";
      }
      if (["width", "max-width", "height", "margin", "margin-left", "margin-right", "border-radius", "padding"].includes(name)) {
        if (!/^(auto|\d+(\.\d+)?(px|%|rem|em))$/i.test(styleValue)) {
          return "";
        }
      }
      if (name === "display" && !/^(block|inline|inline-block)$/i.test(styleValue)) {
        return "";
      }
      return `${name}: ${styleValue}`;
    })
    .filter(Boolean)
    .join("; ");
}

function sanitizeHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html || "";
  template.content.querySelectorAll("script, style, iframe, object, embed, link, meta").forEach((node) => node.remove());

  const allowedTags = new Set([
    "a",
    "b",
    "blockquote",
    "br",
    "del",
    "div",
    "em",
    "figcaption",
    "figure",
    "font",
    "h2",
    "h3",
    "h4",
    "hr",
    "i",
    "img",
    "li",
    "ol",
    "p",
    "s",
    "small",
    "span",
    "strong",
    "strike",
    "table",
    "tbody",
    "td",
    "th",
    "thead",
    "tr",
    "u",
    "ul",
  ]);

  template.content.querySelectorAll("*").forEach((node) => {
    const tag = node.tagName.toLowerCase();
    if (!allowedTags.has(tag)) {
      node.replaceWith(...node.childNodes);
      return;
    }

    [...node.attributes].forEach((attribute) => {
      const name = attribute.name.toLowerCase();
      const value = attribute.value;
      if (name.startsWith("on")) {
        node.removeAttribute(attribute.name);
        return;
      }
      if (name === "class") {
        const classes = value
          .split(/\s+/)
          .map((className) => className.trim())
          .filter((className) => safeArticleClasses.has(className));
        if (classes.length) {
          node.setAttribute("class", classes.join(" "));
        } else {
          node.removeAttribute(attribute.name);
        }
        return;
      }
      if (tag === "a" && name === "href") {
        if (!/^(https?:|mailto:|#|\/)/i.test(value)) {
          node.removeAttribute(attribute.name);
        }
        return;
      }
      if (tag === "a" && ["target", "rel"].includes(name)) {
        node.removeAttribute(attribute.name);
        return;
      }
      if (tag === "img" && name === "src") {
        if (/^(https?:|data:image\/|\.\/|\/)/i.test(value)) {
          return;
        }
        node.removeAttribute(attribute.name);
        return;
      }
      if (tag === "img" && ["alt", "width", "height"].includes(name)) {
        return;
      }
      if (name === "style") {
        const safeStyle = sanitizeStyle(value);
        if (safeStyle) {
          node.setAttribute("style", safeStyle);
        } else {
          node.removeAttribute(attribute.name);
        }
        return;
      }
      if (tag === "font" && ["color", "face", "size"].includes(name)) {
        return;
      }
      if (["colspan", "rowspan"].includes(name) && /^(td|th)$/.test(tag)) {
        return;
      }
      node.removeAttribute(attribute.name);
    });
    if (tag === "a" && node.hasAttribute("href")) {
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noreferrer");
    }
  });

  return template.innerHTML;
}

function normalizeBlogState(state) {
  const safeState = state && Array.isArray(state.posts) ? state : defaultBlogState;
  const sourceVersion = Number(safeState.version || 0);
  const shouldBackfillDefaults = sourceVersion < 15;
  const refreshedDefaultPostIds = new Set([
    ...(sourceVersion < 8 ? ["culture-team-intro"] : []),
    ...(sourceVersion < 10 ? ["culture-production-strategy-group"] : []),
    ...(sourceVersion < 11 ? ["culture-sales-marketing-part"] : []),
    ...(sourceVersion < 12 ? ["culture-management-support-part"] : []),
    ...(sourceVersion < 13 ? ["hr-guide-year-calendar"] : []),
    ...(sourceVersion < 14 ? ["culture-org-chart", "help-desk-faq", "help-desk-forms"] : []),
    ...(sourceVersion < 19 ? ["culture-team-intro"] : []),
    ...(sourceVersion < 20 ? ["hr-guide-year-calendar"] : []),
    ...(sourceVersion < 21
      ? ["culture-team-intro", "culture-production-strategy-group", "culture-sales-marketing-part", "culture-management-support-part"]
      : []),
    ...(sourceVersion < 22
      ? ["culture-team-intro", "culture-production-strategy-group", "culture-sales-marketing-part", "culture-management-support-part"]
      : []),
    ...(sourceVersion < 23
      ? ["culture-team-intro", "culture-production-strategy-group", "culture-sales-marketing-part", "culture-management-support-part"]
      : []),
    ...(sourceVersion < 24
      ? ["culture-team-intro", "culture-production-strategy-group", "culture-sales-marketing-part", "culture-management-support-part"]
      : []),
    ...(sourceVersion < 25
      ? ["culture-production-strategy-group", "culture-sales-marketing-part", "culture-management-support-part"]
      : []),
    ...(sourceVersion < 26
      ? ["culture-team-intro", "culture-production-strategy-group", "culture-sales-marketing-part", "culture-management-support-part"]
      : []),
    ...(sourceVersion < 27 ? ["culture-team-intro"] : []),
    ...(sourceVersion < 28 ? ["culture-team-intro"] : []),
    ...(sourceVersion < 29 ? ["culture-team-intro"] : []),
    ...(sourceVersion < 30 ? ["culture-team-intro"] : []),
    ...(sourceVersion < 31 ? ["culture-sales-marketing-part"] : []),
    ...(sourceVersion < 32 ? ["culture-team-intro"] : []),
    ...(sourceVersion < 33 ? ["culture-team-intro"] : []),
    ...(sourceVersion < 34 ? ["culture-sales-marketing-part", "culture-management-support-part"] : []),
  ]);
  const existingPostIds = new Set(safeState.posts.map((post) => String(post.id || "")));
  const sourcePosts = shouldBackfillDefaults
    ? [...safeState.posts, ...defaultBlogState.posts.filter((post) => !existingPostIds.has(String(post.id)))]
    : safeState.posts;
  const normalizedPosts = sourcePosts.map((post) => {
    const defaultPost = defaultBlogState.posts.find((item) => item.id === post.id);
    let sourcePost = refreshedDefaultPostIds.has(String(post.id || "")) && defaultPost ? { ...post, ...defaultPost } : post;
    if (sourceVersion < 15 && String(sourcePost.id || "") === "culture-org-chart") {
      sourcePost = {
        ...sourcePost,
        category: "hr-guide",
        group: "온보딩",
        subcategory: sourcePost.subcategory === "배치도" || sourcePost.subcategory === "비상연락망" ? sourcePost.subcategory : "조직도",
        note: "",
      };
    }
    const category = blogCategories.some((item) => item.slug === sourcePost.category) ? sourcePost.category : "culture";
    const group = normalizePostGroup(sourcePost, category);
    const subcategory = normalizePostSubcategory(sourcePost, category, group);
    return {
      id: String(sourcePost.id || (globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `post-${Date.now()}`)),
      category,
      group,
      subcategory,
      note: String(sourcePost.note || getTaxonomyNote(category, group, subcategory) || ""),
      title: String(sourcePost.title || "제목 없음"),
      summary: String(sourcePost.summary || ""),
      author: String(sourcePost.author || "People Team"),
      tags: normalizeTags(sourcePost.tags, []),
      takeaways: normalizeTakeaways(sourcePost.takeaways, sourcePost.summary ? [String(sourcePost.summary)] : []),
      relatedPostIds: normalizeRelatedPostIds(sourcePost.relatedPostIds, String(sourcePost.id || "")),
      image: isSafeImageUrl(sourcePost.image) ? String(sourcePost.image || "") : "",
      order: normalizePostOrder(sourcePost.order),
      updatedAt: sourcePost.updatedAt || new Date().toISOString(),
      content: sanitizeHtml(sourcePost.content || "<p></p>"),
    };
  });
  const hasCanonicalYearCalendar = normalizedPosts.some((post) => post.id === "hr-guide-year-calendar");
  const seenPostIds = new Set();
  const posts = normalizePostOrders(normalizedPosts.filter((post) => {
    if (seenPostIds.has(post.id)) {
      return false;
    }
    seenPostIds.add(post.id);
    if (
      hasCanonicalYearCalendar &&
      post.id !== "hr-guide-year-calendar" &&
      post.category === "hr-guide" &&
      /HR Year Calendar/i.test(post.title)
    ) {
      return false;
    }
    return true;
  }));

  const siteSettings = normalizeSiteSettings(safeState.siteSettings || defaultSiteSettings);
  if (sourceVersion < 15) {
    siteSettings.categories.culture.description = defaultSiteSettings.categories.culture.description;
    siteSettings.categories["hr-guide"].description = defaultSiteSettings.categories["hr-guide"].description;
    const movedOrgChartWasFeatured = siteSettings.featuredPostIds.culture.includes("culture-org-chart");
    siteSettings.featuredPostIds.culture = siteSettings.featuredPostIds.culture.filter((id) => id !== "culture-org-chart");
    if (movedOrgChartWasFeatured && !siteSettings.featuredPostIds["hr-guide"].includes("culture-org-chart")) {
      siteSettings.featuredPostIds["hr-guide"] = normalizePostIdList([
        "culture-org-chart",
        ...siteSettings.featuredPostIds["hr-guide"],
      ]);
    }
  }
  if (
    sourceVersion < 16 &&
    (!siteSettings.hero.searchPlaceholder || siteSettings.hero.searchPlaceholder === "예: 연차, 신규입사자, 서식, Wifi")
  ) {
    siteSettings.hero.searchPlaceholder = defaultSiteSettings.hero.searchPlaceholder;
  }

  return {
    version: 34,
    updatedAt: new Date().toISOString(),
    siteSettings,
    posts,
  };
}

function readLocalBlogState() {
  try {
    return JSON.parse(localStorage.getItem(BLOG_STATE_STORAGE_KEY) || "null");
  } catch (error) {
    return null;
  }
}

function writeLocalBlogState(state) {
  try {
    localStorage.setItem(BLOG_STATE_STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    // Local storage can be unavailable in private or embedded browser modes.
  }
}

function getBlogStateTime(state) {
  const time = Date.parse(state?.updatedAt || "");
  return Number.isFinite(time) ? time : 0;
}

function selectStaticBlogState(localState, fileState) {
  if (!localState) {
    return fileState || null;
  }
  if (!fileState) {
    return localState;
  }
  return getBlogStateTime(fileState) > getBlogStateTime(localState) ? fileState : localState;
}

async function loadStaticBlogData() {
  try {
    const response = await fetch(STATIC_BLOG_DATA_URL, { cache: "no-store" });
    if (!response.ok) {
      return null;
    }
    return await response.json();
  } catch (error) {
    return null;
  }
}

async function loadBlogState() {
  if (hasAppsScriptBridge()) {
    return new Promise((resolve) => {
      google.script.run
        .withSuccessHandler((state) => resolve(state || null))
        .withFailureHandler(() => resolve(null))
        .getBlogState();
    });
  }

  const [localState, fileState] = await Promise.all([Promise.resolve(readLocalBlogState()), loadStaticBlogData()]);
  return selectStaticBlogState(localState, fileState);
}

function persistBlogState() {
  const state = normalizeBlogState(blogState);
  blogState = state;
  setBlogStatus("저장 중");
  writeLocalBlogState(state);

  if (hasAppsScriptBridge()) {
    return new Promise((resolve, reject) => {
      google.script.run
        .withSuccessHandler((result) => {
          setBlogStatus(result && result.savedAt ? "저장됨" : "저장됨");
          if (result?.notificationSent) {
            showToast(`새 글 알림을 ${result.notificationCount || 0}명에게 보냈습니다.`);
          } else if (result?.notificationError) {
            showToast("저장은 완료됐지만 알림 발송은 실패했습니다.");
          }
          resolve(result);
        })
        .withFailureHandler((error) => {
          setBlogStatus("저장 실패");
          reject(error);
        })
        .saveBlogState(state, adminSession?.token || "");
    });
  }

  if (adminSession?.remote) {
    setBlogStatus("GitHub 저장 중");
    return saveBlogStateToRemote(state)
      .then((result) => {
        if (!result) {
          setBlogStatus("브라우저에 저장됨");
          return { ok: true, localOnly: true };
        }
        if (result.state) {
          applySavedRemoteState(result.state);
        }
        setBlogStatus("GitHub에 저장됨");
        showToast(
          result.migratedImageCount
            ? `GitHub에 저장하고 이미지 ${result.migratedImageCount}개를 파일로 정리했습니다.`
            : "GitHub에 저장했습니다. Vercel 반영까지 잠시 걸릴 수 있습니다."
        );
        return result;
      })
      .catch((error) => {
        setBlogStatus("브라우저 저장됨 · GitHub 저장 실패");
        throw error;
      });
  }

  setBlogStatus("브라우저에 저장됨");
  return Promise.resolve({ ok: true });
}

function applySavedRemoteState(state) {
  if (!state) {
    return;
  }
  blogState = normalizeBlogState(state);
  writeLocalBlogState(blogState);
  applySiteSettings();
  renderNavDropdowns();
  renderBlogCategories();
  renderCategoryFeatures();
  renderPostList();
  if (currentPostId) {
    renderPostDetail(getCurrentPost());
  }
}

function downloadBlogDataFile(state) {
  const json = `${JSON.stringify(state, null, 2)}\n`;
  const blob = new Blob([json], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "blog-data.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function exportBlogDataFile() {
  if (!requestEditorAccess(exportBlogDataFile)) {
    return;
  }
  if (siteSettingsPanel && !siteSettingsPanel.hidden) {
    blogState.siteSettings = collectSiteSettingsFromPanel();
  }
  blogState = normalizeBlogState(blogState);
  downloadBlogDataFile(blogState);
  showToast("blog-data.json 파일을 내보냈습니다.");
}

function setTextIfPresent(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
}

function renderFaq() {
  const settings = getSiteSettings();
  const faqCopy = document.querySelector(".faq-copy");
  const faqList = document.querySelector(".faq-list");

  if (faqCopy) {
    faqCopy.innerHTML = `
      <p class="eyebrow">${escapeHtml(settings.faq.eyebrow)}</p>
      <h2 id="faq-title">${escapeHtml(settings.faq.title)}</h2>
      <p>${escapeHtml(settings.faq.description)}</p>
    `;
  }

  if (faqList) {
    const items = settings.faq.items.filter((item) => item.question || item.answer);
    faqList.innerHTML = items
      .map(
        (item, index) => `
          <details${index === 0 ? " open" : ""}>
            <summary>${escapeHtml(item.question || "질문")}</summary>
            ${item.answer ? `<p>${escapeHtml(item.answer)}</p>` : ""}
          </details>
        `,
      )
      .join("");
  }
}

function renderCurrentBlogHeading() {
  if (!blogTitle || !blogDescription) {
    return;
  }
  const category = getCategoryBySlug(currentBlogCategory);
  const settings = getSiteSettings();
  setTextIfPresent(".blog-head .eyebrow", settings.sections.blogEyebrow);
  blogTitle.textContent = category.label;
  blogDescription.textContent = category.description;
}

function renderSearchBlogHeading() {
  if (!blogTitle || !blogDescription) {
    return;
  }
  const settings = getSiteSettings();
  const query = activeBlogSearchQuery.trim();
  const resultCount = getSearchResultPosts(query).length;
  setTextIfPresent(".blog-head .eyebrow", settings.sections.blogEyebrow);
  blogTitle.textContent = "검색 결과";
  if (!query) {
    blogDescription.textContent = "검색어가 포함된 전체 글을 목록으로 확인합니다.";
    return;
  }
  blogDescription.textContent = resultCount
    ? `"${query}" 검색어가 포함된 전체 글 ${resultCount}개를 모았습니다.`
    : `"${query}" 검색 결과가 없습니다.`;
}

function applySiteSettings() {
  const settings = getSiteSettings();
  const titleSpans = document.querySelectorAll(".hero-title span");
  const globalSearch = document.querySelector("#global-search");
  const heroCopy = document.querySelector(".hero-copy");

  setTextIfPresent(".hero .eyebrow", settings.hero.eyebrow);
  if (titleSpans[0]) {
    titleSpans[0].textContent = settings.hero.titleLine1;
    titleSpans[0].dataset.text = settings.hero.titleLine1;
  }
  if (titleSpans[1]) {
    titleSpans[1].textContent = settings.hero.titleLine2;
    titleSpans[1].dataset.text = settings.hero.titleLine2;
  }
  if (heroCopy) {
    heroCopy.innerHTML = `${escapeHtml(settings.hero.copyLine1)}<br /><span class="hero-copy-nowrap">${escapeHtml(settings.hero.copyLine2)}</span>`;
  }
  if (globalSearch) {
    globalSearch.placeholder = settings.hero.searchPlaceholder;
  }
  hydrateHrCalendarImages(document);
  renderSearchPopularPanel();

  setTextIfPresent("#quick .section-head .eyebrow", settings.sections.mainCategoryEyebrow);
  setTextIfPresent("#quick-title", settings.sections.mainCategoryTitle);
  setTextIfPresent(".blog-head .eyebrow", settings.sections.blogEyebrow);

  blogCategories.forEach((baseCategory, index) => {
    const category = getCategoryBySlug(baseCategory.slug);
    const navLink = document.querySelector(`.nav-link[data-blog-link="${baseCategory.slug}"]`);
    const heroLink = document.querySelector(`.hero-category-strip a[href="#blog/${baseCategory.slug}"]`);
    if (navLink) {
      navLink.textContent = category.label;
    }
    if (heroLink) {
      heroLink.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span>${escapeHtml(category.label)}`;
    }
  });

  setTextIfPresent(".footer strong", settings.footer.title);
  setTextIfPresent(".footer span", settings.footer.text);
  setTextIfPresent(".footer a", settings.footer.topLabel);

  if (siteSettingsButton) {
    siteSettingsButton.textContent = isEditorUnlocked ? settings.buttons.siteSettings : "관리자 로그인";
  }
  if (newPostButton) {
    newPostButton.textContent = settings.buttons.writePost;
  }
  if (closeDetailButton) {
    closeDetailButton.textContent = settings.buttons.listBack;
  }
  if (editPostButton) {
    editPostButton.textContent = settings.buttons.editPost;
  }
  if (savePostButton) {
    savePostButton.textContent = settings.buttons.savePost;
  }
  if (deletePostButton) {
    deletePostButton.textContent = settings.buttons.deletePost;
  }
  if (deleteDetailPostButton) {
    deleteDetailPostButton.textContent = settings.buttons.deletePost;
  }
  if (cancelEditButton) {
    cancelEditButton.textContent = settings.buttons.cancel;
  }
  if (previewPostButton) {
    previewPostButton.textContent = settings.buttons.preview;
  }
  if (coverUploadButton) {
    coverUploadButton.textContent = settings.buttons.coverUpload;
  }
  if (clearCoverButton) {
    clearCoverButton.textContent = settings.buttons.clearCover;
  }
  const unlockSubmitButton = document.querySelector(".editor-unlock-form .editor-button.primary");
  if (unlockSubmitButton) {
    unlockSubmitButton.textContent = settings.buttons.unlockConfirm;
  }

  const templateLabels = {
    premium: settings.buttons.premiumTemplate,
    guide: settings.buttons.guideTemplate,
    faq: settings.buttons.faqTemplate,
  };
  document.querySelectorAll("[data-template]").forEach((button) => {
    const label = templateLabels[button.dataset.template];
    if (label) {
      button.textContent = label;
    }
  });

  renderFaq();
  renderCurrentBlogHeading();
  syncAdminControlsVisibility();
  if (postImageInput) {
    updateCoverPreview(postImageInput.value);
  }
}

function renderSiteSettingField(settings, path, label, options = {}) {
  const rawValue = getSiteSettingPath(settings, path);
  const value = String(rawValue ?? "");
  const className = options.wide ? "site-setting-field is-wide" : "site-setting-field";
  if (options.type === "checkbox") {
    return `
      <label class="${className} is-checkbox">
        <input type="checkbox" data-setting="${escapeAttribute(path)}" ${normalizeSettingBoolean(rawValue) ? "checked" : ""} />
        <span>${escapeHtml(label)}</span>
      </label>
    `;
  }
  if (options.type === "textarea") {
    return `
      <label class="${className}">
        <span>${escapeHtml(label)}</span>
        <textarea rows="${options.rows || 3}" data-setting="${escapeAttribute(path)}">${escapeHtml(value)}</textarea>
      </label>
    `;
  }
  return `
    <label class="${className}">
      <span>${escapeHtml(label)}</span>
      <input type="text" data-setting="${escapeAttribute(path)}" value="${escapeAttribute(value)}" />
    </label>
  `;
}

function renderFeaturedPostSettings(settings) {
  return blogCategories
    .map((category) => {
      const posts = getPostsByCategory(category.slug);
      const selectedIds = new Set(settings.featuredPostIds?.[category.slug] || []);
      const categoryLabel = settings.categories?.[category.slug]?.label || category.label;
      const options = posts.length
        ? posts
            .map(
              (post) => `<label class="featured-post-option">
                <input
                  type="checkbox"
                  data-featured-post
                  data-featured-category="${escapeAttribute(category.slug)}"
                  value="${escapeAttribute(post.id)}"
                  ${selectedIds.has(post.id) ? "checked" : ""}
                />
                <span>
                  <strong>${escapeHtml(post.title)}</strong>
                  <small>${escapeHtml(getPostGroup(post))} · ${formatPostDate(post.updatedAt)}</small>
                </span>
              </label>`,
            )
            .join("")
        : '<p class="related-post-empty">아직 선택할 글이 없습니다.</p>';

      return `
        <article class="featured-setting-card">
          <div class="featured-setting-head">
            <strong>${escapeHtml(categoryLabel)}</strong>
            <small>선택한 글만 메인 Featured Articles에 노출됩니다. 최대 3개까지 반영됩니다.</small>
          </div>
          <div class="featured-post-options">${options}</div>
        </article>
      `;
    })
    .join("");
}

function getPopularPosts(settings = getSiteSettings()) {
  const posts = [...(blogState?.posts || [])].sort(comparePostsByOrder);
  const selectedIds = settings.popular?.postIds || [];
  const selectedPosts = selectedIds.map((id) => posts.find((post) => post.id === id)).filter(Boolean);
  if (selectedPosts.length >= 3) {
    return selectedPosts.slice(0, 3);
  }
  const selectedPostIds = new Set(selectedPosts.map((post) => post.id));
  return [
    ...selectedPosts,
    ...posts.filter((post) => !selectedPostIds.has(post.id)),
  ].slice(0, 3);
}

function renderPopularPostSettings(settings) {
  const posts = [...(blogState?.posts || [])].sort(comparePostsByOrder);
  const selectedIds = new Set(settings.popular?.postIds || []);
  const options = posts.length
    ? posts
        .map(
          (post) => `<label class="featured-post-option">
            <input
              type="checkbox"
              data-popular-post
              value="${escapeAttribute(post.id)}"
              ${selectedIds.has(post.id) ? "checked" : ""}
            />
            <span>
              <strong>${renderPostPreviewTitle(post.title)}</strong>
              <small>${escapeHtml(getCategoryBySlug(post.category).label)} · ${escapeHtml(getPostGroup(post))} · ${formatPostDate(post.updatedAt)}</small>
            </span>
          </label>`,
        )
        .join("")
    : '<p class="related-post-empty">아직 선택할 글이 없습니다.</p>';

  return `
    <article class="featured-setting-card is-wide">
      <div class="featured-setting-head">
        <strong>TOP3 인기글</strong>
        <small>검색창 아래에 노출할 인기글을 최대 3개까지 선택합니다.</small>
      </div>
      <div class="featured-post-options">${options}</div>
    </article>
  `;
}

function renderHrCalendarSettings(settings) {
  const calendar = normalizeHrCalendarSettings(settings.hrCalendar);
  return `
    <div class="site-settings-grid">
      ${renderSiteSettingField(settings, "hrCalendar.title", "캘린더 제목")}
      ${renderSiteSettingField(settings, "hrCalendar.subtitle", "캘린더 설명", { wide: true })}
      ${renderSiteSettingField(settings, "hrCalendar.note", "하단 안내 문구", { wide: true })}
    </div>
    <div class="hr-calendar-setting-grid">
      ${calendar.months
        .map(
          (month, index) => `
            <label class="site-setting-field hr-calendar-month-field">
              <span>${escapeHtml(month.label)} 일정</span>
              <textarea rows="4" data-setting="hrCalendar.months.${index}.items">${escapeHtml(month.items.join("\n"))}</textarea>
              <small>한 줄에 하나씩, 최대 4개까지 표시됩니다.</small>
            </label>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderSiteSettingsPanel() {
  if (!siteSettingsPanel) {
    return;
  }
  const settings = getSiteSettings();
  const buttonFields = [
    ["buttons.siteSettings", "사이트 설정 버튼"],
    ["buttons.writePost", "글 작성 버튼"],
    ["buttons.listBack", "목록 버튼"],
    ["buttons.editPost", "수정 버튼"],
    ["buttons.savePost", "저장 버튼"],
    ["buttons.deletePost", "삭제 버튼"],
    ["buttons.cancel", "취소 버튼"],
    ["buttons.preview", "미리보기 버튼"],
    ["buttons.premiumTemplate", "프리미엄 템플릿"],
    ["buttons.guideTemplate", "가이드 템플릿"],
    ["buttons.faqTemplate", "FAQ 템플릿"],
    ["buttons.coverUpload", "이미지 선택 버튼"],
    ["buttons.clearCover", "이미지 삭제 버튼"],
    ["buttons.coverNone", "이미지 없음 상태"],
    ["buttons.coverSelected", "이미지 선택 상태"],
    ["buttons.settingsReset", "설정 초기화 버튼"],
    ["buttons.settingsCancel", "설정 닫기 버튼"],
    ["buttons.settingsSave", "설정 저장 버튼"],
    ["buttons.unlockConfirm", "잠금 해제 확인 버튼"],
  ];

  siteSettingsPanel.innerHTML = `
    <div class="site-settings-screen">
      <header class="site-settings-topbar">
        <div>
          <p class="eyebrow">Site Settings</p>
          <h3>화면 설정 관리</h3>
          <p>메인 화면, 메뉴, FAQ, 푸터, 주요 버튼명을 이곳에서 수정합니다.</p>
        </div>
        <div class="site-settings-top-actions">
          <button class="editor-button" type="button" data-settings-cancel>${escapeHtml(settings.buttons.settingsCancel)}</button>
          <button class="editor-button" type="button" data-export-blog-data>JSON 내보내기</button>
          <button class="editor-button primary" type="button" data-settings-save>${escapeHtml(settings.buttons.settingsSave)}</button>
        </div>
      </header>

      <div class="site-settings-shell">
        <div class="site-settings-form">
          <section class="site-settings-section">
            <div class="site-settings-section-head">
              <h4>메인 화면</h4>
            </div>
            <div class="site-settings-grid">
              ${renderSiteSettingField(settings, "hero.eyebrow", "상단 라벨")}
              ${renderSiteSettingField(settings, "hero.titleLine1", "제목 1행")}
              ${renderSiteSettingField(settings, "hero.titleLine2", "제목 2행")}
              ${renderSiteSettingField(settings, "hero.searchPlaceholder", "검색창 예시")}
              ${renderSiteSettingField(settings, "hero.copyLine1", "설명 1행", { type: "textarea", rows: 2, wide: true })}
              ${renderSiteSettingField(settings, "hero.copyLine2", "설명 2행", { type: "textarea", rows: 2, wide: true })}
              ${renderSiteSettingField(settings, "sections.mainCategoryEyebrow", "주요 메뉴 라벨")}
              ${renderSiteSettingField(settings, "sections.mainCategoryTitle", "주요 메뉴 제목")}
              ${renderSiteSettingField(settings, "sections.featuredLabel", "추천 글 라벨")}
              ${renderSiteSettingField(settings, "sections.blogEyebrow", "세부 페이지 라벨")}
              ${renderSiteSettingField(settings, "sections.postListTitle", "글 목록 제목")}
            </div>
          </section>

          <section class="site-settings-section">
            <div class="site-settings-section-head">
              <h4>검색창 하단 인기 영역</h4>
            </div>
            <div class="site-settings-grid">
              ${Array.from({ length: 5 }, (_, index) =>
                renderSiteSettingField(settings, `popular.searches.${index}`, `인기 검색어 ${index + 1}`),
              ).join("")}
            </div>
            <div class="featured-settings-grid">
              ${renderPopularPostSettings(settings)}
            </div>
          </section>

          <section class="site-settings-section">
            <div class="site-settings-section-head">
              <h4>HR 캘린더</h4>
            </div>
            ${renderHrCalendarSettings(settings)}
          </section>

          <section class="site-settings-section">
            <div class="site-settings-section-head">
              <h4>메인 Featured Articles</h4>
            </div>
            <div class="featured-settings-grid">
              ${renderFeaturedPostSettings(settings)}
            </div>
          </section>

          <section class="site-settings-section">
            <div class="site-settings-section-head">
              <h4>온보딩 열람 이메일</h4>
            </div>
            <div class="site-settings-grid">
              ${renderSiteSettingField(settings, "onboardingAccess.emails", "허용 이메일 목록", {
                type: "textarea",
                rows: 4,
                wide: true,
              })}
            </div>
          </section>

          <section class="site-settings-section">
            <div class="site-settings-section-head">
              <h4>글 작성 알림</h4>
            </div>
            <div class="site-settings-grid">
              ${renderSiteSettingField(settings, "notifications.enabled", "새 글이 올라오면 이메일 알림 보내기", {
                type: "checkbox",
                wide: true,
              })}
              ${renderSiteSettingField(settings, "notifications.emails", "알림 받을 이메일 목록", {
                type: "textarea",
                rows: 3,
                wide: true,
              })}
            </div>
          </section>

          <section class="site-settings-section">
            <div class="site-settings-section-head">
              <h4>메뉴와 카테고리</h4>
            </div>
            <div class="site-settings-grid">
              ${blogCategories
                .map(
                  (category) => `
                    ${renderSiteSettingField(settings, `categories.${category.slug}.label`, `${category.label} 메뉴명`)}
                    ${renderSiteSettingField(settings, `categories.${category.slug}.description`, `${category.label} 설명`, {
                      type: "textarea",
                      rows: 3,
                      wide: true,
                    })}
                  `,
                )
                .join("")}
            </div>
          </section>

          <section class="site-settings-section">
            <div class="site-settings-section-head">
              <h4>FAQ</h4>
            </div>
            <div class="site-settings-grid">
              ${renderSiteSettingField(settings, "faq.eyebrow", "FAQ 라벨")}
              ${renderSiteSettingField(settings, "faq.title", "FAQ 제목")}
              ${renderSiteSettingField(settings, "faq.description", "FAQ 설명", { type: "textarea", rows: 2, wide: true })}
              ${settings.faq.items
                .map(
                  (_, index) => `
                    ${renderSiteSettingField(settings, `faq.items.${index}.question`, `질문 ${index + 1}`, { wide: true })}
                    ${renderSiteSettingField(settings, `faq.items.${index}.answer`, `답변 ${index + 1}`, { type: "textarea", rows: 3, wide: true })}
                  `,
                )
                .join("")}
            </div>
          </section>

          <section class="site-settings-section">
            <div class="site-settings-section-head">
              <h4>푸터와 버튼</h4>
            </div>
            <div class="site-settings-grid">
              ${renderSiteSettingField(settings, "footer.title", "푸터 제목")}
              ${renderSiteSettingField(settings, "footer.topLabel", "맨 위 링크")}
              ${renderSiteSettingField(settings, "footer.text", "푸터 설명", { type: "textarea", rows: 2, wide: true })}
              ${buttonFields.map(([path, label]) => renderSiteSettingField(settings, path, label)).join("")}
            </div>
          </section>
        </div>

        <div class="site-settings-actions">
          <button class="editor-button danger" type="button" data-settings-reset>${escapeHtml(settings.buttons.settingsReset)}</button>
          <div>
            <button class="editor-button" type="button" data-settings-cancel>${escapeHtml(settings.buttons.settingsCancel)}</button>
            <button class="editor-button" type="button" data-export-blog-data>JSON 내보내기</button>
            <button class="editor-button primary" type="button" data-settings-save>${escapeHtml(settings.buttons.settingsSave)}</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function collectSiteSettingsFromPanel() {
  const settings = getSiteSettings();
  siteSettingsPanel?.querySelectorAll("[data-setting]").forEach((field) => {
    setSiteSettingPath(settings, field.dataset.setting, field.type === "checkbox" ? field.checked : field.value);
  });
  settings.featuredPostIds = {};
  blogCategories.forEach((category) => {
    settings.featuredPostIds[category.slug] = [
      ...(siteSettingsPanel?.querySelectorAll(`[data-featured-post][data-featured-category="${category.slug}"]:checked`) || []),
    ]
      .map((field) => field.value)
      .slice(0, 3);
  });
  settings.popular = {
    searches: normalizePopularSearches(settings.popular?.searches),
    postIds: [...(siteSettingsPanel?.querySelectorAll("[data-popular-post]:checked") || [])]
      .map((field) => field.value)
      .slice(0, 3),
  };
  return normalizeSiteSettings(settings);
}

function refreshSiteAfterSettingsChange() {
  applySiteSettings();
  renderNavDropdowns();
  renderBlogCategories();
  renderCategoryFeatures();
  renderPostList();
  renderPostDetail(getCurrentPost());
  if (siteSettingsPanel && !siteSettingsPanel.hidden && postDetailPanel) {
    postDetailPanel.hidden = true;
  }
}

function saveSiteSettingsFromPanel() {
  if (!requestEditorAccess(saveSiteSettingsFromPanel)) {
    return;
  }
  blogState.siteSettings = collectSiteSettingsFromPanel();
  refreshSiteAfterSettingsChange();
  renderSiteSettingsPanel();
  showToast("사이트 설정을 저장했습니다.");
  persistBlogState().catch(() => showToast("사이트 설정 저장 중 오류가 발생했습니다."));
}

function resetSiteSettings() {
  if (!requestEditorAccess(resetSiteSettings) || !confirm("사이트 설정을 처음 상태로 되돌릴까요?")) {
    return;
  }
  blogState.siteSettings = cloneSiteSettings(defaultSiteSettings);
  refreshSiteAfterSettingsChange();
  renderSiteSettingsPanel();
  showToast("사이트 설정을 기본값으로 되돌렸습니다.");
  persistBlogState().catch(() => showToast("사이트 설정 저장 중 오류가 발생했습니다."));
}

function showSiteSettingsPanel() {
  hideTableResizeOverlay({ force: true });
  if (!requestEditorAccess(showSiteSettingsPanel)) {
    return;
  }
  siteSettingsOpenedFromHiddenBlogPage = Boolean(blogPage?.hidden);
  if (blogPage) {
    blogPage.hidden = false;
  }
  hideEditorPanel();
  if (postDetailPanel) {
    postDetailPanel.hidden = true;
  }
  renderSiteSettingsPanel();
  if (siteSettingsPanel) {
    siteSettingsPanel.hidden = false;
    document.body.classList.add("is-site-settings-open");
    window.setTimeout(() => siteSettingsPanel.focus(), 0);
  }
}

function hideSiteSettingsPanel() {
  if (siteSettingsPanel) {
    siteSettingsPanel.hidden = true;
  }
  if (siteSettingsOpenedFromHiddenBlogPage && blogPage) {
    blogPage.hidden = true;
  }
  siteSettingsOpenedFromHiddenBlogPage = false;
  document.body.classList.remove("is-site-settings-open");
}

function getPostsByCategory(slug) {
  return blogState.posts
    .filter((post) => post.category === slug)
    .sort(comparePostsByOrder);
}

function getNewPostOrder(categorySlug) {
  const orders = getPostsByCategory(categorySlug)
    .map((post) => normalizePostOrder(post.order))
    .filter((order) => order !== null);
  return orders.length ? Math.min(...orders) - 1 : 1;
}

function getCurrentPost() {
  return blogState.posts.find((post) => post.id === currentPostId) || null;
}

function expandBlogCategory(slug, replace = true) {
  if (!blogCategories.some((category) => category.slug === slug)) {
    return;
  }

  if (replace) {
    expandedBlogCategories.clear();
  }
  expandedBlogCategories.add(slug);
}

function renderBlogCategories() {
  if (!blogCategoryList) {
    return;
  }

  blogCategoryList.innerHTML = blogCategories
    .map((baseCategory) => {
      const category = getCategoryBySlug(baseCategory.slug);
      const folders = getCategoryTaxonomy(category.slug);
      const selected = !activeBlogSearchQuery && category.slug === currentBlogCategory;
      const folderItems = folders.length
        ? folders
            .map(
              (group) => {
                const active = selected && activeBlogTopic === group.label;
                return `<a class="blog-category-folder-link${active ? " is-current" : ""}" href="${escapeAttribute(buildBlogHash(category.slug, group.label))}" aria-current="${active ? "page" : "false"}">
                <span>${escapeHtml(group.label)}</span>
              </a>`;
              },
            )
            .join("")
        : '<p class="blog-category-empty">표시할 폴더가 없습니다.</p>';

      return `
        <div class="blog-category-item ${selected ? "is-selected" : ""}">
          <div class="blog-category-row">
            <a class="blog-category-button" href="#blog/${escapeAttribute(category.slug)}" data-blog-link="${escapeAttribute(category.slug)}" aria-current="${selected ? "page" : "false"}">
              ${escapeHtml(category.label)}
            </a>
          </div>
          <div class="blog-category-folders" id="blog-category-folders-${escapeAttribute(category.slug)}" aria-label="${escapeAttribute(category.label)} folder list">
            ${folderItems}
          </div>
        </div>
      `;
    })
    .join("");
}

function getTopicOptions(posts) {
  return getTaxonomyGroups(currentBlogCategory);
}

function buildBlogHash(slug, topic = "all", subtopic = "all") {
  const params = new URLSearchParams();
  if (topic && topic !== "all") {
    params.set("topic", topic);
  }
  if (subtopic && subtopic !== "all") {
    params.set("item", subtopic);
  }
  const query = params.toString();
  return `#blog/${slug}${query ? `?${query}` : ""}`;
}

function getActiveTaxonomyGroup() {
  return getCategoryTaxonomy(currentBlogCategory).find((group) => group.label === activeBlogTopic) || null;
}

function normalizeActiveFolderState() {
  const topics = getTaxonomyGroups(currentBlogCategory);
  if (!topics.includes(activeBlogTopic)) {
    activeBlogTopic = "all";
  }

  if (activeBlogTopic === "all") {
    activeBlogSubtopic = "all";
    return;
  }

  const activeGroup = getActiveTaxonomyGroup();
  const subtopics = activeGroup?.items?.map((item) => item.title) || [];
  if (activeBlogSubtopic !== "all" && !subtopics.includes(activeBlogSubtopic)) {
    activeBlogSubtopic = "all";
  }
}

function getFolderPostCount(slug, topic, subtopic = "all") {
  return getPostsByCategory(slug).filter((post) => {
    if (getPostGroup(post) !== topic) {
      return false;
    }
    return subtopic === "all" || getPostSubcategory(post) === subtopic;
  }).length;
}

function renderTopicFilter(posts) {
  if (!topicFilter) {
    return;
  }

  const topics = getTopicOptions(posts);
  normalizeActiveFolderState();

  topicFilter.innerHTML = topics
    .map(
      (topic) =>
        `<button class="topic-chip" type="button" aria-pressed="${topic === activeBlogTopic}" data-topic="${escapeHtml(topic)}">#${escapeHtml(topic)}</button>`,
    )
    .join("");

  topicFilter.querySelectorAll("[data-topic]").forEach((button) => {
    button.addEventListener("click", () => {
      activeBlogTopic = button.dataset.topic || "all";
      activeBlogSubtopic = "all";
      renderPostList();
      const nextHash = buildBlogHash(currentBlogCategory, activeBlogTopic);
      if (window.location.hash !== nextHash) {
        history.replaceState(null, "", nextHash);
      }
    });
  });
}

function renderTaxonomyGuide() {
  if (!taxonomyGuide) {
    return;
  }

  const category = getCategoryBySlug(currentBlogCategory);
  normalizeActiveFolderState();
  const isFolderOpen = activeBlogTopic !== "all";
  taxonomyGuide.classList.toggle("is-folder-open", isFolderOpen);
  taxonomyGuide.hidden = !isFolderOpen;

  if (isFolderOpen) {
    const activeGroup = getActiveTaxonomyGroup();
    const activeItem = activeGroup?.items?.find((item) => item.title === activeBlogSubtopic);
    const folderLabel = activeBlogSubtopic === "all" ? activeBlogTopic : activeBlogSubtopic;
    const folderNote =
      activeBlogSubtopic === "all"
        ? `${activeBlogTopic} 폴더 안의 전체 글을 확인합니다.`
        : activeItem?.note || `${activeBlogSubtopic} 폴더 안의 글을 확인합니다.`;
    const folderCount = getFolderPostCount(category.slug, activeBlogTopic, activeBlogSubtopic);
    taxonomyGuide.innerHTML = `
      <article class="taxonomy-folder-open-card">
        <nav class="taxonomy-folder-breadcrumb" aria-label="폴더 경로">
          <a href="${escapeAttribute(buildBlogHash(category.slug))}">${escapeHtml(category.label)} 전체 폴더</a>
          <span>/</span>
          <a href="${escapeAttribute(buildBlogHash(category.slug, activeBlogTopic))}">${escapeHtml(activeBlogTopic)}</a>
          ${
            activeBlogSubtopic !== "all"
              ? `<span>/</span><strong>${escapeHtml(activeBlogSubtopic)}</strong>`
              : ""
          }
        </nav>
        <div class="taxonomy-folder-open-head">
          <div>
            <strong>${escapeHtml(folderLabel)}</strong>
            <small>${folderCount}개 글</small>
          </div>
        </div>
        <p>${escapeHtml(folderNote)}</p>
        <div class="taxonomy-subfolder-list" aria-label="${escapeAttribute(activeBlogTopic)} 하위 폴더">
          <a class="${activeBlogSubtopic === "all" ? "is-active" : ""}" href="${escapeAttribute(buildBlogHash(category.slug, activeBlogTopic))}">전체</a>
          ${(activeGroup?.items || [])
            .map(
              (item) =>
                `<a class="${activeBlogSubtopic === item.title ? "is-active" : ""}" href="${escapeAttribute(
                  buildBlogHash(category.slug, activeBlogTopic, item.title),
                )}">
                  <span>${escapeHtml(item.title)}</span>
                  ${item.note ? `<small>${escapeHtml(item.note)}</small>` : ""}
                </a>`,
            )
            .join("")}
        </div>
      </article>
    `;
    return;
  }

  taxonomyGuide.innerHTML = "";
}

function getVisiblePostsByCategory(slug) {
  const posts = getPostsByCategory(slug);
  if (activeBlogTopic === "all") {
    return posts;
  }
  return posts.filter((post) => {
    if (getPostGroup(post) !== activeBlogTopic) {
      return false;
    }
    return activeBlogSubtopic === "all" || getPostSubcategory(post) === activeBlogSubtopic;
  });
}

function matchesPostSearch(post, query) {
  if (!query) {
    return true;
  }

  const target = [
    post.title,
    post.summary,
    post.author,
    getPostGroup(post),
    getPostSubcategory(post),
    getPostTaxonomyNote(post),
    ...getPostTags(post),
    stripHtml(post.content),
  ].join(" ");
  return query
    .split(/\s+/)
    .filter(Boolean)
    .some((term) => normalize(target).includes(term));
}

function compareSearchResultPosts(a, b) {
  const dateDifference = new Date(b?.updatedAt || 0) - new Date(a?.updatedAt || 0);
  if (dateDifference) {
    return dateDifference;
  }
  const categoryDifference = blogCategories.findIndex((category) => category.slug === a?.category) - blogCategories.findIndex((category) => category.slug === b?.category);
  if (categoryDifference) {
    return categoryDifference;
  }
  return comparePostsByOrder(a, b);
}

function getSearchResultPosts(query) {
  const normalizedQuery = normalize(String(query || ""));
  if (!normalizedQuery) {
    return [];
  }
  return blogState.posts.filter((post) => matchesPostSearch(post, normalizedQuery)).sort(compareSearchResultPosts);
}

function getBlogListScopeLabel() {
  const category = getCategoryBySlug(currentBlogCategory);
  if (activeBlogSearchQuery) {
    const query = activeBlogSearchQuery.trim();
    return query ? `전체 검색 / ${query}` : "전체 검색";
  }
  if (activeBlogTopic === "all") {
    return `${category.label} / 전체`;
  }
  if (activeBlogSubtopic === "all") {
    return `${category.label} / ${activeBlogTopic}`;
  }
  return `${category.label} / ${activeBlogTopic} / ${activeBlogSubtopic}`;
}

function getBlogListSortLabel() {
  const labels = {
    basic: "기본순",
    latest: "최신순",
    popular: "인기순",
    title: "가나다순",
  };
  return labels[activeBlogSort] || labels.basic;
}

function renderBlogCurrentScope(totalCount, visibleCount) {
  if (!blogCurrentScope) {
    return;
  }

  const listQuery = activeBlogListQuery.trim();
  const countText =
    totalCount === visibleCount
      ? `${visibleCount}개 글`
      : `${visibleCount}개 표시 / 전체 ${totalCount}개`;
  blogCurrentScope.innerHTML = `
    <span>현재 위치</span>
    <strong>${escapeHtml(getBlogListScopeLabel())}</strong>
    <em>${escapeHtml(getBlogListSortLabel())}</em>
    <small>${escapeHtml(countText)}${listQuery ? ` · 목록 검색: ${escapeHtml(listQuery)}` : ""}</small>
  `;
}

function syncBlogListControls() {
  if (blogListSearchInput && document.activeElement !== blogListSearchInput) {
    blogListSearchInput.value = activeBlogListQuery;
  }
  blogSortButtons.forEach((button) => {
    const isActive = button.dataset.blogSort === activeBlogSort;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function filterPostsByBlogListQuery(posts) {
  const normalizedQuery = normalize(activeBlogListQuery.trim());
  if (!normalizedQuery) {
    return posts;
  }
  return posts.filter((post) => matchesPostSearch(post, normalizedQuery));
}

function comparePostsByLatest(a, b) {
  const dateDifference = new Date(b?.updatedAt || 0) - new Date(a?.updatedAt || 0);
  if (dateDifference) {
    return dateDifference;
  }
  return String(a?.title || "").localeCompare(String(b?.title || ""), "ko");
}

function comparePostsByTitle(a, b) {
  const titleDifference = String(a?.title || "").localeCompare(String(b?.title || ""), "ko");
  if (titleDifference) {
    return titleDifference;
  }
  return comparePostsByLatest(a, b);
}

function comparePostsByPopular(a, b) {
  const popularIds = normalizePostIdList(getSiteSettings().popular?.postIds, 3);
  const aIndex = popularIds.indexOf(a?.id);
  const bIndex = popularIds.indexOf(b?.id);
  const aRank = aIndex >= 0 ? aIndex : Number.MAX_SAFE_INTEGER;
  const bRank = bIndex >= 0 ? bIndex : Number.MAX_SAFE_INTEGER;
  if (aRank !== bRank) {
    return aRank - bRank;
  }
  return comparePostsByLatest(a, b);
}

function sortPostsForBlogList(posts, isSearchMode = false) {
  const nextPosts = posts.slice();
  if (activeBlogSort === "latest") {
    return nextPosts.sort(comparePostsByLatest);
  }
  if (activeBlogSort === "popular") {
    return nextPosts.sort(comparePostsByPopular);
  }
  if (activeBlogSort === "title") {
    return nextPosts.sort(comparePostsByTitle);
  }
  return isSearchMode ? nextPosts.sort(compareSearchResultPosts) : nextPosts;
}

function buildSearchHash(query) {
  return `#search/${encodeURIComponent(String(query || "").trim())}`;
}

function runGlobalBlogSearch(value) {
  const query = String(value || "").trim();
  if (!query) {
    document.querySelector("#quick")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  window.location.hash = buildSearchHash(query);
}

function resetBlogListQuery() {
  activeBlogListQuery = "";
  if (blogListSearchInput) {
    blogListSearchInput.value = "";
  }
}

function renderSearchPopularPanel() {
  if (!searchPopularPanel) {
    return;
  }

  const settings = getSiteSettings();
  const popularSearches = normalizePopularSearches(settings.popular?.searches);
  const popularPosts = getPopularPosts(settings);
  searchPopularPanel.hidden = !popularSearches.length && !popularPosts.length;
  searchPopularPanel.innerHTML = `
    <section class="search-popular-card" aria-labelledby="popular-search-title">
      <h2 id="popular-search-title">TOP5 인기 검색어</h2>
      <div class="popular-search-list">
        ${popularSearches
          .map(
            (keyword, index) => `<button type="button" class="popular-search-chip" data-popular-search="${escapeAttribute(keyword)}">
              <span>${index + 1}</span>${escapeHtml(keyword)}
            </button>`,
          )
          .join("")}
      </div>
    </section>
    <section class="search-popular-card" aria-labelledby="popular-post-title">
      <h2 id="popular-post-title">TOP3 인기글</h2>
      <div class="popular-post-list">
        ${popularPosts
          .map(
            (post, index) => `<a class="popular-post-link" href="#post/${escapeAttribute(post.id)}">
              <span>${index + 1}</span>
              <strong>${escapeHtml(post.title)}</strong>
            </a>`,
          )
          .join("")}
      </div>
    </section>
  `;

  searchPopularPanel.querySelectorAll("[data-popular-search]").forEach((button) => {
    button.addEventListener("click", () => {
      const keyword = button.dataset.popularSearch || "";
      if (globalSearch) {
        globalSearch.value = keyword;
      }
      runGlobalBlogSearch(keyword);
    });
  });
}

function renderCategoryFeatures() {
  if (!categoryFeatureGrid) {
    return;
  }

  const accentBySlug = {
    culture: "#e75f58",
    "hr-guide": "#247f82",
    "work-tool": "#6f9272",
    "help-desk": "#c98621",
  };
  const settings = getSiteSettings();

  categoryFeatureGrid.innerHTML = blogCategories
    .map((baseCategory, index) => {
      const category = getCategoryBySlug(baseCategory.slug);
      const posts = getPostsByCategory(category.slug);
      const selectedPostIds = settings.featuredPostIds?.[category.slug] || [];
      const selectedPosts = selectedPostIds.map((id) => posts.find((post) => post.id === id)).filter(Boolean);
      const primaryPosts = selectedPosts.length ? selectedPosts : posts.slice(0, 3);
      const isReversed = index % 2 === 1;
      const postMarkup = primaryPosts.length
        ? primaryPosts
            .slice(0, 3)
            .map((post) => {
              const image = getPostThumbnailImage(post);
              const tags = getPostTags(post).slice(0, 2);
              const summary = String(post.summary || "").trim();
              return `
                <a class="category-feature-post${image ? "" : " has-no-thumb"}" href="#post/${escapeHtml(post.id)}">
                  ${image ? `<span class="category-feature-thumb" style="--thumb-image: url('${escapeHtml(image)}')" aria-hidden="true"></span>` : ""}
                  <strong>${renderPostPreviewTitle(post.title)}</strong>
                  <small${summary ? "" : ' aria-hidden="true"'}>${escapeHtml(summary)}</small>
                  <span class="category-feature-tags">${tags.map((tag) => `<em>${escapeHtml(tag)}</em>`).join("")}</span>
                </a>
              `;
            })
            .join("")
        : '<p class="category-feature-empty">아직 등록된 글이 없습니다.</p>';
      return `
        <article class="category-feature-card ${isReversed ? "is-reversed" : ""} reveal" data-initial="${escapeHtml(category.label.charAt(0))}" style="--feature-accent:${accentBySlug[category.slug] || "#657dff"}">
          <div class="category-feature-copy">
            <span class="category-feature-index">${String(index + 1).padStart(2, "0")}</span>
            <h3>
              <a class="category-feature-title-link" href="#blog/${escapeAttribute(category.slug)}" aria-label="${escapeAttribute(category.label)} 세부 화면 보기">
                ${escapeHtml(category.label)}
              </a>
            </h3>
            <p>${escapeHtml(category.description)}</p>
          </div>
          <div class="category-feature-posts">
            <strong>${escapeHtml(settings.sections.featuredLabel)}</strong>
            ${postMarkup}
          </div>
        </article>
      `;
    })
    .join("");

  categoryFeatureGrid.querySelectorAll(".reveal").forEach((item) => {
    observer?.observe(item);
  });
  revealVisibleItems();
}

function updateCoverPreview(value) {
  const hasImage = Boolean(value && isSafeImageUrl(value));
  const settings = getSiteSettings();
  if (coverPreview) {
    coverPreview.hidden = !hasImage;
    coverPreview.style.backgroundImage = hasImage ? `url("${value}")` : "";
  }
  if (coverUploadLabel) {
    coverUploadLabel.textContent = hasImage ? settings.buttons.coverSelected : settings.buttons.coverNone;
  }
  if (clearCoverButton) {
    clearCoverButton.disabled = !hasImage;
  }
}

function renderPostList() {
  if (!postList) {
    return;
  }

  const settings = getSiteSettings();
  const isSearchMode = Boolean(activeBlogSearchQuery);
  const searchQuery = activeBlogSearchQuery.trim();
  const allPosts = isSearchMode ? blogState.posts.slice().sort(compareSearchResultPosts) : getPostsByCategory(currentBlogCategory);
  const scopedPosts = isSearchMode ? getSearchResultPosts(searchQuery) : getVisiblePostsByCategory(currentBlogCategory);
  const filteredPosts = filterPostsByBlogListQuery(scopedPosts);
  const posts = sortPostsForBlogList(filteredPosts, isSearchMode);

  if (isSearchMode) {
    if (topicFilter) {
      topicFilter.innerHTML = `
        <span class="topic-chip search-topic-chip" aria-current="true">검색어: ${escapeHtml(searchQuery)}</span>
        <button class="topic-chip" type="button" data-clear-search>전체 글 보기</button>
      `;
      topicFilter.querySelector("[data-clear-search]")?.addEventListener("click", () => {
        window.location.hash = `#blog/${currentBlogCategory}`;
      });
    }
    if (taxonomyGuide) {
      taxonomyGuide.hidden = true;
      taxonomyGuide.classList.remove("is-folder-open");
      taxonomyGuide.innerHTML = "";
    }
    if (postListTitle) {
      postListTitle.textContent = "검색 결과";
    }
    if (contentSectionDivider) {
      contentSectionDivider.innerHTML = `<span>${escapeHtml(searchQuery)} 검색 결과</span>`;
    }
  } else {
    renderTopicFilter(allPosts);
    renderTaxonomyGuide();
    if (postListTitle) {
      postListTitle.textContent =
        activeBlogTopic === "all"
          ? settings.sections.postListTitle
          : activeBlogSubtopic === "all"
            ? `${activeBlogTopic} 폴더`
            : `${activeBlogSubtopic} 폴더`;
    }
    if (contentSectionDivider) {
      const category = getCategoryBySlug(currentBlogCategory);
      const scopeLabel =
        activeBlogTopic === "all"
          ? `${category.label} 게시글`
          : activeBlogSubtopic === "all"
            ? `${activeBlogTopic} 게시글`
            : `${activeBlogSubtopic} 게시글`;
      contentSectionDivider.innerHTML = `<span>${escapeHtml(scopeLabel)}</span>`;
    }
  }
  if (postCountLabel) {
    postCountLabel.textContent = `${posts.length}개 글`;
  }
  renderBlogCurrentScope(scopedPosts.length, posts.length);
  syncBlogListControls();

  const canSortPosts = !isSearchMode && !activeBlogListQuery.trim() && activeBlogSort === "basic" && isEditorUnlocked && posts.length > 1;
  postList.classList.toggle("is-sortable", canSortPosts);

  postList.innerHTML = posts.length
    ? posts
        .map(
          (post) => {
            const image = getPostThumbnailImage(post);
            const group = getPostGroup(post);
            const subcategory = getPostSubcategory(post);
            const category = getCategoryBySlug(post.category || currentBlogCategory);
            const author = getPostAuthor(post);
            const readingTime = estimateReadingMinutes(post.content);
            const tags = getPostTags(post)
              .slice(0, 3)
              .map((tag) => `#${escapeHtml(tag)}`)
              .join(" ");
            const summary = String(post.summary || "").trim();
            return `
            <button class="post-item${image ? "" : " has-no-thumb"}${canSortPosts ? " is-sortable" : ""}" type="button" data-post-id="${escapeHtml(post.id)}" draggable="false" aria-selected="${post.id === currentPostId}">
              ${canSortPosts ? '<span class="post-drag-handle" aria-hidden="true"></span>' : ""}
              ${image ? `<span class="post-thumb" style="background-image: url('${escapeHtml(image)}')" aria-hidden="true"></span>` : ""}
              <span class="post-text">
                <span class="post-item-kicker">${escapeHtml(category.label)} · ${escapeHtml(group)} · ${escapeHtml(subcategory)}</span>
                <strong>${renderPostPreviewTitle(post.title)}</strong>
                <span class="post-summary"${summary ? "" : ' aria-hidden="true"'}>${escapeHtml(summary)}</span>
                <span class="post-card-meta">
                  <span>${escapeHtml(author)}</span>
                  <time datetime="${escapeHtml(post.updatedAt)}">${formatPostDate(post.updatedAt)}</time>
                  <span>${escapeHtml(readingTime)}</span>
                </span>
                <span class="post-tags">${tags}</span>
              </span>
              <span class="post-arrow" aria-hidden="true">›</span>
            </button>
          `;
          },
        )
        .join("")
    : `<p class="post-empty">${
        activeBlogListQuery.trim()
          ? `"${escapeHtml(activeBlogListQuery.trim())}" 검색 결과가 없습니다. 현재 목록 안에서 다른 표현으로 다시 찾아보세요.`
          : isSearchMode
          ? `검색 결과가 없습니다. "${escapeHtml(searchQuery)}" 검색어를 줄이거나 다른 표현으로 다시 찾아보세요.`
          : `아직 업로드된 글이 없습니다. ${escapeHtml(settings.buttons.writePost)}을 눌러 첫 게시글을 올려보세요.`
      }</p>`;

  postList.querySelectorAll("[data-post-id]").forEach((button) => {
    button.addEventListener("click", () => {
      if (Date.now() < suppressPostSelectUntil) {
        return;
      }
      selectPost(button.dataset.postId);
    });
  });
  bindPostDragSorting();
}

function getRenderedPostIds() {
  return [...postList.querySelectorAll(".post-item[data-post-id]")].map((item) => item.dataset.postId).filter(Boolean);
}

function applyRenderedPostOrder(visibleIds) {
  if (!visibleIds.length) {
    return;
  }

  const visibleSet = new Set(visibleIds);
  const visiblePosts = visibleIds.map((id) => blogState.posts.find((post) => post.id === id)).filter(Boolean);
  let visibleIndex = 0;
  const nextCategoryOrder = getPostsByCategory(currentBlogCategory).map((post) => {
    if (!visibleSet.has(post.id)) {
      return post;
    }
    const nextPost = visiblePosts[visibleIndex] || post;
    visibleIndex += 1;
    return nextPost;
  });

  nextCategoryOrder.forEach((post, index) => {
    post.order = index + 1;
  });
}

function commitPostDragOrder() {
  const nextIds = getRenderedPostIds();
  if (!postDragStartOrder.length || nextIds.join("|") === postDragStartOrder.join("|")) {
    return;
  }

  postDragCommitted = true;
  suppressPostSelectUntil = Date.now() + 450;
  applyRenderedPostOrder(nextIds);
  renderCategoryFeatures();
  renderPostList();
  showToast("글 순서를 저장했습니다.");
  persistBlogState().catch(() => showToast("순서 저장 중 오류가 발생했습니다."));
}

function cleanupPostDragState() {
  postList.querySelectorAll(".post-item").forEach((item) => {
    item.classList.remove("is-dragging", "is-drag-over");
    item.setAttribute("aria-grabbed", "false");
  });
  postList.classList.remove("is-drag-active");
  postDragStartOrder = [];
  postDragOrderChanged = false;
  postDragCommitted = false;
  postPointerDragItem = null;
  postPointerDragActive = false;
  postDragMoveEventName = "";
  postDragEndEventName = "";
  postDragCancelEventName = "";
}

function movePostItemByPointer(event) {
  const draggingItem = postPointerDragItem;
  if (!draggingItem) {
    return;
  }

  const target = document.elementFromPoint(event.clientX, event.clientY)?.closest?.(".post-item.is-sortable");
  if (!target || target === draggingItem || !postList.contains(target)) {
    return;
  }

  const beforeOrder = getRenderedPostIds().join("|");
  const targetBox = target.getBoundingClientRect();
  const shouldPlaceAfter = event.clientY > targetBox.top + targetBox.height / 2;
  if (shouldPlaceAfter) {
    target.after(draggingItem);
  } else {
    target.before(draggingItem);
  }
  postDragOrderChanged = postDragOrderChanged || beforeOrder !== getRenderedPostIds().join("|");
}

function handlePostPointerMove(event) {
  if (!postPointerDragItem) {
    return;
  }

  const movedX = Math.abs(event.clientX - postPointerStartX);
  const movedY = Math.abs(event.clientY - postPointerStartY);
  if (!postPointerDragActive && Math.max(movedX, movedY) < 6) {
    return;
  }

  event.preventDefault();
  if (!postPointerDragActive) {
    postPointerDragActive = true;
    postPointerDragItem.classList.add("is-dragging");
    postPointerDragItem.setAttribute("aria-grabbed", "true");
    postList.classList.add("is-drag-active");
  }
  movePostItemByPointer(event);
}

function removePostDragGestureListeners() {
  if (postDragMoveEventName) {
    document.removeEventListener(postDragMoveEventName, handlePostPointerMove);
  }
  if (postDragEndEventName) {
    document.removeEventListener(postDragEndEventName, finishPostPointerDrag);
  }
  if (postDragCancelEventName) {
    document.removeEventListener(postDragCancelEventName, cancelPostPointerDrag);
  }
}

function finishPostPointerDrag() {
  removePostDragGestureListeners();

  if (postPointerDragActive && postDragOrderChanged) {
    commitPostDragOrder();
  }
  cleanupPostDragState();
}

function cancelPostPointerDrag() {
  removePostDragGestureListeners();
  renderPostList();
  cleanupPostDragState();
}

function handlePostPointerDown(event) {
  if (postPointerDragItem || !isEditorUnlocked || event.button !== 0) {
    return;
  }
  if (!event.target.closest?.(".post-drag-handle")) {
    return;
  }

  const isMouseGesture = event.type === "mousedown";
  postPointerDragItem = event.currentTarget;
  postPointerDragActive = false;
  postPointerStartX = event.clientX;
  postPointerStartY = event.clientY;
  postDragStartOrder = getRenderedPostIds();
  postDragOrderChanged = false;
  postDragCommitted = false;
  postDragMoveEventName = isMouseGesture ? "mousemove" : "pointermove";
  postDragEndEventName = isMouseGesture ? "mouseup" : "pointerup";
  postDragCancelEventName = isMouseGesture ? "" : "pointercancel";
  document.addEventListener(postDragMoveEventName, handlePostPointerMove, { passive: false });
  document.addEventListener(postDragEndEventName, finishPostPointerDrag, { once: true });
  if (postDragCancelEventName) {
    document.addEventListener(postDragCancelEventName, cancelPostPointerDrag, { once: true });
  }
}

function handlePostDragStart(event) {
  const item = event.currentTarget;
  if (!isEditorUnlocked) {
    event.preventDefault();
    return;
  }

  postDragStartOrder = getRenderedPostIds();
  postDragOrderChanged = false;
  postDragCommitted = false;
  item.classList.add("is-dragging");
  item.setAttribute("aria-grabbed", "true");
  postList.classList.add("is-drag-active");
  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", item.dataset.postId || "");
  }
}

function handlePostDragOver(event) {
  event.preventDefault();
  const target = event.currentTarget;
  const draggingItem = postList.querySelector(".post-item.is-dragging");
  if (!draggingItem || draggingItem === target) {
    return;
  }

  const beforeOrder = getRenderedPostIds().join("|");
  const targetBox = target.getBoundingClientRect();
  const shouldPlaceAfter = event.clientY > targetBox.top + targetBox.height / 2;
  if (shouldPlaceAfter) {
    target.after(draggingItem);
  } else {
    target.before(draggingItem);
  }
  postDragOrderChanged = postDragOrderChanged || beforeOrder !== getRenderedPostIds().join("|");
}

function handlePostDrop(event) {
  event.preventDefault();
  if (postDragOrderChanged) {
    commitPostDragOrder();
  }
}

function handlePostDragEnd() {
  if (postDragOrderChanged && !postDragCommitted) {
    commitPostDragOrder();
  }
  cleanupPostDragState();
}

function bindPostDragSorting() {
  const sortableItems = [...postList.querySelectorAll(".post-item.is-sortable")];
  sortableItems.forEach((item) => {
    item.setAttribute("aria-grabbed", "false");
    item.addEventListener("dragstart", (event) => event.preventDefault());
    item.addEventListener("pointerdown", handlePostPointerDown);
    item.addEventListener("mousedown", handlePostPointerDown);
  });
  postList.querySelectorAll(".post-drag-handle").forEach((handle) => {
    handle.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
  });
}

function getSelectedRelatedPostIds() {
  if (!relatedPostOptions) {
    return [];
  }

  return [...relatedPostOptions.querySelectorAll("input[type='checkbox']:checked")].map((input) => input.value);
}

function renderRelatedPostOptions(post) {
  if (!relatedPostOptions) {
    return;
  }

  const currentId = post?.id || currentPostId || "";
  const selectedIds = new Set(normalizeRelatedPostIds(post?.relatedPostIds, currentId));
  const candidates = blogState.posts
    .filter((item) => item.id !== currentId)
    .slice()
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  relatedPostOptions.innerHTML = candidates.length
    ? candidates
        .map(
          (item) => `<label class="related-post-option">
            <input type="checkbox" value="${escapeAttribute(item.id)}" ${selectedIds.has(item.id) ? "checked" : ""} />
            <span>
              <strong>${escapeHtml(item.title)}</strong>
              <small>${escapeHtml(getCategoryBySlug(item.category).label)} · ${formatPostDate(item.updatedAt)}</small>
            </span>
          </label>`,
        )
        .join("")
      : '<p class="related-post-empty">먼저 다른 글을 작성하면 선택할 수 있습니다.</p>';
}

function renderSubcategoryOptions(categorySlug, groupLabel, selectedSubcategory = "") {
  if (!postSubcategorySelect) {
    return;
  }

  const items = getTaxonomyItems(categorySlug, groupLabel);
  const selected = items.some((item) => item.title === selectedSubcategory)
    ? selectedSubcategory
    : items[0]?.title || "";
  postSubcategorySelect.innerHTML = items
    .map((item) => `<option value="${escapeAttribute(item.title)}">${escapeHtml(item.title)}</option>`)
    .join("");
  postSubcategorySelect.value = selected;
}

function renderClassificationOptions(post) {
  if (!postGroupSelect || !postSubcategorySelect) {
    return;
  }

  const categorySlug = post?.category || currentBlogCategory;
  const groups = getCategoryTaxonomy(categorySlug);
  const selectedGroup = normalizePostGroup(post || {}, categorySlug);
  postGroupSelect.innerHTML = groups
    .map((group) => `<option value="${escapeAttribute(group.label)}">${escapeHtml(group.label)}</option>`)
    .join("");
  postGroupSelect.value = selectedGroup;
  renderSubcategoryOptions(categorySlug, selectedGroup, post ? normalizePostSubcategory(post, categorySlug, selectedGroup) : "");
}

function getSelectedClassification() {
  const group = postGroupSelect?.value || getDefaultTaxonomyGroup(currentBlogCategory);
  const subcategory = postSubcategorySelect?.value || getDefaultTaxonomyItem(currentBlogCategory, group);
  return {
    group,
    subcategory,
    note: getTaxonomyNote(currentBlogCategory, group, subcategory),
  };
}

function renderEditor(post) {
  if (!postTitleInput || !postSummaryInput || !postAuthorInput || !postTagsInput || !postImageInput || !postEditor) {
    return;
  }

  postTitleInput.value = post ? post.title : "";
  postSummaryInput.value = post ? post.summary : "";
  postAuthorInput.value = post ? getPostAuthor(post) : "People Team";
  postTagsInput.value = post ? getPostTags(post).map((tag) => `#${tag}`).join(" ") : "";
  postImageInput.value = post ? post.image || "" : "";
  renderClassificationOptions(post);
  updateCoverPreview(postImageInput.value);
  renderRelatedPostOptions(post);
  postEditor.innerHTML = post ? sanitizeHtml(post.content) : getArticleTemplate("guide");
  selectEditorImage(null);
  if (editorPreview) {
    editorPreview.hidden = true;
    editorPreview.innerHTML = "";
  }
  deletePostButton.disabled = !post;
}

function renderPostDetail(post) {
  if (!postDetailPanel || !postDetail) {
    return;
  }

  if (!post) {
    postDetailPanel.hidden = true;
    postDetail.innerHTML = "";
    return;
  }

  const image = getPostThumbnailImage(post);
  const category = getCategoryBySlug(post.category);
  const group = getPostGroup(post);
  const subcategory = getPostSubcategory(post);
  const tags = getPostTags(post);
  const shouldGateOnboarding = isOnboardingPost(post) && !hasOnboardingAccess(post);
  const articleBody = shouldGateOnboarding ? { html: renderOnboardingAccessGate(post) } : prepareArticleBody(post.content);
  const articleToc = shouldGateOnboarding ? "" : renderArticleAutoToc(articleBody, post);
  const relatedPosts = shouldGateOnboarding ? [] : getRelatedPosts(post);
  postDetailPanel.hidden = false;
  postDetail.innerHTML = `
    <article class="article-view${articleToc ? " has-side-toc" : ""}">
      <div class="article-kicker">${escapeHtml(category.label)} · ${escapeHtml(group)} · ${escapeHtml(subcategory)}</div>
      <h1>${escapeHtml(post.title)}</h1>
      <p class="post-detail-summary">${escapeHtml(post.summary || "")}</p>
      <div class="article-meta">
        <span>${escapeHtml(getPostAuthor(post))}</span>
        <time datetime="${escapeHtml(post.updatedAt)}">${formatPostDate(post.updatedAt)}</time>
        <span>${estimateReadingMinutes(post.content)}</span>
      </div>
      <div class="article-tags">${tags.map((tag) => `<span>#${escapeHtml(tag)}</span>`).join("")}</div>
      ${image ? `<img class="post-detail-cover" src="${escapeHtml(image)}" alt="" />` : ""}
      ${articleBody.sourceNoteHtml || ""}
      ${articleToc}
      <div class="post-detail-body">${articleBody.html}</div>
      ${
        relatedPosts.length
          ? `<section class="article-related"><h2>함께 보면 좋은 글</h2>${relatedPosts
              .map(
                (item) => `<button type="button" data-related-post="${escapeHtml(item.id)}">
                  <span>${escapeHtml(item.title)}</span>
                  <small>${escapeHtml(item.summary || "")}</small>
                </button>`,
              )
              .join("")}</section>`
          : ""
      }
    </article>
  `;

  postDetail.querySelectorAll("[data-related-post]").forEach((button) => {
    button.addEventListener("click", () => selectPost(button.dataset.relatedPost));
  });
  hydrateHrCalendarImages(postDetail);
  bindArticleTocLinks(postDetail);
  bindInlineImageZoom(postDetail);
  bindOnboardingAccessGate(post);
  updateArticleSideToc(postDetail);
}

function bindArticleTocLinks(container) {
  if (!container) {
    return;
  }

  container.querySelectorAll('.article-smart-toc a[href^="#"], .article-toc-block a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = decodeURIComponent((link.getAttribute("href") || "").slice(1));
      if (!targetId) {
        return;
      }
      const target = [...container.querySelectorAll("[id]")].find((element) => element.id === targetId);
      if (!target) {
        return;
      }
      event.preventDefault();
      scrollToPanel(target, getTopbarScrollOffset(24));
      window.setTimeout(() => updateArticleSideToc(container), 180);
    });
  });
}

function getActiveArticleHeadingId(container = postDetail) {
  const headings = [...(container?.querySelectorAll(".post-detail-body h2[id], .post-detail-body h3[id]") || [])];
  if (!headings.length) {
    return "";
  }

  const focusY = getTopbarScrollOffset(44) + Math.min(window.innerHeight * 0.28, 220);
  let activeHeading = headings[0];

  headings.forEach((heading) => {
    const rect = heading.getBoundingClientRect();
    if (rect.top <= focusY) {
      activeHeading = heading;
    }
  });

  return activeHeading.id || "";
}

function updateArticleSideToc(container = postDetail) {
  const toc = container?.querySelector("[data-article-side-toc]");
  if (!toc) {
    return;
  }

  const activeId = getActiveArticleHeadingId(container);
  toc.querySelectorAll("[data-article-toc-link]").forEach((link) => {
    const isActive = link.dataset.articleTocLink === activeId;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

const INLINE_IMAGE_MIN_ZOOM = 1;
const INLINE_IMAGE_MAX_ZOOM = 4;
const INLINE_IMAGE_ZOOM_STEP = 0.18;

function getInlineImageZoom(frame) {
  return Number(frame?.dataset.zoom || 1) || 1;
}

function clampInlineImageZoom(value) {
  return Math.min(INLINE_IMAGE_MAX_ZOOM, Math.max(INLINE_IMAGE_MIN_ZOOM, value));
}

function getInlineImageBaseWidth(frame, image) {
  const currentBase = Number(frame.dataset.baseWidth || 0);
  if (currentBase > 0) {
    return currentBase;
  }

  const measuredWidth = Math.max(1, Math.round(image.getBoundingClientRect().width || frame.clientWidth || 1));
  frame.dataset.baseWidth = String(measuredWidth);
  return measuredWidth;
}

function setInlineImageZoom(frame, nextZoom, originEvent = null) {
  const image = frame?.querySelector("img");
  if (!frame || !image) {
    return;
  }

  const previousZoom = getInlineImageZoom(frame);
  const baseWidth = getInlineImageBaseWidth(frame, image);
  const previousWidth = Math.max(1, baseWidth * previousZoom);
  const rect = frame.getBoundingClientRect();
  const focusX = originEvent ? originEvent.clientX - rect.left : frame.clientWidth / 2;
  const focusY = originEvent ? originEvent.clientY - rect.top : frame.clientHeight / 2;
  const ratioX = (frame.scrollLeft + focusX) / previousWidth;
  const ratioY = (frame.scrollTop + focusY) / Math.max(1, image.getBoundingClientRect().height || 1);
  const zoom = clampInlineImageZoom(nextZoom);

  frame.dataset.zoom = String(zoom);
  image.style.width = `${Math.round(baseWidth * zoom)}px`;
  image.style.maxWidth = "none";
  image.style.height = "auto";
  frame.classList.toggle("is-active", zoom > 1);
  frame.classList.toggle("is-zoomed", zoom > 1);

  if (zoom <= 1) {
    frame.scrollLeft = 0;
    frame.scrollTop = 0;
    return;
  }

  if (previousZoom <= 1) {
    window.requestAnimationFrame(() => {
      frame.scrollLeft = 0;
      frame.scrollTop = 0;
    });
    return;
  }

  window.requestAnimationFrame(() => {
    frame.scrollLeft = Math.max(0, baseWidth * zoom * ratioX - focusX);
    frame.scrollTop = Math.max(0, image.clientHeight * ratioY - focusY);
  });
}

function activateInlineImageZoom(frame, event = null) {
  document.querySelectorAll(".inline-image-zoom.is-active").forEach((item) => {
    if (item !== frame && getInlineImageZoom(item) <= 1) {
      item.classList.remove("is-active");
    }
  });
  frame.classList.add("is-active");
  const image = frame.querySelector("img");
  if (image) {
    getInlineImageBaseWidth(frame, image);
  }
}

function wrapInlineZoomImage(image) {
  if (!image || image.closest(".inline-image-zoom")) {
    return image?.closest(".inline-image-zoom") || null;
  }

  const frame = document.createElement("div");
  frame.className = `inline-image-zoom${image.classList.contains("post-detail-cover") ? " is-cover" : ""}`;
  frame.tabIndex = 0;
  frame.setAttribute("role", "button");
  frame.setAttribute("aria-label", "이미지 확대 보기");
  frame.dataset.zoom = "1";

  const parent = image.parentElement;
  const isOnlyImageParagraph =
    parent?.tagName?.toLowerCase() === "p" &&
    [...parent.childNodes].every((node) => node === image || (node.nodeType === Node.TEXT_NODE && !node.textContent.trim()));

  if (isOnlyImageParagraph) {
    parent.replaceWith(frame);
  } else {
    parent?.insertBefore(frame, image);
  }
  frame.appendChild(image);
  return frame;
}

function ensureInlineImageZoomHint(frame, image) {
  if (!frame || frame.classList.contains("is-cover") || !image?.closest(".post-detail-body")) {
    return;
  }
  if (frame.nextElementSibling?.classList?.contains("inline-image-zoom-hint")) {
    return;
  }

  const hint = document.createElement("small");
  hint.className = "inline-image-zoom-hint";
  hint.textContent = "이미지가 잘 안 보이면 클릭 후 확대해서 확인해 주세요.";
  frame.insertAdjacentElement("afterend", hint);
}

function bindInlineImageZoom(container) {
  if (!container) {
    return;
  }

  container.querySelectorAll(".post-detail-cover, .post-detail-body img").forEach((image) => {
    const frame = wrapInlineZoomImage(image);
    ensureInlineImageZoomHint(frame, image);
    if (!frame || frame.dataset.inlineZoomBound === "true") {
      return;
    }

    frame.dataset.inlineZoomBound = "true";
    frame.addEventListener("click", (event) => {
      event.preventDefault();
      openImageLightbox(image, frame);
    });
    frame.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openImageLightbox(image, frame);
      }
    });
  });
}

function showEditorPanel() {
  if (!requestEditorAccess(showEditorPanel)) {
    return false;
  }
  hideSiteSettingsPanel();
  if (editorPanel) {
    editorPanel.hidden = false;
  }
  if (postDetailPanel) {
    postDetailPanel.hidden = true;
  }
  window.setTimeout(() => scrollToPanel(editorPanel), 0);
  return true;
}

function hideEditorPanel() {
  if (editorPanel) {
    editorPanel.hidden = true;
  }
  if (editorPreview) {
    editorPreview.hidden = true;
    editorPreview.innerHTML = "";
  }
  selectEditorImage(null);
}

function selectPost(postId) {
  if (!postId) {
    return;
  }
  const nextHash = `#post/${encodeURIComponent(postId)}`;
  if (window.location.hash === nextHash) {
    showPostPage(postId);
    return;
  }
  window.location.hash = nextHash;
}

function getPostBackFallbackHash() {
  const post = getCurrentPost();
  const category = post?.category || currentBlogCategory || blogCategories[0]?.slug || "culture";
  return `#blog/${category}`;
}

function getPostListReturnHash() {
  const currentHash = window.location.hash || "#home";
  if (previousRouteHash && previousRouteHash !== currentHash && (previousRouteHash.startsWith("#search/") || previousRouteHash.startsWith("#blog/"))) {
    return previousRouteHash;
  }
  return getPostBackFallbackHash();
}

function goBackFromPostDetail() {
  const fallbackHash = getPostBackFallbackHash();
  const currentHash = window.location.hash || "#home";

  if (previousRouteHash && previousRouteHash !== currentHash) {
    window.location.hash = previousRouteHash;
    return;
  }

  window.location.hash = fallbackHash;
}

function startNewPost() {
  if (!requestEditorAccess(startNewPost)) {
    return;
  }
  currentPostId = null;
  renderPostList();
  renderEditor(null);
  showEditorPanel();
  postTitleInput.focus();
}

function saveCurrentPost() {
  if (!requestEditorAccess(saveCurrentPost)) {
    return;
  }
  const title = postTitleInput.value.trim() || "제목 없음";
  const summary = postSummaryInput.value.trim();
  const author = postAuthorInput.value.trim() || "People Team";
  const tags = normalizeTags(postTagsInput.value, []);
  const classification = getSelectedClassification();
  const relatedPostIds = normalizeRelatedPostIds(getSelectedRelatedPostIds(), currentPostId || "");
  const image = isSafeImageUrl(postImageInput.value.trim()) ? postImageInput.value.trim() : "";
  const content = sanitizeHtml(postEditor.innerHTML);
  const now = new Date().toISOString();
  const existingPost = getCurrentPost();

  if (existingPost) {
    existingPost.title = title;
    existingPost.summary = summary;
    existingPost.author = author;
    existingPost.tags = tags;
    existingPost.group = classification.group;
    existingPost.subcategory = classification.subcategory;
    existingPost.note = classification.note;
    existingPost.relatedPostIds = relatedPostIds;
    existingPost.image = image;
    existingPost.content = content;
    existingPost.updatedAt = now;
  } else {
    const newPost = {
      id: globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `post-${Date.now()}`,
      category: currentBlogCategory,
      title,
      summary,
      author,
      tags,
      group: classification.group,
      subcategory: classification.subcategory,
      note: classification.note,
      takeaways: [],
      relatedPostIds,
      image,
      order: getNewPostOrder(currentBlogCategory),
      content,
      updatedAt: now,
    };
    blogState.posts.push(newPost);
    currentPostId = newPost.id;
  }

  renderBlogCategories();
  renderCategoryFeatures();
  renderPostList();
  hideEditorPanel();
  const nextHash = `#post/${encodeURIComponent(currentPostId)}`;
  if (window.location.hash === nextHash) {
    showPostPage(currentPostId);
  } else {
    window.location.hash = nextHash;
  }
  persistBlogState().catch(() => showToast("저장 중 오류가 발생했습니다."));
}

function deleteCurrentPost() {
  if (!requestEditorAccess(deleteCurrentPost)) {
    return;
  }
  const post = getCurrentPost();
  if (!post || !confirm(`'${post.title}' 글을 삭제할까요?`)) {
    return;
  }

  blogState.posts = blogState.posts.filter((item) => item.id !== post.id);
  blogState.posts.forEach((item) => {
    item.relatedPostIds = normalizeRelatedPostIds(item.relatedPostIds, post.id);
  });
  const settings = getSiteSettings();
  blogCategories.forEach((category) => {
    settings.featuredPostIds[category.slug] = normalizePostIdList(settings.featuredPostIds?.[category.slug]).filter((id) => id !== post.id);
  });
  blogState.siteSettings = settings;
  const nextPost = getPostsByCategory(currentBlogCategory)[0] || null;
  currentPostId = nextPost ? nextPost.id : null;
  renderBlogCategories();
  renderCategoryFeatures();
  renderPostList();
  renderEditor(nextPost);
  hideEditorPanel();
  if (nextPost) {
    window.location.hash = `#post/${encodeURIComponent(nextPost.id)}`;
  } else {
    window.location.hash = `#blog/${currentBlogCategory}`;
  }
  persistBlogState().catch(() => showToast("삭제 저장 중 오류가 발생했습니다."));
}

function execEditorCommand(command, value = null) {
  postEditor.focus();
  document.execCommand(command, false, value);
}

function applyBlockFormat(value) {
  const allowedBlocks = new Set(["p", "h2", "h3", "h4"]);
  if (!allowedBlocks.has(value)) {
    return;
  }
  execEditorCommand("formatBlock", value);
  if (blockFormatSelect) {
    blockFormatSelect.value = "";
  }
}

function getRangeElement(range) {
  const node = range?.startContainer || null;
  if (!node) {
    return null;
  }
  return node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
}

function getEditorRange() {
  const selection = window.getSelection?.();
  if (!selection || !selection.rangeCount) {
    return null;
  }
  const range = selection.getRangeAt(0);
  const element = getRangeElement(range);
  return element && postEditor?.contains(element) ? range : null;
}

function rememberEditorSelection() {
  const range = getEditorRange();
  if (range) {
    savedEditorRange = range.cloneRange();
  }
}

function restoreEditorSelection() {
  if (!savedEditorRange || !postEditor || !window.getSelection) {
    return false;
  }
  const element = getRangeElement(savedEditorRange);
  if (!element || !postEditor.contains(element)) {
    return false;
  }
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(savedEditorRange);
  return true;
}

function getCurrentEditorTextBlock() {
  const range = getEditorRange();
  const element = getRangeElement(range) || (selectedEditorBlock && postEditor?.contains(selectedEditorBlock) ? selectedEditorBlock : null);
  const block = element?.closest?.("h2, h3, h4, p") || null;
  return block && postEditor?.contains(block) ? block : null;
}

function getHeadingTargetsFromSelection() {
  const range = getEditorRange();
  if (!range) {
    return [];
  }
  if (!range.collapsed) {
    const headings = [...postEditor.querySelectorAll("h2, h3, h4")].filter((heading) => {
      try {
        return range.intersectsNode(heading);
      } catch (error) {
        return false;
      }
    });
    if (headings.length) {
      return headings;
    }
  }
  const block = getCurrentEditorTextBlock();
  return block ? [block] : [];
}

function applyHeadingHighlight(value) {
  const style = String(value || "");
  const allowedStyles = new Set(["none", "brush", "marker", "accent", "box", "side"]);
  if (!allowedStyles.has(style)) {
    return;
  }

  restoreEditorSelection();
  postEditor.focus();
  let targets = getHeadingTargetsFromSelection();

  if (!targets.length) {
    showToast("강조할 소제목에 커서를 놓아 주세요.");
    if (headingHighlightSelect) {
      headingHighlightSelect.value = "";
    }
    return;
  }

  if (targets.length === 1 && !/^H[2-4]$/i.test(targets[0].tagName || "")) {
    execEditorCommand("formatBlock", "h2");
    targets = getHeadingTargetsFromSelection().filter((target) => /^H[2-4]$/i.test(target.tagName || ""));
  } else {
    targets = targets.filter((target) => /^H[2-4]$/i.test(target.tagName || ""));
  }

  if (!targets.length) {
    showToast("소제목으로 바꾼 뒤 강조를 적용해 주세요.");
    if (headingHighlightSelect) {
      headingHighlightSelect.value = "";
    }
    return;
  }

  targets.forEach((heading) => {
    heading.classList.remove(...HEADING_HIGHLIGHT_CLASSES);
    if (style !== "none") {
      heading.classList.add(`article-heading-${style}`);
    }
  });

  rememberEditorSelection();
  setBlogStatus(style === "none" ? "소제목 강조 해제됨" : "소제목 강조 적용됨");
  if (headingHighlightSelect) {
    headingHighlightSelect.value = "";
  }
}

function getImageWidthPercent(image) {
  const rawWidth = image?.style?.width || "";
  const matched = rawWidth.match(/(\d+(\.\d+)?)%/);
  if (matched) {
    return Math.min(100, Math.max(25, Number(matched[1])));
  }
  return 70;
}

function updateImageToolState() {
  const hasImage = Boolean(selectedEditorImage && postEditor.contains(selectedEditorImage));
  [setCoverFromEditorButton, imageWidthRange, removeEditorImageButton].forEach((control) => {
    if (control) {
      control.disabled = !hasImage;
    }
  });
  if (imageWidthRange) {
    imageWidthRange.value = hasImage ? String(getImageWidthPercent(selectedEditorImage)) : "70";
  }
}

function clearEditorImageSelection() {
  postEditor?.querySelectorAll("img.is-selected").forEach((item) => item.classList.remove("is-selected"));
  selectedEditorImage = null;
  updateImageToolState();
}

function clearEditorBlockSelection() {
  postEditor?.querySelectorAll(".is-block-selected").forEach((item) => item.classList.remove("is-block-selected"));
  selectedEditorBlock = null;
  hideTableResizeOverlay();
  hideOrgChartResizeOverlay();
}

function getEditorTargetElement(target) {
  return target instanceof Element ? target : target?.parentElement || null;
}

function getSelectableEditorBlock(target) {
  const element = getEditorTargetElement(target);
  const block = element?.closest(EDITOR_SELECTABLE_BLOCK_SELECTOR) || null;
  return block && postEditor?.contains(block) ? block : null;
}

function isEditorBlankParagraph(element) {
  if (!element || element.tagName?.toLowerCase() !== "p") {
    return false;
  }
  const hasOnlyBreaks = [...element.childNodes].every((node) => {
    return node.nodeType === Node.TEXT_NODE
      ? !node.textContent.trim()
      : node.nodeType === Node.ELEMENT_NODE && node.tagName.toLowerCase() === "br";
  });
  return hasOnlyBreaks && !element.textContent.trim();
}

function isNearEditorBlockEdge(event, block) {
  const rect = block.getBoundingClientRect();
  const edgeSize = Math.min(34, Math.max(18, Math.min(rect.width, rect.height) * 0.16));
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  return x <= edgeSize || x >= rect.width - edgeSize || y <= edgeSize || y >= rect.height - edgeSize;
}

function shouldSelectEditorBlock(event, block) {
  if (!block || !postEditor?.contains(block)) {
    return false;
  }
  const target = getEditorTargetElement(event.target);
  if (!target) {
    return false;
  }
  if (target.closest(".article-link-preview")) {
    return true;
  }
  if (target.closest("img, a, button, input, textarea, select")) {
    return false;
  }
  return target === block || isNearEditorBlockEdge(event, block);
}

function placeCaretInElement(element) {
  if (!element || !window.getSelection) {
    return;
  }
  const range = document.createRange();
  range.selectNodeContents(element);
  range.collapse(true);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}

function selectEditorBlock(block, options = {}) {
  clearEditorImageSelection();
  clearEditorBlockSelection();
  selectedEditorBlock = block && postEditor?.contains(block) ? block : null;
  if (!selectedEditorBlock) {
    return;
  }
  selectedEditorBlock.classList.add("is-block-selected");
  if (options.focus !== false) {
    postEditor.focus();
  }
  syncTableControlsFromSelection();
  if (selectedEditorBlock.tagName?.toLowerCase() === "table") {
    showTableResizeOverlay(selectedEditorBlock);
  } else if (isEditableOrgChart(selectedEditorBlock)) {
    showOrgChartResizeOverlay(selectedEditorBlock);
  }
  if (window.getSelection) {
    const range = document.createRange();
    range.selectNode(selectedEditorBlock);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
}

function removeSelectedEditorBlock() {
  if (!selectedEditorBlock || !postEditor?.contains(selectedEditorBlock)) {
    clearEditorBlockSelection();
    return false;
  }

  const block = selectedEditorBlock;
  const parent = block.parentNode;
  let insertionReference = block.nextSibling;
  const trailingBlank = block.nextElementSibling;
  clearEditorBlockSelection();

  if (trailingBlank && isEditorBlankParagraph(trailingBlank)) {
    if (insertionReference === trailingBlank) {
      insertionReference = trailingBlank.nextSibling;
    }
    trailingBlank.remove();
  }

  const caretParagraph = document.createElement("p");
  caretParagraph.innerHTML = "<br>";
  block.remove();
  parent.insertBefore(
    caretParagraph,
    insertionReference && insertionReference.parentNode === parent ? insertionReference : null,
  );
  postEditor.focus();
  placeCaretInElement(caretParagraph);
  setBlogStatus("선택한 블록을 삭제했습니다.");
  return true;
}

function selectEditorImage(image) {
  clearEditorBlockSelection();
  clearEditorImageSelection();
  selectedEditorImage = image && postEditor.contains(image) ? image : null;
  if (selectedEditorImage) {
    selectedEditorImage.classList.add("is-selected");
  }
  updateImageToolState();
}

function insertImageHtml(dataUrl) {
  const safeUrl = escapeAttribute(dataUrl);
  execEditorCommand(
    "insertHTML",
    `<p><img src="${safeUrl}" alt="" style="width: 70%; max-width: 100%; height: auto; display: block; margin-left: auto; margin-right: auto;"></p><p><br></p>`,
  );
  window.setTimeout(() => {
    const images = [...postEditor.querySelectorAll("img")];
    const insertedImage = images.reverse().find((image) => image.src === dataUrl || image.getAttribute("src") === dataUrl);
    selectEditorImage(insertedImage || images[0] || null);
  }, 0);
}

async function handleCoverImageFile(file) {
  try {
    setBlogStatus("이미지 처리 중");
    const dataUrl = await optimizeImageFile(file, { maxWidth: 1400, quality: 0.8 });
    const imageUrl = await uploadBlogImageToRemote(dataUrl, { fileName: file.name, kind: "cover" });
    postImageInput.value = imageUrl;
    updateCoverPreview(imageUrl);
    setBlogStatus(imageUrl === dataUrl ? getSiteSettings().buttons.coverSelected : "대표 이미지 업로드됨");
  } catch (error) {
    showToast(error.message || "대표 이미지를 처리하지 못했습니다.");
    syncEditorAccessStatus();
  } finally {
    if (coverImageFileInput) {
      coverImageFileInput.value = "";
    }
  }
}

async function handleEditorImageFile(file) {
  try {
    setBlogStatus("이미지 처리 중");
    const dataUrl = await optimizeImageFile(file, { maxWidth: 1200, quality: 0.78 });
    const imageUrl = await uploadBlogImageToRemote(dataUrl, { fileName: file.name, kind: "content" });
    insertImageHtml(imageUrl);
    setBlogStatus(imageUrl === dataUrl ? "본문 이미지 삽입됨" : "본문 이미지 업로드됨");
  } catch (error) {
    showToast(error.message || "본문 이미지를 처리하지 못했습니다.");
    syncEditorAccessStatus();
  } finally {
    if (editorImageFileInput) {
      editorImageFileInput.value = "";
    }
  }
}

function setCoverFromSelectedImage() {
  if (!selectedEditorImage) {
    showToast("대표로 지정할 본문 이미지를 먼저 선택해 주세요.");
    return;
  }
  const imageSrc = selectedEditorImage.getAttribute("src") || selectedEditorImage.currentSrc || selectedEditorImage.src;
  if (!isSafeImageUrl(imageSrc)) {
    showToast("선택한 이미지를 대표 이미지로 사용할 수 없습니다.");
    return;
  }
  postImageInput.value = imageSrc;
  updateCoverPreview(imageSrc);
  setBlogStatus("대표 이미지 지정됨");
}

function removeSelectedEditorImage() {
  if (!selectedEditorImage) {
    return;
  }
  const image = selectedEditorImage;
  selectEditorImage(null);
  image.remove();
  setBlogStatus("본문 이미지 삭제됨");
}

function isEditableTable(table) {
  return table?.tagName?.toLowerCase() === "table" && postEditor?.contains(table);
}

function getTableResizeOverlay() {
  if (tableResizeOverlay) {
    return tableResizeOverlay;
  }

  tableResizeOverlay = document.createElement("div");
  tableResizeOverlay.className = "table-resize-overlay";
  tableResizeOverlay.hidden = true;
  tableResizeOverlay.innerHTML = `
    <span class="table-resize-hint">표 안쪽 선을 드래그해서 셀 크기 조절</span>
    <div class="table-resize-grid"></div>
    <button class="table-resize-handle table-resize-handle-top" type="button" data-table-resize="top" aria-label="표 위쪽 높이 조절"></button>
    <button class="table-resize-handle table-resize-handle-right" type="button" data-table-resize="right" aria-label="표 오른쪽 너비 조절"></button>
    <button class="table-resize-handle table-resize-handle-bottom" type="button" data-table-resize="bottom" aria-label="표 아래쪽 높이 조절"></button>
    <button class="table-resize-handle table-resize-handle-left" type="button" data-table-resize="left" aria-label="표 왼쪽 너비 조절"></button>
    <button class="table-resize-handle table-resize-handle-corner" type="button" data-table-resize="corner" aria-label="표 너비와 높이 조절"></button>
  `;
  tableResizeOverlay.addEventListener("pointerdown", startTableResizeDrag);
  document.body.appendChild(tableResizeOverlay);
  return tableResizeOverlay;
}

function updateTableResizeOverlay() {
  if (!tableResizeOverlay || tableResizeOverlay.hidden || !isEditableTable(tableResizeTarget)) {
    return;
  }

  const rect = tableResizeTarget.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) {
    hideTableResizeOverlay({ force: true });
    return;
  }
  tableResizeOverlay.style.left = `${Math.round(rect.left)}px`;
  tableResizeOverlay.style.top = `${Math.round(rect.top)}px`;
  tableResizeOverlay.style.width = `${Math.round(rect.width)}px`;
  tableResizeOverlay.style.height = `${Math.round(rect.height)}px`;
  renderTableResizeInternalHandles(tableResizeTarget, rect);
}

function requestTableResizeOverlayUpdate() {
  if (tableResizeFrame) {
    return;
  }
  tableResizeFrame = window.requestAnimationFrame(() => {
    tableResizeFrame = 0;
    updateTableResizeOverlay();
  });
}

function showTableResizeOverlay(table) {
  if (!isEditableTable(table)) {
    hideTableResizeOverlay();
    return;
  }
  tableResizeTarget = table;
  getTableResizeOverlay().hidden = false;
  updateTableResizeOverlay();
}

function hideTableResizeOverlay(options = {}) {
  if (tableResizeDrag && !options.force) {
    return;
  }
  if (tableResizeFrame) {
    window.cancelAnimationFrame(tableResizeFrame);
    tableResizeFrame = 0;
  }
  if (tableResizeOverlay) {
    tableResizeOverlay.hidden = true;
  }
  tableResizeTarget = null;
}

function getTableResizeContentWidth(table) {
  const parent = table?.parentElement || postEditor;
  if (!parent) {
    return 0;
  }
  const style = window.getComputedStyle(parent);
  const paddingX = Number.parseFloat(style.paddingLeft || "0") + Number.parseFloat(style.paddingRight || "0");
  return Math.max(240, parent.clientWidth - paddingX);
}

function getTableResizeRowCount(table) {
  return Math.max(1, table?.rows?.length || table?.querySelectorAll("tr").length || 1);
}

function getTableRows(table) {
  return [...(table?.rows || [])];
}

function getTableColumnCount(table) {
  return getTableRows(table).reduce((max, row) => {
    const count = [...row.cells].reduce((total, cell) => total + Math.max(1, cell.colSpan || 1), 0);
    return Math.max(max, count);
  }, 0);
}

function getTableColumnCells(table, columnIndex) {
  const cells = [];
  getTableRows(table).forEach((row) => {
    let logicalIndex = 0;
    [...row.cells].forEach((cell) => {
      const span = Math.max(1, cell.colSpan || 1);
      if (span === 1 && logicalIndex === columnIndex) {
        cells.push(cell);
      }
      logicalIndex += span;
    });
  });
  return cells;
}

function getTableColumnWidths(table) {
  const rows = getTableRows(table);
  const columnCount = getTableColumnCount(table);
  const widths = Array.from({ length: columnCount }, () => 0);
  const sourceRow = rows.find((row) => [...row.cells].reduce((total, cell) => total + Math.max(1, cell.colSpan || 1), 0) === columnCount) || rows[0];
  if (!sourceRow) {
    return widths;
  }

  let logicalIndex = 0;
  [...sourceRow.cells].forEach((cell) => {
    const span = Math.max(1, cell.colSpan || 1);
    const cellWidth = cell.getBoundingClientRect().width;
    const widthPerColumn = cellWidth / span;
    for (let offset = 0; offset < span; offset += 1) {
      widths[logicalIndex + offset] = widthPerColumn;
    }
    logicalIndex += span;
  });
  return widths;
}

function getTableRowHeights(table) {
  return getTableRows(table).map((row) => row.getBoundingClientRect().height);
}

function applyTableColumnWidths(table, widths) {
  if (!isEditableTable(table) || !widths.length) {
    return;
  }
  const total = widths.reduce((sum, width) => sum + Math.max(0, width), 0);
  if (total <= 0) {
    return;
  }
  widths.forEach((width, index) => {
    const percent = `${Number(((width / total) * 100).toFixed(2))}%`;
    getTableColumnCells(table, index).forEach((cell) => {
      cell.style.width = percent;
    });
  });
  table.style.tableLayout = "fixed";
}

function applyTableRowHeights(table, heights) {
  const rows = getTableRows(table);
  if (!isEditableTable(table) || !rows.length || !heights.length) {
    return;
  }
  rows.forEach((row, index) => {
    const height = Math.max(34, heights[index] || 34);
    [...row.cells].forEach((cell) => {
      cell.style.height = `${Math.round(height)}px`;
    });
  });
  const totalHeight = heights.reduce((sum, height) => sum + Math.max(34, height), 0);
  if (totalHeight > 0) {
    table.style.height = `${Math.round(totalHeight)}px`;
  }
}

function renderTableResizeInternalHandles(table, tableRect) {
  const grid = tableResizeOverlay?.querySelector(".table-resize-grid");
  if (!grid || !isEditableTable(table)) {
    return;
  }
  grid.innerHTML = "";

  const rows = getTableRows(table);
  const columnWidths = getTableColumnWidths(table);
  let columnOffset = 0;
  columnWidths.slice(0, -1).forEach((width, index) => {
    columnOffset += width;
    const handle = document.createElement("button");
    handle.type = "button";
    handle.className = "table-resize-divider table-resize-divider-column";
    handle.dataset.tableResize = "column";
    handle.dataset.tableColumnIndex = String(index);
    handle.setAttribute("aria-label", `${index + 1}열 너비 조절`);
    handle.style.left = `${Math.round(columnOffset)}px`;
    grid.appendChild(handle);
  });

  rows.slice(0, -1).forEach((row, index) => {
    const rowRect = row.getBoundingClientRect();
    const handle = document.createElement("button");
    handle.type = "button";
    handle.className = "table-resize-divider table-resize-divider-row";
    handle.dataset.tableResize = "row";
    handle.dataset.tableRowIndex = String(index);
    handle.setAttribute("aria-label", `${index + 1}행 높이 조절`);
    handle.style.top = `${Math.round(rowRect.bottom - tableRect.top)}px`;
    grid.appendChild(handle);
  });
}

function resizeTableColumnBoundary(table, boundaryIndex, deltaX, startWidths) {
  const widths = [...startWidths];
  if (!widths[boundaryIndex] || !widths[boundaryIndex + 1]) {
    return;
  }

  const minWidth = 58;
  const safeDelta = Math.max(minWidth - widths[boundaryIndex], Math.min(deltaX, widths[boundaryIndex + 1] - minWidth));
  widths[boundaryIndex] += safeDelta;
  widths[boundaryIndex + 1] -= safeDelta;
  applyTableColumnWidths(table, widths);
}

function resizeTableRowBoundary(table, boundaryIndex, deltaY, startHeights) {
  const heights = [...startHeights];
  if (!heights[boundaryIndex] || !heights[boundaryIndex + 1]) {
    return;
  }

  const minHeight = 34;
  const safeDelta = Math.max(minHeight - heights[boundaryIndex], Math.min(deltaY, heights[boundaryIndex + 1] - minHeight));
  heights[boundaryIndex] += safeDelta;
  heights[boundaryIndex + 1] -= safeDelta;
  applyTableRowHeights(table, heights);
}

function applyTableResizeDimensions(table, widthPx, heightPx) {
  if (!isEditableTable(table)) {
    return;
  }

  const maxWidth = getTableResizeContentWidth(table);
  if (Number.isFinite(widthPx) && maxWidth > 0) {
    const widthPercent = Math.min(100, Math.max(25, (widthPx / maxWidth) * 100));
    table.style.width = `${Number(widthPercent.toFixed(1))}%`;
    table.style.maxWidth = "100%";
    table.style.marginLeft = "auto";
    table.style.marginRight = "auto";
  }

  if (Number.isFinite(heightPx)) {
    const nextHeight = Math.max(96, Math.min(1200, heightPx));
    table.style.height = `${Math.round(nextHeight)}px`;
    const cellHeight = Math.max(34, Math.round(nextHeight / getTableResizeRowCount(table)));
    getTableCells(table).forEach((cell) => {
      cell.style.height = `${cellHeight}px`;
    });
  }
}

function startTableResizeDrag(event) {
  const handle = event.target?.closest?.("[data-table-resize]") || null;
  if (!handle || !tableResizeOverlay?.contains(handle)) {
    return;
  }
  const direction = handle.dataset.tableResize || "";
  if (!direction || !isEditableTable(tableResizeTarget)) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  const rect = tableResizeTarget.getBoundingClientRect();
  const columnIndex = Number(handle.dataset.tableColumnIndex);
  const rowIndex = Number(handle.dataset.tableRowIndex);
  tableResizeDrag = {
    direction,
    table: tableResizeTarget,
    startX: event.clientX,
    startY: event.clientY,
    startWidth: rect.width,
    startHeight: rect.height,
    columnIndex: Number.isFinite(columnIndex) ? columnIndex : -1,
    rowIndex: Number.isFinite(rowIndex) ? rowIndex : -1,
    startColumnWidths: getTableColumnWidths(tableResizeTarget),
    startRowHeights: getTableRowHeights(tableResizeTarget),
  };
  document.body.classList.add("is-table-resizing");
  selectEditorBlock(tableResizeTarget, { focus: false });
  window.addEventListener("pointermove", updateTableResizeDrag, { passive: false });
  window.addEventListener("pointerup", finishTableResizeDrag);
  window.addEventListener("pointercancel", finishTableResizeDrag);
}

function updateTableResizeDrag(event) {
  if (!tableResizeDrag || !isEditableTable(tableResizeDrag.table)) {
    return;
  }

  event.preventDefault();
  const {
    direction,
    table,
    startX,
    startY,
    startWidth,
    startHeight,
    columnIndex,
    rowIndex,
    startColumnWidths,
    startRowHeights,
  } = tableResizeDrag;
  if (direction === "column") {
    resizeTableColumnBoundary(table, columnIndex, event.clientX - startX, startColumnWidths);
    showTableResizeOverlay(table);
    return;
  }
  if (direction === "row") {
    resizeTableRowBoundary(table, rowIndex, event.clientY - startY, startRowHeights);
    showTableResizeOverlay(table);
    return;
  }
  const widthDelta = direction === "left" ? startX - event.clientX : event.clientX - startX;
  const heightDelta = direction === "top" ? startY - event.clientY : event.clientY - startY;
  const affectsWidth = direction === "left" || direction === "right" || direction === "corner";
  const affectsHeight = direction === "top" || direction === "bottom" || direction === "corner";
  applyTableResizeDimensions(
    table,
    affectsWidth ? startWidth + widthDelta : Number.NaN,
    affectsHeight ? startHeight + heightDelta : Number.NaN,
  );
  showTableResizeOverlay(table);
}

function finishTableResizeDrag() {
  if (!tableResizeDrag) {
    return;
  }

  const table = tableResizeDrag.table;
  tableResizeDrag = null;
  document.body.classList.remove("is-table-resizing");
  window.removeEventListener("pointermove", updateTableResizeDrag);
  window.removeEventListener("pointerup", finishTableResizeDrag);
  window.removeEventListener("pointercancel", finishTableResizeDrag);
  if (isEditableTable(table)) {
    showTableResizeOverlay(table);
    setBlogStatus("표 크기를 조절했습니다.");
  } else {
    hideTableResizeOverlay({ force: true });
  }
}

function isEditableOrgChart(chart) {
  return Boolean(chart?.classList?.contains("article-org-chart") && postEditor?.contains(chart));
}

function getOrgChartResizeOverlay() {
  if (orgChartResizeOverlay) {
    return orgChartResizeOverlay;
  }

  orgChartResizeOverlay = document.createElement("div");
  orgChartResizeOverlay.className = "org-chart-resize-overlay";
  orgChartResizeOverlay.hidden = true;
  orgChartResizeOverlay.innerHTML = `
    <span class="org-chart-resize-hint">좌우 손잡이를 드래그해 조직도 폭 조절</span>
    <button class="org-chart-resize-handle org-chart-resize-handle-left" type="button" data-org-chart-resize="left" aria-label="조직도 왼쪽 폭 조절"></button>
    <button class="org-chart-resize-handle org-chart-resize-handle-right" type="button" data-org-chart-resize="right" aria-label="조직도 오른쪽 폭 조절"></button>
  `;
  orgChartResizeOverlay.addEventListener("pointerdown", startOrgChartResizeDrag);
  document.body.appendChild(orgChartResizeOverlay);
  return orgChartResizeOverlay;
}

function updateOrgChartResizeOverlay() {
  if (!orgChartResizeOverlay || orgChartResizeOverlay.hidden || !isEditableOrgChart(orgChartResizeTarget)) {
    return;
  }

  const rect = orgChartResizeTarget.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) {
    hideOrgChartResizeOverlay({ force: true });
    return;
  }
  orgChartResizeOverlay.style.left = `${Math.round(rect.left)}px`;
  orgChartResizeOverlay.style.top = `${Math.round(rect.top)}px`;
  orgChartResizeOverlay.style.width = `${Math.round(rect.width)}px`;
  orgChartResizeOverlay.style.height = `${Math.round(rect.height)}px`;
}

function requestOrgChartResizeOverlayUpdate() {
  if (orgChartResizeFrame) {
    return;
  }
  orgChartResizeFrame = window.requestAnimationFrame(() => {
    orgChartResizeFrame = 0;
    updateOrgChartResizeOverlay();
  });
}

function showOrgChartResizeOverlay(chart) {
  if (!isEditableOrgChart(chart)) {
    hideOrgChartResizeOverlay();
    return;
  }
  orgChartResizeTarget = chart;
  getOrgChartResizeOverlay().hidden = false;
  updateOrgChartResizeOverlay();
}

function hideOrgChartResizeOverlay(options = {}) {
  if (orgChartResizeDrag && !options.force) {
    return;
  }
  if (orgChartResizeFrame) {
    window.cancelAnimationFrame(orgChartResizeFrame);
    orgChartResizeFrame = 0;
  }
  if (orgChartResizeOverlay) {
    orgChartResizeOverlay.hidden = true;
  }
  orgChartResizeTarget = null;
}

function getOrgChartResizeContentWidth(chart) {
  const parent = chart?.parentElement || postEditor;
  if (!parent) {
    return 0;
  }
  const style = window.getComputedStyle(parent);
  const paddingX = Number.parseFloat(style.paddingLeft || "0") + Number.parseFloat(style.paddingRight || "0");
  return Math.max(280, parent.clientWidth - paddingX);
}

function applyOrgChartResizeWidth(chart, widthPx) {
  if (!isEditableOrgChart(chart) || !Number.isFinite(widthPx)) {
    return;
  }

  const maxWidth = getOrgChartResizeContentWidth(chart);
  if (maxWidth <= 0) {
    return;
  }
  const widthPercent = Math.min(100, Math.max(34, (widthPx / maxWidth) * 100));
  chart.style.width = `${Number(widthPercent.toFixed(1))}%`;
  chart.style.maxWidth = "100%";
  chart.style.marginLeft = "auto";
  chart.style.marginRight = "auto";
}

function startOrgChartResizeDrag(event) {
  const handle = event.target?.closest?.("[data-org-chart-resize]") || null;
  if (!handle || !orgChartResizeOverlay?.contains(handle) || !isEditableOrgChart(orgChartResizeTarget)) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  const rect = orgChartResizeTarget.getBoundingClientRect();
  orgChartResizeDrag = {
    direction: handle.dataset.orgChartResize || "right",
    chart: orgChartResizeTarget,
    startX: event.clientX,
    startWidth: rect.width,
  };
  document.body.classList.add("is-org-chart-resizing");
  selectEditorBlock(orgChartResizeTarget, { focus: false });
  window.addEventListener("pointermove", updateOrgChartResizeDrag, { passive: false });
  window.addEventListener("pointerup", finishOrgChartResizeDrag);
  window.addEventListener("pointercancel", finishOrgChartResizeDrag);
}

function updateOrgChartResizeDrag(event) {
  if (!orgChartResizeDrag || !isEditableOrgChart(orgChartResizeDrag.chart)) {
    return;
  }

  event.preventDefault();
  const { direction, chart, startX, startWidth } = orgChartResizeDrag;
  const widthDelta = direction === "left" ? startX - event.clientX : event.clientX - startX;
  applyOrgChartResizeWidth(chart, startWidth + widthDelta);
  showOrgChartResizeOverlay(chart);
}

function finishOrgChartResizeDrag() {
  if (!orgChartResizeDrag) {
    return;
  }

  const chart = orgChartResizeDrag.chart;
  orgChartResizeDrag = null;
  document.body.classList.remove("is-org-chart-resizing");
  window.removeEventListener("pointermove", updateOrgChartResizeDrag);
  window.removeEventListener("pointerup", finishOrgChartResizeDrag);
  window.removeEventListener("pointercancel", finishOrgChartResizeDrag);
  if (isEditableOrgChart(chart)) {
    showOrgChartResizeOverlay(chart);
    setBlogStatus("조직도 폭을 조절했습니다.");
  } else {
    hideOrgChartResizeOverlay({ force: true });
  }
}

function handleEditorTableHover(event) {
  if (tableResizeDrag || orgChartResizeDrag) {
    return;
  }
  const target = getEditorTargetElement(event.target);
  const table = target?.closest("table") || null;
  if (isEditableTable(table)) {
    hideOrgChartResizeOverlay();
    showTableResizeOverlay(table);
    return;
  }
  const orgChart = target?.closest(".article-org-chart") || null;
  if (isEditableOrgChart(orgChart)) {
    hideTableResizeOverlay();
    showOrgChartResizeOverlay(orgChart);
    return;
  }
  if (selectedEditorBlock?.tagName?.toLowerCase() === "table") {
    hideOrgChartResizeOverlay();
    showTableResizeOverlay(selectedEditorBlock);
    return;
  }
  if (isEditableOrgChart(selectedEditorBlock)) {
    hideTableResizeOverlay();
    showOrgChartResizeOverlay(selectedEditorBlock);
    return;
  }
  hideTableResizeOverlay();
  hideOrgChartResizeOverlay();
}

const TABLE_STYLE_CLASS_MAP = {
  basic: "article-table",
  soft: "article-table article-table-soft",
  zebra: "article-table article-table-zebra",
  grid: "article-table article-table-grid",
  accent: "article-table article-table-accent",
  card: "article-table article-table-card",
  compact: "article-table article-table-compact",
};

const TABLE_STYLE_CLASSES = new Set(Object.values(TABLE_STYLE_CLASS_MAP).flatMap((value) => value.split(" ")));

function getRangeValue(input, fallback) {
  const value = Number(input?.value);
  if (Number.isFinite(value)) {
    return value;
  }
  return fallback;
}

function getTableStyleClass(value = "basic") {
  return TABLE_STYLE_CLASS_MAP[value] || TABLE_STYLE_CLASS_MAP.basic;
}

function getCurrentEditorTable() {
  if (selectedEditorBlock?.tagName?.toLowerCase() === "table" && postEditor?.contains(selectedEditorBlock)) {
    return selectedEditorBlock;
  }

  const selection = window.getSelection?.();
  const anchorNode = selection?.anchorNode;
  const anchorElement = anchorNode?.nodeType === Node.ELEMENT_NODE ? anchorNode : anchorNode?.parentElement;
  const table = anchorElement?.closest?.("table") || null;
  return table && postEditor?.contains(table) ? table : null;
}

function getTableStyleValue(table) {
  if (!table) {
    return tableStyleSelect?.value || "basic";
  }
  if (table.classList.contains("article-table-soft")) {
    return "soft";
  }
  if (table.classList.contains("article-table-zebra")) {
    return "zebra";
  }
  if (table.classList.contains("article-table-grid")) {
    return "grid";
  }
  if (table.classList.contains("article-table-accent")) {
    return "accent";
  }
  if (table.classList.contains("article-table-card")) {
    return "card";
  }
  if (table.classList.contains("article-table-compact")) {
    return "compact";
  }
  return "basic";
}

function getTableControlValues() {
  return {
    style: tableStyleSelect?.value || "basic",
    width: Math.min(100, Math.max(50, getRangeValue(tableWidthRange, 100))),
    padding: Math.min(28, Math.max(6, getRangeValue(tablePaddingRange, 14))),
    rowHeight: Math.min(96, Math.max(36, getRangeValue(tableRowHeightRange, 52))),
  };
}

function getTableCells(table) {
  return [...(table?.querySelectorAll("th, td") || [])];
}

function applyTableControlsToTable(table, options = {}) {
  if (!table) {
    if (!options.silent) {
      setBlogStatus("표 설정은 다음 삽입 표에 적용됩니다.");
    }
    return false;
  }

  const values = getTableControlValues();
  table.classList.add("article-table");
  TABLE_STYLE_CLASSES.forEach((className) => table.classList.remove(className));
  getTableStyleClass(values.style).split(" ").forEach((className) => table.classList.add(className));
  if (tableWidthRange) {
    table.style.width = `${values.width}%`;
    table.style.maxWidth = "100%";
    table.style.marginLeft = "auto";
    table.style.marginRight = "auto";
  }
  if (tablePaddingRange || tableRowHeightRange) {
    getTableCells(table).forEach((cell) => {
      if (tablePaddingRange) {
        cell.style.padding = `${values.padding}px`;
      }
      if (tableRowHeightRange) {
        cell.style.height = `${values.rowHeight}px`;
      }
    });
  }
  if (tableResizeTarget === table) {
    requestTableResizeOverlayUpdate();
  }
  if (!options.silent) {
    setBlogStatus("표 스타일을 수정했습니다.");
  }
  return true;
}

function syncTableControlsFromSelection() {
  const table = getCurrentEditorTable();
  if (!table) {
    return;
  }

  const firstCell = table.querySelector("th, td");
  const widthMatch = String(table.style.width || "").match(/(\d+)/);
  const paddingMatch = String(firstCell?.style.padding || "").match(/(\d+)/);
  const heightMatch = String(firstCell?.style.height || "").match(/(\d+)/);
  if (tableStyleSelect) {
    tableStyleSelect.value = getTableStyleValue(table);
  }
  if (tableWidthRange && widthMatch) {
    tableWidthRange.value = String(Math.min(100, Math.max(50, Number(widthMatch[1]))));
  }
  if (tablePaddingRange && paddingMatch) {
    tablePaddingRange.value = String(Math.min(28, Math.max(6, Number(paddingMatch[1]))));
  }
  if (tableRowHeightRange && heightMatch) {
    tableRowHeightRange.value = String(Math.min(96, Math.max(36, Number(heightMatch[1]))));
  }
}

function insertTable() {
  const rows = Math.min(12, Math.max(1, Number(tableRowsInput.value) || 3));
  const cols = Math.min(8, Math.max(1, Number(tableColsInput.value) || 3));
  const values = getTableControlValues();
  const existingTables = new Set(postEditor.querySelectorAll("table"));
  const cellStyle = `padding: ${values.padding}px; height: ${values.rowHeight}px`;
  const cells = Array.from({ length: rows }, (_, rowIndex) => {
    const tag = rowIndex === 0 ? "th" : "td";
    return `<tr>${Array.from({ length: cols }, () => `<${tag} style="${cellStyle}">내용</${tag}>`).join("")}</tr>`;
  }).join("");
  execEditorCommand(
    "insertHTML",
    `<table class="${getTableStyleClass(values.style)}" style="width: ${values.width}%; max-width: 100%; margin-left: auto; margin-right: auto"><tbody>${cells}</tbody></table><p><br></p>`,
  );
  window.setTimeout(() => {
    const insertedTable = [...postEditor.querySelectorAll("table")].find((table) => !existingTables.has(table)) || null;
    if (insertedTable) {
      selectEditorBlock(insertedTable);
      syncTableControlsFromSelection();
    }
  }, 0);
}

function insertLink() {
  const url = normalizeHttpUrl(prompt("연결할 URL을 입력하세요."));
  if (!url) {
    showToast("http 또는 https URL만 링크로 사용할 수 있습니다.");
    return;
  }

  const selectionText = window.getSelection?.().toString().trim() || "";
  if (selectionText) {
    execEditorCommand("createLink", url);
    setBlogStatus("링크를 삽입했습니다.");
    return;
  }

  const name = prompt("본문에 표시할 링크 이름을 입력하세요.", getDefaultLinkName(url));
  if (name === null) {
    return;
  }
  const label = name.trim() || getDefaultLinkName(url);
  execEditorCommand("insertHTML", `<a href="${escapeAttribute(url)}">${escapeHtml(label)}</a>`);
  setBlogStatus("링크를 삽입했습니다.");
}

function insertLinkPreview(rawUrl = "") {
  const url = normalizeHttpUrl(rawUrl || prompt("첨부할 URL을 입력하세요."));
  if (!url) {
    showToast("http 또는 https URL만 첨부할 수 있습니다.");
    return false;
  }

  const name = prompt("미리보기에 표시할 이름을 입력하세요.", getDefaultLinkName(url));
  if (name === null) {
    return false;
  }

  clearEditorBlockSelection();
  selectEditorImage(null);
  execEditorCommand("insertHTML", buildLinkPreviewHtml(url, name));
  setBlogStatus("URL 미리보기를 삽입했습니다.");
  return true;
}

function insertQuoteBlock() {
  execEditorCommand(
    "insertHTML",
    '<blockquote class="article-quote"><p>인용하거나 강조할 문장을 입력하세요.</p><small>출처 또는 참고 메모</small></blockquote><p><br></p>',
  );
  setBlogStatus("인용문을 삽입했습니다.");
}

function getArticleBlock(type) {
  if (type === "toc") {
    return [
      '<div class="article-toc-block">',
      '<div class="article-toc-head">',
      '<span class="article-toc-eyebrow">CONTENTS</span>',
      '<strong class="article-toc-title">읽기 전에 보는 흐름</strong>',
      '<small class="article-toc-note">핵심 내용을 빠르게 훑고 필요한 위치로 이동할 수 있도록 정리합니다.</small>',
      "</div>",
      "<ol>",
      "<li>가장 먼저 확인할 핵심 내용을 입력하세요.</li>",
      "<li>세부 기준이나 진행 순서를 입력하세요.</li>",
      "<li>마지막으로 실행 경로나 참고 사항을 입력하세요.</li>",
      "</ol>",
      "</div><p><br></p>",
    ].join("");
  }

  if (type === "summary") {
    return [
      '<div class="article-summary-box">',
      "<h3>핵심 요약</h3>",
      "<ul>",
      "<li><strong>대상</strong> 이 글을 확인해야 하는 구성원 또는 상황을 적습니다.</li>",
      "<li><strong>결론</strong> 가장 중요한 기준과 실행 방법을 한 문장으로 정리합니다.</li>",
      "<li><strong>확인 경로</strong> 그룹웨어, Google Drive, 담당 채널 등 실제 이동 경로를 남깁니다.</li>",
      "</ul>",
      "</div><p><br></p>",
    ].join("");
  }

  if (type === "fact") {
    return [
      '<blockquote class="article-fact">',
      "<p><strong>적용 기준</strong> 대상, 기간, 예외 조건을 이곳에 짧게 정리합니다.</p>",
      "<p><strong>담당 채널</strong> 문의할 부서 또는 메일/그룹웨어 경로를 입력합니다.</p>",
      "</blockquote><p><br></p>",
    ].join("");
  }

  if (type === "cards") {
    return [
      '<div class="article-card-grid">',
      '<div class="article-card"><strong>먼저 확인할 자료</strong><p>가장 많이 찾는 문서나 안내 글을 소개합니다.</p><span class="article-card-meta">#가이드 · 3분</span></div>',
      '<div class="article-card"><strong>함께 보면 좋은 글</strong><p>관련 제도, 서식, FAQ를 연결합니다.</p><span class="article-card-meta">#연관글 · 업데이트</span></div>',
      '<div class="article-card"><strong>신청/다운로드</strong><p>실제 업무로 이어지는 링크나 파일 위치를 정리합니다.</p><span class="article-card-meta">#실행경로</span></div>',
      "</div><p><br></p>",
    ].join("");
  }

  if (type === "figure") {
    return [
      '<figure class="article-figure">',
      '<div class="article-inline-note">이미지를 먼저 삽입한 뒤 선택하고 캡션 버튼을 누르면, 이 형태로 정돈됩니다.</div>',
      "<figcaption>이미지 설명 또는 참고 기준을 입력합니다.</figcaption>",
      "</figure><p><br></p>",
    ].join("");
  }

  if (type === "checklist") {
    return [
      '<div class="article-checklist">',
      "<h3>체크리스트</h3>",
      "<ul>",
      "<li>대상자와 적용 기준을 확인했습니다.</li>",
      "<li>신청 경로, 승인자, 처리 기간을 입력했습니다.</li>",
      "<li>예외 상황과 문의 채널을 함께 안내했습니다.</li>",
      "</ul>",
      "</div><p><br></p>",
    ].join("");
  }

  if (type === "cta") {
    return [
      '<div class="article-cta">',
      "<strong>바로 확인할 것</strong>",
      "<p>실제 업무 화면, 신청 링크, 담당자 연락처처럼 구성원이 다음 행동으로 이동할 수 있는 정보를 배치합니다.</p>",
      "</div><p><br></p>",
    ].join("");
  }

  return "";
}

function insertArticleDivider() {
  const allowedStyles = new Set(["soft", "dots", "gradient", "tape", "wave"]);
  const style = allowedStyles.has(dividerStyleSelect?.value) ? dividerStyleSelect.value : "soft";
  const labels = {
    soft: "",
    dots: "",
    gradient: "",
    tape: "HR Lounge",
    wave: "",
  };
  const label = labels[style] ? `<span>${escapeHtml(labels[style])}</span>` : "<span></span>";
  execEditorCommand("insertHTML", `<div class="article-divider article-divider-${style}">${label}</div><p><br></p>`);
  setBlogStatus("구분선을 삽입했습니다.");
}

function wrapSelectedImageWithCaption() {
  if (!selectedEditorImage || !postEditor.contains(selectedEditorImage)) {
    return false;
  }

  const figure = document.createElement("figure");
  figure.className = "article-figure";
  const image = selectedEditorImage.cloneNode(false);
  image.classList.remove("is-selected");
  image.style.maxWidth = "100%";
  image.style.height = "auto";
  image.style.display = "block";
  image.style.marginLeft = "auto";
  image.style.marginRight = "auto";
  const caption = document.createElement("figcaption");
  caption.textContent = "이미지 설명 또는 참고 기준을 입력합니다.";
  figure.append(image, caption);

  const parent = selectedEditorImage.parentElement;
  if (
    parent &&
    parent.tagName.toLowerCase() === "p" &&
    parent.children.length === 1 &&
    parent.textContent.trim() === ""
  ) {
    parent.replaceWith(figure);
  } else {
    selectedEditorImage.replaceWith(figure);
  }

  selectEditorImage(figure.querySelector("img"));
  setBlogStatus("이미지 캡션 블록 적용됨");
  return true;
}

function insertArticleBlock(type) {
  if (type === "figure" && wrapSelectedImageWithCaption()) {
    return;
  }
  const block = getArticleBlock(type);
  if (!block) {
    return;
  }
  execEditorCommand("insertHTML", block);
  setBlogStatus("아티클 블록 삽입됨");
}

function getArticleTemplate(type = "guide") {
  if (type === "premium") {
    return [
      '<p class="article-lead">구성원이 글을 열었을 때 바로 이해할 수 있도록 결론, 적용 대상, 실행 경로를 먼저 보여주는 프리미엄 HR 아티클 템플릿입니다.</p>',
      '<div class="article-pill-row"><span class="article-pill">#핵심요약</span><span class="article-pill">#실행경로</span><span class="article-pill">#FAQ</span></div>',
      "<h2>추천 콘텐츠 먼저 보기</h2>",
      '<div class="article-card-grid">',
      '<div class="article-card"><strong>신규 입사 첫 주 체크리스트</strong><p>계정, 좌석, 기본 제도, 필수 교육을 빠르게 확인합니다.</p><span class="article-card-meta">#온보딩 · 5분</span></div>',
      '<div class="article-card"><strong>연차와 복리후생 기준</strong><p>자주 묻는 휴가, 복지, 경조사 기준을 한 번에 모았습니다.</p><span class="article-card-meta">#HR Guide</span></div>',
      '<div class="article-card"><strong>서식과 신청 경로</strong><p>증명서, 비품, 문의 양식처럼 바로 실행할 항목을 연결합니다.</p><span class="article-card-meta">#Help Desk</span></div>',
      "</div>",
      '<div class="article-summary-box">',
      "<h3>이 글에서 바로 확인할 수 있는 것</h3>",
      "<ul>",
      "<li><strong>누가 봐야 하나요?</strong> 해당 제도나 업무 도구를 처음 이용하는 구성원입니다.</li>",
      "<li><strong>무엇을 해결하나요?</strong> 기준 확인부터 신청, 승인, 결과 확인까지의 흐름을 정리합니다.</li>",
      "<li><strong>어디로 이동하나요?</strong> 그룹웨어, Google Drive, 담당 채널 등 실제 경로를 연결합니다.</li>",
      "</ul>",
      "</div>",
      "<h2>왜 필요한가요?</h2>",
      "<p>좋은 HR 글은 제도 설명에서 끝나지 않고, 구성원이 다음 행동을 바로 결정할 수 있게 도와야 합니다. 먼저 결론을 제시하고, 이어서 적용 기준과 예외 상황을 분리해 설명하면 반복 문의를 줄일 수 있습니다.</p>",
      "<p>특히 온보딩, 연차, 복리후생, 비품 요청처럼 자주 찾는 주제는 글의 첫 화면에서 대상, 처리 기간, 신청 경로가 보이도록 구성하는 것이 좋습니다.</p>",
      "<h2>핵심 기준 한눈에 보기</h2>",
      "<table><tbody><tr><th>구분</th><th>확인할 내용</th><th>담당/경로</th></tr><tr><td>대상</td><td>해당 제도나 도구를 이용할 수 있는 구성원 범위</td><td>People Team</td></tr><tr><td>신청</td><td>필요 서류, 입력 항목, 승인자</td><td>Groupware 또는 Google Form</td></tr><tr><td>처리</td><td>일반 처리 기간과 예외 상황</td><td>담당 채널</td></tr></tbody></table>",
      '<blockquote class="article-fact"><p><strong>운영 기준</strong> 본문에서는 최신 기준일, 담당 부서, 예외 처리 방식을 함께 남겨야 합니다.</p><p><strong>업데이트</strong> 기준이 바뀌면 제목보다 본문 상단과 표를 먼저 수정합니다.</p></blockquote>',
      "<h2>실무 적용 흐름</h2>",
      '<div class="article-checklist">',
      "<h3>발행 전 체크리스트</h3>",
      "<ul>",
      "<li>첫 문단에 결론과 대상이 들어가 있습니다.</li>",
      "<li>표에는 기준, 신청 경로, 처리 기간이 나뉘어 있습니다.</li>",
      "<li>본문 이미지에는 캡션이 있어 맥락을 바로 알 수 있습니다.</li>",
      "<li>마지막에는 문의 채널이나 다음 행동이 있습니다.</li>",
      "</ul>",
      "</div>",
      "<h2>이미지와 참고 자료 배치</h2>",
      '<figure class="article-figure"><div class="article-inline-note">본문 이미지를 삽입한 뒤 이미지를 선택하고 캡션 버튼을 누르면, 이미지와 설명이 기사형 블록으로 정돈됩니다.</div><figcaption>예: 그룹웨어 신청 화면, Google Drive 폴더 위치, 행사 사진 설명</figcaption></figure>',
      '<div class="article-cta"><strong>마지막 안내</strong><p>글 끝에는 신청 링크, 다운로드 경로, 문의 채널 중 하나를 반드시 남겨 구성원이 바로 행동할 수 있게 합니다.</p></div>',
    ].join("");
  }

  if (type === "faq") {
    return [
      "<h2>먼저 확인할 답변</h2>",
      "<p>구성원이 가장 자주 묻는 질문에 대한 결론을 첫 문단에 명확히 작성합니다.</p>",
      getArticleBlock("summary"),
      "<h2>상세 기준</h2>",
      "<p>대상, 신청 경로, 처리 기간, 담당자를 나누어 설명합니다.</p>",
      "<table><tbody><tr><th>질문</th><th>답변</th></tr><tr><td>어디에서 신청하나요?</td><td>그룹웨어 또는 담당 부서 안내 링크를 입력합니다.</td></tr><tr><td>처리 기간은 얼마나 걸리나요?</td><td>일반적인 처리 기준과 예외 상황을 적습니다.</td></tr></tbody></table>",
      getArticleBlock("fact"),
      "<h2>추가 문의</h2>",
      "<p>답변으로 해결되지 않는 경우 문의할 채널과 담당자를 남깁니다.</p>",
    ].join("");
  }

  return [
    "<h2>이 글을 읽어야 하는 이유</h2>",
    "<p>구성원이 이 글에서 무엇을 해결할 수 있는지 한 문단으로 설명합니다.</p>",
    getArticleBlock("summary"),
    "<h2>핵심 기준</h2>",
    "<p>제도나 업무 도구의 대상, 기준, 예외 사항을 이해하기 쉽게 정리합니다.</p>",
    "<table><tbody><tr><th>구분</th><th>내용</th><th>확인 경로</th></tr><tr><td>대상</td><td>적용되는 구성원 또는 상황을 입력합니다.</td><td>관련 문서 링크</td></tr><tr><td>절차</td><td>신청 또는 확인 순서를 입력합니다.</td><td>그룹웨어 메뉴</td></tr></tbody></table>",
    getArticleBlock("fact"),
    "<h2>실행 체크리스트</h2>",
    getArticleBlock("checklist"),
  ].join("");
}

function applyArticleTemplate(type) {
  const currentText = stripHtml(postEditor.innerHTML).trim();
  if (currentText && !confirm("현재 본문을 선택한 템플릿으로 교체할까요?")) {
    return;
  }
  postEditor.innerHTML = getArticleTemplate(type);
  postEditor.focus();
  setBlogStatus("템플릿 적용됨");
}

function getDraftPost() {
  const summary = postSummaryInput.value.trim();
  const classification = getSelectedClassification();
  return {
    id: currentPostId || "draft",
    category: currentBlogCategory,
    title: postTitleInput.value.trim() || "제목 없음",
    summary,
    author: postAuthorInput.value.trim() || "People Team",
    tags: normalizeTags(postTagsInput.value, []),
    group: classification.group,
    subcategory: classification.subcategory,
    note: classification.note,
    takeaways: [],
    relatedPostIds: normalizeRelatedPostIds(getSelectedRelatedPostIds(), currentPostId || ""),
    image: isSafeImageUrl(postImageInput.value.trim()) ? postImageInput.value.trim() : "",
    updatedAt: new Date().toISOString(),
    content: sanitizeHtml(postEditor.innerHTML),
  };
}

function renderEditorPreview() {
  if (!editorPreview) {
    return;
  }

  const draft = getDraftPost();
  const image = getPostThumbnailImage(draft);
  const articleBody = prepareArticleBody(draft.content);
  const articleToc = renderArticleAutoToc(articleBody, draft);
  const tags = getPostTags(draft);
  const relatedPosts = getRelatedPosts(draft);
  editorPreview.hidden = false;
  editorPreview.innerHTML = `
    <div class="preview-label">미리보기</div>
    <article class="article-view is-preview">
      <div class="article-kicker">${escapeHtml(getCategoryBySlug(draft.category).label)} · ${escapeHtml(getPostGroup(draft))} · ${escapeHtml(getPostSubcategory(draft))}</div>
      <h1>${escapeHtml(draft.title)}</h1>
      <p class="post-detail-summary">${escapeHtml(draft.summary || "")}</p>
      <div class="article-meta">
        <span>${escapeHtml(getPostAuthor(draft))}</span>
        <time datetime="${escapeHtml(draft.updatedAt)}">${formatPostDate(draft.updatedAt)}</time>
        <span>${estimateReadingMinutes(draft.content)}</span>
      </div>
      <div class="article-tags">${tags.map((tag) => `<span>#${escapeHtml(tag)}</span>`).join("")}</div>
      ${image ? `<img class="post-detail-cover" src="${escapeHtml(image)}" alt="" />` : ""}
      ${articleBody.sourceNoteHtml || ""}
      ${articleToc}
      <div class="post-detail-body">${articleBody.html}</div>
      ${
        relatedPosts.length
          ? `<section class="article-related"><h2>함께 보면 좋은 글</h2>${relatedPosts
              .map(
                (item) => `<button type="button" data-related-post="${escapeHtml(item.id)}">
                  <span>${escapeHtml(item.title)}</span>
                  <small>${escapeHtml(item.summary || "")}</small>
                </button>`,
              )
              .join("")}</section>`
          : ""
      }
    </article>
  `;
  bindArticleTocLinks(editorPreview);
  bindInlineImageZoom(editorPreview);
  editorPreview.scrollIntoView({ behavior: "smooth", block: "start" });
}

function bindBlogListControls() {
  blogListSearchInput?.addEventListener("input", () => {
    activeBlogListQuery = blogListSearchInput.value.trim();
    renderPostList();
  });

  blogSortButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeBlogSort = button.dataset.blogSort || "basic";
      renderPostList();
    });
  });

  detailSearchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = detailSearchInput?.value || "";
    runGlobalBlogSearch(query);
  });
  detailSearchInput?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return;
    }
    event.preventDefault();
    runGlobalBlogSearch(detailSearchInput.value);
  });
}

function bindEditorTools() {
  document.querySelectorAll(".editor-toolbar [data-command]").forEach((button) => {
    button.addEventListener("click", () => execEditorCommand(button.dataset.command, button.dataset.value || null));
  });

  fontFamilySelect.addEventListener("change", () => execEditorCommand("fontName", fontFamilySelect.value));
  fontSizeSelect.addEventListener("change", () => execEditorCommand("fontSize", fontSizeSelect.value));
  blockFormatSelect?.addEventListener("change", () => applyBlockFormat(blockFormatSelect.value));
  headingHighlightSelect?.addEventListener("mousedown", rememberEditorSelection);
  headingHighlightSelect?.addEventListener("focus", rememberEditorSelection);
  headingHighlightSelect?.addEventListener("change", () => applyHeadingHighlight(headingHighlightSelect.value));
  textColorInput.addEventListener("input", () => execEditorCommand("foreColor", textColorInput.value));
  highlightColorInput.addEventListener("input", () => execEditorCommand("hiliteColor", highlightColorInput.value));
  postGroupSelect?.addEventListener("change", () => {
    renderSubcategoryOptions(currentBlogCategory, postGroupSelect.value);
    setBlogStatus("분류 수정 중");
  });
  postSubcategorySelect?.addEventListener("change", () => {
    setBlogStatus("분류 수정 중");
  });
  insertTableButton.addEventListener("click", insertTable);
  [tableStyleSelect, tableWidthRange, tablePaddingRange, tableRowHeightRange].forEach((control) => {
    control?.addEventListener("input", () => applyTableControlsToTable(getCurrentEditorTable()));
    control?.addEventListener("change", () => applyTableControlsToTable(getCurrentEditorTable()));
  });
  insertLinkButton.addEventListener("click", insertLink);
  insertLinkPreviewButton?.addEventListener("click", () => insertLinkPreview());
  insertQuoteButton?.addEventListener("click", insertQuoteBlock);
  insertSummaryBoxButton.addEventListener("click", () => insertArticleBlock("summary"));
  insertFactBoxButton.addEventListener("click", () => insertArticleBlock("fact"));
  insertCardListButton.addEventListener("click", () => insertArticleBlock("cards"));
  insertTocBlockButton.addEventListener("click", () => insertArticleBlock("toc"));
  insertFigureBlockButton.addEventListener("click", () => insertArticleBlock("figure"));
  insertChecklistButton.addEventListener("click", () => insertArticleBlock("checklist"));
  insertCtaBoxButton.addEventListener("click", () => insertArticleBlock("cta"));
  insertDividerButton?.addEventListener("click", insertArticleDivider);
  coverUploadButton.addEventListener("click", () => coverImageFileInput.click());
  coverImageFileInput.addEventListener("change", () => {
    const file = coverImageFileInput.files && coverImageFileInput.files[0];
    if (file) {
      handleCoverImageFile(file);
    }
  });
  clearCoverButton.addEventListener("click", () => {
    postImageInput.value = "";
    updateCoverPreview("");
    setBlogStatus("대표 이미지 삭제됨");
  });
  insertImageButton.addEventListener("click", () => editorImageFileInput.click());
  editorImageFileInput.addEventListener("change", () => {
    const file = editorImageFileInput.files && editorImageFileInput.files[0];
    if (file) {
      handleEditorImageFile(file);
    }
  });
  postEditor.addEventListener("mousemove", handleEditorTableHover);
  postEditor.addEventListener("mouseleave", () => {
    if (selectedEditorBlock?.tagName?.toLowerCase() === "table") {
      hideOrgChartResizeOverlay();
      showTableResizeOverlay(selectedEditorBlock);
      return;
    }
    if (isEditableOrgChart(selectedEditorBlock)) {
      hideTableResizeOverlay();
      showOrgChartResizeOverlay(selectedEditorBlock);
      return;
    }
    hideTableResizeOverlay();
    hideOrgChartResizeOverlay();
  });
  postEditor.addEventListener("mousedown", (event) => {
    const block = getSelectableEditorBlock(event.target);
    if (!shouldSelectEditorBlock(event, block)) {
      return;
    }
    event.preventDefault();
    selectEditorBlock(block);
  });
  postEditor.addEventListener("click", (event) => {
    rememberEditorSelection();
    const target = getEditorTargetElement(event.target);
    const image = target?.closest("img");
    if (image && postEditor.contains(image)) {
      selectEditorImage(image);
      return;
    }
    const block = getSelectableEditorBlock(event.target);
    if (shouldSelectEditorBlock(event, block)) {
      event.preventDefault();
      selectEditorBlock(block);
      return;
    }
    window.setTimeout(syncTableControlsFromSelection, 0);
    clearEditorBlockSelection();
    selectEditorImage(null);
  });
  ["keyup", "mouseup", "input", "focus"].forEach((eventName) => {
    postEditor.addEventListener(eventName, rememberEditorSelection);
  });
  postEditor.addEventListener("keyup", syncTableControlsFromSelection);
  window.addEventListener("scroll", requestTableResizeOverlayUpdate, true);
  window.addEventListener("scroll", requestOrgChartResizeOverlayUpdate, true);
  window.addEventListener("resize", requestTableResizeOverlayUpdate);
  window.addEventListener("resize", requestOrgChartResizeOverlayUpdate);
  postEditor.addEventListener("paste", (event) => {
    const pastedText = event.clipboardData?.getData("text/plain")?.trim() || "";
    if (!pastedText || /\s/.test(pastedText)) {
      return;
    }
    const url = normalizeHttpUrl(pastedText);
    if (!url) {
      return;
    }
    const name = prompt("붙여넣은 URL의 표시 이름을 입력하세요.", getDefaultLinkName(url));
    if (name === null) {
      return;
    }
    event.preventDefault();
    clearEditorBlockSelection();
    selectEditorImage(null);
    execEditorCommand("insertHTML", buildLinkPreviewHtml(url, name));
    setBlogStatus("붙여넣은 URL을 미리보기로 변환했습니다.");
  });
  postEditor.addEventListener("keydown", (event) => {
    if (!selectedEditorBlock) {
      return;
    }
    if (event.key === "Delete" || event.key === "Backspace") {
      event.preventDefault();
      removeSelectedEditorBlock();
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      clearEditorBlockSelection();
    }
  });
  imageWidthRange.addEventListener("input", () => {
    if (!selectedEditorImage) {
      return;
    }
    selectedEditorImage.style.width = `${imageWidthRange.value}%`;
    selectedEditorImage.style.maxWidth = "100%";
    selectedEditorImage.style.height = "auto";
    selectedEditorImage.style.display = "block";
    selectedEditorImage.style.marginLeft = "auto";
    selectedEditorImage.style.marginRight = "auto";
    setBlogStatus("이미지 크기 수정 중");
  });
  setCoverFromEditorButton.addEventListener("click", setCoverFromSelectedImage);
  removeEditorImageButton.addEventListener("click", removeSelectedEditorImage);
  document.querySelectorAll("[data-template]").forEach((button) => {
    button.addEventListener("click", () => applyArticleTemplate(button.dataset.template));
  });
  previewPostButton.addEventListener("click", renderEditorPreview);
  savePostButton.addEventListener("click", saveCurrentPost);
  deletePostButton.addEventListener("click", deleteCurrentPost);
  deleteDetailPostButton?.addEventListener("click", deleteCurrentPost);
  newPostButton.addEventListener("click", startNewPost);
  siteSettingsButton?.addEventListener("click", showSiteSettingsPanel);
  siteSettingsPanel?.addEventListener("click", (event) => {
    if (event.target.closest("[data-settings-save]")) {
      saveSiteSettingsFromPanel();
      return;
    }
    if (event.target.closest("[data-settings-reset]")) {
      resetSiteSettings();
      return;
    }
    if (event.target.closest("[data-export-blog-data]")) {
      exportBlogDataFile();
      return;
    }
    if (event.target.closest("[data-settings-cancel]")) {
      hideSiteSettingsPanel();
    }
  });
  siteSettingsPanel?.addEventListener("input", () => {
    window.clearTimeout(saveTimer);
    setBlogStatus("사이트 설정 수정 중");
    saveTimer = window.setTimeout(syncEditorAccessStatus, 1800);
  });
  siteSettingsPanel?.addEventListener("change", (event) => {
    const popularPostCheckbox = event.target.closest("[data-popular-post]");
    if (popularPostCheckbox && popularPostCheckbox.checked) {
      const checkedCount = siteSettingsPanel.querySelectorAll("[data-popular-post]:checked").length;
      if (checkedCount > 3) {
        popularPostCheckbox.checked = false;
        showToast("TOP3 인기글은 최대 3개까지 선택할 수 있습니다.");
      }
      return;
    }

    const checkbox = event.target.closest("[data-featured-post]");
    if (!checkbox || !checkbox.checked) {
      return;
    }
    const category = checkbox.dataset.featuredCategory;
    const checkedCount = siteSettingsPanel.querySelectorAll(`[data-featured-post][data-featured-category="${category}"]:checked`).length;
    if (checkedCount > 3) {
      checkbox.checked = false;
      showToast("Featured Articles는 카테고리별 최대 3개까지 선택할 수 있습니다.");
    }
  });
  const openCurrentPostEditor = () => {
    const post = getCurrentPost();
    if (!post) {
      return;
    }
    renderEditor(post);
    showEditorPanel();
  };
  editPostButton.addEventListener("click", () => {
    if (!requestEditorAccess(openCurrentPostEditor)) {
      return;
    }
    openCurrentPostEditor();
  });
  closeDetailButton.addEventListener("click", () => {
    currentPostId = null;
    window.location.hash = getPostListReturnHash();
  });
  postBackButton.addEventListener("click", goBackFromPostDetail);
  cancelEditButton.addEventListener("click", () => {
    hideEditorPanel();
    if (window.location.hash.startsWith("#post/") && currentPostId) {
      showPostPage(currentPostId);
      return;
    }
    renderPostDetail(getCurrentPost());
  });

  [postTitleInput, postSummaryInput, postAuthorInput, postTagsInput, postImageInput, postEditor].forEach((input) => {
    input.addEventListener("input", () => {
      window.clearTimeout(saveTimer);
      setBlogStatus("수정 중");
      saveTimer = window.setTimeout(syncEditorAccessStatus, 1800);
    });
  });
  relatedPostOptions?.addEventListener("change", () => {
    window.clearTimeout(saveTimer);
    setBlogStatus("추천 글 수정 중");
    saveTimer = window.setTimeout(syncEditorAccessStatus, 1800);
  });

  updateCoverPreview(postImageInput.value);
  updateImageToolState();
  isEditorUnlocked = readEditorUnlockState();
  syncEditorAccessStatus();
}

function renderNavDropdowns() {
  document.querySelectorAll(".nav-item").forEach((item) => {
    const link = item.querySelector("[data-blog-link]");
    const dropdown = item.querySelector(".nav-dropdown");
    if (!link || !dropdown) {
      return;
    }

    const category = getCategoryBySlug(link.dataset.blogLink);
    const groups = getCategoryTaxonomy(category.slug).slice(0, 5);
    dropdown.innerHTML = [
      ...groups.map((group) => {
        const firstItem = group.items[0];
        const href = buildBlogHash(category.slug, group.label);
        return `<a href="${href}">
          <span>${escapeHtml(group.label)}</span>
          <small>${escapeHtml(firstItem?.title || firstItem?.note || "세부 항목 보기")}</small>
        </a>`;
      }),
      `<a class="nav-dropdown-all" href="#blog/${escapeAttribute(category.slug)}">${escapeHtml(category.label)} 전체 글</a>`,
    ].join("");
  });
}

function updateBlogNavState() {
  document.querySelectorAll("[data-blog-link]").forEach((link) => {
    const isSelected = !activeBlogSearchQuery && link.dataset.blogLink === currentBlogCategory;
    link.setAttribute("aria-current", isSelected ? "page" : "false");
  });
}

function showBlogPage(slug, topic = "all", subtopic = "all") {
  const category = getCategoryBySlug(slug);
  activeBlogSearchQuery = "";
  resetBlogListQuery();
  currentBlogCategory = category.slug;
  blogPage.dataset.category = category.slug;
  activeBlogTopic = topic || "all";
  activeBlogSubtopic = subtopic || "all";
  expandBlogCategory(category.slug);
  normalizeActiveFolderState();
  document.querySelectorAll("main > section:not(#blog-page)").forEach((section) => {
    section.hidden = true;
  });
  blogPage.hidden = false;
  blogPage.classList.remove("is-article-mode", "is-search-mode");
  document.body.classList.add("is-blog-mode");
  renderCurrentBlogHeading();
  currentPostId = null;
  hideEditorPanel();
  hideSiteSettingsPanel();
  renderPostDetail(null);
  renderBlogCategories();
  renderPostList();
  updateBlogNavState();
  requestMainScrollResponse();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showBlogSearchResults(query) {
  const searchQuery = String(query || "").trim();
  if (!searchQuery) {
    document.querySelector("#quick")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  activeBlogSearchQuery = searchQuery;
  resetBlogListQuery();
  activeBlogTopic = "all";
  activeBlogSubtopic = "all";
  currentPostId = null;
  document.querySelectorAll("main > section:not(#blog-page)").forEach((section) => {
    section.hidden = true;
  });
  blogPage.hidden = false;
  blogPage.dataset.category = "search";
  blogPage.classList.remove("is-article-mode");
  blogPage.classList.add("is-search-mode");
  document.body.classList.add("is-blog-mode");
  hideEditorPanel();
  hideSiteSettingsPanel();
  renderPostDetail(null);
  renderBlogCategories();
  renderSearchBlogHeading();
  renderPostList();
  updateBlogNavState();
  requestMainScrollResponse();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showPostPage(postId) {
  const post = blogState.posts.find((item) => item.id === postId);
  if (!post) {
    showToast("글을 찾을 수 없습니다.");
    showBlogPage(currentBlogCategory);
    return;
  }

  activeBlogSearchQuery = "";
  currentPostId = post.id;
  currentBlogCategory = post.category;
  blogPage.dataset.category = post.category;
  activeBlogTopic = getPostGroup(post);
  activeBlogSubtopic = getPostSubcategory(post);
  expandBlogCategory(post.category);
  document.querySelectorAll("main > section:not(#blog-page)").forEach((section) => {
    section.hidden = true;
  });
  blogPage.hidden = false;
  blogPage.classList.remove("is-search-mode");
  blogPage.classList.add("is-article-mode");
  document.body.classList.add("is-blog-mode");
  renderCurrentBlogHeading();
  hideEditorPanel();
  hideSiteSettingsPanel();
  renderBlogCategories();
  renderPostList();
  renderPostDetail(post);
  updateBlogNavState();
  requestMainScrollResponse();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showLandingPage() {
  activeBlogSearchQuery = "";
  document.querySelectorAll("main > section:not(#blog-page)").forEach((section) => {
    section.hidden = false;
  });
  blogPage.hidden = true;
  delete blogPage.dataset.category;
  blogPage.classList.remove("is-article-mode", "is-search-mode");
  document.body.classList.remove("is-blog-mode");
  hideEditorPanel();
  hideSiteSettingsPanel();
  document.querySelectorAll("[data-blog-link]").forEach((link) => link.setAttribute("aria-current", "false"));
  requestMainScrollResponse();
}

function handleRoute() {
  const hash = decodeURIComponent(window.location.hash || "#home");
  if (hash.startsWith("#search/")) {
    showBlogSearchResults(hash.replace("#search/", ""));
    return;
  }
  if (hash.startsWith("#post/")) {
    showPostPage(hash.replace("#post/", ""));
    return;
  }
  if (hash.startsWith("#blog/")) {
    const rawRoute = hash.replace("#blog/", "");
    const [slug, query = ""] = rawRoute.split("?");
    const params = new URLSearchParams(query);
    const topic = (params.get("topic") || "all").replace("갤러리", "사진첩");
    const subtopic = params.get("item") || "all";
    showBlogPage(slug, topic, subtopic);
    return;
  }

  showLandingPage();
  if (hash.length > 1) {
    window.setTimeout(() => scrollToPanel(document.querySelector(hash)), 0);
  }
}

async function initBlogSystem() {
  if (!blogPage) {
    return;
  }

  bindEditorTools();
  bindBlogListControls();
  const storedState = await loadBlogState();
  blogState = normalizeBlogState(storedState || defaultBlogState);
  if (typeof window !== "undefined") {
    window.hrLoungeGetBlogData = () => normalizeBlogState(blogState);
  }
  blogReady = true;
  applySiteSettings();
  renderNavDropdowns();
  expandBlogCategory(currentBlogCategory);
  renderBlogCategories();
  renderCategoryFeatures();
  const firstPost = getPostsByCategory(currentBlogCategory)[0];
  currentPostId = null;
  renderPostList();
  renderEditor(firstPost || null);
  hideEditorPanel();
  renderPostDetail(null);
  handleRoute();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 },
);

renderCategoryOverview();
renderTabs();
renderResources();
initHeroPan();
initMainScrollResponse();
initInternalHashNavigation();
initMainPageToc();
initImageLightbox();
initHeroGalleryLink();
initBlogSystem();

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
revealVisibleItems();

window.addEventListener("hashchange", () => {
  previousRouteHash = currentRouteHash;
  currentRouteHash = window.location.hash || "#home";
  handleRoute();
});

window.addEventListener("popstate", () => {
  previousRouteHash = currentRouteHash;
  currentRouteHash = window.location.hash || "#home";
  handleRoute();
});
