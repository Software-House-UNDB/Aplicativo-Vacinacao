# Aplicativo Vacinação - Documentação das Telas e Componentes

Este documento descreve as principais telas e componentes presentes nas pastas `src/pages` e `src/components` do projeto.

---

## 📄 Telas (`src/pages`)

### 1. Login (`src/pages/login/index.tsx`)
Tela de autenticação do usuário. Permite o acesso ao sistema por meio de e-mail e senha. Possui botões para login e para navegação à tela de cadastro.  
**Componentes principais:**  
- Campos de entrada para e-mail e senha  
- Botão "Entrar"  
- Botão para cadastro ("Não possui login?")  
- Link para recuperação de senha

---

### 2. Cadastro (`src/pages/register/index.tsx`)
Tela para criação de uma nova conta de usuário.  
**Componentes principais:**  
- Campos para e-mail, senha e confirmação de senha  
- Botão para registrar conta  
- Botão para voltar ao login

---

### 3. Lista/Campanhas (`src/pages/list/index.tsx`)
Tela inicial após login, exibe campanhas de vacinação e atalhos para funcionalidades principais.  
**Componentes principais:**  
- Área superior com título e ícone de notificações  
- Lista de campanhas (imagens)  
- Botões para acessar Vacina, Histórico Médico e Saúde + Educação

---

### 4. Calendário (`src/pages/calendar/index.tsx`)
Tela de calendário (ainda em desenvolvimento).  
**Componentes principais:**  
- Exibe um texto simples indicando a tela de calendário

---

### 5. Lembretes (`src/pages/lembrete/index.tsx`)
Tela para gerenciamento de lembretes de vacinação.  
**Componentes principais:**  
- Lista de lembretes  
- Botão para adicionar novo lembrete (abre modal)  
- Modal para inserir dados do lembrete (vacina, data/hora, unidade médica)

---

### 6. Perfil do Usuário (`src/pages/user/index.tsx`)
Tela de perfil do usuário, exibindo informações pessoais e opções de configuração.  
**Componentes principais:**  
- Dados do usuário (nome, CPF, data de nascimento, etc.)  
- Informações de contato  
- Opções de edição de perfil, análise de histórico e informações sobre o app

---

## 🧩 Componentes (`src/components`)

### 1. CustomTabBar (`src/components/CustomTabBar/index.tsx`)
Componente personalizado de barra de navegação inferior (tab bar).  
**Componentes principais:**  
- Ícones para navegação entre as telas principais (List, Calendar, Lembrete, User)  
- Destaque visual para a aba ativa

---

## 🎨 Estilos

Cada tela possui seu respectivo arquivo de estilos (`style.ts`), centralizando as definições de layout e aparência dos componentes.

---

## Observações

- O projeto utiliza React Native e navegação via `@react-navigation`.
- Os ícones são fornecidos por bibliotecas como `@expo/vector-icons`.
- As telas são organizadas para facilitar a expansão futura do aplicativo.

---

Sinta-se à vontade para complementar esta documentação conforme novas telas e componentes forem adicionados ao projeto!