import react , {useState} from 'react'

function Hi (){
    const [username , setUsername] = useState('')

    // const Hello =(name)=>{
    //     alert(`hello ${name}`)
    //
    // }
    return(

        <>
            <input type={"text"} value={username} onChange={(e)=>setUsername(e.target.value)} />
            <p>hello, {username}</p>
            <button> click </button>




            {/*<button onClick={Hello}>CLick</button>*/}
            {/*<button onClick={()=>Hello('gullied ')}>click mee </button>*/}
        </>
    )
}
export default Hi