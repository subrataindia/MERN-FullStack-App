import express from 'express';
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb';
const url= 'mongodb://localhost:27017';
const databaseName='sampleapp'
const client= new MongoClient(url);

// const articleInfo = {
//     'learn-react': {
//         upvotes: 0,
//         comments: [],
//     },
//     'learn-node' : {
//         upvotes: 0,
//         comments: [],
//     },
//     'learn-mongo' : {
//         upvotes: 0,
//         comments: [],
//     }
// }

const app = express();

app.use(bodyParser.json());

app.get('/api/articles/:name', async (req, res) =>{
    try{
        const articleName = req.params.name;
        await client.connect();
        const database = client.db(databaseName);
        const articles = database.collection('articles');
        const articlesInfo = await articles.find({name:articleName}).toArray();
        console.log(articlesInfo);
        res.status(200).json(articlesInfo);
        client.close();
    }catch(error){
        res.status(500).json({message: 'Error connecting DB', error})
    }
})
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