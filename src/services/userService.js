import httpService from './httpService';

const apiEndpoint = 'http://localhost:3900/api' + '/users';

export function register(user) {
  return httpService.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
