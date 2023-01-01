// let mydata = new Date();console.log(mydata.getDate());
// let ele = document.getElementsByClassName("btn");
// //console.log(ele)
// //ele[0].style.background ="yellow"
// // ele[0].classList.add("bg")
// console.log(ele[0].innerHTML);
// console.log(ele[0].innerText);
// createele = document.createElement('b')
// createele.innerText ="finall i pass"
// ele[0].appendChild(createele);
// removeChild('b')

// sel = document.querySelector('.btn')
// console.log(sel)
// sel.style.background="yellow"

let ele = document.querySelector('.btn')
let elem = document.querySelector('.header').innerHTML
// function clicked()
// {
//     ele.style.background="yellow"
// }
window.onload = function () {
    console.log('document load')
}
ele.addEventListener('mouseout', function () {
    console.log('click out')


})
ele.addEventListener('click', function () {
    console.log('click  hua')

})
ele.addEventListener('mouseover', function () {
    console.log('click  in')
   
})
ele.addEventListener('mouseup', function () {
    console.log('click  up')
    document.querySelectorAll('.header')[0]= elem;
})
ele.addEventListener('mousedown', function () {
    console.log('click  down')
    document.querySelectorAll('.header')[0].innerHTML="<b>welcome back</b>"
    

})