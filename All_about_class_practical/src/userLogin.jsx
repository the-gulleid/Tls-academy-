import react from 'react'


// functional component

function Login() {
    const username ="Gulled"
    return (
        <>
            {
                username ==="Gulleid" ?(
                    <h1> hello dear user</h1>
                ): (
                   <p>thank u </p>
                )
            }

            </>
    )
}
export default Login