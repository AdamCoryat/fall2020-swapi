export default class Starship{
  constructor({name, model, manufacturer, cost_in_credits, starship_class}){
    this.name = name
    this.model = model
    this.manufacturer = manufacturer
    this.cost = cost_in_credits || 0
    this.shipClass = starship_class 
    this.color = 'bg-primary'

    if (this.cost > 10000000){
      this.color = 'bg-danger'
    } else if (this.cost > 1000000){
      this.color = 'bg-warning'
    } else if (this.cost > 100000){
      this.color = 'bg-secondary'
    }
  }

  get Template() {
    return `<div class='col-3'>
    <div class="card p-2 value ${this.color}">
        ${this.name}<br>
        ${this.model}<br>
        ${this.manufacturer}<br>
        ${this.cost}<br>
        ${this.shipClass}
    </div>
  </div>`
  }
}