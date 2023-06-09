/* Menu */

const openMenu = document.querySelector("[data-open-menu]");
const closeMenu = document.querySelector("[data-close-menu]");
const navMenu = document.querySelector("[data-menu-modal]");

openMenu.addEventListener("click", () => {
  navMenu.show();
});

closeMenu.addEventListener("click", () => {
  navMenu.close();
});

const openRules = document.querySelector("[data-open-rules]");
const closeRules = document.querySelector("[data-close-rules]");
const rulesModal = document.querySelector("[data-rules-modal]");

openRules.addEventListener("click", () => {
  rulesModal.showModal();
});

closeRules.addEventListener("click", () => {
  rulesModal.close();
});

/* Menu End*/

/* Game Controls */

function createGameBoard(size) {
  const gameBoard = document.querySelector(".game");
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < size; i++) {
    const button = document.createElement("button");
    button.className = "game-style__button";
    fragment.append(button);
  }
  gameBoard.append(fragment);
}

createGameBoard(100);

/* Game Controls End*/

/* Player Information */

/* Player Information End*/

/* Game */

/* Game End */

/* Game Dice Rolls */

/* Game Dice Rolls End */

/* Leaderboard */

/* Leaderboard End */

/* Footer */

/* Footer End */
