import "./Education.css";
import EducationCard from "../../components/educationCard/EducationCard";
import { educationInfo } from "../../portfolio";


const Education = () => (
  <div className="education-section" id="education">
    <h1 className="education-heading">Education</h1>
    <div className="education-card-container">
      {educationInfo?.schools.map((school, index) => (
        <EducationCard key={index} school={school} />
      ))}
    </div>
  </div>
);

export default Education
