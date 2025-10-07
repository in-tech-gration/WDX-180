import PropTypes from "prop-types";

// 3 props: isDark (optional), message (required), days (required)
// isDark:boolean, message:string, days:number
// QUESTION: How can we restrict the Component instances to just 1?
window.counter = 0; // Will this scale?
// Can we use instanceof?
// Put it in the Comments! +100
export default function CookieNotice(props){
  console.log("CookieNotice()");
  // counter++;
  window.counter++; // Why not this?

  // if ( counter > 2 ){
  //   throw new Error("You are using CookieNotice more than once!");
  // }
  const theme = props.isDark ? "dark" : "light";
  return (
    <div className={"cookie-notice " + theme}>
      <p>{props.message}</p>
      <p>You have {props.days} to accept</p>
    </div>
    )
}
// Let's enforce strict type checking: making sure that required props are passed and proper types are used
CookieNotice.propTypes = {
  message: PropTypes.string.isRequired,
  isDark: PropTypes.bool,
  days: PropTypes.number.isRequired
}