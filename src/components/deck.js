import React from 'react';

function Deck(props){
  return(
    <div className={props.className}>
      {props.children}
    </div>
  );
};

export default Deck;