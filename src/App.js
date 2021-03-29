import {useEffect} from 'react';
import './App.css';
import {Navigation} from "./components/navigation/Navigation"
const axios = require("axios")

function App() {


  useEffect(() => {
    (async() => {
        try {
            const dataFromServer = await axios.get("/api/videos")
            console.log(dataFromServer.data.videos)
        } catch (error) {
            console.log(error)
        }
    })()
}, [])

  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
