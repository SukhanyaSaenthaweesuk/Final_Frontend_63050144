import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";

function App(){
    return (
        <>
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Router exact path="/about" component={about} />
                <Router exact path="/courses" component={course} />
                <Router exact path="/team" component={team} />
                <Router exact path="/pricing"component={pricing} />
                <Route exact
            </Switch>


        </Router>
        
        
        
        </>




    )




}