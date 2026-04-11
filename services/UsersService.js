const { ObjectId } = require("mongodb");
const DatabaseService = require("./DatabaseService");

class UsersService extends DatabaseService {
    async getAllUsers(query = {}) {
        const db = await this.connect();
        let cursor =  db.collection("users").find();
        if (query.sort === "asc") {
            cursor = cursor.sort({ age: 1 });
        } else if (query.sort === "desc") {
            cursor = cursor.sort({ age: -1 });
        }

        const users = await cursor.toArray();
        return users;
    }

    async getUser(id) {
        const db = await this.connect();
        const user = await db
            .collection("users")
            .findOne({ _id: new ObjectId(id) });
        return user;
    }

    async deleteUser(id) {
        const db = await this.connect();
        const user = await db
            .collection("users")
            .deleteOne({ _id: new ObjectId(id) });
        return user;
    }

    async patchUser(id, body) {
        const db = await this.connect();
        const update = await db
            .collection("users")
            .updateOne({ _id: new ObjectId(id) }, { $set: { ...body } });
        return update;
    }
}

module.exports = UsersService;
