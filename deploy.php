<?php

$out = shell_exec('git pull');
echo($out + "\n");

$out = shell_exec('npm install');
echo($out + "\n");
$out = shell_exec('node build.js');

$echo($out + "\n");
?>
