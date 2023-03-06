import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar () {
    return (
        <div>
            <Sidebar />
        </div>
    )
}

const Sidebar = () => {
    return (
        <div className = "fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-200 text-gray-600 shadow-lg">
            <i>A</i>
            <i>B</i>
            <i>C</i>
            <i>D</i>
        </div>
    )
}