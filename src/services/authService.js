import jwtDecode from 'jwt-decode';
import httpService from './httpService';

httpService.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await httpService.post(
    'http://localhost:3900/api/auth',
    {
      email,
      password,
    }
  );
  localStorage.setItem('token', jwt);
}
export function loginWithJwt(jwt) {
  localStorage.setItem('token', jwt);
}
export function logout() {
  localStorage.removeItem('token');
}
export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem('token');
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}
export function getJwt() {
  return localStorage.getItem('token');
}
export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt,
};
