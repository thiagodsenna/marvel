import type { Meta, StoryObj } from '@storybook/angular';
import { FavAvatarComponent } from './fav-avatar.component';

const meta: Meta<FavAvatarComponent> = {
  title: 'Components/FavAvatar',
  component: FavAvatarComponent,
  tags: ['autodocs'],
  render: (args: FavAvatarComponent) => ({
    props: {
      ...args,
    },
  }),
  parameters: {
    docs: {
      description: {
        component: 'Exibe na tela a imagem de um herói da Marvel como avatar do usuário. A imagem do herói é obtida através do herói favorito do usuário, salvo na local storage. Caso o usuário não tenha um herói como favorito, será exibida uma imagem padrão como placeholder.'
      },
    },
  }
};

export default meta;
type Story = StoryObj<FavAvatarComponent>;

export const Default: Story = {
};

