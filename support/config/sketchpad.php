<?php return
[
    // sketchpad route
    'route'         => 'sketchpad/',

    // array of controller folders, add as many as you see fit
    'paths'         =>
    [
        'project'   => 'sketchpad/controllers/',
        'demo'      => 'vendor/davestewart/sketchpad/src/demo/'
    ],

    // sketchpad views folder, accessible via 'sketchpad::path.to.file'
    'views'         => 'sketchpad/views/',

    // public assets folder for sketchpad resources
    'assets'        => 'vendor/sketchpad/',

    // any middleware you want to run on sketchpad routes
    'middleware'    => null,
];