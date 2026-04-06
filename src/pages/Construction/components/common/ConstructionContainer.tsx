import type { ReactNode } from "react";

type ConstructionContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function ConstructionContainer({
  children,
  className = "",
}: ConstructionContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`.trim()}>
      {children}
    </div>
  );
}
