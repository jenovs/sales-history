export default (filters, filterConfig) =>
  [...new Set(filterConfig.map(f => f.filterGroupName))].reduce((acc, f) => {
    const names = filterConfig
      .filter(n => n.filterGroupName === f)
      .map(ft => ft.name);

    acc[f] = names.reduce((a, n) => {
      if (filters[n]) {
        a.push(String(n));
      }
      return a;
    }, []);
    return acc;
  }, {});
