import type { ReactNode } from "react";

type TradingRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export default function TradingReveal({
  children,
  className = "",
  delay = 0,
  y = 50,
}: TradingRevealProps) {
  void delay;
  void y;

  return (
    <div className={className}>
      {children}
    </div>
  );
}
