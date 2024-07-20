import { Password } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { useState } from 'react';

const UserData = () => {
    const [token, setToken] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/user-data", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "access-Controll-Alllow-Origin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token"),
            }),
        }).then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");
                if (data.status === "ok") {
                    setEmail(data.data.email);
                    setName(data.data.fname);
                } else {
                    console.error("Failed to fetch");
                }
            }).catch((error) => {
                console.error("Error fetching user data");
            });
    }, []);

    return (
        <div className='text-white'>
            <span>UserData</span>
            <div>
                User: <br /> {name}
            </div>
            <div>
                Email: <br /> {email}
            </div>
        </div>
    )
}

export default UserData