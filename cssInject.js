/*yepnope1.0.2|WTFPL*/(function(a,b,c){function H(){var a=z;a.loader={load:G,i:0};return a}function G(a,b,c){var e=b=="c"?r:q;i=0,b=b||"j",u(a)?F(e,a,b,this.i++,d,c):(h.splice(this.i++,0,a),h.length==1&&E());return this}function F(a,c,d,g,j,l){function q(){!o&&A(n.readyState)&&(p.r=o=1,!i&&B(),n.onload=n.onreadystatechange=null,e(function(){m.removeChild(n)},0))}var n=b.createElement(a),o=0,p={t:d,s:c,e:l};n.src=n.data=c,!k&&(n.style.display="none"),n.width=n.height="0",a!="object"&&(n.type=d),n.onload=n.onreadystatechange=q,a=="img"?n.onerror=q:a=="script"&&(n.onerror=function(){p.e=p.r=1,E()}),h.splice(g,0,p),m.insertBefore(n,k?null:f),e(function(){o||(m.removeChild(n),p.r=p.e=o=1,B())},z.errorTimeout)}function E(){var a=h.shift();i=1,a?a.t?e(function(){a.t=="c"?D(a):C(a)},0):(a(),B()):i=0}function D(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css";if(!a.e&&(o||j)){var g=function(a){e(function(){if(!d)try{a.sheet.cssRules.length?(d=1,B()):g(a)}catch(b){b.code==1e3||b.message=="security"||b.message=="denied"?(d=1,e(function(){B()},0)):g(a)}},0)};g(c)}else c.onload=function(){d||(d=1,e(function(){B()},0))},a.e&&c.onload();e(function(){d||(d=1,B())},z.errorTimeout),!a.e&&f.parentNode.insertBefore(c,f)}function C(a){var c=b.createElement("script"),d;c.src=a.s,c.onreadystatechange=c.onload=function(){!d&&A(c.readyState)&&(d=1,B(),c.onload=c.onreadystatechange=null)},e(function(){d||(d=1,B())},z.errorTimeout),a.e?c.onload():f.parentNode.insertBefore(c,f)}function B(){var a=1,b=-1;while(h.length- ++b)if(h[b].s&&!(a=h[b].r))break;a&&E()}function A(a){return!a||a=="loaded"||a=="complete"}var d=b.documentElement,e=a.setTimeout,f=b.getElementsByTagName("script")[0],g={}.toString,h=[],i=0,j="MozAppearance"in d.style,k=j&&!!b.createRange().compareNode,l=j&&!k,m=k?d:f.parentNode,n=a.opera&&g.call(a.opera)=="[object Opera]",o="webkitAppearance"in d.style,p=o&&"async"in b.createElement("script"),q=j?"object":n||p?"img":"script",r=o?"img":q,s=Array.isArray||function(a){return g.call(a)=="[object Array]"},t=function(a){return Object(a)===a},u=function(a){return typeof a=="string"},v=function(a){return g.call(a)=="[object Function]"},w=[],x={},y,z;z=function(a){function h(a,b){function i(a){if(u(a))g(a,f,b,0,c);else if(t(a))for(h in a)a.hasOwnProperty(h)&&g(a[h],f,b,h,c)}var c=!!a.test,d=c?a.yep:a.nope,e=a.load||a.both,f=a.callback,h;i(d),i(e),a.complete&&b.load(a.complete)}function g(a,b,d,e,g){var h=f(a),i=h.autoCallback;if(!h.bypass){b&&(b=v(b)?b:b[a]||b[e]||b[a.split("/").pop().split("?")[0]]);if(h.instead)return h.instead(a,b,d,e,g);d.load(h.url,h.forceCSS||!h.forceJS&&/css$/.test(h.url)?"c":c,h.noexec),(v(b)||v(i))&&d.load(function(){H(),b&&b(h.origUrl,g,e),i&&i(h.origUrl,g,e)})}}function f(a){var b=a.split("!"),c=w.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=x[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=w[h](f);return f}var b,d,e=this.yepnope.loader;if(u(a))g(a,0,e,0);else if(s(a))for(b=0;b<a.length;b++)d=a[b],u(d)?g(d,0,e,0):s(d)?z(d):t(d)&&h(d,e);else t(a)&&h(a,e)},z.addPrefix=function(a,b){x[a]=b},z.addFilter=function(a){w.push(a)},z.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",y=function(){b.removeEventListener("DOMContentLoaded",y,0),b.readyState="complete"},0)),a.yepnope=H()})(this,this.document)
// usage: log('inside coolFunc', this, arguments);
window.log = function(){
    log.history = log.history || [];   // store logs to an array for reference
    log.history.push(arguments);
    if(this.console) {
        arguments.callee = arguments.callee.caller;
        console.log( Array.prototype.slice.call(arguments) );
    }
};
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});

