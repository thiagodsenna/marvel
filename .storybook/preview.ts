import type { Preview } from "@storybook/angular";

const preview: Preview = {
  parameters: {
    docs: { inlineStories: false },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'Light (Default)',
      values: [
        {
          name: 'Light (Default)',
          value: '#eee',
        },
        {
          name: 'Dark',
          value: '#333',
        },
        {
          name: 'White',
          value: '#fff',
        },
      ],
    },
  },
};

export default preview;
