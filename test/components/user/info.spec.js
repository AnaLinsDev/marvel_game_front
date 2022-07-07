import { shallowMount } from "@vue/test-utils";
import Info from "@/components/user/Info.vue";
import Vuex from "vuex";

describe("Info", () => {
  let state;
  let actionsUser;
  let actionsGame;
  let mutations;
  let store;
  let wrapper;

  beforeEach(() => {
    state = {
      alert: {
        types: {
            SUCCESS: 'success',
            ERROR: 'error',
            INFO: 'info'
        },
      },
    };

    actionsUser = {
      getCurrentUser: jest.fn(),
      updateUser: jest.fn(),
      deleteUser: jest.fn(),
      getUserById: jest.fn()
    };

    actionsGame = {
        getGamesByUser: jest.fn(),
      };

    mutations = {
        openAlert: jest.fn(),
      };

    store = new Vuex.Store({
      modules: {
          user: {
            namespaced: true,
            state,
            actions: actionsUser
          },
          alert: {
            namespaced: true,
            mutations
          },
          game: {
            namespaced: true,
            actions: actionsGame
          }
      }
    });

    wrapper = shallowMount(Info, { store });
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
