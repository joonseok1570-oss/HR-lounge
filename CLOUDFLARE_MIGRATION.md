# Cloudflare Pages migration guide

This project now supports Cloudflare Pages in addition to the legacy Vercel deployment.

## What changed in the code

- `functions/_middleware.js` protects the Cloudflare Pages site with the existing `hr_lounge_access` session cookie.
- `functions/api/auth.js` replaces the Vercel `/api/auth` function on Cloudflare Pages.
- `functions/api/blog-data.js` replaces the Vercel `/api/blog-data` function on Cloudflare Pages.
- The legacy Vercel files remain in place:
  - `middleware.ts`
  - `api/auth.js`
  - `api/blog-data.js`

This keeps the current Vercel deployment usable while Cloudflare is being configured.

## Recommended Cloudflare Pages setup

1. Log in to Cloudflare.
2. Go to `Workers & Pages`.
3. Select `Create application`.
4. Select `Pages`.
5. Select `Connect to Git`.
6. Connect GitHub and choose `joonseok1570-oss/HR-lounge`.
7. Use these build settings:
   - Project name: `hr-lounge`
   - Production branch: `main`
   - Framework preset: `None`
   - Build command: `exit 0`
   - Build output directory: `.`
   - Root directory: leave blank, or use `/` if Cloudflare asks for one
8. Create the project.

Cloudflare recommends `exit 0` for static HTML projects that still need Pages Functions.

The repo also includes `wrangler.toml` so Cloudflare has an explicit Pages
Functions runtime configuration:

```toml
name = "hr-lounge"
pages_build_output_dir = "."
compatibility_date = "2026-05-30"
```

Do not add `nodejs_compat` unless a later dependency really needs Node.js
runtime APIs. The current Cloudflare Functions code uses Web APIs instead.

## Required environment variables

Set these in `Workers & Pages > hr-lounge > Settings > Environment variables`.

Set them for `Production` first. For `Preview`, either omit the GitHub write token or use a restricted test token.

| Name | Required | Sensitive | Notes |
| --- | --- | --- | --- |
| `HR_LOUNGE_ADMIN_PASSWORD` | Yes | Yes | Admin editor password. |
| `HR_LOUNGE_SESSION_SECRET` | Yes | Yes | Long random session signing secret. Use the same value as Vercel during transition if possible. |
| `HR_LOUNGE_GOOGLE_CLIENT_ID` | Yes | No | Google OAuth Web Client ID. |
| `HR_LOUNGE_ALLOWED_DOMAIN` | Recommended | No | Use `solmedix.com`. Defaults to `solmedix.com` if omitted. |
| `HR_LOUNGE_ALLOWED_EMAILS` | Optional | Yes | Comma, space, or newline separated exact email exceptions such as `person@gmail.com,person@naver.com`. These users still sign in through Google, so the email must be usable as a Google account. |
| `GITHUB_TOKEN` | Yes | Yes | Fine-grained token with contents read/write access to this repo. |
| `GITHUB_OWNER` | Yes | No | `joonseok1570-oss` |
| `GITHUB_REPO` | Yes | No | `HR-lounge` |
| `GITHUB_BRANCH` | Yes | No | `main` |
| `GITHUB_DATA_PATH` | Recommended | No | `blog-data.json` |
| `GITHUB_UPLOAD_DIR` | Recommended | No | `assets/uploads` |
| `GITHUB_COMMITTER_NAME` | Recommended | No | GitHub-verified committer name. |
| `GITHUB_COMMITTER_EMAIL` | Recommended | No | GitHub-verified email, for example `joonseok1570@gmail.com`. |

After saving environment variables, redeploy the latest production deployment.

## Google Cloud OAuth settings

In Google Cloud Console:

1. Go to the project that owns the OAuth Web Client.
2. Open `APIs & Services > Credentials`.
3. Open the OAuth 2.0 Web Client used for HR Lounge.
4. Add these `Authorized JavaScript origins`:
   - `https://<cloudflare-project>.pages.dev`
   - Your custom domain, for example `https://hr.solmedix.com`
   - Keep `https://hr-lounge.vercel.app` during the transition if Vercel is still used.
5. Save.

This project uses Google Identity Services ID tokens, so an authorized redirect URI is not needed for the current login flow.
If `HR_LOUNGE_ALLOWED_EMAILS` includes personal addresses outside `solmedix.com`, make sure the OAuth app audience allows those Google accounts. If the Google app is limited to the company workspace, personal Gmail or Google-connected Naver emails will be blocked before HR Lounge can approve them.

## Runtime security settings

Because `functions/_middleware.js` protects the whole site, set Cloudflare Pages to fail closed:

