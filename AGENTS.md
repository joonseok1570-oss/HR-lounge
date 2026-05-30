# HR Lounge Project Notes

이 프로젝트의 현재 기본 운영 방식은 Vercel + GitHub + JSON 데이터 + 이미지 파일 분리 저장이다. 새 채팅이나 다른 작업자가 이어서 작업할 때 아래 원칙을 우선한다.

## Mandatory Default Workflow

이 프로젝트에서 Codex가 파일을 수정하는 기본값은 **로컬 수정 + GitHub 반영 + Vercel 배포 확인**이다.

- 사용자가 "로컬에서만", "배포하지 말고", "내가 직접 올릴게"라고 명시하지 않는 한, 모든 실제 변경은 아래 흐름으로 완료한다.
- 1단계: `C:\Users\Master\OneDrive\업무 자동화\HR 전용 홈페이지` 로컬 파일을 먼저 수정한다.
- 2단계: 로컬 미리보기 또는 파일 검증으로 변경 결과를 확인한다.
- 3단계: 같은 변경을 GitHub 저장소 `joonseok1570-oss/HR-lounge`의 `main` 브랜치에 커밋하고 푸시한다.
- 4단계: Vercel 프로젝트 `hr-lounge`의 최신 Production 배포가 `READY`인지 확인한다.
- 5단계: 최종 응답에는 변경 내용, GitHub 커밋 SHA, Vercel 배포 상태/링크를 함께 보고한다.
- GitHub 커밋 작성자는 GitHub 계정과 매칭되는 값(`joonseok1570-oss <joonseok1570@gmail.com>`)을 사용한다.
- Vercel 배포가 `BLOCKED`, `ERROR`, `CANCELED`이면 작업 완료로 보고하지 말고 원인과 다음 조치를 설명한다.

이 규칙은 PC가 바뀌어도 유지되어야 한다. 새 PC에서 작업할 때도 먼저 GitHub/Vercel 기준 최신 상태를 맞춘 뒤 같은 흐름으로 진행한다.

## Mandatory Lightweight Data Workflow

Vercel Hobby 기준으로 오래 운영하기 위해 `blog-data.json`은 항상 가볍게 유지한다. 이 규칙은 PC가 바뀌어도 기본값으로 적용한다.

- `blog-data.json`에는 글/사이트 설정/메뉴/이미지 경로 같은 텍스트 메타데이터만 저장한다.
- 이미지, 썸네일, 첨부성 시각 자료는 반드시 `assets/` 아래 파일로 저장하고, `blog-data.json`에는 `./assets/...` 상대 경로만 저장한다.
- `blog-data.json`에 `data:image/`, base64 이미지, 긴 바이너리 문자열을 넣지 않는다.
- 새 대표 이미지, 본문 이미지, 썸네일, 제품 이미지, 온보딩 이미지 작업은 `assets/uploads/` 또는 해당 기능 폴더의 `assets/`에 파일을 추가/교체하는 방식으로 처리한다.
- 동영상 파일은 저장하지 않는다. 영상은 `videoUrl` 같은 URL 필드로만 연결하고, 썸네일이 필요하면 이미지 파일을 `assets/`에 둔다.
- `blog-data.json` 권장 크기는 3MB 이하, 저장 요청 기준 한계는 4.5MB 이하로 본다. 3MB를 넘으면 새 이미지/본문 구조를 재검토하고, 4.5MB에 가까우면 완료로 보지 않는다.
- 커밋 전 기본 검증으로 `node scripts/check-blog-data-weight.js`를 실행한다. 실패하면 `scripts/migrate-blog-images.js`로 이미지 분리 또는 수동 자산 분리를 먼저 끝낸 뒤 다시 검증한다.
- 다른 PC에서 작업할 때도 GitHub의 `blog-data.json`과 `assets/`를 함께 최신화한 뒤 시작한다. JSON만 복사해서 이미지 경로가 깨진 상태로 작업하지 않는다.

## Current Architecture

- 배포 대상은 Vercel의 `hr-lounge.vercel.app`이다.
- 정적 화면은 `index.html`, `styles.css`, `app.js`, `assets/`를 사용한다.
- 글과 사이트 설정 데이터는 `blog-data.json`에 저장한다.
- 관리자 저장은 `api/blog-data.js` Vercel Serverless Function을 통해 GitHub에 자동 커밋한다.
- 이미지는 `blog-data.json`에 `data:image`로 넣지 않는다.
- 관리자에서 업로드한 이미지는 `assets/uploads/`에 파일로 저장하고, `blog-data.json`에는 `./assets/uploads/...` 경로만 저장한다.
- 기존에 JSON 안에 들어간 `data:image`는 저장 API 또는 `scripts/migrate-blog-images.js`로 파일 분리한다.
- 원격 관리자 세션이 없을 때 이미지 업로드 결과를 `data:image`로 로컬 저장하지 않는다. 이미지 업로드는 Vercel 주소에서 관리자 로그인 후 GitHub 저장 API로만 처리한다.
- 동영상 글은 영상 파일을 직접 저장하지 않고 `videoUrl`에 YouTube 링크만 저장한다. 영상 미리보기 이미지는 `videoThumbnail`에 별도 저장하며, 값이 없으면 대표 이미지 또는 YouTube 기본 썸네일을 사용한다. 상세/미리보기 화면에서는 썸네일 카드를 먼저 보여주고, 사용자가 재생을 누를 때만 YouTube iframe을 로드한다. YouTube embed는 `https://www.youtube.com/embed/...`와 현재 `origin`을 사용하며, `file://`로 직접 열면 YouTube 정책상 inline 재생이 막힐 수 있으므로 새 탭으로 우회한다.
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
- `node scripts/check-blog-data-weight.js`
- `blog-data.json` should not contain `data:image/`.
- Uploaded image paths referenced by `blog-data.json` should exist under `assets/uploads/`.
- `/api/blog-data` on Vercel should return `configured: true` and `githubConfigured: true` after environment variables are set.
