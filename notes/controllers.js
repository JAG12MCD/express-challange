const dbService = require('../db/index');

const getAllNotes = (req, res) => {
	try {
		const notes = dbService.getAllNotes();
		return res.status(200).send(notes);
	} catch (error) {
		return res.status(500).send(error);
	}
};

const saveNote = (req, res) => {
	try {
		const { title, text } = req.body;
		const newNote = dbService.saveNote({ title, text });
		return res.status(200).send(newNote);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

const deleteNote = (req, res) => {
	try {
		const { id } = req.params;
		dbService.deleteNote(id);
		return res.status(200).send();
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
};

module.exports = { getAllNotes, saveNote, deleteNote };
