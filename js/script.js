/**
 * Created by Zeddie on 4/2/2016.
 */
$(document).ready(function () {

    /* Shows the home div */
    $('#homebtn').click(function (e) {
        e.preventDefault();
        $('#finddiv').removeClass('visiblediv').addClass('hiddendiv');
        $('#homediv').removeClass('hiddendiv').addClass('visiblediv');
    });

    /* Shows the search-for-music div */
    $('#findbtn').click(function (e) {
        e.preventDefault();
        $('#homediv').removeClass('visiblediv').addClass('hiddendiv');
        $('#finddiv').removeClass('hiddendiv').addClass('visiblediv');
    });

    /* Shows the following div */
    $('#followbtn').click(function (e) {
        e.preventDefault();
    });

    /* Shows the recommended users div */
    $('#recbtn').click(function (e) {
        e.preventDefault();
    });

});