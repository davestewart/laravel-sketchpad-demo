<?php namespace App\Http\Controllers\Sketchpad;

use App\Http\Controllers\Controller;


/**
 * Class TestController
 *
 * @package App\Http\Controllers
 */
class ExampleController extends Controller
{

	/**
	 * This is a really long comment that I hope will get clipped
	 *
	 * This is some more text
	 *
	 * And this is some more
	 *
	 * @label You will say hello!
	 * @param string $thing     The thing!
	 * @param bool   $test      The test variable
	 */
	public function hello($thing = 'world', $test = false)
	{
		echo "Hello $thing";

	}

	/**
	 * Say goodbye
	 *
	 * @param string $thing
	 */
	public function goodbye($thing = 'world')
	{
		echo "Goodbye $thing";
	}
}