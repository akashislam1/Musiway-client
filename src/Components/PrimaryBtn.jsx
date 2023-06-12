const PrimaryBtn = ({ text }) => {
  return (
    <button className="bg-[#B38B37] py-3 px-4 rounded-md font-semibold hover:bg-black border-b-4 border-[#B38B37] duration-300 text-white">
      {text}
    </button>
  );
};

export default PrimaryBtn;
