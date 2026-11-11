import {useState} from "react"
import "./App.css"

function App(){
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
                <p key={item.task}>{item.task} {item.tag}</p>
            ))}
        </div>
    )
}

export default App;