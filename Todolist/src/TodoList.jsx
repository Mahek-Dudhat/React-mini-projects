import "./TodoList.css";
import TodoGame from "./TodoGame";

import Input from '@mui/material/Input';
import Icon from '@mui/material/Icon';

export default function TodoList() {

    function upperCase() {
        setTask((Val) => {
            return Val.map((item) => {
                // {...val, task: val.task.toUpperCase()};
                return { ...item, task: item.task.toUpperCase() };
            })
        })
    }

    function upperCaseOne(id) {
        setTask((currVal) => {
            return currVal.map((item) => {
                if (item.id == id) {
                    return {
                        ...item,
                        task: item.task.toUpperCase()
                    }
                }
                else {
                    return item;
                }
            })
        })
    }


    let markAll = () => {
        setTask((currVal) => {
            return currVal.map((item) => {

                if (item.isDone) {
                    item.isDone = false;
                } else {
                    item.isDone = true;
                }
                return {
                    ...item,
                    isDone: item.isDone
                }

            }
            )
        })
    }


    return (<div className="todo-list">

        <TodoGame />

    </div>);

}