module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cb255798f6f6508243f34b648918dde3'),
  },
});
