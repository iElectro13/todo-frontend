import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../layouts/MainLayout";
import { useNavigate, useParams } from "react-router-dom";
import { TodoState } from "../../context/Context";
import { TASKS_URL, UPDATE_TASK_URL } from "../../utils/routes/task.routes";

const UpdateTask = ({ title }) => {
    const [task, setTask] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const titleInput = useRef("");
    const descriptionInput = useRef("");

    const onUpdate = async (e) => {
        e.preventDefault();
        const resp = await fetch(UPDATE_TASK_URL + id, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: titleInput.current.value,
                description: descriptionInput.current.value,
            }),
        });
        navigate("/tasks");
    };
    const getTask = async (id) => {
        const resp = await fetch(TASKS_URL + id);
        const data = await resp.json();
        console.log(data);
        setTask(data);
    };

    useEffect(() => {
        getTask(id);
    }, []);
    return (
        <MainLayout title={title}>
            <form
                action=""
                className="w-full flex flex-col justify-center items-center gap-4"
                onSubmit={onUpdate}
            >
                <div className="w-full flex flex-col gap-2">
                    <label className="font-semibold" htmlFor="title">
                        Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Write a title"
                        className="p-1"
                        defaultValue={task.title}
                        ref={titleInput}
                        required="required"

                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label className="font-semibold" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        type="text-area"
                        placeholder="Write a description"
                        className="p-1"
                        defaultValue={task.description}
                        ref={descriptionInput}
                        required="required"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Update task
                </button>
            </form>
        </MainLayout>
    );
};

export default UpdateTask;
