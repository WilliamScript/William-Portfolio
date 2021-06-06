// Adding event listener to pictures of websites to create a dropdown to live/repo links
const liveRepoOne = document.getElementById('liveRepoOne');
const liveRepoTwo = document.getElementById('liveRepoTwo');
const liveRepoThree = document.getElementById('liveRepoThree');

function dropDownFunctionOne() {
  liveRepoOne.classList.add("imageOneLinks")
  liveRepoOne.innerHTML = `<p><a href="https://paul-william-project.github.io/Paul-William-Project-Two/">Live</a> | <a href="">Repo</a></p>`
}
function dropDownFunctionTwo() {
  liveRepoTwo.classList.add("imageTwoLinks")
  liveRepoTwo.innerHTML = `<p><a href="https://sad-lamport-cffda4.netlify.app/">Live</a> | <a href="">Repo</a></p>`
}
function dropDownFunctionThree() {
  liveRepoThree.classList.add("imageThreeLinks")
  liveRepoThree.innerHTML = `<p><a href="https://confident-perlman-5594c2.netlify.app/">Live</a> | <a href="">Repo</a></p>`
}

const imageOne = document.getElementById('imageOne');
const imageTwo = document.getElementById('imageTwo');
const imageThree = document.getElementById('imageThree');

imageOne.addEventListener("click", function (e) {
  e.preventDefault()
  dropDownFunctionOne()
});
imageTwo.addEventListener("click", function (e) {
  e.preventDefault()
  dropDownFunctionTwo()
});
imageThree.addEventListener("click", function (e) {
  e.preventDefault()
  dropDownFunctionThree()
});