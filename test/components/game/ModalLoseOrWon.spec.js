import { shallowMount } from "@vue/test-utils";
import ModalLoseOrWon from "@/components/game/ModalLoseOrWon.vue";

describe("ModalLoseOrWon", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ModalLoseOrWon);
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
