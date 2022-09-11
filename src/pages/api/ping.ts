// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {con} from '../../utils/database'

type Data = {
  message: string,
  time: string;
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const response = await con.query('SELECT NOW()')
  return res.json({message: 'pong', time: response.rows[0].now});
}
