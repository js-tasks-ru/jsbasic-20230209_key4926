  function filterRange(arr, a, b) {
    return arr.filter((i) => Math.max(a, Math.min(i, b)) == i);
  }
