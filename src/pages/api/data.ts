import { createUser, getUsers } from '@/components/controller'
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const { users, error } = await getUsers();
      if (error) throw new Error(String(error));

      return res.status(200).json({ users });
    } catch (error : any) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === 'POST') {
    try {
      const data = req.body;
      const { user, error } = await createUser(data);
      if (error) throw new Error(String(error));
      return res.status(200).json({ user });
    } catch (error : any) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(425).end(`Method ${req.method} is not allowed.`);

  const user = {
    name: "John Doe",
    age: 25,
    email: "johndoe@example.com",
    about: "I'm a software engineer",
  };
  
  const result = await createUser(user);
  
  console.log(result)
}

export default handler;
