import "./App.css";

function App() {
  const buttonsText = [
    ["C", "fa-solid fa-delete-left", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["fa-solid fa-ellipsis-vertical", "0", ".", "="],
  ];

  return (
    <div className="bg-green-400 flex h-[30em] w-[25em] mt-[8em] ml-[36em]">
      <div className="bg-neutral-200 m-4 w-[25em]">
        <div className="bg-white w-[21em] h-20 m-4 flex">
          <input type="text" className="bg-white h-12 m-4 w-80" />
        </div>
        <div className="h-[20em] w-max grid m-4">
          {buttonsText.map((row) => {
            return (
              <div className="h-10 w-[21em] flex justify-between">
                {row.map((name) => (
                  <CalButton name={name}   />
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

const CalButton = function ({ name }) {
  return (
    <button className="bg-white w-16 h-12">
      {name.length > 2 ? <Icons name={name} /> : name}
    </button>
  );
};

const Icons = ({ name }) => <i class={name}></i>;
