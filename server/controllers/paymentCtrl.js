const Payments = require('../models/paymentModel');
const UserModel = require('../models/userModel');
const Products = require('../models/productModel');

const paymentCtrl = {
  getPayments: async (req, res) => {
    /*
        #swagger.tags = ['Users']
        #swagger.security = [{
            "Authorization": []
        }]
    */
    try {
      const payments = await Payments.find();
      res.json(payments);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createPayment: async (req, res) => {
    /*  #swagger.tags = ['Users']
        #swagger.security = [{
        "Authorization": []
        }]
    	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/PaymentModel" }
    } */
    try {
      const user = await UserModel.findById(req.user.id).select('name email');
      if (!user) return res.status(400).json({ msg: 'User does not exist.' });

      const { cart, paymentID, address } = req.body;

      const { _id, name, email } = user;

      const newPayment = new Payments({
        user_id: _id,
        name,
        email,
        cart,
        paymentID,
        address,
      });

      // console.log(newPayment)

      cart.filter((item) => {
        return sold(item._id, item.quantity, item.sold);
      });

      await newPayment.save();
      res.json(newPayment);
      // res.json({ msg: 'Payment Succes!' });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

const sold = async (id, quantity, oldSold) => {
  await Products.findOneAndUpdate(
    { _id: id },
    {
      sold: quantity + oldSold,
    }
  );
};

module.exports = paymentCtrl;
