import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { View } from './Pages/View';
import { CreateEdit } from './Pages/CreateEdit';
import './css/styles.css';
import './css/layout.css';
import './css/reset.css';
import { readEntries } from './lib/data';
import { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { type Entry } from './lib/data';

function App() {
  const [itemArr, setItemArr] = useState<Entry[]>();

  const getArray = useCallback(() => {
    return readEntries();
  }, []);

  useEffect(() => {
    setItemArr(getArray);
  }, [getArray]);

  if (!itemArr) {
    return (
      <div>
        <p>Error!</p>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<View entries={itemArr} />} />
        <Route path="create-edit" element={<CreateEdit />} />
      </Route>
    </Routes>
  );
}

export default App;
