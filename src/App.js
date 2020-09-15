// Lesson 55
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// class OldSynctax {
//     constructor() {
//         this.name = 'Aritra';
//         this.getGreeting = this.getGreeting.bind(this);
//     }

//     getGreeting() {
//         return `Hi, this is ${this.name}`;
//     }
// }

// const oldSyntax = new OldSynctax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// //----------------------------------

// class NewSynTax {
//     name = 'Jeet'
//     getGreeting = () => {
//         return `Hi, this is ${this.name}`;
//     }
// }

// const newSyntax = new NewSynTax();
// const newGreeting = newSyntax.getGreeting;
// console.log(newGreeting());