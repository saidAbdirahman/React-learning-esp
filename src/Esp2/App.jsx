import {React,createElement} from "react";
const App = () =>{
    return createElement(
        "div",
        {
            className:"container",
        },
        [
            createElement(
                "p",
                {
                    className:"danger",
                    children:"hello react"
                }
            ),
            createElement(
                "p",
                {
                    className:"info",
                    children:"You rock, React!"
                }
            )
        ]
        
    )
    



    // createElement(
    //     "p",
    //     {
    //         className:"red",
    //         children:"Hello, world!"

    //     },
        
    // )
}
export default App