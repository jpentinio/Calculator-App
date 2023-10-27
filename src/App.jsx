import { useState } from "react";
import "./App.css";
import { themes } from "./constants";
import classNames from "classnames";

const buttons = [
  "7",
  "8",
  "9",
  "DEL",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "-",
  ".",
  "0",
  "/",
  "x",
];

function App() {
  const [theme, setTheme] = useState(0);
  const [value, setValue] = useState("");
  const [operator, setOperator] = useState("");
  const [num1, setNum1] = useState("");

  const selectedTheme = themes[theme];
  const primaryTextColor = selectedTheme.text.primary;
  const secondaryTextColor = selectedTheme.text.secondary;
  const mainBackground = selectedTheme.backgrounds.main;
  const toggleBackground = selectedTheme.backgrounds.toggle;
  const screenBackground = selectedTheme.backgrounds.screen;
  const equalKeyColor = selectedTheme.keys.equal;
  const actionKeyColor = selectedTheme.keys.action;
  const mainKeyColor = selectedTheme.keys.main;
  const equalKeyShadow = selectedTheme.keys.equalShadow;
  const actionKeyShadow = selectedTheme.keys.actionShadow;
  const mainKeyShadow = selectedTheme.keys.mainShadow;

  const handleSetKey = (key) => {
    switch (key) {
      case "+":
      case "-":
      case "x":
      case "/":
        if (value) {
          setOperator(key);
          setNum1(value);
          setValue("");
        }
        break;
      case "DEL":
        if (num1.length > 0 && operator && !value) {
          setOperator("");
        } else if (num1.length > 0 && !operator && !value) {
          setNum1(num1.slice(0, -1));
        } else {
          setValue(value.toString().slice(0, -1));
        }
        break;
      default:
        setValue((prev) => prev.concat(key));
    }
  };

  const handleSubmit = () => {
    switch (operator) {
      case "+":
        setValue((Number(num1) + Number(value)).toString());
        break;
      case "-":
        setValue((Number(num1) - Number(value)).toString());
        break;
      case "x":
        setValue((Number(num1) * Number(value)).toString());
        break;
      case "/":
        setValue(Number(num1) / Number(value).toString());
        break;
      default:
        setValue((Number(num1) + Number(value)).toString());
        break;
    }
    setNum1("");
    setOperator("");
  };

  const handleReset = () => {
    setNum1("");
    setValue("");
    setOperator("");
  };

  return (
    <main
      className={`${mainBackground} ${
        theme === 0 ? secondaryTextColor : primaryTextColor
      } p-8 sm:p-0 h-screen w-full flex flex-col gap-8 items-center justify-center`}
    >
      <section className="w-full sm:w-[480px] flex flex-col gap-6">
        <header className="flex items-end justify-between">
          <h3 className="text-2xl font-bold">calc</h3>
          <div className="flex items-end gap-6">
            <p>THEME</p>
            <div className="flex flex-col">
              <ul className="flex justify-between px-3">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
              <div>
                <div
                  className={`p-2 flex justify-between rounded-full w-20 ${toggleBackground}`}
                >
                  {[...Array(3)].map((i, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => setTheme(index)}
                        className={`${
                          theme === index
                            ? `${equalKeyColor} hover:brightness-125`
                            : toggleBackground
                        }
                        } cursor-pointer w-4 h-4 rounded-full`}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </header>
        <section
          className={`${screenBackground} p-4 sm:p-6 h-28 rounded-md flex flex-col ${
            num1 ? "justify-start" : "justify-center"
          }`}
        >
          <div className="flex justify-end gap-2 text-xl">
            <div className="overflow-hidden">{num1}</div>
            <div>{operator}</div>
          </div>
          <div className="flex justify-end gap-1 text-4xl sm:text-5xl overflow-hidden">
            {value}
          </div>
        </section>
        <section
          className={`sm:text-3xl flex flex-col gap-6 p-4 sm:p-6 rounded-lg ${toggleBackground}`}
        >
          <div className="grid grid-cols-4 gap-4 sm:gap-6 ">
            {buttons.map((value, i) => (
              <button
                onClick={() => handleSetKey(value)}
                className={`${
                  value === "DEL" ? actionKeyColor : mainKeyColor
                } ${value === "DEL" ? actionKeyShadow : mainKeyShadow} ${
                  value === "DEL" ? secondaryTextColor : primaryTextColor
                } rounded-md text-2xl sm:text-3xl py-3 hover:brightness-125`}
              >
                {value}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full">
            <button
              onClick={handleReset}
              className={`${actionKeyColor} ${actionKeyShadow} p-3 rounded-md hover:brightness-125`}
            >
              RESET
            </button>
            <button
              onClick={handleSubmit}
              className={`${equalKeyColor} ${equalKeyShadow} p-3 rounded-md hover:brightness-125`}
            >
              =
            </button>
          </div>
        </section>
      </section>

      <div className="text-xs">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/home"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/jpentinio"
          target="_blank"
          className="link"
        >
          Joshua M. Pentinio
        </a>
      </div>
    </main>
  );
}

export default App;
