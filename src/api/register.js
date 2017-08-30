import fetch from '@/utils/fetch';

export function register(studentNo, password) {
  return fetch({
    url: '/login/userRegister',
    method: 'post',
    data: {
      studentNo,
      password
    }
  });
}
