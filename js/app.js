console.log('Tomagotchichichichi');

// class---
class Tom {
  constructor(name, age, hungerLevel , sleepiness, boredom){
    this.name = name;
    this.age = age;
    this.hungerLevel = hungerLevel;
    this.sleepiness = sleepiness;
    this.boredom = boredom;
  }
     eat(food){
      if (this.hungerLevel == 10); {
      window.alert("You Killed It, Literally! You Are Dead")
      }
     }
     sleepMore(){
      if (this.sleepiness === 10) {
        // window.alert("Your Dead Tired, But really, Your Dead!")
      }
     }
     playMore(){
      this.boredom--
      if (this.boredom === 10) {
        window.alert("You've Had Your Fun, Now Your Dead!")
      }
     }
};

const xxx = new Tom('Jim', 0, 0, 0, 0)

// Clicking -----

$('.F').on('click', (e) => {
  console.log('clicked food');
  // const food = $(e.currentTarget);
  xxx.eat();
  $('#hunger').text("Hunger:( " + xxx.hungerLevel++ + " )");
}); 


$('.L').on('click', (e) => {
  // const $clickedDiv = $(e.currentTarget);
  $('#sleep').text("Sleepiness:( " + xxx.sleepiness-- + " )");
});


$('.P').on('click', (e) => {
  // const $clickedDiv = $(e.currentTarget);
  $('#play').text("Boredom:( " + xxx.boredom++ + " )")
});





