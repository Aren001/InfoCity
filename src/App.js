import React from 'react';

import { Switch , Route, withRouter  } from 'react-router-dom';

import Header from './Header/header';

import Footer from './Footer/footer';

import Home from './Home/home';

import About from './About/about';

import Attraction from './Places/attraction';

import CafeBar from './Places/cafe';

import Restaurant from './Places/resturant';

import Bank from './Places/bank';

import Shop from './Places/shop';

import Sport from './Places/sport';

import Cps from './Places/cps';

import Craftsman from './Places/craftsman';

import Transport from './Places/Transport';

import News from './News/news';

import Contact from './Contact/contact';

import Details from './News/detalis/detalis';



const App = (props) => {
    const {location} = props;

    return (
        <div className="divConteners">
            <Header/>
            <Switch>
                <Route exact path = '/' component = {Home} />
                <Route exact  path={location.pathname === '/about' ? '/about' : '/about/page/:id'}   component = {About} />
                <Route path={location.pathname === '/attraction' ? '/attraction' : '/attraction/page/:id'} component = {Attraction} />
                <Route path={location.pathname === '/cafe' ? '/cafe' : '/cafe/page/:id'} component = {CafeBar} />
                <Route path={location.pathname === '/restaurant' ? '/restaurant' : '/restaurant/page/:id'} component = {Restaurant} />
                <Route path='/bank' component = {Bank} />
                <Route path={location.pathname === '/shop' ? '/shop' : '/shop/page/:id'} component = {Shop} />
                <Route path = "/sport" component = {Sport} />
                <Route path={location.pathname === '/cps' ? '/cps' : '/cps/page/:id'} component = {Cps} />
                <Route path = "/craftsman" component = {Craftsman} />
                <Route path = "/transport" component = {Transport} />
                <Route path = "/news" component = {News} />
                <Route path='/maynews/:id'  exact  component={Details} />
                <Route path = "/contact" component = {Contact} />
            </Switch>
            <Footer/>
        </div>
    )
}
export default withRouter(App);

