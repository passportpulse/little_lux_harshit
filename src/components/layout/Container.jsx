export default function Container({
  children,
  className = "",
  size = "default", // sm | default | lg | full
}) {
  const sizes = {
    sm: "max-w-4xl",
    default: "max-w-7xl",
    lg: "max-w-screen-2xl",
    full: "max-w-full",
  };

  return (
    <div
      className={`w-full ${sizes[size]} mx-auto px-3 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
