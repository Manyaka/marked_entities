import { shallowMount } from "@vue/test-utils";
import MarkedEntities from "@/views/MarkedEntities.vue";

describe("MarkedEntities.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(MarkedEntities, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
