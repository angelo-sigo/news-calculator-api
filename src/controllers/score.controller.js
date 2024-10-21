import { calculate_news_score } from '../services/calculate_score.service.js';

export const calculate_score = (req, res) => {
    const data = req.body;
    const scores = calculate_news_score(data);
    res.send({ scores });
};