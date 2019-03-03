var greetObject = {
  message:"welcome to my blog", 
  lang: "English",
  greeting: function(){
    console.log("Lang is ", this.lang); 
      return this.message
  }
};
var greetingMessage = function(name, occupation){
  console.log(this.greeting());
  console.log(this.greeting(),'I am' + name + 'And i m'+ occupation);
};
var obj_1 = greetingMessage.bind(greetObject); 
var obj_2 = greetingMessage.call(greetObject,'Anuja','writer');
var obj_3 = greetingMessage.apply(greetObject,['Anuja','writer']);



	
	
