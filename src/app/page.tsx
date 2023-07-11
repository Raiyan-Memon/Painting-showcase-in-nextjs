'use client'

import LogoExample from '../app/asset/logo-example.jpg';
import Swal from 'sweetalert2'
import Image1 from '../app/asset/1.jpg'
import Image2 from '../app/asset/2.jpg'
import Image3 from '../app/asset/3.jpg'
import Image4 from '../app/asset/4.jpg'
import Image5 from '../app/asset/5.jpg'
import Image6 from '../app/asset/6.jpg'
import Image7 from '../app/asset/7.jpg'
import Image8 from '../app/asset/8.jpg'
import Image9 from '../app/asset/9.jpg'
import Image10 from '../app/asset/10.jpg'
import Image11 from '../app/asset/11.jpg'
import Image12 from '../app/asset/12.jpg'
import Image13 from '../app/asset/13.jpg'
import Image from 'next/image'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import 'animate.css';
import { useEffect } from 'react';

export default function Home() {

  // Swal.fire({
  //   title: 'Sweet!',
  //   text: 'Modal with a custom image.',
  //   imageUrl: 'https://unsplash.it/400/200',
  //   imageWidth: 400,
  //   imageHeight: 200,
  //   imageAlt: 'Custom image',
  // })

  useEffect(() => {
    setTimeout(() => {
      Swal.fire({
        confirmButtonText: 'Thank You!',
        title: 'Welcome To My Website',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }, 4000);
  }, [])


  function SwalFire(e: any) {
    console.log(e.target.src);

    Swal.fire({
      // title: 'Sweet!',
      // text: 'Modal with a custom image.',
      imageUrl: e.target.src,
      // imageWidth: 100,
      // imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }


  return (
    <div className='container'>
      {/* <h2 className='text-light'>Manasi Webiste</h2> */}

      {/* <div className="row mt-3 justify-content-center">
        <div className="col-md-6 col-6">
          <input type="text" className='form-control form-control-sm' name="" id="" />
        </div>
        <div className="col-md-2 col-2">
          <button className='btn btn-sm btn-primary'>Search</button>
        </div>
      </div> */}


      <div className="row">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 4 }}>
          <Masonry gutter="5px" columnsCount={4}>
            <div className="col-md-3 p-3 w-100 col-6">
              <Image
                onClick={(e) => SwalFire(e)}
                src={Image1}
                alt="Picture of rose"
                className='image-size'
              />
            </div>
            <div className="col-md-3 p-3 w-100 col-6">
              <Image
                onClick={(e) => SwalFire(e)}
                src={Image2}
                alt="Picture of rose"
                className='image-size'
              />
            </div>
            <div className="col-md-3 p-3 w-100 col-6">
              <Image
                onClick={(e) => SwalFire(e)}
                src={Image3}
                alt="Picture of rose"
                className='image-size'
              />
            </div>
            <div className="col-md-3 p-3 w-100 col-6">
              <Image
                onClick={(e) => SwalFire(e)}
                src={Image4}
                alt="Picture of rose"
                className='image-size'
              />
            </div>
            <div className="col-md-3 p-3 w-100 col-6">
              <Image
                onClick={(e) => SwalFire(e)}
                src={Image5}
                alt="Picture of rose"
                className='image-size'
              />
            </div>
            <div className="col-md-3 p-3 w-100 col-6">
              <Image
                onClick={(e) => SwalFire(e)}
                src={Image6}
                alt="Picture of rose"
                className='image-size'
              />
            </div>
            <div className="col-md-3 p-3 w-100 col-6">
              <Image
                onClick={(e) => SwalFire(e)}
                src={Image7}
                alt="Picture of rose"
                className='image-size'
              />
            </div>
            <div className="col-md-3 p-3 w-100 col-6">
              <Image
                onClick={(e) => SwalFire(e)}
                src={Image8}
                alt="Picture of rose"
                className='image-size'
              />
            </div>
            <div className="col-md-3 p-3 w-100 col-6">
              <Image
                onClick={(e) => SwalFire(e)}
                src={Image9}
                alt="Picture of rose"
                className='image-size'
              />
            </div>
            <div className="col-md-3 p-3 w-100 col-6">
              <Image
                onClick={(e) => SwalFire(e)}
                src={Image10}
                alt="Picture of rose"
                className='image-size'
              />
            </div>
            <div className="col-md-3 p-3 w-100 col-6">
              <Image
                onClick={(e) => SwalFire(e)}
                src={Image11}
                alt="Picture of rose"
                className='image-size'
              />
            </div>
            <div className="col-md-3 p-3 w-100 col-6">
              <Image
                onClick={(e) => SwalFire(e)}
                src={Image12}
                alt="Picture of rose"
                className='image-size'
              />
            </div>
            <div className="col-md-3 p-3 w-100 col-6">
              <Image
                onClick={(e) => SwalFire(e)}
                src={Image13}
                alt="Picture of rose"
                className='image-size'
              />
            </div>
          </Masonry>
        </ResponsiveMasonry>
      </div>

    </div>
  )
}
