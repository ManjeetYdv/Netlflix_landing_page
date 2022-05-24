const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems =document.querySelectorAll('.tab-content-item');

//select tab selec item
function selectItem(e){
    /*remove border and show from all and then add to selected item*/
    removeBorder();
    removeShow();

    this.classList.add('tab-border');
    // alert(this.id);   /*gives tab-1 tab-2 tab-3 so we can dynamically make it tab-1-content tp show the content*/
    //grab content item from DOM
    const tabContentItem =document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');

}

function removeBorder(){
    tabItems.forEach(item=>item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item=>item.classList.remove('show'));
}

//Listener for each tab
tabItems.forEach(item => item.addEventListener('click' , selectItem));
