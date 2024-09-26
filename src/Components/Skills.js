import { CgCPlusPlus } from "react-icons/cg";
import { SiPostman } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

const Skills = ({ skill }) => {
  const icon = {
    "C++": <CgCPlusPlus />,
    Postman: <SiPostman />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
  };

  return <div>{icon[skill]}</div>;
};

export default Skills;
