import React, { Component } from 'react';
/*import logo from './logo.svg';
import './App.css';*/
class App extends Component {
    render() {
        return (

        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
        )
    }
}
    const Header =()=> <img src="./img/image.jpg" alt="nature"/>
    const Body =()=> <h1> Welcome to React </h1>
    const Footer =()=> <p> A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES </p>
export default App;






        /*const element = (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        return React.createElement('header', null, ``);
    }
}*/


    /*return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
            <header> <img src="F:\reactApp\img\image.jpg"</header>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}*/


