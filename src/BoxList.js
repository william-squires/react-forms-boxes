import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import {v4 as uuid} from "uuid";

/** Shows a list of boxes and a form to add more boxes. 
 * 
 * Props
 * -none
 * 
 * State
 * -boxes [{box},...]
 * 
 * App -> BoxList -> Box, NewBoxForm
*/
function BoxList() {
    const [boxes, setBoxes] = useState([]);

    /** adds new box to BoxList */
    function addBox(box) {
        const newBox = {...box, id: uuid()}
        console.log("new box:", newBox);
        setBoxes(boxes => [...boxes, newBox])
    }

    /** renders boxes on page */
    function renderBoxes() {
        return (
            <div>
                {boxes.map(b => 
                <Box 
                key={b.id}
                height={b.height} 
                width={b.width} 
                backgroundColor={b.backgroundColor}/>)}
            </div>
        )
    }


    return (
        <div>
            <NewBoxForm addBox={addBox}/>
            {renderBoxes()}
        </div>
    )
}



export default BoxList;