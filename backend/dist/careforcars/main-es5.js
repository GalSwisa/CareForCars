function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/api.service.ts":
  /*!********************************!*\
    !*** ./src/app/api.service.ts ***!
    \********************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.baseURL = 'http://localhost:8000/api/';
        this.headers = {
          'content-type': 'application/json'
        };
      } //Returns all the products from the products collection


      _createClass(ApiService, [{
        key: "getProduct",
        value: function getProduct() {
          return this.http.get(this.baseURL + 'getAllProducts');
        } // Adds a new product to the cart collection. If the product already exists, it increases it's amount by 1.

      }, {
        key: "addProductToCart",
        value: function addProductToCart(product) {
          console.log(product.Amount);

          if (product.Amount == 0) {
            product.userEmail = localStorage.getItem('currentUser');
            product.Amount = 1;

            var _body = JSON.stringify(product);

            console.log(_body);
            return this.http.post(this.baseURL + 'addToCart', _body, {
              headers: this.headers
            });
          }

          product.userEmail = localStorage.getItem('currentUser');
          product.Amount++;
          var body = JSON.stringify(product);
          console.log(body);
          return this.http.put(this.baseURL + 'updateCartItem/' + product.SerialNumber, body, {
            headers: this.headers
          });
        }
      }, {
        key: "updateProductFromCart",
        value: function updateProductFromCart(product, data) {
          if (localStorage.getItem('currentUser') != data.userEmail) {
            console.log(data.userEmail);
            var newProduct = new Product(Math.floor(Math.random() * 1000000 + product.SerialNumber + 1).toString(), product.Name, product.Price, product.Category, product.Description, product.imgUrl, localStorage.getItem('currentUser'), 1);
            console.log(newProduct);

            var _body2 = JSON.stringify(newProduct);

            console.log(_body2);
            return this.http.post(this.baseURL + 'addToCart', _body2, {
              headers: this.headers
            });
          }

          data.Amount = data.Amount + 1;
          var body = JSON.stringify(data);
          return this.http.put(this.baseURL + 'updateCartItem/' + product.SerialNumber, body, {
            headers: this.headers
          });
        } // Removes the product from the cart. If it contains more than one, it decreases it's amount by 1.

      }, {
        key: "removeProductFromCart",
        value: function removeProductFromCart(product) {
          if (product.Amount == 1) {
            return this.http["delete"](this.baseURL + 'deleteCartItem/' + product.SerialNumber);
          }

          product.Amount = product.Amount - 1;
          var body = JSON.stringify(product);
          return this.http.put(this.baseURL + 'updateCartItem/' + product.SerialNumber, body, {
            headers: this.headers
          });
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return this.http.get(this.baseURL + 'getUser/:userEmail');
        }
      }, {
        key: "getSpecificUser",
        value: function getSpecificUser(userEmail) {
          return this.http.get(this.baseURL + 'getUser/' + userEmail);
        }
      }, {
        key: "addUser",
        value: function addUser(user) {
          var body = JSON.stringify(user);
          console.log(body);
          return this.http.post(this.baseURL + 'createUser', body, {
            headers: this.headers
          });
        } //Returns a specific product from the cart collection (if it exists)

      }, {
        key: "getSpecificItemFromCart",
        value: function getSpecificItemFromCart(product) {
          return this.http.get(this.baseURL + 'getSpecificCartItem/' + product.SerialNumber);
        } //Returns the cart of a certain username (Using the email param as an ID)

      }, {
        key: "getCart",
        value: function getCart() {
          return this.http.get(this.baseURL + 'getCart/' + localStorage.getItem('currentUser'));
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();

    var Product = function Product(SerialNumber, Name, Price, Category, Description, imgUrl, userEmail, Amount) {
      _classCallCheck(this, Product);

      this.SerialNumber = SerialNumber;
      this.Name = Name;
      this.Price = Price;
      this.Category = Category;
      this.Description = Description;
      this.imgUrl = imgUrl;
      this.userEmail = userEmail;
      this.Amount = Amount;
    };
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contacts/contacts.component */
    "./src/app/contacts/contacts.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _info_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./info/info.component */
    "./src/app/info/info.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pagenotfound/pagenotfound.component */
    "./src/app/pagenotfound/pagenotfound.component.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/products/products.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");

    var routes = [{
      path: '',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'products',
      component: _products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"]
    }, {
      path: 'products/:SerialNumber',
      component: _info_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"]
    }, {
      path: 'cart',
      component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]
    }, {
      path: 'contacts',
      component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"]
    }, {
      path: '**',
      component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__["PagenotfoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'CareForCars';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contacts/contacts.component */
    "./src/app/contacts/contacts.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pagenotfound/pagenotfound.component */
    "./src/app/pagenotfound/pagenotfound.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/product/product.component.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/products/products.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _info_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./info/info.component */
    "./src/app/info/info.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_10__["PagenotfoundComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"], _info_info_component__WEBPACK_IMPORTED_MODULE_15__["InfoComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_10__["PagenotfoundComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"], _info_info_component__WEBPACK_IMPORTED_MODULE_15__["InfoComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cart/cart.component.ts":
  /*!****************************************!*\
    !*** ./src/app/cart/cart.component.ts ***!
    \****************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");

    function CartComponent_table_14_tr_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "i", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_table_14_tr_16_Template_i_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var i_r4 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r5.checkCategoryAdd(i_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "svg", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "path", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "i", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_table_14_tr_16_Template_i_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var i_r4 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r7.checkCategoryRemove(i_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "svg", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "path", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", i_r4.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r4.Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Category: ", i_r4.Category, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", i_r4.Price * i_r4.Amount, "$");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r4.Amount);
      }
    }

    function CartComponent_table_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Product");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Quantity");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Add/Remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CartComponent_table_14_tr_16_Template, 28, 5, "tr", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tr", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.arr);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Proceed to Pay ", ctx_r0.totalPrice, "$ ");
      }
    }

    function CartComponent_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Your shopping cart is empty.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var CartComponent = /*#__PURE__*/function () {
      function CartComponent(apiService) {
        _classCallCheck(this, CartComponent);

        this.apiService = apiService;
        this.arr = [];
        this.totalPrice = 0;
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log(localStorage.getItem('currentUser'));
          var obsData = this.apiService.getCart().subscribe(function (data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.calcStartingTotalPrice(data);
                      this.arr = data;

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
          console.log(obsData);
          console.log(this.arr);
          this.empty = this.checkEmpty();
        }
      }, {
        key: "checkEmpty",
        value: function checkEmpty() {
          if (this.arr == null) {
            return false;
          }

          return true;
        }
      }, {
        key: "checkCategoryRemove",
        value: function checkCategoryRemove(product) {
          this.apiService.removeProductFromCart(product).subscribe(function (data) {
            console.log(data);
          });
          this.reduceTotalPrice(product);
        }
      }, {
        key: "checkCategoryAdd",
        value: function checkCategoryAdd(product) {
          this.apiService.addProductToCart(product).subscribe(function (data) {
            console.log(data);
          });
          this.calcTotalPrice();
        }
      }, {
        key: "calcStartingTotalPrice",
        value: function calcStartingTotalPrice(data) {
          var _iterator = _createForOfIteratorHelper(data),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var product = _step.value;
              this.totalPrice += product.Price * product.Amount;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          console.log(this.totalPrice);
        }
      }, {
        key: "calcTotalPrice",
        value: function calcTotalPrice() {
          this.totalPrice = 0;

          var _iterator2 = _createForOfIteratorHelper(this.arr),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var product = _step2.value;
              this.totalPrice += product.Price * product.Amount;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          console.log(this.totalPrice);
        }
      }, {
        key: "reduceTotalPrice",
        value: function reduceTotalPrice(product) {
          window.location.reload();
          console.log(product.Amount);

          if (product.Amount == 0) {
            console.log('test');
            this.router.navigateByUrl('register');
          }

          this.totalPrice -= product.Price;
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ɵfac = function CartComponent_Factory(t) {
      return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
    };

    CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CartComponent,
      selectors: [["app-cart"]],
      decls: 18,
      vars: 2,
      consts: [[1, "px-4", "px-lg-0"], [1, "container", "text-white", "py-5", "text-center"], [1, "display-4", 2, "color", "black"], [1, "lead", "mb-0", 2, "color", "black"], ["width", "200", "height", "170", "src", "https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-donations-shopping-carts-forms-membershipworks-21.png"], [1, "pb-5"], [1, "container"], [1, "row"], [1, "col-lg-12", "p-5", "bg-white", "rounded", "shadow-sm", "mb-5"], [1, "table-responsive"], ["class", "table", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "table"], ["scope", "col", 1, "border-0", "bg-light"], [1, "p-2", "px-3", "text-uppercase"], [1, "py-2", "text-uppercase"], [4, "ngFor", "ngForOf"], ["scope", "row", 1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-centerbg-white", "rounded"], ["type", "button", 1, "btn", "btn-warning", "btn-block", "btn-lg", "ml-2", "pay-button"], ["scope", "row", 1, "border-0"], [1, "p-2"], ["alt", "", "width", "70", "height", "70", 1, "img-fluid", "rounded", "shadow-sm", 3, "src"], [1, "ml-3", "d-inline-block", "align-middle"], [1, "mb-0"], ["href", "#", 1, "text-dark", "d-inline-block", "align-middle"], [1, "text-muted", "font-weight-normal", "font-italic", "d-block"], [1, "border-0", "align-middle"], [1, "text-dark", "font-weight-bold"], [1, "fa", "fa-trash", 3, "click"], ["type", "button", 1, "btn", "btn-secondary"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-plus"], ["d", "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"], [1, "visually-hidden"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-dash"], ["d", "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"], [1, "d-flex", "justify-content-center"]],
      template: function CartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Personal shopping cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Here you can manage your purchase, enjoy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CartComponent_table_14_Template, 23, 2, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CartComponent_ng_template_15_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.empty)("ngIfElse", _r1);
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-cart',
          templateUrl: './cart.component.html',
          styleUrls: ['./cart.component.css']
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contacts/contacts.component.ts":
  /*!************************************************!*\
    !*** ./src/app/contacts/contacts.component.ts ***!
    \************************************************/

  /*! exports provided: ContactsComponent */

  /***/
  function srcAppContactsContactsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsComponent", function () {
      return ContactsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");

    var ContactsComponent = /*#__PURE__*/function () {
      function ContactsComponent(userService) {
        _classCallCheck(this, ContactsComponent);

        this.userService = userService;
      }

      _createClass(ContactsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactsComponent;
    }();

    ContactsComponent.ɵfac = function ContactsComponent_Factory(t) {
      return new (t || ContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactsComponent,
      selectors: [["app-contacts"]],
      decls: 56,
      vars: 0,
      consts: [[1, "d-flex", "p-2", "col-example", "d-flex", "justify-content-center"], [2, "margin", "1%"], [1, "col-lg-16"], [1, "text-center", "card-box"], [1, "member-card", "pt-2", "pb-2"], [1, "thumb-lg", "member-thumb", "mx-auto"], ["src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi4rZ-MTImnutkFUDVCpg-WtOUoxnIxKqxg&usqp=CAU", 1, "rounded-circle", "img-thumbnail"], [1, ""], [1, "text-success"], ["href", "#", 1, "text-pink"], ["src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwHucwrMNHpqX-BJROPP0Irl2XQLiHKJ-og&usqp=CAU", 1, "rounded-circle", "img-thumbnail"]],
      template: function ContactsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Gal Swisa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ID: 204396170");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Phone:0548087960");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "College: Ort Braude");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Address: Kiryat-Atta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Software Engineering");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Galswisa@walla.co.il");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Elior Libilya");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "ID: 313442865");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Phone:0507496095");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "College: Ort Braude");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Address: Maalot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Software Engineering");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Elior750@gmial.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]],
      styles: ["body[_ngcontent-%COMP%]{\r\n    background:#DCDCDC;\r\n    margin-top:20px;\r\n}\r\n.card-box[_ngcontent-%COMP%] {\r\n    padding: 80px;\r\n    border-radius: 15px;\r\n    margin-bottom: 60px;\r\n    background-color: rgb(190, 243, 240);\r\n}\r\n.social-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n    color: rgba(121, 121, 121, .8);\r\n    display: inline-block;\r\n    height: 30px;\r\n    line-height: 27px;\r\n    border: 2px solid rgba(121, 121, 121, .5);\r\n    text-align: center;\r\n    width: 30px\r\n}\r\n.social-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #797979;\r\n    border: 2px solid #797979\r\n}\r\n.thumb-lg[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 88px;\r\n}\r\n.img-thumbnail[_ngcontent-%COMP%] {\r\n    padding: .16rem;\r\n    background-color: rgb(15, 11, 11);\r\n    border: 1px solid #08070c;\r\n    border-radius: .25rem;\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n.text-pink[_ngcontent-%COMP%] {\r\n    color: #f81b1b!important;\r\n}\r\n.btn-rounded[_ngcontent-%COMP%] {\r\n    border-radius: 12em;\r\n}\r\n.text-muted[_ngcontent-%COMP%] {\r\n    color: #12a7f1!important;\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n    line-height: 22px;\r\n    font-size: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixvQ0FBb0M7QUFDeEM7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQjtBQUNKO0FBRUE7SUFDSSxjQUFjO0lBQ2Q7QUFDSjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgYmFja2dyb3VuZDojRENEQ0RDO1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG59XHJcbi5jYXJkLWJveCB7XHJcbiAgICBwYWRkaW5nOiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkwLCAyNDMsIDI0MCk7XHJcbn1cclxuXHJcbi5zb2NpYWwtbGlua3MgbGkgYSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjogcmdiYSgxMjEsIDEyMSwgMTIxLCAuOCk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTIxLCAxMjEsIDEyMSwgLjUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMwcHhcclxufVxyXG5cclxuLnNvY2lhbC1saW5rcyBsaSBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNzk3OTc5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzc5Nzk3OVxyXG59XHJcbi50aHVtYi1sZyB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDg4cHg7XHJcbn1cclxuLmltZy10aHVtYm5haWwge1xyXG4gICAgcGFkZGluZzogLjE2cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxMSwgMTEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzA4MDcwYztcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4udGV4dC1waW5rIHtcclxuICAgIGNvbG9yOiAjZjgxYjFiIWltcG9ydGFudDtcclxufVxyXG4uYnRuLXJvdW5kZWQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJlbTtcclxufVxyXG4udGV4dC1tdXRlZCB7XHJcbiAgICBjb2xvcjogIzEyYTdmMSFpbXBvcnRhbnQ7XHJcbn1cclxuaDQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contacts',
          templateUrl: './contacts.component.html',
          styleUrls: ['./contacts.component.css']
        }]
      }], function () {
        return [{
          type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 6,
      vars: 0,
      consts: [[1, "bg-info", "text-dark"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Care4Cars");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Created by Elior Libilya & Gal swisa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Location : Israel , Phone : 04-9977842 , \xA9 Copy rights ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["footer[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    bottom:0px;\r\n    width:100%;\r\n    padding: 0.2% 9%;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTowcHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcGFkZGluZzogMC4yJSA5JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../product.service */
    "./src/app/product.service.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["/products", a1];
    };

    function HomeComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "More Info");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r2 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", card_r2.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r2.Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r2.Description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, card_r2.SerialNumber));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imgnew, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function HomeComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "More Info");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r3 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", card_r3.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r3.Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r3.Description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, card_r3.SerialNumber));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.imgsell, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(pService) {
        _classCallCheck(this, HomeComponent);

        this.pService = pService;
        this.onsell = [];
        this["new"] = [];
        this.imgsell = "http://cdn.onlinewebfonts.com/svg/img_163761.png";
        this.imgnew = "https://image.flaticon.com/icons/png/512/650/650058.png";
      }

      _createClass(HomeComponent, [{
        key: "onSell",
        value: function onSell() {
          for (var i = 4, k = 0; i < this.pService.getAll().length; i += 5) {
            this.onsell[k++] = this.pService.getAll()[i];
            console.log(this.onsell[i]);
          }
        }
      }, {
        key: "onNew",
        value: function onNew() {
          for (var i = 0, k = 0; i < this.pService.getAll().length; i += 5) {
            this["new"][k++] = this.pService.getAll()[i];
            console.log(this["new"][i]);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.onSell();
          this.onNew();
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 27,
      vars: 2,
      consts: [[1, "text-center", "text-dark"], [1, "cover-container", "d-flex", "w-100", "h-100", "p-3", "mx-auto", "flex-column"], [1, "card-footer", "text-dark", "bg-light"], [1, "lead"], ["width", "200", "height", "170", "src", "data:image/png;base64,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"], [1, "mt-auto", "text-white-50"], [2, "color", "rgb(89, 240, 69)"], [1, "row", "p-md-5"], ["class", "col-md-3 mb-3 ", 4, "ngFor", "ngForOf"], [1, "col-md-3", "mb-3"], [1, "card", "h-100"], [1, "card-body"], ["width", "200px", "height", "200px", "alt", "Card image cap", 1, "img-fluid", "rounded", "mb-5", "mb-lg-4", "p-3", "mb-5", "bg-white", "rounded", "border", "border-dark", 3, "src"], [1, "card-title", "text-dark"], [1, "text-dark"], [1, "card-footer"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [2, "height", "40px", "width", "40px", 3, "src"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome to Care4Cars!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Care4Cars is THE best online website for your car! feel free to search for things for your car from a wide variety of products! have a nice stay!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "footer", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "main", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " in store!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomeComponent_div_18_Template, 12, 7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "main", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Do not miss our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "sales!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HomeComponent_div_25_Template, 12, 7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.onsell);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx["new"]);
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/info/info.component.ts":
  /*!****************************************!*\
    !*** ./src/app/info/info.component.ts ***!
    \****************************************/

  /*! exports provided: InfoComponent */

  /***/
  function srcAppInfoInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoComponent", function () {
      return InfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../product.service */
    "./src/app/product.service.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var InfoComponent = /*#__PURE__*/function () {
      function InfoComponent(actRoute, pService) {
        _classCallCheck(this, InfoComponent);

        this.actRoute = actRoute;
        this.pService = pService;
        this.product = [];
      }

      _createClass(InfoComponent, [{
        key: "Search",
        value: function Search() {
          var _this2 = this;

          this.product.forEach(function (i) {
            if (i.SerialNumber == _this2.actSerialNumber) {
              _this2.current = i;
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.actSerialNumber = this.actRoute.snapshot.params["SerialNumber"];
          this.product = this.pService.getAll();
          this.Search();
        }
      }]);

      return InfoComponent;
    }();

    InfoComponent.ɵfac = function InfoComponent_Factory(t) {
      return new (t || InfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]));
    };

    InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoComponent,
      selectors: [["app-info"]],
      decls: 22,
      vars: 6,
      consts: [["id", "venue", 1, "py-5", 2, "background-color", "#E0E0E0"], [1, "container"], [1, "row", "bg-primary", "animate-in-down"], [1, "p-4", "col-md-6", "align-self-center", "text-color"], [1, "m-0", "h1"], [1, "my-4"], [1, "h3", "text-right", "font-weight-bold"], [1, "p-0", "col-md-6"], [1, "carousel", "slide"], ["role", "listbox", 1, "carousel-inner"], [1, "d-block", "img-fluid", "w-100", 3, "src"]],
      template: function InfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.current.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Category: ", ctx.current.Category, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("SerialNumber: ", ctx.current.SerialNumber, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.current.Description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.current.Price, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.current.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      styles: [".text-color[_ngcontent-%COMP%] {\r\n    color: #fff\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2luZm8vaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50ZXh0LWNvbG9yIHtcclxuICAgIGNvbG9yOiAjZmZmXHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-info',
          templateUrl: './info.component.html',
          styleUrls: ['./info.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_small_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "invalid email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_small_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "invalid password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_small_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email & Password didn't match");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(userService, apiService, router) {
        _classCallCheck(this, LoginComponent);

        this.userService = userService;
        this.apiService = apiService;
        this.router = router;
        this.f = true;
        this.users = [];
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          localStorage.clear();
          this.userService.getUser().subscribe(function (data) {
            console.log(data);
            _this3.users = data;
          });
          console.log(this.users);
        }
      }, {
        key: "login",
        value: function login(loginForm) {
          console.log(this.users);

          var _iterator3 = _createForOfIteratorHelper(this.users),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var user = _step3.value;

              if (user.email == loginForm.value.email && user.password == loginForm.value.password) {
                localStorage.setItem('currentUser', user.email);
                this.router.navigateByUrl('home');
                return;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          this.f = false;
          console.log('invalid user');
        }
      }, {
        key: "register",
        value: function register(loginForm) {
          this.router.navigateByUrl('register');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 33,
      vars: 4,
      consts: [["src", "assets/img/logo.png", 1, "center"], [1, "sidenav"], [1, "login-main-text"], [1, "main"], [1, "col-md-5", "col-sm-10", "mx-auto"], [1, "login-form"], ["loginForm", "ngForm"], [1, "form-group"], ["type", "text", "placeholder", "Email", "name", "email", "ngModel", "", "required", "", "email", "", 1, "form-control"], ["email", "ngModel"], ["style", "color: red", 4, "ngIf"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["type", "password", "placeholder", "Password", "name", "password", "ngModel", "", "required", "", "password", "", "minlength", "8", 1, "form-control"], ["password", "ngModel"], ["type", "submit", 1, "btn", "btn-black", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-secondary", 3, "click"], [2, "color", "red"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " to Care4Cars");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Log in or register and start taking care of your car!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", null, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_small_19_Template, 2, 0, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "small", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "We'll never share your info with anyone else.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, LoginComponent_small_27_Template, 2, 0, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, LoginComponent_small_28_Template, 2, 0, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            return ctx.login(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            return ctx.register(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(_r1 == null ? null : _r1.valid) && ((_r1 == null ? null : _r1.dirty) || (_r1 == null ? null : _r1.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(_r3 == null ? null : _r3.valid) && ((_r3 == null ? null : _r3.dirty) || (_r3 == null ? null : _r3.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.f);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"]],
      styles: [".ng-valid[required][_ngcontent-%COMP%]{\r\n    border-left: 5px solid #42a948;\r\n}\r\n.ng-invalid[_ngcontent-%COMP%]:not(form){\r\n    border-left: 5px solid #a94442;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n}\r\n.main-head[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n    background: #FFF;\r\n   \r\n}\r\n.sidenav[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    background-color: #000;\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n}\r\n.main[_ngcontent-%COMP%] {\r\n    padding: 0px 10px;\r\n}\r\n@media screen and (max-height: 450px) {\r\n    .sidenav[_ngcontent-%COMP%] {padding-top: 15px;}\r\n}\r\n@media screen and (max-width: 450px) {\r\n    .login-form[_ngcontent-%COMP%]{\r\n        margin-top: 10%;\r\n    }\r\n\r\n    .register-form[_ngcontent-%COMP%]{\r\n        margin-top: 10%;\r\n    }\r\n}\r\n@media screen and (min-width: 768px){\r\n    .main[_ngcontent-%COMP%]{\r\n        margin-left: 40%; \r\n    }\r\n\r\n    .sidenav[_ngcontent-%COMP%]{\r\n        width: 40%;\r\n        position: fixed;\r\n        z-index: 1;\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n\r\n    .login-form[_ngcontent-%COMP%]{\r\n        margin-top: 20%;\r\n    }\r\n\r\n    .register-form[_ngcontent-%COMP%]{\r\n        margin-top: 20%;\r\n    }\r\n}\r\n.login-main-text[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    margin-top: 40%;\r\n    padding: 60px;\r\n}\r\n.login-main-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-weight: 300;\r\n}\r\n.btn-black[_ngcontent-%COMP%]{\r\n    background-color: #000 !important;\r\n    color: #fff;\r\n}\r\n.center[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFJQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7O0FBRXBCO0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFHQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksVUFBVSxpQkFBaUIsQ0FBQztBQUNoQztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKO0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixlQUFlO1FBQ2YsVUFBVTtRQUNWLE1BQU07UUFDTixPQUFPO0lBQ1g7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKO0FBR0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7QUFDakI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFdBQVc7QUFDZjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7O0VBRXBCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy12YWxpZFtyZXF1aXJlZF17XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MmE5NDg7XHJcbn1cclxuLm5nLWludmFsaWQ6bm90KGZvcm0pe1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xyXG59XHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuXHJcbi5tYWluLWhlYWR7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgXHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuXHJcbi5tYWluIHtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAgIC5zaWRlbmF2IHtwYWRkaW5nLXRvcDogMTVweDt9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAubG9naW4tZm9ybXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZ2lzdGVyLWZvcm17XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAubWFpbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDAlOyBcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZW5hdntcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dpbi1mb3Jte1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIH1cclxuXHJcbiAgICAucmVnaXN0ZXItZm9ybXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubG9naW4tbWFpbi10ZXh0e1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiA0MCU7XHJcbiAgICBwYWRkaW5nOiA2MHB4O1xyXG59XHJcblxyXG4ubG9naW4tbWFpbi10ZXh0IGgye1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmJ0bi1ibGFja3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();

    var User = function User(email, password) {
      _classCallCheck(this, User);

      this.email = email;
      this.password = password;
    };
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logOut",
        value: function logOut() {
          localStorage.clear();
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 26,
      vars: 0,
      consts: [[1, "sticky-top", "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["src", "assets/img/logo.png", "width", "50", "height", "50"], ["href", "/home", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "active"], ["routerLink", "/home", "routerLinkActive", "active-link", 1, "nav-link"], [1, "sr-only"], ["routerLink", "/products", "routerLinkActive", "active-link", 1, "nav-link"], ["routerLink", "/cart", "routerLinkActive", "active-link", 1, "nav-link"], ["routerLink", "/contacts", "routerLinkActive", "active-link", 1, "nav-link"], [1, "navbar-nav", "flex-row", "ml-md-auto", "d-none", "d-md-flex"], ["routerLink", "/login", 1, "nav-link", "text-dark", 3, "click"], [2, "color", "red"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Care4Cars");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Prouducts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_23_listener() {
            return ctx.logOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: [".active-link[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZS1saW5re1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pagenotfound/pagenotfound.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
    \********************************************************/

  /*! exports provided: PagenotfoundComponent */

  /***/
  function srcAppPagenotfoundPagenotfoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function () {
      return PagenotfoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var PagenotfoundComponent = /*#__PURE__*/function () {
      function PagenotfoundComponent() {
        _classCallCheck(this, PagenotfoundComponent);

        this.img = "https://www.run2.co.uk/wp-content/uploads/2016/10/error404.jpg";
      }

      _createClass(PagenotfoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PagenotfoundComponent;
    }();

    PagenotfoundComponent.ɵfac = function PagenotfoundComponent_Factory(t) {
      return new (t || PagenotfoundComponent)();
    };

    PagenotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PagenotfoundComponent,
      selectors: [["app-pagenotfound"]],
      decls: 5,
      vars: 1,
      consts: [[1, "d-flex", "justify-content-center"], ["height", "500px", 3, "src"]],
      template: function PagenotfoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagenotfoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pagenotfound',
          templateUrl: './pagenotfound.component.html',
          styleUrls: ['./pagenotfound.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/product.service.ts":
  /*!************************************!*\
    !*** ./src/app/product.service.ts ***!
    \************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProductService = /*#__PURE__*/function () {
      function ProductService() {
        _classCallCheck(this, ProductService);
      }

      _createClass(ProductService, [{
        key: "getAddons",
        value: function getAddons() {
          return [new Addons("1", "Profi-Car Additive", 50, "Addons", "A 5kg weight", "https://images-na.ssl-images-amazon.com/images/I/91e89XFkCKL._AC_SL1500_.jpg"), new Addons("2", "8kg dumbbells", 80, "Weights", "A 8kg weight", "https://images-na.ssl-images-amazon.com/images/I/81ysScVLWfL._AC_SL1500_.jpg"), new Addons("3", "10kg dumbbells", 100, "Weights", "A 10kg weight", "https://images-na.ssl-images-amazon.com/images/I/91QxtmB7tEL._AC_SL1500_.jpg"), new Addons("4", "12kg dumbbells", 120, "Weights", "A 12kg weight", "https://images-na.ssl-images-amazon.com/images/I/71di6xw1uhL._AC_SL1500_.jpg"), new Addons("5", "15kg dumbbells", 150, "Weights", "A 15kg weight", "https://images-na.ssl-images-amazon.com/images/I/61fQM3z3r0L._AC_SL1000_.jpg")];
        }
      }, {
        key: "getOils",
        value: function getOils() {
          return [new Oils("6", "Wooden Rings", 150, "BodyweightEquipment", "Olympic Wooden Rings.", "https://images-na.ssl-images-amazon.com/images/I/71%2BYlSOIsGL._AC_SL1500_.jpg"), new Oils("7", "Pull up bar", 90, "BodyweightEquipment", "Pull up bar for a door.", "https://images-na.ssl-images-amazon.com/images/I/71EzizrzGYL._AC_SL1500_.jpg"), new Oils("8", "Parallettes", 200, "BodyweightEquipment", "Parallettes for pushing movements.", "https://images-na.ssl-images-amazon.com/images/I/61zSQePQfZL._AC_SL1500_.jpg"), new Oils("9", "Push up stands", 100, "BodyweightEquipment", "Push up stands for functional push up exercises", "https://images-na.ssl-images-amazon.com/images/I/61H0NmTLOWL._AC_SL1500_.jpg"), new Oils("10", "Resistance Bands", 40, "BodyweightEquipment", "Resistance Bands for Workout Body Stretching, Powerlifting, Resistance Training", "https://images-na.ssl-images-amazon.com/images/I/71VnlhCil3L._AC_SL1500_.jpg")];
        }
      }, {
        key: "getTires",
        value: function getTires() {
          return [new Tires("11", "GOODYEAR Tire", 250, "Tires", "Premium Quality Tire made in Israel!", "https://static.wixstatic.com/media/2cd43b_8c0bc0e07d0a4eaa8a68bc1c3c2d68b0~mv2.png/v1/fill/w_320,h_320,fp_0.50_0.50/2cd43b_8c0bc0e07d0a4eaa8a68bc1c3c2d68b0~mv2.png"), new Tires("12", "Bridgestone Tire", 300, "Tires", "Premium Quality Tire made in Israel!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpA9c9CUodHI9I9m_nQ8LvsyDPoegFtUo-g&usqp=CAU"), new Tires("13", "Michelin Tire", 200, "Tires", "Premium Quality Tire made in France!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb01ChmmqYw-X1aEIlmKkn1MjTBTUtx8e_ujmfWVAHTTimONkTWhEEePyME3v3v8ZMn78XyxA&usqp=CAc"), new Tires("14", "Hankook Tire", 350, "Tires", "Premium Quality Tire made in Japan!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwb-gv4_MFgiuyb3SkQ-U6FMS6e3HQYOyQGvOM8CkpDxuI70XChFyxIa9_vOfzcrEMXOtVhiFW&usqp=CAc"), new Tires("15", "Continental Tire", 400, "Tires", "Premium Quality Tire made in germany!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_gcPNUFI5KiYHy9ArLzrdxvyTUkU4UA4uZNYXCVRfAP7Org6zzcWqDzy92GIiTXcAObD28jK&usqp=CAc")];
        }
      }, {
        key: "getSportWatch",
        value: function getSportWatch() {
          return [new Batterys("50", "AAA Battery", 550, "Batterys", "Premium Quality Car Battery made in Israel!", "https://www.aaa.com/AAA/common/AAR/images/battery-check-thumb.png"), new Batterys("51", "Palma Battery", 300, "Batterys", "Premium Quality Car Battery made in Spain!", "http://sc04.alicdn.com/kf/HTB1YmVjamcqBKNjSZFg760_kXXaJ.png"), new Batterys("52", "Schnapp Battery", 600, "Batterys", "Premium Quality Car Battery made in Israel!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAXwyq4h3HnH5uZwVoefXz7GWWpdtEJz7g-UtBQE8L-eaRBdbHuJM0GVONtDrRUzz_WuA_MV8&usqp=CAc"), new Batterys("53", "Bosch Battery", 450, "Batterys", "Premium Quality Car Battery made in Italy!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2mrhEyCZ4OtlzYzFBh1o9SvYmUCJU4HGekuNjyFaAmRIr4gAUGPgkG9BQLjWv8M4W_SqmBLx&usqp=CAc"), new Batterys("54", "Varta Battery", 800, "Batterys", "Premium Quality Car Battery made in germany!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRippNR-bm7r377KZT8A66cczY1OZjQ8DdTgSpkGF0sbo5gjXxaw1jDuht_OtsQx4dJtxDQ&usqp=CAc")];
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return [new Addons("1", "Profi-Car Additive", 80, "Addons", "Premium Additive made in gernamy!", "https://www.profi-car.com/files/public/pic-60272-motoren-l-additiv-mit-mos2-d2d5e_1435.png?1588597414"), new Addons("2", "Liqui Moly Additive", 50, "Addons", "Top rated Additive made in gernamy!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSD4M5DaiOYJqTpBD84N5GCgL18vJIGfOlcA&usqp=CAU"), new Addons("3", "Prestone Additive", 75, "Addons", "Premium Additive made in the USA!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMmOixeMz_rnKO9yt2TL2aGILOhUJ0_6lmTg&usqp=CAU"), new Addons("4", "4K Additive", 100, "Addons", "Top Rated Additive made in Israel!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH8KTheIfPQP-rvbuhGSalflP_nzGDfTr0vXh0Wx_-jSE1Jb4zkPygg_PHEcTpw0xgkZZoQE&usqp=CAc"), new Addons("5", "STP Additive", 60, "Addons", "Premium Additive made in Israel!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK3ZMSjmKjAr-vPsquiqkcG7sxABDtf2Y1sUVq_1W-pJ-FP58tOSpU_fZmnw&usqp=CAc"), new Oils("6", "VAPRO Engine Oil", 60, "Oils", "Premium Engine Oil made in germany!", "https://www.pngarts.com/files/3/Engine-Oil-Download-PNG-Image.png"), new Oils("7", "Castrol Engine Oil", 50, "Oils", "Premium Engine Oil Made in germany!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-D_VqwsWa-ecmI_wGZuz2H6nHIMO8zGECw&usqp=CAU"), new Oils("8", "Motul Engine Oil", 45, "Oils", "Premium Engine Oil made in China!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlru2ksl2MsTMwQiecVwiHXE49QeBGBqPodWlffMb5JJO7aUForC7KtSlv1QedDXoTdptUOsW-&usqp=CAc"), new Oils("9", "ZIC Engine Oil", 90, "Oils", "Premium Engine Oil made in Israel!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlidITppjwSN8smK6cJRfkoNkXwvJ9C-MFyw&usqp=CAU"), new Oils("10", "ELF Engine Oil", 55, "Oils", "Premium Engine Oil made in France", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwgmX_0IJjjhwmH0YpoigfbCH3fa_iTv8CCQ&usqp=CAU"), new Tires("11", "GOODYEAR Tire", 250, "Tires", "Premium Quality Tire made in Israel!", "https://static.wixstatic.com/media/2cd43b_8c0bc0e07d0a4eaa8a68bc1c3c2d68b0~mv2.png/v1/fill/w_320,h_320,fp_0.50_0.50/2cd43b_8c0bc0e07d0a4eaa8a68bc1c3c2d68b0~mv2.png"), new Tires("12", "Bridgestone Tire", 300, "Tires", "Premium Quality Tire made in Israel!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpA9c9CUodHI9I9m_nQ8LvsyDPoegFtUo-g&usqp=CAU"), new Tires("13", "Michelin Tire", 200, "Tires", "Premium Quality Tire made in France!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb01ChmmqYw-X1aEIlmKkn1MjTBTUtx8e_ujmfWVAHTTimONkTWhEEePyME3v3v8ZMn78XyxA&usqp=CAc"), new Tires("14", "Hankook Tire", 350, "Tires", "Premium Quality Tire made in Japan!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwb-gv4_MFgiuyb3SkQ-U6FMS6e3HQYOyQGvOM8CkpDxuI70XChFyxIa9_vOfzcrEMXOtVhiFW&usqp=CAc"), new Tires("15", "Continental Tire", 400, "Tires", "Premium Quality Tire made in germany!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_gcPNUFI5KiYHy9ArLzrdxvyTUkU4UA4uZNYXCVRfAP7Org6zzcWqDzy92GIiTXcAObD28jK&usqp=CAc"), new Batterys("16", "AAA Battery", 550, "Batterys", "Premium Quality Car Battery made in Israel!", "https://www.aaa.com/AAA/common/AAR/images/battery-check-thumb.png"), new Batterys("17", "Palma Battery", 300, "Batterys", "Premium Quality Car Battery made in Spain!", "http://sc04.alicdn.com/kf/HTB1YmVjamcqBKNjSZFg760_kXXaJ.png"), new Batterys("18", "Schnapp Battery", 600, "Batterys", "Premium Quality Car Battery made in Israel!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAXwyq4h3HnH5uZwVoefXz7GWWpdtEJz7g-UtBQE8L-eaRBdbHuJM0GVONtDrRUzz_WuA_MV8&usqp=CAc"), new Batterys("19", "Bosch Battery", 450, "Batterys", "Premium Quality Car Battery made in Italy!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2mrhEyCZ4OtlzYzFBh1o9SvYmUCJU4HGekuNjyFaAmRIr4gAUGPgkG9BQLjWv8M4W_SqmBLx&usqp=CAc"), new Batterys("20", "Varta Battery", 800, "Batterys", "Premium Quality Car Battery made in germany!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRippNR-bm7r377KZT8A66cczY1OZjQ8DdTgSpkGF0sbo5gjXxaw1jDuht_OtsQx4dJtxDQ&usqp=CAc")];
        }
      }]);

      return ProductService;
    }();

    ProductService.ɵfac = function ProductService_Factory(t) {
      return new (t || ProductService)();
    };

    ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    var Addons = function Addons(SerialNumber, Name, Price, Category, Description, imgUrl) {
      _classCallCheck(this, Addons);

      this.SerialNumber = SerialNumber, this.Name = Name, this.Price = Price, this.Category = Category, this.Description = Description, this.imgUrl = imgUrl;
    };

    var Oils = function Oils(SerialNumber, Name, Price, Category, Description, imgUrl) {
      _classCallCheck(this, Oils);

      this.SerialNumber = SerialNumber, this.Name = Name, this.Price = Price, this.Category = Category, this.Description = Description, this.imgUrl = imgUrl;
    };

    var Tires = function Tires(SerialNumber, Name, Price, Category, Description, imgUrl) {
      _classCallCheck(this, Tires);

      this.SerialNumber = SerialNumber, this.Name = Name, this.Price = Price, this.Category = Category, this.Description = Description, this.imgUrl = imgUrl;
    };

    var Batterys = function Batterys(SerialNumber, Name, Price, Category, Description, imgUrl) {
      _classCallCheck(this, Batterys);

      this.SerialNumber = SerialNumber, this.Name = Name, this.Price = Price, this.Category = Category, this.Description = Description, this.imgUrl = imgUrl;
    };
    /***/

  },

  /***/
  "./src/app/product/product.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/product/product.component.ts ***!
    \**********************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ProductComponent_div_2_div_1_div_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Well done!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " You successfully added this product to the cart. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["/products", a1];
    };

    function ProductComponent_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h6", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Free shipping");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_2_div_1_Template_button_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.addCart(product_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProductComponent_div_2_div_1_div_32_Template, 4, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r1.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Serial Number : ", product_r1.SerialNumber, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r1.Description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", product_r1.Price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, product_r1.SerialNumber));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.checkAdd && ctx_r2.selectedProduct == product_r1);
      }
    }

    function ProductComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductComponent_div_2_div_1_Template, 33, 9, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1.Category == ctx_r0.selectedCategory);
      }
    }

    var ProductComponent = /*#__PURE__*/function () {
      function ProductComponent(apiService) {
        _classCallCheck(this, ProductComponent);

        this.apiService = apiService;
        this.products = [];
      }

      _createClass(ProductComponent, [{
        key: "addCart",
        value: function addCart(product) {
          var _this4 = this;

          this.checkAdd = true;
          this.selectedProduct = product;
          this.apiService.getSpecificItemFromCart(product).subscribe(function (data) {
            if (data.length == 0) {
              _this4.apiService.addProductToCart(product).subscribe(function (data) {
                console.log(data);
              });
            } else {
              _this4.apiService.updateProductFromCart(product, data[0]).subscribe(function (data) {
                console.log(data);
              });
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.apiService.getProduct().subscribe(function (data) {
            console.log;
            _this5.products = data;
          });
          this.selectedCategory = 'Weights';
          this.checkAdd = false;
          this.selectedProduct = '';
        }
      }]);

      return ProductComponent;
    }();

    ProductComponent.ɵfac = function ProductComponent_Factory(t) {
      return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
    };

    ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductComponent,
      selectors: [["app-product"]],
      inputs: {
        selectedCategory: "selectedCategory"
      },
      decls: 3,
      vars: 1,
      consts: [[1, "container", "mt-5", "mb-5"], [1, "d-flex", "justify-content-center", "row"], ["class", "col-md-10", 4, "ngFor", "ngForOf"], [1, "col-md-10"], ["class", "row p-2 bg-white border rounded mt-2", 4, "ngIf"], [1, "row", "p-2", "bg-white", "border", "rounded", "mt-2"], [1, "col-md-3", "mt-1"], [1, "img-fluid", "img-responsive", "rounded", "product-image", "border", "border-dark", 3, "src"], [1, "col-md-6", "mt-1"], [1, "d-flex", "flex-row"], [1, "ratings", "mr-2"], [1, "fa", "fa-star"], [1, "text-justify", "text-truncate", "para", "mb-0"], [1, "align-items-center", "align-content-center", "col-md-3", "border-left", "mt-1"], [1, "d-flex", "flex-row", "align-items-center"], [1, "mr-1"], [1, "strike-text"], [1, "text-success"], [1, "d-flex", "flex-column", "mt-4"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", "mt-2", 3, "click"], ["class", "alert alert-success fade show", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success", "fade", "show"]],
      template: function ProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductComponent_div_2_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n    background: rgb(238, 238, 238)\r\n}\r\n\r\n.ratings[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    color: red\r\n}\r\n\r\n.strike-text[_ngcontent-%COMP%] {\r\n    color: red;\r\n    text-decoration: line-through\r\n}\r\n\r\n.product-image[_ngcontent-%COMP%] {\r\n    width: 100%\r\n}\r\n\r\n.dot[_ngcontent-%COMP%] {\r\n    height: 7px;\r\n    width: 7px;\r\n    margin-left: 6px;\r\n    margin-right: 6px;\r\n    margin-top: 3px;\r\n    background-color: blue;\r\n    border-radius: 50%;\r\n    display: inline-block\r\n}\r\n\r\n.spec-1[_ngcontent-%COMP%] {\r\n    color: #938787;\r\n    font-size: 15px\r\n}\r\n\r\nh5[_ngcontent-%COMP%] {\r\n    font-weight: 400\r\n}\r\n\r\n.para[_ngcontent-%COMP%] {\r\n    font-size: 16px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1Y7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZDtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIzOCwgMjM4LCAyMzgpXHJcbn1cclxuXHJcbi5yYXRpbmdzIGkge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IHJlZFxyXG59XHJcblxyXG4uc3RyaWtlLXRleHQge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoXHJcbn1cclxuXHJcbi5wcm9kdWN0LWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlXHJcbn1cclxuXHJcbi5kb3Qge1xyXG4gICAgaGVpZ2h0OiA3cHg7XHJcbiAgICB3aWR0aDogN3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG59XHJcblxyXG4uc3BlYy0xIHtcclxuICAgIGNvbG9yOiAjOTM4Nzg3O1xyXG4gICAgZm9udC1zaXplOiAxNXB4XHJcbn1cclxuXHJcbmg1IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDBcclxufVxyXG5cclxuLnBhcmEge1xyXG4gICAgZm9udC1zaXplOiAxNnB4XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product',
          templateUrl: './product.component.html',
          styleUrls: ['./product.component.css']
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }];
      }, {
        selectedCategory: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/products/products.component.ts":
  /*!************************************************!*\
    !*** ./src/app/products/products.component.ts ***!
    \************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../product/product.component */
    "./src/app/product/product.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent() {
        _classCallCheck(this, ProductsComponent);
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)();
    };

    ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      viewQuery: function ProductsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selectedCategory = _t.first);
        }
      },
      decls: 8,
      vars: 1,
      consts: [[1, "d-flex", "flex-row", "p-2", "justify-content-between"], [1, "p-2", "bd-highlight"], [3, "selectedCategory"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-product", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedCategory", ctx.selectedCategory == null ? null : ctx.selectedCategory.selectedCategory);
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products',
          templateUrl: './products.component.html',
          styleUrls: ['./products.component.css']
        }]
      }], function () {
        return [];
      }, {
        selectedCategory: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegisterComponent_small_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "invalid user name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_small_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "invalid email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_small_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "invalid password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_small_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email & Password didn't match");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_small_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "invalid password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_small_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email & Password didn't match");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(userService, apiService, router) {
        _classCallCheck(this, RegisterComponent);

        this.userService = userService;
        this.apiService = apiService;
        this.router = router;
        this.f = true;
        this.users = [];
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          localStorage.clear();
          this.userService.getUser().subscribe(function (data) {
            console.log(data);
            _this6.users = data;
          });
          console.log(this.users);
        }
      }, {
        key: "register",
        value: function register(loginForm) {
          var _this7 = this;

          if (loginForm.value.password2 != loginForm.value.password) {
            alert(loginForm.value.password2 + loginForm.value.password);
            return;
          }

          this.apiService.getSpecificUser(loginForm.value.email).subscribe(function (data) {
            if (data.length == 0) {
              var user = new User(loginForm.value.email, loginForm.value.name, loginForm.value.password);
              console.log(user);

              _this7.apiService.addUser(user).subscribe(function (data) {
                console.log(data);

                if (data != null) {
                  localStorage.setItem('currentUser', user.email);

                  _this7.router.navigateByUrl('home');

                  return;
                }
              });
            } else {
              alert('email already exist');
            }
          });
        }
      }, {
        key: "cancel",
        value: function cancel(loginForm) {
          this.router.navigateByUrl('login');
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 44,
      vars: 7,
      consts: [["src", "assets/img/logo.png", 1, "center"], [1, "sidenav"], [1, "login-main-text"], [1, "main"], [1, "col-md-5", "col-sm-10", "mx-auto"], [1, "login-form"], ["loginForm", "ngForm"], [1, "form-group"], ["type", "text", "placeholder", "User namer", "name", "name", "ngModel", "", "required", "", "user", "", 1, "form-control"], ["user", "ngModel"], ["style", "color: red", 4, "ngIf"], ["type", "text", "placeholder", "Email", "name", "email", "ngModel", "", "required", "", "email", "", 1, "form-control"], ["email", "ngModel"], ["type", "password", "placeholder", "Password", "name", "password", "ngModel", "", "required", "", "password", "", "minlength", "8", 1, "form-control"], ["password", "ngModel"], ["type", "password", "placeholder", "Password", "name", "password2", "ngModel", "", "required", "", "password2", "", "minlength", "8", 1, "form-control"], ["password2", "ngModel"], ["type", "submit", 1, "btn", "btn-black", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-secondary", 3, "click"], [2, "color", "red"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " to Care4Cars");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Log in or register and start taking care of your car!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", null, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "User Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegisterComponent_small_19_Template, 2, 0, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegisterComponent_small_25_Template, 2, 0, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RegisterComponent_small_31_Template, 2, 0, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RegisterComponent_small_32_Template, 2, 0, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, RegisterComponent_small_38_Template, 2, 0, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, RegisterComponent_small_39_Template, 2, 0, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_40_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            return ctx.register(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "sign up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_42_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            return ctx.cancel(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(_r1 == null ? null : _r1.valid) && ((_r1 == null ? null : _r1.dirty) || (_r1 == null ? null : _r1.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(_r3 == null ? null : _r3.valid) && ((_r3 == null ? null : _r3.dirty) || (_r3 == null ? null : _r3.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(_r5 == null ? null : _r5.valid) && ((_r5 == null ? null : _r5.dirty) || (_r5 == null ? null : _r5.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.f);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(_r5 == null ? null : _r5.valid) && ((_r5 == null ? null : _r5.dirty) || (_r5 == null ? null : _r5.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.f);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"]],
      styles: [".ng-valid[required][_ngcontent-%COMP%]{\r\n    border-left: 5px solid #42a948;\r\n}\r\n.ng-invalid[_ngcontent-%COMP%]:not(form){\r\n    border-left: 5px solid #a94442;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n}\r\n.main-head[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n    background: #FFF;\r\n   \r\n}\r\n.sidenav[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    background-color: #000;\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n}\r\n.main[_ngcontent-%COMP%] {\r\n    padding: 0px 10px;\r\n}\r\n@media screen and (max-height: 450px) {\r\n    .sidenav[_ngcontent-%COMP%] {padding-top: 15px;}\r\n}\r\n@media screen and (max-width: 450px) {\r\n    .login-form[_ngcontent-%COMP%]{\r\n        margin-top: 10%;\r\n    }\r\n\r\n    .register-form[_ngcontent-%COMP%]{\r\n        margin-top: 10%;\r\n    }\r\n}\r\n@media screen and (min-width: 768px){\r\n    .main[_ngcontent-%COMP%]{\r\n        margin-left: 40%; \r\n    }\r\n\r\n    .sidenav[_ngcontent-%COMP%]{\r\n        width: 40%;\r\n        position: fixed;\r\n        z-index: 1;\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n\r\n    .login-form[_ngcontent-%COMP%]{\r\n        margin-top: 20%;\r\n    }\r\n\r\n    .register-form[_ngcontent-%COMP%]{\r\n        margin-top: 0%;\r\n    }\r\n}\r\n.login-main-text[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    margin-top: 40%;\r\n    padding: 60px;\r\n}\r\n.login-main-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-weight: 300;\r\n}\r\n.btn-black[_ngcontent-%COMP%]{\r\n    background-color: #000 !important;\r\n    color: #fff;\r\n}\r\n.center[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFJQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7O0FBRXBCO0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFHQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksVUFBVSxpQkFBaUIsQ0FBQztBQUNoQztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKO0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixlQUFlO1FBQ2YsVUFBVTtRQUNWLE1BQU07UUFDTixPQUFPO0lBQ1g7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksY0FBYztJQUNsQjtBQUNKO0FBR0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7QUFDakI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFdBQVc7QUFDZjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7O0VBRXBCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy12YWxpZFtyZXF1aXJlZF17XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MmE5NDg7XHJcbn1cclxuLm5nLWludmFsaWQ6bm90KGZvcm0pe1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xyXG59XHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuXHJcbi5tYWluLWhlYWR7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgXHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuXHJcbi5tYWluIHtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAgIC5zaWRlbmF2IHtwYWRkaW5nLXRvcDogMTVweDt9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAubG9naW4tZm9ybXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZ2lzdGVyLWZvcm17XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAubWFpbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDAlOyBcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZW5hdntcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dpbi1mb3Jte1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIH1cclxuXHJcbiAgICAucmVnaXN0ZXItZm9ybXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5sb2dpbi1tYWluLXRleHR7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDQwJTtcclxuICAgIHBhZGRpbmc6IDYwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1tYWluLXRleHQgaDJ7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uYnRuLWJsYWNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIFxyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
        }]
      }], function () {
        return [{
          type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();

    var User = function User(email, name, password) {
      _classCallCheck(this, User);

      this.email = email;
      this.name = name;
      this.password = password;
    };
    /***/

  },

  /***/
  "./src/app/sidebar/sidebar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.ts ***!
    \**********************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);

        this.selectedCategory = "Addons";
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedCategory = "Addons";
        }
      }, {
        key: "showAddons",
        value: function showAddons() {
          this.selectedCategory = "Addons";
        }
      }, {
        key: "showOils",
        value: function showOils() {
          this.selectedCategory = "Oils";
        }
      }, {
        key: "showTires",
        value: function showTires() {
          this.selectedCategory = "Tires";
        }
      }, {
        key: "showBatterys",
        value: function showBatterys() {
          this.selectedCategory = "Batterys";
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)();
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 10,
      vars: 0,
      consts: [[1, "myContainer"], [1, "d-flex", "flex-column", "flex-row", "bg-dark", "border", "border-dark"], [1, "d-flex", "p-2", "bd-highlight", "justify-content-center", "text-light", 3, "click"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_2_listener() {
            return ctx.showAddons();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Addons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_4_listener() {
            return ctx.showOils();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Oils");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_6_listener() {
            return ctx.showTires();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tires");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_8_listener() {
            return ctx.showBatterys();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Batterys");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".myContainer[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    vertical-align: middle;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlDb250YWluZXIge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user.service.ts":
  /*!*********************************!*\
    !*** ./src/app/user.service.ts ***!
    \*********************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.baseURL = 'http://localhost:8000/api/';
        this.headers = {
          'content-type': 'application/json'
        };
      }

      _createClass(UserService, [{
        key: "getUser",
        value: function getUser() {
          return this.http.get(this.baseURL + 'getUser');
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\elior\CareForCars\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map