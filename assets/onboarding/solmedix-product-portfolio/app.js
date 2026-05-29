import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const products = [
  {
    id: "fixway",
    name: "Fixway",
    subtitle: "기관삽관 튜브 고정 장치",
    listSubtitle: "기관삽관 튜브 고정 장치",
    region: "구강 / 기도",
    filter: "head",
    accent: "#2f9f66",
    position: [-0.02, 2.22, 0.58],
    labelOffset: [48, -26],
    bodyPosition: [51, 31],
    calloutPosition: [62, 29],
    arrowBend: -1.6,
    photo: "./assets/product-photos/fixway.png",
    photoOffset: [-134, 18],
    summary:
      "기관삽관 튜브를 고정해 튜브 폐색을 줄이고, 실리콘 몰드형 교합 방지 블록으로 치아와 피부 손상을 최소화하도록 설계된 고정 장치입니다.",
    metrics: [
      ["92.9 mm", "녹색 제품 전체 길이"],
      ["6개 규격", "색상별 사이즈 구분"],
    ],
    flow: [
      "입 주변에 고정 홀이 배치되어 기관삽관 튜브 위치를 안정화합니다.",
      "실리콘 가드가 치아와 피부 접촉면을 부드럽게 받쳐줍니다.",
      "색상과 크기 구분으로 환자 상태에 맞는 제품 선택을 돕습니다.",
    ],
  },
  {
    id: "lightin",
    name: "Lightin",
    subtitle: "광유도 약물주입 시스템",
    listSubtitle: "광유도 약물주입 시스템",
    region: "후두 / 성대",
    filter: "head",
    accent: "#ef5350",
    position: [-0.15, 2.02, 0.62],
    labelOffset: [80, 8],
    bodyPosition: [50, 42],
    calloutPosition: [63, 39],
    arrowBend: 1.4,
    photo: "./assets/product-photos/lightin.png",
    photoOffset: [-142, -54],
    summary:
      "성대주입술에서 광섬유가 연결된 바늘 끝의 가시광을 통해 주입 위치 확인을 돕는 광유도 약물주입 시스템입니다.",
    metrics: [
      ["625 nm", "광원 파장"],
      ["23 G / 25 G", "바늘 직경"],
    ],
    flow: [
      "경피 접근으로 바늘이 경부 피부를 통과해 목표 부위로 이동합니다.",
      "바늘 끝의 붉은 빛이 점막 아래에서 보이며 주입 지점을 확인합니다.",
      "실시간 위치 확인으로 오주입 가능성을 낮추는 시각적 피드백을 제공합니다.",
    ],
  },
  {
    id: "lightin-portable",
    name: "Lightin Portable",
    subtitle: "휴대형 광유도 약물주입 시스템",
    listSubtitle: "휴대형 광유도 약물주입 시스템",
    region: "후두 / 성대",
    filter: "head",
    accent: "#ff715b",
    position: [0.44, 1.93, 0.62],
    labelOffset: [58, -30],
    bodyPosition: [50, 42],
    calloutPosition: [68, 46],
    arrowBend: -1.4,
    photo: "./assets/product-photos/lightin-portable.png",
    photoOffset: [146, -60],
    videoUrl: "https://www.youtube.com/watch?v=KTCUSoH5Nic",
    summary:
      "의사가 더 편리하게 사용할 수 있도록 휴대형으로 개발된 Lightin 계열 장치이며, 성대주입술에서 바늘 끝 위치 확인을 지원합니다.",
    metrics: [
      ["625 nm", "레이저 광원 파장"],
      ["23 G / 25 G", "바늘 직경"],
    ],
    flow: [
      "휴대형 광원 장치에서 빛 에너지를 바늘로 전달합니다.",
      "경부 접근 중 바늘 끝의 붉은 빛이 성대 주변에서 확인됩니다.",
      "진료실 기반 시술 환경에서도 장치 이동성과 시야 확보를 함께 고려합니다.",
    ],
  },
  {
    id: "accumetry",
    name: "Accumetry",
    subtitle: "범용 환자 모니터링 센서",
    listSubtitle: "범용 환자 모니터링 센서",
    region: "손가락 / 피부",
    filter: "monitoring",
    accent: "#3278d5",
    position: [-1.18, -0.34, 0.42],
    labelOffset: [42, -12],
    bodyPosition: [35, 74],
    calloutPosition: [25, 78],
    arrowBend: -1.2,
    photo: "./assets/product-photos/accumetry.png",
    photoOffset: [116, -72],
    summary:
      "일회용 SpO2 센서와 피부 온도 센서 등 환자 모니터링용 범용 센서 제품군입니다.",
    metrics: [
      ["4종", "일회용 SpO2 센서"],
      ["2종", "일회용 피부 온도 센서"],
    ],
    flow: [
      "손가락 또는 피부 표면에 센서를 부착해 측정 접촉면을 형성합니다.",
      "환자 생체 신호 데이터를 안정적으로 전달하도록 위생적인 일회용 구조를 사용합니다.",
      "모니터링 장비와 연결되어 SpO2 및 피부 온도 측정을 지원합니다.",
    ],
  },
  {
    id: "hemoclose",
    name: "Hemoclose",
    subtitle: "지혈 밸브",
    listSubtitle: "지혈 밸브",
    region: "혈관 접근부",
    filter: "vascular",
    accent: "#cf4562",
    position: [0.52, -0.78, 0.62],
    labelOffset: [42, -16],
    bodyPosition: [69, 72],
    calloutPosition: [80, 70],
    arrowBend: 0.8,
    photo: "./assets/product-photos/hemoclose.png",
    photoOffset: [116, -84],
    summary:
      "진단 및 중재 시술 기구가 삽입, 회수, 사용되는 동안 혈관 접근부의 지혈 유지에 쓰이는 비이식형 지혈 밸브입니다.",
    metrics: [
      ["4.1 mm", "내경"],
      ["91.3 mm", "전체 길이"],
    ],
    flow: [
      "혈관 접근 경로에 밸브가 연결되어 기구 삽입 통로를 만듭니다.",
      "원터치 개폐 구조가 시술 중 혈액 손실 관리를 돕습니다.",
      "긴 시간이 필요한 심혈관 및 뇌혈관 중재 환경에서 처치 집중도를 높이는 방향으로 설계됩니다.",
    ],
  },
  {
    id: "quratus",
    name: "Quratus",
    subtitle: "봉합 앵커 시스템",
    listSubtitle: "봉합 앵커 시스템",
    region: "어깨 관절",
    filter: "sports",
    accent: "#d49a1f",
    position: [-0.83, 1.42, 0.52],
    labelOffset: [8, 44],
    bodyPosition: [42, 45],
    calloutPosition: [28, 48],
    arrowBend: 1.0,
    photo: "./assets/product-photos/quratus.png",
    photoOffset: [-132, 60],
    summary:
      "연조직을 뼈에 고정하기 위한 봉합 앵커 시스템으로, 생체흡수성 PLGA와 β-TCP 기반 앵커 및 고강도 봉합사를 특징으로 합니다.",
    metrics: [
      ["4.8 mm", "생체복합 앵커 직경"],
      ["3종", "봉합사 타입 수"],
    ],
    flow: [
      "어깨 관절 부위의 뼈에 앵커가 삽입되어 고정점을 형성합니다.",
      "봉합사가 힘줄과 연조직을 당겨 뼈 쪽으로 고정합니다.",
      "PLGA와 β-TCP 조합이 체내 분해 및 골형성 유도 컨셉을 시각화합니다.",
    ],
  },
  {
    id: "quratus-cannula",
    name: "Quratus Cannula",
    subtitle: "봉합 앵커 접근 시스템",
    listSubtitle: "관절경 접근용 캐뉼라",
    region: "관절경 접근부",
    filter: "sports",
    accent: "#8c6bd6",
    position: [-1.0, 1.18, 0.62],
    labelOffset: [-26, 64],
    bodyPosition: [38, 52],
    calloutPosition: [25, 60],
    arrowBend: -1.2,
    photo: "./assets/product-photos/quratus-cannula.png",
    photoOffset: [-152, 88],
    summary:
      "관절경 또는 봉합 앵커 삽입을 위한 접근 경로를 만들고 유지하도록 설계된 캐뉼라와 투관침 구성 제품입니다.",
    metrics: [
      ["6.5 / 8.5 mm", "외경"],
      ["45 / 80 mm", "캐뉼라 길이"],
    ],
    flow: [
      "어깨 관절 부위에 접근 포털을 형성해 기구 진입 경로를 확보합니다.",
      "캐뉼라가 접근 경로를 유지하며 관절경과 앵커 삽입 기구 사용을 돕습니다.",
      "투관침과 캐뉼라 구성이 삽입과 위치 유지 과정을 분리해 보여줍니다.",
    ],
  },
  {
    id: "quratus-instrument",
    name: "Quratus Instrument",
    subtitle: "펀치 / 탭 및 송곳형 기구",
    listSubtitle: "골 준비용 수술 기구",
    region: "골 준비",
    filter: "sports",
    accent: "#13a59a",
    position: [-0.98, 1.55, 0.58],
    labelOffset: [-42, -46],
    bodyPosition: [39, 39],
    calloutPosition: [25, 36],
    arrowBend: -1.0,
    photo: "./assets/product-photos/quratus-instrument.png",
    photoOffset: [-150, -82],
    summary:
      "앵커가 안정적으로 고정될 수 있도록 예비 구멍을 만들거나 나사산을 형성하는 펀치, 탭 및 송곳형 수술 기구입니다.",
    metrics: [
      ["4.8 / 5.5 mm", "펀치 / 탭 규격"],
      ["4.8 / 5.5 mm", "송곳형 기구 규격"],
    ],
    flow: [
      "송곳형 기구가 뼈 표면에 예비 구멍을 만들 위치를 준비합니다.",
      "펀치와 탭이 앵커 고정을 위한 구멍과 나사산을 형성합니다.",
      "이후 Quratus 앵커 삽입이 이어지는 수술 순서를 보여줍니다.",
    ],
  },
];

