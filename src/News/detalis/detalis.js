import React , {useEffect , useState} from 'react';
import Loading from '../../Loading/Loading';
import { withRouter } from 'react-router-dom';
import AsNavFor from './slider/slider';
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
	const [imgs, setImgs] = useState({});
	const [error, setError] = useState('');
	const {t} = props;


   
    console.log( props)

	const fetchS = () => {
        const newsId = props.match.params.id;
        
		setLoading(true);
		fetch('https://run.mocky.io/v3/461103e2-8c82-49fd-81ef-45e464cfa535')
			.then(resp => resp.json().then(data => {
				if (resp.ok) {
					return data;
				} else return Promise.reject(data);
			}))
			.then(data => {
				setLoading(false);
				// console.log(data)
                for(let x=0; x < data.news.length; x++ ){
                    if ( data.news[x].id === newsId) {
						setObj(data.news[x]);
						setImgs(data.news[x].images)
						
						// console.log(data.news[x].images,'10000')
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

	//<CenterMode />
    return (
		<div className="Detail">
			
			
			<div className={"Detail-container"}>
				<button className={"Detail-btn"} onClick={handleBack}> <span className="Detail-span">	&larr;</span> Back</button>
				<div>
					<h3 className="Detail-heading">
						{obj.name}	
					</h3>
				</div>
				<div>
					<h4 className="Detail-heading">
						{obj.info1}
					</h4>
				</div>
				
				<div className={"Detail-line"} />
				 <AsNavFor imgs={imgs} />
				 <hr />
				<div >
					<h4 className="Detail-text">
						
						{obj.info3}
					</h4>
				</div>
				<hr />
				<div>
					<h4 className="Detail-text">
						{obj.info4}<span className={'smayl'}>&#128521;</span>
					</h4>
				</div>
				<hr />
				<div>
					<h4 className="Detail-text">
						{obj.info5}
					</h4>
				</div>
				<hr />
				<div>
					<h4 className="Detail-text">
						{obj.info6}
					</h4>
				</div>
				
			</div>
			
		
   		</div>
    )
}
export default  translate(withRouter(Details));

//  <div>
		
// <h1 className="Detail-heading">
// {t(`news.${obj.id}.name`)} {t(`news.${obj.id}.about`)})
// </h1>

// <div className="Detail-container">
//    <div className="Detail-item">
// 		<span className="Detail-value"> {t(`news.${obj.id}.info1`)}</span>
//    </div>

//    <div className="Detail-item">   
// 		<span className="Detail-value">{t(`news.${obj.id}.info2`)}</span>
//    </div>

//    <div className="Detail-item">
	   
// 	   <span className="Detail-value">{t(`news.${obj.id}.name`)}</span>
//    </div>


//    <div className="Detail-item">
// 	   <span className="Detail-title"></span>
// 	   <span className="Detail-dollar"></span>
// 	   {t(`news.${obj.id}.info4`)}
//    </div>

// 	<div className="Detail-item">
// 	   <span className="Detail-title"></span>
// 	   <span className="Detail-dollar"></span>
// 	   {t(`news.${obj.id}.info5`)}
//    </div>


//    <div className="Detail-item">
// 	   <span className="Detail-title"></span>
// 	   {t(`news.${obj.id}.info6`)}
//    </div>
// </div>
// </div> 



       


