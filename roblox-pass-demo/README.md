# Roblox Pass concept demo

Interactive prototype for the proposed Roblox Pass feature. iPhone-framed Next.js + Tailwind web app that walks through:

- New Pass entrypoint on the Home header
- Facial age estimation (FAE) flow
- Free Path activation celebration
- Daily feats with reward fly-in animations
- Plus trial subscription bottom sheet (matches the real Plus upsell page)
- Plus activation celebration with retroactive reward backfill
- Feats listing screen (Daily / Season / Completed)

Per the spec, feats are shared across both paths: completing a feat awards the Free reward immediately and, if Plus is active, the Plus reward in parallel. Subscribing to Plus mid-season backfills the Plus row for tiers already cleared (battle-pass model).

## Run it

Requires Node.js 18+ and npm. From this folder:

```bash
npm install        # one-time, installs deps into node_modules/
npm run dev        # starts the demo at http://localhost:3000
```

Open `http://localhost:3000` in any modern browser.

For a production-style run instead of dev:

```bash
npm run build
npm start
```

## Tech

- Next.js 16 (App Router)
- React 19, TypeScript
- TailwindCSS 3
- framer-motion (screen transitions, reward fly-ins)
- canvas-confetti (celebration bursts)

## Source layout

```
app/
  layout.tsx
  page.tsx              # screen state machine + pass logic
  globals.css
components/
  IPhoneFrame.tsx
  HomeScreen.tsx
  icons.tsx
  animations/
    RewardPopLayer.tsx  # reward fly-in + points bubble
  celebrations/
    Confetti.tsx
    FreePathCelebration.tsx
    PlusCelebration.tsx
  fae/                  # facial age estimation flow (4 screens)
  pass/
    PassShell.tsx
    PassLocked.tsx
    PassMain.tsx        # the live Pass screen (Free + Plus rows)
    FeatRow.tsx
    RewardStrip.tsx
    PlusTrialSheet.tsx
    FeatsScreen.tsx
lib/
  data.ts               # rewards, feats, friends - the demo's content
public/
  rewards/              # reward artwork (PNGs)
```

## Notes

- The demo is a forward-leaning narrative; refreshing the page resets it to Home. No persistence.
- The reward catalog in `lib/data.ts` uses real Roblox UGC item screenshots. Replace `public/rewards/*.png` and the corresponding entries in `data.ts` to swap in different items.
- The Plus trial sheet matches the real Roblox Plus upsell page ($4.99/mo, four benefit cards, Subscribe CTA).
