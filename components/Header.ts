import * as ε from '../tools/ε/';

// import components
import Title from './Title';

  class Header extends ε.Component {
    render() {
      return ε.createElement(
          'div',
          {
            class: "w-full flex justify-center items-center border-2 bg-gray-300",
          },
          [
            ε.createElement(Title,{type: "h1"}, ["Hello world"])
          ]
        )
    }
  }

export default Header;