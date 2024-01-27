import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToy from './MyToy/MyToy';
import Swal from 'sweetalert2';
import useTitle from '../../Hook/useTitle';

const MyToys = () => {
  useTitle('My Toys');
  const [allToys, setAllToys] = useState([]);
  const [limit, setLimit] = useState(20);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredToys, setFilteredToys] = useState([]);

  useEffect(() => {
    const updatedFilteredToys = allToys.filter((toy) => {
      const name = toy.name || '';
      return name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredToys(updatedFilteredToys);
  }, [allToys, searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value, 10)); // Specify base 10 for parseInt
  };

  const displayedToys = filteredToys.slice(0, limit);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://smart-toy-market-server.vercel.app/mytoys?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setAllToys(data);
        })
        .catch((error) => {
          console.error('Error retrieving toys:', error);
        });
    }
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://smart-toy-market-server.vercel.app/myToys/${_id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = allToys.filter((toy) => toy._id !== _id);
              setAllToys(remaining);
              Swal.fire(
                'Deleted!',
                'Your Toy was deleted successfully!',
                'success'
              );
            }
          })
          .catch((error) => {
            console.error('Error deleting toy:', error);
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <div className="mt-4 text-center">
          <span className='font-bold'>Search : </span>
          <input
            type="text"
            placeholder="Search by Toy Name"
            className="border rounded px-4 py-2"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="my-4 text-right">
          <label htmlFor="limitSelect" className="mr-2">
            Show:
          </label>
          <select
            id="limitSelect"
            className="border rounded px-4 py-2"
            value={limit}
            onChange={handleLimitChange}
          >
            <option value={5}>5</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
          </select>
        </div>

        <table className="table w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Image</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {displayedToys.map((toy) => (
              <MyToy handleDelete={handleDelete} key={toy._id} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
