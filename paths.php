<?php

    /**
     * Laravel 5.1 application paths
     *
     * Edit these as required, then copy to root folder and rename as `paths.php`
     *
     * Note that Laravel 5.1 does not play well with trailing slashes on directories!
     */
    return array
    (
        // app
        'app'    		=> 'app',
        'public'   		=> 'public',

        // routes
        'routes.php'    => 'app/Http/routes.php',

        // supporting files
        'config'        => 'support/config',
        'database'      => 'support/database',
        'storage'       => 'support/storage',
        'bootstrap'     => 'support/bootstrap',
        'tests'         => 'support/tests',

        // resources
        'resources'     => 'resources',
        'lang'          => 'resources/lang',
        'views'         => 'resources/views'
    );
