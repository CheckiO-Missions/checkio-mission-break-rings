requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $, TableComponent) {
        var io = new extIO({
            functions: {
                js: 'breakRings',
                python: 'break_rings'
            }
        });
        io.start();
    }
);