#!/bin/bash
set -euo pipefail

VERSION="${1:-}"
if [ -z "$VERSION" ]; then
  echo "Usage: $0 <version>"
  exit 1
fi

BRANCH="chore/release-${VERSION}"
BASE_BRANCH="main"

# Configure git
git config user.email "ci@akadenia.com"
git config user.name "Akadenia CI"

# Check if there are any changes to commit
CHANGED=$(git diff --name-only package.json package-lock.json CHANGELOG.md 2>/dev/null || true)
if [ -z "$CHANGED" ]; then
  echo "No release asset changes to commit."
  exit 0
fi

# Create and push release branch
git checkout -b "$BRANCH"
git add package.json package-lock.json CHANGELOG.md 2>/dev/null || git add package.json CHANGELOG.md
git commit -m "chore(release): ${VERSION} assets [skip ci]"
git push "https://${GH_TOKEN}@github.com/${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}.git" "$BRANCH"

# Open PR
PAYLOAD=$(jq -n \
  --arg title "chore(release): ${VERSION} assets" \
  --arg head "$BRANCH" \
  --arg base "$BASE_BRANCH" \
  --arg body "Automated release assets for v${VERSION}. Merging this will update \`package.json\`, \`package-lock.json\`, and \`CHANGELOG.md\` on main." \
  '{title: $title, head: $head, base: $base, body: $body}')

RESPONSE=$(curl -s -w "\n%{http_code}" -X POST \
  -H "Authorization: Bearer ${GH_TOKEN}" \
  -H "Accept: application/vnd.github+json" \
  "https://api.github.com/repos/${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}/pulls" \
  -d "$PAYLOAD")

HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | head -n -1)

if [ "$HTTP_CODE" = "201" ]; then
  PR_URL=$(echo "$BODY" | jq -r '.html_url')
  echo "Release PR created: $PR_URL"
elif [ "$HTTP_CODE" = "422" ] && echo "$BODY" | grep -qi "pull request already exists"; then
  echo "Release PR already exists — skipping."
else
  echo "PR creation failed (HTTP $HTTP_CODE): $BODY"
  exit 1
fi
