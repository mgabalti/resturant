export const Footer = () => {


    const footerLink = [
        {
            title: "Company",
            links: [
                { name: "About" },
                { name: "Careers" },
                { name: "Mobile" },
                { name: "Blog" },
                { name: "How we work?" },
            ]

        },
        {

            title: 'Information',
            links: [
                { name: 'Help/ FAQ' },
                { name: 'Press' },
                { name: 'Affiliates' },
                { name: 'Hotel owners' },
                { name: 'Partners' },
            ]

        },
        {

            title: "More",
            links: [
                { name: "    Home" },
                { name: "About Us" },
                { name: "Recipe" },
                { name: "Gallery" },
            ]
        }
    ]
    return (
        <footer className="pt-16 bg-darkmode">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div className="grid grid-cols-1 sm:grid-cols-5 lg:gap-20 md:gap-6 sm:gap-12 gap-6 pb-16">
                    <div className="col-span-2">
                        <a
                            className="flex items-center text-black dark:text-white text-2xl font-semibold gap-4"
                            
                        >
                            <img
                                alt="logo"
                                loading="lazy"
                                width="160"
                                height="50"
                                decoding="async"
                                data-nimg="1"
                                className="hide-in-light"
                                fill="white"
                                src="./logo/foodking-white.svg"
                            />
                           
                            <img
                                alt="logo"
                                loading="lazy"
                                width="160"
                                height="50"
                                className="hide-in-dark"
                                decoding="async"
                                data-nimg="1"
                                fill="white"
                                src="./logo/foodking-black.svg"
                            />
                           
                        </a>
                        <p className="text-xs font-medium text-gray-800 dark:text-white mt-5 mb-16 max-w-70%">
                            Open an account in minutes, get full financial control for much longer.
                        </p>
                        <div className="flex gap-6 items-center">
                            <a className="group bg-white hover:bg-primary rounded-full shadow-xl p-3" href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="img"
                                    className="iconify iconify--fa6-brands group-hover:text-white text-black"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 320 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M80 299.3V512h116V299.3h86.5l18-97.8H196v-34.6c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8z"
                                    ></path>
                                </svg>
                            </a>
                            <a className="group bg-white hover:bg-primary rounded-full shadow-xl p-3" href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="img"
                                    className="iconify iconify--fa6-brands group-hover:text-white text-black"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 448 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141m0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7m146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8m76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8M398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1"
                                    ></path>
                                </svg>
                            </a>
                            <a className="group bg-white hover:bg-primary rounded-full shadow-xl p-3" href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="img"
                                    className="iconify iconify--fa6-brands group-hover:text-white text-black"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                        {footerLink.map((link, index) => (
                    <div  key={index}>
                            <>
                                <h4 className="text-black dark:text-white mb-9 font-semibold text-xl">{link.title}</h4>
                                <ul>
                                    {link.links.map((l, i) => (
                                       <li key={i} className="pb-5">
                                       <a
                                           className="text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary text-base"
                                           href="#"
                                       >
                                         {l.name}
                                       </a>
                                   </li>
                                    ))}
                                </ul>
                            </>
                    </div>
                        ))}

                </div>
                <div className="border-t border-grey/15 dark:border-white/15 py-10 flex justify-between items-center">
                    <p className="text-sm text-gray-800 dark:text-white">
                        @2025 - Chef's kitchen. Distributed By
                        <a target="_blank" className="hover:text-primary" href="https://themewagon.com/">
                            ThemeWagon
                        </a>
                        and Developed by
                        <a className="hover:text-primary" href="https://getnextjstemplates.com/">
                            GetNextjsTemplates
                        </a>
                    </p>
                    <div>
                        <a
                            className="text-sm  text-gray-800 dark:text-white px-5 border-r border-grey/15 dark:border-white/15 hover:text-primary dark:hover:text-primary"
                            href="#"
                        >
                            Privacy policy
                        </a>
                        <a
                            className="text-sm  text-gray-800 dark:text-white px-5 hover:text-primary dark:hover:text-primary"
                            href="#"
                        >
                            Terms &amp; conditions
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};