// Enemies our player must avoid
var Enemy = function() {
    //initialization of Bugs

    this.x = 0;
    //Sets y coordinate to Random number between 250 and 100
    this.y = Math.floor(Math.random()) * (250 - 100) + 100;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    //Functionality checks whether a bug has gone off screen
    //resets to left side of screen
    if (this.x > 550) {
        this.x = 0;
        this.y = Math.random() * (250 - 100) + 100;
    }
    //custom expression to change speed and position of bug
    this.x += Math.random() * (750 * (dt)) + (dt);

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


//Gem object
var Gem = function() {
    //initialized to random spot on board
    this.x = Math.random() * 400;
    this.y = Math.random() * (250 - 100) + 100;
    this.sprite = "images/Blue-Gem.png";
};

//Key object
var Key = function() {
    //initialize to random area on board
    this.x = Math.random() * 400;
    this.y = Math.random() * (250 - 100) + 100;
    this.sprite = "images/Key.png";
};

//key randomly placed during update
Key.prototype.update = function() {
    this.x = Math.random() * 400;
    this.y = Math.random() * (250 - 100) + 100;
};

Key.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//gem randomly placed during update
Gem.prototype.update = function() {
    this.x = Math.random() * 400;
    this.y = Math.random() * (250 - 100) + 100;

};

Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player object
var Player = function() {
    //initial location
    this.x = 200;
    this.y = 400;
    //score is initially zero
    this.score = 0;
    this.sprite = "images/char-boy.png";
};

Player.prototype.update = function() {
    //updates score displayed when appropriately called
    score.textContent = this.score;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    //switch statement sorts out which key is pressed
    //changes player variables accordingly
    switch (key) {
        case "up":
            this.y -= 30;
            break;
        case "down":
            this.y += 30;
            break;
        case "left":
            this.x -= 30;
            break;
        case "right":
            this.x += 30;
            break;
        default:
            console.log("Invalid key");
            break;
    }
};

//Creating Bugs, Gems, Key and Player

var allEnemies = [];
allEnemies[0] = new Enemy();
allEnemies[1] = new Enemy();
allEnemies[2] = new Enemy();
var player = new Player();

var allGems = [];
allGems[0] = new Gem();
allGems[1] = new Gem();


var the_only_key = new Key();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
