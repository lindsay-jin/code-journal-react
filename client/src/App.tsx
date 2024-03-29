import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { View } from './Pages/View';
import { CreateEdit } from './Pages/CreateEdit';
import './css/styles.css';
import './css/layout.css';
import './css/reset.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<View />} />
        <Route path="create-edit" element={<CreateEdit />} />
      </Route>
    </Routes>
  );
}

export default App;
