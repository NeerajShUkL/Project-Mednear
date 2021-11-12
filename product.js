document.getElementById("goCart").addEventListener("click",function(){
    window.location.href="cart.html"
})
    var cartArray=JSON.parse(localStorage.getItem("cartBag"))||[];
     var data = [
        {
            image_url: "https://mednear.com/uploads/medicine/0c9b1dbfaeb21f9f0d8305888de0c5b6.jpg",
            title: "SBL FORMICA RUFA DILUTION 1000 CH",
            subtitle: "SBL FORMICA RUFA DILUTION…",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.118.80",
            lprice: "Rs.120.00" 
        },

        {
            image_url: "https://mednear.com/uploads/icons/otc.png",
            title: "SBL GNAPHALIUM POLYCEPHALUM DILUTION 1000 CH",
            subtitle: "SBL GELSEMIUM SEMPERVIRENS",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.94.05",
            lprice: "Rs.95.00                                                       "
        },

        {
            image_url: "https://mednear.com/uploads/medicine/0c9b1dbfaeb21f9f0d8305888de0c5b6.jpg",
            title: "SBL FORMICA RUFA DILUTION 1000 CH",
            subtitle: "SBL FORMICA RUFA DILUTION…",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.118.80",
            lprice: "Rs.12  0.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/68eb125f9391bbd6cd7b92d3250e559f.jpg",
            title: "SBL FORMICA RUFA DILUTION 1000 CH",
            subtitle: "SBL GLONOINUM DILUTION 1000",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.118.80",
            lprice: "Rs.120.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/c5f28ec3d3f41c71826adce2aa5945fc.jpg",
            title: "SBL GNAPHALIUM POLYCEPHALUM DILUTION 1000 CH",
            subtitle: "SBL GNAPHALIUM POLYCEPHALUM DILUTION…",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.118.80",
            lprice: "Rs.120.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/e311b0c0c3410259f86e8c0e2b240c0f.png",
            title: "SBL FORMICA RUFA DILUTION 1000 CH",
            subtitle: "SBL FORMICA RUFA DILUTION…",
            subtext: "tube of 50 gm Cream",
            price: "Rs.54.45",
            lprice: "Rs.55.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/6d2021dee1d7ce79ef17f699bf45d03d.png",
            title: "SBL 106 INFANT CARE VALUE PACK (COMBO OF 4)",
            subtitle: "SBL 106 INFANT CARE VALUE…",
            subtext: "packet of 1 Kit",
            price: "Rs.361.35",
            lprice: "Rs.365.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/24ce273eeaab6bed26e6c4c37176e22d.png",
            title: "SBL 117 SKIN BEAUTY CARE PACK (COMBO OF 3)",
            subtitle: "SBL 117 SKIN BEAUTY CARE…",
            subtext: "packet of 1 Kit",
            price: "Rs.233.64",
            lprice: "Rs.236.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/3f84b4dc387d68fafbe7c654985355bc.jpg",
            title: "SBL FORMICA RUFA DILUTION 1000 CH",
            subtitle: "SBL FORMICA RUFA DILUTION…",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.118.80",
            lprice: "Rs.120.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/3f84b4dc387d68fafbe7c654985355bc.jpg",
            title: "SBL FORMICA RUFA DILUTION 1000 CH",
            subtitle: "SBL GUAIACUM DILUTION 30 CH",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.84.15",
            lprice: "Rs.85.00"
        },

        {
            image_url: "https://mednear.com/uploads/icons/otc.png",
            title: "SBL FORMICA RUFA DILUTION 1000 CH",
            subtitle: "SBL FORMICA RUFA DILUTION…",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.118.80",
            lprice: "Rs.120.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/0494c1a642c722b5efbf1c6baf49110f.jpg",
            title: "SBL FORMICA RUFA DILUTION 1000 CH",
            subtitle: "SBL FORMICA RUFA DILUTION…",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.118.80",
            lprice: "Rs.120.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/f2f0794298bb777d802f2cd32d329af5.png",
            title: "SBL NEEM FACE WASH",
            subtitle: "SBL NEEM FACE WASH",
            subtext: "tube of 50 ml Face Wash",
            price: "Rs.73.26",
            lprice: "Rs.74.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/49b71d838b822d412e2c935dcafba412.jpg",
            title: "SBL GNAPHALIUM POLYCEPHALUM DILUTION 200 CH",
            subtitle: "SBL GNAPHALIUM POLYCEPHALU",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.94.05",
            lprice: "Rs.95.00"
        },

        {
            image_url: "https://mednear.com/uploads/icons/packet.png",
            title: "SBL 104 IMMUNITY BOOSTER PACK (COMBO OF 2)",
            subtitle: "SBL 104 IMMUNITY BOOSTER PAC",
            subtext: "packet of 1 Kit",
            price: "Rs.402.93",
            lprice: "Rs.407.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/ebbd3ca07ee187cc214740e9042fe8e7.png",
            title: "SBL 105 CHILD CARE ESSENTIALS KIT (COMBO OF 4)",
            subtitle: "SBL 105 CHILD CARE ESSENTIAL",
            subtext: "packet of 1 Kit",
            price: "Rs.643.50",
            lprice: "Rs.650.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/6682fddd6ca10f75979edee3b025b890.jpg",
            title: "SBL 119 HOMEOPATHIC HOME KIT WITH BURN SPRAY (COMBO OF 2)",
            subtitle: "SBL 119 HOMEOPATHIC HOME K",
            subtext: "packet of 1 Kit",
            price: "Rs.846.45",
            lprice: "Rs.855.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/4f44adc3d2c4f006439ded951b670e5b.jpg",
            title: "SBL GRAPHITES DILUTION 200 C",
            subtitle: "SBL FORMICA RUFA DILUTION…",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.94.05",
            lprice: "Rs.95.00"
        },

        {
            image_url: "https://mednear.com/uploads/icons/bottle.png",
            title: "SBL GRAPHITES DILUTION 1000 CH",
            subtitle: "SBL GRAPHITES DILUTION 1000 ",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.118.00",
            lprice: "Rs.120.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/3f84b4dc387d68fafbe7c654985355bc.jpg",
            title: "SBL HAMAMELIS VIRGINICA DIL 1000 CH",
            subtitle: "SBL HAMAMELIS VIRGINICA DIL",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.94.05",
            lprice: "Rs.95.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/3a6113060913ed8e34e33efdd9fe0494.jpg",
            title: "SBL GAULTHERIA PROCUMBENS DILUTION 30 CH",
            subtitle: "SBL GAULTHERIA PROCUMBENS",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.84.15",
            lprice: "Rs.85.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/22ed82733462a3f0ebb849b95f309c03.jpg",
            title: "SBL GLONOINUM DILUTION 200 CH",
            subtitle: "SBL GLONOINUM DILUTION 200…",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.94.05",
            lprice: "Rs.95.00"
        },

        {
            image_url: "https://mednear.com/uploads/icons/otc.png",
            title: "SBL GLYCERINUM DILUTION 200 CH",
            subtitle: "SBL GLYCERINUM DILUTION 200",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.94.05",
            lprice: "Rs.95.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/b822d0061841a81aa08329cf8e4769d7.jpg",
            title: "SBL FORMICA RUFA DILUTION 1000 CH",
            subtitle: "SBL GRINDELIA ROBUSTA DILUTIO",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.84.15",
            lprice: "Rs.85.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/4d5526dea6abc5f349c6baa25d06f688.png",
            title: "SBL FORMICA RUFA DILUTION 1000 CH",
            subtitle: "SBL 112 CERVICAL SPONDYLITI",
            subtext: "packet of 1 Kit",
            price: "Rs.173.25",
            lprice: "Rs.175.00"
        },

        {
            image_url: "https://mednear.com/uploads/icons/packet.png",
            title: "SBL FORMICA RUFA DILUTION 1000 CH",
            subtitle: "SBL 113 STOMACH CARE PACK…",
            subtext: "packet of 1 Kit",
            price: "Rs.227.70",
            lprice: "Rs.230.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/6101162b479bd542826ecf423174d013.png",
            title: "SBL FORMICA RUFA DILUTION 1000 CH",
            subtitle: "SBL 118 FIRST AID PACK…",
            subtext: "packet of 1 Kit",
            price: "Rs.396.00",
            lprice: "Rs.400.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/22ed82733462a3f0ebb849b95f309c03.jpg",
            title: "SBL FORMICA RUFA DILUTION 1000 CH",
            subtitle: "SBL FORMICA RUFA DILUTION…",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.118.80",
            lprice: "Rs.120.00"
        },

        {
            image_url: "https://mednear.com/uploads/icons/bottle.png",
            title: "SBL GOSSYPIUM HERBACEUM D 1000 CH",
            subtitle: "SBL GOSSYPIUM HERBACEUM D",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.94.05",
            lprice: "Rs.95.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/3f84b4dc387d68fafbe7c654985355bc.jpg",
            title: "SBL GUNPOWDER DILUTION 1000 CH",
            subtitle: "SBL GUNPOWDER DILUTION 100",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.118.80",
            lprice: "Rs.120.00"
        },

        {
            image_url: "https://mednear.com/uploads/icons/otc.png",
            title: "SBL GINSENG DILUTION 200 CH",
            subtitle: "SBL GINSENG DILUTION 200…",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.94.05",
            lprice: "Rs.95.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/0494c1a642c722b5efbf1c6baf49110f.jpg",
            title: "SBL GLYCERINUM DILUTION 30 CH",
            subtitle: "SBL GLYCERINUM DILUTION 30…",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.84.15",
            lprice: "Rs.85.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/0494c1a642c722b5efbf1c6baf49110f.jpg",
            title: "SBL GLYCERINUM DILUTION 1000 CH",
            subtitle: "SBL GLYCERINUM DILUTION 1000",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.118.80",
            lprice: "Rs.120.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/836c2810b3347295726e274c8b12d530.png",
            title: "SBL 101 DIABETIC CARE PACK (COMBO OF 2)",
            subtitle: "SBL 101 DIABETIC CARE…",
            subtext: "packet of 1 Kit",
            price: "Rs.519.75",
            lprice: "Rs.525.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/b259934e38dc3778160e16a05a6d09aa.png",
            title: "SBL 107 MALE SEXUAL WELLNESS PACK (COMBO OF 2)",
            subtitle: "SBL 107 MALE SEXUAL WELLNE",
            subtext: "packet of 1 Kit",
            price: "Rs.420.75",
            lprice: "Rs.425.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/ede5f4e0df80734ab5c1cd3b8b6c9623.png",
            title: "SBL 110 COLD AND COUGH CARE PACK (COMBO OF 2)",
            subtitle: "SBL 110 COLD AND COUGH…",
            subtext: "packet of 1 Kit",
            price: "Rs.272.25",
            lprice: "Rs.275.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/defd61ca9308614675e4849ef9006479.png",
            title: "SBL 114 FEMALE CARE KIT FOR IRREGULAR PERIODS (COMBO OF 2)",
            subtitle: "SBL 114 FEMALE CARE KIT…",
            subtext: "packet of 1 Kit",
            price: "Rs.232.65",
            lprice: "Rs.235.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/3f84b4dc387d68fafbe7c654985355bc.jpg",
            title: "SBL GRINDELIA ROBUSTA DILUTION 200 CH",
            subtitle: "SBL GRINDELIA ROBUSTA DILUTI",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.94.05",
            lprice: "Rs.95.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/3f84b4dc387d68fafbe7c654985355bc.jpg",
            title: "SBL GAULTHERIA PROCUMBENS DILUTION 1000 CH",
            subtitle: "SBL GAULTHERIA PROCUMBENS ",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.118.80",
            lprice: "Rs.120.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/3f84b4dc387d68fafbe7c654985355bc.jpg",
            title: "SBL HAMAMELIS VIRGINICA DILUTION 30 CH",
            subtitle: "SBL HAMAMELIS VIRGINICA DIL",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.84.15",
            lprice: "Rs.85.00"
        },

        {
            image_url: "https://mednear.com/uploads/icons/otc.png",
            title: "SBL FORMICA RUFA DILUTION 1000 CH",
            subtitle: "SBL FORMICA RUFA DILUTION…",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.118.80",
            lprice: "Rs.120.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/0f2ac3530564254da7f82d1fb63aeb3c.jpg",
            title: "SBL NEEM FACE WASH",
            subtitle: "SBL NEEM FACE WASH",
            subtext: "tube of 100 ml Face Wash",
            price: "Rs.136.62",
            lprice: "Rs.130.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/ed3a9630f06bbbc1c3a8ffee6371d78c.png",
            title: "SBL LIQUID HAND WASH GERM FREE",
            subtitle: "SBL LIQUID HAND WASH…",
            subtext: "bottle of 300 ml Liquid",
            price: "Rs.96.03",
            lprice: "Rs.97.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/e311b0c0c3410259f86e8c0e2b240c0f.png",
            title: "SBL SILK N STAY ALOE VERA CREAM FOR NORMAL AND DRY SKIN",
            subtitle: "SBL SILK N STAY…",
            subtext: "tube of 100 gm Cream",
            price: "Rs.96.03",
            lprice: "Rs.97.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/7e2a7d978e5c725293235214cadd2252.png",
            title: "SBL 103 ANTI-ACNE PACK (COMBO OF 3)",
            subtitle: "SBL 103 ANTI-ACNE PACK (COMBO",
            subtext: "packet of 1 Kit",
            price: "Rs.252.45",
            lprice: "Rs.255.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/5dc63bdf4d0d609eeac3851b9a76a659.png",
            title: "SBL 111 JOINT CARE PACK (COMBO OF 2)",
            subtitle: "SBL 111 JOINT CARE PACK…",
            subtext: "packet of 1 Kit",
            price: "Rs.237.60",
            lprice: "Rs.240.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/2fa69169c69862fef55d305c3dc87c0c.png",
            title: "SBL 120 ANTI-PILES PACK (COMBO OF 2)",
            subtitle: "SBL 120 ANTI-PILES PACK (COMBO",
            subtext: "packet of 1 Kit",
            price: "Rs.198.00",
            lprice: "Rs.200.00"
        },


        {
            image_url: "https://mednear.com/uploads/medicine/3f84b4dc387d68fafbe7c654985355bc.jpg",
            title: "SBL FORMICA RUFA DILUTION 1000 CH",
            subtitle: "SBL FORMICA RUFA DILUTION…",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.118.80",
            lprice: "Rs.120.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/60040a8bf016a87c483037474eaf8b5b.jpg",
            title: "SBL FORMICA RUFA DILUTION 1000 CH",
            subtitle: "SBL HAMAMELIS VIRGINICA DILU",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.118.80",
            lprice: "Rs.120.00"
        },

        {
            image_url: "https://mednear.com/uploads/medicine/3f84b4dc387d68fafbe7c654985355bc.jpg",
            title: "SBL GUAIACUM DILUTION 1000 CH",
            subtitle: "SBL GUAIACUM DILUTION 1000 C",
            subtext: "bottle of 30 ml Dilution",
            price: "Rs.118.80",
            lprice: "Rs.120.00"
        }
    ]
showData(data);

function showData(data){
    document.getElementById("product").innerHTML="";
    data.map(function(item){
    // console.log(item)

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
    btn.textContent="Add to cart"
    btn.setAttribute("id","addCart")

    btn.addEventListener("click",function(){
        addToCart(item)
    })

    var div=document.createElement("div");
    div.append(img,name,subName,price,lPrice,btn)


    document.getElementById("product").append(div)



    // console.log(name,subName,price,lPrice,img)

});

}
 function addToCart(item){
    var cartbag=JSON.parse(localStorage.getItem("cartBag"))||[];

     for(var i=0;i<cartbag.length;i++){
         if(cartbag[i].name==item.name&& cartbag[i].image_url==item.image_url){
             alert("Item alredy added");
             return 0;
         }
     }

     cartArray.push(item);
     localStorage.setItem("cartBag",JSON.stringify( cartArray))
     alert("Item Added to Cart")
     console.log(cartbag)

 }