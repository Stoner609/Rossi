const bcrypt = require("bcryptjs");
const User = require("../../models/user");

module.exports = {
  createUser: async args => {
    try {
      const existingUser = await User.findOne({ email: args.userInput.email });
      if (existingUser) {
        throw new Error("User exists already");
      }
      const hashPassword = await bcrypt.hash(args.userInput.password, 12);

      const user = new User({
        email: args.userInput.email,
        password: hashPassword
      });

      const result = await user.save();

      console.log(result);
      return { ...result._doc, password: null, _id: result.id };
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
