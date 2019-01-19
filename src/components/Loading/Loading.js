/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';

const drawDots = ({ i }) => ({
  text: '•'.repeat(i),
  i: i + 1 > 3 ? 1 : i + 1,
});

class Loading extends React.Component {
  static propTypes = {
    timeout: PropTypes.number,
  };

  static defaultProps = {
    timeout: 175,
  };

  state = {
    text: '',
    i: 1,
  };

  componentDidMount() {
    const { timeout } = this.props;

    const token = setInterval(() => {
      this.setState(drawDots);
    }, timeout);

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
