
function PageLabel({ pageNumber, label }) {
  return (
    <div className="barlow-condensed text-base md:text-[20px] lg:text-[28px] uppercase tracking-[4px] flex items-center justify-center md:justify-start gap-6 p-6 pb-0 md:p-10 md:pb-0 xl:px-32">
      <span className="text-[rgba(255,255,255,0.25)] font-bold">{pageNumber.toString().padStart(2, '0')}</span>
      <p className="text-white">{label}</p>
    </div>
  );
}

export default PageLabel;
