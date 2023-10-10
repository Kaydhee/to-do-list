import React, { useState } from 'react';
import Button from '../common components/Button';

const AddTask = ({ onAddItems }) => {
	const [task, setTask] = useState('');

	function handleSubmit(e) {
		e.preventDefault();

		if (!task) return;

		const newTask = {
			task,
			done: false,
			id: Date.now(),
		};

		console.log(newTask);

		onAddItems(newTask);
		setTask('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>Add ToDo</label>
			<input
				type='text'
				placeholder='Add todo here'
				value={task}
				onChange={(e) => setTask(e.target.value)}
			/>
			<Button>Add</Button>
		</form>
	);
};

export default AddTask;
