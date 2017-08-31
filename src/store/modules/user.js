import { adminLogin, userLogin } from '@/api/login';
import { getToken, setToken, removeToken } from '@/utils/auth';

const user = {
  state: {
    token: getToken()
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
  },

  actions: {
    // 登录
    Login({ commit }, loginForm) {
      return new Promise((resolve, reject) => {
        if(loginForm.role === 'admin') {
        adminLogin(loginForm.account, loginForm.password).then(response => {
          const data = response.data;
          setToken(data.token);
          commit('SET_TOKEN', data.token);
          resolve();
        }).catch(error => {
          reject(error);
        });
      } else {
          userLogin(loginForm.account, loginForm.password).then(response => {
            const data = response.data;
            setToken(data.token);
            commit('SET_TOKEN', data.token);
            resolve();
          }).catch(error => {
            reject(error);
          });
        }
      });
    },

  }
};

export default user;
