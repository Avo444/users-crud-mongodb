const { MongoClient } = require("mongodb");

class DatabaseService {
    async connect() {
        const client = await MongoClient.connect(process.env.MONGODB_URL);
        const db = await client.db();
        return db;
    }
}
module.exports = DatabaseService;
