import fetch from '@/utils/fetch';

export function deleteAdmin(studentNo) {
  return fetch({
    url: '/edit/deleteAdmin',
    method: 'post',
    data: {
      studentNo,
    }
  });
}

export function deleteUser(studentNo) {
  return fetch({
    url: '/edit/deleteUser',
    method: 'post',
    data: {
      studentNo,
    }
  });
}

export function addAdmin(result) {
  return fetch({
    url: '/edit/addAdmin',
    method: 'post',
    data: {
      result
    }
  });
}
