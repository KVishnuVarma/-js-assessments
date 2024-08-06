### 1. What is the difference between var, let, and const in JavaScript? ###

### LET ###

- **Scope**: let is block-scoped. It means that it is only accessible within the block where it is defined.

- You can re-declare a variable using var without any issues.

``` javascript

let a = 5;
console.log(a)

function Letfunction() {
  let b = 10;
  if (b) {
    let b = 20
    console.log(b)
  }
  console.log(b)
}

Letfunction();

```

### VAR ###

- **Scope**: var is function-scoped. It means that if a var is defined within a function, it is only accessible within that function. If defined outside any function, it has a global scope.

- You can re-declare a variable using var without any issues.

``` javascript
var a = 5;
console.log(a)

function Varfunction() {
  var b = 10;
  if (b) {
    var b = 20
    console.log(b)
  }
  console.log(b)
}

Varfunction();
```

### CONST ###

- **Scope**: const is block-scoped, similar to let.
- You cannot re-declare a variable using const within the same scope.


### 2. How do you create a new React component? ###

- There are 2 types to declare react components 
### Functional Component
**Example**
``` jsx 
import React from 'react';
function MyComponent() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a functional component.</p>
    </div>
  );
}
export default MyComponent;
```

### Using Class Component

```jsx
import React, { Component } from 'react';

class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello from class component!'
    };
  }

  handleClick = () => {
    this.setState({ message: 'State updated!' });
  };

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={this.handleClick}>Update Message</button>
      </div>
    );
  }
}

export default MyClassComponent;

```

### 3. What is the purpose of the render() method in a React component?

- The render() method is a crucial part of a class-based React component. It is responsible for describing the UI of the component by returning a React element, which can be a single element or a tree of elements created using JSX.

- Whenever the component's state or props change, the render() method is called again to update the UI accordingly.

- render() method outputs the React elements that make up the component's UI. These elements are then converted into DOM nodes by React.

### 4. How do you handle state changes in a React component?

```jsx
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```

### 5. What is the difference between a controlled and uncontrolled component in React?

**Controled Component**
- State Management: Form data is handled by React state.
- Value: The value of the input is controlled by the component's state.
- Updates: Changes to the input update the state, which then updates the input value.

**UnControled Component**

- State Management: Form data is handled by the DOM.
- Value: The value of the input is managed by the DOM, not by React state.
- Access: Use ref to access the input value directly from the DOM.

### 6. How do you pass props to a React component?

```jsx
import React from 'react';

function Func(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Bharani" />;
}

export default App;
```

### 7. What is the purpose of the key prop in a React component?

- The key prop helps React identify which items in a list have changed, been added, or removed. It is crucial for optimizing rendering performance and ensuring that components maintain their state correctly.

- Uniqueness: Each key must be unique among siblings to help React distinguish between elements.
- Performance: Helps React quickly determine which items need to be updated by comparing keys.
- State Preservation: Ensures that components maintain their state correctly when items are reordered or modified.

```jsx
 <ul>
    {items.map((item, index) => (
    <ListItem key={index} item={item} />
    ))}
</ul>
```

### 8. How do you handle events in a React component?

```jsx
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default MyComponent;
```

### 9. What is the difference between a functional component and a class component in React?

**Functional Components**
- Definition: Functions that accept props as an argument and return JSX.
- State and Lifecycle: Initially, they were stateless and did not have lifecycle methods. With the introduction of Hooks, they can now use state and other React features.
- Syntax: Simpler and less verbose.
- Performance: Generally more performant due to less overhead compared to class components.

**Class Components**
- Definition: ES6 classes that extend React.Component and must have a render() method that returns JSX.
- State and Lifecycle: Can have local state and lifecycle methods (e.g., componentDidMount, componentDidUpdate).
- Syntax: More verbose, requiring constructor for state initialization and binding methods if necessary.
- Performance: May have slightly more overhead compared to functional components.

### 10. How do you use React Hooks?
**useState :**
Manages state in functional components
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

```

**useEffect :**
Performs side effects in functional components, similar to lifecycle methods in class components.

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, [])

  return <div>{data ? `Data: ${data}` : 'Loading...'}</div>;
}

```

**useContext :**
Accesses context values without needing a context consumer.

```jsx
import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemedComponent() {
  const theme = useContext(ThemeContext);

  return <div>The current theme is {theme}</div>;
}
```

### 11. What is the purpose of the useEffect() hook in React?


**useEffect :**
Performs side effects in functional components, similar to lifecycle methods in class components.

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, [])

  return <div>{data ? `Data: ${data}` : 'Loading...'}</div>;
}

```

### 12. How do you fetch data from an API in a React component?

- To fetch data from an API in a React component, use the useEffect hook to perform the fetch operation and manage the state to store the fetched data.

```jsx
import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes/random')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default FetchData;
```
### 13. What is the purpose of the useContext() hook in React?

**useContext :**
Accesses context values without needing a context consumer.

The useContext() hook is used to access context values in functional components. It provides a way to share values like themes, user information, or application settings across the component tree without having to pass props down manually through every level.

```jsx
import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemedComponent() {
  const theme = useContext(ThemeContext);

  return <div>The current theme is {theme}</div>;
}
```

### 14. How do you use React Router for client-side routing?

First, install React Router using npm or yarn:

```js
npm install react-router-dom
```

- Import Components: Import BrowserRouter, Routes, and Route from react-router-dom.
- Define Routes: Use Route components to define the routes for your application.
- Wrap Your App: Wrap your application with BrowserRouter to enable routing.

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```


