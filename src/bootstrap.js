// src/bootstrap.js
const skipMigrations = require('../skip-migrations');

module.exports = async ({ strapi }) => {
  // Run the skip migrations script first
  await skipMigrations({ strapi });

  // Then continue with normal bootstrap
  if (typeof strapi.config.bootstrap === 'function') {
    await strapi.config.bootstrap({ strapi });
  }
};