const lightinPortableVideoUpdate = products.find((product) => product.id === "lightin-portable");
Object.assign(lightinPortableVideoUpdate, {
  subtitle: "휴대형 광유도 약물주입 시스템",
  summary:
    "홍보영상 흐름을 반영해, 성대주입술에서 바늘 위치 확인이 어려운 문제를 휴대형 광원과 바늘 끝의 가시광으로 보완하는 장면을 중심으로 구성했습니다.",
  metrics: [
    ["625 nm", "레이저 광원 파장"],
    ["23 G / 25 G", "바늘 직경"],
    ["팁 발광", "내시경 시야 위치 피드백"],
    ["휴대형", "주사기 장착형 광원 모듈"],
  ],
  flow: [
    "영상처럼 내시경 시야로 성대를 확인하고, 목 측면 접근 경로를 따라 주입 위치를 잡습니다.",
    "주사기에 결합된 휴대형 광원이 바늘 끝으로 빛을 전달해 성대 내부에서 붉은 점으로 위치를 보여줍니다.",
    "확인된 지점에 정밀 주입해 치료 효과를 높이는 흐름을 시각화합니다.",
  ],
});

const canvas = document.querySelector("#scene-canvas");
const labelsLayer = document.querySelector("#scene-labels");
const photoCardsLayer = document.querySelector("#photo-cards");
const targetArrowsLayer = document.querySelector("#target-arrows");
const bodyHotspotsLayer = document.querySelector("#body-hotspots");
const productList = document.querySelector("#product-list");
const autoplayToggle = document.querySelector("#autoplay-toggle");
const activeRegion = document.querySelector("#active-region");
const activeProduct = document.querySelector("#active-product");
const detailKicker = document.querySelector("#detail-kicker");
const detailName = document.querySelector("#detail-name");
const detailImage = document.querySelector("#detail-image");
const detailSummary = document.querySelector("#detail-summary");
const detailMetrics = document.querySelector("#detail-metrics");
const detailFlow = document.querySelector("#detail-flow");
const detailPanel = document.querySelector(".detail-panel");
const videoFrame = document.querySelector("#video-frame");
const videoUrlInput = document.querySelector("#video-url-input");
const videoConnectButton = document.querySelector("#video-connect-button");
const videoOpenLink = document.querySelector("#video-open-link");
const videoMessage = document.querySelector("#video-message");

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xf5f7f2, 8, 18);

const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
camera.position.set(0, 1.25, 5.2);

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
  powerPreference: "high-performance",
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minDistance = 5.4;
controls.maxDistance = 10.5;
controls.maxPolarAngle = Math.PI * 0.82;
controls.minPolarAngle = Math.PI * 0.18;
controls.target.set(0, 1.25, 0);
controls.autoRotate = false;
controls.autoRotateSpeed = 0.75;
controls.enableRotate = false;
controls.enablePan = false;
controls.enableZoom = false;

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const clock = new THREE.Clock();
const hotspots = [];
const labelEntries = new Map();
const photoEntries = new Map();
const bodyHotspotEntries = new Map();
const productGroups = new Map();

const initialProductId = new URLSearchParams(window.location.search).get("product");
let activeId = products.some((product) => product.id === initialProductId) ? initialProductId : "lightin-portable";
let currentFilter = "all";
let desiredTarget = new THREE.Vector3(0, 1.25, 0);
let desiredCamera = new THREE.Vector3(0, 1.25, 5.2);
let lastAutoSwitch = 0;
let activeVideo = null;
let activeVideoProductId = activeId;
const productVideoStorageKey = "solmedix.productVideos";
const storedProductVideoUrls = loadStoredProductVideos();
const inlineEditStorageKey = "solmedix.inlineTextEdits";
const storedInlineEdits = loadStoredInlineEdits();
const placementStorageKey = "solmedix.productPlacements";
const storedPlacementEdits = loadStoredPlacementEdits();
applyStoredProductTextEdits();
applyStoredProductPlacements();

const bodyGroup = new THREE.Group();
const productLayer = new THREE.Group();
scene.add(bodyGroup, productLayer);

setupLights();
createEnvironment();
createHumanImageBody();
createProducts();
createProductList();
createBodyHotspots();
createFilterButtons();
setupVideoPlayer();
setupInlineEditing();
selectProduct(activeId);
applyStoredStaticTextEdits();
resize();
renderer.setAnimationLoop(animate);

window.addEventListener("resize", resize);
canvas.addEventListener("pointerdown", onCanvasPointerDown);
autoplayToggle?.addEventListener("change", () => {
  lastAutoSwitch = clock.elapsedTime;
});

function setupLights() {
  const hemi = new THREE.HemisphereLight(0xffffff, 0xb9b39c, 2.35);
  scene.add(hemi);

  const key = new THREE.DirectionalLight(0xffffff, 2.4);
  key.position.set(-4.8, 6.2, 4.6);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.camera.near = 0.1;
  key.shadow.camera.far = 18;
  key.shadow.camera.left = -5;
  key.shadow.camera.right = 5;
  key.shadow.camera.top = 5;
  key.shadow.camera.bottom = -5;
  scene.add(key);

  const rim = new THREE.DirectionalLight(0x75fff0, 1.4);
  rim.position.set(5, 2.8, -4);
  scene.add(rim);

  const warm = new THREE.PointLight(0xf1b34d, 1.4, 12);
  warm.position.set(2.8, 2.1, 3.2);
  scene.add(warm);
}

function createEnvironment() {
  const floorMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.92,
    metalness: 0,
    transparent: true,
    opacity: 0.54,
  });
  const floor = new THREE.Mesh(new THREE.CircleGeometry(4.6, 96), floorMaterial);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -3.04;
  floor.receiveShadow = true;
  scene.add(floor);

  const grid = new THREE.GridHelper(9, 18, 0x9fb6ae, 0xd4ded6);
  grid.position.y = -3.02;
  grid.material.transparent = true;
  grid.material.opacity = 0.22;
  scene.add(grid);

  const haloMaterial = new THREE.MeshBasicMaterial({
    color: 0x13a59a,
    transparent: true,
    opacity: 0.08,
    side: THREE.DoubleSide,
  });
  const halo = new THREE.Mesh(new THREE.TorusGeometry(2.45, 0.012, 8, 128), haloMaterial);
  halo.rotation.x = Math.PI / 2;
  halo.position.y = -2.72;
  scene.add(halo);
}

function createHumanImageBody() {
  const loader = new THREE.TextureLoader();
  const texture = loader.load("./assets/human-medical-bodysuit-upper.png");
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);

  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    opacity: 0.92,
    alphaTest: 0.02,
    depthWrite: false,
  });

  const bodyPlane = new THREE.Mesh(new THREE.PlaneGeometry(4.38, 3.0), material);
  bodyPlane.position.set(0, 1.4, -0.32);
  bodyPlane.renderOrder = 0;
  bodyGroup.add(bodyPlane);
}

