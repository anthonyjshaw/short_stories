import express from "express";
import {} from 'dotenv/config';
import mongoose from 'mongoose';
import cors from 'cors';
import storyRoutes from './routes/stories.js';
import commentRoutes from './routes/comments.js';
import path from 'path';
import {MongoMemoryServer} from "mongodb-memory-server-core";
const __dirname = path.resolve();
const app = express();


app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const PORT = process.env.PORT || 5000;
const uri = process.env.DB_CONNECTION; 


const routes = {'stories': storyRoutes, 'stories/:title/comments': commentRoutes};

Object.keys(routes).forEach(e => {
    app.use(`/api/v1/${e}`, routes[e]);
});


console.log(`running at http://localhost:${PORT}`);



app.use(express.static(path.resolve(__dirname, "../client/build")));
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});


const connectToDB = async () =>  {
    let mongo = await MongoMemoryServer.create();
    const mongoURI = await mongo.getUri(); 
    const mongooseOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    mongoose.connect(uri, mongooseOptions)
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error)=> console.error(error.message));
    
}

connectToDB();