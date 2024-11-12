import { Sparkles } from "lucide-react";

const DashboardHeader = ({ title, subtitle, toolText }: { title: string, subtitle: string, toolText?: string }) => {
    return (
        <div className="text-start ">
            {
                toolText && <div className="inline-flex items-center rounded-full border border-[#DB2777]/20 bg-yellow-200/40 px-3 my-2 py-1 text-sm text-[#DB2777] shadow-sm">
                    <Sparkles className="mr-2 h-4 w-4" />
                    {toolText}
                </div>
            }
            <h2 className="lg:text-3xl text-xl font-bold mb-2 lg:mb-4 font-serif  bg-gradient-to-r from-pink-500 via-pink-400 to-yellow-500 text-transparent bg-clip-text">{title}</h2>
            <p className="text-black text-sm md:text-base max-w-3xl">
                {subtitle}
            </p>
        </div>
    );
};

export default DashboardHeader;