import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full flex flex-col">
            <div className="w-full flex justify-between items-center px-2 py-4 text-sky-900">
                <Link to="/" className="text-3xl font-bold">Todo List</Link>
                <div>
                    <HiMenu onClick={()=> setIsOpen(!isOpen)} className="text-4xl cursor-pointer" />
                </div>
            </div>
            {isOpen && (
                <div className="w-full flex flex-col bg-sky-900 justify-center items-end px-4 py-4 text-white font-bold text-lg">
                    <Link onClick={()=> setIsOpen(false)} to="/" className="cursor-pointer hover:text-sky-300">
                        Home
                    </Link>
                    <Link onClick={()=> setIsOpen(false)} to="/tasks" className="cursor-pointer hover:text-sky-300">
                        Todo List
                    </Link>
                    <Link onClick={()=> setIsOpen(false)} to="/tasks/new" className="cursor-pointer hover:text-sky-300">
                        Create Todo
                    </Link>
                    <Link onClick={()=> setIsOpen(false)} to="/about" className="cursor-pointer hover:text-sky-300">
                        About
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
