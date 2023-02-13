const loadingAnimationEl = document.querySelector('#submit-button-animation')
loadingAnimationEl.addEventListener('onclick', startAnimation)
function startAnimation(){
    document.querySelector('#wrapper').className += 'submit-graphic'
}