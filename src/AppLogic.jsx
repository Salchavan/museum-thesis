import { createContext, useState } from 'react';
import AppUI from './AppUI';

export const DataContext = createContext();

function AppLogic() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('Español');

  function search() {
    console.log('searching...');
  }
  function changeLanguage() {
    console.log('changing lenguage...');
  }
  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }
  return (
    <>
      <DataContext.Provider
        value={{
          theme,
          language,
          toggleTheme,
          setLanguage,
          search,
          changeLanguage,
        }}
      >
        <AppUI></AppUI>
      </DataContext.Provider>
    </>
  );
}

export default AppLogic;
