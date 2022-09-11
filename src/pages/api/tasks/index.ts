import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return res.status(200).json("Getting tasks");
    case "POST":
      return res.status(200).json("Posting tasks");
    default:
      res.status(400).json("Invalid method");
  }
};
