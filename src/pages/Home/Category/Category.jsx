import { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Fade } from 'react-awesome-reveal';
import Card9 from './Card9';

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
      <Fade direction='up' triggerOnce>
        <div className="text-center pt-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Categories</h2>
          <p className="text-lg text-gray-600">Browse through different toy categories.</p>
        </div>
      </Fade>

      <Tabs onSelect={handleTabSelect}>

        <Fade direction='right' triggerOnce>
          <TabList className="flex flex-wrap justify-center">

            {categories.map((category) => (
              <Tab
                key={category}
                className="px-4 py-2 mb-3 sm:mt-12 sm:mb-6 font-semibold mr-2 rounded-md cursor-pointer"
                selectedClassName="bg-[#ff6e13]  text-white"
              >
                {category}
              </Tab>
            ))}
          </TabList>
        </Fade>
        {categories.map((category) => (
          <TabPanel key={category}>
            <Fade direction='left' triggerOnce>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {toys
                  .filter((toy) => category === 'All' || toy.category === category)
                  .slice(0, displayedToys)
                  .map((toy) => (
                    <Card9 toy={toy}></Card9>
                  ))}
              </div>
            </Fade>

            {toys.length > displayedToys && (
              <div className="text-center mt-4">
                <button
                  className="bg-[#ff6e13] hover:bg-indigo-500 text-white px-4 py-2 rounded-md"
                  onClick={handleViewMore}
                >
                  See More
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
