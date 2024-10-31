
const SharedButton = ({ text, cls }: { text: string, cls: string }) => {
    return (
        <button className={`${cls} text-text_title !hover:bg-button_hover_bg z-30 px-4 py-3 rounded-xl`}>
            {text}
        </button>
    );
};

export default SharedButton