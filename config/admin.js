module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '48556701af0686667faabccb303619ae'),
  },
});
