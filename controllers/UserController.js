const User = require("../models/UserModel");
const jwt = require('jsonwebtoken');


  // signup
  const bcrypt = require('bcrypt');
const saltRounds = 10; async function signup(req, res) {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ error: 'This username already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const newUser = new User({
    username,
    password: hashedPassword,
  });

  try {
    const result = await newUser.save();
    return res.status(201).json({
      result,
      message: 'User Added Successfully',
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
}



    
  // generate token
  function generateToken(user) {
    const secret = "nabataty-secret";
    const userType = user.username === "Admin_Nabataty" ? "admin" : "user";
  
    const token = jwt.sign(
      {
        username: user.username,
        userType: userType,
      },
      secret
    );
    return { token, userType };
  }

  //verify token
  function verifyToken(req, res) {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  }
  
  // Login
  async function signin(req, res) {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const { token, userType } = generateToken(user);
  
      return res.status(200).json({
        message: `Login ${userType === 'admin' ? 'admin' : 'user'} successfully`,
        token: token,
      });
  
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  

  //Logout
  async function logout(req, res) {
    const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      const decoded = await jwt.verify(token, 'nabataty-secret');
      if (decoded) {
        return res.status(200).json({
          message: 'Logout successful',
        });
      } else {
        return res.status(401).json({ error: 'Unauthorized' });
      }
  };
    

//forget password

  module.exports = {
    signup,
    signin,
    logout,
  };

// create gift
// add Gift to cart
// get UserCart

async function getUserCart(req, res) {
  const user = await User.findById("656366bdbce6cde322f75d88");
}

async function AddProductToCart(req, res) {
  const { productID } = req.params;
  //req.userID
  const user = await User.findById("656366bdbce6cde322f75d88");

  user.cart = [...user.cart, ...productID];
  await user.save();

  return res.status(200).json({
    Message: "product added to a user cart",
  });
}

async function createGift(req, res) {
  const results = [];
  try {
    const products = req.body.products;
    for (const productData of products) {
      const { type, name, description, price } = productData;
      const newProduct = new Product({
        type,
        name,
        description,
        price,
      });

      const result = await newProduct.save();
      results.push(result);
    }
    return res.status(201).json({
      results,
      message: "Gift Created Successfully",
    });
  } catch (error) {
    console.error("Error creating gift:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  AddProductToCart,
  createGift,
};
