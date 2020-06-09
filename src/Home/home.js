import React, { useState, useEffect } from 'react';

import Weathers from '../Weather/App';
import Loading from '../Loading/Loading';
import {API_URL} from './config';
import './home.css';
import './home_resp.css';
import AutoPlay from './slider/slider';
import Font from './font/font';
import s from './slider/slider.module.css';

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



const Home = (props) => {

	const [loading, setLoading] = useState(false);
	const [arr, setArr] = useState([]);
	const [slider, setSlider] = useState({});
	const [error, setError] = useState('');
	const {t} = props;


	const fetchS = () => {
		setLoading(true);
		fetch( `${API_URL}` )
			.then(resp => resp.json().then(data => {
				if (resp.ok) {
					return data;
				} else return Promise.reject(data);
			}))
			.then(data => {
				setLoading(false);
				// console.log(data);
				setArr(data.home);
				setSlider(data.slider)
				// console.log(data.home.slider);
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
		return <div className="loading-container"><Loading /></div>
	}
	if (error) {
		return <div className="error">{error}</div>
	}

	return (
		<div className="homeDiv">
			<Font />
		
			{
				arr.map(tt => {
					return (
						<div className="super_containerr" key={tt.id}>




				<div className="intro">
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="section_title_container text-center">
									<div className="section_title"><h1><b style={{ color: '#1D9EB4' }}> {t(`home.${tt.id}.name`)} </b> </h1></div>

								</div>
							</div>
						</div>
						<div className="row intro_row">


							<div className="col-lg-6 imgcont">
								<div className="mr-3 intro_image">
									<div className="imgcontener">
										<img width='600px' height='500px' src={tt.src} alt={tt.name} />
									</div>
								</div>
							</div>


							<div className="col-lg-6 intro_col">
								<div className="intro_content">
									<div className="quote"><b style={{ color: '#1D9EB4', fontSize: '25px' }}> {t(`home.${tt.id}.historyName`)} </b></div>
									<div className="intro_text">
										<p> {t(`home.${tt.id}.history`)}  <br />
											<a style={{ color: '#1D9EB4' }} href={tt.link} target="blank">LINK</a>
										</p>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>




			</div>
					)
				})
			}
			
			
				
				<div className={"weatherContener"}>
					<div>
				   		<Weathers />
				   </div>
				</div>
			

				<div className="galleryAuto" >
					<div className={s.gallery} >
						<AutoPlay
							slider={slider}
						/>
					</div>
				</div>


									
				<div className="maps" style={{  marginTop: "30px" }}>
					<iframe className="google_maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68606.47790037675!2d44.907454135817176!3d40.54144311812957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404046c39477eb71%3A0xeb5b902ad8d28d76!2z0KHQtdCy0LDQvSwg0JDRgNC80LXQvdC40Y8!5e0!3m2!1sru!2s!4v1589204241171!5m2!1sru!2s" width="auto" height="450" aria-hidden="false" ></iframe>

				</div>



		</div>
	)
};

export default  translate(Home);

