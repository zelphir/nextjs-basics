import users from './users.json';

export default function getUsers() {
  // get from my super secret DB with access token

  const accessToken = process.env.DB_ACCESS_TOKEN;
  console.log('accessToken ==>', accessToken);
  return users;
}
