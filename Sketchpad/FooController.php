<?php namespace sketchpad;

use App\Http\Controllers\Controller;
use davestewart\sketchpad\services\Sketchpad;
use Illuminate\Support\Facades\App;


/**
 * Class TestController
 *
 * @package App\Http\Controllers
 */
class FooController extends Controller
{

	
	/**
	 * Say hello
	 *
	 * @param string $thing
	 */
	public function foo(App $app, $thing = 'yay', $bool = true, $id = 6)
	{
		vd(func_get_args());
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

	public function link(Sketchpad $sketchpad, $value = 1)
	{
		pr('value is ' . $value);
		$num    = rand(0, 100);
		$url    = $sketchpad->route . $num;
		echo "<a href='$url'>Link: $num</a>";
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