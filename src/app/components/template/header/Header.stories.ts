import type { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { FavAvatarComponent } from '../../common/fav-avatar/fav-avatar.component';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

const meta: Meta<HeaderComponent> = {
  title: 'Components/HeaderComponent',
  component: HeaderComponent,
  tags: ['autodocs'],
  render: (args: HeaderComponent) => ({
    props: {
      ...args,
    },
  }),
  decorators: [
    moduleMetadata({
      declarations: [FavAvatarComponent],
      imports: [CommonModule, MatToolbarModule],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Cabeçalho padrão do app.'
      },
    },
  }
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
};