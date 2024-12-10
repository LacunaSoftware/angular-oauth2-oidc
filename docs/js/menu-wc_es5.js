'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _callSuper(this, _class);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">angular-oauth2-oidc</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"changelog.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>CHANGELOG\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"license.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>LICENSE\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter additional\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#additional-pages"' : 'data-bs-target="#xs-additional-pages"', ">\n                            <span class=\"icon ion-ios-book\"></span>\n                            <span>Additional documentation</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"', ">\n                                    <li class=\"link \">\n                                        <a href=\"additional-documentation/getting-started.html\" data-type=\"entity-link\" data-context-id=\"additional\">Getting Started</a>\n                                    </li>\n                                    <li class=\"link \">\n                                        <a href=\"additional-documentation/preserving-state-(like-the-requested-url).html\" data-type=\"entity-link\" data-context-id=\"additional\">Preserving State (like the Requested URL)</a>\n                                    </li>\n                                    <li class=\"link \">\n                                        <a href=\"additional-documentation/refreshing-a-token.html\" data-type=\"entity-link\" data-context-id=\"additional\">Refreshing a Token</a>\n                                    </li>\n                                    <li class=\"link \">\n                                        <a href=\"additional-documentation/silent-refresh.html\" data-type=\"entity-link\" data-context-id=\"additional\">Silent Refresh</a>\n                                    </li>\n                                    <li class=\"link \">\n                                        <a href=\"additional-documentation/token-refresh.html\" data-type=\"entity-link\" data-context-id=\"additional\">Token Refresh</a>\n                                    </li>\n                                    <li class=\"link \">\n                                        <a href=\"additional-documentation/working-with-httpinterceptors.html\" data-type=\"entity-link\" data-context-id=\"additional\">Working with HttpInterceptors</a>\n                                    </li>\n                                    <li class=\"link \">\n                                        <a href=\"additional-documentation/callback-after-login.html\" data-type=\"entity-link\" data-context-id=\"additional\">Callback after login</a>\n                                    </li>\n                                    <li class=\"link \">\n                                        <a href=\"additional-documentation/popup-based-login.html\" data-type=\"entity-link\" data-context-id=\"additional\">Popup-based Login</a>\n                                    </li>\n                                    <li class=\"link \">\n                                        <a href=\"additional-documentation/custom-query-parameters.html\" data-type=\"entity-link\" data-context-id=\"additional\">Custom Query Parameters</a>\n                                    </li>\n                                    <li class=\"link \">\n                                        <a href=\"additional-documentation/events.html\" data-type=\"entity-link\" data-context-id=\"additional\">Events</a>\n                                    </li>\n                                    <li class=\"link \">\n                                        <a href=\"additional-documentation/routing-with-the-hashstrategy.html\" data-type=\"entity-link\" data-context-id=\"additional\">Routing with the HashStrategy</a>\n                                    </li>\n                                    <li class=\"link \">\n                                        <a href=\"additional-documentation/adapt-id_token-validation.html\" data-type=\"entity-link\" data-context-id=\"additional\">Adapt id_token Validation</a>\n                                    </li>\n                                    <li class=\"link \">\n                                        <a href=\"additional-documentation/session-checks.html\" data-type=\"entity-link\" data-context-id=\"additional\">Session Checks</a>\n                                    </li>\n                                    <li class=\"link \">\n                                        <a href=\"additional-documentation/server-side-rendering.html\" data-type=\"entity-link\" data-context-id=\"additional\">Server Side Rendering</a>\n                                    </li>\n                                    <li class=\"link \">\n                                        <a href=\"additional-documentation/configure-library-for-implicit-flow-without-discovery-document.html\" data-type=\"entity-link\" data-context-id=\"additional\">Configure Library for Implicit Flow without discovery document</a>\n                                    </li>\n                                    <li class=\"link \">\n                                        <a href=\"additional-documentation/using-an-id-provider-that-fails-discovery-document-validation.html\" data-type=\"entity-link\" data-context-id=\"additional\">Using an ID Provider that Fails Discovery Document Validation</a>\n                                    </li>\n                                    <li class=\"link \">\n                                        <a href=\"additional-documentation/using-systemjs.html\" data-type=\"entity-link\" data-context-id=\"additional\">Using SystemJS</a>\n                                    </li>\n                                    <li class=\"link \">\n                                        <a href=\"additional-documentation/using-implicit-flow.html\" data-type=\"entity-link\" data-context-id=\"additional\">Using Implicit Flow</a>\n                                    </li>\n                                    <li class=\"link \">\n                                        <a href=\"additional-documentation/using-password-flow.html\" data-type=\"entity-link\" data-context-id=\"additional\">Using Password Flow</a>\n                                    </li>\n                                    <li class=\"link \">\n                                        <a href=\"additional-documentation/configure-custom-oauthstorage.html\" data-type=\"entity-link\" data-context-id=\"additional\">Configure custom OAuthStorage</a>\n                                    </li>\n                                    <li class=\"link \">\n                                        <a href=\"additional-documentation/manually-skipping-login-form.html\" data-type=\"entity-link\" data-context-id=\"additional\">Manually Skipping Login Form</a>\n                                    </li>\n                                    <li class=\"link \">\n                                        <a href=\"additional-documentation/original-config-api.html\" data-type=\"entity-link\" data-context-id=\"additional\">Original Config API</a>\n                                    </li>\n                                    <li class=\"chapter inner\">\n                                        <a data-type=\"chapter-link\" href=\"additional-documentation/authorization-servers.html\" data-context-id=\"additional\">\n                                            <div class=\"menu-toggler linked\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#additional-page-2b1a4fad9e52d9d4ab632322a359d13b5c56587ec14714f91791909bdea17673a33cbbec5bda9a4b51e251e1de7ba270a691c761e665ecc6891c73474d21d242"' : 'data-bs-target="#xs-additional-page-2b1a4fad9e52d9d4ab632322a359d13b5c56587ec14714f91791909bdea17673a33cbbec5bda9a4b51e251e1de7ba270a691c761e665ecc6891c73474d21d242"', ">\n                                                <span class=\"link-name\">Authorization Servers</span>\n                                                <span class=\"icon ion-ios-arrow-down\"></span>\n                                            </div>\n                                        </a>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="additional-page-2b1a4fad9e52d9d4ab632322a359d13b5c56587ec14714f91791909bdea17673a33cbbec5bda9a4b51e251e1de7ba270a691c761e665ecc6891c73474d21d242"' : 'id="xs-additional-page-2b1a4fad9e52d9d4ab632322a359d13b5c56587ec14714f91791909bdea17673a33cbbec5bda9a4b51e251e1de7ba270a691c761e665ecc6891c73474d21d242"', ">\n                                            <li class=\"link for-chapter2\">\n                                                <a href=\"additional-documentation/authorization-servers/using-identity-server.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"additional\">Using Identity Server</a>\n                                            </li>\n                                            <li class=\"link for-chapter2\">\n                                                <a href=\"additional-documentation/authorization-servers/using-keycloak.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"additional\">Using Keycloak</a>\n                                            </li>\n                                            <li class=\"link for-chapter2\">\n                                                <a href=\"additional-documentation/authorization-servers/auth0.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"additional\">Auth0</a>\n                                            </li>\n                                            <li class=\"link for-chapter2\">\n                                                <a href=\"additional-documentation/authorization-servers/azure-ad-(active-directory).html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"additional\">Azure AD (Active Directory)</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/OAuthModule.html\" data-type=\"entity-link\" >OAuthModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#classes-links"' : 'data-bs-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/AbstractValidationHandler.html\" data-type=\"entity-link\" >AbstractValidationHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/AuthConfig.html\" data-type=\"entity-link\" >AuthConfig</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DateTimeProvider.html\" data-type=\"entity-link\" >DateTimeProvider</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Hash.html\" data-type=\"entity-link\" >Hash</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/HashHandler.html\" data-type=\"entity-link\" >HashHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/HMAC.html\" data-type=\"entity-link\" >HMAC</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/JwksValidationHandler.html\" data-type=\"entity-link\" >JwksValidationHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/LoginOptions.html\" data-type=\"entity-link\" >LoginOptions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/NullValidationHandler.html\" data-type=\"entity-link\" >NullValidationHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/OAuthErrorEvent.html\" data-type=\"entity-link\" >OAuthErrorEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/OAuthEvent.html\" data-type=\"entity-link\" >OAuthEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/OAuthInfoEvent.html\" data-type=\"entity-link\" >OAuthInfoEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/OAuthLogger.html\" data-type=\"entity-link\" >OAuthLogger</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/OAuthModuleConfig.html\" data-type=\"entity-link\" >OAuthModuleConfig</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/OAuthNoopResourceServerErrorHandler.html\" data-type=\"entity-link\" >OAuthNoopResourceServerErrorHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/OAuthResourceServerConfig.html\" data-type=\"entity-link\" >OAuthResourceServerConfig</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/OAuthResourceServerErrorHandler.html\" data-type=\"entity-link\" >OAuthResourceServerErrorHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/OAuthStorage.html\" data-type=\"entity-link\" >OAuthStorage</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/OAuthSuccessEvent.html\" data-type=\"entity-link\" >OAuthSuccessEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ReceivedTokens.html\" data-type=\"entity-link\" >ReceivedTokens</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ValidationHandler.html\" data-type=\"entity-link\" >ValidationHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/WebHttpUrlEncodingCodec.html\" data-type=\"entity-link\" >WebHttpUrlEncodingCodec</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links"' : 'data-bs-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/DefaultHashHandler.html\" data-type=\"entity-link\" >DefaultHashHandler</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/MemoryStorage.html\" data-type=\"entity-link\" >MemoryStorage</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/OAuthService.html\" data-type=\"entity-link\" >OAuthService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/SystemDateTimeProvider.html\" data-type=\"entity-link\" >SystemDateTimeProvider</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/UrlHelperService.html\" data-type=\"entity-link\" >UrlHelperService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#interceptors-links"' : 'data-bs-target="#xs-interceptors-links"', ">\n                            <span class=\"icon ion-ios-swap\"></span>\n                            <span>Interceptors</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interceptors/DefaultOAuthInterceptor.html\" data-type=\"entity-link\" >DefaultOAuthInterceptor</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#interfaces-links"' : 'data-bs-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/OidcDiscoveryDoc.html\" data-type=\"entity-link\" >OidcDiscoveryDoc</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ParsedIdToken.html\" data-type=\"entity-link\" >ParsedIdToken</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/TokenResponse.html\" data-type=\"entity-link\" >TokenResponse</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/UserInfo.html\" data-type=\"entity-link\" >UserInfo</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ValidationParams.html\" data-type=\"entity-link\" >ValidationParams</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#miscellaneous-links"' : 'data-bs-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));