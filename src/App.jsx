import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Label from './pages/Label';
import NewsFeed from './pages/NewsFeed';
import Footer from './pages/Footer';
import AboutUs from './pages/subpages/AboutUs';
import WhyAugusta from './pages/subpages/WhyAugusta';
import ContactUs from './pages/subpages/ContactUs';
import Loader from './pages/Loader';
import Blog from './pages/subpages/Blog'
import AirportManagement from './pages/subpages/AirportManagement';
import GroundStaffing from './pages/subpages/GroundStaffing';
import Ticketing from './pages/subpages/Ticketing';
import Cabincrew from './pages/subpages/Cabincrew';
import AirCargo from './pages/subpages/AirCargo';
import PilotCourse from './pages/subpages/PilotCourse';
import Getintouch from './pages/subpages/Getintouch';
import Sevenwayspost from './pages/posts/Sevenwayspost';
import HandShakepost from './pages/posts/HandShakepost';
import Selfdesciplinedpost from './pages/posts/Selfdesciplinedpost';
import CoffePost from './pages/posts/CoffePost';
import CommonMistakes from './pages/posts/CommonMistakes';
import HotelManagementTips from './pages/posts/HotelManagementTips';
import Email from './pages/posts/Email';
import Interview from './pages/posts/Interview';
import Confident from './pages/posts/Confident';
import GoodListener from './pages/posts/GoodListener';
import GoodSpeaker from './pages/posts/GoodSpeaker';


function App() {
  
  return (
    
    <div>
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/label" element={<Label />} />
        <Route path="/newsfeed" element={<NewsFeed />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/whyaugusta" element={<WhyAugusta></WhyAugusta>} />
        <Route path='/contactForm' element={<ContactUs></ContactUs>}/>
        <Route path='/getintouch' element={<Getintouch></Getintouch>}/>
        <Route path='/blog' element={<Blog></Blog>}/>
        <Route path='/airportmanagement' element={<AirportManagement></AirportManagement>}/>
        <Route path="/groundstaff" element={<GroundStaffing></GroundStaffing>}  />
        <Route path='/ticketing' element={<Ticketing></Ticketing>} />
        <Route path='/cabincrew' element={<Cabincrew></Cabincrew>} />
        <Route path="/cargo" element={<AirCargo></AirCargo>} />
        <Route path="/pilot" element={<PilotCourse></PilotCourse>}></Route>
        <Route path ='/post1' element={<Sevenwayspost></Sevenwayspost>} />
        <Route path ='/post2' element={<HandShakepost></HandShakepost>} />
        <Route path ='/post3' element={<Selfdesciplinedpost></Selfdesciplinedpost>} />
        <Route path='/post4' element={<CoffePost></CoffePost>} />
        <Route path='/post5' element={<CommonMistakes></CommonMistakes>} />
        <Route path='/post6' element={<HotelManagementTips></HotelManagementTips>} />
        <Route path='/post7' element={<Email></Email>} />
        <Route path='/post8' element = {<Interview></Interview>} />
        <Route path='/post9' element = {<Confident></Confident>} />
        <Route path='/post10' element={<GoodSpeaker></GoodSpeaker>}></Route>
        <Route path='/post11' element={<GoodListener></GoodListener>} />
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