function createHumanBody() {
  const skin = new THREE.MeshPhysicalMaterial({
    color: 0xefd7c7,
    roughness: 0.5,
    metalness: 0,
    transmission: 0.03,
    transparent: true,
    opacity: 0.82,
    clearcoat: 0.18,
    clearcoatRoughness: 0.62,
  });
  const muscle = new THREE.MeshPhysicalMaterial({
    color: 0xeaa999,
    roughness: 0.5,
    transparent: true,
    opacity: 0.38,
  });
  const bone = new THREE.MeshStandardMaterial({
    color: 0xfffbeb,
    roughness: 0.7,
    transparent: true,
    opacity: 0.68,
  });
  const cartilage = new THREE.MeshStandardMaterial({
    color: 0xbfe9dd,
    roughness: 0.55,
    transparent: true,
    opacity: 0.58,
  });
  const feature = new THREE.MeshStandardMaterial({
    color: 0x4d4740,
    roughness: 0.58,
    transparent: true,
    opacity: 0.72,
  });

  const head = ellipsoid(0.33, 0.34, 0.29, skin, 48, 32);
  head.position.set(0, 2.72, 0.02);
  head.castShadow = true;
  bodyGroup.add(head);

  const face = ellipsoid(0.28, 0.24, 0.22, skin, 42, 26);
  face.position.set(0, 2.55, 0.14);
  bodyGroup.add(face);

  const jaw = ellipsoid(0.2, 0.1, 0.18, skin, 32, 18);
  jaw.position.set(0, 2.38, 0.12);
  bodyGroup.add(jaw);

  const crown = ellipsoid(0.31, 0.16, 0.28, skin, 36, 18);
  crown.position.set(0, 2.92, 0.02);
  bodyGroup.add(crown);

  const earL = ellipsoid(0.055, 0.13, 0.035, skin, 20, 14);
  const earR = ellipsoid(0.055, 0.13, 0.035, skin, 20, 14);
  earL.position.set(-0.31, 2.64, 0.03);
  earR.position.set(0.31, 2.64, 0.03);
  bodyGroup.add(earL, earR);

  const nose = ellipsoid(0.035, 0.075, 0.06, skin, 20, 14);
  nose.position.set(0, 2.61, 0.36);
  bodyGroup.add(nose);

  const eyeL = ellipsoid(0.024, 0.012, 0.01, feature, 16, 8);
  const eyeR = ellipsoid(0.024, 0.012, 0.01, feature, 16, 8);
  eyeL.position.set(-0.09, 2.69, 0.36);
  eyeR.position.set(0.09, 2.69, 0.36);
  bodyGroup.add(eyeL, eyeR);

  const mouth = tubeThrough(
    [
      [-0.09, 2.46, 0.35],
      [0, 2.445, 0.365],
      [0.09, 2.46, 0.35],
    ],
    0.006,
    feature
  );
  bodyGroup.add(mouth);

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.21, 0.46, 32), skin);
  neck.position.set(0, 2.16, 0.02);
  neck.castShadow = true;
  bodyGroup.add(neck);

  const larynx = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.014, 8, 48), cartilage);
  larynx.position.set(0, 2.08, 0.26);
  larynx.rotation.x = Math.PI * 0.5;
  larynx.scale.set(0.72, 1, 0.48);
  bodyGroup.add(larynx);

  const torso = latheMesh(
    [
      [0.02, 1.88],
      [0.36, 1.82],
      [0.78, 1.56],
      [0.7, 1.05],
      [0.58, 0.52],
      [0.5, 0.08],
      [0.58, -0.35],
      [0.72, -0.6],
      [0.24, -0.84],
      [0.02, -0.88],
    ],
    skin,
    0.47
  );
  torso.position.set(0, 0.03, 0);
  torso.castShadow = true;
  bodyGroup.add(torso);

  const chestCore = latheMesh(
    [
      [0.02, 1.48],
      [0.48, 1.38],
      [0.55, 1.04],
      [0.48, 0.68],
      [0.24, 0.52],
      [0.02, 0.5],
    ],
    muscle,
    0.38
  );
  chestCore.position.set(0, 0.03, 0.06);
  bodyGroup.add(chestCore);

  const pelvis = ellipsoid(0.58, 0.24, 0.3, skin, 42, 24);
  pelvis.position.set(0, -0.72, 0.02);
  pelvis.castShadow = true;
  bodyGroup.add(pelvis);

  for (let i = 0; i < 6; i += 1) {
    const rib = new THREE.Mesh(new THREE.TorusGeometry(0.27 + i * 0.035, 0.006, 8, 64), bone);
    rib.position.set(0, 1.38 - i * 0.13, 0.16);
    rib.rotation.x = Math.PI * 0.5;
    rib.scale.set(1.5 - i * 0.055, 0.36, 0.18);
    bodyGroup.add(rib);
  }

  const spine = tubeThrough(
    [
      [0, 1.92, -0.12],
      [0, 1.24, -0.17],
      [0, 0.25, -0.18],
      [0, -0.78, -0.12],
    ],
    0.02,
    bone
  );
  bodyGroup.add(spine);

  addBoneBetween([-0.72, 1.64, 0.14], [0, 1.5, 0.17], 0.026, bone);
  addBoneBetween([0, 1.5, 0.17], [0.72, 1.64, 0.14], 0.026, bone);

  const shoulderL = joint(-0.82, 1.47, 0.08, 0.13, cartilage, [1, 0.92, 0.74]);
  const shoulderR = joint(0.82, 1.47, 0.08, 0.13, cartilage, [1, 0.92, 0.74]);
  const elbowL = joint(-1.24, 0.66, 0.05, 0.085, cartilage, [1, 0.86, 0.72]);
  const elbowR = joint(1.24, 0.66, 0.05, 0.085, cartilage, [1, 0.86, 0.72]);
  const wristL = joint(-1.75, -0.18, 0.1, 0.065, cartilage, [1, 0.8, 0.7]);
  const wristR = joint(1.62, -0.24, 0.1, 0.065, cartilage, [1, 0.8, 0.7]);
  const hipL = joint(-0.34, -0.88, 0.03, 0.12, cartilage, [1, 0.9, 0.72]);
  const hipR = joint(0.34, -0.88, 0.03, 0.12, cartilage, [1, 0.9, 0.72]);
  const kneeL = joint(-0.34, -2.0, 0.04, 0.1, cartilage, [1, 0.86, 0.7]);
  const kneeR = joint(0.34, -2.0, 0.04, 0.1, cartilage, [1, 0.86, 0.7]);
  bodyGroup.add(shoulderL, shoulderR, elbowL, elbowR, wristL, wristR, hipL, hipR, kneeL, kneeR);

  addLimb([-0.77, 1.42, 0.02], [-1.18, 0.67, 0.04], 0.125, 0.09, skin);
  addLimb([-1.18, 0.67, 0.04], [-1.74, -0.18, 0.11], 0.088, 0.058, skin);
  addLimb([0.77, 1.42, 0.02], [1.18, 0.67, 0.04], 0.125, 0.09, skin);
  addLimb([1.18, 0.67, 0.04], [1.58, -0.24, 0.11], 0.088, 0.058, skin);
  addHand([-1.82, -0.24, 0.14], skin, -1);
  addHand([1.65, -0.3, 0.14], skin, 1);

  addLimb([-0.31, -0.94, 0.02], [-0.34, -1.98, 0.03], 0.15, 0.105, skin);
  addLimb([-0.34, -1.98, 0.03], [-0.29, -2.92, 0.08], 0.105, 0.074, skin);
  addLimb([0.31, -0.94, 0.02], [0.34, -1.98, 0.03], 0.15, 0.105, skin);
  addLimb([0.34, -1.98, 0.03], [0.29, -2.92, 0.08], 0.105, 0.074, skin);
  addFoot([-0.31, -3.03, 0.2], skin, -1);
  addFoot([0.31, -3.03, 0.2], skin, 1);

  const vesselMat = new THREE.MeshStandardMaterial({
    color: 0xd94a64,
    emissive: 0x47111d,
    roughness: 0.45,
    transparent: true,
    opacity: 0.44,
  });
  bodyGroup.add(
    tubeThrough(
      [
        [0.12, 0.9, 0.28],
        [0.32, 0.22, 0.32],
        [0.43, -0.58, 0.35],
        [0.52, -1.34, 0.32],
        [0.44, -2.1, 0.28],
      ],
      0.017,
      vesselMat
    )
  );
}

function addLimb(start, end, startRadius, endRadius, material) {
  const limb = taperedCylinderBetween(vec(start), vec(end), startRadius, endRadius, material, 28);
  limb.castShadow = true;
  bodyGroup.add(limb);
}

function addBoneBetween(start, end, radius, material) {
  bodyGroup.add(cylinderBetween(vec(start), vec(end), radius, material, 18));
}

function addHand(position, material, side) {
  const palm = ellipsoid(0.095, 0.145, 0.055, material, 24, 16);
  palm.position.set(...position);
  palm.castShadow = true;
  bodyGroup.add(palm);

  const base = vec(position);
  for (let i = 0; i < 4; i += 1) {
    const offset = -0.055 + i * 0.036;
    const finger = cylinderBetween(
      base.clone().add(new THREE.Vector3(offset, -0.08, 0.02)),
      base.clone().add(new THREE.Vector3(offset * 1.05, -0.28, 0.04)),
      0.011,
      material,
      12
    );
    bodyGroup.add(finger);
  }

  const thumb = cylinderBetween(
    base.clone().add(new THREE.Vector3(side * 0.075, -0.02, 0.02)),
    base.clone().add(new THREE.Vector3(side * 0.19, -0.16, 0.04)),
    0.013,
    material,
    12
  );
  bodyGroup.add(thumb);
}

function addFoot(position, material, side) {
  const foot = ellipsoid(0.15, 0.055, 0.27, material, 28, 16);
  foot.position.set(...position);
  foot.rotation.y = side * 0.08;
  foot.castShadow = true;
  bodyGroup.add(foot);
}

function joint(x, y, z, r, material, scale = [1, 1, 1]) {
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, 32, 20), material);
  mesh.position.set(x, y, z);
  mesh.scale.set(scale[0], scale[1], scale[2]);
  return mesh;
}

