import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Database file path
const dbPath = path.join(__dirname, 'db.json');

// Helper function to read the database
const readDatabase = (): any[] => {
  try {
    const data = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// Helper function to write to the database
const writeDatabase = (data: any[]): void => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf-8');
};

// GET /ping endpoint
app.get('/ping', (req: Request, res: Response) => {
  res.json(true);
});

// POST /submit endpoint
app.post('/submit', (req: Request, res: Response) => {
  const { name, email, phone, github_link, stopwatch_time } = req.body;
  const submissions = readDatabase();
  submissions.push({ name, email, phone, github_link, stopwatch_time });
  writeDatabase(submissions);
  res.status(201).send('Submission saved');
});

// GET /read endpoint
app.get('/read', (req: Request, res: Response) => {
  const index = parseInt(req.query.index as string, 10);
  const submissions = readDatabase();
  if (index >= 0 && index < submissions.length) {
    res.json(submissions[index]);
  } else {
    res.status(404).send('Submission not found');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
