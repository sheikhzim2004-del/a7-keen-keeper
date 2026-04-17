import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const FriendDetails = () => {

    const { id } = useParams();
    const friends = useLoaderData();

    const friend = friends.find(f => f.id === parseInt(id));

    // jodi friend er number onujayi khuje na pawa jay tahole shetar jonno ata show korabo
    if (!friend) {
        return <p className="text-center text-4xl text-red-700 mt-10">Friend not found</p>;
    }

    return (
        <div className="max-w-6xl mx-auto p-5 grid md:grid-cols-3 gap-5">

            {/* left ui */}
            <div className="card bg-base-200 p-5 items-center text-center">
                <img
                    src={friend.picture}
                    alt={friend.name}
                    className="w-24 h-24 rounded-full"
                />

                <h2 className="text-xl font-bold mt-3">{friend.name}</h2>

                <span className={`badge mt-2 ${
                    friend.status === "overdue"
                        ? "badge-error"
                        : friend.status === "almost due"
                        ? "badge-warning"
                        : "badge-success"
                }`}>
                    {friend.status}
                </span>

                <div className="flex gap-2 mt-2 flex-wrap justify-center">
                    {friend.tags.map((tag, i) => (
                        <span key={i} className="badge badge-outline">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="mt-3 italic text-sm text-gray-500">
                    "{friend.bio}"
                </p>

                <p className="text-sm mt-1 text-gray-400">
                    Preferred: email
                </p>
            </div>

            {/* rightt ui */}
            <div className="md:col-span-2 space-y-4">


                <div className="grid grid-cols-3 gap-4">
                    <div className="card bg-base-200 p-4 text-center">
                        <h2 className="text-2xl font-bold">
                            {friend.days_since_contact}
                        </h2>
                        <p>Days Since Contact</p>
                    </div>

                    <div className="card bg-base-200 p-4 text-center">
                        <h2 className="text-2xl font-bold">
                            {friend.goal}
                        </h2>
                        <p>Goal (Days)</p>
                    </div>

                    <div className="card bg-base-200 p-4 text-center">
                        <h2 className="text-lg font-bold">
                            {friend.next_due_date}
                        </h2>
                        <p>Next Due</p>
                    </div>
                </div>


                <div className="card bg-base-200 p-5 flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold">Relationship Goal</h3>
                        <p className="text-gray-500">
                            Connect every <span className="font-bold">{friend.goal} days</span>
                        </p>
                    </div>
                    <button className="btn btn-sm">Edit</button>
                </div>


                <div className="card bg-base-200 p-5">
                    <h3 className="font-semibold mb-3">Quick Check-In</h3>

                    <div className="grid grid-cols-3 gap-3">
                        <button className="btn">📞 Call</button>
                        <button className="btn">💬 Text</button>
                        <button className="btn">🎥 Video</button>
                    </div>
                </div>


                <div className="space-y-2">
                    <button className="btn w-full">⏰ Snooze 2 Weeks</button>
                    <button className="btn w-full">📁 Archive</button>
                    <button className="btn btn-error w-full">🗑 Delete</button>
                </div>

            </div>
        </div>
    );
};

export default FriendDetails;