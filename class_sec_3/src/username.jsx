import react ,{useState} from "react";
function Name (){
    const [counter , setCounter] = useState(0);

    function Add(){
        setCounter(counter + 1);
    }
    function Remove(){
        setCounter(counter - 1);
    }
    function Reset (){
        setCounter(counter ===0);
    }
    return (
        <>
            <h1>{counter} </h1>
            <button onClick={Add}>Add</button>
            <button onClick={Remove}>remove</button>
            <button onClick={Reset}>Add</button>
        </>
    )
}
export default Name