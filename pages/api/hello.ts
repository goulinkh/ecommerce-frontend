import { NextApiHandler } from 'next';

const Hello: NextApiHandler = (req, res) => {
  res.status(200).json({ text: 'Hello' });
};

export default Hello;
