import { useState, useEffect } from 'react';
import Header from "./Header";
import FormNote from "./FormNote";
import Note from "./Note";
import './Notes.css';

const requestURL = 'http://localhost:7070/notes';
// const httpsURL = 'https://crud-backend-74v1.onrender.com';

const Notes = ({ header }) => {

	const [notes, setNotes] = useState([]);

	const onRefresh = () => {
		fetch(requestURL, { method: 'GET' })
      .then(response => response.json())
      .then(response => setNotes(response))
      .catch((e) => console.log('Error: ' + e.message));
	}

	const onSubmit = (note) => {
		fetch(requestURL, {
			method: 'POST',
			headers: {'Content-Type': 'application/json;charset=utf-8',},
			body: JSON.stringify(note),
		})
      .then(response => response.status === 204 ? onRefresh() : console.log(`Status cod: ${response.status}. Status need to eaqual 204`))
      .catch((e) => console.log('Error: ' + e.message));
		onRefresh();
	};

	const onDelete = (id) => {
		fetch(requestURL + `/${id}`, { method: 'DELETE' })
      .then(response => response.status === 204 ? onRefresh() : console.log(`Status cod: ${response.status}. Status need to eaqual 204`))
      .catch((e) => console.log('Error: ' + e.message));
	}

	useEffect(() => {
		onRefresh();
	}, []);

	return (
		<div className="notes-wrapper">
			<Header header={header} onRefresh={onRefresh} />
			{notes.length ? <ul className="notes">
				{notes.map((item) => (<Note key={item.id} note={item} onDelete={onDelete} />))}
			</ul> : null}
			<FormNote onSubmit={onSubmit} />
		</div>
	)
}

export default Notes;