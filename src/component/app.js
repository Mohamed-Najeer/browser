import React from 'react-dom';
import { Routes,Route } from 'react-router-dom';
import Details from '../component/details';
import Home from '../component/home';

const App= () => {
    return(
<Routes>
<Route path='/details' element={<Details />}></Route>
<Route path='/' element={<Home />}></Route>
</Routes>
    )
}
export default App;