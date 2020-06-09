import React , {useEffect , useState} from 'react';
import {withRouter} from 'react-router-dom';
import s from './news.module.css';

import Loading from '../Loading/Loading';
import HomeOne from '../About/home1';


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


const News = (props) => {
	 
    const {  history } = props;
	const [loading, setLoading] = useState(false);
	const [arr, setArr] = useState([]);
	const [obj , setObj] = useState({});
	const [error, setError] = useState('');

	const {t} = props;

	

	const fetchS = () => {
		setLoading(true);
		fetch('https://run.mocky.io/v3/978029c2-6aef-44dc-abdd-767533db36f3')
			.then(resp => resp.json().then(data => {
				if (resp.ok) {
					return data;
				} else return Promise.reject(data);
			}))
			.then(data => {
				setLoading(false);
				// console.log(data.news);
				setArr(data.news);
				setObj(data.homeNews);
				
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
		<div className="super_container">

		<HomeOne src={obj.src} name={t('homeNews.name')} />

		<div className={s.cont}>
		{/* <HomeOne src='./images/sevanNews.jpg'  name='News'/> */}
		<div className={s.flexContainer}>
				   <div className={s.conte}>
					   {
						   arr.map((item) => {
							   return (
								   <nav  key={item.id} onClick={() => history.push(`/maynews/${item.id}`)} >
									   <div className={s.div1}>
										   <p>{t(`news.${item.id}.name`)}</p>
										   <img className={s.imig} src={item.srcImg} />
										  
									   </div>
							   
								   </nav>
							   )
						   })
					   }
				   </div>
				   
				   
		</div>
		
		</div>
		</div>

    )
}
export default  translate(withRouter(News));







