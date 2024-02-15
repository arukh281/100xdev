function sleep(millisecons) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, millisecons);
  });
}

module.exports = sleep;
