// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Test from "./Test"; 
// import UserContext from "./UserContext";
// import Profile from "./profile";  
// import { useState } from "react";
// import ProtectedRoute from "./ProtectedRoute";
// import { AuthProvider } from "./AuthContext";

// function App() {
//   const [name, setName] = useState("Arvi");
//   const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
//   const [email, setMail] = useState("");
//   const[password, setPassword] = useState("");
//   const[error, setError] = useState("")

//   function handleLogin(){
//     if (email == "arvi@gmail.com" && password == "1234"){
//       setIsLoggedIn(true);
//       localStorage.setItem("isLoggedIn", "true");
//       setError("");
//     }
//     else{
//       setError("Wrong email or password");
//     }
//   }

//   function handleLogout(){
//     setIsLoggedIn(false);
//     localStorage.removeItem("isLoggedIn");
//     setMail("");
//     setPassword("");
//     setError("");
//   }

//   return (
//     <AuthProvider>
//       <BrowserRouter>
//       <UserContext.Provider value={{ name, setName, age: 20 }}>   
//         <Profile />
      
//         <nav className="navbar">
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/contact">Contact</Link>
//           <Link to="/user/31500">User</Link>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route
//           path="/contact"
//           element={
//           <ProtectedRoute>
//           <Contact />
//           </ProtectedRoute>
//           }
//           />
//           <Route path="/user/:id" element={<Test />} />
//         </Routes>
//         </UserContext.Provider>

//         {isLoggedIn ?(
//           <div>
//             <h1>Welcome! You are logged in</h1>
//             <button onClick={handleLogout}>Logout</button>
//           </div>
//         ): (
//           <div>
//             <h1>Please Login</h1>

//             <input 
//               type="email"  
//               placeholder="Enter your email"
//               value={email}
//               onChange={(event) => setMail(event.target.value)}
//             />

//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(event) => setPassword(event.target.value)}
//             />

//             <button onClick={handleLogin}>Login</button>
//             <p>{error}</p>
//           </div>
//         )}  
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

// export default App;

// import {useState, useEffect} from "react";

// function App(){
//   const [users, setUser] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   async function getUsers(){
//     try{
//       const response = await fetch("https://jsonplaceholder.typicode.com/users");

//       const data = await response.json();

//       setUser(data);
//       setLoading(false);
//     }
//     catch (error){
//       setError("Something went wrong");
//       setLoading(false);
//     }
//   } 

//   useEffect(() => {
//     getUsers();
//   }, [])

//   return(
//     <div>
//       <h1>Users</h1>

//       {loading && <p>loading...</p>}
//       {error && <p>Something went wrong</p>}

//       {users.map((user) => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   )
// }

// export default App;


// import { useState, useEffect } from "react";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   async function getUsers() {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );

//       const data = await response.json();

//       setUsers(data);
//       setLoading(false);
//     } catch (error) {
//       setError("Something went wrong");
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     getUsers();
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>

//       {loading && <p>Loading users...</p>}

//       {error && <p>{error}</p>}

//       {users.map((user) => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// }

// export default App;


// import {useState, useEffect} from "react";

// function App() {
//   const [message, setMessage] = useState("")
//   const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello bro!");
//     }, 3000);
//   });

//   async function getMessgae(){
//     const result = await myPromise;
//     console.log(result);
//     setMessage(result);
//   }

//   useEffect(() => {
//     getMessgae();
//   }, [])
//   return (
//     <h1>{message}</h1>
//   )
// }

// export default App;


// function App(){
//   const myPromise = new Promise((resolve, reject) => {
//       setTimeout(() =>{
//         resolve("Finished");
//       }, 3000);
//   })

//   myPromise
//   .catch((error) => 
//     console.log(error))
// }

// export default App;

// import {useState, useEffect} from "react";

