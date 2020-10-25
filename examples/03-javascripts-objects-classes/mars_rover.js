// Create a MarsRover class. It accepts x and y positions as initial values, with a default direction of North
//
// position - current x, y coordinates
// turnLeft - turns the mars rover to the left direction
// turnRight - turns the mars rover to the right direction
// move - move one step forward
// 
// Due to distance between earth and the moon, commands are usually sent via a series of strings to
// the mars rover.
// M - move
// L - turn left
// R - turn right
//

class MarsRover {

  constructor(x, y) {
    this.positionX = x;
    this.positionY = y;
    this.direction = 'North';
  }

  position() {
    return (
      {
        x: this.positionX,
        y: this.positionY,
        direction: this.direction
      }
    )
  }

  move() {
    if (this.direction == 'North') {
      this.positionX = this.position().x;
      this.positionY = this.position().y +  1;
    } else if (this.direction == 'Left') {
      this.positionX = this.position().x -  1;
      this.positionY = this.position().y;
    } else if (this.direction == 'Right') {
      this.positionX = this.position().x +  1;
      this.positionY = this.position().y;
    } 
    return (
      {
        positionX: this.positionX, 
        positionY: this.positionY,
        direction: this.direction
      }
    );
  }

  turnLeft() {
    this.positionX = this.position().x;
    this.positionY = this.position().y;
    this.direction = 'Left';
    return (
      {
        positionX: this.positionX, 
        positionY: this.positionY,
        direction: this.direction
      }
    );
  }

  turnRight() {
    this.positionX = this.position().x;
    this.positionY = this.position().y;
    this.direction = 'Right';
    return (
      {
        positionX: this.positionX, 
        positionY: this.positionY,
        direction: this.direction
      }
    );
  }

  execute(commands) {
    for (let i = 0; i < commands.length; i++) {
      if (commands[i] === 'M') {
        this.move();
      } else if (commands[i] === 'L') {
        this.turnLeft();
      } else if (commands[i] === 'R') {
        this.turnRight();
      }
      console.log(this.position()) //MRMLMMMLLMMRMMLMMMMR
    }
    return this.position();
  }
}

(_ => {
  let marsRover1
  let marsRover2

  function repositionRovers () {
    marsRover1 = new MarsRover(0,0)
    marsRover2 = new MarsRover(10,10)
  }

  console.log('Checking position...')
  repositionRovers()
  console.log(marsRover1.position().x === 0)
  console.log(marsRover1.position().y === 0)
  console.log(marsRover2.position().x === 10)
  console.log(marsRover2.position().y === 10)

  console.log('Checking move...')
  repositionRovers()

  marsRover1.move()
  marsRover2.move()

  console.log(marsRover1.position().x === 0)
  console.log(marsRover1.position().y === 1)

  console.log(marsRover2.position().x === 10)
  console.log(marsRover2.position().y === 11)

  console.log('Checking turnLeft...')
  repositionRovers()

  marsRover1.turnLeft()
  marsRover2.turnLeft()

  marsRover1.move()
  marsRover2.move()

  console.log(marsRover1.position().x === -1)
  console.log(marsRover1.position().y === 0)

  console.log(marsRover2.position().x === 9)
  console.log(marsRover2.position().y === 10)

  console.log('Checking turnRight...')
  repositionRovers()

  marsRover1.turnRight()
  marsRover2.turnRight()

  marsRover1.move()
  marsRover2.move()

  console.log(marsRover1.position().x === 1)
  console.log(marsRover1.position().y === 0)

  console.log(marsRover2.position().x === 11)
  console.log(marsRover2.position().y === 10)

  console.log('Checking execute...')
  repositionRovers()
  // marsRover1.execute('MMLMMRMM')
  // marsRover2.execute('MMLMMRMM')

  console.log(marsRover1.position().x === -2)
  console.log(marsRover1.position().y === 4)

  console.log(marsRover2.position().x === 8)
  console.log(marsRover2.position().y === 14)

  console.log("What are the rovers now")
  repositionRovers()
  marsRover1.execute('MRMLMMMLLMMRMMLMMMMR')
  // marsRover2.execute('RRMMMLLLMMMRMMMMMMLM')

  console.log(marsRover1.position())
  console.log(marsRover2.position())
})();
