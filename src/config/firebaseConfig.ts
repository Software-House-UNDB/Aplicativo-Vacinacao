// src/config/firebaseConfig.ts (ou onde você decidir criar o arquivo)

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Se você for usar outros serviços do Firebase no futuro (Autenticação, Storage, etc.), importe-os aqui:
// import { getAuth } from 'firebase/auth';
// import { getStorage } from 'firebase/storage';

// Seu objeto de configuração do Firebase, COPIADO EXATAMENTE da sua tela do Firebase.
// Os valores abaixo são os que apareceram nas suas imagens:
const firebaseConfig = {
  apiKey: "AIzaSyA6hCV2Lii7TbDkLxVjFJaRP31FPMwwZA",
  authDomain: "vacinaplus-1a82e.firebaseapp.com",
  projectId: "vacinaplus-1a82e",
  storageBucket: "vacinaplus-1a82e.appspot.com",
  messagingSenderId: "315841328190",
  appId: "1:315841328190:web:73cd0ccc47bb85b7f94d6f",
  // O 'measurementId' é para Google Analytics. Se não for usar, pode remover esta linha.
  measurementId: "G-HD7C4902ED"
};

// Inicializa o Firebase com a configuração fornecida
const app = initializeApp(firebaseConfig);

// Obtém uma instância do Firestore, que você usará para interagir com o banco de dados
const db = getFirestore(app);

// Se você tivesse outros serviços, os inicializaria aqui:
// const auth = getAuth(app);
// const storage = getStorage(app);

// Exporta as instâncias dos serviços que você deseja usar em outras partes do seu aplicativo.
// Neste caso, estamos exportando 'db' (Firestore) e 'app' (a instância principal do Firebase).
export { db, app };
// Se tivesse autenticação ou storage, exportaria assim: export { db, auth, storage, app };