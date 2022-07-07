import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/common/Footer.vue";

describe("Footer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Footer);
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
