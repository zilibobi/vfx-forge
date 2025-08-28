"use client";

import config from "../config";
import { useTheme } from "next-themes";

import darkIconMap from "../data/icons_dark_map.json";
import lightIconMap from "../data/icons_light_map.json";

export default ({ type, size }) => {
  const info = darkIconMap[type];

  if (!info) {
    throw new Error(
      `roblox icon with class name '${type}' does not exist in the icon map json`,
    );
  }

  const { resolvedTheme } = useTheme();

  return (
    <svg
      width={size}
      height={size}
      viewBox={info.join(" ")}
      role="img"
      aria-label={type}
    >
      <image href={`${config.path}/images/icons_${resolvedTheme}.png`} />
    </svg>
  );
};
