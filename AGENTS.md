# HR Lounge Project Notes

이 프로젝트의 현재 기본 운영 방식은 Vercel + GitHub + JSON 데이터 + 이미지 파일 분리 저장이다. 새 채팅이나 다른 작업자가 이어서 작업할 때 아래 원칙을 우선한다.

## Current Architecture

- 배포 대상은 Vercel의 `hr-lounge.vercel.app`이다.
- 정적 화면은 `index.html`, `styles.css`, `app.js`, `assets/`를 사용한다.
- 글과 사이트 설정 데이터는 `blog-data.json`에 저장한다.
- 관리자 저장은 `api/blog-data.js` Vercel Serverless Function을 통해 GitHub에 자동 커밋한다.
- 이미지는 `blog-data.json`에 `data:image`로 넣지 않는다.
- 관리자에서 업로드한 이미지는 `assets/uploads/`에 파일로 저장하고, `blog-data.json`에는 `./assets/uploads/...` 경로만 저장한다.
- 기존에 JSON 안에 들어간 `data:image`는 저장 API 또는 `scripts/migrate-blog-images.js`로 파일 분리한다.
- 관리자 `사이트 설정` 화면에는 `저장용량 현황`을 표시한다. 데이터 파일 기준 권장 3MB, 저장 요청 기준 최대 4.5MB를 함께 보여준다.
- 상단 메뉴와 좌측 목차 표시명은 관리자 `사이트 설정 > 상단/좌측 메뉴`에서 수정한다. 카테고리 slug와 글의 내부 taxonomy 값은 필터/기존 글 연결용이므로 바꾸지 말고, 화면 표시명만 `siteSettings`로 덮어쓴다.

## Do Not Revert To Old Flow

- Google Apps Script 저장 방식을 기본값으로 되돌리지 않는다.
- `JSON 내보내기` 수동 덮어쓰기는 자동 저장이 안 될 때의 백업 수단으로만 둔다.
- 새 이미지 업로드 기능을 만들 때 `FileReader.readAsDataURL()` 결과를 최종 데이터로 저장하지 않는다.
- GitHub 토큰, 관리자 비밀번호, 세션 secret은 코드에 하드코딩하지 않는다. Vercel 환경변수만 사용한다.

## Required Vercel Environment Variables

- `HR_LOUNGE_ADMIN_PASSWORD`
- `HR_LOUNGE_SESSION_SECRET`
- `GITHUB_TOKEN`
- `GITHUB_OWNER`
- `GITHUB_REPO`
- `GITHUB_BRANCH`
- `GITHUB_UPLOAD_DIR` optional, default `assets/uploads`
- `GITHUB_DATA_PATH` optional, default `blog-data.json`

## Files That Must Be Deployed

- `index.html`
- `styles.css`
- `app.js`
- `blog-data.json`
- `api/`
- `assets/`
- `scripts/`
- `README.md`
- `AGENTS.md`

## Files To Exclude From GitHub/Vercel

- `*.zip`
- `tmp-*.png`
- `.env`
- `.env.*`
- `.vercel/`
- `node_modules/`

## Verification Checklist

- `node --check app.js`
- `node --check api/blog-data.js`
- `node --check scripts/migrate-blog-images.js`
- `blog-data.json` should not contain `data:image/`.
- Uploaded image paths referenced by `blog-data.json` should exist under `assets/uploads/`.
- `/api/blog-data` on Vercel should return `configured: true` and `githubConfigured: true` after environment variables are set.
