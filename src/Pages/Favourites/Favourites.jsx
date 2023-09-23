import { useEffect, useState } from "react";
import PhoneCard from "../Phone/PhoneCard";
import FavouritesCard from "./FavouritesCard";

const Favourites = () => {


    const [favorites, setFavorites] = useState([]);

    const [noFound, setNoFound] = useState(false);

    
    useEffect(()=>{
        const favorItems = JSON.parse(localStorage.getItem("favorites"));
        if(favorItems){
            setFavorites(favorItems);
        }
        else{
            setNoFound("No data found");
        }
    },[])

    console.log(favorites);

    const handleRemove = () => {
        localStorage.clear();
        setFavorites([]);
        setNoFound("No data found");
    };

    return (
        <div>
            <h1>Favorites items: {favorites.length}</h1>
            {noFound? <p className="h-[80vh] flex justify-center items-center">{noFound}</p>: <div>

                {favorites.length > 0 && <div className="flex justify-center items-center"><button onClick={handleRemove} className="btn btn-secondary">Delete All Favorites</button></div>}


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-10">
                 {
                    favorites.map(phone => <FavouritesCard key={phone.id} phone={phone}></FavouritesCard>)
                 }
                </div>

                <div className="flex justify-center items-center"><button onClick={handleRemove} className="btn btn-secondary">Delete All Favorites</button></div>
                
                </div>}
        </div>
    );
};

export default Favourites;