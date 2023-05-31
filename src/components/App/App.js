
import { Routes, Route } from 'react-router-dom';
import '../../styles/App.css'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Add from '../Add/Add';
import Cardlist from '../Cardlist/Cardlist';
import { globalContext as GlobalContext } from '../../contexts/globalContext';
import Edit from '../Edit/Edit';
import {useLocalStorage} from '../../hooks/useLocalStorage';


function App() {

  const initialState = {
    list: []
  }

  const [state, dispatch] = useLocalStorage('list', initialState);

  return (
    <>
    <Header />
    <GlobalContext.Provider value={{ state, dispatch }}>
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/cardList" element={<Cardlist />}/>
      <Route path="/add" element={<Add />}/>
      <Route path="/edit/:id" element={<Edit />}/>
    </Routes>
    </GlobalContext.Provider>
    <Footer />
    </>
  );
}

export default App;
