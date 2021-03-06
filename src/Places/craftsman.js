import React , {useState , useEffect} from 'react';

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


const Craftsman = (props) => {
    const [loading, setLoading] = useState(false);
    const [obj , setObj] = useState({});
    const [arr, setArr] = useState([]);
    const [descript , setDescript] = useState({});
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(3);
    const [error, setError] = useState('');
    const {t} = props;




    const fetchS = () => {
        setLoading(true);
        fetch('https://run.mocky.io/v3/dc734bf8-d8d8-4381-9416-4f0a1eeac99d')
            .then(resp => resp.json().then(data => {
                if (resp.ok) {
                    return data;
                } else return Promise.reject(data);
            }))
            .then(data => {
                setLoading(false);
                // console.log(data);
                setArr(data.craftsman);
                setObj(data.craft);
                setDescript(data.descriptionMix);
            })
            .catch(err => {
                console.log(err, 'EROR');
                setLoading(true);
                setError(err);
            })
    };




    useEffect(() => {
        fetchS();


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
        return <div className="loading-container"><Loading/></div>
    }
    if (error) {
        return <div className="error">{error}</div>
    }

    return (
        <div className="super_container">

        <HomeOne src={obj.src} name={t('craft.name')} />


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
                                                            <img width="500" height="300" src={item.srcImg} alt={item.name} /></div>
                                                        <iframe  width="500" height="200" aria-hidden="false"  ></iframe>
                                                    </div>
                                                    <div className="col-xl-5 col-lg-6">
                                                        <div className="blog_post_content">

                                                            <div className="pb_title"><a href="#"> {t(`craftsman.${item.id}.name`)} </a></div>
                                                            <div className="pb_text" >
                                                                <p> {t('descriptionMix.address')}: {t(`craftsman.${item.id}.address`)}</p>
                                                                <p> {t('descriptionMix.WorkingTime')}:  {t(`craftsman.${item.id}.time`)}</p>
                                                                <p> {t('descriptionMix.phone')}: {t(`craftsman.${item.id}.phone`)}</p>
                                                                <p> {descript.link}:  <a href={item.link}>LINK</a></p>

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
        </div>

        {/* <Pagination
        page={page}
        perPage={perPage}
        totalPosts={arr.length}
        paginate={handlePaginationClick} 
        /> */}

        </div>
    )
}
export default translate(Craftsman);