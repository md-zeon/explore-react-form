import "./App.css";
import ControlledField from "./components/ControlledField/ControlledField";
import FormAction from "./components/FormAction/FormAction";
import HookForm from "./components/HookForm/HookForm";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import UncontrolledField from "./components/UncontrolledField/UncontrolledField";

function App() {
	return (
		<>
			<h1>Explore React Form</h1>
			{/* <SimpleForm /> */}
			{/* <FormAction /> */}
			{/* <ControlledField /> */}
			{/* <UncontrolledField /> */}
			<HookForm />
		</>
	);
}

export default App;
