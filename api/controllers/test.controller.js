import jwt from "jsonwebtoken";

export const shouldBeLoggedIn = async (req,res) => {
  const token = req.userId;

  console.log(token)

  // console.log(token);

 
};

export const shouldBeAdmin = async () => {};
