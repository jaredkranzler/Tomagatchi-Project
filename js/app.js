console.log('Tomagotchichichichi');

// class---

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

  updateScore() {
    // 
  }
};

const xxx = new Tom('Jim', 0, 0, 0, 0)

// Clicking -----

$('.F').on('click', (e) => {
  xxx.eat()
}); 


$('.L').on('click', (e) => {
  xxx.sleepMore();
});


$('.P').on('click', (e) => {
  xxx.playMore()
});

// xxx.eat();

 // timer code goes here
const intervalId = setInterval(() =>{
  xxx.time++;
  if(xxx.time % 5 === 0){
    xxx.hungerLevel = xxx.hungerLevel + 1;
  }
  $('#timer').text('Time: ' + xxx.time + 's');

  $('#hunger').text("Hunger:( " + xxx.hungerLevel + " )")
}, 1000)







