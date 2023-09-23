import PhonesCard from "./PhonesCard";

const Phones = ({phones}) => {
    // console.log(phones);
    return (
        <div className="py-10">
            <h1 className="text-2xl text-center">All categories phones</h1>
            <div>
                {
                    phones?.map(phone => <PhonesCard key={phone.id}></PhonesCard>)
                }
            </div>
        </div>
    );
};

export default Phones;