export default {
  getCurrentUser({ commit }) {
    var auth = localStorage.getItem("auth");
    if (auth) {
      commit("login", true);
    }
    return JSON.parse(auth);
  },

  getUserById({ commit }, id) {
    return this.$axios.$get(`/users/${id}`);
  },

  async registerUser({ commit }, newUser) {
    return await this.$axios.$post("/register/", newUser).then((resp) => {
      localStorage.setItem("auth", JSON.stringify(resp)), commit("login", true);
    });
  },

  async updateUser({ commit }, newUser) {
    return await this.$axios.$put(`/users/${newUser.id}`, newUser).then((resp) => {
      localStorage.setItem("auth", JSON.stringify(resp)), commit("login", true);
    });
  },

  async loginUser({ commit }, user) {
    return await this.$axios.$post("/login/", user).then((resp) => {
      localStorage.setItem("auth", JSON.stringify(resp))
      commit("login", true)
    })
  },

  logoutUser({ commit }) {
    localStorage.removeItem("auth");
    commit("login", false);
  },

  deleteUser({ commit }, id) {
    this.$axios.$delete(`/users/${id}`);
    localStorage.removeItem("auth");
    commit("login", false);
  },
};
