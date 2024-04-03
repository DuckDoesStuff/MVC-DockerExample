import { useState } from 'react';

import "./dialog.css";

const DeleteDialog = ({onClick}) => {
    const [id, setId] = useState("");

    const handleOnSubmit = async () => {
        const result = await fetch('http://localhost:3001/api/data/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json());

        if(result.status === 200) {
            alert("Deleted successfully");
        }else {
            alert("Failed to delete");
        }
        onClick(false);
    }

    return (
        <div className={"dialog"}>
            <label className={"dialog-label"}>ID</label>
            <input onChange={(e) => {setId(e.target.value)}} className={"dialog-content"} type="number"/>

            <div className={"button-row"}>
                <button onClick={handleOnSubmit} className={"button-submit"}>Submit</button>
                <button onClick={() => onClick(false)} className={"button-cancel"}>Cancel</button>
            </div>
        </div>
    );
}

export default DeleteDialog;