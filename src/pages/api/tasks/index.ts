import { NextApiRequest, NextApiResponse } from "next";
import { con } from "../../../utils/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  switch (method) {
    case "GET":
      return res.status(200).json("Getting tasks");
    case "POST":
      const { title, description } = body;

      const query = "INSERT INTO tasks(title, description) VALUES ($1, $2) RETURNING *";
      const values = [title, description];

      const response = await con.query(query, values);

      return res.status(200).json(response.rows[0]);
    default:
      res.status(400).json("Invalid method");
  }
};
