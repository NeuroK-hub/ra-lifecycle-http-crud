// import Icon from "./Icon";

const Note = ({ note, onDelete }) => {

	const handleDelete = (id) => {
		onDelete(id);
	};

	return (
		<li className='block-item-note'>
			<p className="note-content">{note.content}</p>
			<button className='delete-button' onClick={()=>{handleDelete(note.id)}}>
				delete
				{/* <Icon name=delete width="50" height="50" /> */}
			</button>
		</li>
	);
}

export default Note;