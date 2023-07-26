

import Image1 from '../asset/edited.jpg';
import Image from 'next/image'
import Instagram from '../asset/logo/instagram.png';
import Linkedin from '../asset/logo/linkedin.png'
import Pinterest from '../asset/logo/pinterest.png';
import Mail from '../asset/logo/mail.png'
import '../about/about.css';
import { Metadata } from 'next'
import Swiper from '../components/swiper';


export const metadata: Metadata = {
    title: 'Manasi Arts | About',
}

export default function Page() {

    return (
        <>
            <div className="container mt-5">
                <div className="row align-items-center text-center justify-content-center">
                    <Swiper />
                    {/* <div className="col-md-2 col-6 text-center">


                        <Image
                            src={Image1}
                            alt="Ice-cream"
                            className='image-size border border-white p-3 rounded-circle'
                        />
                    </div> */}
                    <div className="col-md-12">
                        <h3 className='text-center mt-4'>I am <span>Manasi</span></h3>
                        <h6 className='mt-2'>Drawing things makes them seem more real and makes me feel more alive.</h6>

                        <div className="row mt-3  justify-content-center">
                        <div className="col-md-1 col-2">
                                <a title='Pinterest' href="https://in.pinterest.com/manasi_dk/">
                                    <Image
                                        src={Pinterest}
                                        alt="Ice-cream"
                                        className='image-size border border-white p-2 rounded-circle'
                                    />
                                </a>
                            </div>
                            <div className="col-md-1 col-2">
                                <a title='My Email : manasidkarts@gmail.com' href="mailto:manasidkarts@gmail.com"><Image
                                    src={Mail}
                                    alt="Ice-cream"
                                    className='image-size border border-white p-2 rounded-circle'
                                /></a>
                            </div>
                            <div className="col-md-1 col-2">
                                <a title='Instagram' href="#">
                                    <Image
                                        src={Instagram}
                                        alt="Ice-cream"
                                        className='image-size border border-white p-2 rounded-circle'
                                    />
                                </a>
                            </div>
                            <div className="col-md-1 col-2">
                                <a title='LinkedIn' href="#">
                                    <Image
                                        src={Linkedin}
                                        alt="Ice-cream"
                                        className='image-size border border-white p-2 rounded-circle'
                                    />
                                </a>
                            </div>
                        
                            {/* <div className="col-md-1 col-2">
                                logo1
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}