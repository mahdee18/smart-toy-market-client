import { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Category = () => {
  const toys = useLoaderData();
  const { user } = useContext(AuthContext);
  const [activeCategory, setActiveCategory] = useState('');
  const [displayedToys, setDisplayedToys] = useState(6); 

  const categories = ['All', ...new Set(toys.map((toy) => toy.category))];

  const handleTabSelect = (index) => {
    setActiveCategory(categories[index]);
    setDisplayedToys(6);
  };

  const handleViewMore = () => {
    setDisplayedToys((prevDisplayedToys) => prevDisplayedToys + 6);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center pt-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Categories</h2>
        <p className="text-lg text-gray-600">Browse through different toy categories.</p>
      </div>
      <Tabs onSelect={handleTabSelect}>
        <TabList className="flex flex-wrap justify-center">
          {categories.map((category) => (
            <Tab
              key={category}
              className="px-4 py-2 mb-3 sm:mt-12 sm:mb-6 font-semibold mr-2 rounded-md cursor-pointer"
              selectedClassName="bg-[#ff6e13] opacity-75 text-white"
            >
              {category}
            </Tab>
          ))}
        </TabList>

        {categories.map((category) => (
          <TabPanel key={category}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {toys
                .filter((toy) => category === 'All' || toy.category === category)
                .slice(0, displayedToys)
                .map((toy) => (
                  <div key={toy.id} className="bg-white p-4 rounded-md shadow-md">
                    <img src={toy.picture} alt={toy.name} className="w-full h-[250px]" />
                    <h3 className="text-lg font-bold mt-2">{toy.name}</h3>
                    <p className="text-gray-600">${toy.price}</p>
                    <p className="text-gray-600">Rating: {toy.rating}</p>
                    {user ? (
                      <Link to={`/categories/${toy._id}`}>
                        <button className="bg-[#ff6e13] opacity-75 text-white px-4 py-2 rounded-md mt-4">
                          View Details
                        </button>
                      </Link>
                    ) : (
                      <Link className="" to={`/categories/${toy._id}`}>
                        <button
                          className="rounded-lg border-0 opacity-75 text-white bg-[#ff6e13] px-5 py-2.5 mt-4 hover:bg-black"
                          onClick={() => {
                            Swal.fire({
                              position: "top-center",
                              icon: "error",
                              title: "Please login first",
                              showConfirmButton: false,
                              timer: 3000,
                            });
                          }}
                        >
                          View Details
                        </button>
                      </Link>
                    )}
                  </div>
                ))}
            </div>
            {toys.length > displayedToys && (
              <div className="text-center mt-4">
                <button
                  className="bg-[#ff6e13] opacity-75 text-white px-4 py-2 rounded-md"
                  onClick={handleViewMore}
                >
                  View More
                </button>
              </div>
            )}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Category;
