import { Sparkles } from "lucide-react";

const SectionHeader = ({ title, subtitle, toolText }: { title: string, subtitle: string, toolText?: string }) => {
  return (
    <div className="text-center mb-24">
      {
        toolText && <div className="inline-flex items-center rounded-full border border-[#DB2777]/20 bg-yellow-200/40 px-3 my-2 py-1 text-sm text-[#DB2777] shadow-sm">
          <Sparkles className="mr-2 h-4 w-4" />
          {toolText}
        </div>
      }

      <h2 className="text-4xl font-bold text-text_title mb-4 font-serif italic">{title}</h2>
      <p className="text-black text-lg max-w-2xl mx-auto">
        {subtitle}

      </p>
    </div>
  );
};

export default SectionHeader;