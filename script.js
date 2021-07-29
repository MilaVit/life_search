window.onload = () => {
let search = document.getElementById('search-input');
 let link = document.querySelectorAll('.list li'); 

search.addEventListener('input', findItemOnPage) 

function findItemOnPage() {
    let valueElem = this.value;
  
    if(valueElem !== '') {
        link.forEach((element) => {
        if(element.innerText.search(new RegExp(valueElem, "i")) === -1) {
            element.classList.add('hide')
        }
    })
    } else {
        link.forEach((element) => {
            element.classList.remove('hide')
        })
    }
}

}