function ellipsoid(x, y, z, material, widthSegments = 32, heightSegments = 20) {
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(1, widthSegments, heightSegments), material);
  mesh.scale.set(x, y, z);
  return mesh;
}

function latheMesh(profile, material, scaleZ = 1) {
  const geometry = new THREE.LatheGeometry(
    profile.map(([radius, y]) => new THREE.Vector2(radius, y)),
    72
  );
  geometry.scale(1, 1, scaleZ);
  return new THREE.Mesh(geometry, material);
}

function createProducts() {
  products.forEach((product) => {
    const pos = vec(product.position);
    const anchor = createHotspot(product, pos);
    hotspots.push(anchor);
    productLayer.add(anchor);

    const group = new THREE.Group();
    group.position.copy(pos);
    group.userData.product = product;

    if (product.id === "fixway") createFixway(group, product);
    if (product.id === "lightin") createLightin(group, product, false);
    if (product.id === "lightin-portable") createLightin(group, product, true);
    if (product.id === "accumetry") createAccumetry(group, product);
    if (product.id === "hemoclose") createHemoclose(group, product);
    if (product.id === "quratus") createQuratus(group, product);
    if (product.id === "quratus-cannula") createCannula(group, product);
    if (product.id === "quratus-instrument") createInstrument(group, product);

    productGroups.set(product.id, group);
    productLayer.add(group);
    createLabel(product, pos);
    createProductPhotoCard(product, pos);
  });
}

function createHotspot(product, position) {
  const color = new THREE.Color(product.accent);
  const group = new THREE.Group();
  group.position.copy(position);
  group.userData.productId = product.id;

  const core = new THREE.Mesh(
    new THREE.SphereGeometry(0.052, 24, 18),
    new THREE.MeshStandardMaterial({
      color,
      emissive: color,
      emissiveIntensity: 0.68,
      roughness: 0.36,
    })
  );
  core.userData.productId = product.id;
  group.add(core);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.105, 0.007, 8, 42),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.68,
    })
  );
  ring.name = "pulseRing";
  ring.userData.productId = product.id;
  group.add(ring);
  return group;
}

function createLabel(product, position) {
  const button = document.createElement("button");
  button.className = "hotspot-label";
  button.type = "button";
  button.textContent = product.name;
  button.style.setProperty("--accent", product.accent);
  button.addEventListener("click", () => selectProduct(product.id));
  labelsLayer.append(button);
  labelEntries.set(product.id, { element: button, position: position.clone(), offset: product.labelOffset || [0, 0] });
}

function createProductPhotoCard(product, position) {
  if (!product.photo) return;
  const card = document.createElement("div");
  card.className = "product-photo-card";
  card.style.setProperty("--accent", product.accent);
  card.innerHTML = `
    <img src="${product.photo}" alt="" />
    <strong>${product.name}</strong>
  `;
  photoCardsLayer.append(card);
  photoEntries.set(product.id, { element: card, position: position.clone(), offset: product.photoOffset || [0, 0] });
}

function createFixway(group, product) {
  const color = new THREE.Color(product.accent);
  const mat = standard(product.accent, 0.62);
  const guard = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.022, 10, 56), mat);
  guard.scale.set(1.36, 0.34, 0.18);
  guard.rotation.x = Math.PI * 0.52;
  group.add(guard);

  const tubeMat = new THREE.MeshStandardMaterial({
    color: 0xc4f7ed,
    roughness: 0.26,
    metalness: 0.02,
    transparent: true,
    opacity: 0.84,
  });
  group.add(cylinderBetween(new THREE.Vector3(-0.52, -0.02, 0.07), new THREE.Vector3(0.42, -0.03, -0.1), 0.03, tubeMat, 20));

  const holder = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.07, 0.07), mat);
  holder.position.set(-0.03, -0.02, 0.1);
  group.add(holder);

  const bite = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.12, 0.08), standard("#ffffff", 0.58));
  bite.position.set(0, -0.05, 0.15);
  group.add(bite);

  addPulseRings(group, color, 0.34, 0.04);
}

function createLightin(group, product, portable) {
  const color = new THREE.Color(product.accent);
  const needleMat = new THREE.MeshStandardMaterial({
    color: 0xdce5e8,
    metalness: 0.72,
    roughness: 0.22,
  });
  const origin = portable ? new THREE.Vector3(0.7, -0.3, 0.52) : new THREE.Vector3(-0.78, -0.22, 0.48);
  const tip = new THREE.Vector3(0, 0, 0);
  const needle = cylinderBetween(origin, tip, 0.014, needleMat, 16);
  group.add(needle);

  const beam = new THREE.Mesh(
    new THREE.ConeGeometry(0.12, 0.38, 32, 1, true),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.34,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
  );
  beam.position.set(-0.02, 0.02, 0.02);
  beam.rotation.x = Math.PI * 0.5;
  beam.name = "beam";
  group.add(beam);

  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(0.07, 24, 18),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9 })
  );
  glow.name = "glow";
  group.add(glow);

  const cablePath = portable
    ? [
        [0.63, -0.28, 0.5],
        [0.8, -0.62, 0.5],
        [0.62, -0.86, 0.48],
      ]
    : [
        [-0.74, -0.22, 0.47],
        [-1.05, -0.58, 0.45],
        [-1.2, -0.88, 0.42],
      ];
  group.add(tubeThrough(cablePath, 0.012, standard(product.accent, 0.84)));

  const generator = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.18, 0.12), standard(portable ? "#f7fbfb" : "#263542", 0.86));
  generator.position.copy(portable ? new THREE.Vector3(0.63, -0.88, 0.47) : new THREE.Vector3(-1.24, -0.94, 0.42));
  group.add(generator);

  const display = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.07), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95 }));
  display.position.copy(generator.position).add(new THREE.Vector3(0, 0, 0.063));
  group.add(display);

  addPulseRings(group, color, 0.26, 0.02);
}

function createAccumetry(group, product) {
  const color = new THREE.Color(product.accent);
  const sensorMat = standard(product.accent, 0.86);
  const white = standard("#ffffff", 0.92);

  const topClip = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.07, 0.11), sensorMat);
  topClip.position.set(0.08, -0.06, 0.06);
  topClip.rotation.z = -0.18;
  group.add(topClip);

  const bottomClip = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.055, 0.11), white);
  bottomClip.position.set(0.08, -0.16, 0.03);
  bottomClip.rotation.z = -0.18;
  group.add(bottomClip);

  const cable = tubeThrough(
    [
      [0.0, -0.08, 0.03],
      [0.22, 0.16, 0.12],
      [0.45, 0.18, 0.08],
      [0.58, -0.1, 0.05],
    ],
    0.01,
    standard("#2b3844", 0.8)
  );
  group.add(cable);

  const patch = new THREE.Mesh(new THREE.CircleGeometry(0.1, 36), standard("#f6fafb", 0.84));
  patch.position.set(0.42, 0.18, 0.09);
  patch.rotation.x = -0.2;
  group.add(patch);

  const graphMat = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.78,
  });
  const wave = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(
      Array.from({ length: 48 }, (_, i) => {
        const x = -0.26 + i * 0.018;
        const spike = i % 16 === 8 ? 0.16 : Math.sin(i * 0.9) * 0.035;
        return new THREE.Vector3(x, 0.38 + spike, 0.12);
      })
    ),
    graphMat
  );
  wave.name = "wave";
  group.add(wave);
  addPulseRings(group, color, 0.28, 0.06);
}

function createHemoclose(group, product) {
  const color = new THREE.Color(product.accent);
  const vesselMat = standard("#b92b45", 0.82);
  const valveMat = standard("#ffffff", 0.95);
  const redPath = tubeThrough(
    [
      [-0.34, -0.42, -0.02],
      [-0.12, -0.14, 0.05],
      [0.08, 0, 0.1],
      [0.42, 0.18, 0.08],
    ],
    0.036,
    vesselMat
  );
  group.add(redPath);

  const mainValve = cylinderBetween(new THREE.Vector3(-0.26, -0.32, 0.06), new THREE.Vector3(0.2, 0.1, 0.08), 0.06, valveMat, 24);
  group.add(mainValve);
  const sidePort = cylinderBetween(new THREE.Vector3(-0.02, -0.08, 0.06), new THREE.Vector3(0.12, -0.38, 0.18), 0.035, valveMat, 18);
  group.add(sidePort);
  const cap = new THREE.Mesh(new THREE.SphereGeometry(0.09, 24, 16), standard(product.accent, 0.86));
  cap.position.set(0.2, 0.1, 0.08);
  group.add(cap);

  const lock = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.015, 8, 34), standard("#2b3844", 0.84));
  lock.position.set(-0.04, -0.06, 0.14);
  lock.rotation.x = Math.PI * 0.5;
  group.add(lock);
  addPulseRings(group, color, 0.34, 0.02);
}

