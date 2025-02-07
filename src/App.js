import AppHomeScreen from './screen/home/HomeScreeen';
import AppContactScreen from './screen/contact/ContactScreen';
import AppLoginScreen from './component/login-register/login';
import AppSignupScreen from './screen/signup/SignupScreen';
import AppAbout from './screen/about/About';
import AppDeliveryScreen from './screen/delivery/DeliveryScreen';
import AppMenuIce_latteScreen from './screen/menu/Ice_latteScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppHomeScreen />} />
          <Route path='/ice_latte' element={<AppMenuIce_latteScreen />} />
          <Route path='/delivery' element={<AppDeliveryScreen />} />
          <Route path='/contact' element={<AppContactScreen />} />
          <Route path='/about' element={<AppAbout />} />
          <Route path='/login' element={<AppLoginScreen />} />
          <Route path='/signup' element={<AppSignupScreen />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
