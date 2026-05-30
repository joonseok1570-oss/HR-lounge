# HR Lounge static homepage

사내 URL 배포를 염두에 둔 HR 홈페이지입니다. 별도 빌드 과정 없이 `index.html`, `styles.css`, `app.js`, `blog-data.json`, `assets/`, `api/` 폴더를 같은 위치에 배포하면 됩니다.

## 파일 구성

- `AGENTS.md`: 새 채팅이나 다른 작업자가 이어서 작업할 때 우선 참고할 프로젝트 운영 원칙
- `index.html`: 홈페이지 마크업
- `login.html`, `logout.html`: 회사 Google 계정 로그인과 HR Lounge 세션 로그아웃 화면
- `middleware.ts`: Vercel 배포본의 로그인 보호 라우팅
- `styles.css`: Framer풍 프리미엄 SaaS 스타일
- `app.js`: 메뉴 데이터, 검색, 블로그 편집기, 카테고리 필터, 링크 설정
- `blog-data.json`: GitHub/Vercel 정적 배포에서 공유할 블로그 글과 사이트 설정 데이터
- `api/blog-data.js`: Vercel에서 관리자 로그인과 GitHub 자동 저장을 처리하는 서버 함수
- `api/auth.js`: Google ID token 검증과 HR Lounge 세션 쿠키 발급/해제 함수
- `assets/uploads/`: 관리자에서 올린 이미지가 저장되는 폴더
- `assets/auth-access-bg.jpg`: 로그인/로그아웃 화면 배경 이미지
- `assets/hr-main-culture.jpg`: 홈페이지 메인 히어로 이미지 자산
- `assets/hr-main-culture.png`: 원본 백업 이미지

## 사내 URL 연결

`app.js` 상단의 값을 실제 사내 도메인으로 변경하세요.

```js
const INTERNAL_BASE_URL = "https://hr.company.local";
```

각 메뉴별 상세 경로는 `resources` 배열의 `url` 값을 바꾸면 됩니다. 현재는 데모용 내부 도메인이라 클릭 시 안내 토스트만 표시됩니다.

## 블로그 편집

상단의 `Culture`, `HR Guide`, `Work Tool`, `Help Desk` 메뉴는 블로그 페이지로 이동합니다. 로컬 정적 HTML에서는 브라우저 localStorage에 저장되고, GitHub/Vercel 같은 배포본에서는 `blog-data.json`을 초기 데이터로 읽습니다. Vercel 환경변수를 설정하면 관리자 저장 시 `api/blog-data.js`가 GitHub의 `blog-data.json`을 자동 커밋합니다.

이미지는 `blog-data.json`에 직접 넣지 않고 `assets/uploads/`에 파일로 저장한 뒤, 글 데이터에는 이미지 경로만 남깁니다. 기존 `data:image` 형태의 이미지는 저장 과정에서 자동으로 파일로 분리됩니다. 로컬 파일을 직접 정리할 때는 `node scripts/migrate-blog-images.js`를 실행하세요.

관리자 `사이트 설정` 화면의 `저장용량 현황`에서 `blog-data.json` 크기, 업로드 이미지 개수/용량, 전체 콘텐츠 용량을 확인할 수 있습니다. 데이터 파일은 권장 3MB, 저장 요청 기준 최대 4.5MB를 기준으로 표시합니다.

관리자로 로그인하면 상단 메뉴와 좌측 목차에 `메뉴 수정`/`목차 수정` 버튼이 표시됩니다. 이 버튼은 `사이트 설정`의 `상단/좌측 메뉴` 영역으로 바로 이동하며, 메뉴명과 좌측 폴더 표시명을 수정할 수 있습니다. 기존 글의 분류가 깨지지 않도록 내부 분류값은 유지하고 화면에 보이는 표시명만 바꿉니다.

