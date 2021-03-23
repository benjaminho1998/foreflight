import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

//Exports Enzyme configuration for all tests
configure({ adapter: new Adapter() });