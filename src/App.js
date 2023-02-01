import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");
  const buttonsText = [
    ["C", "fa-solid fa-delete-left", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["fa-solid fa-ellipsis-vertical", "0", ".", "="],
  ];

  function calBtn(e) {
    const inputVal = e.target.value;
    console.log(inputVal);

    if (inputVal == "C") {
      setDisplay(() => "");
    } else {
      setDisplay(() => display + inputVal);
    }

    if (inputVal == "fa-solid fa-delete-left") {
      setDisplay(() => display.slice(0,-1));
    }
    
  }


  return (
    <div className="bg-green-400 flex h-[30em] w-[25em] mt-[8em] ml-[36em]">
      <div className="bg-neutral-200 m-4 w-[25em]">
        <div className="bg-white w-[21em] h-20 m-4 flex">
          <input
            type="text"
            className="bg-white h-12 m-4 w-80"
            value={display}
          />
        </div>
        <div className="h-[20em] w-max grid m-4">
          {buttonsText.map((row, rid) => {
            return (
              <div className="h-10 w-[21em] flex justify-between" key={rid}>
                {row.map((name, idx) => (
                  <CalButton name={name} key={idx} onClick={calBtn} />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

const CalButton = function (prop) {
  const { name } = prop;
  return (
    <button className="bg-white w-16 h-12" {...prop} value={name}>
      {name.length > 2 ? <Icons name={name} /> : name} 
    </button>
  );
};

const Icons = ({ name }) => <i className={name}> </i>;
