import React, { useState, ReactNode } from "react";

type PlaygroundProps = {
  component: ReactNode;
};

type PlaygroundState = {
  props: Record<string, any>;
};

const ComponentPlayground: React.FC<PlaygroundProps> = ({ component }) => {
  const [props, setProps] = useState<PlaygroundState["props"]>({});

  const handlePropChange = (propName: string, value: any) => {
    setProps((prevProps) => ({
      ...prevProps,
      [propName]: value,
    }));
  };

  const renderControls = () => {
    const propControls: React.ReactNode[] = [];

    // @ts-ignore
    for (const propName in component.props) {
      const propValue =
        props[propName] !== undefined
          ? props[propName]
          : // @ts-ignore
            component.props[propName];

      propControls.push(
        <div key={propName}>
          <label>{propName}:</label>
          {typeof propValue === "boolean" ? (
            <input
              type="checkbox"
              checked={propValue}
              onChange={(e) => handlePropChange(propName, e.target.checked)}
            />
          ) : (
            <input
              type="text"
              value={propValue}
              onChange={(e) => handlePropChange(propName, e.target.value)}
            />
          )}
        </div>
      );
    }

    return propControls;
  };

  // Create a clone of the component with updated props
  // @ts-ignore
  const componentWithProps = React.cloneElement(component, { ...props });

  return (
    <div>
      <h2>Component Playground</h2>
      <div>{renderControls()}</div>
      <div>
        <h3>Preview:</h3>
        {componentWithProps}
      </div>
    </div>
  );
};

export { ComponentPlayground };

type MyComponentProps = {
  name: string;
  age: number;
  isOnline: boolean;
};

const MyComponent: React.FC<MyComponentProps> = ({ name, age, isOnline }) => {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Age: {age}</p>
      <p>Is Online: {isOnline ? "Yes" : "No"}</p>
    </div>
  );
};

export default function Playground() {
  return (
    <div>
      <h1>Component Playground Example</h1>
      <ComponentPlayground
        component={<MyComponent name="John" age={30} isOnline={true} />}
      />
    </div>
  );
}
