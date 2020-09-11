(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/components/Pagination.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/coreui/src/components/Pagination.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./resources/coreui/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "apax-pagination",
  props: {
    rootLink: {
      type: String,
      "default": null
    },
    id: {
      type: String,
      "default": null
    },
    listStyle: {
      type: String,
      "default": "line"
    },
    customClass: {
      type: String,
      "default": null
    },
    firstPage: {
      type: Number,
      "default": 1
    },
    previousPage: {
      type: Number,
      "default": 1
    },
    currentPage: {
      type: Number,
      "default": 1
    },
    pagesLimit: {
      type: Number,
      "default": 1
    },
    pagesItems: {
      type: Number,
      "default": 1
    },
    nextPage: {
      type: Number,
      "default": 2
    },
    lastPage: {
      type: Number,
      "default": 2
    },
    routing: Function,
    pagesList: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      listType: "",
      jum_to_page: null,
      pages_list: []
    };
  },
  methods: {
    checkSelected: function checkSelected(page_item) {
      return this.currentPage == page_item;
    },
    linking: function linking(page_item) {
      var page = parseInt(page_item) > 0 ? page_item : 1;
      return this.rootLink + "/" + page;
    },
    navigate: function navigate(link) {
      this.routing ? this.routing(link) : "";
      this.$emit("routing", link);
    }
  },
  computed: {},
  watch: {
    lastPage: function lastPage() {
      this.listType = this.lastPage > 9 ? "list" : this.listStyle;
      this.pages_list = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["range"])(1, this.lastPage + 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/views/config/products/list.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/coreui/src/views/config/products/list.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./resources/coreui/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Pagination */ "./resources/coreui/src/components/Pagination.vue");
/* harmony import */ var _utilities_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/utility */ "./resources/coreui/src/utilities/utility.js");
/* harmony import */ var _utilities_utility__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utilities_utility__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    paging: _components_Pagination__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  name: "List-Product",
  data: function data() {
    return {
      searchData: {
        keyword: "",
        status: ""
      },
      products: [],
      pagination: {
        url: "/api/config/products/list?token=" + localStorage.getItem("api_token"),
        id: "",
        style: "line",
        "class": "",
        spage: 1,
        ppage: 1,
        npage: 0,
        lpage: 1,
        cpage: 1,
        total: 0,
        limit: 20,
        limitSource: [10, 20, 30, 40, 50],
        pages: []
      }
    };
  },
  created: function created() {
    this.search();
  },
  methods: {
    reset: function reset() {
      location.reload();
    },
    search: function search(a) {
      var _this = this;

      var data = {
        keyword: this.searchData.keyword,
        status: this.searchData.status
      };
      var link = "/api/config/products/list?token=" + localStorage.getItem("api_token");
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(link, data).then(function (response) {
        console.log(response.data);
        _this.products = response.data.list;
        _this.pagination.spage = response.data.paging.spage;
        _this.pagination.ppage = response.data.paging.ppage;
        _this.pagination.npage = response.data.paging.npage;
        _this.pagination.lpage = response.data.paging.lpage;
        _this.pagination.cpage = response.data.paging.cpage;
        _this.pagination.total = response.data.paging.total;
        _this.pagination.limit = response.data.paging.limit;
      })["catch"](function (e) {});
    },
    changePage: function changePage(link) {
      var info = link.toString().substr(this.pagination.url.length).split("/");
      var page = info.length > 1 ? info[1] : 1;
      this.pagination.cpage = parseInt(page);
      this.search();
    }
  },
  filters: {
    getStatusName: function getStatusName(value) {
      return value == 1 ? "Hoạt động" : "Ngừng hoạt động";
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/components/Pagination.vue?vue&type=style&index=0&id=b332f4f8&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/coreui/src/components/Pagination.vue?vue&type=style&index=0&id=b332f4f8&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".apax-pagination[data-v-b332f4f8] {\n  position: relative;\n}\n.apax-pagination .page[data-v-b332f4f8] {\n  float: left;\n  width: 30px;\n  height: 30px;\n  border-top: 1px solid #c2cfd6;\n  border-bottom: 1px solid #c2cfd6;\n}\n.apax-pagination .page div[data-v-b332f4f8] {\n  height: 100%;\n  width: 100%;\n  display: block;\n  padding: 3px 0 0 0;\n  color: #223b54;\n  background: #254b6d;\n}\n.apax-pagination .page div i[data-v-b332f4f8] {\n  font-weight: 500;\n  color: #fff;\n}\n.apax-pagination .page:hover div[data-v-b332f4f8] {\n  cursor: pointer;\n  background: #9c0200;\n  text-shadow: 0 1px 1px #111;\n}\n.apax-pagination .page:hover div i[data-v-b332f4f8] {\n  font-weight: 500;\n}\n.apax-pagination .pages.list[data-v-b332f4f8] {\n  display: none;\n}\n.apax-pagination #list[data-v-b332f4f8],\n.apax-pagination #line[data-v-b332f4f8] {\n  display: block;\n}\n.apax-pagination #list.pages[data-v-b332f4f8] {\n  float: left;\n  width: 90px;\n  height: 30px;\n  position: relative;\n  border: 1px solid #c2cfd6;\n}\n.apax-pagination #line.pages[data-v-b332f4f8] {\n  float: left;\n  height: 30px;\n  position: relative;\n  border-top: 1px solid #c2cfd6;\n  border-right: 1px solid #c2cfd6;\n  border-bottom: 1px solid #c2cfd6;\n}\n.apax-pagination #list input[data-v-b332f4f8] {\n  position: absolute;\n  width: 88px;\n  border: 0;\n  height: 28px;\n  top: 0px;\n  font-size: 12px;\n  text-align: center;\n  left: 0;\n}\n.apax-pagination #line input[data-v-b332f4f8] {\n  display: none;\n}\n.apax-pagination .pages ul[data-v-b332f4f8] {\n  list-style-type: none;\n}\n.apax-pagination #line ul[data-v-b332f4f8] {\n  float: left;\n  margin: 0;\n  padding: 0;\n  height: 28px;\n  border: 0;\n  overflow: hidden;\n}\n.apax-pagination #line li[data-v-b332f4f8] {\n  float: left;\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  overflow: hidden;\n  font-weight: 700;\n  border-left: 1px solid #c2cfd6;\n}\n.apax-pagination #line li div[data-v-b332f4f8] {\n  width: 100%;\n  height: 100%;\n  display: block;\n  padding: 7px 0 0 0;\n}\n.apax-pagination #list ul[data-v-b332f4f8] {\n  position: absolute;\n  height: 300%;\n  overflow-y: scroll;\n  top: -300%;\n  display: none;\n}\n.apax-pagination #list:hover ul[data-v-b332f4f8],\n.apax-pagination #list ul[data-v-b332f4f8]:hover {\n  display: block;\n}\n.apax-pagination #list ul li[data-v-b332f4f8] {\n  padding: 3px 0;\n  line-height: 150%;\n}\n.apax-pagination .pages ul li[data-v-b332f4f8] {\n  color: #555;\n  font-size: 12px;\n  cursor: pointer;\n}\n.apax-pagination .pages ul li[data-v-b332f4f8]:hover {\n  color: #223b54;\n  text-shadow: 0 1px 1px #999;\n}\n.apax-pagination #line ul li:hover div[data-v-b332f4f8] {\n  color: #fff;\n  font-weight: 500;\n  background: #223b54;\n  text-shadow: 0 1px 1px #111;\n}\n.apax-pagination #line ul li .selected[data-v-b332f4f8],\n.apax-pagination #line ul li:hover .selected[data-v-b332f4f8] {\n  color: #fff;\n  background: #9c0200;\n}\n.apax-pagination .pages ul li:hover .selected[data-v-b332f4f8],\n.apax-pagination .pages ul li .selected[data-v-b332f4f8] {\n  color: #9c0200;\n}\n.apax-pagination .first[data-v-b332f4f8] {\n  border-left: 1px solid #c2cfd6;\n}\n.apax-pagination .previous[data-v-b332f4f8] {\n  border-left: 1px solid #c2cfd6;\n}\n.apax-pagination .next[data-v-b332f4f8] {\n  border-right: 1px solid #c2cfd6;\n}\n.apax-pagination .last[data-v-b332f4f8] {\n  border-right: 1px solid #c2cfd6;\n}\n.paging-info[data-v-b332f4f8] {\n  font-size: 11px;\n  color: #7f90a3;\n  font-style: italic;\n}\n\n/* width */\n[data-v-b332f4f8]::-webkit-scrollbar {\n  width: 5px;\n}\n\n/* Track */\n[data-v-b332f4f8]::-webkit-scrollbar-track {\n  background: #b3cbe5;\n}\n\n/* Handle */\n[data-v-b332f4f8]::-webkit-scrollbar-thumb {\n  background: #779cc4;\n}\n\n/* Handle on hover */\n[data-v-b332f4f8]::-webkit-scrollbar-thumb:hover {\n  background: #3a6896;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/components/Pagination.vue?vue&type=style&index=0&id=b332f4f8&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/coreui/src/components/Pagination.vue?vue&type=style&index=0&id=b332f4f8&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=style&index=0&id=b332f4f8&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/components/Pagination.vue?vue&type=style&index=0&id=b332f4f8&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/components/Pagination.vue?vue&type=template&id=b332f4f8&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/coreui/src/components/Pagination.vue?vue&type=template&id=b332f4f8&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "apax-pagination",
      class: _vm.customClass,
      attrs: { id: _vm.id }
    },
    [
      _c("div", { staticClass: "paging-info" }, [
        _vm._v(
          "Đang hiển thị trang " +
            _vm._s(_vm.currentPage) +
            "/" +
            _vm._s(_vm.lastPage) +
            " với " +
            _vm._s(_vm.pagesLimit) +
            " bản ghi mỗi trang, tổng số có " +
            _vm._s(_vm.lastPage) +
            " trang " +
            _vm._s(_vm.pagesItems) +
            " bản ghi"
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "first page" }, [
        _c(
          "div",
          {
            staticClass: "link-me",
            attrs: { title: "Về trang đầu tiên" },
            on: {
              click: function($event) {
                _vm.navigate(_vm.linking(_vm.firstPage))
              }
            }
          },
          [_c("i", { staticClass: "fa fa-angle-double-left" })]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "previous page" }, [
        _c(
          "div",
          {
            staticClass: "link-me",
            attrs: { title: "Quay lại trang trước" },
            on: {
              click: function($event) {
                _vm.navigate(_vm.linking(_vm.previousPage))
              }
            }
          },
          [_c("i", { staticClass: "fa fa-angle-left" })]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "pages list", attrs: { id: _vm.listType } }, [
        _c(
          "ul",
          { staticClass: "pagination paging-bar customer-type form-control" },
          _vm._l(_vm.pages_list, function(page_item, idx) {
            return _c("li", { key: idx, class: _vm.checkSelected(page_item) }, [
              page_item == _vm.currentPage && _vm.listType == "list"
                ? _c("div", { staticClass: "link-me page_item selected" }, [
                    _vm._v(_vm._s(page_item) + "/" + _vm._s(_vm.lastPage))
                  ])
                : _vm.listType == "list"
                ? _c(
                    "div",
                    {
                      staticClass: "link-me page_item",
                      on: {
                        click: function($event) {
                          _vm.navigate(_vm.linking(page_item))
                        }
                      }
                    },
                    [_vm._v(_vm._s(page_item) + "/" + _vm._s(_vm.lastPage))]
                  )
                : page_item == _vm.currentPage && _vm.listType == "line"
                ? _c("div", { staticClass: "link-me page_item selected" }, [
                    _vm._v(_vm._s(page_item))
                  ])
                : _c(
                    "div",
                    {
                      staticClass: "link-me page_item",
                      on: {
                        click: function($event) {
                          _vm.navigate(_vm.linking(page_item))
                        }
                      }
                    },
                    [_vm._v(_vm._s(page_item))]
                  )
            ])
          }),
          0
        ),
        _vm._v(" "),
        _c("input", {
          staticClass: "selected page",
          attrs: {
            type: "text",
            placeholder: _vm.currentPage + "/" + _vm.lastPage
          },
          domProps: { value: _vm.jum_to_page },
          on: {
            input: function($event) {
              _vm.navigate(_vm.linking((_vm.jum_to_page = $event.target.value)))
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "next page" }, [
        _c(
          "div",
          {
            staticClass: "link-me",
            attrs: { title: "Sang trang kế tiếp" },
            on: {
              click: function($event) {
                _vm.navigate(_vm.linking(_vm.nextPage))
              }
            }
          },
          [_c("i", { staticClass: "fa fa-angle-right" })]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "last page" }, [
        _c(
          "div",
          {
            staticClass: "link-me",
            attrs: { title: "Tới trang cuối cùng" },
            on: {
              click: function($event) {
                _vm.navigate(_vm.linking(_vm.lastPage))
              }
            }
          },
          [_c("i", { staticClass: "fa fa-angle-double-right" })]
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/views/config/products/list.vue?vue&type=template&id=50e36afc&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/coreui/src/views/config/products/list.vue?vue&type=template&id=50e36afc& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "animated fadeIn apax-form" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-12" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "form-group col-sm-4" }, [
                _c("label", { attrs: { for: "name" } }, [
                  _vm._v("Tên sản phẩm")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.searchData.keyword,
                      expression: "searchData.keyword"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "Nhập tên sản phẩm" },
                  domProps: { value: _vm.searchData.keyword },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.searchData, "keyword", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group col-sm-4" }, [
                _c("label", { attrs: { for: "ccmonth" } }, [
                  _vm._v("Trạng thái")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.searchData.status,
                        expression: "searchData.status"
                      }
                    ],
                    staticClass: "form-control",
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.searchData,
                          "status",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("Chọn trạng thái")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "0" } }, [
                      _vm._v("Ngừng hoạt động")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "1" } }, [
                      _vm._v("Hoạt động")
                    ])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-footer" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-info",
                attrs: { type: "submit" },
                on: {
                  click: function($event) {
                    return _vm.search()
                  }
                }
              },
              [_vm._v("Tìm kiếm")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-secondary",
                attrs: { type: "reset" },
                on: {
                  click: function($event) {
                    return _vm.reset()
                  }
                }
              },
              [_vm._v("Reset")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("table", { staticClass: "table table-responsive-sm" }, [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.products, function(item, index) {
                  return _c("tr", { key: index }, [
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          index +
                            1 +
                            (_vm.pagination.cpage - 1) * _vm.pagination.limit
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.title))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm._f("getStatusName")(item.status)))
                    ]),
                    _vm._v(" "),
                    _c("td")
                  ])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-center" }, [
              _c(
                "nav",
                { attrs: { "aria-label": "Page navigation" } },
                [
                  _c("paging", {
                    attrs: {
                      rootLink: _vm.pagination.url,
                      id: _vm.pagination.id,
                      listStyle: _vm.pagination.style,
                      customClass: _vm.pagination.class,
                      firstPage: _vm.pagination.spage,
                      previousPage: _vm.pagination.ppage,
                      nextPage: _vm.pagination.npage,
                      lastPage: _vm.pagination.lpage,
                      currentPage: _vm.pagination.cpage,
                      pagesItems: _vm.pagination.total,
                      pagesLimit: _vm.pagination.limit,
                      pageList: _vm.pagination.pages,
                      routing: _vm.changePage
                    }
                  })
                ],
                1
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("strong", [_vm._v("Bộ lọc")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("strong", [_vm._v("Danh sách")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("STT")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tên sản phẩm")]),
        _vm._v(" "),
        _c("th", [_vm._v("Trạng thái")]),
        _vm._v(" "),
        _c("th", [_vm._v("Thao tác")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/coreui/src/components/Pagination.vue":
/*!********************************************************!*\
  !*** ./resources/coreui/src/components/Pagination.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pagination_vue_vue_type_template_id_b332f4f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=b332f4f8&scoped=true& */ "./resources/coreui/src/components/Pagination.vue?vue&type=template&id=b332f4f8&scoped=true&");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js& */ "./resources/coreui/src/components/Pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Pagination_vue_vue_type_style_index_0_id_b332f4f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pagination.vue?vue&type=style&index=0&id=b332f4f8&lang=scss&scoped=true& */ "./resources/coreui/src/components/Pagination.vue?vue&type=style&index=0&id=b332f4f8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pagination_vue_vue_type_template_id_b332f4f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pagination_vue_vue_type_template_id_b332f4f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b332f4f8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/coreui/src/components/Pagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/coreui/src/components/Pagination.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/coreui/src/components/Pagination.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/components/Pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/coreui/src/components/Pagination.vue?vue&type=style&index=0&id=b332f4f8&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/coreui/src/components/Pagination.vue?vue&type=style&index=0&id=b332f4f8&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_b332f4f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=style&index=0&id=b332f4f8&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/components/Pagination.vue?vue&type=style&index=0&id=b332f4f8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_b332f4f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_b332f4f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_b332f4f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_b332f4f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_b332f4f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/coreui/src/components/Pagination.vue?vue&type=template&id=b332f4f8&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/coreui/src/components/Pagination.vue?vue&type=template&id=b332f4f8&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_b332f4f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=template&id=b332f4f8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/components/Pagination.vue?vue&type=template&id=b332f4f8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_b332f4f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_b332f4f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/coreui/src/views/config/products/list.vue":
/*!*************************************************************!*\
  !*** ./resources/coreui/src/views/config/products/list.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_50e36afc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=50e36afc& */ "./resources/coreui/src/views/config/products/list.vue?vue&type=template&id=50e36afc&");
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ "./resources/coreui/src/views/config/products/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_50e36afc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_50e36afc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/coreui/src/views/config/products/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/coreui/src/views/config/products/list.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/coreui/src/views/config/products/list.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/views/config/products/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/coreui/src/views/config/products/list.vue?vue&type=template&id=50e36afc&":
/*!********************************************************************************************!*\
  !*** ./resources/coreui/src/views/config/products/list.vue?vue&type=template&id=50e36afc& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_50e36afc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=template&id=50e36afc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/views/config/products/list.vue?vue&type=template&id=50e36afc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_50e36afc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_50e36afc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);