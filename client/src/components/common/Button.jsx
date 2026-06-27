const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-[#D4AF37] text-black hover:bg-[#E6C55A]",
    secondary:
      "border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;