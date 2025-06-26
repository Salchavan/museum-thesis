import { useContext } from 'react';
import { DataContext } from '../AppLogic';
import '../css/NavbarStyle.css';
import Button from './Button';

function Navbar() {
  const { search, changeLanguage, theme, language } = useContext(DataContext);

  return (
    <div className='navbar'>
      <svg
        className='svgHome'
        xmlns='http://www.w3.org/2000/svg'
        width='86px'
        height='86px'
        fill='currentColor'
        class='bi bi-bank2'
        viewBox='0 0 16 16'
      >
        <path
          className='svgHome'
          d='M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916zM12.375 6v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2M.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1z'
        />
      </svg>{' '}
      <ul className=''>
        <li>
          <a href='#'>Sobre nosotros</a>
        </li>
        <li>
          <a href='#'>Noticias</a>
        </li>
        <li>
          <a href='#'>Eventos</a>
        </li>
        <li>
          <a href='#'>Agenda</a>
        </li>
      </ul>
      <div className='divButtons'>
        <Button handleClick={search}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='currentColor'
            className='bi bi-search'
            viewBox='0 0 16 16'
          >
            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
          </svg>
        </Button>
        <Button handleClick={changeLanguage} bgColor='transparent'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='currentColor'
            className='bi bi-caret-down'
            viewBox='0 0 16 16'
          >
            <path d='M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659' />
          </svg>
          {language}
        </Button>
      </div>
    </div>
  );
}
export default Navbar;
