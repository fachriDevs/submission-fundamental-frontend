import '../component/drink-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const drinkListElement = document.querySelector('drink-list');

  const onButtonSearchClicked = () => {
    const searchTerm = searchElement.value.trim();

    if (searchTerm !== '') {
      DataSource.searchDrink(searchTerm)
          .then(renderResult)
          .catch(fallbackResult);
    }
  };

  const renderResult = (results) => {
    drinkListElement.drinks = results;
  };

  const fallbackResult = (message) => {
    drinkListElement.renderError(message);
  };

  const onSearchElementKeyPress = (event) => {
    if (event.key === 'Enter') {
      const searchTerm = searchElement.value.trim();
      if (searchTerm !== '') {
        onButtonSearchClicked();
      }
    }
  };

  searchElement.clickEvent=onButtonSearchClicked;
  searchElement.keyEvent=onSearchElementKeyPress;
};

export default main;
