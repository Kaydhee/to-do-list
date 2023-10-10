import Button from '../common components/Button';

const Todo = ({ addTask, onDeleteTask, onToggleTask }) => {
	console.log(addTask);
	return (
		<ul>
			{addTask.map((task) => (
				<li key={task.id}>
					<Button onClick={() => onToggleTask(task.id)}>Done</Button>

					<span style={task.done ? { textDecoration: 'line-through' } : {}}>
						{task.task}
					</span>
					{/* ask poseidon or dabo to explain this line */}
					<Button onClick={() => onDeleteTask(task.id)}>close</Button>
				</li>
			))}
		</ul>
	);
};

export default Todo;
