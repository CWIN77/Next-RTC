import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    console.log(req.body);
  } else if (req.method === 'GET') {
    res.status(200).json({ data: 'Hello Api' });
  }
}
