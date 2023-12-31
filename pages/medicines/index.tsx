import { useState } from 'react';
import { setData } from '../../db/client';
import QR from '../../lib/qrcode';

const Medicines = () => {
  const [product, setProduct] = useState({
    manufacturer: '',
    productName: '',
    price: '',
    quantity: '',
  });
  const [showQR, setShowQR] = useState(false);
  const handleChange = (e: any) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setData({ ...product, id: product.productName });
    setShowQR(true);
    // setProduct({
    //   manufacturer: '',
    //   productName: '',
    //   price: '',
    //   quantity: '',
    // });
  };

  return (
    <div
      data-aos='zoom-in'
      data-aos-duration='1000'
      className='w-2/5 mx-auto border p-5 my-20'
    >
      <form
        onSubmit={handleSubmit}
        className=' shadow-md rounded px-8 pt-6 pb-8 mb-4'
      >
        {!showQR && (
          <>
            <div className='mb-4'>
              <label
                className='block text-neutral-400 text-sm font-bold mb-2'
                htmlFor='manufacturer'
              >
                Manufacturer
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                id='manufacturer'
                type='text'
                placeholder='Manufacturer'
                name='manufacturer'
                value={product.manufacturer}
                onChange={handleChange}
                required
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-neutral-400 text-sm font-bold mb-2'
                htmlFor='productName'
              >
                Product Name
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                id='productName'
                type='text'
                placeholder='Product Name'
                name='productName'
                value={product.productName}
                onChange={handleChange}
                required
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-neutral-400 text-sm font-bold mb-2'
                htmlFor='price'
              >
                Price
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                id='price'
                type='number'
                placeholder='Price'
                name='price'
                value={product.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-neutral-400 text-sm font-bold mb-2'
                htmlFor='quantity'
              >
                Quantity
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                id='quantity'
                type='number'
                placeholder='Quantity'
                name='quantity'
                value={product.quantity}
                onChange={handleChange}
              />
            </div>
            <div className='flex items-center justify-between'>
              <button
                className='bg-neutral-900 hover:bg-neutral-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Add Product
              </button>
            </div>
          </>
        )}
        <br />
        {showQR && <QR id={product?.productName} />}
        {/* <Reader /> */}
      </form>
    </div>
  );
};

export default Medicines;
