import type { ReactElement, SVGProps } from "react";

type Icon = (props: SVGProps<SVGSVGElement>) => ReactElement;

export const SearchIcon: Icon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <circle
      cx="11"
      cy="11"
      r="6.25"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M16 16l4 4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export const RobloxHexIcon: Icon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2.5l8.5 4.9v9.2L12 21.5 3.5 16.6V7.4L12 2.5z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <rect x="9" y="9" width="6" height="6" rx="0.4" fill="currentColor" />
  </svg>
);

export const BellIcon: Icon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6 16.5V11a6 6 0 1112 0v5.5l1.5 1.5h-15L6 16.5z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 20.5a1.5 1.5 0 003 0"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

export const TicketIcon: Icon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M3.5 9.5V8a1.5 1.5 0 011.5-1.5h14A1.5 1.5 0 0120.5 8v1.5a2 2 0 000 4V16a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 16v-2.5a2 2 0 000-4z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M11 8.5v1.7M11 11.7v1.7M11 13.4v1.7"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const HomeNavIcon: Icon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4 11l8-6.5 8 6.5v8.5A1.5 1.5 0 0118.5 21H14v-6h-4v6H5.5A1.5 1.5 0 014 19.5V11z"
      fill="currentColor"
    />
  </svg>
);

export const ChartsIcon: Icon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3.5" y="13" width="3.5" height="7.5" rx="0.6" fill="currentColor" />
    <rect x="10.25" y="9" width="3.5" height="11.5" rx="0.6" fill="currentColor" />
    <rect x="17" y="5" width="3.5" height="15.5" rx="0.6" fill="currentColor" />
  </svg>
);

export const PartyIcon: Icon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="9" cy="10" r="3" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="16.5" cy="11.5" r="2.4" stroke="currentColor" strokeWidth="1.7" />
    <path
      d="M3.5 19.5c.6-2.6 2.9-4.5 5.5-4.5s4.9 1.9 5.5 4.5"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    <path
      d="M14.5 19.5c.4-1.9 2-3.4 4-3.4 1.6 0 3 1 3.7 2.4"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

export const MoreIcon: Icon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="6" cy="12" r="2" fill="currentColor" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <circle cx="18" cy="12" r="2" fill="currentColor" />
  </svg>
);

export const CloseIcon: Icon = (props) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" {...props}>
    <path
      d="M5 5l12 12M17 5L5 17"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export const ChevronRight: Icon = (props) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M6 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronLeft: Icon = (props) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" {...props}>
    <path
      d="M13 5l-6 6 6 6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CheckIcon: Icon = (props) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
    <path
      d="M2.5 7l3 3 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LockIcon: Icon = (props) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
    <rect
      x="2.5"
      y="6"
      width="9"
      height="6"
      rx="1.4"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <path
      d="M4.5 6V4.5a2.5 2.5 0 015 0V6"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const CrownIcon: Icon = (props) => (
  <svg width="28" height="22" viewBox="0 0 28 22" fill="none" {...props}>
    <path
      d="M2.5 5.5l4 4.5 4.5-7 3 4 3-4 4.5 7 4-4.5L24 19H4L2.5 5.5z"
      fill="currentColor"
    />
    <rect x="4" y="18" width="20" height="2.5" rx="0.6" fill="currentColor" />
  </svg>
);

export const SparkleIcon: Icon = (props) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
    <path
      d="M9 1.5l1.5 4.5L15 7.5l-4.5 1.5L9 13.5 7.5 9 3 7.5 7.5 6 9 1.5z"
      fill="currentColor"
    />
  </svg>
);

export const CameraShutterIcon: Icon = (props) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
    <rect
      x="2"
      y="4.5"
      width="14"
      height="10"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <circle cx="9" cy="9.5" r="2.6" stroke="currentColor" strokeWidth="1.4" />
    <path d="M6.5 4.5l1-2h3l1 2" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

