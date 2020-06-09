import React , {useEffect , useState} from 'react';

import HomeOne from '../About/home1';
import './contact.css';
import './contact_resp.css';
import Loading from '../Loading/Loading';


// Translation Higher Order Component
import {
	setTranslations,
	setDefaultLanguage,
	setLanguageCookie,
	setLanguage,
	translate,
  } from 'react-switch-lang';


  import en from '../en.json';
  import am from '../am.json';


  // Do this two lines only when setting up the application
setTranslations({ en, am });
setDefaultLanguage('en');
 
// If you want to remember selected language
setLanguageCookie();



const Contact = (props) => {

    const [loading, setLoading] = useState(false);

    const [arr, setArr] = useState([]);
    const [error, setError] = useState('');
    const [obj , setObj] = useState({});
    const [obj1 , setObj1] = useState({});
    const {t} = props;





    const fetchS = () => {
        setLoading(true);
        fetch('https://run.mocky.io/v3/85bf4aff-974a-4426-9c2f-d3e518fda646')
            .then(resp => resp.json().then(data => {
                if (resp.ok) {
                    return data;
                } else return Promise.reject(data);
            }))
            .then(data => {
                setLoading(false);
                // console.log(data);
                setObj(data.contacts);
                setArr(data.contact);
                setObj1(data.mapInfo);
            })
            .catch(err => {
                console.log(err, 'EROR');
                setLoading(false);
                setError(err);
            })
    };




    useEffect(() => {
        fetchS();


    }, [])






    // function pagination



    if (loading) {
        return <div className="loading-container"><Loading/></div>
    }
    if (error) {
        return <div className="error">{error}</div>
    }

    return (
        <div className='super_container'>


            <HomeOne src={obj.src} name={t('contacts.name')} />



            {/* <!-- Contact --> */}

            {
                arr.map(item => {
                    return (
                        <div className="contact_section" key={item.id}>
                            <div className="container">
                                <div className="row">

                                    {/* <!-- Contact Content --> */}
                                    <div className="col-lg-5">
                                        <div className="contact_content">
                                            <div className="contact_logo">
                                                <div className="logo">
                                                   
                                                        <div style={{ color: "Black" }}> {t(`contact.${item.id}.name`)} </div>
                                                        <div>{t(`contact.${item.id}.iName`)}</div>
                                                  
                                                </div>
                                            </div>
                                            <div className="contact_section_text">
                                                <p><iframe src={item.srcMap} width="300" height="200"  aria-hidden="false" ></iframe></p>
                                            </div>
                                            <div className="contact_section_info">
                                                <ul>
                                                    <li className="d-flex flex-row align-items-center justify-content-start">
                                                        <div><div className="d-flex flex-column align-items-center justify-content-center"><img src="./images/contact/icon_1.png" alt="" /></div></div>
                                                        <div>{t(`contact.${item.id}.address`)}</div>
                                                    </li>
                                                    <li className="d-flex flex-row align-items-center justify-content-start">
                                                        <div><div className="d-flex flex-column align-items-center justify-content-center"><img src="./images/contact/icon_2.png" alt="" /></div></div>
                                                        <div>{t(`contact.${item.id}.phone`)}</div>
                                                    </li>
                                                    <li className="d-flex flex-row align-items-center justify-content-start">

                                                        <div><a href={item.link} style={{color:"black"}}>LINK</a></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Contact Image --> */}
                                    <div className="col-lg-7 contact_section_col">
                                        <div className="contact_image"><img src={item.srcImg} alt={item.name} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }


            {/* <!-- Contact --> */}

            <div className="contact">
                <div className="container">
                    <div className="row">

                        {/* <!-- Contact Map --> */}
                        <div className="col-xl-6">
                            <div className="contact_map_container">

                                {/* <!-- Contact Map --> */}
                                <div className="contact_map">

                                    {/* <!-- Google Map --> */}
                                    <div className="map">
                                        <iframe className="google_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68606.47790037675!2d44.907454135817176!3d40.54144311812957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404046c39477eb71%3A0xeb5b902ad8d28d76!2z0KHQtdCy0LDQvSwg0JDRgNC80LXQvdC40Y8!5e0!3m2!1sru!2s!4v1589204241171!5m2!1sru!2s" width="600" height="450" aria-hidden="false" ></iframe>

                                    </div>

                                </div>

                                {/* <!-- Contact Info Box --> */}
                                <div className="contact_info_box d-flex flex-column align-items-center justify-content-center">
                                    <ul className="contact_info_list">
                                        <li className="d-flex flex-row align-items-start justify-content-start">
                                            <div><div className="contact_info_icon d-flex flex-column align-items-center justify-content-center"><img src="./images/placeholder.png" alt="" /></div></div>
                                            <div className="contact_info_text"> {t('mapInfo.address')} </div>
                                        </li>
                                        <li className="d-flex flex-row align-items-center justify-content-start">
                                            <div><div className="contact_info_icon d-flex flex-column align-items-center justify-content-center"><img src="./images/smartphone.png" alt="" /></div></div>
                                            <div className="contact_info_text">{t('mapInfo.phone')}</div>
                                        </li>
                                        <li className="d-flex flex-row align-items-center justify-content-start">
                                            <div><div className="contact_info_icon d-flex flex-column align-items-center justify-content-center"><img src="./images/mail.png" alt="" /></div></div>
                                            <div className="contact_info_text">{t('mapInfo.mail')}</div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        {/* <!-- Contact Form --> */}
                        <div className="col-xl-6 contact_col">
                            <div className="contact_form_container">
                                <div className="section_title_container_2">
                                    <div className="section_title"><h1>{t('mapInfo.contactInfo')}</h1></div>
                                    <div className="section_text">---</div>
                                </div>
                                <form action="#" className="contact_form" id="contact_form">
                                    <div className="row contact_row">
                                        <div className="col-md-6"><input type="text" className="contact_input" placeholder={t('mapInfo.name')} required="required" /></div>
                                        <div className="col-md-6"><input type="email" className="contact_input" placeholder="E-mail" required="required" /></div>
                                    </div>
                                    <div><textarea className="contact_input contact_textarea" placeholder={t('mapInfo.message')} required="required"></textarea></div>
                                    <button className="contact_button">{t('mapInfo.but')}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default  translate(Contact);