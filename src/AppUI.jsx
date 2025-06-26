import Navbar from './components/Navbar';
import './css/AppUIStyle.css';

function AppUI() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        <img
          className='imgBg'
          src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Famocordoba.ar%2Fwp-content%2Fuploads%2F2024%2F09%2FTorre-cespedes-jesus-maria-amocordoba.ar_.jpg&f=1&nofb=1&ipt=7b238eff580da6a1cac789d5e8a1224aa9f91274f116d561110f4c9d8ba06ca7'
          alt=''
        />
        <div className='divTitulo'>
          <h1>Museo torre Cespedes</h1>
        </div>
      </header>
      <article>
        <section className='newSection'>holaaaa</section>
        <section className='storySection'>holaaaa</section>
        <section className='mapSection'>holaaaaaa</section>
        <section className='gallerySection'>dasdasd</section>
        <section className='videoSection'>asdasd</section>
      </article>
    </>
  );
}
export default AppUI;
