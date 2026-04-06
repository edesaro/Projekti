import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 3000;
const JWT_SECRET = 'supersecretkey';

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, username: 'testi', password: 'testi123' },
  { id: 2, username: 'dada', password: 'dada' }
];

let entries = []; // Shared in-memory DB

// POST /users/login
app.post('/users/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    const token = jwt.sign({ userId: user.id, username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user: { id: user.id, username: user.username } });
  } else {
    res.status(401).json({ error: 'Virheellinen käyttäjätunnus tai salasana' });
  }
});

// POST /users (register)
app.post('/users', (req, res) => {
  const { username, email, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ error: 'Käyttäjä on jo olemassa' });
  }
  const newUser = { id: users.length + 1, username, email, password };
  users.push(newUser);
  res.status(201).json({ message: 'Käyttäjä luotu', user: newUser });
});

// POST /entries (save new entry)
app.post('/entries', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token puuttuu' });
  }
  
  try {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, JWT_SECRET);
    
    const newEntry = {
      id: Date.now(),
      entry_date: req.body.entry_date,
      mood: req.body.mood,
      weight: req.body.weight,
      sleep_hours: req.body.sleep_hours,
      notes: req.body.notes
    };
    
    entries.push(newEntry);
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(401).json({ error: 'Virheellinen token' });
  }
});

// GET /entries (load entries)
app.get('/entries', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token puuttuu' });
  }
  
  try {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, JWT_SECRET);
    res.json(entries);
  } catch (err) {
    res.status(401).json({ error: 'Virheellinen token' });
  }
});

app.listen(PORT, () => {
  console.log(`Mock backend käynnissä http://localhost:${PORT}`);
  console.log('Testi: POST /users/login {username:"testi", password:"testi123"}');
});

