function filterBy(arr, query) {
  return query
    ? arr.reduce((acc, item) => {
        if (item.children?.length) {
          const filtered = filterBy(item.children, query);
          if (filtered.length) return [...acc, { ...item, children: filtered }];
        }
        if (item.tasks?.length) {
            const filtered = filterBy(item.tasks, query);
            if (filtered.length) return [...acc, { ...item, tasks: filtered }];
        }

        const { children, ...itemWithoutChildren } = item;
        return item.name?.toLowerCase().includes(query.toLowerCase())
          ? [...acc, itemWithoutChildren]
          : acc;
      }, [])
    : arr;
}

export default filterBy;