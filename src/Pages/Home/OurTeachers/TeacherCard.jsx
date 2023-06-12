const TeacherCard = ({ classData }) => {
  const { instructorImage, instructor, instructorTitle } = classData;

  return (
    <div className="bg-white  flex flex-col justify-between gap-2 rounded-xl hover:shadow-xl">
      <img className="h-96 rounded-xl" src={instructorImage} alt="" />
      <div className="text-center">
        <h3 className="text-2xl font-bold text-black">{instructor}</h3>
        <p className="mt-3 mb-5">{instructorTitle}</p>
      </div>
    </div>
  );
};

export default TeacherCard;
