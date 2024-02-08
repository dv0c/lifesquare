"use client";
import { FC } from "react";
import { Next13ProgressBar } from "next13-progressbar";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      {children}
      <Next13ProgressBar
        height="4px"
        color="#facc15"
        options={{ showSpinner: false }}
        showOnShallow
      />
    </>
  );
};

export default Providers;
