const express = require('express');
const path = require('node:path');
const app = express();

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// midelware for 404 status
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
})

const PORT = 3000;
app.listen(PORT, () => console.log(`server running at https://localhost:${PORT}`));
