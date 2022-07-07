import { shallowMount } from "@vue/test-utils";
import IndexPage from "@/pages/index.vue";
import Vuex from "vuex";

describe("IndexPage", () => {
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

    wrapper = shallowMount(IndexPage, { store });
  });

  it("is a Vue instance", () => {
    expect(wrapper.vm.current_page).toBe(0);
  });
});
