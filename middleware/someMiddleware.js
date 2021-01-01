const aMiddleware = (req, res, next) => {
	res.locals.thing = true;
	next();
};

modules.exports = { aMiddleware };
