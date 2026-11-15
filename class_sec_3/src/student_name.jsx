import react , {useState} from "react";

function Student_name(){
const [name , setName] = useState("")
    return(
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <h1>hello {name}</h1>

        </>
    )
}
export default Student_name;