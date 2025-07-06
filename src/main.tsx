import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './routes';

// import { initializeApp } from "firebase/app";

const router = createBrowserRouter(routes);

// const firebaseConfig = {
//   apiKey: "AIzaSyCMpp83YUTTIubdVc3kVsvEwgqKfFwJrtM",
//   authDomain: "news-api-project-e8dd5.firebaseapp.com",
//   projectId: "news-api-project-e8dd5",
//   storageBucket: "news-api-project-e8dd5.firebasestorage.app",
//   messagingSenderId: "811429536148",
//   appId: "1:811429536148:web:d3ffcb23dd8db6af666f81",
//   measurementId: "G-T6ELR2DS33"
// };
// // Initialize Firebase
// initializeApp(firebaseConfig);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
