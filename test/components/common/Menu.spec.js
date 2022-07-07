import { shallowMount } from "@vue/test-utils";
import Menu from "@/components/common/Menu.vue";
import Vuex from "vuex";

describe("Menu", () => {
  let state;
  let actions;
  let store;
  let wrapper;

  beforeEach(() => {
    state = {
      user: {
        loggedIn: false,
      },
    };

    actions = {
      getCurrentUser: jest.fn(),
      logoutUser: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
          user: {
            namespaced: true,
            state,
            actions
          }
      }
    });

    wrapper = shallowMount(Menu, { store });
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
