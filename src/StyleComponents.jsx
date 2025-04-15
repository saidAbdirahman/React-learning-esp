import styled from "styled-components"
const StyledH1 = styled.h1`
    color: green;
    `
function StyleComponents(){
   
    
    return (
        <div>
            <h1> h1 plain  </h1>
            
            <hr />
         <StyledH1>h1 not plain</StyledH1>
        </div>
    )
}
export default StyleComponents