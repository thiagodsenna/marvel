import type { Meta, StoryObj } from '@storybook/angular';
import { PaginationComponent } from './pagination.component';

const meta: Meta<PaginationComponent> = {
  title: 'Components/PaginationComponent',
  component: PaginationComponent,
  tags: ['autodocs'],
  render: (args: PaginationComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: { callbackFunction: { action: 'Executou a callback function! Retorno => PageOffset' } },
  parameters: {
    docs: {
      description: {
        component: 'Exibe na tela um componente de paginação para controle da exibição de registros. As páginas disponíveis para navegação serão exibidas e manipuladas de acordo com os atributos informados na chamada do componente.'
      },
    },
  }
};

export default meta;
type Story = StoryObj<PaginationComponent>;

export const PaginacaoCurta: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Exibição do componente de paginação com 3 páginas.'
      },
    },
  },
  args: {
    pageLimit: 10,
    pageOffset: 0,
    pageTotal: 30,
  },
};

export const PaginacaoLonga: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Exibição do componente de paginação com 1000 páginas.'
      },
    },
  },
  args: {
    pageLimit: 10,
    pageOffset: 0,
    pageTotal: 10000,
  },
};

export const AlterarPaginaInicial: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Exibição do componente de paginação com 1000 páginas, iniciando a navegação na página 500.'
      },
    },
  },
  args: {
    pageLimit: 10,
    pageOffset: 4990,
    pageTotal: 10000,
  },
};

export const MaisItensPorPagina: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Exibição do componente de paginação com 200 itens no total, e possuindo exibição de 50 itens por páginas.'
      },
    },
  },
  args: {
    pageLimit: 50,
    pageOffset: 0,
    pageTotal: 200,
  },
};
