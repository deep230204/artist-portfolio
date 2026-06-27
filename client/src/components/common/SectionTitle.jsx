const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-14 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;