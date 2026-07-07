import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import { GoogleOAuthProvider } from '@react-oauth/google';
import SearchContextShare from './Context/SearchContextShare.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <GoogleOAuthProvider clientId="708270195016-4e295p8vdol4hfgicd6o47ts25pdevi9.apps.googleusercontent.com">

{/* wrap this in app and go to allbooks.jsx */}
        <SearchContextShare>
          <App />
        </SearchContextShare>

      </GoogleOAuthProvider>;

    </BrowserRouter>
  </StrictMode>,
)
