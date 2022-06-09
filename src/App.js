import { SocialList } from "./components/socialList";
import { LinktreeHeader } from "./components/linktreeHeader";
import { Config } from './components/config'


function App() {
  return (
    <div className="centered">
        <div>
          <LinktreeHeader></LinktreeHeader>
          <SocialList></SocialList>
        </div>
        <Config></Config>
    </div>
  );
}

export default App;
