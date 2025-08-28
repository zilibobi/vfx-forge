import type { FC, HTMLAttributes, ReactNode } from "react";
import type { NodeProps, TreeProps } from "./client";

import { ClientTree, ClientNode } from "./client";
import { compileText } from "../../server_utils";

export const Node: FC<NodeProps> = async (props: NodeProps) => {
  const tooltipContent =
    typeof props.tooltip === "string"
      ? await compileText(props.tooltip)
      : props.tooltip;

  return (
    <li className="flex flex-col">
      <ClientNode {...props} tooltip={tooltipContent} />
    </li>
  );
};

export const Tree: FC<TreeProps> = async (props: TreeProps) => (
  <ClientTree {...props} />
);
