- There should be a button to start a new game
- At any time you can reset the game and start again (should there be a Reset button or can we use the Start button?)
- Hotseat mode support
- Keep both users' scores
- There should be information about which player is currently playing
- We'll use the original 10x10 for the final product
- Ships should span a single row or column (single-deck)
- The game consists of three stages 1) Arrangement of ships 2) Game 3) Announcement of the winner
- Users take turns placing ships. That is, one playing field is displayed (first Player1, then Player2)
- Each player must have 5 ships
- Click on a cell = add ship cell, click again = clear the cell
- To complete the placement, you must click on the 'Confirm' button, after which the placement of the next player's ships will begin

Ideas:

- Use conditionals to reduce the number of buttons
- Make the game available via Google Play or other app store?
  - APK-based app: requires native development (Android/iOS) (we'll skip this)
    - Web page/app to APK?
  - Desktop game: We have to use ElectronJS. (Probably works in mobile too?)
  - Mobile app: We have to use React Native or PWA (Progressive Web Application)

Game Phase:

- Before the start of each new turn, the following is displayed: the name of the current player and the 'start move' button (the playing fields are not displayed!)*
- During the turn, the player sees his field and the field of the enemy, but does not see the location of enemy ships (only attacked cells are shown)*
  - *Hot-seat mode
- The user selects one cell on the opponent's field (click - select, re-click - cancel) and press 'Attack'
- If the user hit / did not hit the cell with an enemy ship - the message 'Killed' / 'Missed' is displayed and the cell of the enemy field is updated
- The user makes an attack until the first miss, after which the attack becomes unavailable (the cell grids that are already hit are not available on the next turns)
- If an attack is no longer available (the last one ended in a miss), a 'end turn' button appears (What does this really mean???)
- Announcement of the winner:
  - The player who has no 'living' ships left loses
  - Displays the name of the winner and two playing fields