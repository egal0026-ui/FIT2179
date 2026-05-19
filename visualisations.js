var timeline = "./parliament_2.json";
var mostHouse = "./mostseats_house.json";
var mostSen = "./mostseats_senate.json";
var bubble = "./bubble.json";
var housestate = "./housestate.json";
var vicmap = "./vic.json";

vegaEmbed("#vis1", timeline, { "actions": false });

vegaEmbed("#vis2", mostHouse, { "actions": false });

vegaEmbed("#vis3", mostSen, { "actions": false });

vegaEmbed("#vis4", bubble, { "actions": false });

vegaEmbed("#vis5", housestate, { "actions": false }).then(function (result) {
    
    
var view = result.view;

  function updateSelectedStateText() {
    var sel = view.signal("state_selector");
    var stateName = sel.State;

    if (stateName == 'Victoria') {
        document.getElementById("vis6").style.display = "block";
      vegaEmbed("#vis6", vicmap, { "actions": false });
    } else {
        document.getElementById("vis6").style.display = "none";
    };
  }

  view.addSignalListener("state_selector", function (name,value) {
    updateSelectedStateText();
  });

  updateSelectedStateText();
});
