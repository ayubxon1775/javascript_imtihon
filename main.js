// 1. Javob

// Matnni o'zgartirish tugmasini tanlash
const changeTextBtn = document.getElementById('changeTextBtn');

// Matnni tanlash
const paragraph = document.getElementById('paragraph');

// Matnni o'zgartirish funktsiyasi
function changeText() {
    paragraph.textContent = 'Yangi matn';
}

// Matnni o'zgartirish tugmasiga "click" hodisasini qo'shish
changeTextBtn.addEventListener('click', changeText);

// 2 javob

// Ma'lumotlarni olish va HTMLga chiqarish
window.addEventListener('DOMContentLoaded', function() {
    // Sarlavha (title) elementini tanlash
    const titleElement = document.getElementById('title');
    // Ta'rif (description) elementini tanlash
    const descriptionElement = document.getElementById('description');

    // Statik ma'lumotlarni olish
    const title = "Salom, dunyo!";
    const description = "Bu veb-sayt Vanilla JavaScript yordamida yaratilgan.";

    // HTML elementlariga ma'lumotlarni joylash
    titleElement.textContent = title;
    descriptionElement.textContent = description;
});

// Formani tanlash
const loginForm = document.getElementById('loginForm');

// Ma'lumotlarni LocalStorage ga saqlash
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Bazi brauzerlarda formasini to'ldirib yuborishni oldini olish uchun

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Ma'lumotlarni LocalStorage ga saqlash
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Ma\'lumotlar LocalStorage ga saqlandi!');
});


// 4 Javob

const JSON_API = 'https://jsonplaceholder.typicode.com/todos?_limit=1'
const JSON_USER_API='https://jsonplaceholder.typicode.com/users?_limit=1'


// fetch(JSON_API)
//   .then(res => res.json())
//   .then(data => console.log(data))

const container = document.querySelector('.container')

async function getAllTodos() {
  const res = await fetch(JSON_USER_API);
  const data = await res.json();
  console.log(data)

  data.forEach(item => {
    container.innerHTML +=`
      
      <div class="card">
        <div class="content"> 
          <h2>${item.id}</h2>
          <h3>Name : ${item.name} ${item.username} </h3> 
          <p>Email: ${item.email} </p>
          <h4>Address : ${item.address.street} </h4>
          <h5>Phone Number : ${item.phone} </h5>
          <h5>Website : ${item.website} </h5>
          <h4>Company : ${item.company.name} </h4>
        </div>
      </div>
    `
  })

}

window.addEventListener('DOMContentLoaded', getAllTodos);





// 5 Javob
 // Declaration function
function darajaTopish(N, a) {
    let natija = 1;
    for (let i = 1; i <= N; i++) {
        natija *= a;
    }
    return natija;
}

// Misol:
let N = 3;
let a = 2;
let natija = darajaTopish(N, a);
console.log(a + " ning " + N + " darajasi: " + natija);


// Expression function
let darajaaTopish = function (M, o){
    let natijaa = 1;
    for (let i = 1; i <= M; i++) {
        natijaa *= o;
    }
    return natijaa;
}
let M = 4;
let o = 2;
let natijaa = darajaaTopish(M, o);
console.log(a + " ning " + M + " darajasi: " + natijaa);

// Arrow function
let darajaaaTopish = (F, u) => {
    let natijaaa = 1;
    for (let i = 1; i <= F; i++) {
        natijaaa *= u;
    }
    return natijaaa;
}
let F = 5;
let u = 2;
let natijaaa = darajaaTopish(F, u);
console.log(u + " ning " + F + " darajasi: " + natijaaa);


