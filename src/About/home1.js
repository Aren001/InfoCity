import React from 'react';


const HomeOne = (props) => {
    // console.log(props);
    const {src , name} = props;
    return (
        
        
            <div className="home" >
		<div className="parallax_background parallax-window" data-parallax="scroll"  data-speed="0.8"><img src={src} alt=""  width="100%" height="460" alt='photo.....' /></div>
		<div className="home_container">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="home_content text-center">
                        <div className="home_title"><h1>{name}</h1></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
        
    )
}
export default HomeOne;