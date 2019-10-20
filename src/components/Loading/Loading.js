import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const drawDots = ({ i }) => ({
  text: '•'.repeat(i),
  i: i + 1 > 3 ? 1 : i + 1,
});

const propTypes = {
  timeout: PropTypes.number,
};

const defaultProps = {
  timeout: 175,
};

const Loading = ({ timeout }) => {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const { text, i } = drawDots({ i: idx });

      setText(text);
      setIdx(i);
    }, timeout);

    return () => clearInterval(intervalId);
  }, [idx, timeout]);

  return <div style={{ fontFamily: 'monospace' }}>{text}</div>;
};

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default Loading;
