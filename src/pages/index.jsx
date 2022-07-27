import NavMenu from '../pages/components/navMenu'
import logoSec from '../assets/logos-global/logo-sec.svg'
import portada from '../assets/Home/portada.jpg'
import marketing from '../assets/Home/marketing.png'
import code from '../assets/Home/code.png'
import diseño from '../assets/Home/design.png'
import team from '../assets/Home/team.png'
import planes from '../assets/Home/planes.jpg'

export default function Index() {
    return (
      //este es el home
      <div className=''>
        <header>
            <section className="bg-primary flex justify-between px-10 w-full shadow-lg">
                {/* logo alpha */}
                <div className="flex place-items-center pt-4 pb-3 mx-w-screen">
                    <img 
                    src={logoSec.src} 
                    alt="alpha marketing logo" 
                    className="w-60" />
                </div>
                  {/* phone */}
                  <div className='flex gap-10'>
                    <div className='flex place-items-center gap-2'>
                      {/* icono de mail */}
                    </div>
                    <div className='flex place-items-center gap-2'>
                      {/* icono de phone */}
                    </div>
               </div> 
            </section>
        </header>
        <section className=''>
          {/* fonde bg cover */}
          <div style={{background:`url(${portada.src})`}} className='bg-cover bg-fixed h-screen grid grid-cols-2'>
            <div className='flex flex-col place-content-center ml-20'>
              <h1 className="text-white pb-5">Hire marketing expets on demand</h1>
              <h2 className="text-secondary"><u>See packages</u></h2>
              <p className="text-white text-xl font-semibold absolute bottom-0">A.S ALPHA MARKETING</p>
            </div>
            <div className='p-20'>
              <div className='flex flex-wrap gap-2 justify-end'>
                <p className="text-xl text-white font-bold">On your first project</p>
                <h3 className="text-secondary text-2xl font-bold">25% OFF</h3>
              </div>
              <div className='flex justify-end'>
              <button className="tagButton hover:bg-secondary hover:text-primary ">Contact Now!</button>
              </div>
            </div>
          </div>
        </section>

        {/* nav menu */}
        <div >
          <NavMenu/>
        </div>
        {/* nav menu */}

        <section className='grid grid-cols-2 gap-16 bg-secondary'>
          <div className='bg-white p-20'>
            {/* marketing */}
            <div>
              <div className='flex place-items-center gap-3'>
                {/* FastForwardIcon
                con su clase: <FastForwardIcon class="h-8 w-8 text-secondary bg-primary rounded-full p-1"/>*/}
                <h2 className='text-primary font-bold'>Digital Marketing</h2>
              </div>
              <p className='text-jusitfy my-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                laudantium, voluptatibus unde blanditiis perspiciatis vitae, sequi
                quas adipisci natus enim cumque illum dolor error distinctio beatae
                commodi ut, dignissimos ab
              </p>
              <img 
                src={marketing.src} 
                alt="" 
                className='w-80 block mx-auto'/>
                <div className='flex flex-wrap gap-4 justify-center'>
                  {/* botón modelo: pasar clases a css */}
                  <button className="tagButton">SEM</button>
                  <button className="tagButton">SEO</button>
                  <button className="tagButton">Digital Campaigns</button>
                  <button className="tagButton">Market research</button>
                  <button className="text-primary text-lg font-bold">
                    <u>Read more...</u>
                  </button>
                </div>
            </div>
            {/* marketing */}
            
            {/* software */}

            <div className='mt-16'>
              <div className='flex place-items-center gap-3 mt-'>
                {/* FastForwardIcon
                con su clase: <FastForwardIcon class="h-8 w-8 text-secondary bg-primary rounded-full p-1"/>*/}
                <h2 className='text-primary font-bold'>Sofware Development</h2>
              </div>

              <p className='text-justify my-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              laudantium, voluptatibus unde blanditiis perspiciatis vitae, sequi
              quas adipisci natus enim cumque illum dolor error distinctio beatae
              commodi ut, dignissimos ab!
              </p>
              <img 
                src={code.src} 
                alt=""
                className='block mx-auto w-80'/>
                <div className='flex flex-wrap gap-4 justify-center pt-5'>
                  {/* botón modelo: pasar clases a css */}
                  <button className="tagButton">Web/mobile Applications</button>
                  <button className="tagButton">Custom Websites</button>
                  <button className="tagButton">Frontend</button>
                  <button className="tagButton">Backend</button>
                  <button className="text-primary text-lg font-bold">
                    <u>Read more...</u>
                  </button>
                </div>
            </div>

            {/* sofware */}
          </div>


          <div className='bg-white p-20'>
            {/* icono flecha */}

            {/* desing */}
            <div className=''>
              <div className='flex place-items-center gap-3'>
                {/* FastForwardIcon
                con su clase: <FastForwardIcon class="h-8 w-8 text-secondary bg-primary rounded-full p-1"/>*/}
                <h2 className='text-primary font-bold'>Graphic Desing</h2>
              </div>
              <p className="my-5 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                laudantium, voluptatibus unde blanditiis perspiciatis vitae, sequi
                quas adipisci natus enim cumque illum dolor error distinctio beatae
                commodi ut, dignissimos ab!
              </p>
              <img 
                src={diseño.src}
                alt=""
                className='w-80 block mx-auto' />
                <div className='flex flex-wrap gap-4 justify-center pt-5'>
                  {/* boton modelo: pasar clases a css */}
                  <button className="tagButton">Branding</button>
                  <button className="tagButton">User Experience</button>
                  <button className="tagButton">Social Media</button>
                  <button className="text-primary text-lg font-bold">
                    <u>Read more...</u>
                  </button>
                </div>
            </div>
            {/* ABOUT US */}
            
            <div className='mt-16'>
              {/* icon flecha */}
              <div className='flex place-items-center gap-3'>
                {/* FastForwardIcon
                con su clase: <FastForwardIcon class="h-8 w-8 text-secondary bg-primary rounded-full p-1"/>*/}
                <h2 className='text-primary font-bold'>About Us</h2>
              </div>
              <p className="text-justify mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                laudantium, voluptatibus unde blanditiis perspiciatis vitae, sequi
                quas adipisci natus enim cumque illum dolor error distinctio beatae
                commodi ut, dignissimos ab
              </p>
              <img 
                src={team.src}
                alt="" 
                className='w-80 block mx-auto -mt-8' />
                <div className="flex gap-4 justify-center pt-5">
                  {/* <!-- boton modelo: pasar clases a css --> */}
                  <button className="tagButton">Team Work</button>
                  <button className="tagButton">History</button>
                  <button className="tagButton">Motivations</button>
                  <button className="text-primary text-lg font-bold">
                    <u>Read more...</u>
                  </button>
                </div>
            </div>
            {/* ABOUT US */}
          </div>
        </section>
        {/* FISRST LEABOX */}

        <section>
          <div style={{background:`url(${planes.src})`}} className='bg-cover bg-fixed h-full min-h-screen'>
            <div className='grid grid-cols-2'>
              <div className='p-20 mt-10'>
                <h1 className="text-black">Booost your brand with the bests</h1>
                <h2 className="text-black mt-4">
                  Get a special discount on your first project with us!
                </h2>
              </div>
              <div>
                {/* application-form
                  bg=""
                  labelsColor="dark"
                  inputColor="dark"
                  inputBorderColor="primary"
                  buttonColor="primary" */}
              </div>
            </div>
          </div>
        </section>
        {/* first leabox */}
        <div>
        <globalFooter/>
        </div>
        


      </div>
    )
  }