import  { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Toys from '../Toys/Toys';
import useTitle from '../../Hook/useTitle';

const AllToys = () => {
    useTitle('All Toys')
    const allToys = useLoaderData();
    const [limit, setLimit] = useState(20);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredToys, setFilteredToys] = useState([]);

    useEffect(() => {
        const updatedFilteredToys = allToys.filter((toy) => {
            const name = toy.name || ''; // Provide a default empty string if the toyName property is undefined
            return name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilteredToys(updatedFilteredToys);
    }, [allToys, searchTerm]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleLimitChange = (event) => {
        setLimit(parseInt(event.target.value, 20));
    };

    const displayedToys = filteredToys.slice(0, limit);

    const handleViewDetails = (toyId) => {
        if (!isLoggedIn) {
            // Redirect to login page
            // window.location.href = '/login';
        } else {
            // Redirect to toy details page
            // window.location.href = `/toys/${toyId}`;
        }
    };


    return (

        <div>
            <div className="overflow-x-auto w-full">

                <div className="mt-4 text-center">
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
                        <tr className='text-center'>
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
                            <Toys key={toy._id} toy={toy} handleViewDetails={handleViewDetails} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;