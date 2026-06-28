const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 ease-in-out";

  const variants = {
    primary:
      "bg-[#D4AF37] text-black hover:bg-[#E6C55A] hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.45)]",

    secondary:
      "border border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-black hover:scale-105",
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