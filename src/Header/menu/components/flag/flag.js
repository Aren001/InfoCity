import React from 'react';
import  './flag.css';
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

const Flag = ( ) => {
    const handleSetLanguage = (key) => () => {
		setLanguage(key);
	  };
    return (
        <div className="sec">
            <div className="" style={{ textAlign: "center"  }}>
            <button className="icon-btn add-btn" onClick={ handleSetLanguage('am')}>
                <div className="add-icon"></div>
                <div className="btn-txt">AM</div>
            </button>
            </div>
            
            <div className="" style={{ textAlign: "center"  }}>
                <button className="icon-btns add-btn" onClick={  handleSetLanguage('en')}>  
                    <div className="btn-txt">EN</div>
                </button>
            </div>
       </div>
        
    )
};

export default translate(Flag);