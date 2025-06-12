
import React, { useState, useContext } from 'react';
import { CiHeart } from 'react-icons/ci';
import { IoStar } from 'react-icons/io5';
import Skelaton from './Skelaton';
import ProductContext from '../store/ProductContext';


function BestDeal() {

  const{products, isLoading} = useContext(ProductContext);
  /* const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        setLoading(true);
        const res = await axios.get('https://product-server-json.onrender.com/products');
        console.table(res.data);
        setProducts(res.data);
      } catch (e) {
        console.error('Error fetching products:', e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAPI();
  }, []);
 */
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-4xl font-bold'>Today Best Deals for You!</h1>
      <div className='overflow-x-auto mt-4'>

      
      <div className='flex flex-nowrap  gap-3'>
        {isLoading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <Skelaton key={i} />
          ))
        ) : (
          products.map((v, i) => (
            <div key={i} className='my-1 w-[49%] md:w-[32%] lg:w-[31.5%] relative shrink-0' data-aos="zoom-out">
              <div className='w-full h-[270px] bg-white-100 rounded-xl overflow-hidden '>
                <button className=' btn btn-circle absolute end-1 top-1  text-2xl'>
                  <CiHeart />
                </button>
                <img
                  src={v.image}
                  
                  className='w-full h-full object-contain'
                />
              </div>

              <div className='flex justify-between py-2'>
                <div>
                  <p className='text-xl font-bold line-clamp-1'>{v.name}</p>
                  <p className='text-sm my-2 line-clamp-2'>{v.description}</p>

                  <div className='flex '>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <IoStar key={i} className='text-yellow-500' />
                    ))}
                    <span className='text-xs text-gray-500'>(122)</span>
                  </div>

                  <button className="mt-3 px-4 py-2 border border-black rounded-3xl cursor-pointer hover:bg-blue-900 hover:text-white">
                Add to Cart
              </button>
                </div>
              </div>

              <p className='text-xl font-bold'>${v.price}</p>
            </div>
          ))
        )}
      </div>
      </div>
    </div>
  );
}


export default BestDeal;
