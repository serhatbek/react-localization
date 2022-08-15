import './App.css';
import { useState } from 'react';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl';

const messages = {
  'tr-TR': {
    title: 'Merhaba Dünya',
    desc: 'Sor, hedefini bul, kimseyi takma',
  },
  'en-US': {
    title: 'Hello World',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
};

function App() {
  const [lang, setLang] = useState('tr-TR');
  return (
    <div className='App'>
      <IntlProvider messages={messages[lang]}>
        <FormattedMessage id='title' />
        <p>
          <FormattedMessage id='desc' />
        </p>
        <button onClick={() => setLang('tr-TR')}>TR</button>
        <button onClick={() => setLang('en-US')}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