function createQuratus(group, product) {
  const color = new THREE.Color(product.accent);
  const anchorMat = standard("#f6f0df", 0.94);
  const sutureMat = new THREE.MeshBasicMaterial({ color: 0x16404a, transparent: true, opacity: 0.86 });
  const bonePatch = new THREE.Mesh(new THREE.SphereGeometry(0.22, 32, 18), standard("#fff6dc", 0.72));
  bonePatch.scale.set(1.2, 0.56, 0.5);
  bonePatch.position.set(0.02, -0.02, -0.02);
  group.add(bonePatch);

  const anchor = cylinderBetween(new THREE.Vector3(-0.2, 0.28, 0.24), new THREE.Vector3(0.03, 0.02, 0.02), 0.045, anchorMat, 24);
  group.add(anchor);
  for (let i = 0; i < 5; i += 1) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.05 + i * 0.002, 0.005, 8, 28), standard(product.accent, 0.72));
    ring.position.set(-0.16 + i * 0.04, 0.23 - i * 0.045, 0.2 - i * 0.035);
    ring.rotation.x = 0.74;
    ring.rotation.y = -0.6;
    group.add(ring);
  }

  const sutureA = tubeThrough(
    [
      [0.02, 0.02, 0.08],
      [-0.26, 0.14, 0.32],
      [-0.45, 0.32, 0.34],
    ],
    0.01,
    sutureMat
  );
  const sutureB = tubeThrough(
    [
      [0.02, 0.02, 0.08],
      [0.2, 0.26, 0.28],
      [0.36, 0.43, 0.3],
    ],
    0.01,
    sutureMat
  );
  group.add(sutureA, sutureB);
  addPulseRings(group, color, 0.34, 0.04);
}

function createCannula(group, product) {
  const color = new THREE.Color(product.accent);
  const tubeMat = standard("#f9fbfb", 0.9);
  const entry = new THREE.Vector3(-0.48, -0.26, 0.33);
  const target = new THREE.Vector3(0.08, 0.07, 0.03);
  group.add(cylinderBetween(entry, target, 0.055, tubeMat, 24));

  const inner = cylinderBetween(entry.clone().add(new THREE.Vector3(-0.12, -0.07, 0.08)), target, 0.019, standard(product.accent, 0.84), 16);
  group.add(inner);

  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.095, 0.018, 8, 32), standard(product.accent, 0.78));
  rim.position.copy(entry);
  rim.rotation.x = Math.PI * 0.48;
  rim.rotation.y = -0.44;
  group.add(rim);

  const portal = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.011, 8, 44), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.5 }));
  portal.name = "portal";
  portal.position.set(0.02, 0.02, 0.05);
  portal.rotation.x = Math.PI * 0.5;
  group.add(portal);
  addPulseRings(group, color, 0.3, 0.03);
}

function createInstrument(group, product) {
  const color = new THREE.Color(product.accent);
  const metal = new THREE.MeshStandardMaterial({
    color: 0xd9e2e5,
    metalness: 0.78,
    roughness: 0.18,
  });
  const handle = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.46, 0.1), standard("#263542", 0.9));
  handle.position.set(-0.42, 0.36, 0.36);
  handle.rotation.z = -0.78;
  group.add(handle);

  const awl = cylinderBetween(new THREE.Vector3(-0.3, 0.24, 0.28), new THREE.Vector3(0.02, 0.02, 0.03), 0.026, metal, 18);
  group.add(awl);
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.14, 24), metal);
  tip.position.set(0.06, -0.02, 0.0);
  tip.rotation.z = -0.85;
  group.add(tip);

  const pilot = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.008, 8, 34), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.72 }));
  pilot.name = "pilot";
  pilot.position.set(0.03, 0.02, 0.04);
  pilot.rotation.x = Math.PI * 0.5;
  group.add(pilot);
  addPulseRings(group, color, 0.3, 0.02);
}

function addPulseRings(group, color, radius, z) {
  for (let i = 0; i < 2; i += 1) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(radius + i * 0.12, 0.008, 8, 80),
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.26 - i * 0.06,
        depthWrite: false,
      })
    );
    ring.name = "actionRing";
    ring.userData.phase = i * 0.5;
    ring.position.z = z;
    ring.rotation.x = Math.PI * 0.5;
    group.add(ring);
  }
}

function createProductList() {
  productList.innerHTML = "";
  products.forEach((product) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "product-item";
    button.dataset.product = product.id;
    button.dataset.filter = product.filter;
    button.style.setProperty("--accent", product.accent);
    button.innerHTML = `
      <span class="product-copy">
        <span class="product-head">
          <i class="product-dot" aria-hidden="true"></i>
          <strong data-edit-key="${productTextKey(product.id, "name")}">${escapeHtml(product.name)}</strong>
        </span>
        <span data-edit-key="${productTextKey(product.id, "listSubtitle")}">${escapeHtml(product.listSubtitle || product.subtitle)}</span>
        <small data-edit-key="${productTextKey(product.id, "region")}">${escapeHtml(product.region)}</small>
      </span>
      <img class="product-thumb" src="${product.photo}" alt="" />
    `;
    button.addEventListener("click", () => selectProduct(product.id));
    productList.append(button);
  });
}

function createBodyHotspots() {
  bodyHotspotsLayer.innerHTML = "";
  targetArrowsLayer.innerHTML = "";
  bodyHotspotEntries.clear();

  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  targetArrowsLayer.append(defs);

  products.forEach((product) => {
    const target = product.bodyPosition;
    const callout = product.calloutPosition || target;
    const marker = createArrowMarker(product);
    const arrow = createTargetArrow(product, callout, target);
    const targetPin = document.createElement("span");
    const button = document.createElement("button");

    defs.append(marker);
    targetArrowsLayer.append(arrow);

    targetPin.className = "body-target";
    targetPin.dataset.product = product.id;
    targetPin.dataset.filter = product.filter;
    targetPin.style.setProperty("--accent", product.accent);
    targetPin.style.left = `${target[0]}%`;
    targetPin.style.top = `${target[1]}%`;
    targetPin.setAttribute("aria-hidden", "true");
    targetPin.title = "드래그해서 신체 타깃 위치 조정";

    button.type = "button";
    button.className = "body-hotspot";
    button.dataset.product = product.id;
    button.dataset.filter = product.filter;
    button.dataset.editKey = productTextKey(product.id, "name");
    button.style.setProperty("--accent", product.accent);
    button.style.left = `${callout[0]}%`;
    button.style.top = `${callout[1]}%`;
    button.textContent = product.name;
    button.title = "드래그해서 라벨과 화살표 시작점 위치 조정";
    button.addEventListener("click", (event) => {
      if (shouldSuppressPlacementClick(event)) return;
      selectProduct(product.id);
    });
    targetPin.addEventListener("click", (event) => {
      if (shouldSuppressPlacementClick(event)) return;
      selectProduct(product.id);
    });
    bindPlacementDrag(button, product, "calloutPosition");
    bindPlacementDrag(targetPin, product, "bodyPosition");

    bodyHotspotsLayer.append(targetPin);
    bodyHotspotsLayer.append(button);
    bodyHotspotEntries.set(product.id, { arrow, button, targetPin });
  });
}

let placementClickSuppressUntil = 0;

function bindPlacementDrag(element, product, field) {
  element.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || element.classList.contains("inline-editing")) return;

    const layerRect = bodyHotspotsLayer.getBoundingClientRect();
    const startX = event.clientX;
    const startY = event.clientY;
    let hasMoved = false;

    selectProduct(product.id);
    element.setPointerCapture?.(event.pointerId);

    const onPointerMove = (moveEvent) => {
      if (moveEvent.pointerId !== event.pointerId) return;
      const distance = Math.hypot(moveEvent.clientX - startX, moveEvent.clientY - startY);
      if (!hasMoved && distance < 3) return;

      hasMoved = true;
      moveEvent.preventDefault();
      element.classList.add("is-dragging");
      bodyHotspotsLayer.classList.add("is-placement-dragging");
      setProductPlacement(product, field, pointerToPlacement(moveEvent, layerRect), { persist: false });
    };

    const finishDrag = (upEvent) => {
      if (upEvent.pointerId !== event.pointerId) return;
      element.removeEventListener("pointermove", onPointerMove);
      element.removeEventListener("pointerup", finishDrag);
      element.removeEventListener("pointercancel", finishDrag);
      element.releasePointerCapture?.(event.pointerId);
      element.classList.remove("is-dragging");
      bodyHotspotsLayer.classList.remove("is-placement-dragging");

      if (hasMoved) {
        placementClickSuppressUntil = performance.now() + 260;
        saveProductPlacement(product);
      }
    };

    element.addEventListener("pointermove", onPointerMove);
    element.addEventListener("pointerup", finishDrag);
    element.addEventListener("pointercancel", finishDrag);
  });
}

function shouldSuppressPlacementClick(event) {
  if (performance.now() > placementClickSuppressUntil) {
    return false;
  }
  event.preventDefault();
  event.stopPropagation();
  return true;
}

function pointerToPlacement(event, rect) {
  const x = clamp(((event.clientX - rect.left) / Math.max(rect.width, 1)) * 100, 0, 100);
  const y = clamp(((event.clientY - rect.top) / Math.max(rect.height, 1)) * 100, 0, 100);
  return [roundPlacement(x), roundPlacement(y)];
}

