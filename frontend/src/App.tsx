import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./componentes/Header";
import Salescard from "./componentes/SalesCard";

function App() {
  return (
    <>
    <ToastContainer/>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <Salescard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
