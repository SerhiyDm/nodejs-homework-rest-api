const {Contact} = require('../../models');
const {ErrorService} = require('../../utils');

const updateStatusContact = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
      throw ErrorService(404, "Not found");
    }
    res.json(result);
  };

  module.exports = updateStatusContact;