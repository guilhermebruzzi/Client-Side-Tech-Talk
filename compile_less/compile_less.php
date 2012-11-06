<?php
    require "lessc.inc.php";

    $root = dirname(__file__);

    $less = new lessc();
    $less->setFormatter("compressed");
    $output = $less->compileFile("$root/css/index.less");
    echo "$root/css/index.less";
    echo "<br />";
    echo $output;
    echo "<br />";
    echo "$root/css/import.css";
    echo "<br />";
    file_put_contents("$root/css/import.css", $output);
?>