import fetch from '@/utils/fetch';

export function deleteAdmin(studentNo) {
  return fetch({
    url: '/login/deleteAdmin',
    method: 'post',
    data: {
      studentNo,
    }
  });
}

export function deleteUser(studentNo) {
  return fetch({
    url: '/login/deleteUser',
    method: 'post',
    data: {
      studentNo,
    }
  });
}
