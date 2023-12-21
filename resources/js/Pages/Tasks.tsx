// Tasks.tsx Page
import TaskCreate from '@/Components/Tasks/TaskCreate';
import TaskEdit from '@/Components/Tasks/TaskEdit';
import TaskIndex from '@/Components/Tasks/TaskIndex';
import { usePage } from '@inertiajs/react'

export interface Task {
    id: number;
    title: string;
    description: string;
}

const Tasks = () => {
    const { tasks } = usePage<{ tasks: Task[] }>().props;
    // console.log(tasks);
    return (
        <div className="container p-4 mx-auto">
            <div className="mb-6">
                <h2 className="mb-3 text-lg font-semibold">Tasks List</h2>
                <div className="mb-6 border-b-2 border-gray-200"></div> {/* Divider */}
                <TaskIndex tasks={tasks} />
            </div>

            <div className="mb-6">
                <h2 className="mb-3 text-lg font-semibold">Create New Task</h2>
                <div className="mb-6 border-b-2 border-gray-200"></div> {/* Divider */}
                <TaskCreate />
            </div>

            {tasks.length > 0 && (
                <div>
                    <h2 className="mb-3 text-lg font-semibold">Edit Task</h2>
                    <div className="mb-6 border-b-2 border-gray-200"></div> {/* Divider */}
                    <TaskEdit tasks={tasks} />
                </div>
            )}
        </div>
    )
}

export default Tasks