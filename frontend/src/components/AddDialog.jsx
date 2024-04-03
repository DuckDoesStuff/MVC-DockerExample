import { useState } from 'react';

import "./dialog.css";

const AddDialog = ({onClick}) => {
    const [companyInfo, setCompanyInfo] = useState({
        companyName: "",
        website: "",
        address: "",
        phone: ""
    });

    const handleOnSubmit = () => {
        onClick(false);
        console.log(companyInfo);
        fetch('http://localhost:3001/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(companyInfo)
        }).then(res => res.json()).then(data => console.log(data));
    }



    return (
        <div className={"dialog"}>
            <label className={"dialog-label"}>Company name</label>
            <input onChange={(e) => {setCompanyInfo({...companyInfo, companyName:e.target.value})}} className={"dialog-content"} type="text"/>

            <label className={"dialog-label"}>Website address</label>
            <input onChange={(e) => {setCompanyInfo({...companyInfo, website:e.target.value})}} className={"dialog-content"} type="text"/>

            <label className={"dialog-label"}>Company address</label>
            <input onChange={(e) => {setCompanyInfo({...companyInfo, address:e.target.value})}} className={"dialog-content"} type="text"/>

            <label className={"dialog-label"}>Phone number</label>
            <input onChange={(e) => {setCompanyInfo({...companyInfo, phone:e.target.value})}} className={"dialog-content"} type="number"/>

            <div className={"button-row"}>
                <button onClick={handleOnSubmit} className={"button-submit"}>Submit</button>
                <button onClick={() => onClick(false)} className={"button-cancel"}>Cancel</button>
            </div>
        </div>
    );
}

export default AddDialog;