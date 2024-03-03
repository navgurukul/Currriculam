'use strict';

/**
 * pathway service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pathway.pathway');
