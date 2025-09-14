var FloatingDivOpened = false;

function showFloatingDiv(title, contentHtml) {
    FloatingDivOpened = true;
    //$('#floating-center-div').css('display','block');
    $('#floating-center-div').fadeIn();
    $('#floating-center-div-title').html(title);
    $('#floating-center-div-content').html(contentHtml);
}

function hideFloatingDiv() {
    FloatingDivOpened = false;
    //$('#floating-center-div').css('display','none');
    $('#floating-center-div').fadeOut();
}

document.addEventListener('DOMContentLoaded', function () {
    $('#floating-center-div-right-close').on('click', function() {
        hideFloatingDiv();
    });

  $(document).on('keydown', function(e) {
    if (e.key === "Escape" && FloatingDivOpened) hideFloatingDiv();
  });

  $("#floating-center-div").on("submit", "#floating-center-div-form", function(e) {
    e.preventDefault();
    var title = $('#floating-center-div-title').html();
    var url = $('#floating-center-div-form').attr('action');

    $('#floating-center-div-title').html('Loading... Please wait...');
    $('#floating-center-div').css('background','#eee');

    var formData = {};
    $("#floating-center-div-form").serializeArray().forEach(function(item) {
        formData[item.name] = item.value;
    });

    $.ajax({
        url: url,
        type: 'POST',
        data: formData,
        success: function(response) {
            $('#floating-center-div').css('background','#fff');
            showFloatingDiv(title, response);
        },
        error: function(xhr, status, error) {
            $('#floating-center-div').css('background','#fff');
            showFloatingDiv('Fatal error '+status, error);
        }
    });
  });

});

function more_button_click(id) {
    var object = dataset_values[id].object;
    var action = dataset_values[id].action;
    var step = dataset_values[id].step;
    var script='step'+step+'.php';
    var title = dataset_values[id].title;
    var subaction = dataset_values[id].subaction;
    if (subaction) {
        var url = '/ajax/'+object+'/'+action+'/'+subaction+'/'+script;
    } else {
        var url = '/ajax/'+object+'/'+action+'/'+script;
    }

    $('#floating-center-div-title').html('Loading... Please wait...');
    $('#floating-center-div').css('background','#eee');
    showFloatingDiv('Loading... Please wait...', '');

    $.ajax({
        url: url,
        type: 'POST',
        data: { dataset: dataset_values[id], token: GLOBAL.TOKEN },
        success: function(response) {
            $('#floating-center-div').css('background','#fff');
            showFloatingDiv(title, response);
        },
        error: function(xhr, status, error) {
            $('#floating-center-div').css('background','#fff');
            showFloatingDiv('Fatal error '+status, error);
        }
    });
}
