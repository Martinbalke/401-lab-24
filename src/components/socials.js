import React from 'react';

function social(props){
 return <a className={props.className} href={props.href} target='_blank' rel='noopener noreferrer'><img src={props.src} alt={props.alt}/></a>
}

export default social;