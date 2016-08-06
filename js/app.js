// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x=0;

    this.y=Math.floor(Math.random()) * (250-100) + 100;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    if (this.x > 550) {
	this.x = 0;
	this.y = Math.random() * (250 - 100) + 100;
    }
    this.x += Math.random() * (750 * (dt)) + (dt);
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Gem = function() {
    this.x = Math.random() * 400;
    this.y = Math.random() * (250 - 100) + 100;
    this.sprite = "images/abcd.png";
}

var Key = function() {
    this.x = Math.random() * 400;
    this.y = Math.random() * (250 - 100) + 100;
    this.sprite = "images/Key.png";
}


Key.prototype.update = function() {
    this.x = Math.random() * 400;
    this.y = Math.random() * (250 - 100) + 100;
}

Key.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
}

Gem.prototype.update = function() {
    this.x = Math.random() * 400;
    this.y = Math.random() * (250 - 100) + 100;

}
Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    this.x=200;
    this.y=400;
    this.score = 0;
    this.sprite = "images/char-boy.png";
}

Player.prototype.update = function(c) {
    score.textContent = this.score;
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function (key) {
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
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

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
