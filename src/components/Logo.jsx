// import React from "react";

// function Logo({width = '500px', height = '80px'}){
//     return (
//         <>
//             <img 
//             src="https://cdn.shopify.com/s/files/1/0773/0085/9226/files/Kopie_von_Kein_Titel_1500_x_750_px_2_480x480.png?v=1722156336" 
//             alt="logo"
//             className="h-20"
//             style={{width, height}}/>
//         </>
//     )
// }

// export default Logo

import React from "react";
import { BookOpen } from "lucide-react";

function Logo({width = '100%', height = 'auto'}){
    return (
        <div 
            className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:scale-90"
            style={{width, height: height === 'auto' ? 'auto' : height}}
        >
            <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent whitespace-nowrap">
                BlogForge
            </span>
        </div>
    )
}

export default Logo