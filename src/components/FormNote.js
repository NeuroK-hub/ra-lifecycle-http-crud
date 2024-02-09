import { useState } from 'react';
// import Icon from './Icon';
import './FormNote.css';

const FormNote = ({ onSubmit }) => {

	const [form, setForm] = useState({
		content: '',
	});

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setForm(prevForm => ({...prevForm, [name]: value}));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();

		if (form.content !== '') {
			const newNote = {
				content: form.content
			};
			
			onSubmit(newNote);
			setForm({
				content: ''
			});
		}
	};

	return (
		<form className='form-note' onSubmit={handleSubmit}>
			<label className='label-content' htmlFor='content'>Add a note</label>
			<textarea className='textarea-content' name='content' onChange={handleChange} value={form.content} required/>
			<button className="send-button" type="submit" onClick={handleSubmit}>
				Send
				{/* <Icon name=send width="50" height="50" /> */}
			</button>
		</form>
	);
}

export default FormNote;
