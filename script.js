$(document).ready(function() {
    let currentRotation = 0;
    let zoomLevel = 1;

    $("#yes-btn").click(function() {
        $("#approve").show().css({transform: '', filter: ''});
        $("#disapprove").hide();
        currentRotation = 0;
        zoomLevel = 1;
    });

    $("#no-btn").click(function() {
        $("#disapprove").show().css({transform: '', filter: ''});
        $("#approve").hide();
        currentRotation = 0;
        zoomLevel = 1;
    });

    $("#zoom-in-btn").click(function() {
        zoomLevel += 0.1;
        $('img:visible').css('transform', 'scale(' + zoomLevel + ') rotate(' + currentRotation + 'deg)');
    });

    $("#zoom-out-btn").click(function() {
        zoomLevel -= 0.1;
        $('img:visible').css('transform', 'scale(' + zoomLevel + ') rotate(' + currentRotation + 'deg)');
    });

    $("#rotate-btn").click(function() {
        currentRotation += 90;
        $('img:visible').css('transform', 'scale(' + zoomLevel + ') rotate(' + currentRotation + 'deg)');
    });

    $("#reset-btn").click(function() {
        currentRotation = 0;
        zoomLevel = 1;
        $('img:visible').css({transform: '', filter: ''});
    });

    $("#blur-btn").click(function() {
        $('img:visible').css('filter', 'blur(5px)');
    });

    $("#remove-blur-btn").click(function() {
        let currentFilter = $('img:visible').css('filter').replace(/blur\(5px\)/g, '');
        $('img:visible').css('filter', currentFilter);
    });

    $("#grayscale-btn").click(function() {
        $('img:visible').css('filter', 'grayscale(100%)');
    });

    $("#remove-grayscale-btn").click(function() {
        let currentFilter = $('img:visible').css('filter').split(' ').filter(function(effect) {
            return !effect.startsWith('grayscale');
        }).join(' ');
        $('img:visible').css('filter', currentFilter);
    });

});
