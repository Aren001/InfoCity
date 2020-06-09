import React  , {useEffect , useState} from 'react';

import { Link , withRouter} from 'react-router-dom';

import Loading from '../Loading/Loading';

import {API_URL} from './config';

import Menu from './menu/App';



import './header.css';



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





const Header = (props) => {

	const [loading, setLoading] = useState(false);
	const [obj, setObj] = useState({});
	const [error, setError] = useState('');
	const { t } = props;
	

	const fetchS = () => {
		setLoading(true);
		fetch(`${API_URL}`)
			.then(resp => resp.json().then(data => {
				if (resp.ok) {
					return data;
				} else return Promise.reject(data);
			}))
			.then(data => {
				setLoading(false);
				// console.log(data.header);
				setObj(data.header);
				
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


	// console.log(arr)
    return (
		
		<div className="hiderDiv">
			<Menu obj={obj} />
			{/* <header className="navbar navbar-expand-lg navbar-light position-fixed " style={{  zIndex:'500' , width:'100%' , borderBottom:'5px solid black' , backgroundColor:'#1D9EB4' }}>
			<button className="btn" style={{backgroundColor:"red"}} onClick={ handleSetLanguage('en')}>EN</button>
			<button className="btn" onClick={  handleSetLanguage('am')}>AM</button>
		<Link   to='#' className="navbar-brand"  style={{marginLeft:'200px' , marginRight:'120px' }}><b className="text-white"><i style={{color :'black', fontSize:'25px'}}>S</i>evan</b> <br/><i className='text-secondary'>INFO</i> </Link>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
		<span className="navbar-toggler-icon"></span>
		</button>
		
		<div className="collapse navbar-collapse" id="navbarSupportedContent">
		<ul className="navbar-nav mr-auto " style={{fontSize:'25px'   }} >
			<li className="nav-item active" >
			<Link className="nav-link text-white" to="/"> {t('header.home')} <span className="sr-only"></span></Link>
			</li>
			<li className="nav-item">
			<Link className="nav-link text-white" to={ `/about/page/${props.match.params.id ? +props.match.params.id : 1}`}> {t('header.about')}  </Link>
			</li>
			<li className="nav-item dropdown">
			<Link className="nav-link dropdown-toggle text-white" to='#'  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				{t('header.place')}
			</Link>
			<div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor:'#1D9EB4'}}>
				<Link className="dropdown-item text-white"  to={ `/attraction/page/${props.match.params.id ? +props.match.params.id : 1}`}> {t('header.attraction')} </Link>
				<Link className="dropdown-item text-white" to="/transport"> {t('header.transport')} </Link>
				<Link className="dropdown-item text-white" to={ `/cafe/page/${props.match.params.id ? +props.match.params.id : 1}`}>{t('header.cafe')}</Link>
				<Link className="dropdown-item text-white"  to={ `/restaurant/page/${props.match.params.id ? +props.match.params.id : 1}`}>{t('header.restaurant')}</Link>
				<Link className="dropdown-item text-white" to="/bank">{t('header.bank')}</Link>
				<Link className="dropdown-item text-white"  to={ `/shop/page/${props.match.params.id ? +props.match.params.id : 1}`}>{t('header.shop')}</Link>
				<Link className="dropdown-item text-white" to="/sport">{t('header.sport')}</Link>
				<Link className="dropdown-item text-white"  to={ `/cps/page/${props.match.params.id ? +props.match.params.id : 1}`}>{t('header.cps')}</Link>
				<Link className="dropdown-item text-white" to="/craftsman">{t('header.craft')}</Link>
				
			</div>
			</li>
			<li className="nav-item">
			<Link className="nav-link text-white" to="/news">{t('header.news')}</Link>
			</li>
			<li className="nav-item">
			<Link className="nav-link text-white" to="/contact">{t('header.contact')}</Link>
			</li>
		</ul>
		<form className="form-inline my-2 my-lg-0">
			<input className="form-control mr-sm-2" type="search" placeholder={t('header.search')} aria-label="Search" />
			<button className="btn  my-2 my-sm-0 text-white btn-outline-primary" type="submit" > {t('header.search')} </button>
		</form>
		</div>
		</header>  */}
				 
					
		</div>
    )
}
export default  translate(withRouter(Header));





