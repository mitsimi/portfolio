// Bold uppercase text component
export const BoldLabel = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`uppercase tracking-[0.3em] text-xs font-bold font-mono ${className}`}
  >
    {children}
  </span>
);
