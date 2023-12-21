<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index()
    {
        if (auth()->check()) {
            $tasks = auth()->user()->tasks;
            $userId = auth()->user()->id;
            return Inertia::render('Tasks', [
                'tasks' => $tasks,
                'userId' => $userId
            ]);
        }

        return response()->json(['message' => 'Not authenticated'], 401);
    }

    // Store a new task
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'title' => 'required|max:255',
                'description' => 'nullable',
                'user_id' => 'required|exists:users,id'
            ]);

            // Create a new task with the validated data
            Task::create($validatedData);

            return to_route('tasks.index');
        } catch (\Illuminate\Validation\ValidationException $e) {
            return to_route(
                'tasks.index',
                [
                    'message' => 'Task not created'
                ]
            );
        }
    }

    // Update the specified task
    public function update(Request $request, Task $task)
    {
        $validatedData = $request->validate([
            'title' => 'required|max:255',
            'description' => 'nullable',
        ]);

        $task->update($validatedData);

        return to_route('tasks.index');
    }

    // Remove the specified task
    public function destroy(Task $task)
    {
        $task->delete();
        return to_route('tasks.index', [
            'message' => 'Task deleted successfully'
        ]);
    }
}
