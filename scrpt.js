// class Data{
//     constructor(...data){
//         this.data=[...data]
//     }
//     search(value){
//             if (this.data.includes(value)) {
//                 console.log(true);
//             }
//             else{
//                 console.log(false);
//             }
//     }

// }
// let myClass=new Data("salam","dostlar","necesiz")
// myClass.search("salam")

// ----------------------------------------------------------

// let a=10
// let arr=[]
// for (let i = 0; i <= 10; i++) {
//     if (10%i===0) {
//         arr.push(i)

//     }

// } console.log(arr);

// ------------------------------------------------------------

// class Number {
//     constructor(number) {
//         this.number = number
//     }
//     Search() {
//         for (let i = 0; i <= this.number; i++) {
//             if (this.number % i === 0) {
//                console.log(i);

//             }
//         }

//     }

// }
// let myClass= new Number(55)
// myClass.Search()

// -------------------------------------------------------------

// class Admin{
//     constructor(user,password){
//         this.password=password
//         this.user=user
//     }
//     Login(userCheck,passCheck){
//         if (this.user===userCheck && this.password===passCheck) {
//             console.log("giris olundu");

//         }
//     else{
//             console.log("Yanlisdir");
//         }
//     }

// }
// let user=prompt("User:")
// let password=prompt("Pass:")
// let Yoxlama = new Admin("Ali", "Parol123")
// Yoxlama.Login(user,password)

// -----------------------------------------------------------------------

// class Human {
//     constructor(name, age, height){
//         this.name=name
//         this.age=age
//         this.height=height
//     }

// }

// class Doctor extends Human {
//     constructor(name,age,height,exp) {
//         super(name,age,height)
//         this.exp = exp
//     }

// }
// const other = new Doctor('Salman',39,"2km","tecrubeci")

// console.log(other);

// ----------------------------------------------------------------------

const arr = [
  {
    id: 2,
    description: "Sweet and savory sauces relishes spreads and seasonings",
    name: "Condiments"
  },
  {
    id: 1,
    description: "Soft drinks coffees teas beers and ales",
    name: "Beverages"
  },
  {
    id: 3,
    description: "Desserts candies and sweet breads",
    name: "Confections"
  },
  {
    id: 4,
    description: "Cheeses",
    name: "Dairy Products"
  },
  {
    id: 5,
    description: "Breads crackers pasta and cereal",
    name: "Grains/Cereals"
  },
  {
    id: 6,
    description: "Prepared meats",
    name: "Meat/Poultry"
  },
  {
    id: 7,
    description: "Dried fruit and bean curd",
    name: "Produce"
  },
  {
    id: 8,
    description: "Seaweed and fish",
    name: "Seafood"
  }
];

// arr.sort((a,b)=> (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
// arr.sort((a,b)=> (a.description > b.description) ? 1 : ((b.description > a.description) ? -1 : 0))
// arr.sort((a,b)=> (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

// console.table(arr);



// const search="and"
// const filter = arr.filter((x) => x.description.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

// console.table(filter);