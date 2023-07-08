import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    const innerHeight = window.innerHeight;
    const goDown = () => window.scrollTo({top: innerHeight, left:0, behavior:'smooth'});
    return (
        <div className='Main'>
            <div className='bg'></div>
            <div className='inner'>
                <div>안녕하세요, 개발자 <span>서희재입니다.</span></div>
                <div>본 Portfolio는 React로 제작되었습니다.</div>
            </div>
            <div className='more' onClick={goDown}>
                <Link to = '/About'>
                    클릭하여 더 알아보기
                </Link>
            </div>
            {/* <div className='more_img' onClick={goDown}><img src='/arrow.png' alt='arrow'/></div> */}
        </div>
    );
};

export default Main;