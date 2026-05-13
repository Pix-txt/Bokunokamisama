function Person(firstName, lastName, age, height, eyecolour){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
    this.eyecolour = eyecolour;
    this.fullName = function(){
        return this.firstName + ' ' + this.lastName;
    }
}

let meep = '';
const Person1 = new Person('Miku', 'Hatsune', 16, '152cm', 'blue');
let text = Person1.fullName() + '';
console.log(Person1.firstName);
console.log(text);

for ( let x in Person1){
    if (Person1[x] instanceof Function){
        meep += x + ' ' + Person1[x]() + ', ';
    }
    else{
        meep += x + ' ' + Person1[x] + ', ';
    } 
}

console.log(meep)

delete Person1.eyecolour
console.log('eyecolour' in Person1)