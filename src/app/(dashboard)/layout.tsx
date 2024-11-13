import React, { ReactNode } from "react";
import Providers from "./newProviders";


const layout = ({ children }: { children: ReactNode }) => {
    return (
        <Providers>
            <div className=" flex h-full">
                <div className="w-full">
                    {children}
                </div>
            </div>
        </Providers>
    );
};

export default layout;