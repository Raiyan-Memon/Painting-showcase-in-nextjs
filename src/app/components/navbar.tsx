'use client'

import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoExample from '../asset/logo-example.jpg'
import Image from 'next/image'

export default function Navbar() {

    const pathname = usePathname()

    // const [closeCanvas, UpdateCloseCanvas] = useState('')

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <>

            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid p-0">

                    <div className="row w-100 align-items-center">
                        <div className="col-md-4 col-4">
                            {/* <Image
                                src="https://pixabay.com/get/g56583a11818be0b39f466a3cd5b082fb432911a20000c37a3a17099bcbbbae4494811dfe96ac81522b4a48d84d4ae1cf8fb70662eb7be1cc4d9d5041ba3ad18a_640.jpg"
                                alt="Picture of rose"
                                width="30"
                                height="30"
                                className='rounded-circle'
                            /> */}
                            <Image
                                src={LogoExample}
                                alt="Picture of rose"
                                width="30"
                                height="30"
                                className='rounded-circle'
                            />

                        </div>
                        <div className="col-md-4 col-4 text-center">
                            <a className="navbar-brand" href="#">Manasi Arts &#10084;</a>
                        </div>
                        <div className="col-md-4 col-4 text-end p-0">
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                        </div>
                    </div>

                    <div className="offcanvas offcanvas-end text-bg-dark" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <hr />
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                    <Link className={'nav-link' + (pathname == "/" ? ' active' : '')} aria-current="page" href="/"><span className="mx-2"><svg className="" fill="white" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z" /></svg></span> Home</Link>
                                </li>
                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                    <Link className={'nav-link' + (pathname == "/about" ? ' active' : '')} aria-current="page" href="/about"><svg className="mx-2" fill="white" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z" /></svg> About</Link>
                                </li>
                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                    <Link className={'nav-link' + (pathname == "/contact" ? ' active' : '')} aria-current="page" href="/contact"><svg className="mx-2" fill="white" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z" /></svg> Contact</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <a className={'nav-link' + (pathname == "/about" ? ' active' : '')} href="#">Link</a>
                                </li> */}
                            </ul>
                            {/* <form className="d-flex mt-3" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-success" type="submit">Search</button>
                            </form> */}
                        </div>
                        <hr />
                        <h6 className="text-center">Manasi Arts &#10084;</h6>
                    </div>
                </div>
            </nav>

        </>
    )

}