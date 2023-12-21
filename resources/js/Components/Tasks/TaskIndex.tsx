// TaskIndex.tsx

import { Task } from '@/Pages/Tasks';
import { useForm } from '@inertiajs/react';
import React from 'react';

interface TaskIndexProps {
    tasks: Task[];
}

const TaskIndex: React.FC<TaskIndexProps> = ({ tasks }) => {

    // console.log(param);
    const formMethods = useForm();

    const onDelete = (id: number) => {
        // Confirm before deleting
        if (window.confirm('Are you sure you want to delete this task?')) {
            formMethods.delete(route('tasks.destroy', id), {
                onSuccess: () => {
                    // Handle success response, e.g., show a success message or refresh data
                    console.log("Task deleted successfully!")
                },
                onError: () => {
                    // Handle error response, e.g., show an error message
                    console.error('An error occurred while deleting the task.');
                }
            });
        }
    };

    return (
        <div className="container p-4 mx-auto">
            {tasks.map(task => (
                <div key={task.id} className="pb-4 mb-4 border-b border-gray-200">
                    <h2 className="text-xl font-semibold">{task.title}</h2>
                    <p className="mb-2 text-gray-600">{task.description}</p>
                    <button
                        onClick={() => onDelete(task.id)}
                        className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TaskIndex;
