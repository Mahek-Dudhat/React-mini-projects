import TextField from '@mui/material/TextField';
import AddTaskButton from "./AddTaskButton";
import Container from '@mui/material/Container';
import TodoTask from './TodoTask';
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';

export default function TodoGame() {



    let [task, setTask] = useState(() => {
        let taskData = localStorage.getItem("task");

        if (!taskData) return [];
        return JSON.parse(taskData);
    });

    let [newTask, setNewTask] = useState("");
    let [dateTime, setDateTime] = useState("");

    useEffect(() => {

        localStorage.setItem("task", JSON.stringify(task));

        JSON.parse(localStorage.getItem("cart"));
        let interval = setInterval(() => {
            let now = new Date();
            let formatDate = now.toLocaleDateString();
            let formatTime = now.toLocaleTimeString();

            setDateTime(`Date: ${formatDate},Time:${formatTime}`);

            return () => { clearInterval(interval) }
        }, 1000)

    }, [])

    let addTask = () => {

        setTask((tasks) => {
            return [...tasks, { task: newTask, id: uuidv4(), isDone: false }];
        });
        localStorage.setItem("task", JSON.stringify(task));
        console.log(task);
        setNewTask("");
    }

    let newTodo = (e) => {
        setNewTask(e.target.value);
        //   newTask = e.target.value;

        console.log(newTask);
    }


    let removeTask = (id) => {

        //THIS IS A FIRST METHOD FOR REMOVING A ANY TASK:

        // let temp = task.filter((val) => { val.id !== id });
        // console.log(temp);


        //THIS IS A SECOND METHOD FOR REMOVING A ANY TASK:
        setTask((val) => {

            return val.filter((currVal) => currVal.id !== id);

        })
        localStorage.setItem("task", JSON.stringify(task));
        JSON.parse(localStorage.getItem("cart"));

    }

    let toggling = (id) => {

        setTask((val) => {
            return val.map((item) => {
                if (item.id == id) {
                    if (!item.isDone) {
                        item.isDone = true;
                    } else {
                        item.isDone = false;
                    }
                    return {
                        ...item,
                        isDone: item.isDone
                    }
                } else {
                    return item;
                }
            })
        })


    }

    let removeAllTask = () => {
        setTask((val) => {

            return val.filter((curr) => { (curr.task !== "") });
        })

        JSON.parse(localStorage.getItem("cart"));
    }



    return (<>
        <Container maxWidth="sm">

            <h2>Todo-List</h2>
            <br />
            <h2>{dateTime}</h2>
            <TextField id="filled-basic" label="Adda Task.." value={newTask} onChange={newTodo} variant="filled" placeholder="Add some task.." style={{ marginRight: "2rem", height: "5px", textAlign: "center" }} />
            <AddTaskButton action={addTask} />

            <br />
            <TodoTask task={task} removeTask={removeTask} markDone={toggling} removeAllTask={removeAllTask} />

        </Container>
    </>);
}