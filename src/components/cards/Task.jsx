import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { Link } from "react-router-dom";

const Task = ({ task }) => {
    return (
        <div className="flex flex-col justify-center items-center bg-white rounded p-4 gap-3">
            <div className="flex justify-between items-center w-full">
                <h3 className="text-center text-2xl font-bold text-neutral-800">{task.title}</h3>
            </div>
            <p className="text-neutral-700">{task.description}</p>
            {task.isDone ? (
                <div className="btn btn-primary flex justify-between items-center">
                    <span>Mark as undone</span>
                    <MdCheckBox className="text-2xl" />
                </div>
            ) : (
                <div className="btn btn-primary flex justify-between items-center">
                    <span>Mark as done</span>
                    <MdCheckBoxOutlineBlank className="text-2xl" />
                </div>
            )}
            <div className="flex w-full gap-2">
                <Link to="/tasks/update" className="btn btn-secondary">Update task</Link>
                <button className="btn btn-danger">Delete task</button>
            </div>
        </div>
    );
};

export default Task;
