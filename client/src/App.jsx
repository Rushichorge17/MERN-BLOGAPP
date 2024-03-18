import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
// import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import SignUp from './pages/SignUp';
 import Header from './components/Header';
 import Footer from './components/Footer';
// import PrivateRoute from './components/PrivateRoute';
// import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
// import CreatePost from './pages/CreatePost';
// import UpdatePost from './pages/UpdatePost';
import PostPage from './pages/PostPage';
// import ScrollToTop from './components/ScrollToTop';
import Search from './pages/Search';
import TermsAndConditions from './pages/Terms & Conditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQs from './pages/FAQs';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
export default function App() {
  return (
   <BrowserRouter>
      {/* <ScrollToTop /> */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/search' element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route el ement={<OnlyAdminPrivateRoute/>}>
          <Route path='/create-post' element={<CreatePost />} />
          {/* <Route path='/update-post/:postId' element={<UpdatePost />} /> */}
        </Route>

        <Route path='/projects' element={<Projects />} />
        <Route path='/post/:postSlug' element={<PostPage />} />

        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/faqs" element={<FAQs />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}