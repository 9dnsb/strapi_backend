module.exports = ({ env }) => ({
  apiToken: {
    salt: env("API_TOKEN_SALT", "d9b0df66ff97a666027e665707b4e3e7"),
  },
  auth: {
    secret: env("ADMIN_JWT_SECRET", "48556701af0686667faabccb303619ae"),
  },
});
