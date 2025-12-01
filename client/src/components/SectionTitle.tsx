interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionTitle({ children, subtitle, className = "", align = "left" }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
