import NavMenu from '../pages/components/navMenu'
import logoSec from '../assets/logos-global/logo-sec.svg'
import contacto from '../assets/Home/contacto1.jpg'



export default function Partners() {
    return (
      
        <section>
            <div className="flex justify-center pt-4 pb-2 bg-gray-900">
                <img 
                src={logoSec} 
                alt=""
                className='w-60 cursor-pointer' />
            </div>
            <div>
                {/* nav menu */}
                 <NavMenu/>
                {/* nav menu */}
            </div>
            <div style={{background:`url(${contacto.src})`}} className= {`bg-cover bg-fixed h-screen grid grid-cols-2`}>

                <div className='flex flex-col place-content-center ml-20'>
                    <h1 className='text-white pb-5'>
                    Communicate with marketing experts to raise your dreams
                    </h1>
                    {/* <h2 class="text-secondary"><u>See packages</u></h2> */}
                </div>
                <div className='p-20'>
                    <div className='flex flex-wrap gap-2 justify-end'>
                        <p className='text-xl text-white font-bold'>On your first project</p>
                        <h3 className='text-secondary text-2xl font-bold'>25% OFF</h3>
                    </div>
                    <div className='flex justify-end'>
                    <button class="tagButton hover:bg-secondary hover:text-primary ">Contact Now!</button>
                    </div>
                </div>


            </div>
                {/* global-footer */}
        </section>
    )
  }