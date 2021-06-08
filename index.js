const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express(); 
const AWS = require('aws-sdk');

const USERS_TABLE = process.env.USERS_TABLE;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

app.use(bodyParser.json({strict: false}));


 app.get('/', (request, response) => {
    response.send('Hello World!') // this is where the processing logic comes here, the model wil lbe here and have input parameters and make a call to db and then take a response for 
    //db and then the model will process it, then send a respons to the front end 
    
}); 


//Get User Endpoint -- Søren will be calling these endpoints to 
app.get('/users/:userId', function (req, res){
    const params = {
        TableName: USERS_TABLE,
        Key: {
            userId: require.params.userId
        },
    }

    dynamoDb.get(params, (error, result) => {
        if (error) {
            console.log(error);
            res.status(400).json({ error: 'Could not get user'});
        }
        if (result.Item) {
            const {userID, name} = result.Item;
            res.json({ userID, name});
        }
    });
})

//Create User Endpoint
app.post('/users', function (req, res) {
    const {userId, name} = req.body;
    if (typeof userId !== 'string') {
        res.status(400).json({ error: '"userId" must be a string'});
    } else if (typeof name !== 'string') {
        res.status(400).json({ error: '"name" must be a string'});
    }

    const params = {
        TableName: USERS_TABLE,
        Item: {
            userId: userId,
            name: name,
        },
    };

    dynamoDb.put(params, (error) => {
        if (error) {
            console.log(error);
            res.status(400).json({ error: 'Could not create user'});
        }
        res.json({ userId, name });
    });
})

module.exports.handler = serverless(app);