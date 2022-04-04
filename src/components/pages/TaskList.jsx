import React, { useEffect } from "react";
import { TodoState } from "../../context/Context";
import { TASKS_URL } from "../../utils/routes/task.routes";
import Task from "../cards/Task";
import MainLayout from "../layouts/MainLayout";

const TaskList = ({ title }) => {
    const {
        state: { tasks },
        dispatch,
    } = TodoState();

    const getTasks = async()=> {
        const resp = await fetch(TASKS_URL)
        const data = await resp.json()
        dispatch({
            type: "SET_TASKS",
            payload: data
        })

    }

    useEffect(() => {
        getTasks()
    }, []);

    return (
        <MainLayout title={title}>
            <div className="w-full grid grid-cols-1 gap-4 lg:grid-cols-2">
                {tasks.map((task) => (
                    <Task key={task._id} task={task} />
                ))}
            </div>
        </MainLayout>
    );
};

export default TaskList;
