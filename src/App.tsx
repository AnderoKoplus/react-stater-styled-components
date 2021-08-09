import React, { useState } from "react";
import CrestArsenal from "./CrestArsenal";
import CrestArsenalV2 from "./CrestArsenalV2";
import CrestArsenalV3 from "./CrestArsenalV3";
import CrestArsenalV4 from "./CrestArsenalV4";
import CrestArsenalV5 from './CrestArsenalV5';

const StateToggle: React.FunctionComponent<{
  state: any;
  setState: any;
  field: any;
  label: any;
}> = ({ state, setState, field, label }) => {
  return (
    <>
      {!state[field] ? (
        <div onClick={() => setState({ ...state, [field]: !state[field] })}>
          click me to Show {label}
        </div>
      ) : (
        <div onClick={() => setState({ ...state, [field]: !state[field] })}>
          Hide {label}
        </div>
      )}
    </>
  );
};

function App() {
  const [showState, setState] = useState({
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    show6: false,
  });
  return (
    <div className="App">
      <p>Open developer tools and click through the versions</p>
      <p>
        NOTE: Removed contents of svg to make svg a bit shorter(prettier
        auto-format makes it huge)
      </p>
      <p>NOTE2: I reduced the original component to have a smaller footprint</p>
      <ul>
        <li>
          <StateToggle
            state={showState}
            setState={setState}
            field={"show1"}
            label={"Original"}
          />
          {showState.show1 && (
            <>
              <p>
                Original - React does not recognize the `verticalAlign` prop on
                a DOM element. If you intentionally want it to appear in the DOM
                as a custom attribute, spell it as lowercase `verticalalign`
                instead. If you accidentally passed it from a parent component,
                remove it from the DOM element.
              </p>
              <p>Error: svg attribute width: Expected length, "auto".</p>
              <CrestArsenal />
            </>
          )}
        </li>
        <li>
          <StateToggle
            state={showState}
            setState={setState}
            field={"show2"}
            label={"Hopefully better version with compatible signature"}
          />
          {showState.show2 && (
            <>
              <p>V2 avoid verticalAlign leak into SVG. otherwise original</p>
              <p>Error: svg attribute width: Expected length, "auto".</p>
              <CrestArsenalV2 />
            </>
          )}
        </li>
        <li>
          <StateToggle
            state={showState}
            setState={setState}
            field={"show3"}
            label={
              "Hopefully better version with compatible signature and no warnings"
            }
          />
          {showState.show3 && <CrestArsenalV2 height={"1em"} width={"100%"} />}
        </li>
        <li>
          <StateToggle
            state={showState}
            setState={setState}
            field={"show4"}
            label={
              "Hopefully the cleanest version of all - size set with fontsize"
            }
          />
          {showState.show4 && (
            <CrestArsenalV3 height={"1em"} width={"100%"} fontSize={30} />
          )}
        </li>
        <li>
          <StateToggle
            state={showState}
            setState={setState}
            field={"show5"}
            label={"https://styled-components.com/docs/api#transient-props"}
          />
          {showState.show5 && (
            <CrestArsenalV4
              height={"1em"}
              width={"100%"}
              $fontSize={30}
              $verticalAlign={"middle"}
            />
          )}
        </li>
        <li>
          <StateToggle
            state={showState}
            setState={setState}
            field={"show6"}
            label={"cleaner version"}
          />
          {showState.show6 && (
            <CrestArsenalV5/>
          )}
        </li>
      </ul>
    </div>
  );
}

export default App;
