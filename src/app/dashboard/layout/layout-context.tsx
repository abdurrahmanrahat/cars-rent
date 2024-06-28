"use client";

import { createContext, useContext } from "react";

type TSidebarContext = {
  collapsed: boolean;
  setCollapsed: () => void;
};

export const SidebarContext = createContext<TSidebarContext>({
  collapsed: false,
  setCollapsed: () => {},
});

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