function setProductPlacement(product, field, point) {
  product[field] = point;
  const entry = bodyHotspotEntries.get(product.id);
  if (!entry) return;

  if (field === "bodyPosition") {
    entry.targetPin.style.left = `${point[0]}%`;
    entry.targetPin.style.top = `${point[1]}%`;
  } else {
    entry.button.style.left = `${point[0]}%`;
    entry.button.style.top = `${point[1]}%`;
  }

  updateTargetArrowPath(entry.arrow, product);
}

function saveProductPlacement(product) {
  storedPlacementEdits[product.id] = {
    bodyPosition: normalizePlacementPoint(product.bodyPosition) || product.bodyPosition,
    calloutPosition: normalizePlacementPoint(product.calloutPosition || product.bodyPosition) || product.calloutPosition,
  };
  try {
    window.localStorage.setItem(placementStorageKey, JSON.stringify(storedPlacementEdits));
  } catch {
    // Placement edits remain visible for the current session if storage is blocked.
  }
}

function applyStoredProductPlacements() {
  products.forEach((product) => {
    const placement = storedPlacementEdits[product.id];
    if (!placement || typeof placement !== "object") return;

    const bodyPosition = normalizePlacementPoint(placement.bodyPosition);
    const calloutPosition = normalizePlacementPoint(placement.calloutPosition);
    if (bodyPosition) product.bodyPosition = bodyPosition;
    if (calloutPosition) product.calloutPosition = calloutPosition;
  });
}

function loadStoredPlacementEdits() {
  try {
    return JSON.parse(window.localStorage.getItem(placementStorageKey) || "{}");
  } catch {
    return {};
  }
}

function normalizePlacementPoint(point) {
  if (!Array.isArray(point) || point.length < 2) return null;
  const x = Number(point[0]);
  const y = Number(point[1]);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
  return [roundPlacement(clamp(x, 0, 100)), roundPlacement(clamp(y, 0, 100))];
}

function roundPlacement(value) {
  return Math.round(value * 100) / 100;
}

function createArrowMarker(product) {
  const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
  marker.id = `arrow-head-${product.id}`;
  marker.setAttribute("viewBox", "0 0 10 10");
  marker.setAttribute("refX", "8.8");
  marker.setAttribute("refY", "5");
  marker.setAttribute("markerWidth", "7");
  marker.setAttribute("markerHeight", "7");
  marker.setAttribute("orient", "auto-start-reverse");

  const head = document.createElementNS("http://www.w3.org/2000/svg", "path");
  head.setAttribute("d", "M 0 0 L 10 5 L 0 10 z");
  head.setAttribute("fill", product.accent);
  marker.append(head);
  return marker;
}

function createTargetArrow(product, callout, target) {
  const arrow = document.createElementNS("http://www.w3.org/2000/svg", "path");

  arrow.classList.add("target-arrow");
  arrow.dataset.product = product.id;
  arrow.dataset.filter = product.filter;
  updateTargetArrowPath(arrow, product, callout, target);
  arrow.setAttribute("stroke", product.accent);
  arrow.setAttribute("marker-end", `url(#arrow-head-${product.id})`);
  return arrow;
}

function updateTargetArrowPath(arrow, product, callout = product.calloutPosition || product.bodyPosition, target = product.bodyPosition) {
  const [labelX, labelY] = callout;
  const [targetX, targetY] = target;
  const dx = targetX - labelX;
  const dy = targetY - labelY;
  const distance = Math.hypot(dx, dy) || 1;
  const ux = dx / distance;
  const uy = dy / distance;
  const bend = product.arrowBend || 0;
  const startX = labelX + ux * 4.8;
  const startY = labelY + uy * 3.2;
  const endX = targetX - ux * 2.2;
  const endY = targetY - uy * 2.2;
  const controlX = (startX + endX) / 2 - uy * bend;
  const controlY = (startY + endY) / 2 + ux * bend;
  arrow.setAttribute("d", `M ${startX.toFixed(2)} ${startY.toFixed(2)} Q ${controlX.toFixed(2)} ${controlY.toFixed(2)} ${endX.toFixed(2)} ${endY.toFixed(2)}`);
}

function createFilterButtons() {
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.filter;
      document.querySelectorAll(".filter-button").forEach((item) => item.classList.toggle("is-active", item === button));
      const visibleProducts = products.filter((product) => currentFilter === "all" || product.filter === currentFilter);
      if (!visibleProducts.some((product) => product.id === activeId)) {
        selectProduct(visibleProducts[0].id);
      }
      updateVisibility();
    });
  });
}

function setupVideoPlayer() {
  if (!videoFrame || !videoUrlInput || !videoConnectButton || !videoOpenLink) return;

  videoConnectButton.addEventListener("click", () => {
    connectVideo(videoUrlInput.value, { autoplay: false, persist: true });
  });

  videoUrlInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      connectVideo(videoUrlInput.value, { autoplay: false, persist: true });
    }
  });

  videoUrlInput.addEventListener("change", () => {
    connectVideo(videoUrlInput.value, { autoplay: false, persist: true });
  });

  videoFrame.addEventListener("click", () => {
    playConnectedVideo();
  });

  videoFrame.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      playConnectedVideo();
    }
  });
}

function connectVideo(rawUrl, { autoplay = false, persist = false, productId = activeVideoProductId } = {}) {
  const video = parseYouTubeUrl(rawUrl);
  const targetProductId = productId || activeVideoProductId;

  if (!video) {
    activeVideo = null;
    videoOpenLink.removeAttribute("href");
    videoOpenLink.classList.add("is-disabled");
    videoFrame.classList.remove("is-playing");
    videoFrame.setAttribute("role", "button");
    videoFrame.setAttribute("tabindex", "0");
    videoFrame.setAttribute("aria-label", "동영상 재생");
    videoFrame.innerHTML = `<span class="video-placeholder is-empty" data-edit-key="video.placeholder">YouTube URL</span>`;
    if (videoMessage) {
      setEditableText(videoMessage, productTextKey(targetProductId, "video.emptyMessage"), getProductVideoEmptyMessage(targetProductId));
      videoMessage.classList.add("is-error");
    }
    return;
  }

  activeVideo = video;
  activeVideoProductId = targetProductId;
  const targetProduct = products.find((product) => product.id === activeVideoProductId);
  if (targetProduct) {
    targetProduct.videoUrl = video.watchUrl;
  }
  let didPersist = false;
  if (persist && activeVideoProductId) {
    didPersist = saveProductVideoUrl(activeVideoProductId, video.watchUrl);
  }
  videoUrlInput.value = video.watchUrl;
  videoOpenLink.href = video.watchUrl;
  videoOpenLink.classList.remove("is-disabled");
  if (videoMessage) {
    const connectedMessage = getProductVideoConnectedMessage(activeVideoProductId, { attemptedPersist: persist, persisted: didPersist });
    setEditableText(videoMessage, productTextKey(activeVideoProductId, "video.connectedMessage"), connectedMessage);
    videoMessage.textContent = connectedMessage;
    videoMessage.classList.remove("is-error");
  }

  if (autoplay) {
    renderVideoIframe(video);
  } else {
    renderVideoPoster(video);
  }
}

function playConnectedVideo() {
  if (!activeVideo) {
    connectVideo(videoUrlInput.value, { autoplay: true, persist: true });
    return;
  }

  renderVideoIframe(activeVideo);
}

function syncVideoForProduct(product) {
  if (!videoFrame || !videoUrlInput || !videoOpenLink) return;

  activeVideoProductId = product.id;
  const videoUrl = getProductVideoUrl(product);

  if (videoUrl) {
    connectVideo(videoUrl, { autoplay: false, persist: false, productId: product.id });
    return;
  }

  activeVideo = null;
  videoUrlInput.value = "";
  videoOpenLink.removeAttribute("href");
  videoOpenLink.classList.add("is-disabled");
  videoFrame.classList.remove("is-playing");
  videoFrame.setAttribute("role", "button");
  videoFrame.setAttribute("tabindex", "0");
  videoFrame.setAttribute("aria-label", "동영상 재생");
  videoFrame.innerHTML = `<span class="video-placeholder is-empty" data-edit-key="${productTextKey(product.id, "name")}">${escapeHtml(product.name)}</span>`;
  if (videoMessage) {
    setEditableText(videoMessage, productTextKey(product.id, "video.emptyMessage"), getProductVideoEmptyMessage(product.id));
    videoMessage.classList.remove("is-error");
  }
}

function getProductVideoUrl(product) {
  return storedProductVideoUrls[product.id] || product.videoUrl || "";
}

function loadStoredProductVideos() {
  try {
    return JSON.parse(window.localStorage.getItem(productVideoStorageKey) || "{}");
  } catch {
    return {};
  }
}

function saveProductVideoUrl(productId, videoUrl) {
  storedProductVideoUrls[productId] = videoUrl;
  try {
    window.localStorage.setItem(productVideoStorageKey, JSON.stringify(storedProductVideoUrls));
    return true;
  } catch {
    // The widget still works for this session if localStorage is unavailable.
    return false;
  }
}

