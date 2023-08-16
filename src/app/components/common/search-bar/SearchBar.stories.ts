import type { Meta, StoryObj } from '@storybook/angular';
import { SearchBarComponent } from './search-bar.component';

const meta: Meta<SearchBarComponent> = {
  title: 'Components/SearchBar',
  component: SearchBarComponent,
  tags: ['autodocs'],
  render: (args: SearchBarComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: { callbackFunction: { action: 'Executou a callback function!' } },
  parameters: {
    docs: {
      description: {
        component: 'Campo de pesquisa padrão do app.'
      },
    },
  }
};

export default meta;
type Story = StoryObj<SearchBarComponent>;

export const Default: Story = {
  args: {
    search: 'hulk'
  },
};
