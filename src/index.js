import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import i18n from './i18n'
import { I18nextProvider } from 'react-i18next'

const I18nWrapper = () => {
    return (
        <I18nextProvider i18n={ i18n }>
            <App />
        </I18nextProvider>
    )
}

ReactDOM.render(<I18nWrapper />, document.getElementById('root'));
registerServiceWorker();