// function App(){
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect (() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => {
//       setUsers(data)
//       .catch((error) => {
//         setError("Something went wrong")
//         setLoading(false)
//       })
//     });\f
//   }, []);

//   return (
//     <div>
//       <h1>User</h1>
//       {loading && <p>Loading users...</p>}
//       {users.map((user) => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// }

// export default App;


// import {useEffect} from "react";
// import {useState} from "react"
// ;
// function App(){
//   const [user, setUser] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       });
//   }, []);
//   return(
//     <h1>User</h1>
//   )
// }

// export default App;

// import {useState} from "react";
// import {useEffect} from "react";

// function App(){
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("Page Loded")
//   }, [count])

//   return(
//     <div>
//       <h1>{count}</h1>
//       <button onClick = {() => setCount(count + 1)}>Increase</button>
//     </div>
//   )
// }

// export default App;

// import {useEffect} from "react";

// function App(){
//   useEffect(() => {
//     console.log("Page Loded");
//   }, []);

//   return (
//     <h1>Hello</h1>
//   )
// }

// export default App;

// import {useState} from "react";

// function App(){
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [submittedName, setSubmittedName] = useState("");
//   const [submittedAge, setSubmittedAge] = useState("");

//   function handleSubmit(event){
//     event.preventDefault();
//     setSubmittedName(name);
//     setSubmittedAge(age);

//   }

//   return(
//     <div>
//       <form onSubmit = {handleSubmit}>
//          <input 
//           value = {name}
//           onChange={(event) => setName(event.target.value)}
//           placeholder = "Enter Name"
//          />
//          <input
//           value = {age}
//           onChange={(event) => setAge(event.target.value)}
//           placeholder = "Enter Age"
//          />
//          <button type="submit">Submit</button>
//       </form>
//         <h1>
//           Hello {submittedName}, you are {submittedAge} years old.
//         </h1>
//     </div>
//   )
// }

// export default App;

// import {useState} from "react";

// function App(){
//   const [name, setName] = useState("")
//   const [age, setAge] = useState("")

//   return(
//     <div>
//       <input
//         value = {name}
//         onChange = {(event) => setName(event.target.value)}
//       />
//       <input 
//         value = {age}
//         onChange = {(event) => setAge(event.target.value)} 
//       />
//       <button>Button</button>
//       <h1>Hello {name}, you are {age} years old.</h1>
//     </div>
//   )
// }

// export default App;


// import {useState} from "react";

// function App(){
//   const [name, setName] = useState("");

//   return(
//     <div>
//       <input 
//         value = {name}
//         onChange = {(event) => setName(event.target.value)}
//       />
//       <h1>{name}</h1>
//     </div>
//   )
// }

// export default App;

// import { useState } from "react";

// function App(){
//   const [count, setCount] = useState(0);

//   return(
//     <div>
//       <h1>{count}</h1>
//       <button onClick = {() => setCount(count + 1)}>Increase</button>
//       <button onClick = {() => setCount(0)}>Reset</button>
//       <button onClick = {() => setCount(count - 1)}>Decerase</button>
//     </div>
//   )
// }

// export default App;


// function App(){
//   const names = ["Arvi", "Rahul", "John", "David"];
  
//   return (
//     <div>
//       {names.map((name) => (
//         <p key={name}>{name}</p>
//       ))}
//     </div>
//   );
// }

// export default App;


// function Profile(props) {
//   return <h1>Hello {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Profile name="Arvi" />
//     </div>
//   );
// }

// export default App;


// function Profile(props){
//   return(
//     <div>
//       <p>Hello {props.name}</p>
//       <p>I am {props.age}</p>
//     </div>
//   )
// }

// function App(){
//   return(
//     <div>
//       <Profile name = "Arvi" age="20"/>
//     </div>
//   )
// }

// export default App;




// function Header(){
//   return <h1>My Website</h1>
// }

// function About(){
//   return <h1>I am learning React</h1>
// }

// function App(){
//   const name = "Arvi";
//   const age = "20";
//   const course = "computer science"

//   return(
//     <div>
//       <h1>My React Profile</h1>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//       <p>Course: {course}</p>

//       <Header/>
//       <About/>
//     </div>
//   );
// }

// export default App;

