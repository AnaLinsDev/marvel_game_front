import { shallowMount } from "@vue/test-utils";
import Register from "@/components/user/Register.vue";
import Vuex from "vuex";

describe("Register", () => {
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
            Register: 'Register'
        },
      },
    };

    actions = {
        registerUser: jest.fn()
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

    wrapper = shallowMount(Register, { store });
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
