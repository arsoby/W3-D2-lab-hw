// Add Element by JS

// let div = document.getElementById("root")
// let inDiv= document.createElement("div")
// inDiv.innerText="Hello :)(::)"
// div.appendChild(inDiv)

// Old React 

// let container = document.getElementById("root")
// let e = React.createElement('div',{
//     children:"Welcome"
// })
// ReactDOM.render(e,container)

// Add Element by JSX
let container = document.getElementById("root")
let Element =<>
    <div>
    <h1>Hello</h1>
    <p>my name is Abdulrahman</p>
    </div>
</>
 ReactDOM.render(Element,container) 
