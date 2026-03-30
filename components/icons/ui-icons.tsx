import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M8.55539 5.08331L11.3332 7.99998M11.3332 7.99998L8.55539 10.9166M11.3332 7.99998L4.6665 7.99998"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FolderIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 15 13" fill="none" {...props}>
      <path
        d="M10.4118 5.4H13.0889C13.4816 5.4 13.8 5.71837 13.8 6.11111V10.2654C13.8 11.1129 13.1129 11.8 12.2654 11.8H2.6M1 1.71111V10.4C1 11.1732 1.6268 11.8 2.4 11.8C3.1732 11.8 3.8 11.1732 3.8 10.4V6.11111C3.8 5.71838 4.11837 5.4 4.51111 5.4H12.3778V3.71895C12.3778 3.32622 12.0594 3.00784 11.6667 3.00784H6.9817L5.89507 1.32532C5.76408 1.1225 5.53914 1 5.29771 1H1.71111C1.31838 1 1 1.31838 1 1.71111Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 19V5M5 12l7-7 7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" {...props}>
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M11 11l3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M13.5995 14.4003L13.5997 12.0005C13.5998 10.6749 12.5253 9.60026 11.1997 9.60026H4.80017C3.47479 9.60026 2.40032 10.6746 2.40017 12L2.3999 14.4003M10.3999 4.00026C10.3999 5.32574 9.32539 6.40026 7.9999 6.40026C6.67442 6.40026 5.5999 5.32574 5.5999 4.00026C5.5999 2.67478 6.67442 1.60026 7.9999 1.60026C9.32539 1.60026 10.3999 2.67478 10.3999 4.00026Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M6 18L18 6M6 6l12 12"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LanguageGlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 15" fill="none" {...props}>
      <path
        d="M0.666504 2.66667H9.99984M5.33317 0.666668V2.66667M7.99984 2.66667C7.11095 6.22222 5.11095 8.66667 1.99984 10M3.33317 5.33333C4.22206 7.11111 5.55539 8.44445 7.33317 9.33333M7.99984 14L11.3332 6.66667L14.6665 14M13.7332 12H8.93317"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LanguageGlobeMobileIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 17h6.498"
      />
    </svg>
  );
}
