export default function App() {
  const obj = { name: 'Alice', age: 29, country: 'Austria' };

  return (
    <div>
      <Person {...obj} />
    </div>
  );
}
