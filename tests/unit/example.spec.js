import { RouterLinkStub, shallowMount } from "@vue/test-utils";
import MyLink from "@/components/MyLink.vue";

describe("MyLink.vue", () => {
  it("should pass", () => {
    const name = "some-route";

    const wrapper = shallowMount(MyLink, {
      props: {
        name,
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    expect(wrapper.getComponent(".link").props("to")).toEqual({ name });
  });
});
