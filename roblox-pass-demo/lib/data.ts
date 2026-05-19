export type Reward = {
  id: string;
  name: string;
  /** Creator handle, shown beneath UGC items. */
  creator?: string;
  /** Path to the artwork. Falls back to `tile` gradient if absent. */
  image?: string;
  /** CSS object-position value to crop the artwork - the source images include
   *  catalog text under the artwork that we want to hide. */
  imagePosition?: string;
  /** Background tile fill for the artwork pad. */
  tile: string;
  /** Shown for currency tiles that don't have an image. */
  badge?: string;
};

/**
 * Free Path: Roblox-produced 1P-feeling items - basic accessories, emotes,
 * beta access, small Robux drops. No UGC.
 */
export const FREE_REWARDS: Reward[] = [
  {
    id: "emote",
    name: "Sit Floating Aura",
    image: "/rewards/emote.png",
    imagePosition: "50% 5%",
    tile: "linear-gradient(140deg, #2a2a33 0%, #15151a 100%)",
  },
  {
    id: "earmuffs",
    name: "Brown Fur Earmuffs",
    image: "/rewards/earmuffs.png",
    imagePosition: "50% 8%",
    tile: "linear-gradient(140deg, #5a4a36 0%, #2a2018 100%)",
  },
  {
    id: "puppy",
    name: "Retriever Puppy",
    image: "/rewards/puppy.png",
    imagePosition: "50% 10%",
    tile: "linear-gradient(140deg, #2a2a33 0%, #15151a 100%)",
  },
  {
    id: "golfing",
    name: "Beta Access",
    image: "/rewards/golfing.png",
    imagePosition: "0% 50%",
    tile: "linear-gradient(140deg, #1a1a1a 0%, #0a0a0a 100%)",
  },
  {
    id: "robux10",
    name: "10 Robux",
    tile: "linear-gradient(140deg, #2a2a33 0%, #15151a 100%)",
    badge: "R$",
  },
];

/**
 * Plus Path: Curated UGC and exclusive items - clothing, accessories,
 * collectibles, dev products. Better-tier than Free.
 */
export const PLUS_REWARDS: Reward[] = [
  {
    id: "cinnamoroll",
    name: "Cinnamoroll",
    creator: "9Dress to Shine",
    image: "/rewards/cinnamoroll.png",
    imagePosition: "50% 8%",
    tile: "linear-gradient(140deg, #6dc5d6 0%, #2c5872 100%)",
  },
  {
    id: "miffy",
    name: "Miffy Bunny",
    creator: "@frenchrxses",
    image: "/rewards/miffy.png",
    imagePosition: "50% 10%",
    tile: "linear-gradient(140deg, #f0f0f0 0%, #6e6e7a 100%)",
  },
  {
    id: "lashes",
    name: "Celestial Lashes",
    creator: "Snoopsie UGC",
    image: "/rewards/lashes.png",
    imagePosition: "50% 14%",
    tile: "linear-gradient(140deg, #f0d6c0 0%, #6e3aff 100%)",
  },
  {
    id: "kirby",
    name: "Kirby",
    creator: "bbnoR$",
    image: "/rewards/kirby.png",
    imagePosition: "50% 8%",
    tile: "linear-gradient(140deg, #ff8ab5 0%, #c43a78 100%)",
  },
  {
    id: "necklace",
    name: "Gold Preppy Necklace",
    image: "/rewards/necklace.png",
    imagePosition: "50% 12%",
    tile: "linear-gradient(140deg, #d6b04a 0%, #6e4a10 100%)",
  },
  {
    id: "robux50",
    name: "50 Robux",
    tile: "linear-gradient(140deg, #2a2a33 0%, #15151a 100%)",
    badge: "R$",
  },
];

export type FeatId = "login" | "friend" | "avatar";

export type Feat = {
  id: FeatId;
  title: string;
  points: number;
  /** What the action button reads when the feat is awaiting user action. */
  actionVerb: "Claim" | "Go";
  /** Which slot the reward lands in for both Free and Plus strips. */
  awardIndex: number;
  /** Copy shown in the inline progress strip when "Go" is tapped. */
  inProgressCopy?: string;
};

export const DAILY_FEATS: Feat[] = [
  {
    id: "login",
    title: "Log in today",
    points: 3,
    actionVerb: "Claim",
    awardIndex: 0,
  },
  {
    id: "friend",
    title: "Join a friend in game",
    points: 3,
    actionVerb: "Go",
    awardIndex: 1,
    inProgressCopy: "Joining game...",
  },
  {
    id: "avatar",
    title: "Customize your avatar",
    points: 3,
    actionVerb: "Go",
    awardIndex: 2,
    inProgressCopy: "Opening avatar editor...",
  },
];

export type SeasonFeat = {
  id: string;
  title: string;
  points: number;
  progress: string;
};

export const SEASON_FEATS: SeasonFeat[] = [
  { id: "try5", title: "Try 5 new games", points: 30, progress: "0/5" },
  { id: "streak7", title: "7 day streak", points: 50, progress: "2/7" },
  { id: "avatar5", title: "Create 5 new avatars", points: 50, progress: "0/5" },
  { id: "events3", title: "Join 3 events", points: 30, progress: "0/3" },
];

export type CompletedFeat = {
  id: string;
  title: string;
  points: number;
  progress: string;
};

export const COMPLETED_FEATS: CompletedFeat[] = [
  { id: "chat5", title: "Chat with 5 friends", points: 20, progress: "5/5" },
];

export type FriendRow = {
  id: string;
  name: string;
  online: boolean;
  /** Inner gradient/fill for the avatar circle. */
  avatar: string;
};

export const FRIENDS: FriendRow[] = [
  {
    id: "circle2pi",
    name: "circle2pi",
    online: true,
    avatar:
      "linear-gradient(135deg, #6e3a17 0%, #2a1408 50%, #5a2c12 100%)",
  },
  {
    id: "GTypeStar",
    name: "GTypeStar",
    online: false,
    avatar:
      "linear-gradient(135deg, #1d3661 0%, #d6c34a 60%, #2a2030 100%)",
  },
  {
    id: "puzzle",
    name: "pu...",
    online: false,
    avatar:
      "linear-gradient(135deg, #ff8a4c 0%, #c43a78 100%)",
  },
];
