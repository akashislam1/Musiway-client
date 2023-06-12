const ClassesCard = ({ classData, isAdmin, isInstructor, handleSelect }) => {
  const { image, title, price, availableSeats, instructor } = classData || {};
  return (
    <div
      className={` ${
        availableSeats === 0
          ? "bg-red-600 p-5 flex flex-col justify-between gap-5 relative rounded-xl hover:shadow-xl text-white"
          : "bg-white p-5 flex flex-col justify-between gap-5 relative rounded-xl hover:shadow-xl text-black"
      }`}
    >
      <img className="w-32 " src={image} alt="" />
      <div className="space-y-3">
        <h3 className="text-2xl md:text-4xl font-bold ">{title}</h3>
        <h5 className="text-[16px] font-semibold ">
          Instructor : {instructor}
        </h5>
        <p>Available Seats : {availableSeats}</p>
        <p className="bg-black text-white absolute top-4 right-4 py-2 px-4 font-semibold rounded-md">
          ${price}
        </p>
        <div>
          <button
            onClick={() => handleSelect(classData)}
            className={`btn normal-case hover:bg-black btn-sm text-white bg-[#cc9724]  ${
              availableSeats === 0 ? " disabled:text-black " : ""
            } `}
            disabled={
              classData.selectedClass === "selected" ||
              isAdmin ||
              isInstructor ||
              availableSeats === 0
            }
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;

{
  /* <button
  onClick={() => handleSelect(data)}
  className={`btn normal-case hover:bg-black btn-sm text-white bg-[#cc9724]  ${
    data.availableSeats === 0
      ? " disabled:text-black disabled:cursor-not-allowed disabled:bg-red-500 "
      : ""
  } `}
  disabled={
    data.selectedClass === "selected" ||
    isAdmin ||
    isInstructor ||
    data.availableSeats === 0
  }
>
  Select
</button>; */
}
