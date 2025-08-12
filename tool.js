function showResearchTab(tab) {
    console.log("showResearchTab called with tab:", tab); // Debugging line
    document.getElementById("research-selected").style.display = tab === 'selected' ? 'block' : 'none';
    document.getElementById("research-all").style.display = tab === 'all' ? 'block' : 'none';
    document.getElementById("research-hai").style.display = tab === 'hai' ? 'block' : 'none';
    console.log("Tab visibility set for:", tab); // Debugging line
}

$('#toggle-more-news').click(function () {
    $('#news-more').slideToggle(function() {
        $('#news-more').is(':visible') ? $('#toggle-more-news').text('< Less') : $('#toggle-more-news').text('More >');
    });
    return false;
});

$('#toggle-more-award').click(function () {
    $('#award-more').slideToggle(function() {
        $('#award-more').is(':visible') ? $('#toggle-more-award').text('< Less') : $('#toggle-more-award').text('More >');
    });
    return false;
});

$('#toggle-more-research').click(function () {
    $('#research-more').slideToggle(function() {
        if  ($('#toggle-more-research').text('< show less') ){
            $('#toggle-more-research').text('show more >');
            $('#research-selected').is(':visible');
        } else  {
            $('#toggle-more-research').text('show less more');
            $('#research-selected').is(':visible');
        }
    });
    return false;
});

$(window).on('scroll', function () {
    $('video').each(function () {
        var video = this;
        var rect = video.getBoundingClientRect();

        if (
            rect.top >= 0 && rect.left >= 0 &&
            rect.bottom <= $(window).height() &&
            rect.right <= $(window).width()
        ) {
            video.play();
        } else {
            video.pause();
        }
    });
});

var researchProjects = $('.research-projects').html();

var researchProjectsSorted = $('div.research-project').sort(function (a, b) {
    var contentA = $(a).attr('data-sort');
    var contentB = $(b).attr('data-sort');
    return (contentA < contentB) ? 1 : (contentA > contentB) ? -1 : 0;
});

$('.sort-by-date').click(function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $('.research-projects').html(researchProjects);
    } else {
        $('.research-projects').html(researchProjectsSorted);
    }
});

$('.research-projects').html(researchProjectsSorted);

document.querySelectorAll('.email-anchor').forEach(function(a) {
    a.href = 'mailto:' + ['ying_lei', 'sfu.ca'].join('@');
});
