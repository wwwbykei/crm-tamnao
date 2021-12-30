//navigation
function loadNav(){
    $( ".layout-sidebar" ).load( "sidebar.html", function(){
        navActive();
    });
}

function navActive(){
    var url = window.location.pathname; 
    var activePage = url.substring(url.lastIndexOf('/') + 1); 
    $(".sidebar-menu a").each(function () { 
        var linkPage = this.href.substring(this.href.lastIndexOf('/') + 1); 
        if (activePage == linkPage) { 
            $(this).addClass("active");
            $(this).closest('.collapse').addClass("show");
            $(this).closest('.collapse').siblings('.btn-collapse').removeClass("collapsed");
        }
    });
}

function btnTag(){
    $( ".btn-tag" ).click( function(){
        $(this).toggleClass("active");
    });
}

$( document ).ready( function(){
	loadNav();
    btnTag();
});