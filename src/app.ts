import express from 'express';
import {questionsRouter} from '@routes/index';

const app = express();

app.use(express.json());

// Routes
app.use('/api/questions', questionsRouter);

// Global error handler (should be after routes)
// app.use(errorHandler);

export default app;