import { Card } from './components/Card';
import { Options } from './components/Options';
import { SearchInfo } from './components/SearchInfo';

function App() {
  return (
    <main className="min-h-screen	px-[60px] pt-[38px]">
      <Options />
      <SearchInfo quantity={228} />
      <hr className="my-12 bg-label" />
      <div>
        <Card />
      </div>
    </main>
  );
}

export default App;
