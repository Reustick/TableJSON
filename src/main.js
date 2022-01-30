import './styles/all.scss'

// const getData =() => {
//    return fetch('db.json').then(function(response) {
//     return response.json();
//   }).then(function(json) {
//     let products = json;
//     initialize(products);
//   }).catch(function(err) {
//     console.log('Fetch problem: ' + err.message);
//   });
  
// }
// console.log(getData());

function getData() {
  return fetch('files/db.json')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Данные не были получены, ошибка: ' + response.status);
      }
    })
    .catch(err => {
      console.warn(err);
      document.body.innerHTML = '<div style="color: red; font-size: 30px; ">Упс, что-то пошло не так!</div>';
    });
}
console.log(getData())


// import MainComponent from './components/MainComponent'

// const component = MainComponent('My component text')

// document.querySelector('body').appendChild(component)

