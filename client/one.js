$(appReady)



let id = parseQuery(window.location.search)

function parseQuery(query){
  return query.split('=')[1]
}

const REST_URL = `http://localhost:3000/api/v1/neighborhoods/${id}/restaurants`


function appReady(){
  getRestaurants()
  .then(showRestaurants)
  .then(showHood)
}


function showHood(restaurant){
  let name = restaurant[0].neighborhood_name;
  $('h2').html(`${name}`)
}

function getRestaurants() {
  return $.get(REST_URL)
}


function showRestaurants(restaurants){
  const source = $('#restaurants-template').html();
  const template = Handlebars.compile(source);
  const html = template({
    restaurants
  })
  $('main').append(html);
  return restaurants
}
