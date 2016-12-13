Output of React Training 

https://online.reacttraining.com/courses/reactjsfundamentals

npm start 


call vs Apply vs Bind

var say = function(lang1,lang2,lang3) {
  console.log('Say:' + this.name + ' '+ lang1+ ' '+lang2+ ' '+lang3); 
}

var person = {
  name: 'test',
  age : 34
}

var languages = ['js','c','c#'];

say.call(person,languages[0],languages[1],languages[2])

say.apply(person,languages)

var fnNew = say.bind(person,languages[0],languages[1],languages[2])
fnNew();
