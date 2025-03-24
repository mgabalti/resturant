import Image from "next/image"
import chichen from "../../assets/Food/chicken.png";
import burger2 from "../../assets/Food/burger2.png";
import pizza from "../../assets/Food/pizza.png";
import combopizza from "../../assets/Food/combo-pizza-text.png";
import bigpizza from "../../assets/Food/big-pizza.png";
import combobg from "../../assets/Food/comboo-bg.jpg";
import percent50 from "../../assets/Food/50percent-off-2.png";
import drinks from "../../assets/Food/drinks.png";

export const BigPizza = () => {
    return (
       <div className="grid grid-cols-12 bg-white dark:bg-gray-900 relative ">
            <Image src={drinks} alt="img" className="absolute left-0 bottom-0 sm:block hidden"/>
         <div className="food-comboo-content lg:col-span-5 col-span-12 sm:pl-36 pt-20 pl-4 pr-4 sm:pr-10 relative">
            <div className="section-title">
                <span className="head-font uppercase font-semibold text-red-500" >crispy, every bite taste</span>
                <h2 className="text-6xl font-bold head-font uppercase dark:text-white">
                    trending Food combo
                    offer less <span>20%</span>
                </h2>
            </div>
            <p className="my-5 dark:text-white"  >
                A team of dreamers and doers building unique interactive music and art festivals.
            </p>
            <div className="flex flex-col gap-4" id="nav-tab" role="tablist">
                <button className=" bg-yellow-500 p-3" >
                    <span className="flex items-center gap-4">
                        <span className="offer-image">
                            <Image src={chichen} alt="img"/>
                        </span>
                        <span className="font-semibold head-font">
                            30% off 4pcs hot crispy &amp; 8 pcs wing
                        </span>
                    </span>
                </button>
                <button className="bg-gray-100 p-3 " >
                    <span className="flex items-center gap-4">
                        <span className="offer-image">
                            <Image src={burger2} alt="img"/>
                        </span>
                        <span className="font-semibold head-font">
                            20% off tasty pizza with drink
                        </span>
                    </span>
                </button>
                <button className="bg-gray-100 p-3"  >
                    <span className="flex items-center gap-4">
                        <span className="offer-image">
                            <Image src={pizza} alt="img"/>
                        </span>
                        <span className="font-semibold head-font">
                            2pcs humbergur with drinks &amp; sauce
                        </span>
                    </span>
                </button>
            </div>
        </div>
        <div className="lg:col-span-7 py-10 relative lg:block hidden" style={{backgroundImage: `url(${combobg.src})`}}>
        <Image src={combopizza} alt="img" className="ml-10"/>
        <Image src={percent50} alt="img" className="absolute top-0 right-1/3"/>
        <Image src={bigpizza} alt="img"/>
        </div>
       </div>
    )
}