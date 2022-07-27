import NavMenu from '../pages/components/navMenu'
import port from '../assets/packages/portada2.jpg'





export default function Services() {
    return(
        <div className='w-full'>
            <section>
                <header>
                    {/* nav menu */}
                    <NavMenu/>
                    {/* nav menu */}
                </header>
            </section>
            <section>
                <div style={{background:`url(${port.src})`}} className='bg-hover h-full min-h-screen'>
                <div className="  flex flex-col md:flex-row px-2 md:px-0">
                <div className="mt-56 w-full md:w-1/3 bg-white opacity-85 rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
                        <h3 className="text-black text-lg">Intro</h3>
                        <p className="text-black mt-1"><span className="font-bold text-black text-4xl">$29</span> /Month</p>
                        <p className="text-sm text-black mt-2">For most businesses that want to optimize web queries.</p>
                        <div className="text-sm teblack mt-4">
                            <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> All limited links</p>
                            <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Own analytics platform</p>
                            <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Chat support</p>
                            <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Optimize hashtags</p>
                            <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Unlimited users</p>
                        </div>
                        <button className="w-full text-black border border-black rounded hover:bg-primary hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">Choose Plan</button>
                    </div>
                    <div className="mt-56 w-full md:w-1/3 bg-white opacity-85 rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
                        <h3 className="text-black text-lg">Base</h3>
                        <p className="text-black mt-1"><span className="font-bold text-black text-4xl">$69</span> /Month</p>
                        <p className="text-sm text-black mt-2">For most businesses that want to optimize web queries.</p>
                        <div className="text-sm teblack mt-4">
                            <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> All limited links</p>
                            <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Own analytics platform</p>
                            <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Chat support</p>
                            <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Optimize hashtags</p>
                            <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Unlimited users</p>
                        </div>
                        <button className="w-full text-black border border-black rounded hover:bg-primary hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">Choose Plan</button>
                    </div>
                    <div className="mt-56 w-full md:w-1/3 text-black bg-secondary hover:bg-primary   hover:text-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
                        <h3 className="text-lg  text-opacity-100">Popular</h3>
                        <p className="mt-1"><span className="font-bold text-4xl">$99</span> /Month</p>
                        <p className="text-sm opacity-75 mt-2">For most businesses that want to optimize web queries.</p>
                        <div className="text-sm mt-4">
                            <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> All limited links</p>
                            <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Own analytics platform</p>
                            <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Chat support</p>
                            <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Optimize hashtags</p>
                            <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Unlimited users</p>
                        </div>
                        <button className="w-full text-white bg-primary hover:bg-secondary hover:text-black rounded opacity-100 hover:opacity-100 hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">Choose Plan</button>
                    </div>
                    <div className="mt-56 w-full md:w-1/3 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 mb-10 md:mb-0">
                        <h3 className="text-black text-lg">Enterprise</h3>
                        <p className="text-black mt-1"><span className="font-bold text-black text-4xl">$299</span> /Month</p>
                        <p className="text-sm text-black mt-2">For most businesses that want to optimize web queries.</p>
                        <div className="text-sm text-black mt-4">
                            <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> All limited links</p>
                            <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Own analytics platform</p>
                            <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Chat support</p>
                            <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Optimize hashtags</p>
                            <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> Unlimited users</p>
                        </div>
                        <button className="w-full text-black border border-black rounded hover:bg-primary hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">Choose Plan</button>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}