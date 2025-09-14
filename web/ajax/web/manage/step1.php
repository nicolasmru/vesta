<?php

// Main include
$required_dataset_param = 'domain';
include($_SERVER['DOCUMENT_ROOT']."/ajax/authentication_check.php");

echo 'Ajax script: web / manage, step1, Domain: '.$domain;
?>

<br /><br />
<form id="floating-center-div-form" name="floating-center-div-form" method="post" action="/ajax/web/manage/step2.php">
    <input type="hidden" name="token" value="<?=$_SESSION['token']?>" />
    <input type="hidden" name="dataset[object]" value="<?=$_POST['dataset']['object']?>" />
    <input type="hidden" name="dataset[action]" value="<?=$_POST['dataset']['action']?>" />
    <input type="hidden" name="dataset[subaction]" value="<?=$_POST['dataset']['subaction']?>" />
    <input type="hidden" name="dataset[step]" value="2" />
    <input type="hidden" name="dataset[domain]" value="<?=$_POST['dataset']['domain']?>" />

    <span class="ajax-label ajax-newline">Variable 1:</span>
    <input type="text" name="var1" value="val1" class="vst-input ajax-newline">
    <span class="ajax-label ajax-newline">Variable 2:</span>
    <input type="text" name="var2" value="val2" class="vst-input ajax-newline">
    <button type="submit" class="button ajax-button-margin-top">Submit</button>
</form>