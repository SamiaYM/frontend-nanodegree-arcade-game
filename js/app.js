// ============ Enemy Class  ============/
var Enemy = function(x, y, speed) {
    this.x = x
    this.y = y
    this.speed = speed
    this.sprite = 'images/enemy-bug.png';
};

//this function set the value of speed randomly
const speedVarying = () => Math.floor((Math.random() * 200) + 50);

Enemy.prototype.update = function(dt) {
    /* You should multiply any movement by the dt parameter
    which will ensure the game runs at the same speed for
    all computers.*/
    this.x += this.speed * dt;
    /* After the enemies disappear I make them start move again
    with varying speeds*/
       if (this.x > 500) {
           this.x = -300;
           this.speed = speedVarying();
       }
       // check if there is a collisions
       if (this.x < player.x + 50 && player.x < this.x + 50) {
          if(this.y < player.y + 50 && player.y <  this.y + 50 ){
        // to return the player to the starting position
        player.x = 200;
        player.y = 400;
          }
       }

};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// ============ Player Class  ============
var Player = function(x, y, sprite = 'images/char-boy.png') {
    this.x = x
    this.y = y
    this.sprite = sprite;
};
Player.prototype.update = function(dt) {
      // check if the player reach to blue area
      if (this.y < 40 ) {
            alert("Congratulations You Win 👏🏻");
            // start new game
            this.x = 200;
            this.y = 400;
      }
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(arrowKeys) {
  switch (arrowKeys) {
    case 'left':
        if (this.x != 0) {
            this.x -= 100;
        }
        break;
    case 'up':
        if (this.y != -50) {
            this.y -= 90;
        }
        else {
          this.x = 200;
          this.y = 400;
        }
        break;
    case 'right':
        if (this.x != 400) {
            this.x += 100;
        }
        break;
    case 'down':
        if (this.y != 400) {
            this.y +=90;
        }
      break;
  }
};


// ============ Create Objects ============
let enamy1= new Enemy(80, 220, 84);
let enamy2= new Enemy(2, 130, 180);
let enamy3= new Enemy(100, 40, 89);
let allEnemies = [enamy1, enamy2, enamy3];

let player = new Player(200, 400);

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
