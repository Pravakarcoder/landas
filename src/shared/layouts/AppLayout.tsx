import type { ReactNode } from "react";
import classNameMerge from "@/shared/utils/classNameMerge";

type AppLayoutProps = {
  children: ReactNode;
  className?: string;
};

export default function AppLayout({ children, className }: AppLayoutProps) {
  return (
    <>
      <div
        className={classNameMerge(["min-h-screen bg-background", className])}
      >
        <main className="relative">{children}</main>
      </div>
    </>
  );
}
