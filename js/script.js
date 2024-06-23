//<--1-->
//1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
//бал і кількість пропущених занять
//2) написати метод який буде виводити цю інформацію
//3) написати три варіанти студентів
//4) прикріпити знначення за допомогою call apply bind

///1. вар
/*function infoStudent() {
       console.log(this);
     }
const student = {
    name: "Zorana",
    spetiality: "botany",
    gpa: 10,
    absent: 2,
    infoStudent: infoStudent
}
student.infoStudent();
//call
const student1 = {
    name: "Eva",
    spetiality: "geology",
    gpa: 10,
    absent: 2,
}
infoStudent.call(student1);

const student2 = {
    name: "Anton",
    spetiality: "ecology",
    gpa: 12,
    absent: 3,
}
infoStudent.call(student2);*/

//apply
/*function infoStudent(gpa = this.gpa, absent = this.absent) { //те що ми вставляємо окремо, прописуємо тут
    console.log(`імя: ${this.name}, спеціальність: ${this.spetiality}, сер.бал: ${gpa}, Пропуски: ${absent}`); //до сер.балу і пропусків this вже не ставимо бо воно зверху
}
const student = {
    name: "Zorana",
    spetiality: "botany",
    gpa: 10,
    absent: 2,
    infoStudent: infoStudent
}
const student1 = {
    name: "Eva",
    spetiality: "geology",
    //gpa: 10,
    //absent: 2,
}
const student2 = {
    name: "Anton",
    spetiality: "ecology",
    //gpa: 12,
    //absent: 3,
}
student.infoStudent(); 
infoStudent.apply(student1, [10, 2]); 
infoStudent.apply(student2, [12, 3]);*/

//bind

/*function infoStudent() {
    console.log(`імя: ${this.name}, спеціальність: ${this.spetiality}, сер.бал: ${this.gpa}, Пропуски: ${this.absent}`);
}
const student = {
    name: "Zorana",
    spetiality: "botany",
    gpa: 10,
    absent: 2,
    infoStudent: infoStudent
}
const student1 = {
    name: "Eva",
    spetiality: "geology",
    gpa: 10,
    absent: 2,
}
const student2 = {
    name: "Anton",
    spetiality: "ecology",
    gpa: 12,
    absent: 3,
}
student.infoStudent(); 
infoStudent.bind(student1)(); 
infoStudent.bind(student2)();
*/

/// 2. вар
//const info = function (name, gpa, absent){
//    console.log(`${name}, your spetiality is ${this.spetiality}, your gpa ${gpa}, missed classes ${absent}`);
//};
//const spetiality1 = {spetiality: "botany"};
//const spetiality2 = {spetiality: "geology"};
//const spetiality3 = {spetiality: "ecology"};

//call
//info.call(spetiality1, "Zorana", 10, 2);
//info.call(spetiality2, "Eva", 8, 5);
//info.call(spetiality3, "Anton", 12, 3);

//apply
//info.apply(spetiality1, ["Zorana", "10", "2"]);
//info.apply(spetiality2, ["Eva", "8", "5"]);
//info.apply(spetiality3, ["Anton", "12", "3"]);

//bind
//info.bind(spetiality1, "Zorana", "10", "2")();
//info.bind(spetiality2, "Eva", "8", "5")();
//info.bind(spetiality3, "Anton", "12", "3")();

//<--2-->
//Написати дві кнопки і закріпити на них функції
//при натисканні на кнопку html - має видати коротке визначення що це таке
//при натисканні на кнопку css - має видати коротке визначення що це таке

/*
const info = {
    showItems(){
        console.log(this.items);
    },
};

const html = {
    items:["це мова розмітки, що використовується для створення та структурування контенту веб-сторінок."]
}

const css = {
    items: ["це мова стилів, яка використовується для оформлення та визначення вигляду веб-сторінок."]

}
document
   .querySelector("#html")
   .addEventListener("click", info.showItems.bind(html));

 document
   .querySelector("#css")
   .addEventListener("click", info.showItems.bind(css));
*/


//<--3-->
//Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
//функція має повертати назву товару і вартість
//перевірити на варіантах:
//1) banana 30, 4,5
//2) cherry 58, 1,3
//3) orange 89. 3,4

/*const banana = { //знову завтикала крапкокомі!! тому вибило помилку. у const потрібно лише коми ставити

   name: "banana",
   price: 30,
   quantity: 4.5, //а тут крапка в дробному числі
}
const cherry = {
    name: "cherry",
    price: 58,
    quantity: 1.3,
}
const orange = {
    name: "orange",
    price: 89 ,
    quantity: 3.4 ,
}

function Magaz(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.getSum = function() {
        return `${this.name} вартує ${this.price * this.quantity} гривень`;
    }
}

// виводимо в консольку
console.log(new Magaz(banana.name, banana.price, banana.quantity).getSum()); // banana вартує 135 гривень
console.log(new Magaz(cherry.name, cherry.price, cherry.quantity).getSum()); // cherry вартує 75.4 гривень
console.log(new Magaz(orange.name, orange.price, orange.quantity).getSum()); // orange вартує 302.6... гривень */