const navbarWrapper = document.querySelector('.navbar-nav-wrapper')
const navbarCollapse = document.querySelector('.js-navbar-collapse')
const siteHeaderToggler = document.querySelector('.site-header__toggler')
const searchFormControl = document.querySelector('.form-control')
const searchFormLabel = document.querySelector('.form-label')
const searchFormBtn = document.querySelector('.js-search')
const headerNavLinks = document.querySelectorAll('.site-header__nav-link')

console.log(searchFormBtn);

navbarWrapper.addEventListener('click', function() {
    if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show')
        siteHeaderToggler.classList.add('collapsed')
    } else {
        navbarCollapse.classList.add('show')
        siteHeaderToggler.classList.remove('collapsed')
    }
})

searchFormBtn.addEventListener('click', function(){
    if (searchFormControl.classList.contains('form-control--open')) {
        searchFormControl.classList.remove('d-block', 'form-control--open')
        searchFormLabel.classList.remove('d-block', 'form-label--open')
        searchFormLabel.style.opacity = '0'
        headerNavLinks.forEach((item) => {
            item.style.opacity = '1';
        })
    } else {
        searchFormControl.classList.add('d-block', 'form-control--open')
        searchFormLabel.classList.add('d-block', 'form-label--open')
        console.log('y');
        searchFormLabel.style.opacity = '1'
        headerNavLinks.forEach((item) => {
            item.style.opacity = '0';
        })
    }
})

searchFormControl.addEventListener('input', function(){
    if (searchFormControl.value != '') {
        searchFormLabel.style.opacity = '0'
        searchFormLabel.classList.add('form-label-close')
    } else {
        searchFormLabel.style.opacity = '1'
        searchFormLabel.classList.remove('form-label-close')
    }
})