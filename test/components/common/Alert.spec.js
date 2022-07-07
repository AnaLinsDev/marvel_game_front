import { shallowMount } from "@vue/test-utils";
import Alert from "@/components/common/Alert.vue";
import Vuex from "vuex";

describe("Alert", () => {
  let state;
  let mutations;
  let store;
  let wrapper;

  beforeEach(() => {
    state = {
      alert: {
        alert: {
          open: false,
          type: "",
          message: "",
        },
      },
    };

    mutations = {
      closeAlert: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        alert: {
          namespaced: true,
          state,
          mutations,
        },
      },
    });

    wrapper = shallowMount(Alert, { store });
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
