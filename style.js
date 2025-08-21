const navbar = document.querySelector(".navbar");
document.querySelector("#menu").onclick = () => {
  navbar.classList.toggle('active');
}

const closebtn = document.getElementById('close');
closebtn.addEventListener('click', () => {
  navbar.classList.remove('active');
});
