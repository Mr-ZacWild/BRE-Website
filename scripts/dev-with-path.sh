#!/usr/bin/env bash
# Wrapper that sets up nvm's node on PATH before running `npm run dev`.
# Needed because Claude Preview's launcher inherits a minimal PATH.
export PATH="/Users/zacwild/.nvm/versions/node/v24.15.0/bin:$PATH"
cd "/Users/zacwild/buen-rollo-website"
exec npm run dev
