import LogoExample from '../app/asset/logo-example.jpg'
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

export default function Home() {
  return (
    <div className='container'>
      {/* <h2 className='text-light'>Manasi Webiste</h2> */}

      <div className="row">
        <div className="col-md-3 p-4">
          <Image
            src={Image1}
            alt="Picture of rose"
            className='image-size'
          />
        </div>
        <div className="col-md-3 p-4">
          <Image
            src={Image2}
            alt="Picture of rose"
            className='image-size'
          />
        </div>
        <div className="col-md-3 p-4">
          <Image
            src={Image3}
            alt="Picture of rose"
            className='image-size'
          />
        </div>
        <div className="col-md-3 p-4">
          <Image
            src={Image4}
            alt="Picture of rose"
            className='image-size'
          />
        </div>
        <div className="col-md-3 p-4">
          <Image
            src={Image5}
            alt="Picture of rose"
            className='image-size'
          />
        </div>
        <div className="col-md-3 p-4">
          <Image
            src={Image6}
            alt="Picture of rose"
            className='image-size'
          />
        </div>
        <div className="col-md-3 p-4">
          <Image
            src={Image7}
            alt="Picture of rose"
            className='image-size'
          />
        </div>
        <div className="col-md-3 p-4">
          <Image
            src={Image8}
            alt="Picture of rose"
            className='image-size'
          />
        </div>
        <div className="col-md-3 p-4">
          <Image
            src={Image9}
            alt="Picture of rose"
            className='image-size'
          />
        </div>
        <div className="col-md-3 p-4">
          <Image
            src={Image10}
            alt="Picture of rose"
            className='image-size'
          />
        </div>
        <div className="col-md-3 p-4">
          <Image
            src={Image11}
            alt="Picture of rose"
            className='image-size'
          />
        </div>
        <div className="col-md-3 p-4">
          <Image
            src={Image12}
            alt="Picture of rose"
            className='image-size'
          />
        </div>
        <div className="col-md-3 p-4">
          <Image
            src={Image13}
            alt="Picture of rose"
            className='image-size'
          />
        </div>
      </div>

    </div>
  )
}
