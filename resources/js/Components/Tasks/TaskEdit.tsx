// TaskEdit.tsx

import React, { useState, useEffect } from 'react';
import { Task } from '@/Pages/Tasks';
import { useForm } from '@inertiajs/react';

interface TaskEditProps {
    tasks: Task[];
}

const TaskEdit: React.FC<TaskEditProps> = ({ tasks }) => {
    // State to hold the currently selected task ID
    const [selectedTaskId, setSelectedTaskId] = useState<number | null>(tasks[0]?.id || null);

    const { data, setData, put } = useForm({
        title: '',
        description: '',
    });

    // Update form data when the selected task ID changes
    useEffect(() => {
        const selectedTask = tasks.find(task => task.id === selectedTaskId);
        if (selectedTask) {
            setData({
                title: selectedTask.title,
                description: selectedTask.description,
            });
        }
    }, [selectedTaskId, tasks]);

    // Handle the update task action
    const handleUpdateTask = () => {
        if (selectedTaskId) {
            put(route('tasks.update', selectedTaskId));
        }
    };

    return (
        <div className="max-w-md p-6 my-8 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-lg font-semibold">Edit Task</h2>

            <div className="mb-4">
                <label htmlFor="taskSelect" className="block text-sm font-medium text-gray-700">
                    Select Task
                </label>
                <select
                    id="taskSelect"
                    value={selectedTaskId || ''}
                    onChange={(e) => setSelectedTaskId(Number(e.target.value))}
                    className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                    {tasks.map((task) => (
                        <option key={task.id} value={task.id}>
                            {task.title}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title
                </label>
                <input
                    id="title"
                    type="text"
                    value={data.title}
                    onChange={(e) => setData({ ...data, title: e.target.value })}
                    className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                </label>
                <textarea
                    id="description"
                    value={data.description}
                    onChange={(e) => setData({ ...data, description: e.target.value })}
                    className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
            </div>

            <button
                onClick={handleUpdateTask}
                className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
            >
                Update Task
            </button>
        </div>
    );
};

export default TaskEdit;
