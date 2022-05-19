import express from 'express';
import bodyParser from 'body-parser';

const articleInfo = {
    'learn-react': {
        upvotes: 0,
        comments: [],
    },
    'learn-node' : {
        upvotes: 0,
        comments: [],
    },
    'learn-mongo' : {
        upvotes: 0,
        comments: [],
    }
}

const app = express();

app.use(bodyParser.json());

app.get('/hello', (req, res) => res.send('Hello! World'));
app.get('/hello/:name', (req, res) => res.send(`Hello! ${req.params.name}`));
app.post('/hello', (req, res) => res.send(`Hello! ${req.body.name}!`));
app.post('/api/articles/:name/upvote', (req, res) => {
    const articleName = req.params.name;

    articleInfo[articleName].upvotes += 1;
    res.status(200).send(`${articleName} now has ${articleInfo[articleName].upvotes} upvotes.`)
})
app.post('api/articles/:name/add-comment', (req, res) => {
    const {username, text } = req.body;
    const articleName = req.params.name;

    articleInfo[articleName].comments.push({username, text});

    res.status(200).send(articleInfo[articleName]);
})
app.listen(8000, ()=> console.log('Backend Running on Port 8000'));