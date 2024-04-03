import React, {useEffect, useState} from 'react';
import './App.css';
import AddDialog from "./components/AddDialog";
import DeleteDialog from "./components/DeleteDialog";
import UpdateDialog from "./components/UpdateDialog";

function App() {
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);


    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            fetch('http://localhost:3001/api/data', {
                method: 'GET'
            })
            .then(res => res.json())
            .then(data => setData(data));
        }
        fetchData().then(() => setIsLoading(false));
    }, [isLoading]);

    const handleOnRefresh = async () => {
        setIsLoading(true);
    }


    return (
        <div className={"body"}>
            {isAddDialogOpen && <AddDialog onClick={setIsAddDialogOpen} />}
            {isDeleteDialogOpen && <DeleteDialog onClick={setIsDeleteDialogOpen} />}
            {isUpdateDialogOpen && <UpdateDialog onClick={setIsUpdateDialogOpen} />}
            <div className={"button-row"}>
                <button onClick={() => setIsAddDialogOpen(true)} className={"button"}>Add</button>
                <button onClick={() => setIsDeleteDialogOpen(true)} className={"button"}>Remove</button>
                <button onClick={() => setIsUpdateDialogOpen(true)} className={"button"}>Update</button>
                <button onClick={handleOnRefresh} className={"button"}>Refresh</button>
            </div>

            <div>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th className={'col-name'}>Company name</th>
                        <th className={'col-web'}>Website</th>
                        <th className={'col-addr'}>Address</th>
                        <th className={'col-phone'}>Phone</th>
                    </tr>
                    </thead>

                    <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th>{item.id}</th>
                                <th className={'col-name'}>{item.name}</th>
                                <th className={'col-web'}>{item.web}</th>
                                <th className={'col-addr'}>{item.address}</th>
                                <th className={'col-phone'}>{item.phone}</th>
                            </tr>
                    )
                    })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
