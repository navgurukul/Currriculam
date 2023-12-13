'use strict';

/**
 * offer-letter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::offer-letter.offer-letter');
