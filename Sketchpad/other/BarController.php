<?php namespace sketchpad\other;

use App\Http\Controllers\Controller;


/**
 * Test all kinds of methods to do with cooie
 *
 * @package App\Http\Controllers
 */
class BarController extends Controller
{

	/**
	 * Say hello
	 *
	 * @param string $thing
	 */
	public function dave($thing = 'world')
	{
		echo "Foo $thing";
	}

	/**
	 * Say goodbye
	 *
	 * @param string $thing
	 */
	public function steve($thing = 'world')
	{
		echo "Bar $thing";
	}

	public function lorem()
	{
		pr('lorem', $this);
	}

	public function ipsum()
	{
		pr('ipsum', $this);
	}

	public function dolor()
	{
		pr('dolor', $this);
	}

	public function sit()
	{
		pr('sit', $this);
	}

	public function amet()
	{
		pr('amet', $this);
	}

	public function consectetur()
	{
		pr('consectetur', $this);
	}


	public function dolore()
	{
		pr('dolore', $this);
	}

	public function magna()
	{
		pr('magna', $this);
	}

	public function aliqua()
	{
		pr('aliqua', $this);
	}


}