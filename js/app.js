console.log('Tomagotchichichichi');

// class---
let time = 30
class Tom {
  constructor(name, age, hungerLevel, sleepiness, boredom, time){
    this.name = name;
    this.time = 0;
    this.age = age;
    this.hungerLevel = hungerLevel;
    this.sleepiness = sleepiness;
    this.boredom = boredom;
  }
  eat(food){
    this.hungerLevel--
    $('#hunger').text("Hunger:( " + this.hungerLevel + " )");

  }

  sleepMore(){
    this.sleepiness--
    $('#sleep').text("Rest:( " + this.sleepiness + " )");
      // window.alert("Your Dead Tired, But really, Your Dead!")
    
  }
  playMore(){
   this.boredom--
   $('#play').text("Boredom:( " + this.boredom-- + " )")
  }
};
const xxx = new Tom('Jim', 0, 0, 0, 0)

// Clicking -----

$('.F').on('click', (e) => {
  console.log('clicked food');
  xxx.eat()
}); 


$('.L').on('click', (e) => {
  xxx.sleepMore();
});


$('.P').on('click', (e) => {
  xxx.playMore()
});

// xxx.eat();


// set interval

  // increase hunger

/// timer code goes here
    //     const intervalId = setInterval(() =>{
    //       this.time;
    //       if(time % 5 === 0){
    //       this.hungerLevel + 1;
    //       }
    //       if(this.boredom === 10)

    //       $('#timer').text('Time: ', + this.time + 's');
    //       $('#hunger').text("Hunger:( " + this.time + " )")
    //     }, 1000)
    //     $('#timer').append(this.time);
