import { Card } from './components/Card';
import { Options } from './components/Options';

function App() {
  return (
    <main className="min-h-screen	px-[60px] pt-[38px]">
      <Options />
      <hr className="my-12 bg-label" />
      <div>
        <Card />
      </div>
    </main>
  );
}

export default App;
