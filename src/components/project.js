import React from 'react';

function project(props){
  return(
    <div className={props.className}>
      <img src={props.src} alt={props.alt} className={`${props.className}__image`}/>
      <p className={`${props.className}__text`}>{props.text}</p>
      <button className={`${props.className}__btn`}><a href={props.url} target='_blank' rel='noopener noreferrer'>{props.linkText}</a></button>
    </div>
  );
}

export default project;