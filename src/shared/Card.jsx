
const Card = ({children}) => {
    return (
        <div className="card shadow-md my-5 relative py-[40px] px-[20px] rounded-[15px] bg-white text-[#333]">
            {children}
        </div>
    );
};

export default Card;
