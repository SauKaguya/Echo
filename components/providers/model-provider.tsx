"use client";

import { useEffect, useState } from "react";

import { SettingsModel } from "@/components/models/settings-model";
import { CoverImageModel } from "@/components/models/cover-image-model";

export const ModelProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  return (
    <>
      <SettingsModel />
      <CoverImageModel />
    </>
  );
};
