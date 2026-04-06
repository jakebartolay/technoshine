import type { ReactNode } from "react";

type ConstructionRevealProps = {
  children: ReactNode;
  className?: string;
};

export default function ConstructionReveal({
  children,
  className = "",
}: ConstructionRevealProps) {
  return <div className={className}>{children}</div>;
}
