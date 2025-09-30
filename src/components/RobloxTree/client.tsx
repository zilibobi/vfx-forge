"use client";

import type { FC, HTMLAttributes, ReactNode } from "react";
import { useState, useContext, createContext } from "react";

import dynamic from "next/dynamic";

import Chevron from "../Chevron";
import Tooltip from "../Tooltip";

const RobloxIcon = dynamic(() => import("../RobloxIcon"), { ssr: false });

export type TreeProps = {
  title: ReactNode;
  children?: ReactNode;
  className?: string;
};

export type NodeProps = {
  name?: ReactNode;
  tooltip?: ReactNode;
  children?: ReactNode;
  className?: string;
  type: string;
  open?: boolean;
  select?: boolean;
};

const DepthContext = createContext(0);

export const ClientTree: FC<TreeProps> = ({
  title,
  children,
  className,
  ...props
}) => {
  return (
    <DepthContext.Provider value={0}>
      <div
        className={
          "text-sm rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-clip " +
          (className || "")
        }
      >
        <div className="px-4 py-3 font-semibold border-b border-neutral-200 dark:border-neutral-800">
          {title}
        </div>
        <ul {...props}>{children}</ul>
      </div>
    </DepthContext.Provider>
  );
};

export const ClientNode: FC<NodeProps> = ({
  name,
  type,
  tooltip,
  children,
  className,
  open = false,
  select = false,
}) => {
  const depth = useContext(DepthContext);
  const [isOpen, setIsOpen] = useState(open);

  const toggle = () => {
    setIsOpen((v) => !v);
  };

  const tooltipChildren = (
    <div
      style={{ paddingLeft: `${0.5 * (depth + 1)}rem` }}
      className={`
        flex items-center gap-2 select-none py-1
        ${select ? "hover:bg-blue-300/30 dark:hover:bg-blue-900/40" : "hover:bg-neutral-200 dark:hover:bg-neutral-800"}
        ${select ? "dark:bg-blue-800/20 bg-blue-300/20" : ""}
        ${className || ""}
      `}
    >
      {children ? (
        <button
          onClick={toggle}
          className="flex items-center justify-center rounded-md"
          aria-expanded={isOpen}
        >
          <Chevron
            width="16"
            height="16"
            className={`transition-transform fill-current duration-200 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </button>
      ) : (
        <div className="w-4 h-4" />
      )}
      <RobloxIcon type={type} size={18} />
      <span>{name || type}</span>
    </div>
  );

  return (
    <DepthContext.Provider value={depth + 1}>
      {tooltip !== undefined ? (
        <Tooltip content={tooltip}>{tooltipChildren}</Tooltip>
      ) : (
        tooltipChildren
      )}
      <ul className={`flex flex-col ${isOpen ? "" : "hidden"}`}>{children}</ul>
    </DepthContext.Provider>
  );
};
