import React , {useEffect , useState} from 'react';
import Loading from '../../Loading/Loading';
import { withRouter } from 'react-router-dom';
import './details.css';


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


const Details = (props) => {
   
	const [loading, setLoading] = useState(false);
	const [obj, setObj] = useState({});
	const [error, setError] = useState('');
	const {t} = props;


   
    console.log( props)

	const fetchS = () => {
        const newsId = props.match.params.id;
        
		setLoading(true);
		fetch('https://run.mocky.io/v3/978029c2-6aef-44dc-abdd-767533db36f3')
			.then(resp => resp.json().then(data => {
				if (resp.ok) {
					return data;
				} else return Promise.reject(data);
			}))
			.then(data => {
                setLoading(false);
                for(let x=0; x < data.news.length; x++ ){
                    if ( data.news[x].id == newsId) {
						setObj(data.news[x]);
						// console.log(data.news[x],'10000')
                    }; 
                };
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


    const  handleBack = () => {
        props.history.goBack()
      };

	if (loading) {
		return <div className="loading-container"><Loading/></div>
	}
	if (error) {
		return <div className="error">{error}</div>
	}
    // console.log(obj)
    return (
		<div className="Detail">
		<button onClick={handleBack}  style={{width:'100px' , height:'50px'}}><i style={{fontSize:'30px'}} className="far fa-hand-point-left"></i>↲</button>
		
		<div>

		<h1 className="Detail-heading">
		{t(`news.${obj.id}.name`)} {t(`news.${obj.id}.about`)})
	   </h1>

		<div className="Detail-container">
		   <div className="Detail-item">
			    <span className="Detail-value"> {t(`news.${obj.id}.info1`)}</span>
		   </div>

		   <div className="Detail-item">   
			    <span className="Detail-value">{t(`news.${obj.id}.info2`)}</span>
		   </div>

		   <div className="Detail-item">
			   
			   <span className="Detail-value">{t(`news.${obj.id}.name`)}</span>
		   </div>


		   <div className="Detail-item">
			   <span className="Detail-title"></span>
			   <span className="Detail-dollar"></span>
			   {t(`news.${obj.id}.info4`)}
		   </div>

			<div className="Detail-item">
			   <span className="Detail-title"></span>
			   <span className="Detail-dollar"></span>
			   {t(`news.${obj.id}.info5`)}
		   </div>


		   <div className="Detail-item">
			   <span className="Detail-title"></span>
			   {t(`news.${obj.id}.info6`)}
		   </div>
		</div>
		</div>

		
   </div>
    )
}
export default  translate(withRouter(Details));


       


