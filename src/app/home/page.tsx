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
import Image14 from '../asset/14.jpg'
import Image15 from '../asset/15.jpg'
import Image16 from '../asset/16.jpg'
import Image17 from '../asset/17.jpg'
import Image18 from '../asset/18.jpg'
import Image19 from '../asset/19.jpg'
import Image20 from '../asset/20.jpg'
import Image21 from '../asset/21.jpg'
import Image22 from '../asset/22.jpg'
import Image23 from '../asset/23.jpg'
import Image24 from '../asset/24.jpg'
import Image25 from '../asset/25.jpg'
import Image26 from '../asset/26.jpg'
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
        html: '<p>Click on any pic to zoom</p>',
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
    Swal.fire({
      text: e.target.alt,
      imageUrl: e.target.src,
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
          </div>
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
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>Peacock</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image14}
                  alt="Peacock"
                  className='image-size'
                />
              </div>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>night road</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image15}
                  alt="Night Road"
                  className='image-size'
                />
              </div>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>cute pig</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image16}
                  alt="Piggies"
                  className='image-size'
                />
              </div>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>mouse</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image18}
                  alt="Mouse"
                  className='image-size'
                />
              </div>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>giraffe panda frog</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image19}
                  alt="Giraffe Panda Frog"
                  className='image-size'
                />
              </div>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>Candy</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image20}
                  alt="Candies"
                  className='image-size'
                />
              </div>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>mickey mouse</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image21}
                  alt="Mickey Mouse"
                  className='image-size'
                />
              </div>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>swag chicken</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image22}
                  alt="Swaggy Chicken"
                  className='image-size'
                />
              </div>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>giraffe</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image23}
                  alt="Giraffes"
                  className='image-size'
                />
              </div>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>hen swimming</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image24}
                  alt="Cute Hen Swimming"
                  className='image-size'
                />
              </div>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>BTS</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image25}
                  alt="BTS"
                  className='image-size'
                />
              </div>
              <div className="col-md-3 p-1 w-100 col-6 searching cursor-pointer">
                <p hidden>Shinchan</p>
                <Image
                  onClick={(e) => SwalFire(e)}
                  src={Image26}
                  alt="Shinchan"
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
