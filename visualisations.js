var timeline = "./gov.json";
var mostHouse = "./mostseats_house.json";
var mostSen = "./mostseats_senate.json";
var bubble = "./bubble.json";
var housestate = "./housestate.json";
var vicmap = "./vic.json";
var nswmap = "./nsw.json";
var qldmap = "./qld.json";
var tasmap = "./tas.json";
var actmap = "./act.json";
var ntmap = "./nt.json";
var samap = "./sa.json";
var wamap = "./wa.json";
var changeseats = "./change_aus.json";
var actchange = "./change_act.json";
var nswchange = "./change_nsw.json";
var ntchange = "./change_nt.json";
var qldchange = "./change_qld.json";
var sachange = "./change_sa.json";
var taschange = "./change_tas.json";
var vicchange = "./change_vic.json";
var wachange = "./change_wa.json";
var senate = "./senateseats.json";
var senatechange = "./senatechange.json";
var senatevotes = "./senatehisto.json";
var actvotes = "./votes_act.json";
var nswvotes = "./votes_nsw.json";
var ntvotes = "./votes_nt.json";
var savotes = "./votes_sa.json";
var qldvotes = "./votes_qld.json";
var tasvotes = "./votes_tas.json";
var vicvotes = "./votes_vic.json";
var wavotes = "./votes_wa.json";
var mostlegend = "./mostlegend.json";
var senlegend = "./senchangelegend.json";

var houselegend = "./houselegend.json";

vegaEmbed("#vis1", timeline, { "actions": false });

vegaEmbed("#vis2", mostHouse, { "actions": false });

vegaEmbed("#vis3", mostSen, { "actions": false });

vegaEmbed("#vis4", bubble, { "actions": false });

vegaEmbed("#vis6", vicmap, { "actions": false });

vegaEmbed("#vis9", senatechange, { "actions": false });

vegaEmbed("#vis10", vicvotes, { "actions": false });

vegaEmbed("#vis11", mostlegend, { "actions": false });

vegaEmbed("#vis12", senlegend, { "actions": false });
vegaEmbed("#vis13", houselegend, { "actions": false });

vegaEmbed("#vis15", senatevotes, { "actions": false });

vegaEmbed("#vis5", housestate, { "actions": false }).then(function (result) {
  var view = result.view;

  function updateSelectedStateText() {
    var sel = view.signal("state_selector");
    var stateName = sel.State;

    if (stateName == "Victoria") {
      vegaEmbed("#vis6", vicmap, { "actions": false });
      document.getElementById("HouseState").innerText =
        "Winning Party in each Electoral Division (Victoria)";

      vegaEmbed("#vis7", vicchange, { "actions": false });
      document.getElementById("ChangeHouse").innerText =
        "Change in Party Seats (2022 -> 2025) in Victoria";
      document.getElementById("ChangeHouse").style.fontSize = "15px";
    } else if (stateName == "New South Wales") {
      vegaEmbed("#vis6", nswmap, { "actions": false });
      document.getElementById("HouseState").innerText =
        "Winning Party in each Electoral Division (New South Wales)";

      vegaEmbed("#vis7", nswchange, { "actions": false });
      document.getElementById("ChangeHouse").style.fontSize = "15px";

      document.getElementById("ChangeHouse").innerText =
        "Change in Party Seats (2022 -> 2025) in New South Wales";
    } else if (stateName == "Queensland") {
      vegaEmbed("#vis6", qldmap, { "actions": false });
      document.getElementById("HouseState").innerText =
        "Winning Party in each Electoral Division (Queensland)";

      vegaEmbed("#vis7", qldchange, { "actions": false });
      document.getElementById("ChangeHouse").innerText =
        "Change in Party Seats (2022 -> 2025) in Queensland";
      document.getElementById("ChangeHouse").style.fontSize = "15px";
    } else if (stateName == "Tasmania") {
      vegaEmbed("#vis6", tasmap, { "actions": false });
      document.getElementById("HouseState").innerText =
        "Winning Party in each Electoral Division (Tasmania)";

      vegaEmbed("#vis7", taschange, { "actions": false });
      document.getElementById("ChangeHouse").innerText =
        "Change in Party Seats (2022 -> 2025) in Tasmania";
      document.getElementById("ChangeHouse").style.fontSize = "15px";
    } else if (stateName == "Australian Capital Territory") {
      vegaEmbed("#vis6", actmap, { "actions": false });
      document.getElementById("HouseState").innerText =
        "Winning Party in each Electoral Division (Australian Capital Territory)";

      vegaEmbed("#vis7", actchange, { "actions": false });
      document.getElementById("ChangeHouse").innerText =
        "Change in Party Seats (2022 -> 2025) in Australian Capital Territory";
      document.getElementById("ChangeHouse").style.fontSize = "14px";
    } else if (stateName == "Northern Territory") {
      vegaEmbed("#vis6", ntmap, { "actions": false });
      document.getElementById("HouseState").innerText =
        "Winning Party in each Electoral Division (Northern Territory)";

      vegaEmbed("#vis7", ntchange, { "actions": false });
      document.getElementById("ChangeHouse").innerText =
        "Change in Party Seats (2022 -> 2025) in Northern Territory";
      document.getElementById("ChangeHouse").style.fontSize = "15px";
    } else if (stateName == "South Australia") {
      vegaEmbed("#vis6", samap, { "actions": false });
      document.getElementById("HouseState").innerText =
        "Winning Party in each Electoral Division (South Australia)";

      vegaEmbed("#vis7", sachange, { "actions": false });
      document.getElementById("ChangeHouse").innerText =
        "Change in Party Seats (2022 -> 2025) in South Australia";
      document.getElementById("ChangeHouse").style.fontSize = "15px";
    } else if (stateName == "Western Australia") {
      vegaEmbed("#vis6", wamap, { "actions": false });
      document.getElementById("HouseState").innerText =
        "Winning Party in each Electoral Division (Western Australia)";

      vegaEmbed("#vis7", wachange, { "actions": false });
      document.getElementById("ChangeHouse").innerText =
        "Change in Party Seats (2022 -> 2025) in Western Australia";
      document.getElementById("ChangeHouse").style.fontSize = "15px";
    } else {
      vegaEmbed("#vis7", changeseats, { "actions": false });
      document.getElementById("ChangeHouse").innerText =
        "Change in Party Seats (2022 -> 2025) in Australia";
      document.getElementById("ChangeHouse").style.fontSize = "15px";
    }
  }

  view.addSignalListener("state_selector", function (name, value) {
    updateSelectedStateText();
  });

  updateSelectedStateText();
});

