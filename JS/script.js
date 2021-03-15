'use strict';
//  Задание на урок:
// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'
// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false
// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }

// const namberOfFilms = +prompt ('Скільки фільмів ви подивились?','');
// const personalMovieDB ={
//     count:namberOfFilms,
//     movies: {},
//     actors:{},
//     genres:[],
//     privat: false
// };
// const a = prompt ('Скільки фільмів ви подивились?',''),
//       b = prompt ('На скільки оцірите цей фільм?',''),
//       c = prompt ('Скільки фільмів ви подивились?',''),
//       d = prompt ('На скільки оцірите цей фільм?','');

//  personalMovieDB.movies[a] = b;
//  personalMovieDB.movies[c] = d;
 
//  console.log(personalMovieDB);

// Цикли
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// const namberOfFilms = +prompt ('Скільки фільмів ви подивились?','');
// const personalMovieDB ={
//     count:namberOfFilms,
//     movies: {},
//     actors:{},
//     genres:[],
//     privat: false
// };

//  for (let i = 0; i < 2; i++){
//     const a = prompt ('Скільки фільмів ви подивились?',''),
//         b = prompt ('На скільки оцірите цей фільм?','');

//         if (a != null && b != null && a != '' && b != '' && a.length <50) {
//             personalMovieDB.movies[a] = b;
//              console.log('Done');
//         } else {
//             console.log('error');
//             i--;
//         }
       
//  }
//  if (personalMovieDB.count < 10) {
//      console.log("Переглянуто дуже мало фільмів");
//  } else if (personalMovieDB >= 10 && personalMovieDB.count < 30) {
//       console.log("Ви класичний глядач");
//  } else if (personalMovieDB.count >= 30) {
//      console.log("Ви кіноман");
//  } else {
//      console.log("Помилка");
//  }
//  console.log(personalMovieDB);
 
//2 практика використовуємо функції
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
// let namberOfFilms;
// function start() {
//     namberOfFilms = +prompt ('Скільки фільмів ви подивились?','');
//     while (namberOfFilms == '' || namberOfFilms == null || isNaN (namberOfFilms)) {
//           namberOfFilms = +prompt ('Скільки фільмів ви подивились?','');

//     }
// }
// start();
// const personalMovieDB ={
//     count:namberOfFilms,
//     movies: {},
//     actors:{},
//     genres:[],
//     privat: false
// };
//  function rememberMyFilms() {
//     for (let i = 0; i < 2; i++){
//         const a = prompt ('Скільки фільмів ви подивились?',''),
//             b = prompt ('На скільки оцірите цей фільм?','');
    
//             if (a != null && b != null && a != '' && b != '' && a.length <50) {
//                 personalMovieDB.movies[a] = b;
//                  console.log('Done');
//             } else {
//                 console.log('error');
//                 i--;          
//      } 
//  }
// }
//  rememberMyFilms();
//   function detectPersonalLevel(){
//     rememberMyFilms();
//     if (personalMovieDB.count < 10) {
//         console.log("Переглянуто дуже мало фільмів");
//     } else if (personalMovieDB >= 10 && personalMovieDB.count < 30) {
//          console.log("Ви класичний глядач");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Ви кіноман");
//     } else {
//         console.log("Помилка");
//     }
//   }
//   detectPersonalLevel();
   
//   function showMyDB (hidden){
//      if (!hidden)
//      console.log(personalMovieDB);
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимий жанр під номером ${i}`);

//     }
// }
// writeYourGenres()
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMovieDB ={
    count: 0,
    movies: {},
    actors:{},
    genres:[],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt ('Скільки фільмів ви подивились?','');
        while (namberOfFilms == '' || namberOfFilms == null || isNaN (namberOfFilms)) {
              namberOfFilms = +prompt ('Скільки фільмів ви подивились?','');
    
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++){
            const a = prompt ('Скільки фільмів ви подивились?',''),
                b = prompt ('На скільки оцірите цей фільм?','');
        
                if (a != null && b != null && a != '' && b != '' && a.length <50) {
                    personalMovieDB.movies[a] = b;
                     console.log('Done');
                } else {
                    console.log('error');
                    i--;          
         } 
     }
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10) {
            console.log("Переглянуто дуже мало фільмів");
        } else if (personalMovieDB >= 10 && personalMovieDB.count < 30) {
             console.log("Ви класичний глядач");
        } else if (personalMovieDB.count >= 30) {
            console.log("Ви кіноман");
        } else {
            console.log("Помилка");
        }
      },
      showMyDB: function(hidden){
        if (!hidden){
        console.log(personalMovieDB);
   }
},
toggleVisibleMyDB: function(){
    if (personalMovieDB.ptivat) {
        personalMovieDB.privat = false;
    }else {
        personalMovieDB.privat = true;
    }
},
       writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
        let genre =  prompt(`Ваш любимий жанр під номером ${i}`);
        if (genre === '' || genre == null){
        
        console.log('Ви ввели некоректні дані або не ввели їх взагалі');
        i--;
    } else {
        personalMovieDB.genres[i - 1] = genre;
    }
  }
  personalMovieDB.genres.forEach((item, i) => {
console.log(`Любимий жанр ${i + 1} - це ${item}`)
  });
}
};



