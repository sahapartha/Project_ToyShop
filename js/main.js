// Partha Saha

document.addEventListener("DOMContentLoaded", init);

function init() {
	console.log("Hello Baby");



// item list
	 itemList =[
    {
        "itemimg": "https://cdn.shopify.com/s/files/1/0054/6449/0018/products/angry_birds_plush_5_inch_1_270x270_crop_center.png?v=1554285732",
        "itemname": "ANGRY BIRDS PLUSH 5 INCH",
        "itemprice": "$45.00",
        
    },
    {
        "itemimg": "https://cdn.shopify.com/s/files/1/0054/6449/0018/products/angry_birds_plush_5_inch_2_270x270_crop_top.png?v=1554285732",
        "itemname" : "PIG PLUSH 5 INCH",
        "itemprice": "$19.00",
        
    },
    {
        "itemimg": "https://cdn.shopify.com/s/files/1/0054/6449/0018/products/disney_pixar_cars_mack_truck_and_transporter_1_270x270_crop_top.png?v=1554285786",
        "itemname" : "DISNEY PIXAR CARS MACK TRUCK AND TRANSPORTER",
        "itemprice": "$45.00",
    },
    {
        "itemimg": "https://cdn.shopify.com/s/files/1/0054/6449/0018/products/hot_wheels_city_blastin_rig_1_270x270_crop_top.png?v=1554285946",
        "itemname" : "HOT WHEELS CITY BLASTIN' RIG",
        "itemprice": "$22.00",
    },
    {
        "itemimg": "https://cdn.shopify.com/s/files/1/0054/6449/0018/products/care_bears_cheer_bear_toy_with_dvd_1_270x270_crop_top.png?v=1554285748",
        "itemname": "CARE BEARS CHEER BEAR TOY WITH DVD",
        "itemprice": "$39.00",
        
    },
    {
        "itemimg": "https://cdn.shopify.com/s/files/1/0054/6449/0018/products/vtech_go_go_1_270x270_crop_top.png?v=1554286022",
        "itemname" : "VTECH GO! GO!",
        "itemprice": "$20.00",
        
    },
    {
        "itemimg": "https://cdn.shopify.com/s/files/1/0054/6449/0018/products/fisher_price_laugh_and_learn_smart_stages_chair_1_270x270_crop_top.png?v=1554285801",
        "itemname" : "FISHER PRICE LAUGH AND LEARN SMART STAGES CHAIR",
        "itemprice": "$15.00",
    },
    {
        "itemimg": "https://cdn.shopify.com/s/files/1/0054/6449/0018/products/hot_wheels_city_blastin_rig_1_270x270_crop_top.png?v=1554285946",
        "itemname" : "HOT WHEELS CITY BLASTIN' RIG",
        "itemprice": "$22.00",
    },
    {
        "itemimg": "https://cdn.shopify.com/s/files/1/0054/6449/0018/products/hot_wheels_city_blastin_rig_1_270x270_crop_top.png?v=1554285946",
        "itemname" : "HOT WHEELS CITY BLASTIN' RIG",
        "itemprice": "$22.00",
    },


    
];
// add item in homepage

function additem(range, des){
	//creating element and printng out 
	
	for(i=0; i<range; i++){
		mainnodemain= document.createElement("div");
		mainnodemain.setAttribute("class", "col-3");
		mainnode= document.createElement("div");
		mainnode.setAttribute("class", "card");
		mainnode.setAttribute("style", "width: 18rem; border-width: 0px;");

		imgnode= document.createElement("img")
		imgnode.setAttribute("src", itemList[i].itemimg);
		imgnode.setAttribute("class", "card-img-top");

		desparent= document.createElement("div");
		desparent.setAttribute("class", "card-body");
		txtnode= document.createElement("p");
		txtnode.setAttribute("class", "card-text");
		txtnode.innerText=itemList[i].itemname + "\n" + itemList[i].itemprice ;
		buybutton=document.createElement("a");
		buybutton.setAttribute("href", "./Checkout.html");
		buybutton.setAttribute("class", "btn btn-dark");
		buybutton.innerText="Buy Now"  ;
		//inserting data

	
		mainnode.appendChild(imgnode);
		mainnode.appendChild(desparent);
		desparent.appendChild(txtnode);
		desparent.appendChild(buybutton);
		mainnodemain.appendChild(mainnode);
		document.getElementById(des).appendChild(mainnodemain);

	}
	
}


// if("file:///C:/Users/sahap/Desktop/CS493_2020/Project_1_ToyShop/index.html"==window.location.href)
// 		additem(4, "itmList-front"); 
// additem(itemList.length, "itmList"); //content page


//additem(itemList.length, "itmListtoy");
let current_location = window.location.href;
let index_html=current_location.search("index.html");
let toys_html=current_location.search("toys.html");
console.log(index_html);
console.log(toys_html);
if(index_html != -1)
    additem(4, "itmList-front");     
else if(toys_html != -1)
    additem(itemList.length, "itmList");


}
