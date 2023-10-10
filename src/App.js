import { useState } from 'react';
import './App.css';
import Button from './common components/Button';
import AddTask from './components/AddTask';
import Todo from './components/Todo';

function App() {
	const [showAddTask, setShowAddTask] = useState(false);
	const [addTask, setAddTask] = useState([]);

	function handleShowAddTask() {
		setShowAddTask((show) => !show);
	}

	function handleAddItems(task) {
		setAddTask((addTask) => [...addTask, task]);
	}

	function handleDeleteTask(id) {
		setAddTask((addTask) => addTask.filter((task) => task.id !== id));
	}

	function handleClearTasks() {
		const confirmed = window.confirm('Do you want to clear all tasks');

		if (confirmed) setAddTask([]);
		setShowAddTask((show) => !show);
	}

	function handleToggleTask(id) {
		setAddTask((addTask) =>
			addTask.map((task) =>
				task.id === id ? { ...task, done: !task.done } : task
			)
		);
	}

	return (
		<div className='app'>
			<div className='aside'>
				<h2>My To Do list</h2>

				<Button onClick={handleShowAddTask}>
					{showAddTask ? 'close' : 'Add a task'}
				</Button>

				{showAddTask && (
					<>
						<AddTask
							handleAddItems={handleAddItems}
							onAddItems={handleAddItems}
						/>

						<Button onClick={handleClearTasks}>Clear List</Button>
					</>
				)}
			</div>

			<Todo
				addTask={addTask}
				setAddTask={setAddTask}
				onDeleteTask={handleDeleteTask}
				onToggleTask={handleToggleTask}
			/>
		</div>
	);
}

export default App;
