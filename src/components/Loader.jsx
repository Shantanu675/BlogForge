import React from "react";

function Loader() {
    return (
        <div className="flex justify-center items-center h-[60vh]">
            <div className="h-12 w-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
        </div>
    );
}

export default Loader;
