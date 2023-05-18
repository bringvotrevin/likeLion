import React from 'react';
import loadingImg from '../images/loading.gif';
import style from './Loading.module.css';

export default function Loading() {
  return <img src={loadingImg} alt='' className={style.imgLoading} />;
}