//Homefolder of css and images.
var imgData = {
        'save':{'cl':'save','tit':'Save to local storage'},
        'del':{'cl':'delete','tit':'Delete from local storage'},
        'settings':{'cl':'reCssSettings', 'tit':'Settings'}
    };

//Loading reCssItems from local storage
var reCssItems = loadReCssItems();

yepnope([{
    test: window.jQuery,
    nope: 'https://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js'
    },{
    test: (typeof jQuery.ui != 'undefined'),
    nope: 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js',
    complete: function () {
        initReCss(jQuery);
    }
}]);

function initReCss($){
    var htmlArray = [],
        links = $("link[rel='stylesheet']"),
        reCssCon = $('<div id="reCssCon" class="container fixed"></div>');
    appendLinkToHeadAndArray('https://rawgit.com/pascalgagneur/cssinject/master/cssInject.css',links.length);
    reCssCon.html('<div class="sides"><div id="reCssFront" class="face front"></div><div id="reCssBack" class="face back"></div></div>');
    $('body').append(reCssCon);
    //Creating settings
    htmlArray.push('<div id="settings"><h1>Settings</h1>');
    htmlArray.push('<div class="settings"><h2>Fixed</h2>Activate position:fixed<label for="setFixed" class="switch"><div></div></label><input type="checkbox" id="setFixed" checked/></div>');
    htmlArray.push('<div class="settings"><h2>Draggable</h2>Makes the window draggable<label for="setDraggable" class="switch"><div></div></label><input type="checkbox" id="setDraggable"/></div>');
    htmlArray.push('</div>');
    htmlArray.push('<div class="'+imgData.settings.cl+'" title="'+imgData.settings.tit+'"></div>');
    $('#reCssBack').html(htmlArray.join(""));
    // Creating list of css
    htmlArray = [];
    htmlArray.push('<ul id="reCssLinks"><lh>List of css</lh>');
    if(links.length > 0){
        links.each(function(index){
            var name = getFileName(this.href);
            htmlArray.push(creatListElement(this.href,index,name,false));
            $(this).attr('id',"reCssStyle"+index);
        });
    }
    $.each(reCssItems, function(index, value) {
        var length = links.length,
            name;
        if(value.length){
            name = getFileName(value);
            appendLinkToHeadAndArray(value,length);
            htmlArray.push(creatListElement(value,length,name,true,true));
        }
    });
    htmlArray.push("</ul>");
    htmlArray.push('<div id="inputCon"><input type="text" id="reCssInput"/><div id="adNewCss"></div></div></div>');
    htmlArray.push('<div class="'+imgData.settings.cl+'" title="'+imgData.settings.tit+'"></div>');


    $('#reCssFront').html(htmlArray.join(""));
    $('#reCssLinks').delegate('input:checkbox','click',function(e){
        var link = document.getElementById("reCssStyle"+$(this).attr('data-id'));
        if(this.checked){
            link.href=$(this).attr('data-url')+'?forceReload='+(new Date().valueOf());
        } else {
            link.href="";
        }
    });
    $('#reCssLinks').delegate('.refresh','click',function(e){
        reLoadCss($(this).attr('data-id'));
    });
    $('#reCssLinks').delegate('.save','click',function(e){
        saveReCssItem($(this).attr('data-url'));
        $(this).attr({'class':imgData.del.cl,'title':imgData.del.tit});
    });
    $('#reCssLinks').delegate('.delete','click',function(e){
        deleteReCssItem($(this).attr('data-url'));
        $(this).attr({'class':imgData.save.cl,'title':imgData.save.tit});
    });
    $('#reCssInput').keypress(function(event) {
        if ( event.which == 13 ) {
            adNewCssHandler();
        }
    });
    $('.reCssSettings').click(function(){
        $('#reCssCon').toggleClass('flip')
    });
    $('#reCssBack').find("input:checkbox").change(function(e){
        $(this).prev().toggleClass("on");
        if(this.id == 'setFixed'){
            if(this.checked){
                $('#reCssCon').addClass("fixed");
            } else {
                $('#reCssCon').removeClass("fixed");
            }
        } else if(this.id == "setDraggable"){
            if(!$( "#reCssCon.ui-draggable").length){
                $( "#reCssCon" ).draggable();
            }
            $( "#reCssCon" ).draggable( "option", "disabled", !this.checked );
        }
    });


    $('#adNewCss').click(adNewCssHandler);
    function adNewCssHandler(){
    var val = $('#reCssInput').val();
        if(val.length>0){
            var length = links.length,
                name = getFileName(val);
            appendLinkToHeadAndArray(val,length);
            $('#reCssLinks').append(creatListElement(val,length,name,true));
        }
    }

    function appendLinkToHeadAndArray(href,id){
        var link = creatLinkElement(href,id);
        links.push(link);
        $('head').append(link);
    }
}
function loadReCssItems(){
    var storageString = localStorage.getItem('reCssItems');
    if(storageString == null){
        return [];
    }
    return storageString.split(',');
}

