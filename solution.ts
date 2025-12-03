
function formatValue(data:string):string;

function formatValue(data:number):number;

function formatValue(data:boolean):boolean;

function formatValue(data:string|number|boolean){
   if(typeof data === "number"){
    return data*10;
   }else if(typeof data === "boolean"){
    return !data
   }
   return data.toUpperCase();
}






const getLength=<T>(value:string | T[])=>{
    if(typeof value === "string"){
      return value.length;
    }

    if(Array.isArray(value)){
      return value.length;
    }
}




class Person{
  name:string;
  age:number;
  constructor(name:string,age:number){
      this.name=name;
      this.age=age;
  }

  getDetails(){
   return `Name: ${this.name}, Age: ${this.age}`;
  }
}





interface Item{
  title:string;
  rating:number;
}

const filterByRating=(books:Item[]):Item[]=>{
    return books.filter(book=> book.rating >= 4);
}





interface User{
  id:number;
  name:string;
  email:string;
  isActive:boolean;
}

const filterActiveUsers=(users:User[]):User[]=>{
    return users.filter(user=> user.isActive === true);
}



interface Book{
  title:string;
  author:string;
  publishedYear:number;
  isAvailable:boolean
}
const printBookDetails=(book:Book)=>{
   console.log(`Title: ${book.title}, Author: ${book.author}, published: ${book.publishedYear}, Available: ${book.isAvailable? 'Yes' : 'No'}`);
    
}


type ArrType=string[] | number[];

const getUniqueValues=(arr1:ArrType,arr2:ArrType):(string | number)[]=>{
   const newArr=[...arr1,...arr2];
   let arrayWithUniqueValue:(string | number)[]=[];
    let uniqueValueIndex=0;

    for(let i=0;i<newArr.length;i++){
      let exists=false;

      for(let j=0;j<uniqueValueIndex;j++){
         if(newArr[i] === arrayWithUniqueValue[j]){
            exists=true;
            break;
         }
      }

      if(!exists){
        arrayWithUniqueValue[uniqueValueIndex] = newArr[i];
        uniqueValueIndex++;
      }
    }
  

   return arrayWithUniqueValue;
}




interface Product{
  name:string;
  price:number;
  quantity:number;
  discount?:number;
}

const calculateTotalPrice=(products:Product[]):number=>{
  const totalPrice= products.reduce((acc,item)=>{
      if(item.discount){
       const itemPrice= item.price * item.quantity;
       const discount = (itemPrice * (item.discount/100));
       acc += ( itemPrice - discount)
      }else{
        acc += (item.price * item.quantity);
      }
       return acc;
   },0)

   return totalPrice;
   
}



