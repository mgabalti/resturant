import Image from "next/image";
import bg from "../../assets/Food/pizza-bg.png";
import pizzatext from "../../assets/Food/pizza-text.png";
import pizzatext2 from "../../assets/Food/pizza-text-2.png";
import pizza from "../../assets/Food/pizza-2.png";
import offerbg from "../../assets/Food/offer-bg.png";
import mainfood from "../../assets/Food/main-food.png";
import burgerText from "../../assets/Food/burger-text.png";
import percent50 from "../../assets/Food/50percent-off.png";

export const PizzaCard = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 ">
                <div className="lg:col-span-5 sm:h-96 rounded-3xl relative bg-gray-200 p-4 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${offerbg.src})` }}>
                    <div className="grid sm:grid-cols-2 grid-cols-1 h-full">
                        <div className="flex flex-col align-items-center justify-center">
                            <div class="offer-content">
                                <h5 className="head-font text-red-500 text-xl font-semibold text-center sm:text-left">crispy, every bite taste</h5>
                                <h3 className="head-font text-6xl text-center sm:text-left text-white font-bold uppercase">
                                    SUPER <br/>
                                        DELICIOUS
                                </h3>
                                <Image className="w-28 hidden  sm:block " src={percent50} alt="dasf" />
                            </div>
                        </div>
                        <div className="">
                            <Image src={burgerText} className="hidden  sm:block" alt="dasf" />
                            <Image className="sm:absolute sm:w-72  sm:mt-0 bottom-0 right-0  ml-10 sm-ml-0" src={mainfood} alt="dsaf" />
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-7 rounded-3xl sm:h-96 p-4 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bg.src})` }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:h-full items-center ">
                        <div>
                            <Image src={pizzatext} alt="pizza"  className="w-32 sm:w-10/12"/>
                        </div>
                        <div>
                            <Image src={pizzatext2} alt="pizza" className="mx-auto" />
                            <Image src={pizza} alt="pizza" className="sm:w-100 w-9/12 mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}