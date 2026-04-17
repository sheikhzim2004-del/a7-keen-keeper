
import { BsChatRightTextFill } from 'react-icons/bs';
import { FaFolder } from 'react-icons/fa';
import { MdAddCall, MdDelete, MdOutlineSnooze, MdOutlineVideoCall } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router';
import { useContext } from 'react';
import { FriendContext } from '../../../context/FriendContext';





const FriendDetails = () => {


    const { id } = useParams();
    const friends = useLoaderData();

    const expectFriend = friends.find(f => f.id === parseInt(id));

    const friendContext = useContext(FriendContext)
    const { handleMarkAsCall } = friendContext;
    console.log(handleMarkAsCall)

    // jodi friend er number onujayi khuje na pawa jay tahole shetar jonno ata show korabo
    if (!expectFriend) {
        return <p className="text-center text-4xl text-red-700 mt-10">Friend not found</p>;
    }



    return (
        <div className="max-w-6xl mx-auto p-5 grid md:grid-cols-3 gap-5">

            {/* left ui */}
            <div className="card bg-base-200 p-5 items-center text-center space-y-6">
                <div>
                    <img
                        src={expectFriend.picture}
                        alt={expectFriend.name}
                        className="w-24 h-24 rounded-full"
                    />

                    <h2 className="text-xl font-bold mt-3">{expectFriend.name}</h2>

                    <span className={`badge mt-2 ${expectFriend.status === "overdue"
                        ? "badge-error"
                        : expectFriend.status === "almost due"
                            ? "badge-warning"
                            : "badge-success"
                        }`}>
                        {expectFriend.status}
                    </span>

                    <div className="flex gap-2 mt-2 flex-wrap justify-center">
                        {expectFriend.tags.map((tag, i) => (
                            <span key={i} className="badge badge-outline">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="mt-3 italic text-sm text-gray-500">
                        "{expectFriend.bio}"
                    </p>

                    <p className="text-sm mt-1 text-gray-400">
                        Preferred: email
                    </p>
                </div>
                <div className="space-y-2">
                    <button className="btn w-full"><MdOutlineSnooze /> Snooze 2 Weeks</button>
                    <button className="btn w-full"><FaFolder /> Archive</button>
                    <button className="btn btn-error w-full"><MdDelete /> Delete</button>
                </div>
            </div>

            {/* rightt ui */}
            <div className="md:col-span-2 space-y-4">


                <div className="grid grid-cols-3 gap-4">
                    <div className="card bg-base-200 p-4 text-center">
                        <h2 className="text-2xl font-bold">
                            {expectFriend.days_since_contact}
                        </h2>
                        <p>Days Since Contact</p>
                    </div>

                    <div className="card bg-base-200 p-4 text-center">
                        <h2 className="text-2xl font-bold">
                            {expectFriend.goal}
                        </h2>
                        <p>Goal (Days)</p>
                    </div>

                    <div className="card bg-base-200 p-4 text-center">
                        <h2 className="text-lg font-bold">
                            {expectFriend.next_due_date}
                        </h2>
                        <p>Next Due</p>
                    </div>
                </div>


                <div className="card bg-base-200 p-5 flex justify-between items-center flex-row">
                    <div>
                        <h3 className="font-semibold">Relationship Goal</h3>
                        <p className="text-gray-500">
                            Connect every <span className="font-bold">{expectFriend.goal} days</span>
                        </p>
                    </div>
                    <button className="btn btn-sm">Edit</button>
                </div>


                <div className="card bg-base-200 p-5">
                    <h3 className="font-semibold mb-3">Quick Check-In</h3>

                    <div className="grid grid-cols-3 gap-3">
                        <button onClick={() => handleMarkAsCall(expectFriend, 'Call')} className="btn"><MdAddCall /> Call</button>
                        <button onClick={() => handleMarkAsCall(expectFriend, 'Text')} className="btn"><BsChatRightTextFill /> Text</button>
                        <button onClick={() => handleMarkAsCall(expectFriend, 'Video')} className="btn"><MdOutlineVideoCall /> Video</button>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default FriendDetails;