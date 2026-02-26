export default function Section({
  children,
  id,
  className = "",
  size = "default", // small | default | large
}) {
  const sizes = {
    small: "py-4 lg:py-10",
    default: "py-6 lg:py-16",
    large: "py-16 lg:py-24",
  };

  return (
    <section
      id={id}
      className={`${sizes[size]} ${className}`}
    >
      {children}
    </section>
  );
}
