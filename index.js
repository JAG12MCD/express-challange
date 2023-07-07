const express = require('express');
const path = require('path');
const noteRoutes = require('./notes/routes')
const port = process.env.PORT || 80;

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/notes', (req, res) => {
	return res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

app.use("/api/notes",noteRoutes)

app.listen(port, (error) => {
	if (error) {
		console.log(error);
	} else {
		console.log(`Server is running on port ${port}`);
	}
});
