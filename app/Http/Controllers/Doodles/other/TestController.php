<?php namespace App\Http\Controllers\Doodles\other;

use App\Http\Controllers\Controller;


/**
 * Class TestController
 *
 * @package App\Http\Controllers
 */
class TestController extends Controller
{

	/**
	 * Say hello
	 *
	 * @param string $thing
	 */
	public function wahay($thing = 'world')
	{
		dd(app());
	}

	/**
	 * Say goodbye
	 *
	 * @param string $thing
	 */
	public function woohoo($thing = 'world')
	{
		echo "Bar $thing";
	}
}