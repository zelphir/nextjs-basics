import getUsers from '../../data/getUsers';

export default function handler(req, res) {
  res.status(200).json(getUsers());
}
