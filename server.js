require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const LEADSBOX_API_URL = 'https://leadsbox.biz/?query=';
const LEADSBOX_API_KEY = process.env.LEADSBOX_API_KEY;

app.use(express.static('public'));
app.use(express.json());

app.get('/api/business-ideas', async (req, res) => {
    const query = req.query.query;
    if (!query) return res.status(400).json({ error: 'Query is required' });

    try {
        const fetch = (await import('node-fetch')).default;
        const response = await fetch(`${LEADSBOX_API_URL}${query}`, {
            headers: { 'Authorization': `Bearer ${LEADSBOX_API_KEY}` }
        });

        if (!response.ok) throw new Error('Failed to fetch data');

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching business data' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
