<?php namespace App\Http\Controllers\Sketchpad\other\cooie;

use App\Http\Controllers\Controller;


/**
 * Test all kinds of methods to do with cooie
 *
 * @package App\Http\Controllers
 */
class NameController extends Controller
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

	public function Lorem()
	{
		pr('Lorem', $this);
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