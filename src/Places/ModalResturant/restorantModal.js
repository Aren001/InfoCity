import React from 'react';
import {withRouter} from 'react-router-dom';
import s from './restorant.module.css';
import r from './restorantResp.module.css';
// import b from './button.module.css';

const ModalRestorant = (props) => {
    const { modalCont, modal, handleClose, modalPic } = props;
    
    return (
        <div className={`${s.container} ${r.container}`}>
            <div className={`${s.modalContener} ${r.modalContener}`}>
                    <div>
                    < span className={s.buttons} onClick={() => handleClose()}>&times;</span>
                    </div>
                <div>
                    <h2>{modalCont.name}</h2>
                </div>
                <div>
                    {/* <img src={modalCont.srcImg} alt={modalCont.name} /> */}
                </div>
               
               <div className={`${s.imgContener} ${r.imgContener}`}>
                    <img src={modalPic.src1} />
                    <img src={modalPic.src2} />
                    <img src={modalPic.src3} />
                    <img src={modalPic.src4} />
              </div>
                {/* <button onClick={() => handleClose()}>closss</button> */}
                {/* <button className={b.glowonhover} type="button">MENU</button> */}
                            
            </div>
           
        </div>
    )
};

export default withRouter(ModalRestorant);

