// TaskCreate.tsx

import { useForm, usePage } from '@inertiajs/react';
import React from 'react';

const TaskCreate: React.FC = () => {
    const {userId, /* errors */} = usePage().props;
    // console.log(userId);
    // console.log(errors);
    
    const { data, setData, post } = useForm({
        title: '',
        description: '',
        user_id: userId || '',
    });

    const handleAddTask = () => {
        post(route('tasks.store', data));
        setData({ title: '', description: '', user_id: '' });
    };

    return (
        <div className="max-w-md p-6 my-8 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-lg font-semibold">Add New Task</h2>
            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                    id="title"
                    type="text"
                    value={data.title}
                    onChange={(e) => setData({ ...data, title: e.target.value })}
                    className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                    id="description"
                    value={data.description}
                    onChange={(e) => setData({ ...data, description: e.target.value })}
                    className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
            </div>
            <button
                onClick={handleAddTask}
                className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
            >
                Add Task
            </button>
        </div>
    );
};

export default TaskCreate;
