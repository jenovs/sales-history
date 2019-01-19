const padZero = s => String(s).padStart(2, '0');

export default ts => {
  const digits = [
    ts.getFullYear(),
    padZero(ts.getMonth() + 1),
    padZero(ts.getDate()),
  ];

  return digits.join('/');
};
