this["Templates"] = this["Templates"] || {};
this["Templates"]["body.tmpl"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div id=\"loadscreen-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"loadscreen\">");_.b("\n" + i);_.b("    <div class=\"center text\">");_.b("\n" + i);_.b("        <div id=\"loadscreentext\"></div>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("    <div class=\"center bounce\">");_.b("\n" + i);_.b("        <div class=\"bouncywrap\">");_.b("\n" + i);_.b("            <div class=\"dotcon dc1\">");_.b("\n" + i);_.b("                <div class=\"dot\"></div>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <div class=\"dotcon dc2\">");_.b("\n" + i);_.b("                <div class=\"dot\"></div>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <div class=\"dotcon dc3\">");_.b("\n" + i);_.b("                <div class=\"dot\"></div>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("<div class=\"pane\">");_.b("\n" + i);_.b("    <!-- map -->");_.b("\n" + i);_.b("    <div id=\"map-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"map\"></div>");_.b("\n" + i);_.b("    <div id=\"info-text-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"alert alert-success fade in\" style=\"display:none; width: ");_.b(_.v(_.f("infoTextWidth",c,p,0)));_.b("; position: absolute; z-index: 3; top: 30px; right: 5px; margin-bottom: 0\">");_.b("\n" + i);_.b("        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>");_.b("\n" + i);_.b("        ");_.b(_.t(_.f("infoText",c,p,0)));_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("    <div class=\"navbar navbar-default\" role=\"navigation\">");_.b("\n" + i);_.b("        <div class=\"navbar-header\">");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("        <div class=\"collapse navbar-collapse\" id=\"navbar\">");_.b("\n" + i);_.b("            <ul class=\"nav navbar-nav\">");_.b("\n" + i);_.b("                <li>");_.b("\n" + i);_.b("                    <button id=\"locate-btn-");_.b(_.v(_.f("id",c,p,0)));_.b("\" type=\"button\" class=\"btn btn-default navbar-btn locate-btn\" data-toggle=\"tooltip\"");_.b("\n" + i);_.b("                            data-placement=\"bottom\" title=\"");_.b(_.t(_.f("Locate me on the map",c,p,0)));_.b("\">");_.b("\n" + i);_.b("                        <i class=\"fa fa-location-arrow\"></i>");_.b("\n" + i);_.b("                    </button>");_.b("\n" + i);_.b("                </li>");_.b("\n" + i);_.b("\n" + i);_.b("                <li id=\"legend-popover-li-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"gc-btn\">");_.b("\n" + i);_.b("                    <a href=\"javascript:void(0)\" id=\"legend-popover-");_.b(_.v(_.f("id",c,p,0)));_.b("\" rel=\"popover\"");_.b("\n" + i);_.b("                       data-placement=\"bottom\">");_.b("\n" + i);_.b("                        ");_.b(_.v(_.f("Legend",c,p,0)));_.b(" </a>");_.b("\n" + i);_.b("                </li>");_.b("\n" + i);_.b("                <!--<li id=\"share-modal-li-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"gc-btn\">");_.b("\n" + i);_.b("                    <a href=\"javascript:void(0)\" title=\"Share\"");_.b("\n" + i);_.b("                       onclick=\"gc2map.maps['");_.b(_.v(_.f("id",c,p,0)));_.b("'].share();\">");_.b("\n" + i);_.b("                        Del </a>");_.b("\n" + i);_.b("                </li>-->");_.b("\n" + i);_.b("                <li id=\"open-win-li-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"gc-btn\" data-toggle=\"tooltip\"");_.b("\n" + i);_.b("                    data-placement=\"bottom\" title=\"");_.b(_.t(_.f("Open map in pop up window",c,p,0)));_.b("\">");_.b("\n" + i);_.b("                    <a href=\"javascript:void(0)\" title=\"\"");_.b("\n" + i);_.b("                       onclick=\"gc2map.maps['");_.b(_.v(_.f("id",c,p,0)));_.b("'].fullScreen();\">");_.b("\n" + i);_.b("                        ");_.b(_.v(_.f("Pop up",c,p,0)));_.b(" </a>");_.b("\n" + i);_.b("                </li>");_.b("\n" + i);_.b("                <li class=\"dropdown\">");_.b("\n" + i);_.b("                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">");_.b(_.v(_.f("Baselayers",c,p,0)));_.b(" <b");_.b("\n" + i);_.b("                            class=\"caret\"></b></a>");_.b("\n" + i);_.b("                    <ul class=\"dropdown-menu\" id=\"base-layer-list-");_.b(_.v(_.f("id",c,p,0)));_.b("\">");_.b("\n" + i);_.b("                    </ul>");_.b("\n" + i);_.b("                </li>");_.b("\n" + i);_.b("            </ul>");_.b("\n" + i);_.b("            <form style=\"display: none\" id=\"custom-search-form\" class=\"navbar-form navbar-right \" role=\"search\">");_.b("\n" + i);_.b("                <input id=\"custom-search\" class=\"typeahead\" type=\"text\" placeholder=\"");_.b(_.v(_.f("Search",c,p,0)));_.b("\">");_.b("\n" + i);_.b("            </form>");_.b("\n" + i);_.b("            <ul style=\"display: none\" class=\"nav navbar-nav navbar-right vidi-btn-ul\">");_.b("\n" + i);_.b("                <li data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"&Aring;ben kortet i Vidi viewer\">");_.b("\n" + i);_.b("                    <a href=\"#\" target=\"_blank\" id=\"vidi-btn-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"btn btn-default navbar-btn vidi-btn\" data-toggle=\"tooltip\"");_.b("\n" + i);_.b("                       data-placement=\"bottom\" title=\"\">");_.b("\n" + i);_.b("                        <i class=\"fa fa-map\"></i>");_.b("\n" + i);_.b("                    </a>");_.b("\n" + i);_.b("                </li>");_.b("\n" + i);_.b("            </ul>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("    <!-- layers -->");_.b("\n" + i);_.b("    <div id=\"layers-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"panel-group\"></div>");_.b("\n" + i);_.b("    <!-- legend -->");_.b("\n" + i);_.b("    <div id=\"legend-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"legend-container\"></div>");_.b("\n" + i);_.b("    <!-- info modal -->");_.b("\n" + i);_.b("    <div id=\"modal-info-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"modal fade\">");_.b("\n" + i);_.b("        <div class=\"modal-dialog modal-infobox\">");_.b("\n" + i);_.b("            <div class=\"modal-content\">");_.b("\n" + i);_.b("                <div class=\"modal-header\">");_.b("\n" + i);_.b("                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>");_.b("\n" + i);_.b("                    <h4 class=\"modal-title\">Info</h4>");_.b("\n" + i);_.b("                </div>");_.b("\n" + i);_.b("                <div class=\"modal-body\" id=\"modal-info-body-");_.b(_.v(_.f("id",c,p,0)));_.b("\">");_.b("\n" + i);_.b("                    <ul class=\"nav nav-tabs\" id=\"info-tab-");_.b(_.v(_.f("id",c,p,0)));_.b("\"></ul>");_.b("\n" + i);_.b("                    <div class=\"tab-content\" id=\"info-pane-");_.b(_.v(_.f("id",c,p,0)));_.b("\"></div>");_.b("\n" + i);_.b("                </div>");_.b("\n" + i);_.b("                <div class=\"modal-footer\">");_.b("\n" + i);_.b("                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">");_.b(_.v(_.f("Close",c,p,0)));_.b("</button>");_.b("\n" + i);_.b("                </div>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <!-- /.modal-content -->");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("        <!-- /.modal-dialog -->");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("    <!-- /.modal -->");_.b("\n" + i);_.b("    <!-- Share modal -->");_.b("\n" + i);_.b("    <div id=\"modal-share-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"modal fade modal-share\">");_.b("\n" + i);_.b("        <div class=\"modal-dialog\">");_.b("\n" + i);_.b("            <div class=\"modal-content\">");_.b("\n" + i);_.b("                <div class=\"modal-header\">");_.b("\n" + i);_.b("                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>");_.b("\n" + i);_.b("                    <h4 class=\"modal-title\">");_.b(_.v(_.f("Share",c,p,0)));_.b("</h4>");_.b("\n" + i);_.b("                </div>");_.b("\n" + i);_.b("                <div class=\"modal-body\" id=\"modal-share-body-");_.b(_.v(_.f("id",c,p,0)));_.b("\">");_.b("\n" + i);_.b("                    <form class=\"form-horizontal\" role=\"form\">");_.b("\n" + i);_.b("                        <div class=\"form-group\">");_.b("\n" + i);_.b("                            <label class=\"col-sm-1 control-label\"><i class=\"fa fa-share\"></i></label>");_.b("\n" + i);_.b("\n" + i);_.b("                            <div class=\"col-sm-10\">");_.b("\n" + i);_.b("                                <button type=\"button\" class=\"btn btn-default btn-share\" data-toggle=\"tooltip\"");_.b("\n" + i);_.b("                                        data-placement=\"top\" title=\"Twitter\"");_.b("\n" + i);_.b("                                        onclick=\"gc2map.maps['");_.b(_.v(_.f("id",c,p,0)));_.b("'].shareTwitter();\"><i");_.b("\n" + i);_.b("                                        class=\"fa fa-twitter\"></i>");_.b("\n" + i);_.b("                                </button>");_.b("\n" + i);_.b("                                <button type=\"button\" class=\"btn btn-default btn-share\" data-toggle=\"tooltip\"");_.b("\n" + i);_.b("                                        data-placement=\"top\" title=\"LinkedIn\"");_.b("\n" + i);_.b("                                        onclick=\"gc2map.maps['");_.b(_.v(_.f("id",c,p,0)));_.b("'].shareLinkedIn();\"><i");_.b("\n" + i);_.b("                                        class=\"fa fa-linkedin\"></i>");_.b("\n" + i);_.b("                                </button>");_.b("\n" + i);_.b("                                <button type=\"button\" class=\"btn btn-default btn-share\" data-toggle=\"tooltip\"");_.b("\n" + i);_.b("                                        data-placement=\"top\" title=\"Google+\"");_.b("\n" + i);_.b("                                        onclick=\"gc2map.maps['");_.b(_.v(_.f("id",c,p,0)));_.b("'].shareGooglePlus();\"><i");_.b("\n" + i);_.b("                                        class=\"fa fa-google-plus\"></i>");_.b("\n" + i);_.b("                                </button>");_.b("\n" + i);_.b("                                <button type=\"button\" class=\"btn btn-default btn-share\" data-toggle=\"tooltip\"");_.b("\n" + i);_.b("                                        data-placement=\"top\" title=\"Facebook\"");_.b("\n" + i);_.b("                                        onclick=\"gc2map.maps['");_.b(_.v(_.f("id",c,p,0)));_.b("'].shareFacebook();\"><i");_.b("\n" + i);_.b("                                        class=\"fa fa-facebook\"></i>");_.b("\n" + i);_.b("                                </button>");_.b("\n" + i);_.b("                                <button type=\"button\" class=\"btn btn-default btn-share\" data-toggle=\"tooltip\"");_.b("\n" + i);_.b("                                        data-placement=\"top\" title=\"Tumblr\"");_.b("\n" + i);_.b("                                        onclick=\"gc2map.maps['");_.b(_.v(_.f("id",c,p,0)));_.b("'].shareTumblr();\">");_.b("\n" + i);_.b("                                    <i");_.b("\n" + i);_.b("                                            class=\"fa fa-tumblr\"></i>");_.b("\n" + i);_.b("                                </button>");_.b("\n" + i);_.b("                            </div>");_.b("\n" + i);_.b("                        </div>");_.b("\n" + i);_.b("                        <div class=\"form-group\">");_.b("\n" + i);_.b("                            <label for=\"share-url-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"col-sm-1 control-label\"><i");_.b("\n" + i);_.b("                                    class=\"fa fa-link\"></i></label>");_.b("\n" + i);_.b("\n" + i);_.b("                            <div class=\"col-sm-10\">");_.b("\n" + i);_.b("                                <input data-toggle=\"tooltip\" data-placement=\"top\"");_.b("\n" + i);_.b("                                       title=\"");_.b(_.v(_.f("URL to this map",c,p,0)));_.b("\"");_.b("\n" + i);_.b("                                       type=\"text\"");_.b("\n" + i);_.b("                                       class=\"form-control share-text\" id=\"share-url-");_.b(_.v(_.f("id",c,p,0)));_.b("\" value=\"\">");_.b("\n" + i);_.b("                            </div>");_.b("\n" + i);_.b("                        </div>");_.b("\n" + i);_.b("                        <div class=\"form-group\" id=\"group-iframe-");_.b(_.v(_.f("id",c,p,0)));_.b("\">");_.b("\n" + i);_.b("                            <label for=\"share-iframe-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"col-sm-1 control-label\"><i class=\"fa fa-code\"></i></label>");_.b("\n" + i);_.b("\n" + i);_.b("                            <div class=\"col-sm-10\">");_.b("\n" + i);_.b("                                <input data-toggle=\"tooltip\" data-placement=\"top\"");_.b("\n" + i);_.b("                                       title=\"");_.b(_.v(_.f("Iframe with this map to embed on web page",c,p,0)));_.b("\" type=\"text\"");_.b("\n" + i);_.b("                                       class=\"form-control share-text\" id=\"share-iframe-");_.b(_.v(_.f("id",c,p,0)));_.b("\" value=\"\">");_.b("\n" + i);_.b("                            </div>");_.b("\n" + i);_.b("                        </div>");_.b("\n" + i);_.b("                        <div class=\"form-group\" id=\"group-static-");_.b(_.v(_.f("id",c,p,0)));_.b("\">");_.b("\n" + i);_.b("                            <label for=\"share-static-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"col-sm-1 control-label\"><i");_.b("\n" + i);_.b("                                    class=\"fa fa-picture-o\"></i></label>");_.b("\n" + i);_.b("\n" + i);_.b("                            <div class=\"col-sm-10\">");_.b("\n" + i);_.b("                                <input data-toggle=\"tooltip\" data-placement=\"top\"");_.b("\n" + i);_.b("                                       title=\"");_.b(_.v(_.f("URL to a static PNG image of this map",c,p,0)));_.b("\" type=\"text\"");_.b("\n" + i);_.b("                                       class=\"form-control share-text\" id=\"share-static-");_.b(_.v(_.f("id",c,p,0)));_.b("\" value=\"\">");_.b("\n" + i);_.b("                            </div>");_.b("\n" + i);_.b("                        </div>");_.b("\n" + i);_.b("                        <div class=\"form-group\" id=\"group-javascript-");_.b(_.v(_.f("id",c,p,0)));_.b("\">");_.b("\n" + i);_.b("                            <label for=\"share-javascript-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"col-sm-1 control-label\">js</label>");_.b("\n" + i);_.b("\n" + i);_.b("                            <div class=\"col-sm-10\">");_.b("\n" + i);_.b("                                <textarea data-toggle=\"tooltip\" data-placement=\"top\"");_.b("\n" + i);_.b("                                          title=\"");_.b(_.v(_.f("JavaScript for an application",c,p,0)));_.b("\"");_.b("\n" + i);_.b("                                          class=\"form-control share-text\" id=\"share-javascript-");_.b(_.v(_.f("id",c,p,0)));_.b("\" rows=\"6\"");_.b("\n" + i);_.b("                                          value=\"\"></textarea>");_.b("\n" + i);_.b("                            </div>");_.b("\n" + i);_.b("                        </div>");_.b("\n" + i);_.b("\n" + i);_.b("                    </form>");_.b("\n" + i);_.b("                </div>");_.b("\n" + i);_.b("                <div class=\"modal-footer\">");_.b("\n" + i);_.b("                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">");_.b(_.v(_.f("Close",c,p,0)));_.b("</button>");_.b("\n" + i);_.b("                </div>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <!-- /.modal-content -->");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("        <!-- /.modal-dialog -->");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("</div>");_.b("\n");return _.fl();;});
this["Templates"]["body2.tmpl"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div id=\"loadscreen-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"loadscreen\">");_.b("\n" + i);_.b("    <div class=\"center text\">");_.b("\n" + i);_.b("        <div id=\"loadscreentext\"></div>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("    <div class=\"center bounce\">");_.b("\n" + i);_.b("        <div class=\"bouncywrap\">");_.b("\n" + i);_.b("            <div class=\"dotcon dc1\">");_.b("\n" + i);_.b("                <div class=\"dot\"></div>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <div class=\"dotcon dc2\">");_.b("\n" + i);_.b("                <div class=\"dot\"></div>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <div class=\"dotcon dc3\">");_.b("\n" + i);_.b("                <div class=\"dot\"></div>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("<div class=\"pane\">");_.b("\n" + i);_.b("    <!-- map -->");_.b("\n" + i);_.b("    <div id=\"map-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"map\"></div>");_.b("\n" + i);_.b("    <div id=\"info-text-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"alert alert-success fade in\" style=\"display:none; width: ");_.b(_.v(_.f("infoTextWidth",c,p,0)));_.b("; position: absolute; z-index: 3; top: 30px; right: 5px; margin-bottom: 0\">");_.b("\n" + i);_.b("        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>");_.b("\n" + i);_.b("        ");_.b(_.t(_.f("infoText",c,p,0)));_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("    <div class=\"navbar navbar-default\" role=\"navigation\">");_.b("\n" + i);_.b("        <div class=\"navbar-header\">");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">");_.b("\n" + i);_.b("            <ul class=\"nav navbar-nav\">");_.b("\n" + i);_.b("                <li>");_.b("\n" + i);_.b("                    <button id=\"locate-btn-");_.b(_.v(_.f("id",c,p,0)));_.b("\" type=\"button\" class=\"btn btn-default navbar-btn locate-btn\" data-toggle=\"tooltip\"");_.b("\n" + i);_.b("                            data-placement=\"bottom\" title=\"");_.b(_.t(_.f("Locate me on the map",c,p,0)));_.b("\">");_.b("\n" + i);_.b("                        <i class=\"fa fa-location-arrow\"></i>");_.b("\n" + i);_.b("                    </button>");_.b("\n" + i);_.b("                </li>");_.b("\n" + i);_.b("                <!--<li id=\"share-modal-li-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"gc-btn\">");_.b("\n" + i);_.b("                    <a href=\"javascript:void(0)\" title=\"Share\"");_.b("\n" + i);_.b("                       onclick=\"gc2map.maps['");_.b(_.v(_.f("id",c,p,0)));_.b("'].share();\">");_.b("\n" + i);_.b("                        Del </a>");_.b("\n" + i);_.b("                </li>-->");_.b("\n" + i);_.b("                <li id=\"open-win-li-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"gc-btn\" data-toggle=\"tooltip\"");_.b("\n" + i);_.b("                    data-placement=\"bottom\" title=\"");_.b(_.t(_.f("Open map in pop up window",c,p,0)));_.b("\">");_.b("\n" + i);_.b("                    <a href=\"javascript:void(0)\" title=\"\"");_.b("\n" + i);_.b("                       onclick=\"gc2map.maps['");_.b(_.v(_.f("id",c,p,0)));_.b("'].openMapWin(decodeURIComponent(geocloud.urlHash),screen.width-20, screen.height-100);\">");_.b("\n" + i);_.b("                        ");_.b(_.v(_.f("Pop up",c,p,0)));_.b(" </a>");_.b("\n" + i);_.b("                </li>");_.b("\n" + i);_.b("                <li class=\"dropdown\">");_.b("\n" + i);_.b("                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">");_.b(_.v(_.f("Baselayers",c,p,0)));_.b(" <b");_.b("\n" + i);_.b("                            class=\"caret\"></b></a>");_.b("\n" + i);_.b("                    <ul class=\"dropdown-menu\" id=\"base-layer-list-");_.b(_.v(_.f("id",c,p,0)));_.b("\">");_.b("\n" + i);_.b("                    </ul>");_.b("\n" + i);_.b("                </li>");_.b("\n" + i);_.b("            </ul>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("    <!-- layers -->");_.b("\n" + i);_.b("    <div id=\"layers-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"panel-group\"></div>");_.b("\n" + i);_.b("\n" + i);_.b("    <!-- info modal -->");_.b("\n" + i);_.b("    <div id=\"modal-info-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"modal fade\">");_.b("\n" + i);_.b("        <div class=\"modal-dialog modal-infobox\">");_.b("\n" + i);_.b("            <div class=\"modal-content\">");_.b("\n" + i);_.b("                <div class=\"modal-header\">");_.b("\n" + i);_.b("                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>");_.b("\n" + i);_.b("                    <h4 class=\"modal-title\">Info</h4>");_.b("\n" + i);_.b("                </div>");_.b("\n" + i);_.b("                <div class=\"modal-body\" id=\"modal-info-body-");_.b(_.v(_.f("id",c,p,0)));_.b("\">");_.b("\n" + i);_.b("                    <ul class=\"nav nav-tabs\" id=\"info-tab-");_.b(_.v(_.f("id",c,p,0)));_.b("\"></ul>");_.b("\n" + i);_.b("                    <div class=\"tab-content\" id=\"info-pane-");_.b(_.v(_.f("id",c,p,0)));_.b("\"></div>");_.b("\n" + i);_.b("                </div>");_.b("\n" + i);_.b("                <div class=\"modal-footer\">");_.b("\n" + i);_.b("                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">");_.b(_.v(_.f("Close",c,p,0)));_.b("</button>");_.b("\n" + i);_.b("                </div>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <!-- /.modal-content -->");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("        <!-- /.modal-dialog -->");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("    <!-- /.modal -->");_.b("\n" + i);_.b("    <!-- Share modal -->");_.b("\n" + i);_.b("    <div id=\"modal-share-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"modal fade modal-share\">");_.b("\n" + i);_.b("        <div class=\"modal-dialog\">");_.b("\n" + i);_.b("            <div class=\"modal-content\">");_.b("\n" + i);_.b("                <div class=\"modal-header\">");_.b("\n" + i);_.b("                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>");_.b("\n" + i);_.b("                    <h4 class=\"modal-title\">");_.b(_.v(_.f("Share",c,p,0)));_.b("</h4>");_.b("\n" + i);_.b("                </div>");_.b("\n" + i);_.b("                <div class=\"modal-body\" id=\"modal-share-body-");_.b(_.v(_.f("id",c,p,0)));_.b("\">");_.b("\n" + i);_.b("                    <form class=\"form-horizontal\" role=\"form\">");_.b("\n" + i);_.b("                        <div class=\"form-group\">");_.b("\n" + i);_.b("                            <label class=\"col-sm-1 control-label\"><i class=\"fa fa-share\"></i></label>");_.b("\n" + i);_.b("\n" + i);_.b("                            <div class=\"col-sm-10\">");_.b("\n" + i);_.b("                                <button type=\"button\" class=\"btn btn-default btn-share\" data-toggle=\"tooltip\"");_.b("\n" + i);_.b("                                        data-placement=\"top\" title=\"Twitter\"");_.b("\n" + i);_.b("                                        onclick=\"gc2map.maps['");_.b(_.v(_.f("id",c,p,0)));_.b("'].shareTwitter();\"><i");_.b("\n" + i);_.b("                                        class=\"fa fa-twitter\"></i>");_.b("\n" + i);_.b("                                </button>");_.b("\n" + i);_.b("                                <button type=\"button\" class=\"btn btn-default btn-share\" data-toggle=\"tooltip\"");_.b("\n" + i);_.b("                                        data-placement=\"top\" title=\"LinkedIn\"");_.b("\n" + i);_.b("                                        onclick=\"gc2map.maps['");_.b(_.v(_.f("id",c,p,0)));_.b("'].shareLinkedIn();\"><i");_.b("\n" + i);_.b("                                        class=\"fa fa-linkedin\"></i>");_.b("\n" + i);_.b("                                </button>");_.b("\n" + i);_.b("                                <button type=\"button\" class=\"btn btn-default btn-share\" data-toggle=\"tooltip\"");_.b("\n" + i);_.b("                                        data-placement=\"top\" title=\"Google+\"");_.b("\n" + i);_.b("                                        onclick=\"gc2map.maps['");_.b(_.v(_.f("id",c,p,0)));_.b("'].shareGooglePlus();\"><i");_.b("\n" + i);_.b("                                        class=\"fa fa-google-plus\"></i>");_.b("\n" + i);_.b("                                </button>");_.b("\n" + i);_.b("                                <button type=\"button\" class=\"btn btn-default btn-share\" data-toggle=\"tooltip\"");_.b("\n" + i);_.b("                                        data-placement=\"top\" title=\"Facebook\"");_.b("\n" + i);_.b("                                        onclick=\"gc2map.maps['");_.b(_.v(_.f("id",c,p,0)));_.b("'].shareFacebook();\"><i");_.b("\n" + i);_.b("                                        class=\"fa fa-facebook\"></i>");_.b("\n" + i);_.b("                                </button>");_.b("\n" + i);_.b("                                <button type=\"button\" class=\"btn btn-default btn-share\" data-toggle=\"tooltip\"");_.b("\n" + i);_.b("                                        data-placement=\"top\" title=\"Tumblr\"");_.b("\n" + i);_.b("                                        onclick=\"gc2map.maps['");_.b(_.v(_.f("id",c,p,0)));_.b("'].shareTumblr();\">");_.b("\n" + i);_.b("                                    <i");_.b("\n" + i);_.b("                                            class=\"fa fa-tumblr\"></i>");_.b("\n" + i);_.b("                                </button>");_.b("\n" + i);_.b("                            </div>");_.b("\n" + i);_.b("                        </div>");_.b("\n" + i);_.b("                        <div class=\"form-group\">");_.b("\n" + i);_.b("                            <label for=\"share-url-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"col-sm-1 control-label\"><i");_.b("\n" + i);_.b("                                    class=\"fa fa-link\"></i></label>");_.b("\n" + i);_.b("\n" + i);_.b("                            <div class=\"col-sm-10\">");_.b("\n" + i);_.b("                                <input data-toggle=\"tooltip\" data-placement=\"top\"");_.b("\n" + i);_.b("                                       title=\"");_.b(_.v(_.f("URL to this map",c,p,0)));_.b("\"");_.b("\n" + i);_.b("                                       type=\"text\"");_.b("\n" + i);_.b("                                       class=\"form-control share-text\" id=\"share-url-");_.b(_.v(_.f("id",c,p,0)));_.b("\" value=\"\">");_.b("\n" + i);_.b("                            </div>");_.b("\n" + i);_.b("                        </div>");_.b("\n" + i);_.b("                        <div class=\"form-group\" id=\"group-iframe-");_.b(_.v(_.f("id",c,p,0)));_.b("\">");_.b("\n" + i);_.b("                            <label for=\"share-iframe-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"col-sm-1 control-label\"><i class=\"fa fa-code\"></i></label>");_.b("\n" + i);_.b("\n" + i);_.b("                            <div class=\"col-sm-10\">");_.b("\n" + i);_.b("                                <input data-toggle=\"tooltip\" data-placement=\"top\"");_.b("\n" + i);_.b("                                       title=\"");_.b(_.v(_.f("Iframe with this map to embed on web page",c,p,0)));_.b("\" type=\"text\"");_.b("\n" + i);_.b("                                       class=\"form-control share-text\" id=\"share-iframe-");_.b(_.v(_.f("id",c,p,0)));_.b("\" value=\"\">");_.b("\n" + i);_.b("                            </div>");_.b("\n" + i);_.b("                        </div>");_.b("\n" + i);_.b("                        <div class=\"form-group\" id=\"group-static-");_.b(_.v(_.f("id",c,p,0)));_.b("\">");_.b("\n" + i);_.b("                            <label for=\"share-static-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"col-sm-1 control-label\"><i");_.b("\n" + i);_.b("                                    class=\"fa fa-picture-o\"></i></label>");_.b("\n" + i);_.b("\n" + i);_.b("                            <div class=\"col-sm-10\">");_.b("\n" + i);_.b("                                <input data-toggle=\"tooltip\" data-placement=\"top\"");_.b("\n" + i);_.b("                                       title=\"");_.b(_.v(_.f("URL to a static PNG image of this map",c,p,0)));_.b("\" type=\"text\"");_.b("\n" + i);_.b("                                       class=\"form-control share-text\" id=\"share-static-");_.b(_.v(_.f("id",c,p,0)));_.b("\" value=\"\">");_.b("\n" + i);_.b("                            </div>");_.b("\n" + i);_.b("                        </div>");_.b("\n" + i);_.b("                        <div class=\"form-group\" id=\"group-javascript-");_.b(_.v(_.f("id",c,p,0)));_.b("\">");_.b("\n" + i);_.b("                            <label for=\"share-javascript-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"col-sm-1 control-label\">js</label>");_.b("\n" + i);_.b("\n" + i);_.b("                            <div class=\"col-sm-10\">");_.b("\n" + i);_.b("                                <textarea data-toggle=\"tooltip\" data-placement=\"top\"");_.b("\n" + i);_.b("                                          title=\"");_.b(_.v(_.f("JavaScript for an application",c,p,0)));_.b("\"");_.b("\n" + i);_.b("                                          class=\"form-control share-text\" id=\"share-javascript-");_.b(_.v(_.f("id",c,p,0)));_.b("\" rows=\"6\"");_.b("\n" + i);_.b("                                          value=\"\"></textarea>");_.b("\n" + i);_.b("                            </div>");_.b("\n" + i);_.b("                        </div>");_.b("\n" + i);_.b("\n" + i);_.b("                    </form>");_.b("\n" + i);_.b("                </div>");_.b("\n" + i);_.b("                <div class=\"modal-footer\">");_.b("\n" + i);_.b("                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">");_.b(_.v(_.f("Close",c,p,0)));_.b("</button>");_.b("\n" + i);_.b("                </div>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <!-- /.modal-content -->");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("        <!-- /.modal-dialog -->");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("<!-- legend -->");_.b("\n" + i);_.b("<div id=\"legend-");_.b(_.v(_.f("id",c,p,0)));_.b("\" class=\"legend-container body2\" style=\"top: ");_.b(_.v(_.f("height",c,p,0)));_.b("\"></div>");_.b("\n");return _.fl();;});