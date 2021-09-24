# Project 1 : Mermory Games 
(in-progess)


## Game Descriptions
Test your memory with this memory game. On the game board, there are always two identical images. Start the game by clicking a card, then try to find another card that has the same image as the first. If you can't find a pair, both of the selected cards will be cover back. Try to remember these images as it becomes easier to find pairs the longer you play. When you find a pair they are removed from the board and when you find all the pairs in this memory, you have completed the level and you can move to next level. The higher the level, the more cards are in the game board. 

## Game Link

The Pages site (https://siangyin.github.io/memorygame/index.html)


## Technologies
* **HTML**
* **CSS**
* **Javascript**


## The Games Logic 
* There will be unique set of cards pair to be randomly generated for each games level. 
* Player will be starting off from level 1 with given coins.
* Player earned coins if same pair of cards are found, and coins will be deducted if it was wrong cards selected.
* Player are required to complete the cards set within given time.


## Game Instructions
* Clear all levels to win the game with the time.


## Difficulties Faced
* Couldnt get the event listener to work, images loaded in liver server using function in js, but unable to load in github.
* trying out timer countdown, updated js with class for player included methods. Testing for eventlistener.
* Trying to export and import player name from index.html module.js to play.html app.js but failed. Testing for eventlistener, able to get id and img no but not sure how to limit only two click at a time, and if recalling cardsclicked array outside event listener will get error.
* Facing difficulties to codes out the chain of functions for the flow if certain action.


## Wireframe Design and Interface
1. Arriving at the main pages, user click play to start the game
<table><tr><td>
 <img src=/>
</td></tr></table>

2. After click, player entering the playing stage of level-1, upon first click the timer will start running.

3. When player click a card, the hidden image will be shown and player have to click another card to match with the first card.

4. If both cards are identical, coins, achivement, and moves increased; or otherwise moves increased but coins are deducted.

5. In the event if coin value drop to zero or timeout, a alert will be popped out that player failed in this level with option of to replay this level. After user close the alert, the game restart at the level. 

6. Success alert will popped at the end when all levels are cleared.



## Additional Info
            
      
