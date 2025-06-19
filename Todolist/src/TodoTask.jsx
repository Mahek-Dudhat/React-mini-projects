import "./TodoTask.css";
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

export default function TodoTask({ task, removeTask, markDone, removeAllTask }) {

// console.log(task)

    return (<>
        <div className="task">
            <ul>
                {task.map((item) => {
                    return <li key={item.id} style={{ marginTop: "1rem" }}><span style={item.isDone ? { textDecoration: "line-through" } : null}>{item.task}</span>

                        <Button variant="outlined" size='small' onClick={() => removeTask(item.id)} style={{ marginRight: "2rem" }} endIcon={<CloseIcon />} >
                            Remove
                        </Button>

                        <Button variant="contained" size='small' onClick={() => markDone(item.id)} endIcon={<DoneIcon />}>Mark As Done</Button>
                    </li>

                })}
            </ul>
            <br />
            <Button variant="contained" onClick={removeAllTask} size='small'>Remove All</Button>
       
            <br />
          
        </div>
    </>);
}