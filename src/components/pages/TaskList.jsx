import React from "react";
import Task from "../cards/Task";
import MainLayout from "../layouts/MainLayout";

const TaskList = ({ title }) => {
    const tasks = [
        {
            id: 1,
            title: "test-title",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, officia.",
            isDone: false,
        },
        {
            id: 2,
            title: "test-title",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, officia.",
            isDone: false,
        },
        {
            id: 3,
            title: "test-title",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, officia.",
            isDone: true,
        },
        {
            id: 4,
            title: "test-title",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, officia.",
            isDone: true,
        },
    ];
    return (
        <MainLayout title={title}>
            <div className="w-full grid grid-cols-1 gap-4 lg:grid-cols-2">
                {tasks.map((task) => (
                    <Task task={task} />
                ))}
            </div>
        </MainLayout>
    );
};

export default TaskList;
