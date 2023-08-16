import type { Meta, StoryObj } from '@storybook/angular';
import { SearchResultsTagComponent } from './search-results-tag.component';

const meta: Meta<SearchResultsTagComponent> = {
  title: 'Components/SearchResultsTag',
  component: SearchResultsTagComponent,
  tags: ['autodocs'],
  render: (args: SearchResultsTagComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: { callbackFunction: { action: 'Executou a callback function!' } },
  parameters: {
    docs: {
      description: {
        component: 'Exibe na tela uma tag informando a quantidade de registros retornados em uma consulta e qual o termo foi utilizado na busca. Também possui um botão (x) para ocultar a exibição do componente.'
      },
    },
  }
};

export default meta;
type Story = StoryObj<SearchResultsTagComponent>;

export const ExibeSearchTag: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Exibição padrão da tag, após uma pesquisa.'
      },
    },
  },
  args: {
    showSearchTag: true,
    resultsTotal: 50,
    searchTerm: 'Termo pesquisado',
  },
};

export const OcultaSearchTag: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Tag em seu estado oculto, utilizando showSearchTag="false".'
      },
    },
  },
  args: {
    showSearchTag: false,
  },
};

export const SemBotaoFechar: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Tag sem o botão de fechar, utilizando showCloseButton="false".'
      },
    },
  },
  args: {
    showSearchTag: true,
    resultsTotal: 21,
    searchTerm: 'spider',
    showCloseButton: false,
  },
};
