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

async function runMongo()
{
    const insertResult = await mongofunc.insert( 'testdb','test', [{ a: 1 }, { a: 2 }, { a: 3 }] )
    console.log( insertResult )

    const updresult  = await mongofunc.update( 'testdb','test', { a:3 }, { $set: { a: 4 , name : "Golf"} } )
    const remres  = await mongofunc.remove('testdb','test', { a:2 } )
    const result  = await mongofunc.find('testdb','test',{})

    for (const doc of result) {
        console.log(doc);
    }
}


module.exports = 
{
                    runMongoTest : runMongo
};


