import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

export function TwitterXIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M17.5 3.75 11.25 10.83 18.33 18.33h-3.33L10 12.5l-5 5.83H1.67L8.33 10 1.67 3.75h3.33L10 9.17l5-5.42z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M5 7h-3v10h3V7zM3.5 5.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zM18 17h-3v-4.5c0-1.38-.56-2.5-2-2.5s-2 1.12-2 2.5V17H8V7h3v1.5c.57-.9 1.7-1.5 3-1.5 2.2 0 4 1.8 4 4.5V17z" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.32c-2.23.48-2.7-1.07-2.7-1.07-.37-.93-.9-1.18-.9-1.18-.73-.5.06-.49.06-.49.81.06 1.24.83 1.24.83.72 1.24 1.9.88 2.36.67.07-.52.28-.88.51-1.08-1.78-.2-3.65-.89-3.65-3.96 0-.87.31-1.59.83-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.66 7.66 0 0 1 10 7.3a7.65 7.65 0 0 1 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.52.56.83 1.28.83 2.15 0 3.08-1.87 3.76-3.66 3.96.29.25.54.74.54 1.49v2.21c0 .21.15.46.55.38A8 8 0 0 0 10 2z"
      />
    </svg>
  );
}
