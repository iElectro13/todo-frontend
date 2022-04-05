import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { Link } from "react-router-dom";
import { TodoState } from "../../context/Context";
import {
    CHECK_TASK_URL,
    DELETE_TASK_URL,
} from "../../utils/routes/task.routes";

const Task = ({ task }) => {
    const { dispatch, state } = TodoState();

    const handleDelete = async (id) => {
        const resp = await fetch(DELETE_TASK_URL + id, {
            method: "DELETE",
        });
        const data = await resp.json();
        dispatch({
            type: "REMOVE_FROM_TASKS",
            payload: task,
        });
    };

    const onCheck = async (id) => {
        const resp = await fetch(CHECK_TASK_URL + id, {
            method: "PUT",
        });
        dispatch({
            type: "CHECK_TASK",
            payload: task,
        });
        console.log(state.tasks[0])
    };
    return (
        <div className="flex flex-col justify-center items-center bg-white rounded p-4 gap-3">
            <div className="flex justify-between items-center w-full">
                <h3 className="text-center text-2xl font-bold text-neutral-800">
                    {task.title}
                </h3>
            </div>
            <p className="text-neutral-700 text-left w-full">
                {task.description}
            </p>
            {task.isDone ? (
                <div
                    onClick={() => onCheck(task._id)}
                    className="btn btn-primary flex justify-between items-center"
                >
                    <span>Mark as undone</span>
                    <MdCheckBox className="text-2xl" />
                </div>
            ) : (
                <div
                    onClick={() => onCheck(task._id)}
                    className="btn btn-primary flex justify-between items-center"
                >
                    <span>Mark as done</span>
                    <MdCheckBoxOutlineBlank className="text-2xl" />
                </div>
            )}
            <div className="flex w-full gap-2">
                <Link
                    to={"/tasks/update/" + task._id}
                    className="btn btn-secondary"
                >
                    Update task
                </Link>
                <button
                    onClick={() => handleDelete(task._id)}
                    className="btn btn-danger"
                >
                    Delete task
                </button>
            </div>
        </div>
    );
};

export default Task;
