export const fakeData = [
    {
        $id: 1,
        body: JSON.stringify(
            'React Topics:\n- Components: Building blocks of a React application.\n\n- JSX: JavaScript XML, a syntax extension for JavaScript.\n\n- State: Manages data within a component.\n\n- Props: Passes data between components.'
        ),
        colors: JSON.stringify({
            id: "color-purple",
            colorHeader: "#FED0FD",
            colorBody: "#FEE5FD",
            colorText: "#18181A",
        }),
        position: JSON.stringify({ x: 505, y: 10 }),
    },
    {
        $id: 2,
        body: JSON.stringify(
            'React Topics:\n- Lifecycle Methods: Methods that get called at different stages of a component\'s life.\n\n- Hooks: Functions that let you use state and other React features.\n\n- Context API: A way to manage global state in a React application.'
        ),
        colors: JSON.stringify({
            id: "color-blue",
            colorHeader: "#9BD1DE",
            colorBody: "#A6DCE9",
            colorText: "#18181A",
        }),
        position: JSON.stringify({ x: 305, y: 110 }),
    },
    {
        $id: 3,
        body: JSON.stringify(
            'React Topics:\n- Router: Library for routing in React applications.\n\n- Redux: State management library for JavaScript apps.\n\n- Testing: Tools and techniques for testing React components.'
        ),
        colors: JSON.stringify({
            id: "color-yellow",
            colorHeader: "#FFEFBE",
            colorBody: "#FFF5DF",
            colorText: "#18181A",
        }),
        position: JSON.stringify({ x: 605, y: 500 }),
    },
];
