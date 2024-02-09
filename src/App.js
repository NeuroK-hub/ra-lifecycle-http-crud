import Notes from './components/Notes';
import './App.css';

const notesProps = {
	header: 'Notes',
}

function App() {
	return (
		<div className = "App">
			<Notes {...notesProps}>
			</Notes>
		</div>
	);
}

export default App;
