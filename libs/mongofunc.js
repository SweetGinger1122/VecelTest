const { MongoClient }   = require('mongodb')
const   db_protocol     = `mongodb+srv://`,
        db_path         = ``,
        db_host         = `cluster0.xbletfk.mongodb.net`,  
        db_port         = ``,    
        db_url          = db_protocol+db_host+db_port+db_path
const   authuser        = {
                            username: `admin_db`,
                            password: `n8YNkfHuok4O5Q96`
                        }
const   options         = {            
                                auth: authuser ,
                       authMechanism: `SCRAM-SHA-1`
                        }
// -------------------------------------------------------------------
async function connect()                    
{ 
    return await MongoClient.connect(db_url, options) 
}
async function disconnect(dbconn)           
{ 
    await dbconn.close() 
}
function getCollection(dbconn, dbname, colname)  
{
    const db = dbconn.db(dbname)
    return db.collection(colname)
}
// -------------------------------------------------------------------
async function remove(dbname, colname, filter)
{
    let result              = []
    const dbconn            = await connect()
    const collection        = getCollection(dbconn, dbname, colname)
        result              = await collection.deleteMany(filter)
    await disconnect(dbconn)
    return result
}

async function find(dbname, colname, filter)
{
    let result              = []
    const dbconn            = await connect()
    const collection        = getCollection(dbconn, dbname, colname)
        result              = await collection.find(filter).toArray()
    await disconnect(dbconn)
    return result
}
async function insert(dbname, colname, queryobj)
{
    let result              = []
    const dbconn            = await connect()
    const collection        = getCollection(dbconn, dbname, colname)  
    if(Array.isArray(queryobj)){
        result              = await collection.insertMany(queryobj)
    }else{
        result              = await collection.insert(queryobj)
    }
    await disconnect(dbconn)
    return result
}
async function update(dbname, colname, filter, updateobj)
{
    let result              = []
    const dbconn            = await connect()
    const collection        = getCollection(dbconn, dbname, colname)
        result              = await collection.updateMany(filter, updateobj)
    await disconnect(dbconn)
    return result
}

module.exports = { remove,find,insert,update }
