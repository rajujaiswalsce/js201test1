// console.log("heloo")

function append(){
    let data = JSON.parse(localStorage.getItem("products")) || [];
    let container = document.getElementById("all_products");
    container.innerHTML = null;

    data.forEach(function(el,index){
        let div = document.createElement("div");

        let image = document.createElement("img")
        image.src = el.image;
        let type = document.createElement("p")
        type.innerText = el.type;
        let desc = document.createElement("p")
        desc.innerText = el.desc;
        let price = document.createElement("p")
        price.innerText = el.price;

        let btn_remove = document.createElement("button");
        btn_remove.innerText = "Remove";

        btn_remove.addEventListener("click",function(){
            removeData(el,index);
        });
        div.append(image,type,desc,price,btn_remove)
        container.append(div)
    })
}
append();


function removeData(el,index){
    console.log(index)
    let data = JSON.parse(localStorage.getItem("products")) || [];


    let newData = data.filter(function(el,i){
        if(i===index){
            let dataN = JSON.parse(localStorage.getItem("dataN")) || []
            dataN.push(el);
            localStorage.setItem("dataN",JSON.stringify(dataN));
        }else{
            return i!==index;
        }

    })
    
    localStorage.setItem("products",JSON.stringify(newData));
    // window.location.reload()
    append();
}