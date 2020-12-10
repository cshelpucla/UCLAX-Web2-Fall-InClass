import React from 'react';
import Essays from './Essays';
import styled from 'styled-components'
import Template from '../../Shared/Template'

const Homework = () => {
    // functional component logic
    return (
        <Template title='Homework' aside={false}>
            <HomeworkStyled>
                <h2>This is my Homework</h2>
                <Essays essays = {essays}/>
            </HomeworkStyled>
        </Template>
    )
}

export default Homework;


const HomeworkStyled = styled.div`
    border : dashed 5px teal;
    padding : 20px;
    background-color : #bee;
`

const essays = [
  { title: 'Q1',
    question: 'Question 1 goes here',
    AnswerComponent: () => {
        return (            
            <div>                
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro obcaecati, aperiam fugit modi perferendis sequi blanditiis dolorum repellendus quia nam doloremque sunt eos vitae placeat. Nobis nulla corporis et voluptatum?</p>   
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi officia doloremque suscipit et id. Corporis minus, nesciunt quis dolores deserunt facere accusantium natus reprehenderit culpa quisquam, vel laudantium voluptatibus quas?</p>   
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nobis vero eligendi accusamus soluta laboriosam, consequatur blanditiis deleniti tempora non labore nemo. Accusantium necessitatibus nobis porro. Dicta officia perferendis blanditiis?</p>   
            </div>
        )
    }
  },
  { title: 'Q2',
    question: 'What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?',
    AnswerComponent: () => {
        return (            
            <div>                
                 <p>A single-page application is a more modern approach to app development, it was used by Google, Facebook, Twitter, etc. A SPA is an app that works inside a browser and does not require page reloading during use.</p>

                 <p>A multiple page application, on the other hand, is considered a more classical approach to app development. The multi-page design pattern requires a page reload every time the content changes. It’s a preferred option for large companies that have extensive product portfolios, for example, e-commerce businesses.</p>   
            </div>
        )
    },
   },
   { title: 'Q3',
     question: 'In React, what does Prop Drillng mean? Why do they say that React has a Unidirectional Data Flow? What are the pros and cons of this feature?',
     AnswerComponent: () => {
         return (            
             <div>                
                  <p>Prop drilling (also called "threading") refers to the process you have to go through to get data to parts of the React Component tree.</p>   
                  <p>Values are passed down to child components but not up to parent components </p>
                  <p>disadvantage: You need to add a prop or event handler in a component way down the hierarchy and you’re forced to add it to every parent component as well</p>
             </div>
         )
     },
    },    
   { title: 'Q4',
     question: 'In React, what is Redux? Why do we need Redux? Is Redux the only option?',
     AnswerComponent: () => {
         return (            
             <div>                
                  <p>Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test.</p>
                  <p>While it’s mostly used as a state management tool with React, you can use it with any other JavaScript framework or library.</p>
             </div>
         )
     },
    },
   { title: 'Q5',
   question: 'What is middleware? What does Thunk Middleware do for Redux',
   AnswerComponent: () => {
       return (            
           <div>                
                <p>Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store’s dispatch method, which is then used to dispatch regular synchronous actions inside the function’s body once the asynchronous operations have been completed.</p>   
           </div>
       )
   }
   },
   { title: 'Q6',
   question: 'In Redux, what does mutating state mean? Why is this something we would like to avoid?',
   AnswerComponent: () => {
       return (            
           <div>                
                <p>Mutating state is an anti-pattern in React. React uses a rendering engine which depends on the fact that state changes are observable. This observation is made by comparing previous state with next state. It will alter a virtual dom with the differences and write changed elements back to the dom</p>   
           </div>
       )
   }
   },
   { title: 'Q7',
   question: 'What are the ingridients of a code review in Web Development?',
   AnswerComponent: () => {
       return (            
           <div>                
                <p>Best practice - identifying more efficient ways of completing any task.</p>  
                <p>Error detection - finding logical errors.</p>  
                <p>Vulnerability exposure - identifying the most common vulnerabilities.</p>  
                <p>Malware discovery - a special kind of code review used to detect the suspicious pieces of code or to find the back-doors and any malware integrated into the software.</p>   
           </div>
       )
   }
   },
   { title: 'Q8',
   question: 'What is difference beetween Actions Types, Action Creators and Reducers',
   AnswerComponent: () => {
       return (            
           <div>                
                <p>An action is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application.</p>   
                <p>A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.</p>   
           </div>
       )
   }
   },
   { title: 'Q9',
   question: 'What does Spread operator do. How does this help Redux reducers keep the state from mutating.',
   AnswerComponent: () => {
       return (            
           <div>                
                <p>The Spread operator lets you expand an iterable like a string, object or array into its elements.</p>   
                <p>In Redux allows to copy all objects attributes, while explicitly modifying specific ones.</p>   
           </div>
       )
   }
   },
   { title: 'Q10',
   question: 'What are some of the challenges of loading Redux state from a webserver and some of the solutions.',
   AnswerComponent: () => {
       return (            
           <div>                
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam nam libero hic. Optio perferendis facilis saepe nemo asperiores nostrum? Facilis eligendi natus dolorem illo pariatur distinctio, nemo quas deleniti?</p>   
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nostrum odio rerum, quisquam quidem ea qui earum maxime fugiat repellat iusto quibusdam culpa consequatur sunt quam iure magni, doloribus temporibus.</p>   
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero veritatis molestiae debitis error laudantium, voluptatem nihil sunt, excepturi aut voluptate, amet doloremque quidem dicta nam deleniti facere. Totam, dolor cumque!</p>   
           </div>
       )
   }
   },
   { title: 'Q11',
   question: 'In JavaScript, what is the difference between const, let and var',
   AnswerComponent: () => {
       return (            
           <div>                
                <p>var is functional scope</p>
                <p>let, const are both BLOCK scope</p>
                <p>const, cannot be reassigned, however it is mutable</p>   
           </div>
       )
   }
   },
   { title: 'Q12',
   question: 'What does JavaScript Destructuring do?',
   AnswerComponent: () => {
       return (            
           <div>                
                <p>The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.</p>   
           </div>
       )
   }
   },
   { title: 'Q13',
   question: 'In React, what is a controlled input?',
   AnswerComponent: () => {
       return (            
           <div>                
                <p>Uncontrolled inputs are like traditional HTML form inputs. They remember what you typed. You can then get their value using a ref. </p>   
                <p>A controlled input accepts its current value as a prop, as well as a callback to change that value. You could say it’s a more “React way” of approaching this (which doesn’t mean you should always use it).</p>   
           </div>
       )
   }
   },
   { title: 'Q14',
   question: 'Which is more important, Server-Side or Client-Side validation and why?',
   AnswerComponent: () => {
       return (            
           <div>                
                <p>Server side is more important as u can have multiple types of clients access single server. Some validate and some do not.</p>   
           </div>
       )
   }
   },
   { title: 'Q15',
   question: 'In React components, what are life cycle methods?',
   AnswerComponent: () => {
       return (            
           <div>                
                <p>Mounting (constructor,componentdidmount), Updating (render, componentdidupdate), Unmounting (componentWillUnmount) </p>   
           </div>
       )
   }
   },
   { title: 'Q16',
   question: 'In JavaScript, what is a Fat Arrow function? Are there other types of Functions?',
   AnswerComponent: () => {
       return (            
           <div>                
                <p>Fat arrow notations are used for anonymous functions i.e for function expressions. They are also called lambda functions in other languages. Using fat arrow (=>) we drop the need to use the 'function' keyword.</p>   
           </div>
       )
   }
   },
   { title: 'Q17',
   question: 'In JavaScript, what is a ternary operator?',
   AnswerComponent: () => {
       return (            
           <div>                
                <p> The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy.</p>   
           </div>
       )
   }
   },
   { title: 'Q18',
   question: 'What is the difference between SQL and NoSQL databases? What are the advantages and disadvantages of each?',
   AnswerComponent: () => {
       return (            
           <div>                
                <p>SQL databases are relational, NoSQL are non-relational.</p>
                <p>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</p>
                <p>SQL databases are vertically scalable, NoSQL databases are horizontally scalable.</p>
                <p>SQL databases are table based, while NoSQL databases are document, key-value, graph or wide-column stores.</p>
                <p>SQL databases are better for multi-row transactions, NoSQL are better for unstructured data like documents or JSON.</p>   
           </div>
       )
   }
   }
];