function getProductVideoEmptyMessage(productId) {
  const product = products.find((item) => item.id === productId);
  return product ? `${product.name} 영상 URL을 입력하면 이 제품에 연결됩니다.` : "유튜브 URL을 확인해 주세요.";
}

function getProductVideoConnectedMessage(productId, { attemptedPersist = false, persisted = false } = {}) {
  const product = products.find((item) => item.id === productId);
  const productName = product ? product.name : "선택 제품";
  if (attemptedPersist && !persisted) {
    return `${productName} 영상 연결됨 - 현재 세션에만 유지됩니다`;
  }
  return persisted ? `${productName} 영상 연결 및 자동 저장 완료` : `${productName} 영상 연결됨`;
}

function renderVideoPoster(video) {
  videoFrame.classList.remove("is-playing");
  videoFrame.setAttribute("role", "button");
  videoFrame.setAttribute("tabindex", "0");
  videoFrame.setAttribute("aria-label", "동영상 재생");
  videoFrame.innerHTML = `
    <img src="${video.thumbnailUrl}" alt="" loading="lazy" />
    <span class="video-placeholder" aria-hidden="true"></span>
  `;
}

function renderVideoIframe(video) {
  videoFrame.classList.add("is-playing");
  videoFrame.removeAttribute("role");
  videoFrame.removeAttribute("tabindex");
  videoFrame.innerHTML = `
    <iframe
      src="${video.embedUrl}"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  `;
}

function parseYouTubeUrl(rawUrl) {
  const value = String(rawUrl || "").trim();
  if (!value) return null;

  if (/^[a-zA-Z0-9_-]{11}$/.test(value)) {
    return createYouTubeVideo(value);
  }

  const normalizedValue = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  let parsed;

  try {
    parsed = new URL(normalizedValue);
  } catch {
    return null;
  }

  const host = parsed.hostname.replace(/^www\./, "");
  let videoId = null;

  if (host === "youtu.be") {
    videoId = parsed.pathname.split("/").filter(Boolean)[0];
  }

  if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
    const parts = parsed.pathname.split("/").filter(Boolean);
    if (parsed.searchParams.has("v")) {
      videoId = parsed.searchParams.get("v");
    } else if (["embed", "shorts", "live"].includes(parts[0])) {
      videoId = parts[1];
    }
  }

  if (!/^[a-zA-Z0-9_-]{11}$/.test(videoId || "")) return null;

  return createYouTubeVideo(videoId);
}

function createYouTubeVideo(videoId) {
  return {
    id: videoId,
    watchUrl: `https://www.youtube.com/watch?v=${videoId}`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`,
    thumbnailUrl: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
  };
}

function setupInlineEditing() {
  document.addEventListener(
    "dblclick",
    (event) => {
      if (event.target.closest("input, textarea, select, iframe, canvas, svg")) return;

      const target = event.target.closest("[data-edit-key]");
      if (!target || !isEditableTextTarget(target)) return;

      event.preventDefault();
      event.stopPropagation();
      startInlineEdit(target);
    },
    true
  );
}

function startInlineEdit(element) {
  if (element.classList.contains("inline-editing")) return;

  const key = element.dataset.editKey;
  const previousValue = element.textContent.trim();
  let isFinished = false;

  element.dataset.previousText = previousValue;
  element.classList.add("inline-editing");
  element.setAttribute("contenteditable", "plaintext-only");
  element.setAttribute("spellcheck", "false");
  element.focus();
  selectElementText(element);

  const finish = (shouldCommit) => {
    if (isFinished) return;
    isFinished = true;

    element.removeEventListener("blur", onBlur);
    element.removeEventListener("keydown", onKeydown);
    element.removeAttribute("contenteditable");
    element.removeAttribute("spellcheck");
    element.classList.remove("inline-editing");

    const nextValue = shouldCommit ? element.textContent.trim() : previousValue;
    element.textContent = nextValue;

    if (shouldCommit && key) {
      saveInlineEdit(key, nextValue);
      applyInlineEditToData(key, nextValue);
      refreshTextBindings(key, nextValue, element);
    }

    delete element.dataset.previousText;
  };

  const onBlur = () => finish(true);
  const onKeydown = (event) => {
    event.stopPropagation();
    if (event.key === "Escape") {
      event.preventDefault();
      finish(false);
    }
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      finish(true);
    }
  };

  element.addEventListener("blur", onBlur);
  element.addEventListener("keydown", onKeydown);
}

function isEditableTextTarget(element) {
  if (element.closest("[aria-hidden='true']")) return false;
  if (element.offsetParent === null) return false;
  return element.textContent.trim().length > 0;
}

function selectElementText(element) {
  const range = document.createRange();
  range.selectNodeContents(element);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}

function setEditableText(element, key, fallbackText) {
  if (!element) return;
  element.dataset.editKey = key;
  element.textContent = getStoredInlineText(key, fallbackText);
}

function applyStoredStaticTextEdits() {
  document.querySelectorAll("[data-edit-key]").forEach((element) => {
    const key = element.dataset.editKey;
    if (Object.prototype.hasOwnProperty.call(storedInlineEdits, key)) {
      element.textContent = storedInlineEdits[key];
    }
  });
}

function applyStoredProductTextEdits() {
  products.forEach((product) => {
    product.name = getStoredInlineText(productTextKey(product.id, "name"), product.name);
    product.subtitle = getStoredInlineText(productTextKey(product.id, "subtitle"), product.subtitle);
    product.listSubtitle = getStoredInlineText(productTextKey(product.id, "listSubtitle"), product.listSubtitle || product.subtitle);
    product.region = getStoredInlineText(productTextKey(product.id, "region"), product.region);
    product.summary = getStoredInlineText(productTextKey(product.id, "summary"), product.summary);
    product.metrics = product.metrics.map(([value, label], index) => [
      getStoredInlineText(productMetricKey(product.id, index, "value"), value),
      getStoredInlineText(productMetricKey(product.id, index, "label"), label),
    ]);
    product.flow = product.flow.map((item, index) => getStoredInlineText(productFlowKey(product.id, index), item));
  });
}

function getStoredInlineText(key, fallbackText) {
  return Object.prototype.hasOwnProperty.call(storedInlineEdits, key) ? storedInlineEdits[key] : fallbackText;
}

function saveInlineEdit(key, value) {
  storedInlineEdits[key] = value;
  try {
    window.localStorage.setItem(inlineEditStorageKey, JSON.stringify(storedInlineEdits));
  } catch {
    // Inline edits still remain visible for the current session if storage is blocked.
  }
}

function loadStoredInlineEdits() {
  try {
    return JSON.parse(window.localStorage.getItem(inlineEditStorageKey) || "{}");
  } catch {
    return {};
  }
}

function applyInlineEditToData(key, value) {
  const parts = key.split(".");
  if (parts[0] !== "product") return;

  const product = products.find((item) => item.id === parts[1]);
  if (!product) return;

  if (["name", "subtitle", "listSubtitle", "region", "summary"].includes(parts[2])) {
    product[parts[2]] = value;
    return;
  }

  if (parts[2] === "metrics") {
    const index = Number(parts[3]);
    const field = parts[4] === "label" ? 1 : 0;
    if (product.metrics[index]) product.metrics[index][field] = value;
    return;
  }

  if (parts[2] === "flow") {
    const index = Number(parts[3]);
    if (Number.isInteger(index) && product.flow[index] !== undefined) product.flow[index] = value;
  }
}

function refreshTextBindings(key, value, sourceElement) {
  document.querySelectorAll("[data-edit-key]").forEach((element) => {
    if (element === sourceElement || element.dataset.editKey !== key || element.classList.contains("inline-editing")) return;
    element.textContent = value;
  });
}

function productTextKey(productId, field) {
  return `product.${productId}.${field}`;
}

function productMetricKey(productId, index, field) {
  return `product.${productId}.metrics.${index}.${field}`;
}

function productFlowKey(productId, index) {
  return `product.${productId}.flow.${index}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function selectProduct(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  activeId = id;
  setEditableText(activeRegion, productTextKey(product.id, "region"), product.region);
  setEditableText(activeProduct, productTextKey(product.id, "name"), product.name);
  setEditableText(detailKicker, productTextKey(product.id, "subtitle"), product.subtitle);
  setEditableText(detailName, productTextKey(product.id, "name"), product.name);
  detailImage.src = product.photo;
  detailImage.alt = `${product.name} product image`;
  setEditableText(detailSummary, productTextKey(product.id, "summary"), product.summary);
  detailPanel.style.setProperty("--accent", product.accent);

  detailMetrics.innerHTML = product.metrics
    .map(
      ([value, label], index) => `
      <div class="metric">
        <strong data-edit-key="${productMetricKey(product.id, index, "value")}">${escapeHtml(value)}</strong>
        <span data-edit-key="${productMetricKey(product.id, index, "label")}">${escapeHtml(label)}</span>
      </div>
    `
    )
    .join("");

  detailFlow.innerHTML = product.flow.map((item, index) => `<li data-edit-key="${productFlowKey(product.id, index)}">${escapeHtml(item)}</li>`).join("");

  document.querySelectorAll(".product-item").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.product === id);
  });
  labelEntries.forEach(({ element }, productId) => {
    element.classList.toggle("is-active", productId === id);
  });
  photoEntries.forEach(({ element }, productId) => {
    element.classList.toggle("is-active", productId === id);
  });
  bodyHotspotEntries.forEach((entry, productId) => {
    const isActive = productId === id;
    entry.button.classList.toggle("is-active", isActive);
    entry.targetPin.classList.toggle("is-active", isActive);
    entry.arrow.classList.toggle("is-active", isActive);
  });
  syncVideoForProduct(product);

  desiredTarget = new THREE.Vector3(0, 1.25, 0);
  desiredCamera = new THREE.Vector3(0, 1.25, 5.2);
  updateVisibility();
}

