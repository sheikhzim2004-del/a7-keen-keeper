import React, { use } from 'react';
import FriendCard from '../friendCard/FriendCard';


const friendsPromiss = fetch("/friendsData.json").then(res => res.json());

const Friends = () => {

    const friends = use(friendsPromiss);
    // console.log(friends);

    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl font-bold text-center'>My Friends</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-8 justify-items-center'>
                {
                friends.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)
            }
            </div>

        </div>
    );
};

export default Friends;