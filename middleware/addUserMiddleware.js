const { sendResponse } = require("../helpers");
const { addUserSchema } = require("../schemas");

const addUserMiddleware = async (req, res, next) => {
    try {
        const body = await addUserSchema.validateAsync(req.body);
        res.locals.body = body;
        next();
    } catch (err) {
        const error = { error: err.message };
        sendResponse(res, error, 400);
    }
};

module.exports = addUserMiddleware;
