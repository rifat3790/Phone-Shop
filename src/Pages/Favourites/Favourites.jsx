import { useEffect, useState } from "react";
import PhoneCard from "../Phone/PhoneCard";
import FavouritesCard from "./FavouritesCard";

const Favourites = () => {


    const [favorites, setFavorites] = useState([]);

    const [noFound, setNoFound] = useState(false);

    const [isShow, setIsShow] = useState(false);

    const [totalPrice, setTotalPrice] = useState(0);

    
    useEffect(()=>{
        const favorItems = JSON.parse(localStorage.getItem("favorites"));
        if(favorItems){
            setFavorites(favorItems);
            const total = favorItems.reduce((preValue, currentItem)=> preValue + currentItem.price, 0 )
            setTotalPrice(total);
        }
        else{
            setNoFound("No data found");
        }
    },[])

    // console.log(isShow);
    // console.log(favorites);

    const handleRemove = () => {
        localStorage.clear();
        setFavorites([]);
        setNoFound("No data found");
    };

    return (
        <div>
            <h1>Favorites items: {favorites.length}</h1>
            <h3 className="text-xl text-center my-5 font-semibold">Total Price: {totalPrice.toFixed(2)}</h3>
            {noFound? <p className="h-[80vh] flex justify-center items-center">{noFound}</p>: <div>

                {favorites.length > 0 && <div className="flex justify-center items-center"><button onClick={handleRemove} className="btn btn-secondary">Delete All Favorites</button></div>}


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-10">
                 {
                    isShow ? favorites.map(phone => <FavouritesCard key={phone.id} phone={phone}></FavouritesCard>) : favorites.slice(0,4).map(phone => <FavouritesCard key={phone.id} phone={phone}></FavouritesCard>)
                 }
                </div>

                {favorites.length >4 ? <div className="flex justify-center items-center"><button onClick={()=> setIsShow(!isShow)} className="btn btn-primary">{isShow? <p>Show Less</p>: <p>Show More</p>}</button></div> : ""}
                
                </div>}
        </div>
    );
};

export default Favourites;