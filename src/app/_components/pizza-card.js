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
                <div className="lg:col-span-5 h-96 rounded-3xl relative bg-gray-200 p-4" style={{ backgroundImage: `url(${offerbg.src})` }}>
                    <div className="grid grid-cols-2 h-full">
                        <div className="flex flex-col align-items-center justify-center">
                            <div class="offer-content">
                                <h5 className="head-font text-red-500 text-xl font-semibold ">crispy, every bite taste</h5>
                                <h3 className="head-font text-6xl text-white font-bold uppercase">
                                    SUPER <br/>
                                        DELICIOUS
                                </h3>
                                <Image className="w-28" src={percent50} alt="dasf" />
                            </div>
                        </div>
                        <div className="">
                            <Image src={burgerText} alt="dasf" />
                            <Image className="absolute w-72 bottom-0 right-0" src={mainfood} alt="dsaf" />
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-7 rounded-3xl h-96 p-4" style={{ backgroundImage: `url(${bg.src})` }}>
                    <div className="grid grid-cols-2">
                        <div>
                            <Image src={pizzatext} alt="pizza" />
                        </div>
                        <div>
                            <Image src={pizzatext2} alt="pizza" />
                            <Image src={pizza} alt="pizza" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}