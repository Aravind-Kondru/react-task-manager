import {useState} from "react"
import "./Apps.css"

function Apps(){
    const[task, setTask] = useState("")
    const[tasks, setTasks] = useState([])
    const[Tag, setTag] = useState("")
    const[heading, setHeading] = useState("No Tasks Added Yet")
    const[selectedTag, setSelectedTag] = useState("")
    const filteredTasks = (selectedTag === ""
        ? tasks
        : tasks.filter((item) => item.tag === selectedTag))

    return(
        <div>
            <h1>Create a task!</h1>

            <h1>Task</h1>
            <input 
                placeholder="Enter the Task.."
                value={task}
                onChange={(event) => setTask(event.target.value)}
            />

            <h2>Tags</h2>
            <select
                value={Tag}
                onChange={(event) => setTag(event.target.value)}
            >
                <option value="">Select a Tag</option>
                <option value="Health">Health</option>
                <option value="Education">Education</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Sports">Sports</option>
                <option value="Travel">Travel</option>
                <option value="Others">Others</option>
            </select>

            <button onClick={() => (
                setTasks([...tasks, {task: task, tag: Tag}]),
                setTask(""),
                setHeading(""),
                setTag("")
            )}>
                Add Task
            </button>

            <h2>Tags</h2>
            <button onClick={() => {
                if (selectedTag === "Health"){
                    setSelectedTag("")
                } else{
                    setSelectedTag("Health")
                }
            }}>Health</button>
            <button onClick={() => {
                if (selectedTag === "Education"){
                    setSelectedTag("")
                } else{
                    setSelectedTag("Education")
                }
            }}>Education</button>
            <button onClick={() => {
                if (selectedTag === "Entertainment"){
                    setSelectedTag("")
                } else{
                    setSelectedTag("Entertainment")
                }
            }}>Entertainment</button>
            <button onClick={() => {
                if (selectedTag === "Sports"){
                    setSelectedTag("")
                } else{
                    setSelectedTag("Sports")
                }
            }}>Sports</button>
            <button onClick={() => {
                if (selectedTag === "Travel"){
                    setSelectedTag("")
                } else{
                    setSelectedTag("Travel")
                }
            }}>Travel</button>
            <button onClick={() => {
                if (selectedTag === "Others"){
                    setSelectedTag("")
                } else{
                    setSelectedTag("Others")
                }
            }}>Others</button>

            <h2>Task</h2>
            <h1>{heading}</h1>
            
            {filteredTasks.map((item) => (
                <p key={item.task}>{item.task} - {item.tag}</p>
            ))}
        </div>
    )
}

export default Apps;


// import {Routes, Route} from 'react-router-dom'
// import Navbar from './Navbar'

// function Home() {
//   return <h1>Netflix Home</h1>
// }

// function Popular() {
//   return <h1>Popular Movies</h1>
// }

// function Search() {
//   return <h1>Search Movies</h1>
// }

// function Account() {
//   return <h1>Account Page</h1>
// }

// function Apps() {
//   return (
//     <div>
//       <Navbar />

//       <Routes>
//         <Route exact path="/" element={<Home/>} />
//         <Route exact path="/popular" element={<Popular/>} />
//         <Route exact path="/search" element={<Search/>} />
//         <Route exact path="/account" element={<Account/>} />
//       </Routes>
//     </div>
//   )
// }

// export default Apps

// import {useState, useEffect} from "react";

// function Apps(){
//     const [task, setTask] = useState("");

//     const [tasks, setTasks] = useState(() => {
//         const savedTasks = localStorage.getItem("tasks");
//         return savedTasks ? JSON.parse(savedTasks) : [];
//     });

//     useEffect(() => {
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//     }, [tasks]);

//     return(
//         <div>
//             <h1>Student Task Manager</h1>

//             <input 
//                 placeholder="Enter your task..."
//                 value={task}
//                 onChange={(event) => setTask(event.target.value)}
//             />

//             <button onClick={() => {
//                 setTasks([...tasks, task]);
//                 setTask("");
//             }}>
//                 Add task
//             </button>

//             {tasks.map((task) => (
//                 <p key={task}>
//                     {task}
//                     <button 
//                         onClick={() => {
//                             setTasks(tasks.filter((item) => item !== task))
//                     }}>
//                         Delete
//                     </button>    
//                 </p>
//             ))}
//         </div>
//     )
// }

// export default Apps;

// counter application 
// import {useState} from "react";

// function Apps(){
//     const [number, setNumber] = useState(0);
    
//     return(
//         <div>
//             <h1>{number}</h1>

//             <button 
//                 onClick={() => {
//                     setNumber(number + 1);
//                 }}>
//                     ADDITION
//             </button>

//             <button 
//                 onClick={() => {
//                     setNumber(number - 1);
//                 }}>
//                     SUBTRACT 
//             </button>

//             <button 
//                 onClick={() => {
//                     setNumber(0);
//                 }}>
//                     ZERO
//             </button>
//         </div>
//     )

// }

// export default Apps;


// import {useState, useEffect} from "react";
// import Task from "./Task.jsx";

// function Apps(){
//     const [formData, setFormData] = useState({
//         task: "",
//         priority: ""
//     });

//     const [tasks, setTasks] = useState(() => {
//         const savedTasks = localStorage.getItem("tasks");
//         return savedTasks ? JSON.parse(savedTasks) : [];
//     });

//     const deleteTask = (taskToDelete) => {
//         setTasks(tasks.filter((item) => item !== taskToDelete));
//     };

