function updateLS(favoritePlayers) {
  const toSave = JSON.stringify(favoritePlayers);
  localStorage.setItem('favoritePlayers', toSave);
}

module.exports = {
  updateLS,
};
