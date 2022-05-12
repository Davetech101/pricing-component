//Universal Variables
const checkBox = document.querySelector('.toggle')
const circle = document.querySelector('.circle')
const empties = document.querySelectorAll('.empty')
const amount = document.querySelectorAll('.amount')
const range = document.querySelector('.range')
const ball =  document.querySelector('.ball')




//call key functions
dragNDrop()


//classes
class PRICES{
    constructor(previews, price){
        this.previews = previews
        this.price = price
    }
}

const price1 = new PRICES('10k', '8')
const price2 = new PRICES('50k', '12')
const price3 = new PRICES('100k', '16')
const price4 = new PRICES('500k', '24')
const price5 = new PRICES('1m', '36')

//Arrays
const priceArray = [price1, price2, price3, price4, price5]
const priceList = Array.from(empties)


//Key Functions

//Key Function-1 Start

function dragNDrop() {

    empties.forEach((empty, idx) => {
        empty.addEventListener('drop', (e) => {
            dragDrop(e)
            changeWidth(idx)
            changeprice(idx)
        })
    });



    circle.addEventListener('dragstart', dragStart)
    circle.addEventListener('dragend', dragEnd)

    for (const empty of empties) {
        empty.addEventListener('dragover', dragOver)
        empty.addEventListener('dragenter', dragEnter)
        empty.addEventListener('dragleave', dragLeave)
        // empty.addEventListener('drop', dragDrop)
    }
    

    function dragStart(){

        for (const empty of empties){
         empty.classList.add('faint')
        }
    
        // console.log(this.classList);
    }
    
    function dragEnd(){
        for (const empty of empties){
            empty.classList.remove('faint')
        }
    }
    
    function dragOver(e){
        // this.classList.toggle('none')
        e.preventDefault()
    }
    
    function dragEnter(e){
        this.classList.remove('faint')
        e.preventDefault()
    }
    
    function dragLeave(){
        this.classList.remove('none')
        this.classList.add('faint')
    
    }
    
    function dragDrop(e){
        e.target.append(circle)
    }
    
    function changeWidth(index){
        const line2 = document.querySelector('.line-2')
        line2.style.width = `${index * 25}% `  
    }
}
//Key Function-1 Ends



checkBox.addEventListener('click', () => {
    ball.classList.toggle('translate')
    if (ball.classList.contains('translate')) {
        setTimeout(() => {
            alert('Change plan to see the discount')
        }, 40);
    }
})

function changeprice(idx){



    

    if (ball.classList.contains('translate')) {
        amount.forEach(amnt => {
        amnt.innerHTML = ` $${priceArray[idx].price - (priceArray[idx].price * 0.25)}`
     });
    }else if(! ball.classList.contains('translate')) {
        amount.forEach(amnt => {
            amnt.innerHTML = ` $${priceArray[idx].price}`
        });
    }
    range.innerHTML = priceArray[idx].previews
}
