import type { ComponentProps, ComponentType } from "react";

export type SvgIconProps = ComponentProps<"svg">;

export type ServiceItem = {
  name: string;
  Icon: ComponentType<SvgIconProps>;
};
