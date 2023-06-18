import { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import guiterImg from "../../../assets/countbg/Guiteri.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Faqs = ({ isDarkTheme }) => {
  const [color, setColor] = useState(false);
  const [color1, setColor1] = useState(false);
  const [color2, setColor2] = useState(false);

  return (
    <div
      className={`px-3 md:px-32 pb-10 md:py-28 ${
        isDarkTheme ? "bg-gray-900" : "bg-[#f8f8f8]"
      }  `}
    >
      <SectionTitle
        subTitle={"FAQS"}
        title={"Frequently Asked Questions"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-5 md:mt-14 mt-16">
        {/* Accordion 1 */}
        <Accordion allowZeroExpanded>
          <AccordionItem onClick={() => setColor(!color)}>
            <AccordionItemHeading>
              <AccordionItemButton
                className={`${
                  color ? "text-[#B38837] font-bold" : "font-bold"
                } p-5 text-2xl `}
              >
                {color ? (
                  <FaAngleUp className="inline-block"></FaAngleUp>
                ) : (
                  <FaAngleDown className="inline-block"></FaAngleDown>
                )}{" "}
                Can I use it for my clients?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="px-5 text-xl">
              Musical contexts refer to the different environments, genres, or
              settings in which music is created.
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem onClick={() => setColor1(!color1)}>
            <AccordionItemHeading>
              <AccordionItemButton
                className={`${
                  color1 ? "text-[#B38837] font-bold" : "font-bold"
                } p-5 text-2xl `}
              >
                {color1 ? (
                  <FaAngleUp className="inline-block"></FaAngleUp>
                ) : (
                  <FaAngleDown className="inline-block"></FaAngleDown>
                )}{" "}
                Is there a money back guarantee?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="px-5 text-xl">
              Musical contexts refer to the different environments, genres, or
              settings in which music is created.
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem onClick={() => setColor2(!color2)}>
            <AccordionItemHeading>
              <AccordionItemButton
                className={`${
                  color2 ? "text-[#B38837] font-bold" : "font-bold"
                } p-5 text-2xl `}
              >
                {color2 ? (
                  <FaAngleUp className="inline-block"></FaAngleUp>
                ) : (
                  <FaAngleDown className="inline-block"></FaAngleDown>
                )}{" "}
                Do I get free updates?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="px-5 text-xl">
              Musical contexts refer to the different environments, genres, or
              settings in which music is created.
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        {/* Accordian 2 */}
        <div>
          <img className="rounded-2xl" src={guiterImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