vegaEmbed("#vis8", senate, { "actions": false }).then(function (result) {
  var view = result.view;

  function updateSelectedSenateText() {
    var sel = view.signal("senate_selector");
    var stateName = sel.State;

    if (stateName == "Victoria") {
      vegaEmbed("#vis10", vicvotes, { "actions": false });
      document.getElementById("VoteSenate").innerText =
        "2025 Senate Voter Turnout Distribution in Victoria";
    } else if (stateName == "New South Wales") {
      vegaEmbed("#vis10", nswvotes, { "actions": false });
      document.getElementById("VoteSenate").innerText =
        "2025 Senate Voter Turnout Distribution in New South Wales";
    } else if (stateName == "Queensland") {
      vegaEmbed("#vis10", qldvotes, { "actions": false });
      document.getElementById("VoteSenate").innerText =
        "2025 Senate Voter Turnout Distribution in Queensland";
    } else if (stateName == "Tasmania") {
      vegaEmbed("#vis10", tasvotes, { "actions": false });
      document.getElementById("VoteSenate").innerText =
        "2025 Senate Voter Turnout Distribution in Tasmania";
    } else if (stateName == "Australian Capital Territory") {
      vegaEmbed("#vis10", actvotes, { "actions": false });
      document.getElementById("VoteSenate").innerText =
        "2025 Senate Voter Turnout Distribution in Australian Capital Territory";
    } else if (stateName == "Northern Territory") {
      vegaEmbed("#vis10", ntvotes, { "actions": false });
      document.getElementById("VoteSenate").innerText =
        "2025 Senate Voter Turnout Distribution in Northern Territory";
    } else if (stateName == "South Australia") {
      vegaEmbed("#vis10", savotes, { "actions": false });
      document.getElementById("VoteSenate").innerText =
        "2025 Senate Voter Turnout Distribution in South Australia";
    } else if (stateName == "Western Australia") {
      vegaEmbed("#vis10", wavotes, { "actions": false });
      document.getElementById("VoteSenate").innerText =
        "2025 Senate Voter Turnout Distribution in Western Australia";
    } else {
    }
  }

  view.addSignalListener("senate_selector", function (name, value) {
    updateSelectedSenateText();
  });

  updateSelectedSenateText();
});
