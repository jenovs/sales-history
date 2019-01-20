export default sales =>
  (
    sales.reduce((acc, d) => {
      if (d.status === 'failed') return acc;
      if (d.status === 'refunded') return acc - d.amount;
      return acc + d.amount;
    }, 0) / 100
  ).toFixed(2);
