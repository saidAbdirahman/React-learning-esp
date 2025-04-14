import {React,createElement} from "react";
const App = () =>{
    return createElement(
        "p",
        {className:"red"},
        "Hello, world!"
    )
}
export default App