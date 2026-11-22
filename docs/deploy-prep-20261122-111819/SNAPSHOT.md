# Deploy prep snapshot (local only — not a publish)

## Live site (read-only check)
- Domain: https://www.saedniksa.com
- Git remote: https://github.com/TOP1MARKTING/khadmat.git
- Branch tracking: main → origin/main
- Published commit on origin/main: 7ed079429ff205f8d2856babb12868cd337a3a1e
- Local HEAD same commit, but WORKING TREE has uncommitted deploy candidates

## Firebase project (from client config fallback)
- projectId: khadmat-5c5be
- Live rules: NOT readable from this machine (CLI account previously lacked this project). Treat production rules as UNKNOWN until Console confirmation.

## Rollback anchors
- App rollback: redeploy / reset to git 7ed0794 (or prior known good tag)
- Rules rollback: restore Console rules from export taken BEFORE new publish (must capture in Console first)
- NEVER roll back to open `allow read: if true` / `allow write: if request.auth != null`

## Admin identity (code)
- top1@admin.com only (no seed admin)
