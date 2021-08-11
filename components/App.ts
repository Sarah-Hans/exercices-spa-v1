import * as ε from '../tools/ε/';

// import components
import Header from './Header';

class App extends ε.Component {
// We want to render html like: 

  //     <div>
  //       <Header />
  //     </div>
  render() {
  return  {
      name: "div",
      children: [
        {
          name: Header,
          children: [],
          
        }
      ]
    }
  }
}

export default App;
