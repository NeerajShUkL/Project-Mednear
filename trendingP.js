var cartArray=JSON.parse(localStorage.getItem("cartBag"))||[];
    document.getElementById("tpcPc-btn1").addEventListener("click", addTolocalStorage1)
    document.getElementById("tpcPc-btn2").addEventListener("click", addTolocalStorage2)
    document.getElementById("tpcPc-btn3").addEventListener("click", addTolocalStorage3)
    document.getElementById("tpcPc-btn4").addEventListener("click", addTolocalStorage4)
    document.getElementById("tpcPc-btn5").addEventListener("click", addTolocalStorage5)
    document.getElementById("tpcPc-btn6").addEventListener("click", addTolocalStorage6)
    document.getElementById("tpcPc-btn7").addEventListener("click", addTolocalStorage7)
    document.getElementById("tpcPc-btn8").addEventListener("click", addTolocalStorage8)
    document.getElementById("tpcPc-btn9").addEventListener("click", addTolocalStorage9)

    function addTolocalStorage1() {
       var prodData =  {
            image_url: "https://mednear.com/uploads/icons/otc.png",
            title: "STUDS CLASSIC WEIGHT GAINER",
            subtitle: "STUDS CLASSIC WEIGHT GAINER",
            subtext: "jar of 500 grm product",
            price: "Rs.158.40",
            lprice: "Rs.160.00"
        }
        cartArray.push(prodData)
        localStorage.setItem("cartBag",JSON.stringify(cartArray))
        alert ("Item is added to cart")
    }
    function addTolocalStorage2() {
       var prodData =  {
            image_url: "https://mednear.com/uploads/medicine/ecb71805b859e3ac8903d06c5c9938a3.jpg",
            title: "NIXIT 4MG LOZENGES FROST",
            subtitle: "NIXIT 4MG LOZENGES FROST",
            subtext: "strip of 10 lozenges",
            price: "Rs.118.40",
            lprice: "Rs.120.00"
        }
        cartArray.push(prodData)
        localStorage.setItem("cartBag",JSON.stringify(cartArray))
        alert ("Item is added to cart")
    }
    function addTolocalStorage3() {
       var prodData =  {
            image_url: "https://mednear.com/uploads/medicine/227f5b56d0db6c737f0b1549f1daec49.png",
            title: "MFB AL SHIFA CHURAN",
            subtitle: "MFB AL SHIFA CHURAN",
            subtext: "bottle of 100 gm churna",
            price: "Rs.341.55",
            lprice: "Rs.345.00"
        }
        cartArray.push(prodData)
        localStorage.setItem("cartBag",JSON.stringify(cartArray))
        alert ("Item is added to cart")
    }
    function addTolocalStorage4() {
       var prodData =  {
            image_url: "https://mednear.com/uploads/medicine/c67bf174438dc2938c65aa8235c4fbfa.png",
            title: "ACNESTAL FM FACE WASH",
            subtitle: "STUDS CLASSIC WEIGHT GAINER",
            subtext: "tube of 60 ml Face Wahs",
            price: "Rs.158.40",
            lprice: "Rs.160.00"
        }
        cartArray.push(prodData)
        localStorage.setItem("cartBag",JSON.stringify(cartArray))
        alert ("Item is added to cart")
    }
    function addTolocalStorage5() {
       var prodData =  {
            image_url: "https://mednear.com/uploads/medicine/9746a65404b16f1d5e4662deea0b66d6.png",
            title: "STUDS CLASSIC WEIGHT GAINER",
            subtitle: "EASY BATH WET WIPES..",
            subtext: "packet 10 wet wipes",
            price: "Rs.319.50",
            lprice: "Rs.355.00"
        }
        cartArray.push(prodData)
        localStorage.setItem("cartBag",JSON.stringify(cartArray))
        alert ("Item is added to cart")
    }
    function addTolocalStorage6() {
       var prodData =  {
            image_url: "https://mednear.com/uploads/medicine/ecb71805b859e3ac8903d06c5c9938a3.jpg",
            title: "NATURAL COMBO PACK OF.",
            subtitle: "NATURAL COMBO PACK OF..",
            subtext: "combo pack of 2 bottles",
            price: "Rs.1,274.15",
            lprice: "Rs.1499.00"
        }
        cartArray.push(prodData)
        localStorage.setItem("cartBag",JSON.stringify(cartArray))
        alert ("Item is added to cart")
    }
    function addTolocalStorage7() {
       var prodData =  {
            image_url: "https://mednear.com/uploads/medicine/227f5b56d0db6c737f0b1549f1daec49.png",
            title: "MINT VEDA TRIPHALA JUIC..",
            subtitle: "MINT VEDA TRIPHALA JUIC..",
            subtext: "bottle of 1000 ml Juice",
            price: "Rs.636.65",
            lprice: "Rs.749.00"
        }
        cartArray.push(prodData)
        localStorage.setItem("cartBag",JSON.stringify(cartArray))
        alert ("Item is added to cart")
    }
    function addTolocalStorage8() {
       var prodData =  {
            image_url: "https://mednear.com/uploads/medicine/c67bf174438dc2938c65aa8235c4fbfa.png",
            title: "HIMALAYAN ORGANICS FACE...",
            subtitle: "HIMALAYAN ORGANICS FACE...",
            subtext: "packet 10 wet wipes",
            price: "Rs.1,763.75",
            lprice: "Rs.2,075.00"
        }
        cartArray.push(prodData)
        localStorage.setItem("cartBag",JSON.stringify(cartArray))
        alert ("Item is added to cart")
    }
    function addTolocalStorage9() {
       var prodData =  {
            image_url: "https://mednear.com/uploads/medicine/9746a65404b16f1d5e4662deea0b66d6.png",
            title: "STUDS CLASSIC WEIGHT GAINER",
            subtitle: "SINEW NUTRITION BASIL SE...",
            subtext: "packet 10 wet wipes",
            price: "Rs.721.65",
            lprice: "Rs.849.00"
        }
        cartArray.push(prodData)
        localStorage.setItem("cartBag",JSON.stringify(cartArray))
        alert ("Item is added to cart")
    }