var cont = document.getElementById('list');
var error = document.getElementById('error');
async function getData()
{
    var movie = document.getElementById('movie').value;

    try {

        let response = await fetch(`http://www.omdbapi.com/?apikey=98f40ed9&s=${movie}`);
        let data = await response.json();
        showdata(data.Search);
         
    }
    catch (e)
    {
        console.log('error : '+ e);
    }
    finally
    {
        console.log('Data fetch completed');
    }

}



function showdata(el)
{
    cont.innerHTML = "";

    error.innerHTML = "";

    if(el == undefined)
    {
        

        var div1 = document.createElement('div');

        var img = document.createElement('img');
        img.src = "https://i.gifer.com/B0eS.gif";

        var p = document.createElement('p');

        p.innerHTML = "No data Avaliable";

        div1.append(img, p);
        
        error.append(div1);
        return 0;
    }
    
    

    el.forEach(async function (d)
    {
    
        let response = await fetch(`http://www.omdbapi.com/?apikey=98f40ed9&i=${d.imdbID}`);
        let data = await response.json();

    let div = document.createElement('div');

    let img = document.createElement('img');

    img.src = d.Poster;
    img.style.height = "60%";
    img.style.width = "100%";

    let div2 = document.createElement('div');
    div2.setAttribute('class', 'details');
    
    let p = document.createElement('p');

    p.innerHTML = `<b>Name :</b> ${d.Title}`;

    let p1 = document.createElement('p');

    p1.innerHTML = `<b>Year  :</b> ${d.Year}`;

    let p2 = document.createElement('p');

    p2.innerHTML = `<b>Type :</b> ${d.Type}`;

        let p3 = document.createElement('p');
        
        if (data.imdbRating > 8.5)
        {
            
            p3.innerHTML = `<b>rating :</b> ${data.imdbRating} <b style=color:green>Block buster</b>`;
        }
        else
        {
            p3.innerHTML = `<b>rating :</b> ${data.imdbRating}`;
        }
   

    div2.append(p, p1, p2,p3);
    
    div.append(img, div2);
    
    cont.append(div);

    });
    

    
        
    

}

