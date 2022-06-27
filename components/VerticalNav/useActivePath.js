/**
 *
 * @param {Array} items
 * @returns
 */
 const findActiveInItems = (items) => {
  // Done when no more items.
  if (Array.isArray(items) === false) {
    return false;
  }

  const results = items.map((item) => {
    if (item.active) {
      return true;
    }
    if (Array.isArray(item.children)) {
      return findActiveInItems(item.children);
    }
    return false;
  });

  return results.includes(true);
};

/**
 *
 */
export default (items) => findActiveInItems(items);