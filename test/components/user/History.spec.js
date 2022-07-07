import { shallowMount } from "@vue/test-utils";
import History from "@/components/user/History.vue";

describe("History", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(History, {
      propsData: {
        userGames: [],
      },
    });
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
