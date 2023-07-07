const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const getAllNotes = () => {
	const data = fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8');
	return JSON.parse(data);
};

const writeDb = (data) => {
	fs.writeFileSync(
		path.join(__dirname, 'db.json'),
		JSON.stringify(data),
		'utf8'
	);
};

const saveNote = (note) => {
	data = getAllNotes();
	note.id = uuidv4();
	data.push(note);
	writeDb(data);
	return note;
};

const deleteNote = (id) => {
	data = getAllNotes();
	data = data.filter(item => item.id !== id)
	writeDb(data);
};

module.exports = { getAllNotes, saveNote, deleteNote };
