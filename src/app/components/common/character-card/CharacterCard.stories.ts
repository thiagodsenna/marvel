import type { Meta, StoryObj } from '@storybook/angular';
import { CharacterCardComponent } from './character-card.component';
import { CharacterService } from 'src/app/services/character.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { MatCardModule } from  '@angular/material/card';
import { SubstringPipe } from 'src/app//pipes/substring.pipe';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

const meta: Meta<CharacterCardComponent> = {
  title: 'Components/CharacterCardComponent',
  component: CharacterCardComponent,
  tags: ['autodocs'],
  render: (args: CharacterCardComponent) => ({
    props: {
      ...args,
    },
  }),
  decorators: [
    moduleMetadata({
      declarations: [SubstringPipe],
      imports: [CommonModule, HttpClientModule, MatSnackBarModule, MatCardModule],
      providers: [CharacterService, LocalStorageService],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: 'Exibe um card de um herói da Marvel, de acordo com os dados informados como parâmetro. É possível alterar o tamanho do card através do atributo size="". Possíveis valores: "small" | "default" | "large".'
      },
    },
  }
};

export default meta;
type Story = StoryObj<CharacterCardComponent>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Exibição do card padrão.'
      },
    },
  },
  args: {
    size: 'default',
    character: {
      "id": 1009149,
      "name": "Captain America",
      "description": "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army",
      "modified": "2014-04-29T14:10:43-0400",
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087",
          "extension": "jpg"
      }
    }
  },
};

export const SemDescricao: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Exibição do card sem descrição informada.'
      },
    },
  },
  args: {
    size: 'default',
    character: {
      "id": 1009149,
      "name": "Abyss",
      "description": "",
      "modified": "2014-04-29T14:10:43-0400",
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64",
          "extension": "jpg"
      }
    }
  },
};

export const SemImagem: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Exibição do card sem imagem informada. Será exibida uma imagem padrão como placeholder.'
      },
    },
  },
  args: {
    size: 'default',
    character: {
      "id": 1009149,
      "name": "Spider Man",
      "description": "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army",
      "modified": "2014-04-29T14:10:43-0400"
    }
  },
};

export const TamanhoPequeno: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Exibição do card de tamanho pequeno. O tamanho do card pode ser alterado através de size="small".'
      },
    },
  },
  args: {
    size: 'small',
    character: {
      "id": 1009149,
      "name": "Spider Man",
      "description": "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army",
      "modified": "2014-04-29T14:10:43-0400",
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/5317717bed6fe",
          "extension": "jpg"
      }
    }
  },
};

export const TamanhoMedio: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Exibição do card de tamanho médio (padrão). O tamanho do card pode ser alterado através de size="default" ou apenas não informando o atributo "size".'
      },
    },
  },
  args: {
    size: 'default',
    character: {
      "id": 1009149,
      "name": "Spider Man",
      "description": "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army",
      "modified": "2014-04-29T14:10:43-0400",
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/5317717bed6fe",
          "extension": "jpg"
      }
    }
  },
};

export const TamanhoGrande: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Exibição do card de tamanho grande. O tamanho do card pode ser alterado através de size="large".'
      },
    },
  },
  args: {
    size: 'large',
    character: {
      "id": 1009149,
      "name": "Spider Man",
      "description": "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army",
      "modified": "2014-04-29T14:10:43-0400",
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/5317717bed6fe",
          "extension": "jpg"
      }
    }
  },
};