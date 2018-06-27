console.log('2222222Tomagotchichichichi222222');

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

  updateName(){
    const $userName = $('#your-name').val();
    console.log($userName)
    $('#you').text($userName)
    $('form').remove();
  }
  updateAge() {
    //this make the age increase by 1 every 10 seconds
    if (this.time % 2 === 0){
      this.age++
    }
    //this prints the updated age to the page
    $('#age').text("Age: " + this.age)

    // year three Chamber of Secrets (2002)
    if (this.age === 2){
      //this will change the background image or gif
      // $('body').css('background', 'url(https://media0.giphy.com/media/gyC0CPceyEKYw/giphy.gif)')
      //this will change the html profile photo or gif
      $('.photo').attr('src', 'http://i0.kym-cdn.com/photos/images/newsfeed/000/117/229/f79b7a8941dba2abf43346728aa287e4.gif')
    }
    // year 4 Prisoner of Azkaban (2004)
    if (this.age === 3){
      //this will change the background image or gif
      // $('body').css('background', 'url(https://media0.giphy.com/media/gyC0CPceyEKYw/giphy.gif)')      //this will change the html profile photo or gif
      $('.photo').attr('src', 'https://media.giphy.com/media/pm4F5XDXYOymk/giphy.gif')
    }    
    // year 5 Goblet of Fire (2005)
    if (this.age === 4){
      //this will change the background image or gif
      // $('body').css('background', 'url(https://medias.spotern.com/spots/w640/95803.jpg)')
      //this will change the html profile photo or gif
      $('.photo').attr('src', 'https://i.skyrock.net/2967/75992967/pics/2956446683_1_3_ltALbZDl.gif')
    }
    // year 6 Order of the Phoenix (2007)
    if (this.age === 8){
      //this will change the background image or gif
      // $('body').css('background', 'url(http://i0.kym-cdn.com/photos/images/newsfeed/000/117/229/f79b7a8941dba2abf43346728aa287e4.gif)')
      //this will change the html profile photo or gif
      $('.photo').attr('src', 'https://vignette.wikia.nocookie.net/harrypotter/images/b/b0/Harry_disarms_Lucius.gif/revision/latest?cb=20160114190837')
    }
    // year 7 Half - Blood Prince (2009)
    if (this.age === 10){
      //this will change the background image or gif
      // $('body').css('background', 'url(http://i0.kym-cdn.com/photos/images/newsfeed/000/117/229/f79b7a8941dba2abf43346728aa287e4.gif)')
      //this will change the html profile photo or gif
      $('.photo').attr('src', 'https://i.imgur.com/EsiI5Fi.gif')
    }

  }

};


$('#name-form').on('submit', (e) => {
  e.preventDefault();
  xxx.updateName()
  startTimer()
});   

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
const startTimer = ()=> {
  const intervalId = setInterval(() =>{
    xxx.time++;
    //this increases hunger level by 1 every 5 seconds
    if(xxx.time % 5 === 0){
      xxx.hungerLevel = xxx.hungerLevel + 1;
    }
    //if levels get to 10 or more game over reload page
    //(\n \n = line break
    if (xxx.hungerLevel >= 10){
      window.alert( 'Great Merlins beard! \nGAME OVER\n');
      location.reload();
    }

    if (xxx.time % 7 === 0){
      xxx.boredom = xxx.boredom + 2;
    }
    if(xxx.boredom >= 10){
      window.alert( 'You hav been expelled from of The Hogwarts School of Magic! \nGAME OVER\n');
      location.reload();
    }

    if (xxx.time % 9 === 0){
      xxx.sleepiness = xxx.sleepiness + 3;
    }
    if (xxx.sleepiness >= 10){
      window.alert('You hav been expelled from of The Hogwarts School of Magic \nGAME OVER\n');
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
}
