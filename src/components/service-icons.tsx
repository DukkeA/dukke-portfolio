import { BrowserIcon } from "@phosphor-icons/react/dist/ssr/Browser";
import { HardDrivesIcon } from "@phosphor-icons/react/dist/ssr/HardDrives";
import { DatabaseIcon } from "@phosphor-icons/react/dist/ssr/Database";
import { CloudArrowUpIcon } from "@phosphor-icons/react/dist/ssr/CloudArrowUp";
import { TestTubeIcon } from "@phosphor-icons/react/dist/ssr/TestTube";
import type { IconProps } from "@phosphor-icons/react";
import type { ServiceAreaId } from "@/content/services";

const icons = {
  frontend: BrowserIcon,
  backend: HardDrivesIcon,
  data: DatabaseIcon,
  infrastructure: CloudArrowUpIcon,
  maintenance: TestTubeIcon,
};

export function ServiceIcon({
  area,
  ...props
}: IconProps & { area: ServiceAreaId }) {
  const Icon = icons[area];
  return <Icon {...props} weight="bold" aria-hidden="true" />;
}
