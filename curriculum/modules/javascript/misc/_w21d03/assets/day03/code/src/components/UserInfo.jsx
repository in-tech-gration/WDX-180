export default function UserInfo(props) {
  return (
    <div>
      {props.type}:{props.children}
    </div>
  );
}
