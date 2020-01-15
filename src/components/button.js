import React from "react";
import { Link } from "react-router-dom";

function ButtonLink(props){
  return <Link to={props.link}><button className={props.className}>{props.value}</button></Link>;
};

export default ButtonLink;