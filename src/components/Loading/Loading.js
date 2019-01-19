import React from 'react';

class Loading extends React.Component {
  state = {
    text: '',
  };

  componentDidMount() {
    let i = 0;
    const token = setInterval(() => {
      this.setState({
        text: '•'.repeat(i),
      });
      i++;
      if (i > 3) {
        i = 0;
      }
    }, 175);

    this.setState({ token });
  }

  componentWillUnmount() {
    const { token } = this.state;
    clearInterval(token);
  }

  render() {
    const { text } = this.state;

    return <div style={{ fontFamily: 'monospace' }}>{text}</div>;
  }
}

export default Loading;
