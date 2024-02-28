import Hello from "./assets/Hello"
import Contact from "./assets/Contact";
import Counter from "./assets/Counter";

function App() {
  const helloData = [
    {name: "Wuttiphong", message: "Hi"},
    {name: "Ariya", message: "Wassup"}
  ];

  return (
    <div className="App">
      <Counter/>
      {helloData.map((data, index) => {
        <Hello key={index} name={data.name} message={data.message} />
      })}

      <Contact email="wuttiphong@gmail.com" phone="06****9543" /> 
    </div>
  );
}

export default App;
