function xuhao() {
    //$('table tr:not(:first)').remove();
    var len = $('.table_box11 tr').length;
    for (var i = 1; i < len; i++) {
        $('.table_box11 tr:eq(' + i + ') td:first').text(i);
    }

}