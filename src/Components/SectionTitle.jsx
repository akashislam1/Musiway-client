import { Fade } from "react-awesome-reveal";

const SectionTitle = ({ subTitle, title, text }) => {
  return (
    <div className="text-center md:w-2/3 mx-auto space-y-4 pt-10">
      <Fade>
        <h5 className="text-[#c2880a] text-2xl">{subTitle}</h5>
      </Fade>
      <h2 className="text-2xl md:text-5xl font-bold">{title}</h2>
      <p>{text ? text : ""}</p>
    </div>
  );
};

export default SectionTitle;
