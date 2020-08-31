import { ProxyState } from "../AppState.js";
import { starshipsService } from "../Services/StarshipsService.js";



//Private

function _draw(){
  let ship = ProxyState.starships
  let template = ''
  ship.forEach(s => template += s.Template)
  document.getElementById('starships').innerHTML = template
}


// Public
export default class StarshipsController{
  constructor() {
    ProxyState.on('starships', _draw)

    starshipsService.getStarships()
    
  }

  next(){
    starshipsService.next()
  }

  previous(){
    starshipsService.previous()
  }

  sortHighPrice(){
    starshipsService.sortHighPrice()
  }
}