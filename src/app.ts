// const express = require("express");
import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

//parsers
app.use(express.json());
app.use(cors());
var a = 10;

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello biplob' });
});

export { app };
