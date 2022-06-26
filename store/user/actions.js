export default {
  getAll({ commit }) {
    this.$axios.$get("/users/").then((resp) => console.log(resp));
  },

  getCurrentUser({ commit }) {
    var auth = localStorage.getItem("auth");
    if (auth) {
      commit("login", true);
    }
    return JSON.parse(auth);
  },

  getUserById({ commit }, id) {
    return this.$axios.$get(`/users/${id}`)
  },

  async registerUser({ commit }, newUser) {
    let allUsers = [];
    await this.$axios.$get("/users/").then((resp) => (allUsers = resp));
    if (isUniqueUsername(allUsers, newUser)) {
      this.$axios.$post("/users/", newUser).then((resp) => {
        localStorage.setItem("auth", JSON.stringify(resp)),
          commit("login", true);
      });
    } else {
      // TODO: Alert error username already exists
    }
  },

  async updateUser({ commit }, newUser) {
    return this.$axios.$put(`/users/${newUser.id}`, newUser).then((resp) => {
      localStorage.setItem("auth", JSON.stringify(resp)), commit("login", true);
    });
  },

  async loginUser({ commit }, user) {
    let allUsers = [];
    await this.$axios.$get("/users/").then((resp) => (allUsers = resp));
    let findedUser = getUser(allUsers, user);
    if (findedUser.length > 0) {
      localStorage.setItem("auth", JSON.stringify(findedUser));
      commit("login", true);
    } else {
      // TODO: Alert error user not found
    }
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

function isUniqueUsername(users, newUser) {
  let findUser = users.filter((user) => user.username === newUser.username);
  return findUser.length === 0;
}

function getUser(users, newUser) {
  let findUser = users.filter(
    (user) =>
      user.username === newUser.username && user.password === newUser.password
  );
  return findUser;
}
