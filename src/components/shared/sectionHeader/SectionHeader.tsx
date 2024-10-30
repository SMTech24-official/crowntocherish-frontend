
const SectionHeader = ({title, subtitle}: {title: string, subtitle: string}) => {
    return (
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold text-[#DB2777] mb-4 font-serif italic">{title}</h2>
          <p className="text-black text-lg max-w-2xl mx-auto">
            {subtitle}
            
          </p>
        </div>
    );
};

export default SectionHeader;