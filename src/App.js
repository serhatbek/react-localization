import './App.css';
import { useState, useEffect } from 'react';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl';

const messages = {
  'tr-TR': {
    title: 'Merhaba Dünya',
    desc: '{count} yeni mesajınız var',
  },
  'en-US': {
    title: 'Hello World',
    desc: 'You have {count} new messages',
  },
};

function App() {
  const isLocale = localStorage.getItem('locale');
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  return (
    <div className='App'>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id='title' />
        <p>
          <FormattedMessage id='desc' values={{ count: 4 }} />
        </p>
        <button onClick={() => setLocale('tr-TR')}>TR</button>
        <button onClick={() => setLocale('en-US')}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
