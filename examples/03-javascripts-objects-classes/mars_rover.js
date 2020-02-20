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
  constructor(posX, posY) {
    this.x = posX;
    this.y = posY;
    this.direction = 'north';
  }

  // gets and sets the position
  position() {
    return {
      x: this.x,
      y: this.y
    }
  }

  //get the direction
  get_direction() {
    return this.direction;
  }

  move() {
    switch(this.get_direction()) {
      case 'north':
        ++this.y
        break
      case 'west':
        --this.x
        break
      case 'south':
        --this.y
        break
      case 'east':
        ++this.x
        break
    }

    return this.position();
  }

  turnLeft() {
    switch(this.get_direction()) {
      case 'north':
        this.direction = 'west'
        break
      case 'west':
        this.direction = 'south'
        break
      case 'south':
        this.direction = 'east'
        break
      case 'east':
        this.direction = 'north'
        break
    }

    return this.direction;
  }

  turnRight() {
    switch(this.get_direction()) {
      case 'north':
        this.direction = 'east'
        break
      case 'east':
        this.direction = 'south'
        break
      case 'south':
        this.direction = 'west'
        break
      case 'west':
        this.direction = 'north'
        break
    }

    return this.direction;
  }

  execute(commands) {
    for(let i = 0; i < commands.length; i++) {
      if(commands[i] === 'M') {
        this.move()
      } else if(commands[i] === 'L') {
        this.turnLeft()
      } else if(commands[i] === 'R') {
        this.turnRight();
      } else {
        return 'INVALID COMMAND';
      }
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
  marsRover1.execute('MMLMMRMM')
  marsRover2.execute('MMLMMRMM')

  console.log(marsRover1.position().x === -2)
  console.log(marsRover1.position().y === 4)

  console.log(marsRover2.position().x === 8)
  console.log(marsRover2.position().y === 14)

  console.log("What are the rovers now")
  repositionRovers()
  marsRover1.execute('MRMLMMMLLMMRMMLMMMMR')
  marsRover2.execute('RRMMMLLLMMMRMMMMMMLM')

  console.log(marsRover1.position())
  console.log(marsRover2.position())
})();
