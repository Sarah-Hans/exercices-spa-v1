import * as ε from '../tools/ε/';

// import components
import Title from './Title';

// We want to render html like: 

  //     <div class="w-full flex justify-center items-center border-2 bg-gray-300">
  //       <Title type="h1" >HELLO WORLD</Title>
  //     </div>

class Header extends ε.Component {

  render() {
    return {
      name: "div",
      attributes: {"class": "w-full flex justify-center items-center border-2 bg-gray-300"},
      children: [
        {
          name: "Title",
          attributes: {"type": "h1"},
          textContent: "HELLO WORLD",
        }
      ]
    }
    let node = document.querySelector("#root");
    node.innerHTML = header;
    console.log('Hello');
  }
}

export default Header;