import React , {useEffect , useState} from 'react';

import HomeOne from '../About/home1';

import Pagination from '../About/pagination';

import Loading from '../Loading/Loading';

import ModalRestorant from './ModalResturant/restorantModal';

import s from './ModalResturant/restorant.module.css';

import Modal from './ModalHotel/hotelModal';

import ss from './ModalHotel/modal.module.css'

import b from './ModalResturant/button.module.css';




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
 




const Restaurant = (props) => {

	const { history } = props;

	const [loading, setLoading] = useState(false);
	const [obj , setObj] = useState({});
	const [arr, setArr] = useState([]);
	const [descript , setDescript] = useState({});
	const [page, setPage] = useState(props.match.params.id ? +props.match.params.id : 1);
	const [perPage, setPerPage] = useState(3);
	const [error, setError] = useState('');
	//Modal pictures

	const [modalCont, setModalCont] = useState("");
	const [modalPic, setModalPic] = useState({});
	const [modal, setModal] = useState(false);
	// Modal menu
	const [modalContOne, setModalContOne] = useState("");
	const [modalOne, setModalOne] = useState(false);
	const [modalPicOne, setModalPicOne] = useState({});
	const {t} = props;




	const fetchS = () => {
		setLoading(true);
		fetch('https://run.mocky.io/v3/9efe9c72-dba1-4c89-a45f-edb83455e4f8')
			.then(resp => resp.json().then(data => {
				if (resp.ok) {
					return data;
				} else return Promise.reject(data);
			}))
			.then(data => {
				setLoading(false);
				// console.log(data);
				setArr(data.hotel);
				setObj(data.homeHotel);
				setDescript(data.descriptionHotel);
			})
			.catch(err => {
				console.log(err, 'EROR');
				setLoading(true);
				setError(err);
			})
	}



	useEffect(() => {
		fetchS();
		history.push(`/restaurant/page/${page}`);


	}, [page])



	// Get current posts
	const indexOfLastPost = page * perPage;
	const indexOfFirstPost = indexOfLastPost - perPage;
	const changeArr = arr.slice(indexOfFirstPost, indexOfLastPost);
	console.log(changeArr)


	// function pagination

	const handlePaginationClick = (direction) => {
		let nextPage = page;
		nextPage = direction === "next" ? nextPage + 1 : nextPage - 1;
		setPage(nextPage);

	}


	// Modals
	const hendleClick = value => {
		setModalCont(value);
		setModalPic(value.picture)

		// console.log(modalCont);
		setModal(!modal);
	  };
	  
     const handleClose = () => {
        setModal(false);
	  };
	  
	  //Modal MENU

	  const hendleClickOne = valueOne => {
		setModalContOne(valueOne);
		setModalPicOne(valueOne.menu);
		// console.log(modalCont);
		setModalOne(!modalOne);
	  };
	  
     const handleCloseOne = () => {
        setModalOne(false);
      };



	if (loading) {
		return <div className="loading-container"><Loading/></div>
	}
	if (error) {
		return <div className="error">{error}</div>
	}

    return (
        <div className="super_container">

    <HomeOne  src={obj.src}  name={t('homeHotel.name')} />


        <div className="blog">
		<div className="container">
			<div className="row">
				<div className="col">

					
					<div className="blog_posts">
						
						
						{
                            changeArr.map(item => {
                                return (
                                    <div className="blog_post" key={item.id}>
                            
								<div className="row">
                                
								<div className="col-xl-7 col-lg-6">
                                    
                                    <div className="blog_post_image" >
                                        <img width="500" height="300" src={item.srcImg} alt={item.name} onClick={() => hendleClick(item)} />
									</div>
                                    <iframe src={item.srcMap} width="500" height="200"  aria-hidden="false"  ></iframe>
								</div>
								<div className="col-xl-5 col-lg-6">
									<div className="blog_post_content">
										
										<div className="pb_title"><a href="#"> {t(`hotel.${item.id}.name`)} </a></div>
										<div className="pb_text" >
                                            <p>{t('descriptionHotel.address')}: {t(`hotel.${item.id}.address`)}</p>
                                            <p>{t('descriptionHotel.WorkingTime')}: {t(`hotel.${item.id}.time`)}   </p>
                                            <p>{t('descriptionHotel.phone')}: {t(`hotel.${item.id}.phone`)}</p>
                                            <p>{t('descriptionHotel.room')}:  {t(`hotel.${item.id}.room`)}</p>
                                            <p>{descript.link}: <a href={item.link} target='blank'>LINK</a></p>
											
												<button className={b.glowonhover}  onClick={() => hendleClick(item)}  type="button">{t('descriptionHotel.picture')}</button>
                                     
											<br/>
											
												<button className={b.glowonhover}  onClick={() => hendleClickOne(item)}  type="button"> {descript.menu}</button>
										</div>
										
									</div>
								</div>
							</div>
                            <hr style={{backgroundColor:'#1D9EB4' , height:'5px' , borderRadius:'1000%' }}/>
                        </div>
                                )
                            })
                        }


				</div>
				</div>
				</div>
				</div>

						{/* Modal restorant */}
						<div 
							className={s.divContainer} 
							style={{ display: modal ? "block" : "none" }}
							// onClick={() => handleClose()}
							
						>
							<ModalRestorant
								modalCont={modalCont} 
								handleClose={ handleClose }
								modal={modal}
								modalPic={modalPic} 
							/>
						</div>

						{/* modal MENU */}
						<div 
							className={ss.divContainer} 
							style={{ display: modalOne ? "block" : "none" }}
							// onClick={() => handleCloseOne()}
							
						>
							<Modal 
								modalCont={modalContOne} 
								handleClose={ handleCloseOne }
								modal={modalOne} 
								modalPic={modalPicOne}
							/>
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
export default translate(Restaurant);