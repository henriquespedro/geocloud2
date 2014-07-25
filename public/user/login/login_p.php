<?php
use \app\inc\Model;
use \app\conf\App;

include '../header.php';
$postgisObject = new Model();
include '../html_header.php';
// Check if user is logged in - and redirect if this is not the case
if (!$_SESSION['auth'] || !$_SESSION['screen_name']) {
    die("<script>window.location='/user/login'</script>");
}


$prefix = ($_SESSION['zone']) ? App::$param['domainPrefix'] . $_SESSION['zone'] . "." : "";
if (App::$param['domain']) {
    $host = "http://" . $prefix . App::$param['domain'];
} else {
    $host = App::$param['host'];
}

if (App::$param['cdnSubDomain']) {
    $bits = explode("://", $host);
    $cdnHost = $bits[0] . "://" . App::$param['cdnSubDomain'] . "." . $bits[1];
} else {
    $cdnHost = $host;
}
// If main user fetch all sub users
if (!$_SESSION['subuser']) {
    $_SESSION['subusers'] = array();
    $sQuery = "SELECT * FROM {$sTable} WHERE parentdb = :sUserID";
    $res = $postgisObject->prepare($sQuery);
    $res->execute(array(":sUserID" => $_SESSION['screen_name']));
    while ($rowSubUSers = $postgisObject->fetchRow($res)) {
        $_SESSION['subusers'][] = $rowSubUSers["screenname"];
    };
}
?>
<div class="container">
    <div id="db_exists" style="display: none">
        <div class="row dashboard">
            <div class="span3">
                <?php
                echo "<a target='_blank' href='" . $host . "/store/{$_SESSION['screen_name']}' id='btn-admin' class='btn btn-large btn-info' data-placement='top'
                                     title='Start the administration of your GeoCloud'>Start admin</a>";
                ?>
            </div>
            <div class="span3">
                <div id="schema-list">
                    <h2>Maps <span><i><i id="schema-tool-tip" data-placement="right" class="icon-info-sign"
                                         title="Logical groups of layers"></i></i></span></h2>
                    <table class="table" id="schema-table"></table>
                </div>
            </div>
            <div class="span5" id="subusers-el" style="display: none">
                <div><strong>Users in this database</strong></div>
                <table class="table" id="subusers-table"></table>
            </div>
        </div>

        <div style="position: absolute; right: 5px; top: 3px">
            <div><?php echo $_SESSION['screen_name'] ?>
                <?php if ($_SESSION['subuser']) echo " ({$_SESSION['subuser']})" ?>
                <?php if (!$_SESSION['subuser']) { ?>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="/user/new">New user</a>
                <?php } ?>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="/user/edit">Change password</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
                    href="/user/logout">Log out</a>&nbsp;&nbsp;&nbsp;
            </div>
        </div>
    </div>
    <div id="db_exists_not" style="display: none">
        <div class="row dashboard-create">
            <div class="row">
                <div class="span3">
                    <?php
                    echo "<a href='" . $host . "/user/createstore' id='btn-create' class='btn btn-large btn-info' title='' data-placement='right' data-content='Click here to create your geocloud. It may take some secs, so stay on this page.'>Create new database</a>";
                    ?>
                </div>
            </div>
        </div>
    </div>

</div>
<script type="text/html" id="template-schema-list">
    <tr class="map-entry">
        <td><%= this . schema %></td>
        <td><a target="_blank"
               href="<?php echo $cdnHost . "/apps/viewer/" ?><%= db %>/<%= this . schema %>">View
        </a></td>
    </tr>
</script>
<script type="text/html" id="template-subuser-list">
    <tr class="subuser-entry">
        <td><%= this %></td>
    </tr>
</script>
<script>
    var metaDataKeys = [];
    var metaDataKeysTitle = [];
    var db = "<?php echo $_SESSION['screen_name'];?>";
    var hostName = "<?php echo $host ?>";
    <?php
       if (!$_SESSION['subuser']){
       echo "var subUsers = ".json_encode($_SESSION['subusers']).";\n";
       }
       else {
       echo "var subUsers = null;\n";
       }
   ?>
    $(window).ready(function () {
        if (subUsers) {
            $('#subusers-table').append($('#template-subuser-list').jqote(subUsers));
            if (subUsers.length > 0) {
                $("#subusers-el").delay(200).fadeIn(400);
            }
        }
        $.ajax({
            url: hostName + '/controllers/database/exist/<?php echo $_SESSION['screen_name'] ?>',
            dataType: 'jsonp',
            jsonp: 'jsonp_callback',
            success: function (response) {
                if (response.success === true) {
                    $("#db_exists").show();
                    $('#btn-create').popover('show');
                    $("#schema-tool-tip").tooltip();
                    $("#btn-admin").tooltip();
                    $.ajax({
                        url: hostName + '/controllers/database/schemas',
                        dataType: 'jsonp',
                        jsonp: 'jsonp_callback',
                        success: function (response) {
                            //console.log(response);
                            $('#schema-table').append($('#template-schema-list').jqote(response.data));
                        }
                    });
                    $.ajax({
                        dataType: 'jsonp',
                        jsonp: 'jsonp_callback',
                        url: hostName + '/controllers/mapfile',
                        success: function (response) {

                        }
                    });
                    $.ajax({
                        dataType: 'jsonp',
                        jsonp: 'jsonp_callback',
                        url: hostName + '/controllers/cfgfile',
                        success: function (response) {

                        }
                    });
                }
                else {
                    $("#db_exists_not").show();
                    $('#btn-create').popover('show');
                }
            }
        });
    });
</script>
<?php include_once("../../../app/conf/intercom.js.inc"); ?>
</body>
</html>
