import { shallowMount } from "@vue/test-utils";
import ConfigPage from "@/pages/game/config.vue";
import Vuex from "vuex";

describe("ConfigPage", () => {
  let actions;
  let store;
  let wrapper;

  beforeEach(() => {

    actions = {
      getGame: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
          game: {
            namespaced: true,
            actions
          }
      }
    });

    wrapper = shallowMount(ConfigPage, { store });
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
