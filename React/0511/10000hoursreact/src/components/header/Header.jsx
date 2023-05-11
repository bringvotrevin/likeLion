import React from 'react';
import title from '../../img/title.png';
import subTitle from '../../img/txt_subtitle.png';
import './Header.css';

export default function Header() {
  return (
    <header>
      <h1 className='tit-law'>
        <img src={title} alt='1만시간의 법칙' className='img-tit' />
      </h1>
      <img src={subTitle} alt='서브 텍스트' className='img-txt' />
      <p className='txt-desc'>
        <strong className='tit-desc'>1만 시간의 법칙</strong>은<br />
        어떤 분야의 전문가가 되기 위해서는
        <br />
        최소한 1만 시간의 훈련이 필요하다는 법칙이다.
      </p>
    </header>
  );
}
