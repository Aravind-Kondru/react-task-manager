import {useState, useEffect} from "react"
import "./App.css"

function App(){
    const[task, setTask] = useState("")
    const[tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks")
        return savedTasks ? JSON.parse(savedTasks) : []
    })
    const[Tag, setTag] = useState("")
    const[num, setNum] = useState(() => {
        const savedNum = localStorage.getItem("num")
        return savedNum ? JSON.parse(savedNum) : 1
    })
    const[selectedTag, setSelectedTag] = useState("")
    const filteredTasks = (selectedTag === ""
        ? tasks
        : tasks.filter((item) => item.tag === selectedTag))
    function deleteTask(num){
        setTasks(tasks.filter((item) => item.num !== num))
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    useEffect(() => {
        localStorage.setItem("num", JSON.stringify(num))
    }, [num])

    return(
        <div className="container-1">
            <div className="container-2">
                <h1 className="h1">Create a task!</h1>

                <h1 className="h2">Task</h1>
                <input 
                    className="input"
                    placeholder="Enter the Task.."
                    value={task}
                    onChange={(event) => setTask(event.target.value)}
                />

                <h2 className="h3">Tags</h2>
                <select
                    className="select"
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

                <button
                    className="button"
                    onClick={() => (
                        setTasks([...tasks, {num: num, task: task, tag: Tag}]),
                        setTask(""),
                        setTag(""),
                        setNum(num + 1)
                )}>
                    Add Task
                </button>

                <h2 className="h4">Tags</h2>
                <button className="button" onClick={() => setSelectedTag("")}>All Tags</button>

                <button className="button" onClick={() => {
                    if (selectedTag === "Health"){
                        setSelectedTag("")
                    } else{
                        setSelectedTag("Health")
                    }
                }}>Health</button>
                <button className="button" onClick={() => {
                    if (selectedTag === "Education"){
                        setSelectedTag("")
                    } else{
                        setSelectedTag("Education")
                    }
                }}>Education</button>
                <button className="button" onClick={() => {
                    if (selectedTag === "Entertainment"){
                        setSelectedTag("")
                    } else{
                        setSelectedTag("Entertainment")
                    }
                }}>Entertainment</button>
                <button className="button" onClick={() => {
                    if (selectedTag === "Sports"){
                        setSelectedTag("")
                    } else{
                        setSelectedTag("Sports")
                    }
                }}>Sports</button>
                <button className="button" onClick={() => {
                    if (selectedTag === "Travel"){
                        setSelectedTag("")
                    } else{
                        setSelectedTag("Travel")
                    }
                }}>Travel</button>
                <button className="button" onClick={() => {
                    if (selectedTag === "Others"){
                        setSelectedTag("")
                    } else{
                        setSelectedTag("Others")
                    }
                }}>Others</button>

                <h2 className="h5">Tasks</h2>
                {tasks.length === 0 && <h1 className="h6">No tasks available</h1>}
                
                {filteredTasks.map((item) => (
                    <div className="para" key={item.num}>
                        <div className="div">
                            <p className="p1">{item.num}. {item.task}</p> 
                            <p className="p2">{item.tag}</p>
                            <button className="deletebutton" onClick={() => (deleteTask(item.num), setNum(num - 1))}> Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App;