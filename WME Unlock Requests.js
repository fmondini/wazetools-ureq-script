// ==UserScript==
// @name        WME Unlock Requests
// @namespace   https://ureq.waze.tools/
// @version     3.0.0.ga
// @author      <a href="https://www.waze.com/en/user/editor/fmondini" target="_blank">fmondini</a>
// @description Send Unlock Requests to UREQ WebApp (https://ureq.waze.tools/)
// @grant		unsafeWindow
// @run-at		document-idle
// @match       https://waze.com/editor*
// @match       https://waze.com/*/editor*
// @match       https://www.waze.com/editor*
// @match       https://www.waze.com/*/editor*
// @match       https://beta.waze.com/editor*
// @match       https://beta.waze.com/*/editor*
// @homepageURL	https://ureq.waze.tools/
// @updateURL	https://code.waze.tools/repository/d323e155-f555-4006-944f-f8757fa59bb2.user.js
// @downloadURL	https://code.waze.tools/repository/d323e155-f555-4006-944f-f8757fa59bb2.user.js
// @supportURL	https://github.com/fmondini/wazetools-ureq-script
// @icon        data:image/png;base64,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
// @copyright   2014-2024 fmondini
// ==/UserScript==



////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  +++ START OF PARAMETERS MODIFIABLE BY THE END USER +++
//
////////////////////////////////////////////////////////////////////////////////////////////////////

const WUREQ_DEBUG = true; // If TRUE use the browser console to output some detailed info on the process (for development purposes only)
const WUREQ_LHOST = true; // If TRUE change the destination server to "localhost" (for development purposes only)

////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  +++ END OF PARAMETERS MODIFIABLE BY THE END USER +++
//
//  It's best not to touch anything after this line unless you know EXACTLY what to do
//
////////////////////////////////////////////////////////////////////////////////////////////////////



/* globals OpenLayers: true */

