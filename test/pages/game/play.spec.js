import { shallowMount } from "@vue/test-utils";
import PlayPage from "@/pages/game/play.vue";
import Vuex from "vuex";

describe("PlayPage", () => {
  let state;
  let actions;
  let store;
  let wrapper;

  beforeEach(() => {
    state = {
      game: {
        cards: [],
        game: {
          difficulty: 'Easy'
        }
      },
    };

    actions = {
      addGameToUser: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
          game: {
            namespaced: true,
            state,
            actions
          }
      }
    });

    wrapper = shallowMount(PlayPage, { store });
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
