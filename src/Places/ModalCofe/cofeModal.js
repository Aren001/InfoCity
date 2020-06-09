import React from 'react';
import {withRouter} from 'react-router-dom';
import s from './modal.module.css';
import r from './respmodal.module.css';


// Translation Higher Order Component
import {
	setTranslations,
	setDefaultLanguage,
	setLanguageCookie,
	setLanguage,
	translate,
  } from 'react-switch-lang';


  import en from '../../en.json';
  import am from '../../am.json';


  // Do this two lines only when setting up the application
setTranslations({ en, am });
setDefaultLanguage('en');
 
// If you want to remember selected language
setLanguageCookie();





const Modal = (props) => {
    const { modalCont, modal, handleClose , modalPic, t } = props;
    
    return (
        <div style={{display: modal ? "block" : "none"}} className={`${s.container} ${r.container}`}>
            <div className={`${s.conteners} ${r.conteners}`}>
                <div className={`${s.modalC} ${r.modalC}`}>
                    <div >
                         < span className={s.buttons} onClick={() => handleClose()}>&times;</span>
                       <h2> {t(`cafe.${modalCont.id}.name`)} </h2>
                    </div>
                    <div className={`${s.restImg} ${r.restImg}`}>
                        <img src={modalCont.srcImg} alt={modalCont.name} />
                    </div> 
                
                </div>
                <div className={`${s.line} ${r.line}`}></div>
                <div className={`${s.menuImgCont} ${r.menuImgCont}`}>
                    <div >
                       <span><img className={`${s.menuImg} ${r.menuImg}`} src={modalPic.src1} alt={modalCont.name} /></span> 
                       <span> {t(`cafe.${modalCont.id}.menu.x1`)} </span>
                    </div>
                    <div >
                       <span><img className={`${s.menuImg} ${r.menuImg}`} src={modalPic.src2} alt={modalCont.name} /></span> 
                       <span> {t(`cafe.${modalCont.id}.menu.x2`)} </span>
                    </div>
                    <div >
                       <span><img className={`${s.menuImg} ${r.menuImg}`} src={modalPic.src3} alt={modalCont.name} /></span> 
                       <span> {t(`cafe.${modalCont.id}.menu.x3`)} </span>
                    </div>
                    <div >
                       <span><img className={`${s.menuImg} ${r.menuImg}`} src={modalPic.src4} alt={modalCont.name} /></span> 
                       <span> {t(`cafe.${modalCont.id}.menu.x4`)} </span>
                    </div>
                    <div >
                       <span><img className={`${s.menuImg} ${r.menuImg}`} src={modalPic.src5} alt={modalCont.name} /></span> 
                       <span> {t(`cafe.${modalCont.id}.menu.x5`)} </span>
                    </div>
                    <div >
                       <span><img className={`${s.menuImg} ${r.menuImg}`} src={modalPic.src6} alt={modalCont.name} /></span> 
                       <span> {t(`cafe.${modalCont.id}.menu.x6`)} </span>
                    </div>
                    <div >
                       <span><img className={`${s.menuImg} ${r.menuImg}`} src={modalPic.src7} alt={modalCont.name} /></span> 
                       <span> {t(`cafe.${modalCont.id}.menu.x7`)} </span>
                    </div>
                    <div >
                       <span><img className={`${s.menuImg} ${r.menuImg}`} src={modalPic.src8} alt={modalCont.name} /></span> 
                       <span> {t(`cafe.${modalCont.id}.menu.x8`)} </span>
                    </div>
                    <div >
                       <span><img className={`${s.menuImg} ${r.menuImg}`} src={modalPic.src1} alt={modalCont.name} /></span> 
                       <span> {t(`cafe.${modalCont.id}.menu.x9`)} </span>
                    </div>
                    
                        {/* <button onClick={() => handleClose()}>closss</button> */}
                   
                </div>   
                    
            </div>
        </div>
    )
};

export default translate(withRouter(Modal));