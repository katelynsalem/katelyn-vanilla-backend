import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/posts', (req, res) => {
  const filePath = path.join(path.resolve(), 'posts', 'personal.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Failed to read personal.json:', err);
      return res.status(500).json({ error: 'Could not load posts' });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
