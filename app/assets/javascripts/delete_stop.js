$(function() {
  $("body").on("submit", "form.button_to", deleteStopFromServer);
});

function deleteStopFromServer() {
  var stopForm = $(this);
  var stopRow = stopForm.parents("tr");
  var stopId = stopRow.data("stop-id");
  var stopData = stopForm.serialize();

  var stopDeleteRequest = $.ajax({
    url: stopForm.attr("action"),
    type: "DELETE",
    data: stopData
  });

  stopDeleteRequest.done(function(){
    stopRow.fadeOut(function(){
      $(this).remove();
      reorderStops();
    });
  })

  stopDeleteRequest.fail(onFailure);

  return false;
};

function reorderStops() {
  var newStops = $(".location-stop-row");

  newStops.each(function(index, newStop) {
    newStopOrder = $(newStop).find(".stop-order");
    newStopOrder.html( index + 1 );
  })
}

function onFailure(ajaxObject) {
  console.log("FAILED");
  var htmlFromServer = ajaxObject.responseText;
};
