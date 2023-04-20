


/** Shows a box and a button to remove it 
 * 
 * Props
 * -id
 * -height
 * -width
 * -backgroundColor
 * -remove (function)
 * 
 * State
 * -none
 * 
 * BoxList -> Box
*/
function Box({height, width, backgroundColor}) {
    const boxStyle = {height, width, backgroundColor, display: "inlineBlock"}

    return (
        <div>
            <div style={boxStyle}></div>
            <button>Remove The Box!</button>
        </div>
    )



}

export default Box;