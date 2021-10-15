import express from "express";
import {} from 'dotenv/config';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

const PORT = process.env.PORT;