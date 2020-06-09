import React  , {useEffect , useState} from 'react';
import { Link , withRouter} from 'react-router-dom';
import SideMenu from "../components/sidemenu/SideMenu";
import "./ToolBar.css";
import s from "./t.module.css";
import logo from '../../sevanLogo.png'
import Flag from './flag/flag';
import {
	setTranslations,
	setDefaultLanguage,
	setLanguageCookie,
	setLanguage,
	translate,
  } from 'react-switch-lang';


  import en from '../../../en.json';
  import am from '../../../am.json';


  // Do this two lines only when setting up the application
setTranslations({ en, am });
setDefaultLanguage('en');
 
// If you want to remember selected language
setLanguageCookie();




const toolbar = (props) => {
  const {obj} = props;
  const { t } = props;
  // console.log(arr)
  const handleSetLanguage = (key) => () => {
		setLanguage(key);
	  };

return (
  <div>
   
      <header className="toolbar" key={t.id}>
    
      <nav className="toolbarNavigator">
        <div />
        <div className="toggle-btn">
          <SideMenu click={props.drawerToggleClickHandler} />
        </div>
        <div className="toolbar_logo">
          <Link to="/"><img src={logo} /></Link>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <span>
                  <Link className={s.link} to={'/'}>{t('header.home')}</Link>
              </span>
            </li>
  
            <div className={s.divs} />
            <li>
              <Link className={"link"} to={`/about/page/${props.match.params.id ? +props.match.params.id : 1}`} >{t('header.about')} </Link>
            </li>
            <div className={s.divs} />
          
            <li>
              <ul className={s.menu}>
                <ul>
                  <li>
                    <Link className={"link"} to="#">	{t('header.place')}&darr;</Link>
  
                    <ul className={s.uls}>
                      <li>
                        <Link className={"link"} to={ `/attraction/page/${props.match.params.id ? +props.match.params.id : 1}`}>{t('header.attraction')}</Link>
                      </li>
  
                      <li>
                        <Link className={"link"} to="/transport"> {t('header.transport')}</Link>
                      </li>
                      <li>
                        <Link className={"link"} to={ `/cafe/page/${props.match.params.id ? +props.match.params.id : 1}`}>{t('header.cafe')}</Link>
                      </li>
                      <li>
                        <Link className={"link"} to={ `/restaurant/page/${props.match.params.id ? +props.match.params.id : 1}`}>{t('header.restaurant')}</Link>
                      </li>
                      <li>
                        <Link className={"link"} to="/bank">{t('header.bank')}</Link>
                      </li>
                      <li>
                        <Link className={"link"} to={ `/shop/page/${props.match.params.id ? +props.match.params.id : 1}`}>{t('header.shop')}</Link>
                      </li>
                      <li>
                        <Link className={"link"} to="/sport">{t('header.sport')}</Link>
                      </li>
                      <li>
                        <Link className={"link"} to={ `/cps/page/${props.match.params.id ? +props.match.params.id : 1}`}>{t('header.cps')}</Link>
                      </li>
                      <li>
                        <Link className={"link"} to="/craftsman">{t('header.craft')}</Link>
                      </li>
                      
                    </ul>
                  </li>
                </ul>
              </ul>
            </li>
            <div className={s.divs} />
            <li>
              <Link className={s.links} to="/news">{t('header.news')}</Link>
            </li>
            <div  className={s.divs} />
  
            <li>
             <Link className={s.links} to="/contact">{t('header.contact')}</Link>
            </li>
            <div className={s.divs} />
           
            <li>
              <Flag />
            </li>
          </ul>
        </div>
      </nav>
  
    </header>
   
  
  </div>
)
};

export default translate(withRouter(toolbar));
