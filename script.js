fetch('https://fakestoreapi.com/products').then((data)=>{
    console.log(data);
    return data.json();
}).then((completedata)=>{
    //console.log(completedata[2].title);
    let data1="";
    completedata.map((values)=>{
        data1+= `<div class="card">
        <h1 class="title">${values.title}</h1>
        <img class="image" src="${values.image}" alt="img">
        <p class="category">${values.category}</p>
        <p class="rating">User Rating: ${values.rating.rate}/5</p>
        <p class="price">$${values.price}</p>
        <button type="submit" id="btn" onclick="anotherPage('${values.id}')">Show Details &#8594;</button>
    </div>`
    });
    document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
})

function anotherPage(id){
    window.location.href="Page2.html";
    localStorage.setItem("textvalue",id);
    return false;
}