import React , {useEffect , useState} from 'react';
import Loading from '../Loading/Loading';
import {Link} from 'react-router-dom';
// import smayl from './images/smayl.png';
// import contact from './images/contact1.png';
// import phone from './images/phone.png';
// import email from './images/email.png';
// import gmail from './images/gmail.png';
// import s from './footer.module.css';
import './footer.css';

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




const Footer = (props) => {

	const [loading, setLoading] = useState(false);
	const [obj, setObj] = useState({});
	const [error, setError] = useState('');
	const {t} = props;

	

	const fetchS = () => {
		setLoading(true);
		fetch('https://run.mocky.io/v3/68ce25bc-3109-4d7c-8ac6-6c9737c2df77')
			.then(resp => resp.json().then(data => {
				if (resp.ok) {
					return data;
				} else return Promise.reject(data);
			}))
			.then(data => {
				setLoading(false);
				// console.log(data);
				setObj(data.foother);
				
			})
			.catch(err => {
				console.log(err, 'EROR');
				setLoading(true);
				setError(err);
			})
	}

	useEffect(() => {
		fetchS();
	}, [])




	if (loading) {
		return <div className="loading-container"><Loading/></div>
	}
	if (error) {
		return <div className="error">{error}</div>
	}

    return (
        <footer className="page-footer" >

				<div className="container text-center text-md-left">
	  
		  
	  <div className="row">

	  
		  <div className="col-md-4 mx-auto">

		
		<h5 className="font-weight-bold text-uppercase mt-3 mb-4"> {t('foother.information')} </h5>
		<p> {t('foother.informationTwo')} </p>

		  </div>
	  

		  <hr className="clearfix w-100 d-md-none" />

	  
		  <div className="col-md-2 mx-auto">

		
		<h5 className="font-weight-bold text-uppercase mt-3 mb-4">{t('foother.informationOne')}</h5>
		<i className="fa fa-mobile"></i>
		<ul className="list-unstyled">
		  
		  <li>
			<Link to="#!"> {obj.number} </Link>
		  </li>
		  <li>
			<Link to="#!">{obj.numberTwo}</Link>
		  </li>
		  
		</ul>

		  </div>
	  

		  <hr className="clearfix w-100 d-md-none"/>

	  
		 
	  

		  <hr className="clearfix w-100 d-md-none"/>

	  
		  <div className="col-md-2 mx-auto">

	  
		<h5 className="font-weight-bold text-uppercase mt-3 mb-4">{t('foother.informationTree')}</h5>
		<i className="fa fa-envelope"></i>
		<ul className="list-unstyled">
		<li>
			<Link to="#!"> {obj.email} </Link>
		  </li>
		  <li>
			<Link to="#!"> {obj.gmail} </Link>
		  </li>
		  
		</ul>

		  </div>
  

	  </div>
  

  </div>


  

  <hr/>

  


  <div className="footer-copyright text-center py-3">© 2020 SevanInfo:
	
  </div>
	  
	  </footer>
    )
}
export default translate(Footer);

