<?php

	function pr()
	{
		echo '<pre style="font-size:11px">';
		$args = func_get_args();
		print_r( count($args) === 1 ? $args[0] : $args);
		echo '</pre>';
	}

	function pd()
	{
		call_user_func_array('pr', func_get_args());
		exit;
	}

	function vd($value)
	{
		var_dump($value);
	}