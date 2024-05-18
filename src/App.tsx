import { FlowPlayground, Header, OutputTable } from "./components";

function App() {
  return (
    <div className="flex bg-primary-light flex-grow h-full flex-col text-white">
      <Header />
      <FlowPlayground />
      <OutputTable />
    </div>
  );
}

export default App;
