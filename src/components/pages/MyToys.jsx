import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ToyDetailsForUpdateAndDelete from "./ToyDetailsForUpdateAndDelete";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  useTitle("My Toys");

  const url = `https://assignment-11-server-iota-brown.vercel.app/allToysDetails?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [url]);

  return (
    <div className="mt-10 mb-28">
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>

              <th className="text-xl font-semibold text-center">Toy Name</th>
              <th className="text-xl font-semibold text-center">Toy Image</th>

              <th className="text-xl font-semibold text-center">Price</th>
              <th className="text-xl font-semibold text-center">
                Available Quantity
              </th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((singleToyDetails, index) => (
              <ToyDetailsForUpdateAndDelete
                key={singleToyDetails._id}
                index={index}
                singleToyDetails={singleToyDetails}
                myToys={myToys}
                setMyToys={setMyToys}
              ></ToyDetailsForUpdateAndDelete>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
