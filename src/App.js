import { SocialList } from "./components/socialList";
import { LinktreeHeader } from "./components/linktreeHeader";
import { Config } from './components/config'
import { ManagerContext } from "./context/manager";
import { useState } from "react";

function App() {
  const [user, setUser] = useState('')
  const [data, setData] = useState({})
  const [list, setList] = useState([])

  const setMedia = (media) => {
    setData(media)
  }

  const setName = (name) => {
    setUser(name)
  }

  const setSocialList = (list) => {
    setList(list)
  }
  

  return (
    <div className="centered">
      <ManagerContext.Provider value={{data, setMedia, user, setName}}>
        <div>
          <LinktreeHeader></LinktreeHeader>
          <SocialList></SocialList>
        </div>
        <Config></Config>
      </ManagerContext.Provider>
    </div>
  );
}

export default App;
