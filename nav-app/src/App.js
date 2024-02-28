import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from './components/Footer';
import ERPimplementation from './components/ERPimplementation';
import Androidapplication from './components/Androidapplication';
import Csd from './components/Csd';
import Datamigration from './components/Datamigration';
import Certificates from './components/Certificates';
import Loanmanagement from './components/Loanmanagement';
import Hotelmanagement from './components/Hotelmanagement';
import Educationmanagement from './components/Educationmanagement';
import Healthcaremanagement from './components/Healthcaremanagement';
import Salonmanagement from './components/Salonmanagement';
import Gymmanagement from './components/Gymmanagement';
import Constructionmanagement from './components/Constructionmanagement';
import Realestatemanagement from './components/Realestatemanagement';
import Roastermanagement from './components/Roastermanagement';
import Otherproductmanagement from './components/Otherproductmanagement';
import Aboutjupical from './components/Aboutjupical';
import Businessmodel from './components/Businessmodel';
import Ourexperts from './components/Ourexperts';
import Contact from './components/Contact';
import Careers from './components/Careers';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import CreatePost from './components/Createpost';
import Categories from './components/Categories';
import DetailViews from './components/DetailViews';
import UpdatePost from './components/UpdatePost';
import CareerForm from './components/CareerForm';
import Job_form from './components/Job_form';
import JobResponseForm from './components/JobResponseForm';
import Casestudy from './components/Casestudy';
import BlogResponse from './components/BlogResponse';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/erpimplementation" element={<ERPimplementation />} />
          <Route path="/Android-application" element={<Androidapplication />} />
          <Route path="/Customer-software-development" element={<Csd />} />
          <Route path="/Data-migration" element={<Datamigration />} />
          <Route path="/Certificates" element={<Certificates />} />
          <Route path="/Loan-management" element={<Loanmanagement />} />
          <Route path="/Hotel-management" element={<Hotelmanagement />} />
          <Route path="/Education-management" element={<Educationmanagement />} />
          <Route path="/Healthcare-management" element={<Healthcaremanagement />} />
          <Route path="/Salon-management" element={<Salonmanagement />} />
          <Route path="/Gym-management" element={<Gymmanagement />} />
          <Route path="/Construction-management" element={<Constructionmanagement />} />
          <Route path="/Realestate-management" element={<Realestatemanagement />} />
          <Route path="/Roaster-management" element={<Roastermanagement />} />
          <Route path="/Other-product-management" element={<Otherproductmanagement />} />
          <Route path="/About-jupical" element={<Aboutjupical />} />
          <Route path="/Business-model" element={<Businessmodel />} />
          <Route path="/Our-experts" element={<Ourexperts />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Career-and-job-opening" element={<Careers />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Blog/BlogDetail/:id" element={<BlogDetail />} />
          <Route path="/Createpost" element={<CreatePost />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Categories/DetailViews/:id" element={<DetailViews />} />
          <Route path="/update/:id" element={<UpdatePost />} />
          <Route path="/CareerForm" element={<CareerForm />} />
          <Route path='/job/job_form/:jobName' element={<Job_form />} />
          <Route path="/JobResponseForm" element={<JobResponseForm />} />
          <Route path="/BlogResponse" element={<BlogResponse />} />
          <Route path="/Case-study" element={<Casestudy />} />
        </Routes>
        
        <Footer />  
        
      </BrowserRouter>
    </div>
  );
}

export default App;
