import { api } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";
import Starship from "../Models/Starship.js";

class StarshipsService{
  sortHighPrice() {
    let sort = ProxyState.starships.sort((a, b) => b.cost - a.cost)
    ProxyState.starships = sort
  }
  
  
  getStarships(){
    api.get('starships')
    .then(res => {
      ProxyState.starshipsNext = res.data.next
      ProxyState.starships = res.data.results.map(s => new Starship(s))
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  
  
  
  next() {
    if (ProxyState.starshipsNext) {
      api.get(ProxyState.starshipsNext)
        .then(res => {
          ProxyState.starshipPrevious = res.data.previous
          ProxyState.starshipsNext = res.data.next
          ProxyState.starships = res.data.results.map(s => new Starship(s))
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
  
  
  
  previous() {
    if (ProxyState.starshipPrevious) {
      api.get(ProxyState.starshipPrevious)
        .then(res => {
          ProxyState.starshipPrevious = res.data.previous
          ProxyState.starshipsNext = res.data.next
          ProxyState.starships = res.data.results.map(s => new Starship(s))
        })
        .catch(error => {
          console.error(error)
        })
    }
}

}



export const starshipsService = new StarshipsService();