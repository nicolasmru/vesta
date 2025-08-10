<?php
error_reporting(NULL);
$TAB = 'FIREWALL';

// Main include
include($_SERVER['DOCUMENT_ROOT']."/inc/main.php");

// Check user
if ($_SESSION['user'] != 'admin') {
    header("Location: /list/user");
    exit;
}

// Data
exec (VESTA_CMD."v-list-firewall-ban json", $output, $return_var);
$data = json_decode(implode('', $output), true);
if (version_compare(PHP_VERSION, '5.6', '==')) { $data = array_reverse($data, true); } else { $data = is_array($data) ? array_reverse($data, true) : array(); }
unset($output);

// Render page
render_page($user, $TAB, 'list_firewall_banlist');

// Back uri
$_SESSION['back'] = $_SERVER['REQUEST_URI'];
