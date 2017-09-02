/**
 * ContactController
 *
 * @description :: Server-side logic for managing contacts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  'total-count': function (request, response) {

    Contact.count().exec(function (error, count) {

      if (error) {

        return response.error(err);

      } else {

        return response.json(count);

      }

    });

  }

};