import react from 'react'
function  Side (props)
{
    return(

        <>

            <div style={{background:"red" , color:"white" , width:"100px" , height:"700px"}}>
                <p>home </p>
                <p>home </p>
                <h1> hello ,{props.username}</h1>
            </div>
        </>
    )

}
export default Side;