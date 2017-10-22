import React from 'react';
import Platform from './Platform';
import './App.css';

export default function App(props) {
  return (
    <div className="container">
      <h1 className="title">
        <span className="hot">Hot</span> or <span className="cold">Cold</span>
      </h1>
      <Platform targetNumber={props.randomNumber} />
    </div>
  );
}
