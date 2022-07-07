import { shallowMount } from "@vue/test-utils";
import ProfilePage from "@/pages/user/profile.vue";

describe("ProfilePage", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ProfilePage);
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
