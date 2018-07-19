  (function() {
    'use strict';
  
    var app = {
      isLoading: true,
      visibleCards: {},
      selectedflight: [],
      spinner: document.querySelector('.loader'),
      cardTemplate: document.querySelector('.card1'),
      container: document.querySelector('.main'),
    };// updates flight schedule.
        app.updateForecasts();
      
    })
    


function intitialflight()
{
    document.getElementsByClassName("d1").innerHTML='Malta to Amsterdam'
    document.getElementsByClassName("d3").innerHTML='08:45'
    document.getElementsByClassName("d2").innerHTML='ON TIME'
}
intitialflight();
