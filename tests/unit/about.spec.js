import About from '@/views/About.vue';
import { shallowMount } from '@vue/test-utils';

describe('about.vue', () => {
  test('renders text', () => {
    const wrapper = shallowMount(About);

    expect(wrapper.text()).toContain('about');
  });
});
