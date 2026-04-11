const { sendResponse } = require("../helpers");

class UsersController {
    async home(req, res) {
        try {
            const users = await req.app.locals.services.users.getAllUsers();
            res.render("index", { title: "Users", users });
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 404);
        }
    }
    async view(req, res) {
        try {
            const { id } = req.params;
            const user = await req.app.locals.services.users.getUser(id);
            res.render("view", { user });
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 404);
        }
    }

    async getUsers(req, res) {
        try {
            const users = await req.app.locals.services.users.getAllUsers(
                req.query,
            );
            sendResponse(res, users);
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 500);
        }
    }

    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            const isDeleted =
                await req.app.locals.services.users.deleteUser(id);
            sendResponse(res, isDeleted, 204);
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 500);
        }
    }

    async patchUser(req, res) {
        try {
            const { id } = req.params;
            const isUpdated = await req.app.locals.services.users.patchUser(
                id,
                req.body,
            );
            sendResponse(res, isUpdated, 201);
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 500);
        }
    }
}

module.exports = UsersController;
