const list_item= document.querySelectorAll(".list_item");
const text_item=document.querySelectorAll(".text_item");
[...list_item].forEach(item =>item.addEventListener("click", handletab));



function handletab(event){
    [...list_item].forEach(item =>item.classList.remove("list_item-active"));
    event.target.classList.add("list_item-active");
    const number=event.target.dataset.tab;
    [...text_item].forEach(item=>{
        item.classList.remove("text-active");
        if(item.dataset.tab=== number)
        {
            item.classList.add("text-active");
        }
    });
}