//     const toggleTask = (taskToToggle) => {
//         setTasks(
//             tasks.map((item) =>
//                 item === taskToToggle
//                     ? { ...item, completed: !item.completed }
//                     : item
//                 )
//             );
//         };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         if (formData.task === "") return;
//                     setTasks([
//                         ...tasks,
//                         {
//                             ...formData,
//                             completed: false
//                         }
//                     ]);
//                     setFormData({
//                         task: "",
//                         priority: ""
//                     });
//     }    

//     useEffect(() => {
//         localStorage.setItem("tasks", JSON.stringify(tasks)); 
//     }, [tasks]);

//     return(
//         <div>
//             <h1>Student Task Manager</h1>

//             <form onSubmit={handleSubmit}>

//                 <input
//                     name="task"
//                     placeholder="Enter a task..."
//                     value={formData.task}
//                     onChange={(event) => {
//                         setFormData({
//                             ...formData,
//                             [event.target.name] : event.target.value
//                         })
//                     }}
//                 />

//                 <select
//                     name="priority"
//                     value={formData.priority}
//                     onChange={(event) =>
//                         setFormData({
//                             ...formData,
//                             [event.target.name]: event.target.value
//                         })
//                     }
//                 >
//                     <option value="">Select Priority</option>
//                     <option value="Low">Low</option>
//                     <option value="Medium">Medium</option>
//                     <option value="High">High</option>
//                 </select>

//                 <button
//                     type="submit"  
//                 >
//                     Add Task
//                 </button>
//             </form>

//             <h1>Tasks</h1>

//             {tasks.length === 0 ? (
//                 <p>No tasks yet!</p>
//             ) : (
//                 <p>You have tasks</p>
//             )}

//             {tasks.map((task) => (
//                 <Task 
//                     task={task}
//                     key={task.task}
//                     deleteTask={deleteTask}
//                     toggleTask={toggleTask}
//                 />
//             ))}
//         </div>
//     );
// }

// export default Apps;

// import {useState, useEffect} from "react";
// import "./Apps.css";
// import Task from "./Task.jsx";

// function Apps(){
//     const [fromData, setFromData] = useState({
//         task: "",
//         priority: ""
//     });
//     const [tasks, setTasks] = useState(() => {
//     const savedTasks = localStorage.getItem("tasks");
//     return savedTasks ? JSON.parse(savedTasks) : [];
//     });
//     const deleteTask = (taskToDelete) => {
//         setTasks(tasks.filter((item) => item !== taskToDelete));
//     };
//     const handleSubmit = (event) => {
//         event.preventDefault();

//         if (fromData.task === "") {
//             return;
//         } else {
//             setTasks([...tasks, fromData]);
//             setFromData({
//                 task: "",
//                 priority: ""
//             });
//         }
//     }

//     useEffect(() => {
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//     }, [tasks]);

//     return(
//         <div className="app">
//             <h1 className="heading-1">Student Task Manager</h1>

//             <form onSubmit={handleSubmit}>
//                 <input
//                     name="task"
//                     placeholder="Enter a task..."
//                     value={fromData.task}
//                     onChange={(event) => 
//                         setFromData({
//                             ...fromData,
//                             [event.target.name] : event.target.value
//                         })
//                     }
//                 />

//                 <input
//                     name="priority"
//                     placeholder="Enter priority"
//                     value={fromData.priority}
//                     onChange={(event) => 
//                         setFromData({
//                             ...fromData,
//                             [event.target.name] : event.target.value
//                         })
//                     }
//                 />

//                 <button 
//                     className="button" 
//                     type="submit">
//                         Add Tasks
//                 </button>
//             </form>

//                <h1 className="heading-2">Tasks</h1>

//                {tasks.length === 0 ? (
//                     <p className="task">No tasks yet!</p>
//                 ) : (
//                     <p className="task">You have tasks!</p>
//                 )}

//                 {tasks.map((task) => (
//                     <Task 
//                         key={task.task} 
//                         task={task} 
//                         deleteTask={deleteTask}
//                     />
//                 ))} 

//                {/* {tasks.map((task) => (
//                 <p className="task" key={task}>
//                     {task}
//                     <button onClick={() => {
//                         setTasks(tasks.filter((item) => item !== task))
//                     }}>Delete</button>
//                 </p>
//             ))} */}

//         </div>
//     )
// }

// export default Apps;



// import {useState, useEffect} from "react";

// function Apps(){
//     const [task, setTask] = useState("");
//     const [tasks, setTasks] = useState(() => {
//     const savedTasks = localStorage.getItem("tasks");
//     return savedTasks ? JSON.parse(savedTasks) : [];
//     });

//     useEffect(() => {
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//     }, [tasks]);

//     return(
//         <div>
//             <h1>Student Task Manager</h1>

//             <input
//                 placeholder="Enter a task..."
//                 value={task}
//                 onChange={(event) => setTask(event.target.value)}
//             />

//             <button onClick={() => {
//                 if (task === "") {
//                     return;
//                 } else {
//                     setTasks([...tasks, task]);f
//                     setTask("");
//                 }
//                 }}>
//                 Add Tasks
//             </button>


//                <h1>Tasks</h1>

//                {tasks.map((task) => (
//                 <p key={task}>
//                     {task}
//                     <button onClick={() => {
//                         setTasks(tasks.filter((item) => item !== task))
//                     }}>Delete</button>
//                 </p>
//             ))}

//         </div>
//     )
// }

// export default Apps;


