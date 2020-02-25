const NODE_ENV = process.env.NODE_ENV;
let CONFIG = {};

if (NODE_ENV === "development") {
  CONFIG = {
    DOMAIN_OWNER: "My Website",
    protocol: "http",
    DOMAIN: "http://localhost:3004",
    API_DOMAIN: "http://localhost:3003",
    API_URI: "http://localhost:3003/api/v1"
  };
} else if (NODE_ENV === "staging") {
  CONFIG = {
    DOMAIN_OWNER: "My Website",
    protocol: "https",
    DOMAIN: "https://yourdomain.com",
    API_DOMAIN: "https://yourdomain.com:3003",
    API_URI: "https://yourdomain.com:3003/api/v1"
  };
} else {
  CONFIG = {
    DOMAIN_OWNER: "My Website",
    protocol: "https",
    DOMAIN: "https://yourdomain.com",
    API_DOMAIN: "https://yourdomain.com:3003",
    API_URI: "https://yourdomain.com:3003/api/v1"
  };
}

module.exports = CONFIG;
