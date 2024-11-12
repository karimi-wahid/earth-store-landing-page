
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './hooks/AppContext.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <AppProvider>
    <App />
  </AppProvider>
  </Provider>,
)