(function() {

'use strict';

//
// FIXME: It seems that the country is always "IT" for speed cameras, a way needs to be found to get the country code from the camera objects
//

/**
 * ------------------------------------------------------------------------------------
 *  Console helpers class
 * ------------------------------------------------------------------------------------
 */
class WUREQ_ConsoleClass {

	constructor(scriptName) {
		this.PRINT_PREFIX = '[' + scriptName.toUpperCase() + ']'; // LOG Prefix for the console
		this.DEBUG_PREFIX = '[DEBUG]'; // LOG Prefix for the debug console
	}

	Print(msg) { console.log(this.PRINT_PREFIX + ' ' + msg); }
	PrintObj(name, obj) { console.log(this.PRINT_PREFIX + ' ' + name + ': %o', obj); }
	PrintWrn(msg) { console.warn(this.PRINT_PREFIX + ' ' + msg); }
	PrintWrnObj(name, obj) { console.warn(this.PRINT_PREFIX + ' ' + name + ': %o', obj); }
	PrintErr(msg) { console.error(this.PRINT_PREFIX + ' ' + msg); }
	PrintErrObj(name, obj) { console.error(this.PRINT_PREFIX + ' ' + name + ': %o', obj); }
	Debug(msg) { if (WUREQ_DEBUG) { this.Print(this.DEBUG_PREFIX + ' ' + msg); } }
	DebugObj(name, obj) { if (WUREQ_DEBUG) { this.PrintObj(this.DEBUG_PREFIX + ' ' + name, obj); } }
	DebugGroupStart(groupText) { if (WUREQ_DEBUG) { console.groupCollapsed(this.DEBUG_PREFIX + ' ' + groupText); } }
	DebugGroupEnd() { if (WUREQ_DEBUG) { console.groupEnd(); } }
}

/**
 * ------------------------------------------------------------------------------------
 *  Trusted Types class
 * ------------------------------------------------------------------------------------
 */
class WUREQ_TrustedTypesClass {

	#trustedTypesPolicy = null;
	#trustedTypesPolicyName = 'UREQTrustedPolicy';

	/**
	 * Get Trusted Type Policy
	 */
	GetTrustedTypePolicy() {
		return(this.#trustedTypesPolicy);
	}

	/**
	 * Create Trusted Type Policy
	 */
	CreatePolicy() {

		if (window.trustedTypes && window.trustedTypes.createPolicy) {

			this.#trustedTypesPolicy = window.trustedTypes.createPolicy(this.#trustedTypesPolicyName, {
				createHTML: (string) => string,
				createScriptURL(url) {
					return url;
				}
			});

			WUREQ_CONSOLE.DebugObj('WUREQ_TrustedTypesClass.CreatePolicy()', this.#trustedTypesPolicy);
		}
	}

	/**
	 * Check TrustedTypes Enable
	 */
	isTrustedTypesEnabled() {

		var rc = false;

		try {

			if (navigator.userAgent.match(/chrome|chromium|crios/i)) {
				rc = true;
			} else if (navigator.userAgent.match(/edg/i)) {
				rc = true;
			} else if (navigator.userAgent.match(/safari/i)) {
				rc = false;
			} else if (navigator.userAgent.match(/firefox|fxios/i)) {
				rc = false;
			} else if (navigator.userAgent.match(/opr\//i)) {
				rc = true;
			}

		} catch(err) {

			WUREQ_CONSOLE.PrintErrObj('WUREQ_TrustedTypesClass.isTrustedTypesEnabled()', err);
			WUREQ_CONSOLE.PrintErrObj('WUREQ_TrustedTypesClass.isTrustedTypesEnabled(): window.trustedTypes', window.trustedTypes);
		}

		WUREQ_CONSOLE.Debug('WUREQ_TrustedTypesClass.isTrustedTypesEnabled(): ' + rc);

		return(rc);
	}
}

/**
 * ------------------------------------------------------------------------------------
 *  Local Storage helpers class
 * ------------------------------------------------------------------------------------
 */
class WUREQ_LocalStorageClass {

	#keywLastUpdateTime = 'WUREQ_LastUpdateTime'; // Last cfg update datetime keyword
	#keywLastUpdateData = 'WUREQ_LastUpdateData'; // Last cfg update json data keyword

	GetUpdateTime() { return(parseInt(localStorage.getItem(this.#keywLastUpdateTime))); }
	SetUpdateTime(datetime) { localStorage.setItem(this.#keywLastUpdateTime, datetime); }

	GetUpdateData() { return(JSON.parse(localStorage.getItem(this.#keywLastUpdateData))); }
	SetUpdateData(jsondata) { localStorage.setItem(this.#keywLastUpdateData, JSON.stringify(jsondata)); }
}

/**
 * ------------------------------------------------------------------------------------
 *  Configuration class
 * ------------------------------------------------------------------------------------
 */
class WUREQ_ConfigClass {

	#scriptStartDateTime = new Date().getTime();
	#updateIntervalMillis = 60 * 60 * 24 * 1000 * 7; // 7 days in millis
	#ureqConfig = {}; // JSON Config object, to be initialized in GetConfigFromServer()

	/**
	 * Initialize script
	 */
	InitScript() {

		WUREQ_CONSOLE.Debug('WUREQ_ConfigClass.InitScript(START)');
		WUREQ_CONSOLE.DebugObj('WUREQ_ConfigClass.InitScript(): GM_info', GM_info);

		// Warns the user if the development parameters are still active

		if (WUREQ_DEBUG) {
			WUREQ_CONSOLE.PrintWrn('DEBUG MODE ACTIVATED');
		}

		if (WUREQ_LHOST) {
			WUREQ_CONSOLE.PrintWrn('## WARNING ## LHOST MODE ACTIVATED');
			WUREQ_CONSOLE.PrintWrn('## WARNING ## DESTINATION SERVER: "' + WUREQ_APPCONF.GetRemoteServerUrl() + '"');
		}

		// Show some more info

		WUREQ_CONSOLE.Print('Detected Browser Language: "' + (window.navigator.language || window.navigator.userLanguage) + '"');

		//
		// Prepares the Trusted Type Policy, then the whole show begins...
		//

		try {

			WUREQ_TTYPPOL.CreatePolicy();
			WUREQ_APPCONF.GetConfigFromServer();

		} catch(err) {
			WUREQ_CONSOLE.PrintErrObj('WUREQ_ConfigClass.InitScript()', err);
		}

		WUREQ_CONSOLE.Debug('WUREQ_ConfigClass.InitScript(-END-)');
	}

	/**
	 * Get UREQ Config Object
	 */
	GetUreqConfig() {
		return(this.#ureqConfig);
	}

	/**
	 * Set UREQ Config Object
	 */
	SetUreqConfig(cfgData) {
		this.#ureqConfig = cfgData;
	}

	/**
	 * Get Remote Server URL
	 */
	GetRemoteServerUrl() {
		return(
			(WUREQ_LHOST ? 'http://localhost:8080/' : 'https://') + 'ureq.waze.tools'
		);
	}

	/**
	 * Get Remote Config from UREQ Server
	 */
	GetConfigFromServer() {

		WUREQ_CONSOLE.Debug('WUREQ_ConfigClass.GetConfigFromServer(START)');

		WUREQ_CONSOLE.DebugObj('WUREQ_ConfigClass.GetConfigFromServer(): Polling interval', this.#updateIntervalMillis / 1000 + ' secs.');

		try {

			//
			// Time to update the script configuration?
			//

			var currentDatTim = new Date().getTime();
			var cfgLastUpdate = WUREQ_STORAGE.GetUpdateTime();

			if (!Number.isInteger(cfgLastUpdate)) {
				cfgLastUpdate = '0';
			}

			if ((currentDatTim - cfgLastUpdate) > this.#updateIntervalMillis) {

				//
				// Refresh cfg
				//

				WUREQ_CONSOLE.Print('The configuration is old and needs to be updated');

				var cfgUrl = WUREQ_APPCONF.GetRemoteServerUrl() + '/api/cfg/get';

				unsafeWindow.jQuery.ajax({

					url: cfgUrl,
					dataType: 'jsonp',

					data: {
						username: unsafeWindow.W.loginManager.user.getUsername(),
						wme_mail: unsafeWindow.W.loginManager.user.getEmailAddress(),
						language: (window.navigator.language || window.navigator.userLanguage),
						callback: '?'
					},

					beforeSend: function(xhr, settings) {
						WUREQ_CONSOLE.Debug('WUREQ_ConfigClass.GetConfigFromServer(): Calling ' + cfgUrl);
					},

					success: function(result) {

						if (result.rc == 200) {

							WUREQ_CONSOLE.Print('New configuration retrieved from UREQ server');

							WUREQ_APPCONF.SetUreqConfig(result);

							WUREQ_CONSOLE.DebugObj('WUREQ_ConfigClass.GetConfigFromServer(): Success: WUREQ_APPCONF.GetUreqConfig()', WUREQ_APPCONF.GetUreqConfig());

							WUREQ_STORAGE.SetUpdateTime(currentDatTim);
							WUREQ_STORAGE.SetUpdateData(WUREQ_APPCONF.GetUreqConfig());

							WUREQ_APPCONF.ActivateConfig();

						} else {

							WUREQ_CONSOLE.PrintErr('Error retrieving configuration from UREQ server');

							WUREQ_CONSOLE.PrintErrObj('WUREQ_ConfigClass.GetConfigFromServer(): Error: result', result);
							alert('Cannot initialize UREQ Script: result: ERROR ' + result.rc + '\n' + result.error);
						}
					},

					error(xhr)	{
						WUREQ_CONSOLE.PrintErrObj('WUREQ_ConfigClass.GetConfigFromServer(): Error: xhr', xhr);
						alert('Cannot initialize UREQ Script: xhr: ' + xhr.statusText + ' ' + xhr.status);
					}
				});

			} else {

				WUREQ_CONSOLE.Print('No need to update the config, I\'ll use the latest one received @ ' + new Date(cfgLastUpdate).toLocaleString());
				this.SetUreqConfig(WUREQ_STORAGE.GetUpdateData());
				WUREQ_CONSOLE.DebugObj('WUREQ_ConfigClass.GetConfigFromServer(): this.GetUreqConfig()', this.GetUreqConfig());

				this.ActivateConfig();
			}

		} catch(err) {
			WUREQ_CONSOLE.PrintErrObj('WUREQ_ConfigClass.GetConfigFromServer()', err);
			WUREQ_CONSOLE.PrintErrObj('WUREQ_ConfigClass.GetConfigFromServer(): unsafeWindow', unsafeWindow);
		}

		WUREQ_CONSOLE.Debug('WUREQ_ConfigClass.GetConfigFromServer(-END-)');
	}

	/**
	 * Activate CFG
	 */
	ActivateConfig() {

		WUREQ_CONSOLE.Debug('WUREQ_ConfigClass.ActivateConfig(START)');

		this.AddButtonToWME();

		WUREQ_CONSOLE.Print(GM_info.script.name + ' version ' + GM_info.script.version + ' started in ' + (new Date().getTime() - this.#scriptStartDateTime) + ' msec');
		WUREQ_CONSOLE.Debug('WUREQ_ConfigClass.ActivateConfig(-END-)');
	}

	/**
	 * Create and setup WME button
	 */
	AddButtonToWME() {

		WUREQ_CONSOLE.Debug('WUREQ_ConfigClass.AddButtonToWME(START)');

		const WUREQ_btnStart_ID = 'btnUreqStartID';

		// Button

		var WUREQ_btnObj = document.createElement('wz-button');

		WUREQ_btnObj.id = WUREQ_btnStart_ID;
		WUREQ_btnObj.size = 'sm';
		WUREQ_btnObj.color = 'clear-icon';
		WUREQ_btnObj.style = 'padding: 0px'; // 'padding-left: 16px';
		WUREQ_btnObj.className = 'wz-button clear-icon sm with-icon';

		document.getElementById('search').appendChild(WUREQ_btnObj);

		// Icon

		var WUREQ_btnIco = document.createElement('i');

		WUREQ_btnIco.className = 'w-icon w-icon-lock-fill';
		WUREQ_btnIco.style = 'color: #008000';

		WUREQ_btnObj.appendChild(WUREQ_btnIco);

		// Text

		WUREQ_btnObj.appendChild(document.createTextNode('UREQ'));

		// Title

		WUREQ_btnObj.title = 'Create an Unlock Request';

		//
		// Set WME Button Click Listener
		//

		WUREQ_btnObj.addEventListener('click', function() {

			try {

				WUREQ_MAINAPP.CheckSelectedFeatures(); // Throws an exception if no seg/ven/cam selected

				WUREQ_HTMLOBJ.ShowMainForm();

				unsafeWindow.jQuery('#WUREQ_Reason').focus();
				unsafeWindow.jQuery('#WUREQ_Reason').select();

				// Event Listener for: SUBMIT

				document.getElementById('WUREQ_btnSubmit').addEventListener('click', function() {

					const _json_payload = WUREQ_PAYLOAD.Create();

					WUREQ_MAINAPP.SendRequest(_json_payload);

					WUREQ_HTMLOBJ.CloseAllOpenDivs();
				});

				// Event Listener for: CANCEL

				document.getElementById('WUREQ_btnCancel').addEventListener('click', function() {

					WUREQ_HTMLOBJ.CloseAllOpenDivs();
				});

			} catch(err) {

				WUREQ_CONSOLE.PrintErrObj('WUREQ_ConfigClass.AddButtonToWME()', err);

				WUREQ_HTMLOBJ.ShowTimedMsg(
					'<i style="color:Crimson">' + WUREQ_APPCONF.GetUreqConfig().Errors.lblHal9000 + '</i><br><br>',
					err,
					4000
				);
			}
		});

		WUREQ_CONSOLE.Debug('WUREQ_ConfigClass.AddButtonToWME(-END-)');
	}
}

/**
 * ------------------------------------------------------------------------------------
 *  HTML styles class
 * ------------------------------------------------------------------------------------
 */
class WUREQ_HtmlObjectsClass {

	#fontDefaultName = 'Rubik'; // 'Waze Boing'

	DivSeparator = '<div style="height: 1px; background-color: #cccccc"></div>';
	StyleModalBackground = 'position:fixed; display:block; z-index:10998; top:0px; left:0px; width:100%; height:100%; background-color:rgba(0, 0, 0, 0.7)';
	StyleCenteredDiv = 'position:fixed; display:block; z-index:10999; background-color:white; padding:0px; top:50%; left:50%; -webkit-transform:translate(-50%, -50%); transform:translate(-50%, -50%);';
	StyleTextArea = 'height: 150px; color:black; background-color: #ffffe9; width: 100%; padding: 5px; border-width: 0px';

	/**
	 * Create the main form to show to the user
	 */
	ShowMainForm() {

		WUREQ_CONSOLE.Debug('WUREQ_HtmlObjectsClass.ShowMainForm(START)');

		var divRequest;

		// Transparent background (for the modal effect)

		divRequest = document.createElement('div');
		divRequest.id = 'WUREQ_MainDiv_Back';
		divRequest.style.cssText = this.StyleModalBackground;

		unsafeWindow.jQuery('#map').append(divRequest);

		// Main Form Interface

		divRequest = document.createElement('div');
		divRequest.id = 'WUREQ_MainDiv_Form';
		divRequest.style.cssText = this.StyleCenteredDiv;

		divRequest.innerHTML = WUREQ_TTYPPOL.isTrustedTypesEnabled()
			? WUREQ_TTYPPOL.GetTrustedTypePolicy().createHTML(this.GetMainFormUI())
			: this.GetMainFormUI()
		;

		unsafeWindow.jQuery('#map').append(divRequest);

		WUREQ_CONSOLE.Debug('WUREQ_HtmlObjectsClass.ShowMainForm(-END-)');
	}

	/**
	 * Generate the UI Header DIV
	 */
	GetHeaderUI() {

		return(
			'<div style="padding: 8px; background-color: #eeeeee">' +
				'<table width="100%" border="0">' +
					'<tr>' +
						'<td width="80px">' +
							'<a href="https://waze.tools/" target="_blank"><img src="' + GM_info.script.icon + '" width="64px" height="auto" title="Waze.Tools Suite"></a>' +
						'</td>' +
						'<td align="left">' +
							'<div style="font-size: 180%; font-weight: bold; padding-top:8px">' + GM_info.script.name + '</div>' +
							'<div style="font-size: 120%; padding-top:4px">Version ' + GM_info.script.version + ' (' + GM_info.userAgentData.platform + ')</div>' +
							'<div style="font-style: italic; padding-top:2px">Made with love &amp; passion by ' + GM_info.script.author + '</div>' +
						'</td>' +
					'</tr>' +
				'</table>' +
			'</div>' +
			this.DivSeparator
		);
	}

	/**
	 * Generate the UI Waiting DIV
	 */
	GetWaitingUI() {

		return(
			'<div style="font-family: ' + this.#fontDefaultName + '">' +
				this.GetHeaderUI() +
				'<div style="padding: 16px; background-color: white" align="center">' +
					'<div style="font-size:150%; font-weight: bold">' + WUREQ_APPCONF.GetUreqConfig().MainForm.lblCreating + '</div>' +
					'<div style="font-size:120%">' + WUREQ_APPCONF.GetUreqConfig().MainForm.lblPleaseWait + '</div>' +
				'</div>' +
			'</div>'
		);
	}

	/**
	 * Generate the UI Form DIV
	 */
	GetMainFormUI() {

		return(

			'<div style="font-family: ' + this.#fontDefaultName + '">' +

				// HEADER

				this.GetHeaderUI() +

				// USER COMMENTS

				'<div style="padding-left: 8px; padding-right: 8px; background-color: white">' +
					'<div style="padding: 8px">' +
						'<div style="font-size:120%; font-weight: bold; padding-bottom: 4px">' + WUREQ_APPCONF.GetUreqConfig().MainForm.lblCommentsHead + '</div>' +
						'<div style="font-size:85%; font-style: italic; padding-bottom: 8px">' + WUREQ_APPCONF.GetUreqConfig().MainForm.lblCommentsBody + '</div>' +
						'<textarea style="' + this.StyleTextArea + '" id="WUREQ_Reason" name="WUREQ_Reason"></textarea>' +
					'</div>' +
				'</div>' +

				this.DivSeparator +

				// RESOLVE MODE

				'<div style="padding-left: 16px; padding-right: 16px; background-color: white">' +
					'<div style="padding-top: 8px; padding-bottom: 8px">' +
						'<div style="font-size:120%; font-weight: bold">Resolve Mode</div>' +
					'</div>' +
					'<div>' +
						'<input type="radio" name="WUREQ_rboxSolve" id="WUREQ_rboxSolve_Y" value="Y" checked>' +
						'<label style="margin: 0px; padding-left:4px; font-weight:normal" for="WUREQ_rboxSolve_Y">' + WUREQ_APPCONF.GetUreqConfig().MainForm.rbxSolveText + '</label>' +
					'</div>' +
					'<div style="padding-bottom: 8px">' +
						'<input type="radio" name="WUREQ_rboxSolve" id="WUREQ_rboxSolve_N" value="N">' +
						'<label style="margin: 0px; padding-left:4px; font-weight:normal" for="WUREQ_rboxSolve_N">' + WUREQ_APPCONF.GetUreqConfig().MainForm.rbxUnlockText + '</label>' +
					'</div>' +
				'</div>' +

				this.DivSeparator +

				// FOOTER

				'<div style="padding: 8px; background-color: #eeeeee">' +
					'<table width="100%" border="0">' +
						'<tr>' +
							'<td width="15%" align="left">' +
								'<input id="WUREQ_btnCancel" type="button" value="' + WUREQ_APPCONF.GetUreqConfig().MainForm.btnCancelText + '">' +
							'</td>' +
							'<td width="70%" align="center">' +
								'<div style="font-size: 80%; font-style: italic">' + WUREQ_APPCONF.GetUreqConfig().MainForm.lblBugReport + '</div>' +
							'</td>' +
							'<td width="15%" align="right">' +
								'<input id="WUREQ_btnSubmit" type="button" value="' + WUREQ_APPCONF.GetUreqConfig().MainForm.btnSubmitText + '">' +
							'</td>' +
						'</tr>' +
					'</table>' +
				'</div>' +

			'</div>'
		);
	}

	/**
	 * Show timed message
	 */
	ShowTimedMsg(title, msg, timeout) {

		var divResults = '';

		divResults = document.createElement('div');
		divResults.id = 'WUREQ_MainDiv_RMsg';
		divResults.style.cssText = this.StyleCenteredDiv;

		divResults.innerHTML =
			'<div style="font-family: ' + this.#fontDefaultName + '">' +
				this.GetHeaderUI() +
				'<div style="padding: 16px; background-color: white" align="center">' +
					(title == null ? '' : '<div style="font-size:150%;">' + title + '</div>') +
					'<div style="font-size:120%">' + msg + '</div>' +
				'</div>' +
			'</div>' +
			this.DivSeparator
		;

		unsafeWindow.jQuery('#map').append(divResults);

		document.getElementById('WUREQ_MainDiv_RMsg').addEventListener('click', function() {
			unsafeWindow.jQuery('#WUREQ_MainDiv_RMsg').remove();
		});

		setTimeout(function(){
			unsafeWindow.jQuery('#WUREQ_MainDiv_RMsg').remove();
		}, timeout);
	}

	/**
	 * Closes all open UREQ windows
	 */
	CloseAllOpenDivs() {

		WUREQ_CONSOLE.Debug('WUREQ_HtmlObjectsClass.CloseAllOpenDivs(START)');

		unsafeWindow.jQuery('#WUREQ_MainDiv_Form').remove();
		unsafeWindow.jQuery('#WUREQ_MainDiv_Back').remove();

		WUREQ_CONSOLE.Debug('WUREQ_HtmlObjectsClass.CloseAllOpenDivs(-END-)');
	}
}

/**
 * ------------------------------------------------------------------------------------
 *  MAIN Class
 * ------------------------------------------------------------------------------------
 */
class WUREQ_MainClass {

	/**
	 * Get the specified object type
	 */
	GetSelectedObjectType(SelectedFeatureElement) {

		var selObjType = '';

		try {

			selObjType = SelectedFeatureElement._wmeObject.type;

		} catch(err) {

			WUREQ_CONSOLE.PrintErr('WUREQ_MainClass.GetSelectedObjectType(): ' + err);
			WUREQ_CONSOLE.DebugObj('WUREQ_MainClass.GetSelectedObjectType(): SelectedFeatureElement: ', SelectedFeatureElement);

			throw new Error('Error getting ObjectType: ' + err);
		}

		return(selObjType);
	}

	/**
	 * Get an array of selected objects
	 */
	GetSelectedObjectsArray(objType) {

		const SelectedFeatures = unsafeWindow.W.selectionManager.getSelectedFeatures();

		var i, selObjId = 0, selObjType = '', objArray = [];

		for (i = 0; i < SelectedFeatures.length; i++) {

			selObjType = WUREQ_MAINAPP.GetSelectedObjectType(SelectedFeatures[i]);

			if (selObjType == objType) {

				selObjId = WUREQ_FEATURE.GetSelectedObjectId(SelectedFeatures[i]);

				objArray.push(selObjId);
			}
		}

		WUREQ_CONSOLE.DebugObj('WUREQ_MainClass.GetSelectedObjectsArray("' + objType + '")', objArray);

		return(objArray);
	}

	/**
	 * Check Object Selection (must be at least one)
	 */
	CheckSelectedFeatures() {

		const seglist = WUREQ_MAINAPP.GetSelectedObjectsArray('segment');
		const venlist = WUREQ_MAINAPP.GetSelectedObjectsArray('venue');
		const camlist = WUREQ_MAINAPP.GetSelectedObjectsArray('camera');

		WUREQ_CONSOLE.DebugObj('WUREQ_MainClass.CheckSelectedFeatures(): seglist', seglist);
		WUREQ_CONSOLE.DebugObj('WUREQ_MainClass.CheckSelectedFeatures(): venlist', venlist);
		WUREQ_CONSOLE.DebugObj('WUREQ_MainClass.CheckSelectedFeatures(): camlist', camlist);

		if ((seglist.length + venlist.length + camlist.length) == 0) {
			throw WUREQ_APPCONF.GetUreqConfig().Errors.lblNoSelObj
		}
	}

	/**
	 * Send request to UREQ server (or localhost if WUREQ_LHOST is true)
	 */
	SendRequest(_json_payload) {

		unsafeWindow.jQuery.ajax({

			url: WUREQ_APPCONF.GetRemoteServerUrl() + '/api/req/add',
			dataType: 'jsonp',

			data: {
				payload: JSON.stringify(_json_payload),
				callback: '?'
			},

			beforeSend: function() {

				WUREQ_CONSOLE.Print(WUREQ_APPCONF.GetUreqConfig().MainForm.lblCreating + ', ' + WUREQ_APPCONF.GetUreqConfig().MainForm.lblPleaseWait);

				var divWait = document.createElement('div');

	            divWait.id = 'WUREQ_MainDiv_Wait';
				divWait.style.cssText = WUREQ_HTMLOBJ.StyleCenteredDiv;

	            divWait.innerHTML = WUREQ_TTYPPOL.isTrustedTypesEnabled()
					? WUREQ_TTYPPOL.GetTrustedTypePolicy().createScriptURL(WUREQ_HTMLOBJ.GetWaitingUI())
					: WUREQ_HTMLOBJ.GetWaitingUI()
				;

	            unsafeWindow.jQuery('#map').append(divWait);
			},

			success: function(result) {

				WUREQ_CONSOLE.DebugObj('WUREQ_MainClass.SendRequest(): Success: result', result);

				if (result.rc == 200) {
	                WUREQ_CONSOLE.Print(WUREQ_APPCONF.GetUreqConfig().Results.lblBodyOK + ' - RequestID: ' + result.lastid);
					WUREQ_HTMLOBJ.ShowTimedMsg(
						'<b style="color:ForestGreen">' + WUREQ_APPCONF.GetUreqConfig().Results.lblHeadOK + '</b>',
						'<span style="color:ForestGreen">' + WUREQ_APPCONF.GetUreqConfig().Results.lblBodyOK + '</span><br><br>RequestID: <b>' + result.lastid + '</b>',
						2500
					);
				} else {
	                WUREQ_CONSOLE.PrintErr(WUREQ_APPCONF.GetUreqConfig().Results.lblHeadKO + '. ' + WUREQ_APPCONF.GetUreqConfig().Errors.lblHal9000 + ' - ' + result.error);
					WUREQ_HTMLOBJ.ShowTimedMsg(
						'<b style="color:Crimson">' + WUREQ_APPCONF.GetUreqConfig().Results.lblHeadKO + '</b>',
						'<i style="color:Crimson">' + WUREQ_APPCONF.GetUreqConfig().Errors.lblHal9000 + '</i><br><small>' + result.error + '</small>',
						5000
					);
				}
			},

			error(xhr)	{

	            WUREQ_CONSOLE.PrintErr(WUREQ_APPCONF.GetUreqConfig().Results.lblHeadKO + '. ' + xhr.statusText + ' ' + xhr.status);
				WUREQ_CONSOLE.PrintErrObj('WUREQ_MainClass.SendRequest(): AJAX: xhr', xhr);

				WUREQ_HTMLOBJ.ShowTimedMsg(
					'<div style="color:Crimson; font-weight:bold">' + WUREQ_APPCONF.GetUreqConfig().Results.lblHeadKO + '</div>',
					'<i>' + WUREQ_APPCONF.GetUreqConfig().Errors.lblHal9000 + '</i>' +
					'<br>' +
					'<br>' +
					'<i style="color:Crimson">' + xhr.statusText + ' ' + xhr.status + '</i><br>' +
					'<small><i>See browser console (F12) for more details (if available)</i></small>',
					5000
				);
	        },

			complete() {

				unsafeWindow.jQuery('#WUREQ_MainDiv_Wait').remove();
			}
		});
	}
}

/**
 * ------------------------------------------------------------------------------------
 * Feature Object(s) process class
 * ------------------------------------------------------------------------------------
 */
class WUREQ_FeatureClass {

	/**
	 * Get Object Country (ISO 3166-1 alpha-2, 2 chars)
	 */
	GetIso3166CountryCode(SelectedFeatureElement) {

		WUREQ_CONSOLE.DebugObj('WUREQ_FeatureClass.GetIso3166CountryCode(): SelectedFeatureElement', SelectedFeatureElement);

		var CountryIso3166 = 'XX';

		try {

			const selObjType = WUREQ_MAINAPP.GetSelectedObjectType(SelectedFeatureElement)
			WUREQ_CONSOLE.DebugObj('WUREQ_FeatureClass.GetIso3166CountryCode(): selObjType', selObjType);

			if (selObjType == 'segment' || selObjType == 'venue') {

				CountryIso3166 = SelectedFeatureElement._wmeObject.getAddress().getCountry().attributes.abbr;

			} else if (selObjType == 'camera') {

				CountryIso3166 = 'IT'; // *** FIXME *** Where to find the country code of the camera?
				WUREQ_CONSOLE.PrintWrn('WUREQ_FeatureClass.GetIso3166CountryCode(): Camera country code unknown, forced to "' + CountryIso3166 + '"')

			} else {

				WUREQ_CONSOLE.PrintErr('WUREQ_FeatureClass.GetIso3166CountryCode(): UNKNOWN selObjType: ' + selObjType);
			}

		} catch(err) {

			WUREQ_CONSOLE.PrintErr('WUREQ_FeatureClass.GetIso3166CountryCode(): Error getting Country: ' + err);
		}

		WUREQ_CONSOLE.DebugObj('WUREQ_FeatureClass.GetIso3166CountryCode(): Computed ISO 3166 Country', CountryIso3166);

		return(CountryIso3166);
	}

	/**
	 * Get highest lock value from selected objects
	 */
	GetHighestLock(selectedFeatures) {

	    var i = 0;
	    var Lock = 0;
	    var MaxLock = 0;
	    var selObjType = '';

	    for (i = 0; i < selectedFeatures.length; i++) {

	        WUREQ_CONSOLE.DebugObj('WUREQ_FeatureClass.GetHighestLock(): selectedFeatures[' + i + ']', selectedFeatures[i]);

	        selObjType = WUREQ_MAINAPP.GetSelectedObjectType(selectedFeatures[i]);

	        if (selObjType == 'segment' || selObjType == 'venue') {

				Lock = selectedFeatures[i]._wmeObject.getLockRank() + 1;

	        } else if (selObjType == 'camera') {

				var _rank = selectedFeatures[i]._wmeObject.attributes.rank;
	            WUREQ_CONSOLE.DebugObj('WUREQ_FeatureClass.GetHighestLock(): _rank', _rank);

				var _lockRank = selectedFeatures[i]._wmeObject.attributes.lockRank;
	            WUREQ_CONSOLE.DebugObj('WUREQ_FeatureClass.GetHighestLock(): _lockRank', _lockRank);

	            if (_lockRank == null) {
	                Lock = _rank + 1; // AUTO
	            } else {
	                Lock = _lockRank + 1; // MANUAL
	            }
	        }

    	    MaxLock = (Lock > MaxLock ? Lock : MaxLock);
	    }

	    WUREQ_CONSOLE.DebugObj('WUREQ_FeatureClass.GetHighestLock(): MaxLock Returned', MaxLock);

	    return(MaxLock);
	}

	/**
	 * Get the specified object id
	 */
	GetSelectedObjectId(SelectedFeatureElement) {

	    var selObjId = 0;

	    try {

			selObjId = SelectedFeatureElement._wmeObject.attributes.id;

	    } catch(err) {

            WUREQ_CONSOLE.PrintErr('WUREQ_FeatureClass.GetSelectedObjectId(): ' + err);
            throw new Error('Error getting ObjectID: ' + err);
	    }

	    return(selObjId);
	}

	/**
	 * Get Object Address
	 */
	GetAddress(SelectedFeatureElement) {

	    WUREQ_CONSOLE.DebugObj('WUREQ_FeatureClass.GetAddress(): SelectedFeatureElement', SelectedFeatureElement);

		var address = 'ADDRESS ERROR';

	    const selObjType = WUREQ_MAINAPP.GetSelectedObjectType(SelectedFeatureElement);

	    if (selObjType == 'segment') {

	        try {

				const wmeAddress = SelectedFeatureElement._wmeObject.getAddress();
				const _tmpCountry = wmeAddress.getCountryName();
				const _tmpState = wmeAddress.getStateName();
				const _tmpCity = wmeAddress.getCityName();
				const _tmpStreet = wmeAddress.getStreetName();

				address =
					('[' + _tmpCountry + ":" + _tmpState + '] ') +
					(_tmpCity == '' ? 'No City' : _tmpCity) + ', ' +
					(_tmpStreet == null ? 'No Address' : _tmpStreet)
				;

	        } catch(err) {
	            WUREQ_CONSOLE.PrintErrObj('WUREQ_FeatureClass.GetAddress(): Error getting segment attributes', err);
	        }

	    } else if (selObjType == 'venue') {

	        try {

				const wmeAddress = SelectedFeatureElement._wmeObject.getAddress();
				const _tmpCountry = wmeAddress.getCountryName();
				const _tmpState = wmeAddress.getStateName();
				const _tmpCity = wmeAddress.getCityName();
				const _venueName = SelectedFeatureElement._wmeObject.getName();
				const _venueCategory = SelectedFeatureElement._wmeObject.getCategories()[0];

				address =
					('[' + _tmpCountry + ":" + _tmpState + '] ') +
					(_tmpCity) +
					(' (' + (_venueName == '' ? _venueCategory : _venueName) + ')')
				;

	        } catch(err) {
	            WUREQ_CONSOLE.PrintErrObj('WUREQ_FeatureClass.GetAddress(): Error getting venue attributes', err);
	        }

	    } else if (selObjType == 'camera') {

	        try {

				const _cameraSpeed = SelectedFeatureElement._wmeObject.attributes.speed;
				address = '[Unknown] Speed Camera (' + _cameraSpeed + ' Km/h)';

	        } catch(err) {
	            WUREQ_CONSOLE.PrintErrObj('WUREQ_FeatureClass.GetAddress(): Error getting camera attributes', err);
	        }

	    } else {
	        WUREQ_CONSOLE.PrintErrObj('WUREQ_FeatureClass.GetAddress(): UNKNOWN selObjType', selObjType);
	    }

	    WUREQ_CONSOLE.DebugObj('WUREQ_FeatureClass.GetAddress(): Computed Address', address);

		return(address);
	}
}

/**
 * ------------------------------------------------------------------------------------
 *  JSON Payload for UREQ API class
 * ------------------------------------------------------------------------------------
 */
class WUREQ_PayloadClass {

	/**
	 * Get Map Center Coords
	 */
	GetMapCenter() {

		var mapCenter_EPSG900913 = unsafeWindow.W.controller.map.getCenter();

		return(
			new OpenLayers.LonLat(mapCenter_EPSG900913.lon, mapCenter_EPSG900913.lat).transform(
				new OpenLayers.Projection('EPSG:900913'),
				new OpenLayers.Projection('EPSG:4326')
			)
		);
	}

	/**
	 * Create Payload
	 */
	Create() {

		// Check

		const seglist = WUREQ_MAINAPP.GetSelectedObjectsArray('segment');
		const venlist = WUREQ_MAINAPP.GetSelectedObjectsArray('venue');
		const camlist = WUREQ_MAINAPP.GetSelectedObjectsArray('camera');

	    if ((seglist.length + venlist.length + camlist.length) == 0) {
	    	throw WUREQ_APPCONF.GetUreqConfig().Errors.lblNoSelObj
		}

		// Payload

	    WUREQ_CONSOLE.DebugObj('WUREQ_PayloadClass.Create(): seglist', seglist);
	    WUREQ_CONSOLE.DebugObj('WUREQ_PayloadClass.Create(): venlist', venlist);
	    WUREQ_CONSOLE.DebugObj('WUREQ_PayloadClass.Create(): camlist', camlist);

		const SelectedFeatures = unsafeWindow.W.selectionManager.getSelectedFeatures();

	    const payload = {
			"source": GM_info.script.version,
			"solve": unsafeWindow.jQuery('input[name=WUREQ_rboxSolve]:checked').val().toUpperCase() == 'Y',
			"reason": unsafeWindow.jQuery('#WUREQ_Reason').val(),
			"wazer": {
	            "user": unsafeWindow.W.loginManager.user.getUsername(),
				"mail": unsafeWindow.W.loginManager.user.getEmailAddress(),
				"rank": unsafeWindow.W.loginManager.user.getRank() + 1
			},
			"editor": {
				"env": unsafeWindow.W.app.getAppRegionCode(),
				"zoom": unsafeWindow.W.map.getZoom(),
				"lat": this.GetMapCenter().lat,
				"lon": this.GetMapCenter().lon,
				"address": WUREQ_FEATURE.GetAddress(SelectedFeatures[0]),
				"country": WUREQ_FEATURE.GetIso3166CountryCode(SelectedFeatures[0])
			},
			"objects": {
				"lock": WUREQ_FEATURE.GetHighestLock(SelectedFeatures),
				"seglist": seglist,
				"venlist": venlist,
				"camlist": camlist
			}
		};

	    // Done

		WUREQ_CONSOLE.DebugObj('WUREQ_PayloadClass.Create(): Computed Payload', payload);

		return(payload);
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  ENTRY POINT - Script execution starts here
//
////////////////////////////////////////////////////////////////////////////////////////////////////

const WUREQ_CONSOLE = new WUREQ_ConsoleClass('WUREQ');

try {

	var WUREQ_APPCONF = new WUREQ_ConfigClass();
	var WUREQ_TTYPPOL = new WUREQ_TrustedTypesClass();
	var WUREQ_STORAGE = new WUREQ_LocalStorageClass();
	var WUREQ_HTMLOBJ = new WUREQ_HtmlObjectsClass();
	var WUREQ_MAINAPP = new WUREQ_MainClass();
	var WUREQ_FEATURE = new WUREQ_FeatureClass();
	var WUREQ_PAYLOAD = new WUREQ_PayloadClass();

} catch(err) {
	WUREQ_CONSOLE.PrintErrObj('MAIN: ERROR', err);
}

document.addEventListener('wme-ready',
	WUREQ_APPCONF.InitScript,
	{
		once: true
	}
);

////////////////////////////////////////////////////////////////////////////////////////////////////
//
// SCRIPT END - So long, and thanks for all the fish.
//
////////////////////////////////////////////////////////////////////////////////////////////////////

})();
