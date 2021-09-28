# Project 1 : Mermory Games 


## Game Descriptions
Test your memory with this memory game. On the game board, there are always two identical images. Start the game by clicking a card, then try to find another card that has the same image as the first. If you can't find a pair, both of the selected cards will be cover back. Try to remember these images as it becomes easier to find pairs the longer you play. When you find a pair they are removed from the board and when you find all the pairs in this memory, you have completed the level and you can move to next level. The higher the level, the more cards are in the game board. 

## Game Link

The Pages site (https://siangyin.github.io/MemoryGame/index.html)


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
* Clear all levels to win the game within the given timeline.


## Difficulties Faced
* Couldnt get the event listener to work, images loaded in live-server using function in js, but unable to load in github. Solving solution is to removed that image and reload a replacement image with lower resolution.
* Tried to do a timer countdown for each level but facing issue of the previous timer were also display together and swapping around on timestamp. The page will have multiple timer jumping around. Solving solution found is to save the timer callout function in a variable, then save the stop interval function in another variable. In this case, each level will call for individual timer and stop the timer again when the level ended.
* Initial plan was to have one landing page and playing page. But I can't figure out how to export and import player name from index.html+module.js to play.html+app.js. At the end I decided to combined both page into one page, landing page as default then after user input the name and clicked play button it will remove the landingpage div group and show the playing area out. 
* As for the cards click function, when the user clicked the card the target hidden image will be visible, and saving the img no value into temporary array for comparison condition check. But if the user clicked too fast for more than two cards the comparison function will not work and if recalling cardsclicked array outside event listener will get error. To fix this issue, I addded another condition in the eventlistener under the click: if temporary array have two cards now it will ignore the third click.
* Facing difficulties to play background music. Solving solution found is to use the raw.githubusercontent.com domain to get the audio. 


## Wireframe Design and Interface
1. Arriving at the main pages, user click play to start the game
<table><tr><td>
 <img src="https://github.com/siangyin/MemoryGame/blob/main/images/visualinterface/landingpage.png"/>
</td></tr></table>

2. After click, player entering the playing stage of level-1, upon first click the timer will start running.
<table><tr><td>
 <img src="https://github.com/siangyin/MemoryGame/blob/main/images/visualinterface/playingL1.png"/>
</td></tr></table>

3. When player click a card, the hidden image will be shown and player have to click another card to match with the first card.
<table><tr><td>
 <img src="https://github.com/siangyin/MemoryGame/blob/main/images/visualinterface/playingL5.png"/>
</td></tr></table>

4. If both cards are identical, coins, achivement, and moves increased; or otherwise moves increased but coins are deducted.

5. In the event if coin value drop to zero or timeout, a alert will be popped out that player failed in this level with option of to replay this level. After user close the alert, the game restart at the level. 

6. Success alert will popped at the end when all levels are cleared.
<table><tr><td>
 <img src="https://github.com/siangyin/MemoryGame/blob/main/images/visualinterface/completegame.png"/>
</td></tr></table>



## Additional Info
            
      
