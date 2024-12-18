// dependencies
let crud = require("../models/crud");

// To create an user
let handelCreateUser = async (req, res) => {
  let body = await req.body;
  let user = await crud.create(body);
  let len = crud.length;
  console.log(len);

  return res.status(201).json(user);
};

// To get all user
let handelGetUser = async (req, res) => {
  let userAll = await crud.find({});

  return res.json(userAll);
};

// To get user By id
let handelGetUserById = async (req, res) => {
  let Id = await req.params.id;
  let user = await crud.findById(Id);

  return res.json(user);
};

// To update user By id
let handelUpdateUserById = async (req, res) => {
  let body = await req.body;
  let Id = await req.params.id;

  await crud.findByIdAndUpdate(Id, body);
  let getUser = await crud.findById(Id);

  res.json(getUser);
};

// To delete user By id
let handelDeleteUserById = async (req, res) => {
  let Id = await req.params.id;

  await crud.findByIdAndDelete(Id);

  res.json({ status: "success" });
};

// export
module.exports = {
  handelCreateUser,
  handelGetUser,
  handelGetUserById,
  handelUpdateUserById,
  handelDeleteUserById,
};
