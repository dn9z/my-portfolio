import "./Contact.scss";
import TitleAnim from "../../components/anim/TitleAnim/TitleAnim";

const Contact = () => {


  console.log("rendered");
  return (
    // seems only to work with <p>
    <>
      <TitleAnim titleString={'Contact me'} className='contact-title'/>
    </>
  );
};

export default Contact;

// function getTranslateY(myElement) {
//   var style = window.getComputedStyle(myElement);
//   var matrix = new DOMMatrix(style.transform);
//   return matrix.d
// }