글 작성, 수정, 삭제는 관리자 비밀번호를 입력한 뒤 사용할 수 있습니다. 로컬 미리보기에서는 기본 비밀번호 `1966`을 사용하고, Vercel 배포본에서는 `HR_LOUNGE_ADMIN_PASSWORD` 환경변수 값을 사용합니다.

자동 저장을 설정하지 않은 경우에는 최신 글이 보이는 브라우저에서 관리자 로그인 후 `사이트 설정`의 `JSON 내보내기`를 눌러 `blog-data.json`을 내려받고, 프로젝트 루트의 `blog-data.json`을 그 파일로 교체한 뒤 GitHub에 푸시하세요.

## Vercel 자동 저장 환경변수

Vercel 프로젝트의 Settings > Environment Variables에 아래 값을 추가하면 관리자 저장 버튼이 GitHub 커밋까지 자동으로 수행합니다.

- `HR_LOUNGE_ADMIN_PASSWORD`: 관리자 로그인 비밀번호
- `HR_LOUNGE_SESSION_SECRET`: 관리자 세션 서명용 긴 임의 문자열
- `GITHUB_TOKEN`: GitHub fine-grained token 또는 classic token. 대상 저장소의 Contents read/write 권한이 필요합니다.
- `GITHUB_OWNER`: GitHub 계정 또는 조직명
- `GITHUB_REPO`: 저장소 이름
- `GITHUB_BRANCH`: 배포 브랜치. 생략하면 Vercel 배포 브랜치 또는 `main`을 사용합니다.
- `GITHUB_DATA_PATH`: 생략 가능. 기본값은 `blog-data.json`입니다.
- `GITHUB_UPLOAD_DIR`: 생략 가능. 기본값은 `assets/uploads`입니다.

환경변수를 추가한 뒤 Vercel에서 다시 배포하세요. 이후 관리자에서 글을 저장하면 브라우저에도 저장되고, GitHub의 `blog-data.json`에도 커밋됩니다. Vercel 반영은 GitHub 커밋 후 재배포 시간만큼 조금 늦게 보일 수 있습니다.

## Solmedix 계정 로그인

Vercel 배포본은 `middleware.ts`와 `api/auth.js`를 통해 회사 Google Workspace 계정만 접속하도록 보호합니다. 로그인 화면은 `login.html`이며, Chrome에 회사 Google 계정이 연결되어 있으면 Google One Tap 또는 계정 선택으로 바로 입장할 수 있습니다. 이미 로그인된 사용자는 상단의 `로그아웃` 버튼 또는 `logout.html`에서 HR Lounge 세션을 종료할 수 있습니다.

아래 환경변수를 Vercel Project Settings > Environment Variables에 추가해야 실제 로그인이 동작합니다.

- `HR_LOUNGE_GOOGLE_CLIENT_ID`: Google Cloud Console에서 만든 OAuth 2.0 Web Client ID
- `HR_LOUNGE_ALLOWED_DOMAIN`: 생략 가능. 기본값은 `solmedix.com`
- `HR_LOUNGE_SESSION_SECRET`: 로그인 쿠키 서명에도 함께 사용합니다.

Google OAuth Web Client에는 Authorized JavaScript origins로 `https://hr-lounge.vercel.app`과 운영 도메인을 등록하세요. GitHub 저장소가 public이면 배포 페이지를 보호하더라도 `blog-data.json`과 `assets/` 원본이 GitHub에서 보일 수 있으므로, 보안 운영 시에는 저장소도 private 상태로 유지하는 것이 원칙입니다.

## 배포

정적 파일 배포가 가능한 사내 웹서버에 이 폴더의 내용을 업로드하면 됩니다.

- IIS: 사이트 루트 또는 가상 디렉터리에 업로드
- Nginx/Apache: 정적 루트에 업로드
- 사내 포털/문서 서버: HTML 정적 호스팅 영역에 업로드

상대 경로만 사용하므로 `/hr`, `/people/hr`, `/portal/hr` 같은 하위 경로 배포에도 대응됩니다.
