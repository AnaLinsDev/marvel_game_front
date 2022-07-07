import { shallowMount } from "@vue/test-utils";
import Login from "@/components/user/Login.vue";
import Vuex from "vuex";

describe("Login", () => {
  let state;
  let actions;
  let mutations;
  let store;
  let wrapper;

  beforeEach(() => {
    state = {
      alert: {
        types: {
            SUCCESS: 'success',
            ERROR: 'error',
            Login: 'Login'
        },
      },
    };

    actions = {
        loginUser: jest.fn()
    };

    mutations = {
        openAlert: jest.fn(),
        closeAlert: jest.fn(),
      };

    store = new Vuex.Store({
      modules: {
          user: {
            namespaced: true,
            state,
            actions
          },
          alert: {
            namespaced: true,
            state,
            mutations
          }
      }
    });

    wrapper = shallowMount(Login, { store });
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
