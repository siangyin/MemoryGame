# Project 1 : Memory Games 


## Game Instructions
Test your memory with this memory game. On the game board, there are always two identical images. Start the game by clicking a card, then try to find another card that has the same image as the first. If you can't find a pair, both of the selected cards will be cover back. Try to remember these images as it becomes easier to find pairs the longer you play. When you find a pair they are removed from the board and when you find all the pairs in this memory, you have completed the level and you can move to next level. The higher the level, the more cards are in the game board. 


## Game Descriptions
* There will be unique set of cards pair to be randomly generated for each games level. 
* Player will be starting off from level 1 with given coins.
* Player earned coins if same pair of cards are found, and coins will be deducted if it was wrong cards selected.
* Player are required to find all complete the game within given time.


## Game Link

https://siangyin.github.io/MemoryGame/index.html


## Technologies
* **HTML**
* **CSS**
* **Javascript**


## Game Structure & Approaches
* Created a user class and have all the common methods saved within the class eg addScore, addMoves, addCoins, deductCoin, etc.
* As for the cards, I used number value to represent each card images, and having a random number generator to pick random card images number saving into an array. This array will be reshuffled and duplicated. Therefore the index of each card images will be placed accordingly on the card-box area layout eg. [3, 7, 3, 8, 8, 7] the position of 3 in first cards, then followed by 7 and the rest as per array index. 
* Using eventlistener if user click fourth and fifth card, the hidden images will be displayed and as the same cards were found, the both will be taken out from the card-box playing area. 


## Difficulties Faced
* Couldnt get the event listener to work, images loaded in live-server using function in js, but unable to load in github. It was found out then it was because of the relatives path I am using "../images/..." in css file in css folder, it do not require "../", instead because images folder is in main area same level as index file so it will work with using "images/...". On the other hand, for the background images I used require more time to load due to the file size, so I also changed to lower resolution images for that.
* Tried to do a timer countdown for each level but facing issue of the previous timer were also display together and swapping around on timestamp. The page will have multiple timer jumping around. Solving solution found is to save the timer callout function in a variable, then save the stop interval function in another variable. In this case, each level will call for individual timer and stop the timer again when the level ended.
* Initial plan was to have one landing page and playing page. But I can't figure out how to export and import player name from index.html+module.js to play.html+app.js. At the end I decided to combined both page into one page, landing page as default then after user input the name and clicked play button it will remove the landingpage div group and show the playing area out. 
* As for the cards click function, when the user clicked the card the target hidden image will be visible, and saving the img no value into temporary array for comparison condition check. But if the user clicked too fast for more than two cards the comparison function will not work and if recalling cardsclicked array outside event listener will get error. To fix this issue, I addded another condition in the eventlistener under the click: if temporary array have two cards now it will ignore the third click.
* Facing difficulties to play background music. Solving solution found is to use the raw.githubusercontent.com domain to get the audio. 


## Wireframe Design and Interface
<table><tr>
 <td>
 <img src="https://github.com/siangyin/MemoryGame/blob/main/images/visualinterface/mainpg.png"/>
</td>
 <td>
 <img src="https://github.com/siangyin/MemoryGame/blob/main/images/visualinterface/playpg.png"/>
</td>
 </tr></table>

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

6. Success message at the end when all levels are cleared.
<table><tr><td>
 <img src="https://github.com/siangyin/MemoryGame/blob/main/images/visualinterface/gameover.png"/>
</td>
 <td>
 <img src="https://github.com/siangyin/MemoryGame/blob/main/images/visualinterface/completedLevel5.png"/>
</td>
 </tr></table>




            
      
