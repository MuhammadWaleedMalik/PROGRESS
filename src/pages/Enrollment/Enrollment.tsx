import "./Enrollment.css";
import { IoSearchOutline } from "react-icons/io5";

const enrollments = [
  "Fontys Business Management and Technology",
  "Fontys Technical Training College Eindhoven",
  "Fontys Flexibel deeltijd onderwijs",
  "Fontysminors",
  "Fontys University of Applied Sciences Allied Health Professions",
  "Fontys Mens en Gezondheid",
  "Fontys HRM and Applied Psychology",
  "Fontys University of Applied Sciences Pedagogical Studies",
  "Fontys School of Teacher Training for Secondary Education Tilburg",
  "Fontys School of Teacher Training for Secondary Education Sittard",
  "Fontys University of Applied Sciences Sport Studies",
  "Fontys School of Teacher Training for Special Educational Needs",
  "De Nieuwste Pabo",
  "Fontys University of Applied Sciences Journalism",
  "Fontys University of Applied Sciences Marketing and Communication",
  "Fontys Academy for the Creative Economy",
  "Fontys University of Applied Sciences International Business Studies",
  "Fontys Information and Communication Technology",
  "Fontys Natural Sciences",
  "Fontys Academy of the Arts",
  "Fontys Engineering",
  "Fontys University of Applied Sciences Social Studies",
  "Fontys University of Applied Sciences Technology and Logistics",
  "Fontys School for Child Studies & Education",
  "Fontys University of Applied Sciences Business and Communication",
  "Dienst Studentenvoorzieningen",
];

function Enrollment() {
  return (
    <div>
      <div id="enroll-box">
        <div id="enroll-box-above">
          <h2>Enrollments (A. Massee Gonzalez)</h2>
          <button className="flex items-center rounded-2xl p-2">
            <IoSearchOutline /> 
            <span>Search</span>
          </button>
        </div>

        <div id="enroll-box-below">
          <div id="below-left">
            <h2>Enrollments</h2>
            {enrollments.map((enrollment, index) => (
              <a
                key={index}
                href="https://www.fontys.nl/en/Study-at-Fontys/Programmes.htm?taal=English&educatietype=01&educatietype=02&educatietype=03"
                target="_blank"
                rel="noopener noreferrer"
                className="rows"
                style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
              >
                {/* <MdOutlineDirections />
                 */}
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="material_icon font_18 w-7- h-7"><path d="m566-120-43-43 162-162H200v-475h60v415h426L524-547l43-43 233 233-234 237Z"></path></svg>
                <span>{enrollment}</span>
              </a>
            ))}
          </div>

          <div id="below-right">
            <h2>Enrollments (A. Massee Gonzalez)</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enrollment;
