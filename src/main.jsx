import { createRoot } from 'react-dom/client'
import { BrowserRouter , Routes , Router } from 'react-router'; 
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';  
import Services from './views/Services/Services';

const root = createRoot(document.getElementById('root')); 

root.render(
<BrowserRouter>
    <Routes>
        <Route path="/" element={<h1>Home</h1>} />  
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services " element={<Services/>} />
    </Routes>
</BrowserRouter>,
);

