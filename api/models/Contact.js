/**
 * Contact.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    email: {
      type: 'string',
      unique: true
    },

    firstName: {
      required: true,
      type: 'string'
    },

    lastName: {
      required: true,
      type: 'string'
    },

    phone: {
      required: true,
      type: 'string',
      unique: true
    }

  }

};