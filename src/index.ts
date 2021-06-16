import createHeader from './pages/header/createHeader';
import './style/index.css';
import createGaragePage from './pages/garage/createGaragePage';
import pagesSwither from './commands/pagesSwitcher';
import createWinnersPage from './pages/garage/score/createWinnersPage';
import createPagesBlocks from './pages/garage/createPagesBlocks';

const init = (): void => {
  createHeader();
  createPagesBlocks();
  createGaragePage();
  createWinnersPage();
  pagesSwither();
};

window.addEventListener('load', init);
