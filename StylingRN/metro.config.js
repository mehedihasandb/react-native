const { getDefaultConfig } = require("expo/metro-config");
const loginProxy = require("./dev/login-proxy");

const config = getDefaultConfig(__dirname);
const enhanceMiddleware = config.server.enhanceMiddleware;
config.server.enhanceMiddleware = (middleware, server) => {
  const next = enhanceMiddleware ? enhanceMiddleware(middleware, server) : middleware;
  return (req, res) => loginProxy(req, res, () => next(req, res));
};

module.exports = config;
