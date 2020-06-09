import React from 'react';
import s from './font.module.css';
import t from './textAnime.module.css';
import fonts from './video/fonts.mp4';
import vol from './audio/more.mp3';

const Font = () => {
    const audio = new Audio(vol);
    const Vol =() => {
        audio.play()
    }
    return (
        <div className={s.divCont}>
            <div className={s.sectionVideo}  >
					<div className={s.welc}  >
						<h1  >WELCOME TO SEVAN</h1>
					</div>

                    {/* <div className={t.sign}>
                        <span className={t.fastflicker}>Go</span>od {`" "`}<span className={t.flicker}>da</span>y!
                    </div> */}
					
					<video onClick={() => Vol()}  autoPlay={true}  loop={true} type="video/mp4" >
                        <source className={s.sources} src={fonts} type="video/mp4" />
                    </video>
				</div>
                
        </div>
    );
};
export default Font;