### 15. What is the difference between useState() and useReducer() in React?

Both useState() and useReducer() are hooks used to manage state in functional components, but they serve different purposes and are suited to different scenarios.

**useState :**
Manages state in functional components
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
**useReducer**
Manages more complex state logic in a similar way to Redux.
```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

```

### 16. How do you optimize the performance of a React application?

**Avoid Reconciliation Issues**
- Use React.memo: Memoize functional components to prevent unnecessary re-renders.

**Optimize State Management**

- Use useCallback: Memoize functions to avoid recreating them on every render.

- Use useMemo: Memoize expensive calculations to avoid recalculating them on every render.

**Code Splitting and Lazy Loading**
- Use React.lazy and Suspense: Split your code into chunks and load components only when needed.

**Optimize Rendering**
- Avoid Inline Functions: Define functions outside of render methods to prevent their recreation on each render.

- Avoid Inline Object Literals: Similarly, avoid inline object literals that create new references on each render

### 17. What is the purpose of the shouldComponentUpdate() method in a React component?

- The shouldComponentUpdate() method is a lifecycle method in React class components used to optimize rendering performance. It determines whether a component should re-render when its props or state change.

**Key Points**
- Purpose: Prevents unnecessary re-renders by allowing you to control whether a component should update based on changes in props or state.
- Return Value: Returns a boolean value (true or false):
- true: The component will re-render.
- false: The component will skip re-rendering.
- Usage: Useful for optimizing performance in scenarios where rendering is expensive and updates are frequent.


# 18. Using React DevTools for Debugging

React DevTools is a powerful tool for inspecting and debugging React applications. It provides a way to inspect the component tree, analyze component props and state, and debug performance issues.

## Installation

1. **Browser Extension**: Install React DevTools as a browser extension for Chrome or Firefox.

   - [Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools)
   - [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

2. **Standalone Application**: Alternatively, you can install it as a standalone application via npm for use with any browser.

   ```bash
   npm install -g react-devtools
   ```


## Key Features
### 1. Component Tree Inspection
- **View Component Hierarchy**: Inspect the hierarchical structure of your React components.
- **Select Components**: Click on any component in the tree to see its props, state, and context.
### 2. Props and State Analysis
- **Inspect Props**: View the current props of a selected component.
- **Inspect State**: View the local state of a selected component.
- **Edit State and Props**: Temporarily modify props and state to test changes in real-time.
### 3. Profiler
- **Record Performance**: Use the Profiler tab to record and analyze component rendering performance.
- **View Rendering Time**: Identify which components are re-rendering and how long they take.
### 4. Highlight Updates
- **Visualize Updates**: Enable highlighting to see which components are updating on each render.

## Example Workflow
- **Open DevTools**: Open the React DevTools from your browser's DevTools panel or as a standalone application.
- **Inspect Components**: Navigate the component tree to select components and inspect their props, state, and context.
- **Analyze Performance**: Use the Profiler to record and analyze rendering performance to optimize slow components.
- **Edit and Test**: Modify props and state in the DevTools to test how changes affect your application.


# 19. Difference Between Higher-Order Components (HOCs) and Render Props Pattern in React

Both Higher-Order Components (HOCs) and the Render Props pattern are techniques in React used to share logic between components. They serve similar purposes but have different implementations and use cases.

## Higher-Order Components (HOCs)

- **Definition**: A Higher-Order Component is a function that takes a component and returns a new component with additional props or behavior. It's a pattern used for code reuse.
- **Usage**: HOCs are used to inject additional functionality into components without modifying the original component.

### Example

```javascript
import React from 'react';
function withEnhancement(WrappedComponent) {
  return class extends React.Component {
    render() {
      const newProps = { extraProp: 'value' };
      return <WrappedComponent {...this.props} {...newProps} />;
    }
  };
}
function MyComponent(props) {
  return <div>{props.extraProp}</div>;
}
const EnhancedComponent = withEnhancement(MyComponent);

export default EnhancedComponent;
```

# 20. Using React with TypeScript

TypeScript adds static type checking to JavaScript, which can improve development efficiency and code quality in React applications. Here's how you can use React with TypeScript.

## Setup

### 1. **Create a TypeScript React Project**

You can create a new React project with TypeScript using Create React App:

```bash
npx create-react-app my-app --template typescript
```
> Alternatively, if you’re adding TypeScript to an existing project, install TypeScript and its type definitions:
```bash
npm install typescript @types/react @types/react-dom
```

### 2. Configure TypeScript
Add a tsconfig.json file to configure TypeScript. Create React App sets this up automatically, but you can customize it if needed.

### 3. Rename Files
Rename your .js files to .tsx (for files containing JSX) or .ts (for files without JSX).

```typescript
import React from 'react';

interface Props {
  title: string;
  count?: number; 
}

const MyComponent: React.FC<Props> = ({ title, count = 0 }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {count}</p>
    </div>
  );
};

export default MyComponent;
```
