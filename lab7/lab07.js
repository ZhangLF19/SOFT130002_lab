const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];


for(let i = 0;i<works.length;i++){
    let containDiv = document.createElement("div");
    containDiv.setAttribute("class","item");//一个内容框
    let personDiv = document.createElement("div");
    personDiv.setAttribute("class","inner-box");//人物简介栏
    let photoDiv = document.createElement("div");
    photoDiv.setAttribute("class","inner-box");//图片栏

    let title = document.createElement("h4");
    let node1 = document.createTextNode("Genre : "+ works[i].tips);
    title.appendChild(node1);


    let author = document.createElement("h3");
    author.style.display = "inline";
    let node2 = document.createTextNode(works[i].author);
    author.appendChild(node2);
    let lifetime = document.createElement("h5");
    lifetime.innerHTML = "&nbsp;&nbsp;&nbsp;lifetime:" + works[i].lifetime;
    lifetime.style.display = "inline";
    personDiv.appendChild(author);
    personDiv.appendChild(lifetime);


    let photoTitle = document.createElement("h3");
    let node3 = document.createTextNode("Popular Photos");
    photoTitle.appendChild(node3);
    photoDiv.appendChild(photoTitle);
    for(let j = 0 ; j < works[i].photos.length ; j++){
        let image = document.createElement("img");
        image.setAttribute("class","photo");
        image.setAttribute("src",works[i].photos[j]);
        photoDiv.appendChild(image);
    }

    let button = document.createElement("button");//跳转按钮
    let node4 = document.createTextNode("Visit");
    button.appendChild(node4);

    //将各部分添加到框
    containDiv.appendChild(title);
    containDiv.appendChild(personDiv);
    containDiv.appendChild(photoDiv);
    containDiv.appendChild(button);

    document.body.appendChild(containDiv);
}