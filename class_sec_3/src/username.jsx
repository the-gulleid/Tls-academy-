import react, {useContext, useEffect, useState} from "react";
function Name () {


    const age = 20 ;
    const stude_age = age >=18 ? "adult" : "young"
    return(
        <>
            <p>{stude_age}</p>

        </>
    )

}

export default  Name