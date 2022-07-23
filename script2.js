var id = localStorage.getItem("textvalue");
    fetch('https://fakestoreapi.com/products/'+id).then((data)=>{
        //console.log(data);
        return data.json();
    }).then((completedata)=>{
        console.log(completedata);
        let data1="";
        data1=`<div class="card">
        <img class="image" src="${completedata.image}" alt="img">
    </div>
    <div>
        <p class="title2">Product Name: ${completedata.title}</p>
        <p class="category">Category: ${completedata.category}</p>
        <p class="price">Price: $${completedata.price}</p>
        <p class="rating">User Rating: ${completedata.rating.rate}/5</p>
        <p class="avail">Stock: ${completedata.rating.count}</p>
        <button type="submit" id="btn">Buy Now!</button> | <button type="submit" id="btn">Add to Cart!</button>
        </div>
    <p class="desc">Description: ${completedata.description}</p>`
        document.getElementById("cards").innerHTML=data1;
    }).catch((err)=>{
        console.log(err);
    })