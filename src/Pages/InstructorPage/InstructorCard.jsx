const InstructorCard = ({ classData }) => {
  const { instructorImage, instructor, instructorTitle, email } = classData;

  return (
    <div className="bg-white  flex flex-col justify-between gap-2 rounded-xl hover:shadow-xl">
      <img className="h-96 rounded-xl" src={instructorImage} alt="" />
      <div className="text-center">
        <h3 className="text-2xl font-bold text-black">{instructor}</h3>
        <p className="mt-3 mb-2">{instructorTitle}</p>
        <p className="mb-5">{email}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
