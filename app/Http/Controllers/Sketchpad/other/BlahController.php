<?php namespace App\Http\Controllers\Sketchpad\other;

use App\Http\Controllers\Controller;


/**
 * Class TestController
 *
 * @package App\Http\Controllers
 */
class BlahController extends Controller
{

	/**
	 * Say hello
	 *
	 * @param string $thing
	 */
	public function foo($thing = 'world')
	{
		echo "Foo $thing";
	}

	/**
	 * Say goodbye
	 *
	 * @param string $thing
	 */
	public function bar($thing = 'world')
	{
		echo "Bar $thing";
	}

	public function adipiscing()
	{
		pr('adipiscing', $this);
	}

	public function elit()
	{
		pr('elit', $this);
	}

	public function sed()
	{
		pr('sed', $this);
	}

	public function eiusmod()
	{
		pr('eiusmod', $this);
	}

	public function tempor()
	{
		pr('tempor', $this);
	}

	public function incididunt()
	{
		pr('incididunt', $this);
	}

	public function ut()
	{
		pr('ut', $this);
	}

	public function labore()
	{
		pr('labore', $this);
	}

	public function et()
	{
		pr('et', $this);
	}

}