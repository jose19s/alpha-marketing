import React from "react";


const NavMenu = () => {
    return(
        <section className="bg-primary py-4 shadow-lg">
            <nav>
                <ul className="flex justify-around">
                    <li className="text-white font-semibold hover:font-bold  ">Company</li>
                    <li className="text-white font-semibold hover:font-bold">Services</li>
                    <li className="text-white font-semibold hover:font-bold">Packages</li>
                    <li className="text-white font-semibold hover:font-bold">Partners</li>
                    <li className="text-white font-semibold hover:font-bold">FAC</li>
                </ul>
            </nav>
        </section>
    )
}

export default NavMenu