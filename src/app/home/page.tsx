'use client'

import LogoExample from '../asset/logo-example.jpg';
import Swal from 'sweetalert2'
import Image1 from '../asset/1.jpg'
import Image2 from '../asset/2.jpg'
import Image3 from '../asset/3.jpg'
import Image4 from '../asset/4.jpg'
import Image5 from '../asset/5.jpg'
import Image6 from '../asset/6.jpg'
import Image7 from '../asset/7.jpg'
import Image8 from '../asset/8.jpg'
import Image9 from '../asset/9.jpg'
import Image10 from '../asset/10.jpg'
import Image11 from '../asset/11.jpg'
import Image12 from '../asset/12.jpg'
import Image13 from '../asset/13.jpg'
import Image from 'next/image'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import 'animate.css';
import { use, useEffect, useState } from 'react';
import Loading from '../components/loading';

export default function Home() {

  useEffect(() => {
    setTimeout(() => {
      document.getElementById('loading')?.classList.add('d-none')
      document.getElementById('main-section')?.classList.remove('d-none')
    }, 1000);
  })

  useEffect(() => {
    setTimeout(() => {
      Swal.fire({
        confirmButtonText: 'Thank You!',
        title: 'Welcome To My Collection &#128516;',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }, 2000);
  }, [])


  function SwalFire(e: any) {
    // console.log(e.target.src);
    Swal.fire({
      // title: 'Sweet!',
      text: e.target.alt,
      imageUrl: e.target.src,
      // imageWidth: 100,
      // imageHeight: 200,
      imageAlt: 'No image found',
    })
  }

  const [search, Inputsearch] = useState('');

  useEffect(() => {
    const searchingClass = document.getElementsByClassName('searching');
    const searchInLowerCase = search.toLowerCase();
    for (let i = 0; i < searchingClass.length; i++) {
      let p = searchingClass[i].getElementsByTagName('p')[0];
      let name = p.innerText.toLowerCase();

      if (name.indexOf(searchInLowerCase) > -1) {
        searchingClass[i].classList.add("no-className");
        searchingClass[i].classList.remove("d-none");
      } else {
        searchingClass[i].classList.add("d-none");
        searchingClass[i].classList.remove("no-className");
      }
    }
  }, [search]);


  return (
    <>
      <div className='container-fluid'>
        <div className="row mt-3 justify-content-center">
          <div className="col-md-6 col-8">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z" /></svg></span>
              <input onChange={(e) => Inputsearch(e.target.value)} type="text" className="form-control form-control-sm" placeholder="Search Drawings" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            {/* <input type="text" className='form-control form-control-sm' name="" id="" /> */}
          </div>
          {/* <div className="col-md-2 col-2">
          <button className='btn btn-sm btn-primary'>Search</button>
        </div> */}
        </div>
        <Loading />
        <div className="row mobile-bottom-margin d-none" id='main-section'>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 3, 750: 4, 900: 6 }}>
            <Masonry gutter="0px" columnsCount={4}>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>Pokemon</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image1}
                  alt="Pokemon"
                  className='image-size'
                />
              </div>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>icecream</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image2}
                  alt="Ice-cream"
                  className='image-size'
                />
              </div>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>bt21</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image3}
                  alt="BT21"
                  className='image-size'
                />
              </div>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>shinchan</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image4}
                  alt="Shinchan"
                  className='image-size'
                />
              </div>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>minion</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image5}
                  alt="Minion"
                  className='image-size'
                />
              </div>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>spong bob</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image6}
                  alt="Spong Bob"
                  className='image-size'
                />
              </div>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>rabit</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image7}
                  alt="Rabit"
                  className='image-size'
                />
              </div>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>mr bean</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image8}
                  alt="Mr. Bean"
                  className='image-size'
                />
              </div>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>courage</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image9}
                  alt="Courage"
                  className='image-size'
                />
              </div>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>oggy</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image10}
                  alt="Oggy"
                  className='image-size'
                />
              </div>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>moon night</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image11}
                  alt="Moon"
                  className='image-size'
                />
              </div>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>children</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image12}
                  alt="Children"
                  className='image-size'
                />
              </div>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>children</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image13}
                  alt="Children"
                  className='image-size'
                />
              </div>
            </Masonry>
          </ResponsiveMasonry>
        </div>

      </div>

    </>
  )
}
