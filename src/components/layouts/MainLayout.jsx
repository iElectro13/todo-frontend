import React from "react";

const MainLayout = ({ children, title }) => {
    return (
        <div className="flex flex-col justify-center items-center p-4 gap-4 w-full sm:w-4/5 md:w-2/3">
            <h1 className="text-4xl font-bold text-neutral-900 text-center">
                {title}
            </h1>
            {children}
        </div>
    );
};

export default MainLayout;