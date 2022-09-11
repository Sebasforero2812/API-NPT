import { NextApiRequest, NextApiResponse } from "next";
import { con } from "../../../utils/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query, body } = req;

  switch (method) {
    case "GET":
      try {
        const reg = "SELECT * FROM tasks WHERE id = $1";
        const values = [query.id];
        const response = await con.query(reg, values);

        if (response.rows.lenght === 0)
          return res.status(404).json({ message: "Task not found" });

        return res.json(response.rows[0]);
      } catch (error: any) {
        return res.status(500).json({ message: error.message });
      }
    case "PUT":
        try {
            const {title, description} = body;
            const reg = "UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *";
            const values = [title, description, query.id];
            const response = await con.query(reg, values);
    
            if (response.rows.lenght === 0)
              return res.status(404).json({ message: "Task not found" });
    
            return res.json(response.rows[0]);
          } catch (error: any) {
            return res.status(500).json({ message: error.message });
          }
    case "DELETE":
      try {
        const reg = "DELETE FROM tasks WHERE id = $1 RETURNING *";
        const values = [query.id];
        const response = await con.query(reg, values);

        if (response.rowCount === 0)
          return res.status(404).json({ message: "Task not found" });

        return res.json(response.rows[0]);
      } catch (error: any) {
        return res.status(500).json({ message: error.message });
      }
    default:
      res.status(400).json("Method not allowed");
  }
};
