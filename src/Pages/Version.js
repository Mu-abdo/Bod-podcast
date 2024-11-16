import React from "react";
// import imgVersionPage from "./images/versionco";
import VersionCo from "./Component/Version";

function Version(){
    return(
        <section id="Version" className="bg-bgColor">
            <div className="container m-auto py-8">
                <VersionCo
                    // imgVersionPage={imgVersionPage}
                />
            </div>
        </section>
    )
}

export default Version;