module.exports = [
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "frame-src": ['https://www.youtube.com/'],
          "connect-src": ["'self'", "https:"],
          "img-src": [ "'self'", "data:", "blob:", "https://s3strapi-project.s3.ap-south-1.amazonaws.com/",],
          "media-src": ["'self'", "data:", "blob:", "https://s3strapi-project.s3.ap-south-1.amazonaws.com/"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  // 'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];