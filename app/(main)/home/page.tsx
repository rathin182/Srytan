"use client";

import React, { useEffect, useState } from "react";
import { Bell, Plus, Search } from "lucide-react";
import {
    LayoutDashboard,
    FolderOpen,
    FileText,
    Users,
    Settings,
    HelpCircle,
} from "lucide-react";


const HomePage = () => {
    const [openSearch, setOpenSearch] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setOpenSearch(true);
            }

            if (e.key === "Escape") {
                setOpenSearch(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Prevent background scrolling while modal is open
    useEffect(() => {
        document.body.style.overflow = openSearch ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openSearch]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Fixed Header */}
            <header className="fixed top-0 left-0 right-0 z-40 h-14 bg-white px-8 flex items-center justify-between">
                {/* Left */}
                <div className="flex-1">
                    <h1 className="text-xl font-bold tracking-wide select-none">
                        Srytan
                    </h1>
                </div>

                <div className="flex gap-6 items-center">
                    {/* Center */}
                    <div className="flex flex-1 justify-center">
                        <button
                            onClick={() => setOpenSearch(true)}
                            className="w-40 h-9 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-between px-3 transition"
                        >
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                                <Search size={16} />
                                <span>Search...</span>
                            </div>

                            <kbd className="rounded bg-white px-2 py-0.5 text-[0.6rem] text-gray-500 shadow-sm">
                                Ctrl K
                            </kbd>
                        </button>
                    </div>

                    {/* Right */}
                    <div className="flex flex-1 justify-end items-center gap-3">
                        <button className="rounded-md p-2 hover:bg-gray-100 transition">
                            <Bell size={18} />
                        </button>

                        <button className="flex items-center gap-2 rounded-lg bg-black px-3 py-2 text-sm text-white hover:bg-gray-800 transition">
                            <Plus size={16} />
                            New
                        </button>
                    </div>
                </div>
            </header>

            <aside className="fixed top-14 left-0 h-[calc(100vh-3.5rem)] w-64 bg-white border-r border-gray-200">
                <div className="flex flex-col h-full py-4">

                    {/* Navigation */}
                    <nav className="flex-1 px-3 space-y-1">

                        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-black text-white">
                            <LayoutDashboard size={18} />
                            <span className="text-sm font-medium">Dashboard</span>
                        </button>

                        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition">
                            <FolderOpen size={18} />
                            <span className="text-sm">Projects</span>
                        </button>

                        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition">
                            <FileText size={18} />
                            <span className="text-sm">Documents</span>
                        </button>

                        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition">
                            <Users size={18} />
                            <span className="text-sm">Team</span>
                        </button>
                    </nav>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-200 px-3 pt-3 space-y-1">
                        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition">
                            <Settings size={18} />
                            <span className="text-sm">Settings</span>
                        </button>

                        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition">
                            <HelpCircle size={18} />
                            <span className="text-sm">Help</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Search Modal */}
            {openSearch && (
                <div
                    onClick={() => setOpenSearch(false)}
                    className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 pt-24 backdrop-blur-sm"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl"
                    >
                        <div className="flex h-14 items-center gap-3 px-4">
                            <Search size={18} className="text-gray-400" />

                            <input
                                autoFocus
                                type="text"
                                placeholder="Search documentation..."
                                className="flex-1 bg-transparent text-sm outline-none"
                            />
                        </div>

                        <div className="p-6 text-sm text-gray-500">
                            Start typing to search...
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main className="pt-14 p-8">
                <div className="mx-auto max-w-6xl">
                    <h2 className="mb-4 text-3xl font-bold">
                        Welcome to Srytan
                    </h2>

                    <p className="text-gray-600">
                        Your content goes here.
                    </p>

                    {/* Demo Content */}
                    <div className="mt-10 space-y-6">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div
                                key={i}
                                className="rounded-lg bg-white p-6 shadow-sm"
                            >
                                <h3 className="font-semibold">Section {i + 1}</h3>
                                <p className="mt-2 text-sm text-gray-500">
                                    Scroll the page to see the header remain fixed at the top.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;