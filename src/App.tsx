import { Card } from './components/Card';
import { Options } from './components/Options';
import { SearchInfo } from './components/SearchInfo';

function App() {
  return (
    <main className="min-h-screen	px-[60px] py-[38px]">
      <Options />
      <SearchInfo quantity={228} />
      <hr className="my-12 bg-label" />
      <div className="flex flex-wrap justify-between gap-y-12	">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}

export default App;
