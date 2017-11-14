function com_kdas_cg_p01_CodeGen01(){
  var $intern_0 = '', $intern_23 = '" for "gwt:onLoadErrorFn"', $intern_21 = '" for "gwt:onPropertyErrorFn"', $intern_8 = '"><\/script>', $intern_10 = '/', $intern_37 = '1DDDBA49A1BDDF4918ECD4D4ECC91756.cache.html', $intern_39 = '398AB1E358D49D2972BB104D1F9058D6.cache.html', $intern_36 = '42ED8AB47ED3C08F37634739D7E2AC2A.cache.html', $intern_7 = '<script id="', $intern_44 = "<script>com_kdas_cg_p01_CodeGen01.onInjectionDone('com.kdas.cg.p01.CodeGen01')<\/script>", $intern_18 = '=', $intern_35 = 'B18E3CFAC27BDB9C111D89911E33D5A8.cache.html', $intern_20 = 'Bad handler "', $intern_40 = 'DOMContentLoaded', $intern_38 = 'FE07CEC24C39DAC7B101590426929E43.cache.html', $intern_9 = 'SCRIPT', $intern_6 = '__gwt_marker_com.kdas.cg.p01.CodeGen01', $intern_11 = 'base', $intern_13 = 'clear.cache.gif', $intern_1 = 'com.kdas.cg.p01.CodeGen01', $intern_17 = 'content', $intern_30 = 'gecko', $intern_31 = 'gecko1_8', $intern_4 = 'gwt.hybrid', $intern_22 = 'gwt:onLoadErrorFn', $intern_19 = 'gwt:onPropertyErrorFn', $intern_16 = 'gwt:property', $intern_34 = 'hosted.html?com_kdas_cg_p01_CodeGen01', $intern_29 = 'ie6', $intern_41 = 'iframe', $intern_12 = 'img', $intern_42 = "javascript:''", $intern_14 = 'meta', $intern_33 = 'moduleRequested', $intern_28 = 'msie', $intern_15 = 'name', $intern_25 = 'opera', $intern_43 = 'position:absolute;width:0;height:0;border:none', $intern_27 = 'safari', $intern_5 = 'selectionDone', $intern_3 = 'selectionStart', $intern_2 = 'startup', $intern_32 = 'unknown', $intern_24 = 'user.agent', $intern_26 = 'webkit';
  var $wnd = window, $doc = document, external = $wnd.external, $stats = $wnd.__gwtstatsEvent?function(a, b, c, d){
    $wnd.__gwtstatsEvent(a, b, c, d);
  }
  :null, scriptsDone, loadDone, bodyDone, base = $intern_0, metaProps = {}, values = [], providers = [], answers = [], onLoadErrorFunc, propertyErrorFunc;
  $stats && $stats($intern_1, $intern_2, $intern_3, {millis:(new Date()).getTime()});
  if (!$wnd.__gwt_stylesLoaded) {
    $wnd.__gwt_stylesLoaded = {};
  }
  if (!$wnd.__gwt_scriptsLoaded) {
    $wnd.__gwt_scriptsLoaded = {};
  }
  function isHostedMode(){
    try {
      return external && (external.gwtOnLoad && $wnd.location.search.indexOf($intern_4) == -1);
    }
     catch (e) {
      return false;
    }
  }

  function maybeStartModule(){
    if (scriptsDone && loadDone) {
      var iframe = $doc.getElementById($intern_1);
      var frameWnd = iframe.contentWindow;
      frameWnd.__gwt_initHandlers = com_kdas_cg_p01_CodeGen01.__gwt_initHandlers;
      if (isHostedMode()) {
        frameWnd.__gwt_getProperty = function(name){
          return computePropValue(name);
        }
        ;
      }
      com_kdas_cg_p01_CodeGen01 = null;
      frameWnd.gwtOnLoad(onLoadErrorFunc, $intern_1, base);
      $stats && $stats($intern_1, $intern_2, $intern_5, {millis:(new Date()).getTime()});
    }
  }

  function computeScriptBase(){
    var thisScript, markerId = $intern_6, markerScript;
    $doc.write($intern_7 + markerId + $intern_8);
    markerScript = $doc.getElementById(markerId);
    thisScript = markerScript && markerScript.previousSibling;
    while (thisScript && thisScript.tagName != $intern_9) {
      thisScript = thisScript.previousSibling;
    }
    function getDirectoryOfFile(path){
      var eq = path.lastIndexOf($intern_10);
      return eq >= 0?path.substring(0, eq + 1):$intern_0;
    }

    ;
    if (thisScript && thisScript.src) {
      base = getDirectoryOfFile(thisScript.src);
    }
    if (base == $intern_0) {
      var baseElements = $doc.getElementsByTagName($intern_11);
      if (baseElements.length > 0) {
        base = baseElements[baseElements.length - 1].href;
      }
       else {
        var loc = $doc.location;
        var href = loc.href;
        base = getDirectoryOfFile(href.substr(0, href.length - loc.hash.length));
      }
    }
     else if (base.match(/^\w+:\/\//)) {
    }
     else {
      var img = $doc.createElement($intern_12);
      img.src = base + $intern_13;
      base = getDirectoryOfFile(img.src);
    }
    if (markerScript) {
      markerScript.parentNode.removeChild(markerScript);
    }
  }

  function processMetas(){
    var metas = document.getElementsByTagName($intern_14);
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name = meta.getAttribute($intern_15), content;
      if (name) {
        if (name == $intern_16) {
          content = meta.getAttribute($intern_17);
          if (content) {
            var value, eq = content.indexOf($intern_18);
            if (eq >= 0) {
              name = content.substring(0, eq);
              value = content.substring(eq + 1);
            }
             else {
              name = content;
              value = $intern_0;
            }
            metaProps[name] = value;
          }
        }
         else if (name == $intern_19) {
          content = meta.getAttribute($intern_17);
          if (content) {
            try {
              propertyErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_20 + content + $intern_21);
            }
          }
        }
         else if (name == $intern_22) {
          content = meta.getAttribute($intern_17);
          if (content) {
            try {
              onLoadErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_20 + content + $intern_23);
            }
          }
        }
      }
    }
  }

  function unflattenKeylistIntoAnswers(propValArray, value){
    var answer = answers;
    for (var i = 0, n = propValArray.length - 1; i < n; ++i) {
      answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
    }
    answer[propValArray[n]] = value;
  }

  function computePropValue(propName){
    var value = providers[propName](), allowedValuesMap = values[propName];
    if (value in allowedValuesMap) {
      return value;
    }
    var allowedValuesList = [];
    for (var k in allowedValuesMap) {
      allowedValuesList[allowedValuesMap[k]] = k;
    }
    if (propertyErrorFunc) {
      propertyErrorFunc(propName, allowedValuesList, value);
    }
    throw null;
  }

  providers[$intern_24] = function(){
    var ua = navigator.userAgent.toLowerCase();
    var makeVersion = function(result){
      return parseInt(result[1]) * 1000 + parseInt(result[2]);
    }
    ;
    if (ua.indexOf($intern_25) != -1) {
      return $intern_25;
    }
     else if (ua.indexOf($intern_26) != -1) {
      return $intern_27;
    }
     else if (ua.indexOf($intern_28) != -1) {
      var result = /msie ([0-9]+)\.([0-9]+)/.exec(ua);
      if (result && result.length == 3) {
        if (makeVersion(result) >= 6000) {
          return $intern_29;
        }
      }
    }
     else if (ua.indexOf($intern_30) != -1) {
      var result = /rv:([0-9]+)\.([0-9]+)/.exec(ua);
      if (result && result.length == 3) {
        if (makeVersion(result) >= 1008)
          return $intern_31;
      }
      return $intern_30;
    }
    return $intern_32;
  }
  ;
  values[$intern_24] = {gecko:0, gecko1_8:1, ie6:2, opera:3, safari:4};
  com_kdas_cg_p01_CodeGen01.onInjectionDone = function(){
    scriptsDone = true;
    $stats && $stats($intern_1, $intern_2, $intern_33, {millis:(new Date()).getTime()});
    maybeStartModule();
  }
  ;
  com_kdas_cg_p01_CodeGen01.onScriptLoad = function(){
    if (frameInjected) {
      loadDone = true;
      maybeStartModule();
    }
  }
  ;
  computeScriptBase();
  processMetas();
  var strongName;
  if (isHostedMode()) {
    strongName = $intern_34;
  }
   else {
    try {
      unflattenKeylistIntoAnswers([$intern_25], $intern_35);
      unflattenKeylistIntoAnswers([$intern_27], $intern_36);
      unflattenKeylistIntoAnswers([$intern_31], $intern_37);
      unflattenKeylistIntoAnswers([$intern_30], $intern_38);
      unflattenKeylistIntoAnswers([$intern_29], $intern_39);
      strongName = answers[computePropValue($intern_24)];
    }
     catch (e) {
      return;
    }
  }
  var onBodyDoneTimerId;
  function onBodyDone(){
    if (!bodyDone) {
      bodyDone = true;
      maybeStartModule();
      if ($doc.removeEventListener) {
        $doc.removeEventListener($intern_40, onBodyDone, false);
      }
      if (onBodyDoneTimerId) {
        clearInterval(onBodyDoneTimerId);
      }
    }
  }

  var frameInjected;
  function maybeInjectFrame(){
    if (!frameInjected) {
      frameInjected = true;
      var iframe = $doc.createElement($intern_41);
      iframe.src = $intern_42;
      iframe.id = $intern_1;
      iframe.style.cssText = $intern_43;
      iframe.tabIndex = -1;
      $doc.body.appendChild(iframe);
      iframe.contentWindow.location.replace(base + strongName);
    }
  }

  if ($doc.addEventListener) {
    $doc.addEventListener($intern_40, function(){
      maybeInjectFrame();
      onBodyDone();
    }
    , false);
  }
  var onBodyDoneTimerId = setInterval(function(){
    if (/loaded|complete/.test($doc.readyState)) {
      maybeInjectFrame();
      onBodyDone();
    }
  }
  , 50);
  $doc.write($intern_44);
}

com_kdas_cg_p01_CodeGen01.__gwt_initHandlers = function(resize, beforeunload, unload){
  var $wnd = window, oldOnResize = $wnd.onresize, oldOnBeforeUnload = $wnd.onbeforeunload, oldOnUnload = $wnd.onunload;
  $wnd.onresize = function(evt){
    try {
      resize();
    }
     finally {
      oldOnResize && oldOnResize(evt);
    }
  }
  ;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = beforeunload();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = function(evt){
    try {
      unload();
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
    }
  }
  ;
}
;
com_kdas_cg_p01_CodeGen01();
