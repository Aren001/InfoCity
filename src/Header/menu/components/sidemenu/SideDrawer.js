import React from "react";
import { Link , withRouter} from 'react-router-dom';
import "./SideDrawer.css";
import s from "./t.module.css";
import Flag from '../flag/flag';
import {
	setTranslations,
	setDefaultLanguage,
	setLanguageCookie,
	setLanguage,
	translate,
  } from 'react-switch-lang';


  import en from '../../../../en.json';
  import am from '../../../../am.json';


  // Do this two lines only when setting up the application
setTranslations({ en, am });
setDefaultLanguage('en');
 
// If you want to remember selected language
setLanguageCookie();

const sideDrawer = props => {
  const { backClose} = props;
  const {obj} = props;
  const { t } = props;

  const handleSetLanguage = (key) => () => {
		setLanguage(key);
	  };
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }
  return (
    <div>
      
          <nav className={drawerClasses.join(" ")} key={t.id}>

              <div className={s.closed} onClick={() => backClose()}> &times;</div>
              <div className={s.menuConteners}>

             < ul className={s.ulss}>
                   <li>
                     <span>
                         <Link to={'/'}>{t('header.home')}</Link>
                     </span>
                   </li>
         
                   
                   <li>
                     <Link to={`/about/page/${props.match.params.id ? +props.match.params.id : 1}`} >{t('header.about')} </Link>
                   </li>
                   
                 
                   <li>
                     <ul className={s.menu} >
                       <ul >
                         <li>
                           <Link to="#">{t('header.place')} &darr;</Link>
         
                           <ul className={s.uls}>
                             <li>
                               <Link to={ `/attraction/page/${props.match.params.id ? +props.match.params.id : 1}`}>{t('header.attraction')}</Link>
                             </li>
         
                             <li>
                               <Link  to="/transport">{t('header.transport')}</Link>
                             </li>
                             <li>
                               <Link to={ `/cafe/page/${props.match.params.id ? +props.match.params.id : 1}`}>{t('header.cafe')}</Link>
                             </li>
                             <li>
                               <Link to={ `/restaurant/page/${props.match.params.id ? +props.match.params.id : 1}`}>{t('header.restaurant')}</Link>
                             </li>
                             <li>
                               <Link  to="/bank">{t('header.bank')}</Link>
                             </li>
                             <li>
                               <Link  to={ `/shop/page/${props.match.params.id ? +props.match.params.id : 1}`}>{t('header.shop')}</Link>
                             </li>
                             <li>
                               <Link  to="/sport">{t('header.sport')}</Link>
                             </li>
                             <li>
                               <Link to={ `/cps/page/${props.match.params.id ? +props.match.params.id : 1}`}>{t('header.cps')}</Link>
                             </li>
                             <li>
                               <Link to="/craftsman">{t('header.craft')}</Link>
                             </li>
                             
                           </ul>
                         </li>
                       </ul>
                     </ul>
                   </li>
                   <div className={s.divs} />
                   <li>
                     <Link to="/news">{t('header.news')}</Link>
                   </li>
                 
         
                   <li>
                    <Link to="/contact">{t('header.contact')}</Link>
                   </li>
                   
                    <li>
                        <Flag />
                    </li>
                   
                 </ul>
                 </div>
           </nav>
    
    </div>
  );
};
export default translate(withRouter(sideDrawer));

{/* <ul>
<li>
  <a href="/">Product</a>
</li>
<li>
  <a href="/">User</a>
</li>
<div className={s.menu}>
  <ul>
    <li>
      <a href="#">Explicabo?</a>
      <ul className={s.uls}>
        <li className={s.lis}>
          <a href="#">Lorem.2</a>
        </li>
        <li className={s.lis}>
          <a href="#">Eveniet.2</a>
        </li>
        <li className={s.lis}>
          <a href="#">Omnis.2</a>
        </li>
        <li className={s.lis}>
          <a href="#">Beatae.2</a>
        </li>
        <li className={s.lis}>
          <a href="#">Lorem.2</a>
        </li>
        <li className={s.lis}>
          <a href="#">Eveniet.2</a>
        </li>
        <li className={s.lis}>
          <a href="#">Omnis.2</a>
        </li>
        <li className={s.lis}>
          <a href="#">Beatae.2</a>
        </li>
      </ul>
    </li>
  </ul>
</div>
<li>
  <a href="/">News</a>
</li>
<li>
  <li>
    <a href="/">Contsct</a>
  </li>
  <input />
</li>
</ul> */}
