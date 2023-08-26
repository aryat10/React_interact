// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const navbar = (
    <nav>
     
      <h1>   React Visionary !!  </h1>
      <img src="https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png"width="100" ></img>
              
          <ul>
              <li>Home</li>
               
              <li>About React</li>
               
              <li>React Deployment</li>
               
              <br></br>
               <br></br>
               
          </ul>
         
      
    </nav>
)


ReactDOM.render(navbar, document.getElementById("root"))
