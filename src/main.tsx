import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

const VITE_AUTH0_DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN!;
const VITE_AUTH0_CLIENTID = import.meta.env.VITE_AUTH0_CLIENTID!;

createRoot(document.getElementById('root')!).render(
  <Auth0Provider domain={VITE_AUTH0_DOMAIN} clientId={VITE_AUTH0_CLIENTID} redirectUri={window.location.origin}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);
