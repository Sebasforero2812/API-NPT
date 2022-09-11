import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return res.json("Getting a task");
    case "PUT":
      return res.json("Posting a task");
    case "DELETE":
      return res.json("Deleting a task");
    default:
      res.status(400).json("Method not allowed");
  }
};
