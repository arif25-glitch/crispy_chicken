const {MongoClient, ServerApiVersion} = require('mongodb');

const CreateDatabaseConnection = async() => {
    const password = "jdXX9D6GVFqvWflp"

    const uri = `mongodb+srv://decelupcorp:${password}@cluster0.y6nkag1.mongodb.net/?retryWrites=true&w=majority`

    const client = new MongoClient(uri, 
        { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    
    client.connect()
    .then((res) => {
        console.log('database connected');
    })
    .catch((err) => {
        console.log('database error connection ' + err);
    });

    return client;
}

module.exports = {
    CreateDatabaseConnection
}