function updateVisibility() {
  products.forEach((product) => {
    const inFilter = currentFilter === "all" || product.filter === currentFilter;
    const isActive = product.id === activeId;
    const group = productGroups.get(product.id);
    const hotspot = hotspots.find((item) => item.userData.productId === product.id);
    const listItem = document.querySelector(`[data-product="${product.id}"]`);
    const label = labelEntries.get(product.id)?.element;
    const photo = photoEntries.get(product.id)?.element;
    const bodyHotspot = bodyHotspotEntries.get(product.id);

    if (group) group.visible = false;
    if (hotspot) hotspot.visible = false;
    if (listItem) listItem.style.display = inFilter ? "" : "none";
    if (label) label.style.display = "none";
    if (photo) photo.style.display = "none";
    if (bodyHotspot) {
      bodyHotspot.button.style.display = inFilter ? "" : "none";
      bodyHotspot.targetPin.style.display = inFilter ? "" : "none";
      bodyHotspot.arrow.style.display = inFilter ? "" : "none";
    }
  });
}

function animate() {
  const delta = clock.getDelta();
  const elapsed = clock.elapsedTime;

  controls.autoRotate = false;
  camera.position.lerp(desiredCamera, 0.018);
  controls.target.lerp(desiredTarget, 0.04);
  controls.update(delta);

  bodyGroup.rotation.y = 0;

  if (autoplayToggle?.checked && elapsed - lastAutoSwitch > 4) {
    const visibleProducts = products.filter((product) => currentFilter === "all" || product.filter === currentFilter);
    const currentIndex = visibleProducts.findIndex((product) => product.id === activeId);
    const nextProduct = visibleProducts[(currentIndex + 1) % visibleProducts.length];
    if (nextProduct) {
      selectProduct(nextProduct.id);
      lastAutoSwitch = elapsed;
    }
  }

  products.forEach((product) => {
    const isActive = product.id === activeId;
    const group = productGroups.get(product.id);
    const hotspot = hotspots.find((item) => item.userData.productId === product.id);
    if (!group || !hotspot) return;

    const activePulse = isActive ? 1 + Math.sin(elapsed * 3.4) * 0.035 : 1;
    group.scale.lerp(new THREE.Vector3(isActive ? activePulse : 0.86, isActive ? activePulse : 0.86, isActive ? activePulse : 0.86), 0.09);
    group.rotation.y += isActive ? 0.006 : 0.0015;

    setGroupOpacity(group, isActive ? 1 : 0.42);
    hotspot.scale.setScalar(isActive ? 1.25 + Math.sin(elapsed * 4.2) * 0.08 : 0.88);

    group.traverse((object) => {
      if (object.name === "actionRing") {
        const phase = object.userData.phase || 0;
        const wave = (elapsed * 0.75 + phase) % 1;
        object.scale.setScalar(0.68 + wave * 0.68);
        if (object.material) object.material.opacity = isActive ? (1 - wave) * 0.34 : 0.08;
      }
      if (object.name === "beam" && object.material) {
        object.material.opacity = isActive ? 0.22 + Math.sin(elapsed * 5.5) * 0.08 : 0.08;
      }
      if (object.name === "glow") {
        object.scale.setScalar(isActive ? 1 + Math.sin(elapsed * 6) * 0.22 : 0.76);
      }
      if (object.name === "wave") {
        object.position.x = Math.sin(elapsed * 2.4) * 0.04;
      }
      if (object.name === "portal" || object.name === "pilot") {
        object.rotation.z += isActive ? 0.018 : 0.004;
      }
    });
  });

  updateLabels();
  updatePhotoCards();
  renderer.render(scene, camera);
}

function setGroupOpacity(group, targetOpacity) {
  group.traverse((object) => {
    const material = object.material;
    if (!material) return;
    const materials = Array.isArray(material) ? material : [material];
    materials.forEach((item) => {
      if (item.userData.baseOpacity === undefined) {
        item.userData.baseOpacity = item.opacity ?? 1;
        item.userData.baseTransparent = item.transparent;
      }
      item.transparent = true;
      item.opacity = Math.min(item.userData.baseOpacity, targetOpacity * item.userData.baseOpacity);
    });
  });
}

function updateLabels() {
  const rect = canvas.getBoundingClientRect();
  const temp = new THREE.Vector3();
  labelEntries.forEach(({ element, position, offset }, id) => {
    if (element.style.display === "none") return;
    const compact = window.innerWidth < 520 && id !== activeId;
    element.classList.toggle("is-compact", compact);
    temp.copy(position);
    temp.project(camera);
    const labelWidth = compact ? 20 : element.offsetWidth || 96;
    const labelHeight = compact ? 20 : element.offsetHeight || 32;
    const rawX = (temp.x * 0.5 + 0.5) * rect.width + offset[0];
    const rawY = (-temp.y * 0.5 + 0.5) * rect.height + offset[1];
    const visibleWidth = Math.min(rect.width, window.innerWidth);
    const x = clamp(rawX, labelWidth / 2 + 8, visibleWidth - labelWidth / 2 - 8);
    const y = clamp(rawY, labelHeight / 2 + 8, rect.height - labelHeight / 2 - 8);
    const behind = temp.z > 1;
    element.style.opacity = behind ? "0" : id === activeId ? "1" : "0.78";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    element.style.transform = "translate(-50%, -50%)";
    element.style.zIndex = id === activeId ? "3" : "2";
  });
}

function updatePhotoCards() {
  const rect = canvas.getBoundingClientRect();
  const temp = new THREE.Vector3();
  photoEntries.forEach(({ element, position, offset }, id) => {
    if (element.style.display === "none") return;
    const isActive = id === activeId;
    const activeOnly = !isActive;
    temp.copy(position);
    temp.project(camera);
    const cardWidth = element.offsetWidth || 154;
    const cardHeight = element.offsetHeight || 126;
    const rawX = (temp.x * 0.5 + 0.5) * rect.width + offset[0];
    const rawY = (-temp.y * 0.5 + 0.5) * rect.height + offset[1];
    const visibleWidth = Math.min(rect.width, window.innerWidth);
    const x = clamp(rawX, cardWidth / 2 + 8, visibleWidth - cardWidth / 2 - 8);
    const y = clamp(rawY, cardHeight / 2 + 8, rect.height - cardHeight / 2 - 8);
    const behind = temp.z > 1;
    element.style.opacity = behind || activeOnly ? "0" : isActive ? "1" : "0.7";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    element.style.transform = "translate(-50%, -50%)";
    element.style.zIndex = isActive ? "4" : "2";
  });
}

function onCanvasPointerDown(event) {
  const rect = canvas.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const hit = raycaster.intersectObjects(hotspots, true)[0];
  const productId = hit?.object?.userData?.productId || hit?.object?.parent?.userData?.productId;
  if (productId) selectProduct(productId);
}

function resize() {
  const { width, height } = canvas.getBoundingClientRect();
  camera.aspect = Math.max(width, 1) / Math.max(height, 1);
  camera.updateProjectionMatrix();
  renderer.setSize(width, height, false);
}

function standard(color, opacity = 1) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: 0.43,
    metalness: 0.03,
    transparent: opacity < 1,
    opacity,
  });
}

function tubeThrough(points, radius, material) {
  const curve = new THREE.CatmullRomCurve3(points.map(vec));
  const geometry = new THREE.TubeGeometry(curve, 42, radius, 10, false);
  return new THREE.Mesh(geometry, material);
}

function taperedCylinderBetween(start, end, startRadius, endRadius, material, radialSegments = 16) {
  const direction = new THREE.Vector3().subVectors(end, start);
  const length = direction.length();
  const geometry = new THREE.CylinderGeometry(endRadius, startRadius, length, radialSegments);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(start).add(end).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
  mesh.castShadow = true;
  return mesh;
}

function cylinderBetween(start, end, radius, material, radialSegments = 16) {
  const direction = new THREE.Vector3().subVectors(end, start);
  const length = direction.length();
  const geometry = new THREE.CylinderGeometry(radius, radius, length, radialSegments);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(start).add(end).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
  mesh.castShadow = true;
  return mesh;
}

function vec(value) {
  if (value instanceof THREE.Vector3) return value.clone();
  return new THREE.Vector3(value[0], value[1], value[2]);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
