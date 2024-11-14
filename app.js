const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/grade', (req, res) => {
    const { text, citations, tone } = req.body;
    let grade = 'D';

    if (text.length >= 2000 && citations >= 3 && tone === 'である') {
        grade = 'A';
    } else if (text.length >= 1200 && citations >= 3) {
        grade = 'B';
    } else if (text.length < 1200 && citations >= 3) {
        grade = 'C';
    }

    res.json({ grade });
});

app.listen(5000, () => console.log('Server started on port 5000'));
