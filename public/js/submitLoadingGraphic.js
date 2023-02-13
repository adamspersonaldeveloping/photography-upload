
const submitBtn = document.querySelector('#submit-button-animation')

submitBtn.addEventListener('click', startAnimation)
function startAnimation(){
    console.log('foo')
    document.querySelector('#submit-loading').classList.add('loadingAnimation')
    document.querySelector('#hidden-submit').click()
}

