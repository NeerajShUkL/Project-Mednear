// document.getElementById("cheackout").addEventListener("click",function(){
//     window.location.href="slider.html"
// })
var data=JSON.parse( localStorage.getItem("cartBag"))||[];
console.log(data)


showData(data);

function showData(data){
    var total=0;
    console.log(data)
    document.getElementById("product").innerHTML="";
    data.map(function(item,index){
     
   

    var name=document.createElement("h1");
    name.textContent=item.subtitle
    

    var subName=document.createElement("h2");
    subName.textContent=item.subtext


    var price=document.createElement("h4");
    price.textContent=item.price


    var lPrice=document.createElement("h5");
    lPrice.textContent=item.lprice


    var img=document.createElement("img");
    img.setAttribute("src",item.image_url)


    var btn=document.createElement("button");
    btn.textContent="Remove"
    btn.setAttribute("id","removeCart")

    btn.addEventListener("click",function(){
        remove(data,item,index);
    })


    var div=document.createElement("div");
    div.append(img,name,subName,price,lPrice,btn)


    document.getElementById("product").append(div)



    // console.log(name,subName,price,lPrice,img)

    amount="";

for(var i=3;i<item.price.length;i++){
    // console.log(item.price)
    if(item.price[i]=="."){
        amount+=".";
        continue;
    }
    amount+=item.price[i]
}
amount=+amount;
total+=amount;


});
total=Math.floor(total);
document.querySelector("h2").textContent=`Total Amount is -${total}`
if(total==0){
    document.getElementById("play").textContent="There is Nothing in Cart"
}
localStorage.setItem("total",total);
}


function  remove(data,item,index){
    // console.log(data)

    data.splice(index,1)
    localStorage.setItem("cartBag",JSON.stringify(data))
    showData(data)
    console.log(data)
}