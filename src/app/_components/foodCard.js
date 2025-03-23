import Image from "next/image"
import burger from "../../assets/Food/burger.png"
import leaf from "../../assets/Food/decor-leaf.svg"
import leaf2 from "../../assets/Food/decor-leaf-2.svg"
import foodshape from "../../assets/Food/food-shape.svg"
import burgerShape from "../../assets/Food/burger-shape.png"
import categoryCard from "../../assets/Food/catagory-card-shape.jpg"


export const FoodCard = () => {
    return (

        <div className="shadow-lg bg-no-repeat rounded-xl dark:bg-gray-800 dark:hover:bg-yellow-500  bg-cover p-5 hover:bg-yellow-500 bg-center w-full h-full  bg-white p-[20px_30px_50px] relative rounded-[14px] mt-[30px] overflow-hidden transition-all duration-300 ease-in-out food-card"
            style={{ backgroundImage: `url(${categoryCard.src})`, width: "300px", height: "100%" }}>
            <h5 className="head-font capitalize font-bold">5 products</h5>
            <div className="catagory-product-image text-center relative">
                <a href="shop.php">
                    <Image src={burger} alt="product-img" className="text-transparent relative z-10 right-0 left-0 mx-auto" />

                    <div className="decor-leaf absolute top-0 right-5">
                        <Image src={leaf} alt="shape-img" />
                    </div>
                    <div className="decor-leaf-2 absolute bottom-0 left-5">
                        <Image src={leaf2} alt="shape-img" />
                    </div>
                    <div className="burger-shape absolute top-10 left-11" >
                        <Image src={burgerShape} alt="shape-img" />
                    </div>
                </a>
            </div>
            <div className="catagory-product-content text-center relative ">
                <div className="catagory-product-icon relative flex justify-center mt-3">
                    <Image src={foodshape} alt="shape-text" className="mt-3" />
                </div>
                <div className="absolute food-name-card  left-0 right-0 mx-auto top-4    ">
                    <h3>
                        <a href="shop-single.php " className="head-font capitalize dark:text-white font-bold text-2xl">
                            pro pizza
                        </a>
                    </h3>
                    <p className="text-yellow-500">5 products</p>
                </div>
            </div>
        </div>
    )

}