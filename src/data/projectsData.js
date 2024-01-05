import CalculatorImage from "../assets/svg/projects/CalculatorImage.svg";
import StockerImage from "../assets/svg/projects/StockerImage.svg";
import LTSImage from "../assets/svg/projects/LTSImage.svg";

export const projectsData = [
  {
    id: 1,
    projectName: "Calculator",
    projectDesc:
      "This project is a calculator that allows users to perform basic arithmetic operations.",
    tags: ["React", "CSS", "JSX"],
    code: "https://github.com/BenLalor/Calculator_React",
    demo: "https://benlalor.github.io/Calculator_React/",
    image: CalculatorImage,
  },
  {
    id: 2,
    projectName: "Stock Data Visualizer",
    projectDesc:
      "This project allows a user to search for a stock and view historical and current financial data, visualized in a graph.",
    tags: ["React", "CSS", "Alpha Vantage API"],
    code: "https://github.com/BenLalor/Stock_Visualization_React",
    demo: "https://benlalor.github.io/Stock_Visualization_React/",
    image: StockerImage,
  },
  {
    id: 3,
    projectName: "Energy Code Form Completion Tool",
    projectDesc:
      "Full stack web application that allows users to register, login, logout, complete the NRCC-LTS Energy Code Form, revisit and revise previously existing forms.",
    tags: ["Flask", "Vanilla Javascript", "CSS", "HTML"],
    code: "https://github.com/BenLalor/LTS_ComplianceSoftware_VanillaJavascript",
    demo: "https://github.com/BenLalor/LTS_ComplianceSoftware_VanillaJavascript",
    image: LTSImage,
  },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
