import { main } from "./state";
import { cards } from "./cards";
import { statisticsCards } from "./cardsForStatistics";

type StatisticsCardItem = {
  category: string
  word: string
  translation: string
  image: string
  audioSrc: string
  trainMode: number
  correct: number
  errors: number
  errorsPercent: number
}

const countErrors = (item: StatisticsCardItem) => {
  if (item.correct / (item.correct + item.errors) > 0) {
    return ((item.correct + item.errors) / item.correct) * 100;
  }
  return item.errorsPercent;
};

export const renderStatisticsBlock = () => {
  const tableHeaderItems = ["Categorie", "Word", "Translation",
    "Train Mode", "Correct", "Errors", "Errors, %"];
  main.innerHTML = `
  <button class="sort_by_category_button">Sort by category</button>
  <button class="sort_by_word_button">Sort by word</button>
  <button class="sort_by_translation_button">Sort by translation</button>
  <button class="sort_by_word_button">Sort by word</button>
  <button class="sort_by_correct_button">Sort by correct</button>
  <button class="sort_by_errors_button">Sort by errors</button>
  <button class="sort_by_percentage_button">Sort by percentage of errors</button>
  <button class="reset_button">Reset statistics</button>
  <button class="repeat_button">Repeat difficult words</button>
  <div class="statistics">
    <table id="table" class="table">
      <tr class="table_header">
      </tr>
    </table>
  </div>`;

  const table = document.querySelector(".table");
  const tableHeader = document.querySelector(".table_header");
  tableHeaderItems.map(h => tableHeader.insertAdjacentHTML("beforeend",
    `<th class="table_item table_header_item">${h}</th>`));

  for (let i = 0; i < cards.length - 1; i += 1) {
    statisticsCards.map((item: Array<StatisticsCardItem>) => table.insertAdjacentHTML("beforeend", `
      <tr class="table_body">
          <td class="table_item table_body_item">${item[i].category}</td>
          <td class="table_item table_body_item">${item[i].word}</td>
          <td class="table_item table_body_item">${item[i].translation}</td>
          <td class="table_item table_body_item">${item[i].trainMode}</td>
          <td class="table_item table_body_item">${item[i].correct}</td>
          <td class="table_item table_body_item">${item[i].errors}</td>
          <td class="table_item table_body_item">${countErrors(item[i])}</td>
      </tr>`));
  }
};

const resetTable = () => {
  for (let i = 0; i < 8; i += 1) {
    for (let j = 0; j < 12; j += 1) {
      statisticsCards[i][j].correct = 0;
      statisticsCards[i][j].errors = 0;
      statisticsCards[i][j].trainMode = 0;
      statisticsCards[i][j].errorsPercent = 0;
    }
  }
  renderStatisticsBlock();
};

let buttonClick = false;

const sort = (e: Event, num: number) => {
  const table = document.getElementById("table");
  let tableRows;
  let switching = true;
  let i;
  let firstItem;
  let secondItem;
  let shouldSwitch;
  while (switching) {
    switching = false;
    tableRows = table.getElementsByTagName("TR");
    for (i = 1; i < tableRows.length - 1; i += 1) {
      shouldSwitch = false;
      firstItem = tableRows[i].getElementsByTagName("TD")[num];
      secondItem = tableRows[i + 1].getElementsByTagName("TD")[num];
      if (firstItem.innerHTML.toLowerCase() > secondItem.innerHTML.toLowerCase() && !buttonClick) {
        shouldSwitch = true;
        break;
      } else if (firstItem.innerHTML.toLowerCase() < secondItem.innerHTML.toLowerCase()
          && buttonClick) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      tableRows[i].parentNode.insertBefore(tableRows[i + 1], tableRows[i]);
      switching = true;
    }
  }
};

const buttonEvent = (e: Event) => {
  let num;
  const target = e.target;
  if ((<Element>target).classList.contains("sort_by_category_button")) {
    if (buttonClick) {
      buttonClick = false;
    } else {
      buttonClick = true;
    }
    num = 0;
    sort(e, num);
  } else if ((<Element>target).classList.contains("sort_by_word_button")) {
    if (buttonClick) {
      buttonClick = false;
    } else {
      buttonClick = true;
    }
    num = 1;
    sort(e, num);
  } else if ((<Element>target).classList.contains("sort_by_translation_button")) {
    if (buttonClick) {
      buttonClick = false;
    } else {
      buttonClick = true;
    }
    num = 2;
    sort(e, num);
  } else if ((<Element>target).classList.contains("sort_by_word_button")) {
    if (buttonClick) {
      buttonClick = false;
    } else {
      buttonClick = true;
    }
    num = 3;
    sort(e, num);
  } else if ((<Element>target).classList.contains("sort_by_correct_button")) {
    if (buttonClick) {
      buttonClick = false;
    } else {
      buttonClick = true;
    }
    num = 4;
    sort(e, num);
  } else if ((<Element>target).classList.contains("sort_by_errors_button")) {
    if (buttonClick) {
      buttonClick = false;
    } else {
      buttonClick = true;
    }
    num = 5;
    sort(e, num);
  } else if ((<Element>target).classList.contains("sort_by_percentage_button")) {
    if (buttonClick) {
      buttonClick = false;
    } else {
      buttonClick = true;
    }
    num = 6;
    sort(e, num);
  } else if ((<Element>target).classList.contains("reset_button")) {
    resetTable();
  }
};

main.addEventListener("click", buttonEvent);
