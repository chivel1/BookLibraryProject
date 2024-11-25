document.addEventListener("DOMContentLoaded", function() {
    const loginContainer = document.getElementById("login-container");
    const registerContainer = document.getElementById("register-container");
    const toggleLink = document.getElementById("toggle"); 
    const toggleLoginLink = document.getElementById("toggle-login"); 
    const submitBtn = document.getElementById("submit-btn");
    const registerBtn = document.getElementById("register-btn");
    const spinner = document.getElementById("spinner");
    const registerSpinner = document.getElementById("register-spinner");

    loginContainer.style.display = "block";
    registerContainer.style.display = "none";

    toggleLink.addEventListener("click", function(e) {
        e.preventDefault();
        loginContainer.style.display = "none"; 
        registerContainer.style.display = "block"; 
    });

    toggleLoginLink.addEventListener("click", function(e) {
        e.preventDefault();
        registerContainer.style.display = "none"; 
        loginContainer.style.display = "block"; 
    });

    submitBtn.addEventListener("click", function(e) {
        e.preventDefault(); 
        spinner.style.display = "block"; 
        submitBtn.disabled = true; 

        setTimeout(() => {
            spinner.style.display = "none"; 
            alert("Logged in successfully!"); 
            submitBtn.disabled = false; 
        }, 2000);
    });

    registerBtn.addEventListener("click", function(e) {
        e.preventDefault(); 
        registerSpinner.style.display = "block"; 
        registerBtn.disabled = true; 

        setTimeout(() => {
            registerSpinner.style.display = "none"; 
            alert("Registered successfully!"); 
            registerBtn.disabled = false; 
        }, 2000);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');
  
    hamburger.addEventListener('click', function() {
      navUl.classList.toggle('active');
    });
  });
//creating a drop down for overviewcontent
const more = document.querySelector("#more")
console.log(more)
const readMore = document.getElementById("readMore")
console.log(readMore)
  readMore.addEventListener('click', function() {
    if (more === "none"){
        
    }
    
      more.style.display = "block"
  })
  const books = [
    {
        id: 1,
        title: "You are dead",
        description: "Description for 'You are dead'.",
        price: "$2.99",
        image: "./imagefolder/image/5912a6c6fb36fb7c1077ad0c76d3a66d.jpg"
    },
    // Add more book objects here with id, title, description, price, and image
];

document.querySelectorAll('.bookCard').forEach(card => {
    card.addEventListener('click', function () {
        const bookId = this.getAttribute('data-id');
        const book = books.find(b => b.id == bookId);
        if (book) {
            document.getElementById('bookTitle').innerText = book.title;
            document.getElementById('bookDescription').innerText = book.description;
            document.getElementById('bookPrice').innerText = book.price;
            document.getElementById('bookDetailsModal').style.display = 'block';
        }
    });
});

function closeModal() {
    document.getElementById('bookDetailsModal').style.display = 'none';
}
var d = "hello"
var roy =d.slice(1,2)
console.log(rog)



