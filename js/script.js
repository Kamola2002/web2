var jtext='{"Images":[' +
          '{"URL":"img/01.jpg","Caption":"2013 year"},'+
          '{"URL":"img/02.jpg","Caption":"2014 year"},'+
          '{"URL":"img/03.jpg","Caption":"2015 year"},'+
          '{"URL":"img/04.jpg","Caption":"2016 year"},'+
          '{"URL":"img/05.jpg","Caption":" 2017 year"},'+
          '{"URL":"img/06.jpg","Caption":"2018 year"},'+
          '{"URL":"img/07.jpg","Caption":"2019 year"},'+
          '{"URL":"img/08.jpg","Caption":"2020 year"},'+
          '{"URL":"img/09.jpg","Caption":"2021 year"}'+
          ']}';
var json = JSON.parse(jtext);
var content =document.getElementById('content');
var heading =document.createElement('h3');//<h3>this is a gallery</h1>
heading.innerText ="BLACKPINK GROUP";
content.appendChild(heading);
var gallery = document.getElementById('gallery');
for(var i=0; i<json.Images.length ; i++){
var divCol = document.createElement('div');
divCol.class ="card";
var image =document.createElement('img');
var divCard = document.createElement('div');

divCard.class="card";
divCard.style="width:50%";
var divCardBody = document.createElement('div');
divCardBody.class = "card-body";
var caption = document.createElement('h4');
caption.innerText=json.Images[i].Caption;
caption.style="text-align:center";
image.src =json.Images[i].URL;
image.alt =json.Images[i].Caption;
image.style = 'width:100%';
image.class ="card-img-top";
divCardBody.appendChild(caption);
divCard.appendChild(image);
divCard.appendChild(divCardBody);
content.append(divCard);
divCol.appendChild(divCard);
gallery.appendChild(divCol);
}

