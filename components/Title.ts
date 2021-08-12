import * as ε from '../tools/ε/';

class Title extends ε.Component {

  render() {
    console.log(this.props)
    return ε.createElement(this.props.type, {}, this.props.children);
  }
}

export default Title;