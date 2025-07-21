import './App.css'
import MyComponent from "./components/MyComponent.tsx";

function App() {

    return (
        <>
            <MyComponent title={'Hello 1'}>
                Lorem ipsum dolor sit.
            </MyComponent>
            <MyComponent title={'Hello 2'}/>
            <MyComponent title={'Hello 3'}/>
            <MyComponent title={'Hello okten'}/>
            {/*{MyComponent({text: 'Hello 2'})}*/}
        </>
    );
}

export default App
