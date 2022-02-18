
let arOfMves={
    data : [
    {
        movieName: 'Bheemla Nayak',
        rating: 9,
        hero: 'pk',
        imageUrl: 'https://images.news18.com/telugu/uploads/2021/12/Bheemla-Nayak-1.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=WrpGZT6_Ar0'
    },
    {
        movieName: 'Khushi',
        rating: 10,
        hero: 'pk',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/1b2da3c930ce2b9cd6e709c4afce902b23e1104a4ef9ce8b0dad4a30369a3b78._RI_V_TTW_.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=jF8q_Vlz714'
    },
    {
        movieName: 'Theenamr',
        rating: 7,
        hero: 'pk',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMGExYTk3N2UtYjU3OC00NjI4LWFhYmMtZDcyOTUyOTViNGM1XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=kV3Fi9GmHBA'
    },
    {
        movieName: 'GabbarSingh',
        rating: 9.5,
        hero: 'pk',
        imageUrl: 'https://im.rediff.com/movies/2015/aug/25sardaar-gabbar-singh.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=FpFoQPj4sgs'
    },
    {
        movieName: 'komaram Puli',
        rating: 6,
        hero: 'pk',
        imageUrl: 'https://megastarfanz.files.wordpress.com/2010/09/ogaaamtmywvnikpf_dcrczbwl9wpkw83uabkxyi8mq02eixnsx6desuygx92w37zcy-prgylulytvmf_6c2xsahx6k8am1t1ud26zxx1pwkigbl9zedjjp-ktktd.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=7Ijg3cOHgow'
    },
    {
        movieName: 'Attarintiki Daredhi',
        rating: 9.7,
        hero: 'pk',
        imageUrl: 'http://4.bp.blogspot.com/-K5oYPLQlTZ4/Ukapmgkxx8I/AAAAAAAAAks/YlCUobqcRoE/s1600/Attarintiki-Daredi-Movie-Poster-Designs-5.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=81retl0nHh8'
    },
    {
        movieName: 'GanguBhai KathiaWada',
        rating: 8.6,
        hero: 'Alia Bhatt',
        imageUrl: 'https://www.iwmbuzz.com/wp-content/uploads/2021/02/a-week-more-of-shooting-gangubai-kathiawadi-is-complete.jpeg',
        trailerUrl: 'https://www.youtube.com/watch?v=N1ZwRv3vJJY'
    },
    {
        movieName: 'Pushpa The-Raise',
        rating: 9.1,
        hero: 'Allu Arjun',
        imageUrl: 'https://www.telugu360.com/wp-content/uploads/2021/12/Pushpa-4.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=Q1NKMPhP8PY'
    },
    {
        movieName: 'Spider Man No-Way Home',
        rating: 9.7,
        hero: 'Tom Holland',
        imageUrl: 'https://i.ytimg.com/vi/uyPCkTzhDxQ/maxresdefault.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=JfVOs4VSpmA'
    }
]};

console.log(arOfMves.data)

for(let i=0;i<arOfMves.data.length;i++)
{
    for(let j=i;j<arOfMves.data.length;j++)
    {
        console.log(arOfMves.data[i].rating)
        if(arOfMves.data[i].rating < arOfMves.data[j].rating)
        {
            let temp = arOfMves.data[i];
            arOfMves.data[i] = arOfMves.data[j]
            arOfMves.data[j] = temp 
        }
    }
}

console.log(arOfMves.data)

var divCreator=function (id){
    newElement=document.createElement("div");
    newElement.className="cardSingle"
    newNode=document.getElementById('movieCard').appendChild(newElement);
    newNode.setAttribute("id",id);
}

var textAdder = function(id, text) {
    target = document.getElementById(id)
    target.appendChild(document.createTextNode(text));
}

var linkAdder = function(id,imgSrc,trailerUrl)
{
    var a = document.createElement('a'); 
    var link = document.createTextNode("");
    a.appendChild(link);
    a.href = trailerUrl
    var img = document.createElement('img')
    img.setAttribute('src',imgSrc)
    a.appendChild(img)
    target = document.getElementById(id)
    target.appendChild(a)
    
}

var imageAdder = function(id, imgSrc){
    target = document.getElementById(id)
    var img = document.createElement('img');
    img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
    target.appendChild(img)
}

for (let i = 0; i < arOfMves.data.length; i++) {
    divCreator('div'+i)
    linkAdder('div'+i,arOfMves.data[i].imageUrl,arOfMves.data[i].trailerUrl)
    document.getElementById('div'+i).innerHTML += "<h1>"
    textAdder('div'+i,"Name : " + arOfMves.data[i].movieName)
    document.getElementById('div'+i).innerHTML += "<br>"
    textAdder('div'+i,"Rating :  " + arOfMves.data[i].rating)
    document.getElementById('div'+i).innerHTML += "<br>"
    textAdder('div'+i,"Artist : " + arOfMves.data[i].hero)
    // imageAdder('div'+i,i)
}

function searchWithGivenText(text)
{
    console.log(text)
    var flag = 0;
    for(let i=0;i<arOfMves.data.length;i++)
    {
        let inText = arOfMves.data[i].movieName.toUpperCase()
        let pos = inText.search(text.toUpperCase())
        if(pos < 0)
        {
            document.getElementById('div'+i).style.visibility="hidden"
        }
        else{
            document.getElementById('div'+i).style.visibility="inherit"
            flag++;
        }
    }
    console.log(flag)
    if(flag == 0)
    {
        document.getElementById('showError').style.visibility = "inherit"
        document.getElementById('showError').innerHTML = "Nothing With the Given Text!!"
        document.getElementById('showError').style.color = "red"
    }
    else{
        document.getElementById('showError').style.visibility = "hidden"
    }
}

const searchText = document.getElementById('clickMeISay')
console.log(searchText)

searchText.addEventListener("click",(e)=>{
    e.preventDefault()
    const inputText = document.getElementById('searchText').value.trim()
    searchWithGivenText(inputText)
})