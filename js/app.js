console.log('Tomagotchichichichi');

// class---


class Tom {
  constructor(name, age, hungerLevel, sleepiness, boredom, time){
    this.name = name;
    this.time = 0;
    this.age = 0;
    this.hungerLevel = hungerLevel;
    this.sleepiness = sleepiness;
    this.boredom = boredom;
  }

  eat(food){
    //makes button click hunger method - 1.
    this.hungerLevel--
    // $('#hunger').text("Hunger:( " + this.hungerLevel + " )");
  }

  rest(){
    this.sleepiness--
    // $('#bed').text("Sleepiness:( " + this.sleepiness + " )");

  }

  playMore(){
   this.boredom--
   // $('#play').text("Boredom:( " + this.boredom + " )")

  }

  updateAge() {
    //this make the age increase by 1 every 10 seconds
    if (this.time % 10 === 0){
      this.age++
    }
    //this prints the updated age to the page
    $('#age').text("Age: " + this.age)
    // 
  }
};
const xxx = new Tom('Jim', 0, 0, 0, 0)

// Clicking -----
// console.log(xxx.sleepiness());
$('.F').on('click', (e) => {
  xxx.eat()
}); 


$('.L').on('click', (e) => {
  xxx.rest()
});


$('.P').on('click', (e) => {
  xxx.playMore()
});

// xxx.eat();

 // timer code goes here
const intervalId = setInterval(() =>{
  xxx.time++;
  //this increases hunger level by 1 every 5 seconds
  if(xxx.time % 5 === 0){
    xxx.hungerLevel = xxx.hungerLevel + 1;
  }
  //if levels get to 10 or more game over reload page
  //(\n \n = line break
  if (xxx.sleepiness >= 10){
    window.alert( 'psydons beard! \nGAME OVER\n');
    location.reload();
  }

  if (xxx.time % 7 === 0){
    xxx.boredom = xxx.boredom + 2;
  }
  if(xxx.boredom >= 10){
    window.alert( 'Mother of satan! \nGAME OVER\n');
    location.reload();
  }

  if (xxx.time % 9 === 0){
    xxx.sleepiness = xxx.sleepiness + 3;
  }
  if (xxx.sleepiness >= 10){
    window.alert('I like scotch. Scotch, Scotch, Scotch \nGAME OVER\n');
    location.reload();
  }

  $('#timer').text('Time: ' + xxx.time + 's');
  //this prints the hunger level 
  $('#hunger').text("Thirst:( " + xxx.hungerLevel + " )")

  $('#bed').text("Sleepiness:( " + xxx.sleepiness + " )")
  //this prints the boredom level 
  $('#play').text("Boredom:( " + xxx.boredom + " )")
  //this called the update age method 
  xxx.updateAge()
}, 1000)


