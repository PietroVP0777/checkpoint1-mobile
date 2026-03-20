# CP1 - Tela de Login FIAP

## Descrição do Projeto

Este projeto consiste no desenvolvimento de uma **tela de login mobile**, utilizando **React Native com Expo**, com foco em usabilidade, organização de componentes e estilização moderna.

A aplicação permite que o usuário insira e-mail e senha, valide os campos e receba uma resposta via alerta, simulando um processo de autenticação.

---

## Ideia Principal

A proposta do projeto é criar uma interface de login funcional e intuitiva, aplicando conceitos fundamentais de desenvolvimento mobile, como:

- Gerenciamento de estado com React Hooks
- Validação de formulário
- Componentização
- Experiência do usuário (UX)

---

## Funcionalidades Implementadas

- Entrada de e-mail e senha  
- Validação de campos obrigatórios  
- Exibição de alerta de boas-vindas  
- Limpeza automática dos campos após login  
- Alternância de visibilidade da senha  
- Checkbox "Lembrar de mim"  
- Links de navegação:
  - Esqueci minha senha  
  - Não possui conta  

---

## Lógica do Sistema

O sistema utiliza **useState** para controlar:

- Email  
- Senha  
- Visibilidade da senha  
- Estado do checkbox  

A função responsável pelo login realiza:

- Verificação se os campos estão preenchidos  
- Exibição de mensagens de erro ou sucesso  
- Reset dos inputs após login válido  

---

## Componentes Utilizados

### 🔹 Componentes Nativos
- View  
- Text  
- TextInput  
- Image  
- Pressable  

### 🔹 Componentes Externos
- expo-checkbox  
- @expo/vector-icons  

### 🔹 Componente Personalizado
- EyeSwapIcon (controle de visibilidade da senha)

---

## Estilização

- NativeWind (Tailwind CSS para React Native)  
- Tema escuro (Dark Mode)  
- Cor principal: #ed195c (rosa FIAP)  

---

## 🛠️ Tecnologias Utilizadas

- React Native  
- Expo  
- TypeScript  
- NativeWind  
- Expo Checkbox  
- Expo Vector Icons  

---

## 📂 Estrutura do Projeto + Execução

📁 /components  
└── EyeSwapIcon.jsx  

📁 /assets  
└── logo-fiap.png  

📁 /styles  
└── global.css  

📄 App.tsx  

---

## Como Executar

1. Instale as dependências:  
   npm install  

2. Inicie o projeto:  
   npx expo start  

3. Execute no:  
   - Emulador Android/iOS  
   - Celular com Expo Go  

---

## 📸 Print da Tela

<img width="738" height="1600" alt="image" src="https://github.com/user-attachments/assets/bb5c1134-de52-47f4-b18e-72eff3ad5228" />


---

## 👥 Integrantes do Grupo

- Pietro Vitor Pezzente | RM 557283
- Eric Darakjian | RM 557082
- Luciano Henrique Meriato Junior | RM554546
- Kauã Soares Guimarães | RM 559044
- Enzo Mikael Sanches Baptista Paes Fontes | RM 558887  