export const TrashIcon: Icon = (props) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
    <path
      d="M3 5h12M7 5V3.5h4V5M5 5l1 9.5h6L13 5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ShieldIcon: Icon = (props) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
    <path
      d="M9 1.5l6 2.2v4.6c0 3.4-2.5 6.5-6 7.7-3.5-1.2-6-4.3-6-7.7V3.7L9 1.5z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M6 9l2 2 4-4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FaeAvatarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="120" height="160" viewBox="0 0 120 160" fill="none" {...props}>
    <ellipse cx="60" cy="55" rx="34" ry="40" fill="#2D5BFF" />
    <path
      d="M30 45c0-18 13-32 30-32s30 14 30 32c0 6-2 11-5 15h-50c-3-4-5-9-5-15z"
      fill="#3a6cff"
    />
    <ellipse cx="60" cy="60" rx="22" ry="28" fill="#e9eef9" />
    <rect x="38" y="92" width="44" height="40" rx="8" fill="#2D5BFF" />
    <path d="M38 92h44v18H38z" fill="#3a6cff" />
    <rect x="50" y="124" width="20" height="14" rx="3" fill="#1f47e0" />
  </svg>
);

export const PersonaWordmark = (props: SVGProps<SVGSVGElement>) => (
  <svg width="78" height="18" viewBox="0 0 78 18" fill="none" {...props}>
    <text
      x="0"
      y="14"
      fontFamily="Inter, system-ui, sans-serif"
      fontSize="13"
      fontWeight="700"
      fill="currentColor"
      letterSpacing="0.5"
    >
      persona
    </text>
  </svg>
);

export const GlobeIcon: Icon = (props) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M7 1.5c2 1.7 3 3.7 3 5.5s-1 3.8-3 5.5c-2-1.7-3-3.7-3-5.5s1-3.8 3-5.5z"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path d="M1.7 7h10.6" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export const CaretDown: Icon = (props) => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
    <path
      d="M2 4l3 3 3-3"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PriceTagIcon: Icon = (props) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" {...props}>
    <path
      d="M3.5 11.5V4.5A1 1 0 014.5 3.5h7l7 7-7 7-8-8z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="7.5" cy="7.5" r="1.4" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

export const PriceTagUpIcon: Icon = (props) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" {...props}>
    <path
      d="M3.5 11.5V4.5A1 1 0 014.5 3.5h7l7 7-7 7-8-8z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="7.5" cy="7.5" r="1.4" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M14 14l3-3M17 11h-2.5M17 11v2.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const ControllerIcon: Icon = (props) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" {...props}>
    <path
      d="M5.2 7.5h11.6c2 0 3.5 1.6 3.2 3.6l-.7 4c-.3 1.5-1.6 2.6-3.2 2.6-1 0-1.9-.5-2.5-1.3l-.6-.8a1.4 1.4 0 00-1.1-.6h-3.8c-.4 0-.8.2-1.1.6l-.6.8c-.6.8-1.5 1.3-2.5 1.3-1.6 0-2.9-1.1-3.2-2.6l-.7-4c-.3-2 1.2-3.6 3.2-3.6z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M7 10v3M5.5 11.5h3M14 11.5h.01M16 11.5h.01M14.5 13h.01"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const RobuxHexBadge: Icon = (props) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" {...props}>
    <path
      d="M11 2.5l8 4.5v8L11 19.5 3 15V7l8-4.5z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <rect x="8" y="8" width="6" height="6" rx="0.4" fill="currentColor" />
  </svg>
);

export const PlusBrandGlyph = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
    <rect x="1.5" y="1.5" width="17" height="17" rx="4.2" fill="currentColor" />
    <path
      d="M7 6h4.5c1.4 0 2.5 1.1 2.5 2.5S12.9 11 11.5 11H8.5v3.5"
      stroke="#000"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const CameraGlyph: Icon = (props) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" {...props}>
    <rect
      x="4"
      y="9"
      width="28"
      height="20"
      rx="4"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <circle cx="18" cy="19" r="5.5" stroke="currentColor" strokeWidth="1.8" />
    <rect x="13" y="5" width="10" height="4" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="18" cy="19" r="2.2" fill="currentColor" />
  </svg>
);
