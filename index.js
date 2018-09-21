class Clock{
  constructor(){
    this.state = {
      increment: 0,
      decrement: 10
    }  
  }
  
  increment(i){
    this.state.increment += i
  }
  
  decrement(d){
    this.state.decrement -= d   
  }

  tick(){
    if(!(this.state.increment < 10 || this.state.decrement > 0)){
      throw 'It reached its limit'
    }

    this.increment(1)
    this.decrement(1)

    return this.state
  }
}
var Test = new Clock()

setInterval(function() {
  console.log(Test.tick())
}, 1000)
