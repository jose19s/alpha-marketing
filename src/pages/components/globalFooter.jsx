import logo from '../logo-global/alpha_amarillo.svg'



const globalFooter = () => {
    return(
        //footer
        <section>
            <div className="bg-secondary gap-16 grid grid-cols-2 h-full min-h-screen">
                <div className="bg-primary">
                    <div className="flex place-items-end gap-4 ml-32 mt-40">
                        <img 
                            src={logo} 
                            alt="" 
                            className="w-10" />
                            <h2 className='text-white font-bold'>Conect whit us</h2>
                    </div>
                    <div className='flex ml-32 gap-4 mt-8'>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="40"
                            height="40"
                            viewBox="0 0 172 172"
                            style="fill: #000000">
                            
                            <g
                                fill="none"
                                fill-rule="nonzero"
                                stroke="none"
                                stroke-width="1"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="10"
                                stroke-dasharray=""
                                stroke-dashoffset="0"
                                font-family="none"
                                font-weight="none"
                                font-size="none"
                                text-anchor="none"
                                style="mix-blend-mode: normal">
                                    <path d="M0,172v-172h172v172z" fill="none"></path>
                                    <g fill="#f9ff00">
                                    <path
                                        d="M86,14.33333c-39.41667,0 -71.66667,32.25 -71.66667,71.66667c0,12.9 3.58893,25.08333 9.32227,35.83333l-9.32227,35.83333l37.26107,-8.5944c10.75,5.73333 22.22227,8.5944 34.4056,8.5944c39.41667,0 71.66667,-32.25 71.66667,-71.66667c0,-19.35 -7.16947,-37.26387 -20.78614,-50.88053c-13.61667,-13.61667 -31.53053,-20.78613 -50.88053,-20.78613zM86,28.66667c15.05,0 29.37774,5.73893 40.8444,16.48893c10.75,11.46667 16.48893,25.7944 16.48893,40.8444c0,31.53333 -25.8,57.33333 -57.33333,57.33333c-9.31667,0 -19.3556,-2.15 -27.23893,-7.16667l-5.01107,-2.86947l-5.01107,1.44173l-14.33333,3.58333l3.58333,-12.9056l1.42773,-5.73893l-2.86947,-5.01107c-5.01667,-8.6 -7.88053,-18.63333 -7.88053,-28.66667c0,-31.53333 25.8,-57.33333 57.33333,-57.33333zM60.91667,53.03613c-1.43333,0 -3.57773,-0.0084 -5.01107,2.1416c-2.15,2.15 -6.4528,6.4612 -6.4528,15.0612c0,8.6 6.45,17.1972 7.16667,18.63054c1.43333,1.43333 12.8916,20.05827 30.80827,27.22493c15.05,5.73333 17.91667,4.31119 21.5,4.31119c3.58333,-0.71667 10.7584,-4.3084 12.19173,-8.6084c1.43333,-4.3 1.42493,-7.88613 2.1416,-10.03613c-0.71667,-0.71667 -1.43333,-1.42493 -3.58333,-2.1416c-1.43333,-0.71667 -10.02774,-5.02227 -12.17774,-5.73894c-2.15,-0.71667 -2.86386,-1.43613 -4.2972,0.71387c-1.43333,2.15 -5.02227,5.73333 -5.73894,7.16667c-0.71667,1.43333 -1.43333,1.44453 -3.58333,0.72786c-1.43333,-0.71667 -7.16667,-2.1584 -14.33333,-8.6084c-5.73333,-4.3 -9.31946,-10.02773 -10.03613,-12.17773c-1.43333,-1.43333 0.0112,-2.86667 0.72786,-3.58333l2.85547,-2.86947c0.71667,-0.71667 0.72507,-2.1528 1.44173,-2.86947c0.71667,-0.71666 0.71667,-1.43613 0,-2.86946c-0.71667,-1.43333 -4.3056,-10.02214 -5.73893,-13.60547c-1.43333,-2.86667 -2.86387,-2.86947 -4.2972,-2.86947z"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="40"
                            height="40"
                            viewBox="0 0 172 172"
                            style="fill: #000000"
                        >
                            <g
                                fill="none"
                                fill-rule="nonzero"
                                stroke="none"
                                stroke-width="1"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="10"
                                stroke-dasharray=""
                                stroke-dashoffset="0"
                                font-family="none"
                                font-weight="none"
                                font-size="none"
                                text-anchor="none"
                                style="mix-blend-mode: normal"
                            >
                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                <g fill="#f9ff00">
                                <path
                                    d="M137.6,22.93333h-103.2c-6.33533,0 -11.46667,5.13133 -11.46667,11.46667v103.2c0,6.33533 5.13133,11.46667 11.46667,11.46667h103.2c6.33533,0 11.46667,-5.13133 11.46667,-11.46667v-103.2c0,-6.33533 -5.13133,-11.46667 -11.46667,-11.46667zM62.80293,126.13333h-16.91333v-54.4208h16.91333zM54.17427,63.9324c-5.4524,0 -9.86133,-4.4204 -9.86133,-9.86133c0,-5.44093 4.41467,-9.8556 9.86133,-9.8556c5.4352,0 9.8556,4.4204 9.8556,9.8556c0,5.44093 -4.4204,9.86133 -9.8556,9.86133zM126.15627,126.13333h-16.90187v-26.46507c0,-6.3124 -0.11467,-14.4308 -8.7892,-14.4308c-8.80067,0 -10.15373,6.87427 -10.15373,13.97213v26.92373h-16.90187v-54.4208h16.22533v7.43613h0.22933c2.25893,-4.27707 7.7744,-8.7892 16.00173,-8.7892c17.12547,0 20.29027,11.27173 20.29027,25.92613z"
                                ></path>
                                </g>
                            </g>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="40"
                            height="40"
                            viewBox="0 0 172 172"
                            style="fill: #000000"
                        >
                            <g
                                fill="none"
                                fill-rule="nonzero"
                                stroke="none"
                                stroke-width="1"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="10"
                                stroke-dasharray=""
                                stroke-dashoffset="0"
                                font-family="none"
                                font-weight="none"
                                font-size="none"
                                text-anchor="none"
                                style="mix-blend-mode: normal"
                            >
                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                <g fill="#f9ff00">
                                <path
                                    d="M57.32214,17.2c-22.12493,0 -40.12214,18.01386 -40.12214,40.14453v57.33333c0,22.12493 18.01386,40.12214 40.14453,40.12214h57.33333c22.12493,0 40.12214,-18.01386 40.12214,-40.14453v-57.33333c0,-22.12493 -18.01386,-40.12214 -40.14453,-40.12214zM126.13333,40.13333c3.1648,0 5.73333,2.56853 5.73333,5.73333c0,3.1648 -2.56853,5.73333 -5.73333,5.73333c-3.1648,0 -5.73333,-2.56853 -5.73333,-5.73333c0,-3.1648 2.56853,-5.73333 5.73333,-5.73333zM86,51.6c18.9716,0 34.4,15.4284 34.4,34.4c0,18.9716 -15.4284,34.4 -34.4,34.4c-18.9716,0 -34.4,-15.4284 -34.4,-34.4c0,-18.9716 15.4284,-34.4 34.4,-34.4zM86,63.06667c-12.66573,0 -22.93333,10.2676 -22.93333,22.93333c0,12.66573 10.2676,22.93333 22.93333,22.93333c12.66573,0 22.93333,-10.2676 22.93333,-22.93333c0,-12.66573 -10.2676,-22.93333 -22.93333,-22.93333z"
                                ></path>
                                </g>
                            </g>
                        </svg>              
                    </div>
                    <div className="ml-32">
                        <p className="text-white text-lg mt-8">
                            (310) 637-9195 3801 Louise St <br />
                            Lynwood, California(CA),<br />
                            90262
                        </p>
                    </div>
                    <div className="ml-32 pr-20 text-justify">
                        <p className="text-white text-lg mt-3">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
                            expedita quo cumque animi neque quia sequi nulla, possimus iure.
                            Est, quasi qui incidunt amet dolores temporibus odio cum id
                            architecto.
                        </p>
                    </div>
                </div>
                <div className="bg-primary">
                    <div className="mt-40 ml-32">
                        <h1 className="text-white">Partners</h1>
                        <div>
                            <img src="" alt="partnerlogo" />
                            <img src="" alt="partnerlogo" />
                            <img src="" alt="partnerlogo" />
                        </div>
                        <button className="tagButton-sec">See our work</button>
                    </div>
                </div>
                <div className="bg-secondary">
                    <p className="text-center text-black font-semibold py-2">
                        Copyright © 2022 A.S ALPHA All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default globalFooter