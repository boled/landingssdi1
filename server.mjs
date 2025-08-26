import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, 'news.json');

const app = express();
app.use(express.json());

// Simple CORS support
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

async function loadNews() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      return [];
    }
    throw err;
  }
}

async function saveNews(news) {
  await fs.writeFile(DATA_FILE, JSON.stringify(news, null, 2));
}

app.get('/api/news', async (req, res) => {
  const news = await loadNews();
  res.json(news);
});

app.post('/api/news', async (req, res) => {
  const news = await loadNews();
  const item = { id: Date.now(), ...req.body };
  news.push(item);
  await saveNews(news);
  res.status(201).json(item);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
