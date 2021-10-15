import express from "express";
import {} from 'dotenv/config';
import mongoose from 'mongoose';
import cors from 'cors';
import storyRoutes from './routes/stories.js';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const PORT = process.env.PORT || 5000;
const uri = process.env.DB_CONNECTION; 

app.use(cors());

const routes = {'stories': storyRoutes};

app.get('/', (req, res) => {
    res.send("Hello");
})

Object.keys(routes).forEach(e => {
    app.use(`/api/v1/${e}`, routes[e]);
});

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error)=> console.error(error.message));
