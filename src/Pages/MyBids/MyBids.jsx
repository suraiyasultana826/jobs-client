import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BidsRow from "./BidsRow";

const MyBids = () => {
    const { user } = useContext(AuthContext);
    const [bids, setBids] = useState([]);
    const url = `http://localhost:5300/bidWebdev?email=${user?.email}`;
    useEffect(() => {
        fetch(url, {credentials: 'include'})
            .then(res => res.json())
            .then(data => setBids(data))
    }, [])
    return (
        <div className=" mt-10 mb-10 lg:ml-96">
            <h1 className="text-4xl font-bold mx-auto mb-10 lg:ml-32">My Bids</h1>
            <div className="overflow-x-auto mx-auto">
                <table className="table">
                    {/* head */}
                  
                    <tbody>
                        {/* row 1 */}
                    <div className="mx-auto w-full">
                    {
                        bids.map(bid => <BidsRow key={bid._id} bid={bid}></BidsRow>)
                      }
                    </div>
                       
                      
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default MyBids;