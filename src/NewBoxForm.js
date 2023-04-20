import { useState } from "react";

/** shows and submits a form to render a new box 
 * 
 * Props
 * -addBox (function)
 * 
 * State
 * -formData
 *  -height
 *  -width
 *  -backgroundColor
 * 
 * BoxList -> NewBoxForm
*/
function NewBoxForm({addBox}) {
    const initialState = { height: "", width: "", backgroundColor: "" };
    const [formData, setFormData] = useState(initialState);

    function handleChange(evt) {
        const fieldName = evt.target.name;
        const value = evt.target.value;
        setFormData(currData => {
            currData[fieldName] = value;
            return { ...currData };
        });
    }

        /** takes form data and adds new box */
        function handleSubmit(evt) {
            evt.preventDefault();
            addBox(formData)
        }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="height">Height:</label>
            <input
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />
            <label htmlFor="width">Width</label>
            <input
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="backgroundColor">Background Color</label>
            <input
                id="backgroundColor"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
            />
            <button>Add a new box!</button>
        </form >
    );
}

export default NewBoxForm