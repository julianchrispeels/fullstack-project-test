import './App.css';

import { useEffect, useState } from "react";

function App() {

	const url = 'http://localhost:5000';

	const [notesArray, setNotesArray] = useState([]);
	const [selectedNote, setSelectedNote] = useState('');

	const handleSelectNote = (e) => {
		setSelectedNote(e.target.value);
	}

	useEffect(() => {
		fetch(`${url}/api/v1/notes`)
			.then(response => response.json())
			.then(data => setNotesArray(data))
			.catch(error => console.error("Error:", error));
	}, []);

	useEffect(() => {
		if (selectedNote === null) {
			fetch(`${url}/api/v1/notes`)
				.then(response => response.json())
				.then(data => setNotesArray(data))
				.catch(error => console.error("Error:", error));
		} else {
			fetch(`${url}/api/v1/notes/${selectedNote}`)
				.then(response => response.json())
				.then(data => setNotesArray(data))
				.catch(error => console.error("Error:", error));
		}
	}, [selectedNote]);

	return (
		<div className='container'>
			<h1>Notas</h1>
			<p>Cantidad de notas: {notesArray.length}</p>
			<label className='select-label'>
				Seleccionar nota por ID:
				<select value={selectedNote} onChange={handleSelectNote} className='select'>
					<option value={''}>Todos</option>
					{notesArray.map((note, index) => (
						<option key={index} value={note.id}>{note.title}</option>
					))}
				</select>
			</label>
			<div className='notes-container'>
				{notesArray.map((note, index) => (
					<div key={index} className='note'>
						<h2>{note.title}</h2>
						<p>{note.content}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;