import "./Contact.scss";
import TitleAnim from "../../components/anim/TitleAnim/TitleAnim";

const Contact = ({location}) => {


  console.log("rendered");
  return (
    // seems only to work with <p>
    <>
      <TitleAnim titleString={'Contact me'} className='contact-title' location={location}/>
    </>
  );
};

export default Contact;

// function getTranslateY(myElement) {
//   var style = window.getComputedStyle(myElement);
//   var matrix = new DOMMatrix(style.transform);
//   return matrix.d
// }
