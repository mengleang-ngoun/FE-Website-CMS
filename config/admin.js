module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '63db1945e309ec106596b2520dc6cb1f'),
  },
});
