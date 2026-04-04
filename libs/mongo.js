const { MongoClient }   = require('mongodb')

const   db_protocol     = `mongodb+srv://`,
            db_path         = ``,
            db_host         = `cluster0.xbletfk.mongodb.net`,  
            db_port         = ``,    
            db_url          = db_protocol+db_host+db_port+db_path
let authuser = 
{
                    username: `admin_db`, 
                    password: `n8YNkfHuok4O5Q96`
}
let options = 
{            
                    auth: authuser ,
           authMechanism: `SCRAM-SHA-1`
}

async function runMongo( )
{
  const dbconn = await MongoClient.connect(db_url, options);
  const db = dbconn.db('testDB')
 
  console.log('Connected to MongoDB')

  const collection = db.collection('testdoc')

  const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }])
  console.log( insertResult )

  const findResult = await collection.find({})
  for await (const doc of findResult) {
    console.log(doc);
  }
  await dbconn.close()
}

module.exports = 
{
                    runMongoTest : runMongo
};


