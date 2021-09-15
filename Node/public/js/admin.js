const lists = document.querySelectorAll(".list");
const sections = document.querySelectorAll("#section");

lists.forEach((list, index) => {
    if(index !== lists.length - 1){
        list.addEventListener('click', () => {
            removeActive();
            sections[index].classList.remove("hidden")
        })
    }
})

function removeActive(){
    sections.forEach(section => {
        section.classList.add('hidden')
    })
}

tinymce.init({
    selector: '#body'
});