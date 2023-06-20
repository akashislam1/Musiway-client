const ClassesCard = ({ classData, isAdmin, isInstructor, handleSelect }) => {
  const { image, title, price, availableSeats, instructor } = classData || {};
  return (
    <div
      className={` ${
        availableSeats === 0
          ? "bg-red-600  flex flex-col justify-between  relative rounded-xl hover:shadow-xl text-white  w-full h-64 "
          : "bg-white flex flex-col justify-between gap-5 relative rounded-xl hover:shadow-xl text-black  w-full h-64 "
      }`}
    >
      <div
        className={`${
          availableSeats === 0
            ? "bg-red-600 opacity-50 absolute w-full h-full rounded-2xl"
            : "bg-black opacity-50 absolute w-full h-full rounded-2xl"
        }`}
      ></div>
      <img
        className="w-full h-full object-cover  rounded-2xl "
        src={image}
        alt=""
      />
      <div className="space-y-3 w-3/4  absolute top-16 left-8  ">
        <h3 className="text-2xl md:text-3xl font-bold text-amber-400 ">
          {title}
        </h3>
        <h5 className="text-[16px] font-semibold text-gray-200">
          Instructor : {instructor}
        </h5>
        <p className=" text-gray-200">Available Seats : {availableSeats}</p>

        <div>
          <button
            onClick={() => handleSelect(classData)}
            className={`btn normal-case hover:bg-white hover:text-black border-0 btn-sm text-white bg-[#cc9724]  ${
              availableSeats === 0
                ? " disabled:text-white disabled:bg-slate-600"
                : ""
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
      <p className="bg-white text-black absolute top-4 right-4 py-2 px-3 font-semibold rounded-md">
        ${price}
      </p>
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