function saveReCssItem(href){
    log('Saving:'+href);
    reCssItems.push(href);
    localStorage.setItem('reCssItems', reCssItems.join());
}

function deleteReCssItem(href){
    log('Deleting:'+href);
    var key = jQuery.inArray(href, reCssItems);
    if(key > -1){
        reCssItems.splice(key,1)
    }
    localStorage.setItem('reCssItems', reCssItems.join());
}

function getFileName(href){
    return href.split("/").pop();
}
function creatLinkElement(href,id){
    var link = document.createElement('link');
    link.id = 'reCssStyle'+id;
    link.type = 'text/css';
    link.href = href;
    link.className = 'custom';
    link.rel = 'stylesheet';
    return link;
}

function creatListElement(href,id,name,custom,saved){
    var saveDiv = "";
    if(custom && saved){
        saveDiv = '<div class="'+imgData.del.cl+'" title="'+imgData.del.tit+'" data-url="'+href+'"></div>';
    } else if(custom){
        saveDiv = '<div class="'+imgData.save.cl+'" title="'+imgData.del.tit+'" data-url="'+href+'"></div>';
    }
    return '<li style="clear:both"><input type="checkbox" checked="checked" data-id="'+id+'" data-url="'+href+'"/>'+name+saveDiv+'<div class="refresh" data-id="'+id+'" title="Refresh"></div><div class="info"><div class="rectangle-speech-border"><p>'+href+'</p></div></div></li>'
}
function reLoadCss(id){
    var s=document.getElementById("reCssStyle"+id);
    log(s.href);
    var h=s.href.replace(/(&|\?)forceReload=\d+/,'');
    log(h);
    s.href=h+(h.indexOf('?')>=0?'&':'?')+'forceReload='+(new Date().valueOf());
}
