import React, { useState, useEffect } from 'react';

import HomeOne from '../About/home1';

import Pagination from '../About/pagination';

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


const Shop = (props) => {


	const { history } = props;

	const [loading, setLoading] = useState(false);
	const [obj, setObj] = useState({});
	const [arr, setArr] = useState([]);
	const [descript, setDescript] = useState({});
	const [page, setPage] = useState(props.match.params.id ? +props.match.params.id : 1);
	const [perPage, setPerPage] = useState(3);
	const [error, setError] = useState('');
	const {t} = props;



	const fetchS = () => {
		setLoading(true);
		fetch('https://run.mocky.io/v3/04fcf51d-1c62-4e35-9359-b935a84b33c2')
			.then(resp => resp.json().then(data => {
				if (resp.ok) {
					return data;
				} else return Promise.reject(data);
			}))
			.then(data => {
				setLoading(false);
				// console.log(data);
				setArr(data.market);
				setObj(data.homeMarket);
				setDescript(data.descriptionMarket);
			})
			.catch(err => {
				console.log(err, 'EROR');
				setLoading(true);
				setError(err);
			})
	};




	useEffect(() => {
		fetchS();
		history.push(`/shop/page/${page}`);


	}, [page])



	// Get current posts
	const indexOfLastPost = page * perPage;
	const indexOfFirstPost = indexOfLastPost - perPage;
	const changeArr = arr.slice(indexOfFirstPost, indexOfLastPost);


	// function pagination

	const handlePaginationClick = (direction) => {
		let nextPage = page;
		nextPage = direction === "next" ? nextPage + 1 : nextPage - 1;
		setPage(nextPage);

	}

	if (loading) {
		return <div className="loading-container"><Loading /></div>
	}
	if (error) {
		return <div className="error">{error}</div>
	}

	return (
		<div className="super_container">

			<HomeOne src={obj.src} name={t('homeMarket.name')} />


			<div className="blog">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="blog_posts" >

								{
									changeArr.map(item => {
										return (


											<div className="blog_post" key={item.id}>

												<div className="row">

													<div className="col-xl-7 col-lg-6">

														<div className="blog_post_image" >
															<img width="500" height="300" src={item.srcImg} alt={item.name} /></div>
														<iframe src={item.srcMap} width="500" height="200" aria-hidden="false"  ></iframe>
													</div>
													<div className="col-xl-5 col-lg-6">
														<div className="blog_post_content">

															<div className="pb_title"><a href="#">{t(`market.${item.id}.name`)} </a></div>
															<div className="pb_text" >

																<p> {t(`descriptionMarket.address`)}: {t(`market.${item.id}.address`)}</p>
																<p> {t(`descriptionMarket.WorkingTime`)}:  {t(`market.${item.id}.time`)}</p>
																<p> {t(`descriptionMarket.phone`)}: {t(`market.${item.id}.phone`)}</p>
																<p> {descript.link}:  <a href={t.link}>LINK</a></p>


															</div>

														</div>
													</div>
												</div>
												<hr style={{ backgroundColor: '#1D9EB4', height: '5px', borderRadius: '1000%' }} />
											</div>



										)
									})
								}
							</div>

						</div>
					</div>
				</div>
			</div>

			<Pagination
				page={page}
				perPage={perPage}
				totalPosts={arr.length}
				paginate={handlePaginationClick}
			/>

		</div>
	)
}
export default  translate(Shop);