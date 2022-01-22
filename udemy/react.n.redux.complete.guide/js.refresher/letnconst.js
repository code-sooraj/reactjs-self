[a,b] = ['Hello', 'Sooraj']
console.log(a)
console.log(b)


{name} = {name:'Sooraj', age:28}
console.log(name)


const oldArray = ['abc', 'ghi', 'def'];
const newArray =[...oldArray,1,2];
console.log(oldArray);
console.log(newArray);

const oldObject = {
  name: 'Sunny', age: 12
}
const newObject = {...oldObject, newProp: 'Bunny'}
console.log(oldObject);
console.log(newObject);

const sortArgs = (...args) => {
  return args.filter(el => el !=1).sort();
}
console.log(sortArgs(1,5,2,3,0));

class Human {
  gender='male';

  
  printMyGender() {
    console.log(this.gender);
  }
}

class Person extends Human {

  name='Sooraj';
  gender='female';
  
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();

person.printMyName();
person.printMyGender();