"use client";
import { Provider } from "react-redux";
import { store } from "../states/store";
import React, { ReactNode } from "react";

interface ProviderStoreProps {
  children: ReactNode;
}

export default function ProviderStore({ children }: ProviderStoreProps) {
  return <Provider store={store}>{children}</Provider>;
}
