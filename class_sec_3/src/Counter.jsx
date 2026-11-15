//
// import React, { useState } from "react";
//
// function Register() {
//
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//
//     const [submitted, setSubmitted] = useState(null);
//
//     function handleSubmit(e) {
//         e.preventDefault();
//
//         setSubmitted({
//             username: username,
//             email: email
//         });
//
//         setUsername("");
//         setEmail("");
//     }
//
//     return (
//         <div>
//             <h2>Registration Form</h2>
//
//             <form onSubmit={handleSubmit}>
//
//                 <input
//                     type="text"
//                     placeholder="Enter username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//
//                 <br /><br />
//
//                 <input
//                     type="email"
//                     placeholder="Enter email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//
//                 <br /><br />
//
//                 <button type="submit">Register</button>
//
//             </form>
//
//             {submitted && (
//                 <div>
//                     <h2>Registration Successful!</h2>
//
//                     <h3>Your username is: {submitted.username}</h3>
//
//                     <p>Your email is: {submitted.email}</p>
//                 </div>
//             )}
//
//         </div>
//     );
// }
//
// export default Register;
