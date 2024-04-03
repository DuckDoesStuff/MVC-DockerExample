import { useState } from 'react';

import "./dialog.css";

const UpdateDialog = ({onClick}) => {
    const [id, setId] = useState("");
    const [companyInfo, setCompanyInfo] = useState({
        companyName: "",
        website: "",
        address: "",
        phone: ""
    });

    const handleOnSubmit = async () => {
        onClick(false);
        console.log(companyInfo);
        const result = await fetch('http://localhost:3001/api/data/' + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(companyInfo)
        }).then(res => res.json());

        if(result.status !== 404) {
            alert("Updated successfully");
        }
        else {
            alert("Failed to update");
        }
    }



    return (
        <div className={"dialog"}>
            <label className={"dialog-label"}>ID</label>
            <input onChange={(e) => {
                setId(e.target.value)}} className={"dialog-content"} type="text"/>

            <label className={"dialog-label"}>Company name</label>
            <input onChange={(e) => {
                setCompanyInfo({...companyInfo, companyName: e.target.value})
            }} className={"dialog-content"} type="text"/>

            <label className={"dialog-label"}>Website address</label>
            <input onChange={(e) => {
                setCompanyInfo({...companyInfo, website: e.target.value})
            }} className={"dialog-content"} type="text"/>

            <label className={"dialog-label"}>Company address</label>
            <input onChange={(e) => {
                setCompanyInfo({...companyInfo, address: e.target.value})
            }} className={"dialog-content"} type="text"/>

            <label className={"dialog-label"}>Phone number</label>
            <input onChange={(e) => {
                setCompanyInfo({...companyInfo, phone: e.target.value})
            }} className={"dialog-content"} type="number"/>

            <div className={"button-row"}>
                <button onClick={handleOnSubmit} className={"button-submit"}>Submit</button>
                <button onClick={() => onClick(false)} className={"button-cancel"}>Cancel</button>
            </div>
        </div>
    );
}

export default UpdateDialog;