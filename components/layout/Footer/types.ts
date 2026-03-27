import type { ComponentType, ComponentProps } from "react";

export type SvgIconProps = ComponentProps<"svg">;

export type NavColumn = {
  heading: string;
  links: string[];
};

export type SocialLink = {
  label: string;
  icon: ComponentType<SvgIconProps>;
};

export type LegalLink = {
  label: string;
  href: string;
};
