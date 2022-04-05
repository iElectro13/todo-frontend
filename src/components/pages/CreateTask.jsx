import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { NEW_TASK_URL } from "../../utils/routes/task.routes";
import MainLayout from "../layouts/MainLayout";

const CreateTask = ({ title }) => {
    const navigate = useNavigate();

    const titleInput = useRef("");
    const descriptionInput = useRef("");

    const onCreate = async (e) => {
        e.preventDefault();
        const resp = await fetch(NEW_TASK_URL, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: titleInput.current.value,
                description: descriptionInput.current.value,
            }),
        });
        navigate("/tasks")
    };
    return (
        <MainLayout title={title}>
            <form
                action=""
                className="w-full flex flex-col justify-center items-center gap-4"
                onSubmit={onCreate}
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
                        ref={titleInput}
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
                        ref={descriptionInput}

                    />
                </div>
                <button type="submit" className="btn btn-primary">Create task</button>
            </form>
        </MainLayout>
    );
};

export default CreateTask;
