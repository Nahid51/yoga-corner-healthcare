import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Session from './Pages/Appoinment/Session/Session';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Redirect/PrivateRoute';
import Register from './Pages/Register/Register';
import Blogs from './Pages/Blogs/Blogs';
import BlogDetail from './Pages/Blogs/Blog/BlogDetail/BlogDetail';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <Session></Session>
            </PrivateRoute>s
            <Route path="/blog">
              <Blogs></Blogs>
            </Route>
            <PrivateRoute path="/blog/:blogId">
              <BlogDetail></BlogDetail>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
