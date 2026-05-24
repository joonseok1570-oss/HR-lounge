# HR Lounge static homepage

사내 URL 배포를 염두에 둔 정적 HR 홈페이지입니다. 별도 빌드 과정 없이 `index.html`, `styles.css`, `app.js`, `assets/` 폴더를 같은 위치에 배포하면 됩니다.

## 파일 구성

- `index.html`: 홈페이지 마크업
- `styles.css`: Framer풍 프리미엄 SaaS 스타일
- `app.js`: 메뉴 데이터, 검색, 블로그 편집기, 카테고리 필터, 링크 설정
- `assets/hr-main-culture.jpg`: 홈페이지 메인 히어로 이미지 자산
- `assets/hr-main-culture.png`: 원본 백업 이미지

## 사내 URL 연결

`app.js` 상단의 값을 실제 사내 도메인으로 변경하세요.

```js
const INTERNAL_BASE_URL = "https://hr.company.local";
```

각 메뉴별 상세 경로는 `resources` 배열의 `url` 값을 바꾸면 됩니다. 현재는 데모용 내부 도메인이라 클릭 시 안내 토스트만 표시됩니다.

## 블로그 편집

상단의 `Culture`, `HR Guide`, `Work Tool`, `Help Desk` 메뉴는 블로그 페이지로 이동합니다. 로컬 정적 HTML에서는 브라우저 localStorage에 저장되고, Google Apps Script 배포본에서는 `Code.gs`의 `getBlogState` / `saveBlogState`가 Script Properties에 공유 저장합니다.

글 작성, 수정, 삭제는 관리자 비밀번호 `1966`을 입력한 뒤 사용할 수 있습니다. Google Apps Script 배포본에서는 로그인 성공 시 발급되는 관리자 세션 토큰이 있어야 저장할 수 있습니다.

## 배포

정적 파일 배포가 가능한 사내 웹서버에 이 폴더의 내용을 업로드하면 됩니다.

- IIS: 사이트 루트 또는 가상 디렉터리에 업로드
- Nginx/Apache: 정적 루트에 업로드
- 사내 포털/문서 서버: HTML 정적 호스팅 영역에 업로드

상대 경로만 사용하므로 `/hr`, `/people/hr`, `/portal/hr` 같은 하위 경로 배포에도 대응됩니다.
