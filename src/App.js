import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { translate, Trans } from 'react-i18next';
import SubApp from './SubApp';

class App extends Component {

  render() {
    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">{t('Welcome to React')}</h1>
              <button onClick={() => changeLanguage('en')}>en</button>
              <button onClick={() => changeLanguage('el')}>el</button>
              <button onClick={() => changeLanguage('fr')}>fr</button>
          </header>
          <p className="App-intro">
            <Trans>To get started, edit App.js and save to reload.</Trans>
          </p>
          <div>{t('Declarative')}</div>
          <br />
          <div>
            {t('simpleContent')}
          </div>

          <div className='subapp' style={style} >
            <SubApp />
          </div>
      </div>
    );
  }
}

const style = {
  width: '25rem',
  height: '10rem',
  marginTop: '10rem',
  marginLeft: '5rem',
  padding: '0.5rem 0',
  bottom: '0px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'lightgrey',
}

export default translate('translations')(App)