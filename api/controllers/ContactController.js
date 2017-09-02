/**
 * ContactController
 *
 * @description :: Server-side logic for managing contacts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  'count': function (request, response) {

    Contact.count().exec(function (error, count) {

      if (error) {

        return response.serverError(error);

      } else {

        return response.json(count);

      }

    });

  },

  'search': function (request, response) {

    Contact.find({
      or: [
        { email: { contains: request.query.searchKey } },
        { firstName: { contains: request.query.searchKey } },
        { lastName: { contains: request.query.searchKey } },
        { phone: { contains: request.query.searchKey } }
      ]
    }).exec(function (error, contacts) {

      if (error) {

        return response.serverError(error);

      } else {

        // Remove duplicates. Can be replaced by a native query of a more advanced database server.
        var contactsIndices = [];
        var result = [];

        contacts.forEach(function (contact) {

          if (contactsIndices.indexOf(contact.id) === -1) {

            contactsIndices.push(contact.id);

            result.push(contact);

          }

        }, this);

        // Respond.
        return response.json(result);

      }

    });

  }

};