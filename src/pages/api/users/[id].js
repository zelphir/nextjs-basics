import users from '../../../data/users.json';

export default function handler(req, res) {
  const {
    query: { id },
  } = req;

  if (!id) return res.status(500).send('Internal Server Error');
  if (id === '666') return res.redirect('/api/users');

  const userToSend = users.find((user) => user.id === +id);

  console.log(userToSend, typeof id, typeof users[0].id);
  if (!userToSend) return res.status(404).send('User not found');

  return res.status(200).json(userToSend);
}