1. Go to `Workers & Pages > hr-lounge > Settings > Runtime`.
2. Find `Fail open / closed`.
3. Select `Fail closed`.

This prevents static files from being served publicly if the free Pages Functions quota is exhausted.

## Custom domain

If the domain is already managed in Cloudflare:

1. Go to `Workers & Pages > hr-lounge > Custom domains`.
2. Add the desired hostname, for example `hr.solmedix.com`.
3. Let Cloudflare create the DNS record automatically.
4. Confirm SSL is active.

If the domain is not managed in Cloudflare:

1. Add the custom domain in the Pages project.
2. Create the CNAME record Cloudflare gives you at the external DNS provider.
3. Wait for DNS and SSL verification.

## Optional Cloudflare Access mode

Cloudflare Access can protect the whole hostname before the app loads.

Use this only after deciding whether you want Cloudflare's login screen in front of the custom HR Lounge login screen.

Recommended choices:

- Keep current custom HR Lounge login:
  - Do not enable Cloudflare Access at first.
  - Use the app login screen and `functions/_middleware.js`.
- Use Cloudflare Access as the main gate:
  - Add a Cloudflare Access self-hosted application for the HR Lounge hostname.
  - Allow only emails ending in `@solmedix.com`, or connect Google Workspace as an identity provider.
  - Then remove or bypass the app middleware in a later code change to avoid duplicate login and reduce Pages Functions usage.

Cloudflare Zero Trust Free is intended for teams under 50 users. If the company has more than 50 users, review the paid Zero Trust plan before choosing Access as the main gate.

## Verification checklist

After Cloudflare deployment is ready:

1. Open `https://<cloudflare-project>.pages.dev/api/auth`.
2. Confirm JSON includes:
   - `ok: true`
   - `configured: true`
   - `allowedDomain: "solmedix.com"`
   - `approvedEmailAccess: true` if `HR_LOUNGE_ALLOWED_EMAILS` is configured
3. Open `https://<cloudflare-project>.pages.dev/`.
4. Confirm it redirects to `/login.html`.
5. Log in with a `@solmedix.com` Google account.
6. If exceptions are configured, log out and test one approved personal Google account.
7. Confirm the main HR Lounge page loads.
8. Open the admin editor.
9. Log in with the admin password.
10. Check storage usage.
11. Save a small test change.
12. Confirm GitHub receives a new commit.
13. Confirm Cloudflare Pages creates a new production deployment from that commit.
14. Run `node scripts/check-blog-data-weight.js` locally after pulling the new commit.

## Important operational notes

- Keep `blog-data.json` lightweight.
- Store images under `assets/uploads`.
- Store only image paths like `./assets/uploads/...` inside `blog-data.json`.
- Do not store `data:image` values in `blog-data.json`.
- Keep the GitHub repository private if possible. Cloudflare Pages can deploy private repositories.
- If Pages Functions usage approaches the free limit, consider switching from app-level middleware to Cloudflare Access protection.

## Common issues

- `404` on the Pages URL:
  - Check Build output directory is `.` and `index.html` exists at the repo root.
- `/api/auth` returns `configured: false`:
  - Check `HR_LOUNGE_GOOGLE_CLIENT_ID` and `HR_LOUNGE_SESSION_SECRET`.
- Google login fails with origin/client errors:
  - Add the `*.pages.dev` URL and custom domain to Google OAuth Authorized JavaScript origins.
- Approved personal email still cannot log in:
  - Add the exact lowercase address to `HR_LOUNGE_ALLOWED_EMAILS`, redeploy, and confirm that the email can be selected in Google Sign-In.
  - A pure Naver account that has never been connected to Google cannot use this Google OAuth flow. Use a Google account that owns that email, or add a separate email-code login flow later.
- Browser shows too many redirects between `/login.html` and `/login`:
  - Cloudflare Pages uses clean URLs and redirects `login.html` to `/login`.
  - `functions/_middleware.js` must allow both `/login.html` and `/login` as public paths.
- Build fails while deploying and the log mentions `nodejs_compat`:
  - Remove `nodejs_compat` from `Settings > Functions > Compatibility flags`, then retry.
  - Or keep it only if `Compatibility date` is `2024-09-23` or later.
  - The current repo does not require `nodejs_compat`.
- Admin save fails:
  - Check `GITHUB_TOKEN`, `GITHUB_OWNER`, `GITHUB_REPO`, and `GITHUB_BRANCH`.
  - Confirm the GitHub token has contents read/write permission.
- App becomes public when Function quota is exhausted:
  - Set Pages Runtime to `Fail closed`.
