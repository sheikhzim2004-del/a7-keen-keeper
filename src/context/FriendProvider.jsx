import React, { useState } from 'react';
import { FriendContext } from './FriendContext';
import { toast } from 'react-toastify';

const FriendProvider = ({ children }) => {

    const [stored, setStored] = useState([]);

    const handleMarkAsCall = (currentFriend, type) => {

    const newEntry = {
        ...currentFriend,
        type,
        date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    };

    setStored(prev => [
        newEntry,
        ...prev
    ]);

    toast.success('added successfully');
};

    const data = {
        stored,
        setStored,
        handleMarkAsCall
    };

    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendProvider;