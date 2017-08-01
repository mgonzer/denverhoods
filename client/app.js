$(appReady)

$('.collapsible').collapsible();


const HOODS_URL = 'http://localhost:3000/api/v1/neighborhoods'
// const HOOD = 'http://localhost:3000/api/v1/neighborhoods/'

function appReady(){
  getNeighborhoods().then(showNeighborhoods);
}

function getNeighborhoods() {
  return $.get(HOODS_URL)
}

function showNeighborhoods(neighborhoods){
  const source = $('#neighborhoods-template').html();
  const template = Handlebars.compile(source);
  const html = template({
    neighborhoods
  })
  $('.collection').append(html);

}
