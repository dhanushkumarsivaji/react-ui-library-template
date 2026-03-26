#!/usr/bin/env bash
set -euo pipefail

# Beta release script using Changesets.
# Usage:
#   ./scripts/beta-release.sh         # Enter pre-release mode (beta)
#   ./scripts/beta-release.sh exit    # Exit pre-release mode

ACTION="${1:-enter}"
CURRENT_VERSION=$(node -p "require('./package.json').version")

echo "Current version: $CURRENT_VERSION"

case "$ACTION" in
  exit)
    npx changeset pre exit
    echo "Exited pre-release mode."
    ;;
  enter|*)
    npx changeset pre enter beta
    echo ""
    echo "Entered beta pre-release mode."
    echo ""
    echo "Next steps:"
    echo "  1. npx changeset         # Add a changeset"
    echo "  2. npx changeset version  # Bump to beta version"
    echo "  3. npm run build"
    echo "  4. npx changeset publish  # Publish with beta tag"
    ;;
esac
