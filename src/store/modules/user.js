import { adminLogin, userLogin } from '@/api/login';
import { getToken, setToken, removeToken } from '@/utils/auth';

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
  },

  actions: {
    // 登录
    // Login({ commit }) {
    //   return new Promise((resolve, reject) => {
    //     login(commit).then(response => {
    //       const data = response.data;
    //       setToken(data.token);
    //       commit('SET_TOKEN', data.token);
    //       resolve();
    //     }).catch(error => {
    //       reject(error);
    //     });
    //   });
    // },

  }
};

export default user;
