import type { Meta, StoryObj } from '@storybook/angular';
import { FooterComponent } from './footer.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from  '@angular/material/toolbar';

const meta: Meta<FooterComponent> = {
  title: 'Components/FooterComponent',
  component: FooterComponent,
  tags: ['autodocs'],
  render: (args: FooterComponent) => ({
    props: {
      ...args,
    },
  }),
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatToolbarModule],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Rodapé padrão do app.'
      },
    },
  }
};

export default meta;
type Story = StoryObj<FooterComponent>;

export const Default: Story = {
  args: {
    author: 'Thiago Senna',
  },
};