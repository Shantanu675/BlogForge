import React from "react";

function Logo({width = '500px', height = '80px'}){
    return (
        <>
            <img 
            src="https://cdn.shopify.com/s/files/1/0773/0085/9226/files/Kopie_von_Kein_Titel_1500_x_750_px_2_480x480.png?v=1722156336" 
            alt="logo"
            className="h-20"
            style={{width, height}}/>
        </>
    )
}

export default Logo