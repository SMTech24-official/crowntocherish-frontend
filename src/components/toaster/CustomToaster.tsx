import { poppins } from "@/app/fonts/font";
import { Toaster } from "react-hot-toast";

const CustomToaster = () => {
    return (
        <Toaster
            position="bottom-right"
            toastOptions={{
                // Define default options

                // Default options for specific types
                success: {
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big "><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                    ),
                    style: {
                        background: '#E30B5D',
                        color: '#fff',
                        fontSize: '17px',
                        padding: "10px 10px",
                        fontFamily: `${poppins.className}`
                    },
                },
                error: {
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                    ),
                    style: {
                        background: '#C11B17',
                        color: '#fff',
                        fontSize: '17px',
                        padding: "10px 10px",
                        fontFamily: `${poppins.className}`
                    },
                },
            }}
        />
    );
};

export default CustomToaster;