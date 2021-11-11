var i=0;

var imgs=["https://mednear.com/uploads/banner/261be6779af16feb1bafadfe5227db75.jpg",
"https://mednear.com/uploads/banner/f061760de236da2e398ca63b39091688.jpg",
"https://mednear.com/uploads/banner/f6d37d929c75bd8f4e13e331513285a7.jpg",
"https://mednear.com/uploads/banner/b4659e11d6d80df022d814e46018741e.jpg"
]
document.getElementById("sl-div").addEventListener("click",rightImg);
document.getElementById("sr-div").addEventListener("click",leftImg);
function rightImg(){
    if(i>3){
        i=0;
    }
    if(i<0){
        i=3;
    }
    var img=document.querySelector("#sl-img");
    console.log(i)

    img.setAttribute("src",imgs[i++])
    if(i==4){
        i=0;
    }

    
}
function leftImg(){
    if(i<0){
        i=3;
    }
    var img=document.querySelector("#sl-img");
    console.log(i)

    img.setAttribute("src",imgs[i--])
    

    
}