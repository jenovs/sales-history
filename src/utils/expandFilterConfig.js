export default config =>
  config.reduce(
    (acc, f) => {
      acc.filters[f.name] = true;
      return acc;
    },
    {
      filters: {},
    }
  );
