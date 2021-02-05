
$(document).ready(function() {
  $("button.enter").click(function(event) {
    event.preventDefault(event);
    $("#fortune-survey").fadeIn();
    $("#shack").hide();
    $("#typewriter").hide();
  });
});

$(document).ready(function() {
  $("button.exit").click(function(event) {
    event.preventDefault(event);
    $("#typewriter").hide();
    $("#leave").show();
  });
});

$(document).ready(function() {
  $("form#fortune-survey").submit(function(event) {
    event.preventDefault(event);

    $("#fortune-survey").hide();

    let luckyCount = $("input:checkbox[name=lucky-event]:checked").length;
    let unluckyCount = $("input:checkbox[name=unlucky-event]:checked").length;
    let ghostVal = $("input:radio[name=ghost]:checked").val();

    if ((luckyCount > unluckyCount) && (ghostVal === "yes")) {
      $("#response").append(luckyCount + " lucky events, eh? Pass some of your luck over here!");
    } else if ((luckyCount < unluckyCount) && (ghostVal === "no")) {
      $("#response").append(unluckyCount + " unlucky events. Oh dear... don't step on sidewalk cracks on every odd calendar date.");
    } else if (ghostVal === "no") {
      $("#response").append("You've upset the spirits! Your great-great Grandma may pay you a visit in the form of a squirrel soon.")
    } else {
      $("#response").append("You're neither lucky nor unlucky. How about that. Keep doing you (and no refunds!)")
    };
  });
});