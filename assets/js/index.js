function choosen(id) {
   return document.querySelector(id);
}
//carusel
$('.single-item').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
})
//menu
choosen('#open').addEventListener("click", function () {
    choosen('.humburger').classList.add("burgerOpen")
    setTimeout(()=>{
        choosen('.humburger').classList.remove("burgerOpen")
        choosen('#close').classList.remove("none");
        choosen('#open').classList.add("none")  
        choosen('.humburger').classList.add("burgerCls")  
    },500)
    setTimeout(()=>{
        choosen('#navigation').classList.add("active");
        choosen('.humburger').classList.remove("burgerCls")  
    }, 700);
    
});
choosen('#close').addEventListener("click", function () {
    choosen('.humburger2').classList.add("burgerOpen")
    setTimeout(()=>{
        choosen('.humburger2').classList.remove("burgerOpen")
        choosen('#close').classList.add("none");
        choosen('#open').classList.remove("none")
        choosen('.humburger2').classList.add("burgerCls")  
    },500)
    setTimeout(()=>{
        choosen('#navigation').classList.remove("active");
        choosen('.humburger2').classList.remove("burgerCls")  
    },700)
  
});
//touch picture
const arr=['Lemongrass portobello mushrooms elderberry refreshing cucumber splash bento box golden cayenne pepper hazelnut shiitake tahini drizzle sweet potato hummus falafel bowl fruit smash apple vinaigrette lentils vine tomatoes creamy cauliflower alfredo smoky maple tempeh glaze springtime strawberry.',
'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innov',
'Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.',
'Minions ipsum uuuhhh aaaaaah ti aamoo! Baboiii belloo! Aaaaaah po kass pepete uuuhhh daa. Underweaaar underweaaar poopayee potatoooo underweaaar butt jiji bananaaaa underweaaar.']
const clicks=document.querySelectorAll('.numbers>span')
arr.forEach((item,index)=>{
    clicks[index].addEventListener('click',function(){
        if(window.innerWidth>1451){
            choosen('.about_touch').innerHTML=item;
        }
       
    })
})
let about_html = arr.map(function(value,index) {
    return `
        <span>${index+1}. ${value}</span></br>
    `;
}).join("");

//html content in touch container
const newHtml=function(){
    if(window.innerWidth<1451){
        choosen('.about_touch').innerHTML=about_html
    }else{
        choosen('.about_touch').innerHTML=arr[0]
    }
}
window.addEventListener('resize', newHtml)
window.addEventListener('load',newHtml)

//zgoda
choosen('.zgoda>span').addEventListener('click',function(){
        if(choosen('.zgoda>span').innerHTML==='x'){
            choosen('.zgoda>span').innerHTML=''
        }else{
            choosen('.zgoda>span').innerHTML='x'
        }
})




