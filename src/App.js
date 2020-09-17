// Lesson 72
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// const Layout = (props) => {
//     return (
//         <div>
//             <p>header</p>
//             {props.children}
//             <p>footer</p>
//         </div>
//     );
// }

// const Template = (
//     <div>
//         <p>Page title</p>
//         <p>this is my page</p>
//     </div>
// );

// ReactDOM.render(<Layout><p>This is inline</p></Layout>, document.getElementById('app'));

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