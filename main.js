// Defining text characters for the empty and full hearts for you to use later.
const errorMessage = document.querySelector("#modal-message")
const hidden = document.querySelector('#modal')
hidden.classList.add('hidden')
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const glyphList = document.querySelectorAll(".like-glyph")
// Your JavaScript code goes here!
glyphList.forEach(glyph =>{glyph.addEventListener('click',() =>
mimicServerCall()
.then(()=>{
  if (glyph.textContent !== FULL_HEART) {
    glyph.classList = "activated-heart"
    glyph.textContent = FULL_HEART
  }
  else if (glyph.textContent === FULL_HEART) { 
    glyph.textContent = EMPTY_HEART
    glyph.classList.remove(".activated-heart") 
  }

})
.catch((error) => {
  hidden.classList.remove("hidden")
  errorMessage.textContent = error
  setTimeout(hideAgain, 3000)
})
)
}) 

function hideAgain() {
  return hidden.classList.add("hidden")
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
// Add the .hidden class to the error modal in the HTML 
// so it does not appear when the page first loads
// When a user clicks on an empty heart:
// Invoke mimicServerCall to simulate making a server request
// When the "server" returns a failure status:
// Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
// Display the error modal by removing the .hidden class
// Display the server error message in the modal
// Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
// When the "server" returns a success status:
// Change the heart to a full heart
// Add the .activated-heart class to make the heart appear red
// When a user clicks on a full heart:
// Change the heart back to an empty heart
// Remove the .activated-heart class
// Keep all your styling rules entirely in style.css. Do not manipulate any .style properties.
// Only manipulate the DOM once the server request responds. Do not make the heart full until you're inside a successful .then block.