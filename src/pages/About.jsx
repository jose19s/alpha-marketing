import logo from '../assets/logos-global/logo-alpha.jpg'
import cdv from '../assets/Home/estadisticas.jpg'
import workT from '../assets/Home/team.png'
import NavMenu from '../pages/components/navMenu'
import imgLat from '../assets/Home/city_lat.jpg'
console.log(imgLat)



export default function About() {
    return (
        <div className="max-w-[1550] mx-auto">
            <header>
                <section>
                    {/* nav menu */}
                    <NavMenu/>
                    {/* nav menu */}
                </section>
            </header>
            <section className=" grid grid-cols-3">
                <div className="col-span-2 w-[90%] ">
                    {/* logo alpha */}
                    <div className="bg-white ml-24 ">
                        <img 
                            src={logo.src}    
                            className='w-96 h-28  md:flex  mx-auto mt-40 ml-56 content-center'/>
                        {/* fin de logo */}
                        {/* texto parrafos */}
                        <div>
                            <h2 className='text-black ml-24 mt-40 '>Experts brand consultant!</h2>
                            <p className='text-black ml-24  mt-3 '>
                            We are a marketing agency made up of different professionals in the digital <br />
                            world. We are specialized in obtaining leads for any type of industry, paid <br />
                            advertising on social networks and web development.</p>

                            <h2 className="text-black ml-24  mt-7">Motivations</h2>
                            <p className="text-black ml-24  mt-3 text-base">
                            Short history <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et a minima, veritatis <br />
                            distinctio, similique inventore atque architecto quis enim nulla consequuntur <br />
                            repudiandae ipsam? Accusamus optio reiciendis distinctio! Aut, alias laboriosam?</p>
                            <p className="text-black ml-24  mt-3 text-base">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, adipisci quod <br />
                            Namerecusandae pariatur nobis dignissimos ipsa nihil similique eligendi? Accusantium,</p>
                        </div>
                    </div>
                    {/* fin del texto */}
                    {/* cuadro developing */}
                    <div className='ml-44 mt-3 bg-white flex'>
                        <figure className='md:flex border border-black shadown-2xl   bg-slate-100  p-0 md:p-0 dark:bg-slate-800'>
                            <img 
                                src={cdv.src} 
                                className='w-24 h-24 md:w-48  md:h-full md:rounded-none rounded-full mx-auto'/>
                            <div className='pt-6 bg-gray-200  md:p-8 text-start   space-y-4 static'>
                                <blockquote>
                                <p className="text-lg font-medium">
                                history <br/>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                                Ratione quis quae laborum adipisci accusantium minima fugiat <br />
                                nemo alias facilis debitis aspernatur, dicta quisquam odit <br />
                                dignissimos et harum necessitatibus accusamus voluptatem!</p>  
                                </blockquote>
                                <figcaption className='font-medium'>
                                    <div className='text-sky-500 dark:text-sky-400'>
                                        Stonks
                                    </div>
                                    <div className='text-slate-700 dark:text-slate-500'>
                                        igual cosas de Stonks
                                    </div>
                                </figcaption>
                            </div>
                        </figure>
                    </div>
                    {/* fin del cuadro */}
                    {/* logo work team */}
                    <div className='px-20 mt-10'>
                        <h1 className='mx-auto mt-3 text-primary'>Work team</h1>
                        <img 
                        src={workT.src} 
                        className='mx-auto px-1 ' />
                    </div>
                    {/* fin del logo work team */}
                    {/* links */}
                    <div className='flex justify-center space-x-20  underline text-black pb-5 mt-12 ml-28'>
                    <a className="hover-a " href="Packages">Packages</a>
                    <a className="hover-a " href="Partners">Partners</a>
                    <a className="hover-a " href="#">Services</a>
                    </div>
                </div>
                {/* fin de los links */}
                {/*  este es el div de 30%, img */}
                <div  style={{background:`url(${imgLat.src})`}} className= {`grid grid-cols-4  bg-cover min-h-full`}>
                    {/* barra amarilla */}
                    <div className='bg-secondary w-[20%] flex'>
                        {/* div del texto en la img */}
                        <div className='mt-14 ml-20  px-24  fixed h-screen'>
                            <h1 className='text-white text-6xl'>Start <br /> boosting <br /> your <br /> brand <br /> whit the <br /> best </h1>
                            <br />
                            <h2 className='text-secondary'>25% OFF</h2>
                            <h3 className='text-gray-100'>On your first proyect</h3>
                            {/* fin del texto */}
                            {/* botón */}
                            <div className='mt-4 px-32'>
                                <button className='tagButton hover:bg-secondary hover:text-primary w-36 h-12'>Start Now!</button>
                            </div>
                            {/* fin del botón */}
                        </div>
                    </div>
                    {/* fin de la barra amarilla */}
                </div>
                {/* fin del div 30% */}
            </section>
            <div className='bg-secondary'>
                <p className='text-center text-black font-semibold py-2'>
                    Copyright © 2022 A-S ALPHA All rights reserved.
                </p>
            </div>
        </div>
    )
  }