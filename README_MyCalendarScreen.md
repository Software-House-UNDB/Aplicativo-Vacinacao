# Documentação da Tela MyCalendarScreen

Esta documentação descreve a tela `MyCalendarScreen`, localizada em `src/pages/calendar/index.tsx`, e as principais bibliotecas utilizadas em sua implementação.

## Visão Geral

A tela `MyCalendarScreen` exibe um calendário interativo que permite ao usuário visualizar e selecionar datas. Ela é construída utilizando React Native e algumas bibliotecas de terceiros para funcionalidades específicas de calendário e manipulação de datas.

## Bibliotecas Utilizadas

A seguir, uma descrição das bibliotecas importadas e suas funções no contexto da `MyCalendarScreen`:

### 1. `react`

-   **Descrição**: Biblioteca JavaScript fundamental para construir interfaces de usuário.
-   **Uso em `MyCalendarScreen`**:
    -   `React, { useState }`:
        -   `React`: Namespace principal da biblioteca.
        -   `useState`: Hook do React para adicionar estado a componentes funcionais. Em `MyCalendarScreen`, é usado para gerenciar `selectedDate`, que armazena a data atualmente selecionada pelo usuário no calendário.
    -   `React.FC`: Um tipo genérico para componentes funcionais em TypeScript, usado para tipar o componente `MyCalendarScreen`.

### 2. `react-native`

-   **Descrição**: Framework para construir aplicativos móveis nativos usando React.
-   **Uso em `MyCalendarScreen`**:
    -   `StyleSheet`: Utilizado para criar e gerenciar os estilos do componente de forma otimizada. Os estilos são definidos no objeto `styles`.
    -   `View`: Componente fundamental para criar layouts e agrupar outros componentes. Usado como contêiner principal (`styles.container`) e para estruturar o cabeçalho (`styles.boxTop`, `styles.customHeader`).
    -   `Text`: Componente para exibir texto. Usado para mostrar o título da tela, o nome da vacina, o cabeçalho do calendário (mês/ano) e a data selecionada.
    -   `TouchableOpacity`: Componente que responde a toques, tornando a `View` ou `Text` aninhada clicável e fornecendo feedback visual. Usado para o ícone de sino (notificações).

### 3. `@expo/vector-icons`

-   **Descrição**: Biblioteca que fornece um conjunto de ícones vetoriais populares, como FontAwesome, AntDesign, MaterialIcons, etc., para uso em projetos Expo e React Native.
-   **Uso em `MyCalendarScreen`**:
    -   `AntDesign`: Um dos conjuntos de ícones disponíveis.
        -   `name="bells"`: Especifica o ícone de sino do conjunto AntDesign. É usado no cabeçalho superior da tela.

### 4. `react-native-calendars`

-   **Descrição**: Uma biblioteca de calendário personalizável e de alto desempenho para React Native.
-   **Uso em `MyCalendarScreen`**:
    -   `Calendar`: Componente principal da biblioteca que renderiza o calendário.
    -   **Propriedades utilizadas**:
        -   `current`: Define a data inicial que o calendário exibe ao ser carregado. `moment().format('YYYY-MM-DD')` é usado para mostrar o mês atual.
        -   `markedDates`: Permite marcar datas no calendário. Usado para destacar a `selectedDate` com uma cor específica (`#1E90FF`). A estrutura de dados para esta propriedade é um objeto onde as chaves são strings de data no formato 'YYYY-MM-DD'.
        -   `onDayPress`: Função callback chamada quando um dia é pressionado. Recebe um objeto `day` (tipado como `any` para contornar problemas de tipo com `DateObject`) que contém `dateString` (a data no formato 'YYYY-MM-DD'), usada para atualizar o estado `selectedDate`.
        -   `enableSwipeMonths`: Booleano que permite a navegação entre meses deslizando o dedo.
        -   `renderHeader`: Função que permite personalizar a renderização do cabeçalho do calendário. Aqui, é usada para exibir o mês e o ano em português, utilizando `moment.js` para formatação.
        -   `theme`: Objeto para personalizar a aparência do calendário (cores, fontes, etc.). Diversas propriedades são configuradas para alinhar o design com a cor azul (`#1E90FF`) e outras preferências visuais.

### 5. `moment`

-   **Descrição**: Uma biblioteca JavaScript popular para analisar, validar, manipular e exibir datas e horas.
-   **Uso em `MyCalendarScreen`**:
    -   `moment()`: Cria uma instância de `moment` com a data e hora atuais.
    -   `moment.locale('pt-br')`: Configura o locale do `moment` para português do Brasil globalmente. Isso afeta como os nomes dos meses e dias da semana são exibidos.
    -   `import 'moment/locale/pt-br'`: Importa explicitamente os dados de localização para pt-br.
    -   `moment(date.timestamp)`: Usado dentro de `renderHeader` para converter o timestamp fornecido pela biblioteca `react-native-calendars` em um objeto `moment`, facilitando a formatação.
    -   `.format('YYYY-MM-DD')`: Formata a data para o padrão 'AAAA-MM-DD', usado pela propriedade `current` e para armazenar `selectedDate`.
    -   `.format('MMMM')`: Formata a data para exibir o nome completo do mês (ex: "Maio").
    -   `.format('YYYY')`: Formata a data para exibir o ano com quatro dígitos (ex: "2025").

## Estrutura do Componente

O componente `MyCalendarScreen` é definido como uma função React (`React.FC`).

-   **Estado**:
    -   `selectedDate` (tipo `string | null`): Armazena a data selecionada pelo usuário no formato 'YYYY-MM-DD'. Inicializada como `null`.

-   **Layout**:
    -   Um `View` principal (`styles.container`) que ocupa toda a tela.
    -   Um cabeçalho superior (`styles.boxTop`) com o título "Vacina Plus" e um ícone de sino.
    -   Um texto de cabeçalho "Seu Calendário Reativado" (`styles.headerText`).
    -   O componente `Calendar` da `react-native-calendars`.
    -   Um texto condicional (`styles.selectionText`) que exibe a data selecionada se `selectedDate` não for `null`.

-   **Estilização**:
    -   Os estilos são definidos usando `StyleSheet.create` e aplicados aos respectivos componentes.

## Comandos e Funcionalidades

-   **Seleção de Data**: Ao tocar em um dia no calendário, a função `onDayPress` é acionada, atualizando o estado `selectedDate` com a data clicada. A data selecionada é então destacada no calendário e exibida abaixo dele.
-   **Navegação entre Meses**: O usuário pode navegar para o mês anterior ou seguinte usando as setas no cabeçalho do calendário ou deslizando horizontalmente (devido a `enableSwipeMonths={true}`).
-   **Cabeçalho Personalizado**: O cabeçalho do calendário exibe o mês (por extenso, em português) e o ano, formatados usando `moment.js`.
-   **Tema Personalizado**: O calendário utiliza um tema customizado para cores de fundo, texto, dias selecionados e setas, com destaque para a cor `#1E90FF`.

## Observações

-   A tipagem de `day` no callback `onDayPress` foi definida como `any` (`(day: any) => ...`) para evitar um erro de tipo comum com o `DateObject` da biblioteca `react-native-calendars` quando se utiliza TypeScript. Esta é uma solução prática, embora o ideal seja encontrar ou definir tipos mais precisos se disponíveis ou necessários para maior robustez.
-   O `moment.locale('pt-br')` é configurado no início do arquivo para garantir que todas as formatações de data e hora subsequentes usando `moment` utilizem o idioma português do Brasil.

Este arquivo README visa fornecer uma compreensão clara da funcionalidade e implementação da tela `MyCalendarScreen`. 