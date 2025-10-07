// This <tag></tag> or <Component></Component> or <Compoment />
// <tag></tag>, <Component /> === a single value, e.g. 42, false, "String", []
// @ts-nocheck
import UserInfo from './components/UserInfo.jsx';

// JSX Transpilers start in JS mode
const num = 42;
console.log(num);

// An opening tag, either HTML <div> or <Component> triggers XML mode
// JS => XML
<div>
  <p>const num = 42; num</p>
</div>;

// undefined and null in JSX is invisible. Just empty space ""
function SuperFancyHeading(props) {
  console.log('SuperFancyHeading()');
  console.log('props', props); // 40, 41 => props.children === undefined
  let defaultColor = 'black';
  // if (props.color !== undefined) {
  // the typeof undefined === "undefined", typeof ALWAYS returns a string
  // if (typeof props.color === 'undefined') {
  //   defaultColor = props.color;
  // }
  if (typeof props.color !== 'undefined') {
    defaultColor = props.color;
  }
  return (
    <div>
      <hr />
      <p>{defaultColor}</p>
      <h2>🔥{props.children}🔥</h2>
      <hr />
    </div>
  );
}
export default function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <UserInfo type="name">Leon</UserInfo>
      <UserInfo type="lastname">Kountouras</UserInfo>
      <UserInfo type="email">koundouras@gmail.com</UserInfo>
      <UserInfo type="phone">69454...</UserInfo>

      {/* 
        <UserInfo email="koundouras@gmail.com" name="Leon" lastname="..." phone="1234"></UserInfo> 

        Inside the function will end up as: props.email, props.name, props.lastname, props.phone
      */}

      {/* 
      For any value other than a "string", you will need the {} for passing values to the props 
        prop="String"
        prop={ ALL OTHER VALUES }
        prop={"String"}
      */}
      <SuperFancyHeading color="red" count={42} isHidden={false}>
        Title 1
      </SuperFancyHeading>
      <SuperFancyHeading color="indigo" bg="blue">
        <p>Some other title</p>
      </SuperFancyHeading>
      <SuperFancyHeading a="1" b="2"></SuperFancyHeading>
      <SuperFancyHeading c="3" d="5" e="6" />
      <h2>Subtitle</h2>
    </div>
  );

  // return <single_value>
}

{
  /* <Component /> => Component() */
}
{
  /* <div> => div() */
}

const h2 = <h2>Subtitle</h2>;
