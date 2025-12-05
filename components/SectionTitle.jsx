export default function SectionTitle({ children, subtitle, className = "", align = "left" }) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4 relative inline-block">
        {children}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent" style={{width: '100%'}}></div>
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
          {subtitle}
        </p>
      )}
    </div>
  );
}
