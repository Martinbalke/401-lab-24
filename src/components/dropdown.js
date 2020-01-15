import React from 'react';

import {ThemeDispatchContext} from '../providers/theme-provider';
/**
 * Dropdown is react component that allows us to dynamically display values 
 * as options
 * @function
 * @param {Object} props - The properties passed through to this component 
 *@returns {JSX}
 */
function dropDown(props) {

  /**
   * Generate values takes in an array of strings and returns an array of JSX option tags 
   * based on the arrays values
   * @function
   * @param {Object} props.values - The values to create option tags out of
   * @returns {Array} - An array of generated option tags 
   */
  const generateValues = () => {
    let values = [...props.values];
    values = values.map( (value,index) => <option key={`${value} ${index}`} className={`${props.className}__option`}>{value}</option>);
    return values;
  }
  return(
    <ThemeDispatchContext.Consumer>
      {dispatch => (  
      <div className={props.className}>
        <label className={`${props.className}__label`}>
        {props.label}
        <img className={`${props.className}__image`} src={props.src} alt={props.alt}/>
        <select className={`${props.className}__select`} id={props.id} onChange={ e => {
          let value = e.target.value;
          console.log(value);
          if(value === 'Dark Mode') dispatch({type: 'dark'})
          if(value === 'Light Mode') dispatch({type: 'light'})
        }}>
        {generateValues()}        
        </select>
        </label>
      </div>)}
    
    </ThemeDispatchContext.Consumer>
  );
}

export default dropDown;
