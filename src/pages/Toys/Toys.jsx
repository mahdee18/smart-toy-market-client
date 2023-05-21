import { Link } from 'react-router-dom';

const Toys = ({ toy }) => {
    
    const { _id, seller, category, price, name, quantity, picture } = toy;
    return (
        <tr className='text-center'>

            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {<img src={picture} />}
                    </div>
                </div>
            </td>
            <td>
                {seller}
            </td>
            <td>
                {name}
            </td>
            <td>
                {category}
            </td>
            <td> ${price}</td>
            <td>{quantity}</td>
            <th className='text-center'>
                <Link to={`/alltoys/${_id}`}><button className='border-0 btn btn-primary bg-[#ff6e13] opacity-75 text-white'>View Details</button></Link>
            </th>
        </tr>
    );
};

export default Toys;