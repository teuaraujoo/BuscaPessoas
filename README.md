# Sistema de Busca de Pessoas

<img width="1707" height="671" alt="image" src="https://github.com/user-attachments/assets/93555a85-75a4-4b2e-be06-a4bfde1a348e" />


## Sobre o Projeto

Aplicação web desenvolvida para praticar consumo e manipulação de dados com JavaScript. O sistema permite buscar pessoas em um banco de dados JSON local contendo mais de 900 linhas de informações fictícias, exibindo resultados filtrados conforme a busca do usuário.

Este projeto faz parte da minha jornada de estudos em JavaScript, com foco em manipulação de arrays, métodos de busca, tratamento de dados e validações.

## Demonstração

**Repositório:** [https://github.com/teuaraujoo/BuscaPessoas](https://github.com/teuaraujoo/BuscaPessoas)

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- GSAP - Animações
- Particle.js - Efeitos de fundo
- Uiverse - Referências de estilização

## Funcionalidades

**Sistema de Busca**
- Input de busca com validações
- Botão para executar a pesquisa
- Busca por nome em banco de dados local (pessoas.json)
- Resultados filtrados dinamicamente

**Dados Exibidos**
- Nome completo
- Idade
- Salário
- Empresa
- Email
- CPF

**Validações Implementadas**
- Mínimo de 3 caracteres para busca
- Verificação de input vazio
- Mensagem quando nenhum resultado é encontrado
- Feedback visual para cada tipo de validação

**Experiência Visual**
- Animações fade-in com GSAP no input e botão
- Particle.js criando efeito de fundo dinâmico
- Cards estilizados para exibição dos resultados
- Design responsivo com paleta verde e preto

## Conceitos Aplicados

### Manipulação de Dados
- Fetch API para carregar arquivo JSON local
- Armazenamento de dados em array
- Manipulação e filtragem de grandes volumes de dados (900+ registros)

### Métodos de Array
- **filter()** - Filtrar pessoas pelo nome buscado
- **includes()** - Verificar se o nome contém o termo pesquisado
- **push()** - Adicionar resultados ao array de exibição

### Validações
- Verificação de tamanho mínimo (3 caracteres)
- Validação de input vazio
- Tratamento quando nenhum resultado é encontrado
- Mensagens de feedback para o usuário

### Organização de Código
- ES6 Modules para modularização
- Pasta utils/ para funções auxiliares
- Separação de animações em arquivo dedicado
- Código limpo e organizado

### Bibliotecas e Animações
- **GSAP** - Animações suaves de entrada
- **Particle.js** - Efeitos visuais de fundo
- **Uiverse** - Referências para estilização de cards e inputs

## Estrutura do Projeto

```
BuscaPessoas/
├── index.html
├── .gitignore
├── README.md
├── pessoas.json
└── assets/
    ├── script/
    │   ├── utils/
    │   │   └── funcoes-uteis.js
    │   ├── animations/
    │   │   └── homeGsap.js
    │   └── main.js
    ├── styles/
    │   └── style.css
    └── images/
```

## Como Funciona

1. Usuário digita o nome (ou parte dele) no campo de busca
2. Sistema valida se possui pelo menos 3 caracteres
3. Ao clicar em pesquisar, aplicação busca no arquivo JSON
4. Dados são armazenados em um array
5. Array é filtrado utilizando o método filter() e includes()
6. Resultados são exibidos em cards na tela
7. Se não encontrar resultados ou houver erro de validação, mensagem é exibida

## Manipulação de Dados

O projeto trabalha com um arquivo JSON contendo mais de 900 linhas de dados fictícios de pessoas. A manipulação desses dados envolve:

- Carregamento assíncrono com Fetch API
- Armazenamento em estrutura de dados (array)
- Filtragem eficiente com métodos nativos do JavaScript
- Renderização dinâmica dos resultados na interface

## Particle.js

Biblioteca utilizada para criar efeitos visuais de partículas no background da aplicação, proporcionando uma experiência visual mais dinâmica e moderna. A biblioteca é intuitiva e fácil de configurar, permitindo personalização dos efeitos.

## GSAP Animations

Implementação de animações suaves de entrada (fade-in) nos elementos principais da interface:
- Input de busca
- Botão de pesquisa
- Cards de resultados

As animações melhoram a experiência do usuário, tornando a interface mais fluida e profissional.

## Aprendizados

### Primeira Vez com Particle.js
Esta foi minha primeira experiência utilizando a biblioteca Particle.js. Achei a documentação clara e a implementação bastante intuitiva, sendo uma ótima adição para criar interfaces mais dinâmicas.

### JSON Local vs API Externa
Trabalhar com JSON local através do Fetch API é muito similar a consumir APIs externas, porém requer mais atenção na manipulação dos dados após o carregamento. A principal diferença está no controle total sobre a estrutura dos dados.

### Importância dos Métodos de Array
A manipulação eficiente de arrays foi crucial neste projeto. Os métodos filter() e includes() mostraram-se essenciais para implementar um sistema de busca funcional e performático, mesmo com grandes volumes de dados.

## Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/teuaraujoo/BuscaPessoas.git
```

2. Entre na pasta do projeto:
```bash
cd BuscaPessoas
```

3. Abra o arquivo index.html no navegador ou utilize Live Server no VS Code.

**Obs:** Por utilizar ES6 Modules e Fetch API, é necessário abrir através de um servidor local (Live Server) para evitar erros de CORS.

## Próximas Melhorias

- Botão limpar pesquisa
- Implementação do SweetAlert2
- Histórico de buscas recentes
- Light Mode

## Autor

Mateus Araújo

- GitHub: [@teuaraujoo](https://github.com/teuaraujoo)
- Frontend Mentor: [@teuaraujoo](https://www.frontendmentor.io/profile/teuaraujoo)

## Licença

Projeto desenvolvido para fins educacionais e de estudo.

---

Desenvolvido como parte da jornada de aprendizado em JavaScript.

