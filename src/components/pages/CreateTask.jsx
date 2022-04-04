import React from "react";
import MainLayout from "../layouts/MainLayout";

const CreateTask = ({ title }) => {
    return (
        <MainLayout title={title}>
            <form action="" className="w-full flex flex-col justify-center items-center gap-4">
                <div className="w-full flex flex-col gap-2">
                    <label className="font-semibold" htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Write a title"
                        className="p-1"
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label className="font-semibold" htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        type="text-area"
                        placeholder="Write a description"
                        className="p-1"
                    />
                </div>
                <button className="btn btn-primary">Create task</button>
            </form>
        </MainLayout>
    );
};

export default CreateTask;
