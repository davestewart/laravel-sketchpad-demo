<?php namespace App\Http\Controllers\Sketchpad\other;

use App\Http\Controllers\Controller;


/**
 * A controller with some test code in it
 *
 * @package App\Http\Controllers
 */
class TestController extends Controller
{

	public function app()
	{
		dd(app());
	}

	public function config()
	{
		pr(app()->config->all());
	}

	/**
	 * Output the contents of PHPinfo, optionally
	 */
	public function info($key = 'all')
	{

		$sections =
		[
			'general' => 1,
			'credits' => 2,
			'configuration' => 4,
			'modules' => 8,
			'environment' => 16,
			'variables' => 32,
			'license' => 64,
			'all' => -1,
		];
		$section = isset($sections[$key])
			? $sections[$key]
			: -1;

		?>
			<style type="text/css">
				#result pre {margin: 0; font-family: monospace;}
				#result a:link {color: #009; text-decoration: none; background-color: #fff;}
				#result a:hover {text-decoration: underline;}
				#result table {border-collapse: collapse; border: 0; width: 934px; box-shadow: 1px 2px 3px #ccc;}
				#result .center {text-align: center;}
				#result .center th {text-align: center !important;}
				#result td, th {border: 1px solid #666; font-size: 75%; vertical-align: baseline; padding: 4px 5px;}
				#result h1 {font-size: 150%;}
				#result h2 {font-size: 125%;}
				#result .p {text-align: left;}
				#result .e {background-color: #ccf; width: 300px; font-weight: bold;}
				#result .h {background-color: #99c; font-weight: bold;}
				#result .v {background-color: #ddd; max-width: 300px; overflow-x: auto;}
				#result .v i {color: #999;}
				#result img {float: right; border: 0;}
				#result hr {width: 934px; background-color: #ccc; border: 0; height: 1px;}
			</style>
			<?php

		ob_start();
		phpinfo($section);
		$contents = ob_get_contents();
		ob_end_clean();

		$contents = preg_replace('/^[\s\S]+?body>/', '', $contents);
		$contents = preg_replace('/<\/body>[\s\S]+$/', '', $contents);
		echo $contents;

	}
}