webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./common/layout/Layout.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./common/layout/Layout.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Layout_root__1l8hv {\\n  width: 100%;\\n  min-height: 100vh;\\n  position: relative;\\n}\\n.Layout_root__1l8hv .Layout_header__2isVh {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  z-index: 1;\\n  color: #ccc;\\n}\\n.Layout_root__1l8hv .Layout_header__2isVh .Layout_navbar__1KFTf {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  margin: 1.5rem 1rem;\\n}\\n.Layout_root__1l8hv .Layout_header__2isVh .Layout_navbar__1KFTf .Layout_brand__1emYb {\\n  flex-shrink: 0;\\n  text-align: left;\\n}\\n.Layout_root__1l8hv .Layout_header__2isVh .Layout_navbar__1KFTf .Layout_nav__2Otdx {\\n  flex: 1 1;\\n  text-align: right;\\n}\\n.Layout_root__1l8hv .Layout_header__2isVh .Layout_navbar__1KFTf .Layout_nav__2Otdx > ul {\\n  list-style: none;\\n  padding: 0;\\n  margin: 0;\\n  display: flex;\\n  align-items: center;\\n  justify-content: flex-end;\\n}\\n.Layout_root__1l8hv .Layout_header__2isVh .Layout_navbar__1KFTf .Layout_nav__2Otdx > ul > li {\\n  height: 2.75rem;\\n  line-height: 2.75rem;\\n  padding: 0 1.5rem;\\n  cursor: pointer;\\n  box-sizing: border-box;\\n  display: inline-flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.Layout_root__1l8hv .Layout_header__2isVh .Layout_navbar__1KFTf .Layout_nav__2Otdx > ul > li:hover {\\n  color: #fff;\\n}\\n.Layout_root__1l8hv .Layout_header__2isVh .Layout_navbar__1KFTf .Layout_nav__2Otdx > ul > li.Layout_active__xS2xw {\\n  color: #FAE247;\\n  border-radius: 3px;\\n  border: solid 3px #FAE247;\\n}\\n.Layout_root__1l8hv .Layout_main__2vjPK {\\n  flex: 1 1;\\n}\\n.Layout_root__1l8hv .Layout_footer__HZFWk {\\n  z-index: 1;\\n  position: absolute;\\n  bottom: 0;\\n  left: 1.5rem;\\n  right: 1.5rem;\\n  padding: 6px 0 1.2rem;\\n  background-color: #181825;\\n  border-radius: 64px 64px 0 0;\\n}\\n.Layout_root__1l8hv .Layout_footer__HZFWk .Layout_copyright__1ppJv {\\n  font-size: 0.75rem;\\n  color: #ccc;\\n  line-height: 2rem;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Layout.module.scss\",\"webpack://../const.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,WAAA;EACA,iBAAA;EAGA,kBAAA;AAHF;AAKE;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,UAAA;EAGA,WCbmB;ADQvB;AAOI;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,mBAAA;AALN;AAOM;EACE,cAAA;EACA,gBAAA;AALR;AASM;EACE,SAAA;EACA,iBAAA;AAPR;AASQ;EACE,gBAAA;EACA,UAAA;EACA,SAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;AAPV;AASU;EACE,eAAA;EACA,oBAAA;EACA,iBAAA;EACA,eAAA;EACA,sBAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;AAPZ;AASY;EACE,WCnDD;AD4Cb;AAUY;EACE,cCzDI;ED0DJ,kBAAA;EC3CZ,yBAAA;ADoCF;AAgBE;EACE,SAAA;AAdJ;AAiBE;EACE,UAAA;EACA,kBAAA;EACA,SAAA;EACA,YAAA;EACA,aAAA;EACA,qBAAA;EACA,yBAAA;EACA,4BAAA;AAfJ;AAiBI;EACE,kBAAA;EACA,WChFiB;EDiFjB,iBAAA;AAfN\",\"sourcesContent\":[\"@import \\\"../const.scss\\\";\\n\\n.root {\\n  width: 100%;\\n  min-height: 100vh;\\n  // display: flex;\\n  // flex-direction: column;\\n  position: relative;\\n\\n  .header {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    z-index: 1;\\n\\n    // background-color: #000;\\n    color: $text-color-secondary;\\n\\n    .navbar {\\n      display: flex;\\n      flex-direction: row;\\n      align-items: center;\\n      margin: 1.5rem 1rem;\\n\\n      .brand {\\n        flex-shrink: 0;\\n        text-align: left;\\n\\n      }\\n\\n      .nav {\\n        flex: 1;\\n        text-align: right;\\n\\n        > ul {\\n          list-style: none;\\n          padding: 0;\\n          margin: 0;\\n          display: flex;\\n          align-items: center;\\n          justify-content: flex-end;\\n\\n          > li {\\n            height: 2.75rem;\\n            line-height: 2.75rem;\\n            padding: 0 1.5rem;\\n            cursor: pointer;\\n            box-sizing: border-box;\\n            display: inline-flex;\\n            align-items: center;\\n            justify-content: center;\\n\\n            &:hover {\\n              color: $text-color;\\n            }\\n\\n            &.active {\\n              color: $secondary-color;\\n              border-radius: 3px;\\n              @include border-solid($width: 3px, $color: $secondary-color);\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }\\n\\n  .main {\\n    flex: 1;\\n  }\\n\\n  .footer {\\n    z-index: 1;\\n    position: absolute;\\n    bottom: 0;\\n    left: 1.5rem;\\n    right: 1.5rem;\\n    padding: 6px 0 1.2rem;\\n    background-color: rgb(24, 24, 37);\\n    border-radius: 64px 64px 0 0;\\n\\n    .copyright {\\n      font-size: 0.75rem;\\n      color: $text-color-secondary;\\n      line-height: 2rem;\\n    }\\n  }\\n}\\n\",\"$primary-color: #E7486A;\\n$secondary-color: #FAE247;\\n\\n$text-color: #fff;\\n$text-color-secondary: #ccc;\\n\\n$grid-breakpoints: (\\n  xs: 0,\\n  sm: 576px,\\n  md: 768px,\\n  lg: 992px,\\n  xl: 1200px,\\n  xxl: 1400px,\\n);\\n\\n@mixin border-solid($width: 2px, $color: $primary-color) {\\n  border: solid $width $color;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"root\": \"Layout_root__1l8hv\",\n\t\"header\": \"Layout_header__2isVh\",\n\t\"navbar\": \"Layout_navbar__1KFTf\",\n\t\"brand\": \"Layout_brand__1emYb\",\n\t\"nav\": \"Layout_nav__2Otdx\",\n\t\"active\": \"Layout_active__xS2xw\",\n\t\"main\": \"Layout_main__2vjPK\",\n\t\"footer\": \"Layout_footer__HZFWk\",\n\t\"copyright\": \"Layout_copyright__1ppJv\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tbW9uL2xheW91dC9MYXlvdXQubW9kdWxlLnNjc3M/OWNjZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsd0JBQXdCLGdCQUFnQixzQkFBc0IsdUJBQXVCLEdBQUcsNkNBQTZDLHVCQUF1QixXQUFXLFlBQVksZ0JBQWdCLGVBQWUsZ0JBQWdCLEdBQUcsbUVBQW1FLGtCQUFrQix3QkFBd0Isd0JBQXdCLHdCQUF3QixHQUFHLHdGQUF3RixtQkFBbUIscUJBQXFCLEdBQUcsc0ZBQXNGLGNBQWMsc0JBQXNCLEdBQUcsMkZBQTJGLHFCQUFxQixlQUFlLGNBQWMsa0JBQWtCLHdCQUF3Qiw4QkFBOEIsR0FBRyxnR0FBZ0csb0JBQW9CLHlCQUF5QixzQkFBc0Isb0JBQW9CLDJCQUEyQix5QkFBeUIsd0JBQXdCLDRCQUE0QixHQUFHLHNHQUFzRyxnQkFBZ0IsR0FBRyxxSEFBcUgsbUJBQW1CLHVCQUF1Qiw4QkFBOEIsR0FBRywyQ0FBMkMsY0FBYyxHQUFHLDZDQUE2QyxlQUFlLHVCQUF1QixjQUFjLGlCQUFpQixrQkFBa0IsMEJBQTBCLDhCQUE4QixpQ0FBaUMsR0FBRyxzRUFBc0UsdUJBQXVCLGdCQUFnQixzQkFBc0IsR0FBRyxPQUFPLDZHQUE2RyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFlBQVksWUFBWSxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFlBQVksYUFBYSxtREFBbUQsV0FBVyxnQkFBZ0Isc0JBQXNCLHFCQUFxQiw4QkFBOEIsdUJBQXVCLGVBQWUseUJBQXlCLGFBQWEsY0FBYyxrQkFBa0IsaUJBQWlCLGtDQUFrQyxtQ0FBbUMsaUJBQWlCLHNCQUFzQiw0QkFBNEIsNEJBQTRCLDRCQUE0QixrQkFBa0IseUJBQXlCLDJCQUEyQixXQUFXLGdCQUFnQixrQkFBa0IsNEJBQTRCLGtCQUFrQiw2QkFBNkIsdUJBQXVCLHNCQUFzQiwwQkFBMEIsZ0NBQWdDLHNDQUFzQyxvQkFBb0IsOEJBQThCLG1DQUFtQyxnQ0FBZ0MsOEJBQThCLHFDQUFxQyxtQ0FBbUMsa0NBQWtDLHNDQUFzQyx5QkFBeUIsbUNBQW1DLGVBQWUsMEJBQTBCLHdDQUF3QyxtQ0FBbUMsNkVBQTZFLGVBQWUsYUFBYSxXQUFXLFNBQVMsT0FBTyxLQUFLLGFBQWEsY0FBYyxLQUFLLGVBQWUsaUJBQWlCLHlCQUF5QixnQkFBZ0IsbUJBQW1CLG9CQUFvQiw0QkFBNEIsd0NBQXdDLG1DQUFtQyxvQkFBb0IsMkJBQTJCLHFDQUFxQywwQkFBMEIsT0FBTyxLQUFLLEdBQUcsNkJBQTZCLDRCQUE0QixzQkFBc0IsOEJBQThCLCtHQUErRyw4REFBOEQsZ0NBQWdDLEdBQUcsbUJBQW1CO0FBQ2hxSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vY29tbW9uL2xheW91dC9MYXlvdXQubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuTGF5b3V0X3Jvb3RfXzFsOGh2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5MYXlvdXRfcm9vdF9fMWw4aHYgLkxheW91dF9oZWFkZXJfXzJpc1ZoIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxuICBjb2xvcjogI2NjYztcXG59XFxuLkxheW91dF9yb290X18xbDhodiAuTGF5b3V0X2hlYWRlcl9fMmlzVmggLkxheW91dF9uYXZiYXJfXzFLRlRmIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMS41cmVtIDFyZW07XFxufVxcbi5MYXlvdXRfcm9vdF9fMWw4aHYgLkxheW91dF9oZWFkZXJfXzJpc1ZoIC5MYXlvdXRfbmF2YmFyX18xS0ZUZiAuTGF5b3V0X2JyYW5kX18xZW1ZYiB7XFxuICBmbGV4LXNocmluazogMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5MYXlvdXRfcm9vdF9fMWw4aHYgLkxheW91dF9oZWFkZXJfXzJpc1ZoIC5MYXlvdXRfbmF2YmFyX18xS0ZUZiAuTGF5b3V0X25hdl9fMk90ZHgge1xcbiAgZmxleDogMSAxO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi5MYXlvdXRfcm9vdF9fMWw4aHYgLkxheW91dF9oZWFkZXJfXzJpc1ZoIC5MYXlvdXRfbmF2YmFyX18xS0ZUZiAuTGF5b3V0X25hdl9fMk90ZHggPiB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLkxheW91dF9yb290X18xbDhodiAuTGF5b3V0X2hlYWRlcl9fMmlzVmggLkxheW91dF9uYXZiYXJfXzFLRlRmIC5MYXlvdXRfbmF2X18yT3RkeCA+IHVsID4gbGkge1xcbiAgaGVpZ2h0OiAyLjc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIuNzVyZW07XFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLkxheW91dF9yb290X18xbDhodiAuTGF5b3V0X2hlYWRlcl9fMmlzVmggLkxheW91dF9uYXZiYXJfXzFLRlRmIC5MYXlvdXRfbmF2X18yT3RkeCA+IHVsID4gbGk6aG92ZXIge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5MYXlvdXRfcm9vdF9fMWw4aHYgLkxheW91dF9oZWFkZXJfXzJpc1ZoIC5MYXlvdXRfbmF2YmFyX18xS0ZUZiAuTGF5b3V0X25hdl9fMk90ZHggPiB1bCA+IGxpLkxheW91dF9hY3RpdmVfX3hTMnh3IHtcXG4gIGNvbG9yOiAjRkFFMjQ3O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggI0ZBRTI0NztcXG59XFxuLkxheW91dF9yb290X18xbDhodiAuTGF5b3V0X21haW5fXzJ2alBLIHtcXG4gIGZsZXg6IDEgMTtcXG59XFxuLkxheW91dF9yb290X18xbDhodiAuTGF5b3V0X2Zvb3Rlcl9fSFpGV2sge1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDEuNXJlbTtcXG4gIHJpZ2h0OiAxLjVyZW07XFxuICBwYWRkaW5nOiA2cHggMCAxLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODI1O1xcbiAgYm9yZGVyLXJhZGl1czogNjRweCA2NHB4IDAgMDtcXG59XFxuLkxheW91dF9yb290X18xbDhodiAuTGF5b3V0X2Zvb3Rlcl9fSFpGV2sgLkxheW91dF9jb3B5cmlnaHRfXzFwcEp2IHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9MYXlvdXQubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi9jb25zdC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBR0Esa0JBQUE7QUFIRjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBR0EsV0NibUI7QURRdkI7QUFPSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFMTjtBQU9NO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBTFI7QUFTTTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtBQVBSO0FBU1E7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFQVjtBQVNVO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFQWjtBQVNZO0VBQ0UsV0NuREQ7QUQ0Q2I7QUFVWTtFQUNFLGNDekRJO0VEMERKLGtCQUFBO0VDM0NaLHlCQUFBO0FEb0NGO0FBZ0JFO0VBQ0UsU0FBQTtBQWRKO0FBaUJFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBZko7QUFpQkk7RUFDRSxrQkFBQTtFQUNBLFdDaEZpQjtFRGlGakIsaUJBQUE7QUFmTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuLi9jb25zdC5zY3NzXFxcIjtcXG5cXG4ucm9vdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgLy8gZGlzcGxheTogZmxleDtcXG4gIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICBjb2xvcjogJHRleHQtY29sb3Itc2Vjb25kYXJ5O1xcblxcbiAgICAubmF2YmFyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBtYXJnaW46IDEuNXJlbSAxcmVtO1xcblxcbiAgICAgIC5icmFuZCB7XFxuICAgICAgICBmbGV4LXNocmluazogMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuXFxuICAgICAgfVxcblxcbiAgICAgIC5uYXYge1xcbiAgICAgICAgZmxleDogMTtcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcblxcbiAgICAgICAgPiB1bCB7XFxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXG4gICAgICAgICAgPiBsaSB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyLjc1cmVtO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjc1cmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICBjb2xvcjogJHRleHQtY29sb3I7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYuYWN0aXZlIHtcXG4gICAgICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXNvbGlkKCR3aWR0aDogM3B4LCAkY29sb3I6ICRzZWNvbmRhcnktY29sb3IpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLm1haW4ge1xcbiAgICBmbGV4OiAxO1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAxLjVyZW07XFxuICAgIHJpZ2h0OiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDZweCAwIDEuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMzcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2NHB4IDY0cHggMCAwO1xcblxcbiAgICAuY29weXJpZ2h0IHtcXG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yLXNlY29uZGFyeTtcXG4gICAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIiRwcmltYXJ5LWNvbG9yOiAjRTc0ODZBO1xcbiRzZWNvbmRhcnktY29sb3I6ICNGQUUyNDc7XFxuXFxuJHRleHQtY29sb3I6ICNmZmY7XFxuJHRleHQtY29sb3Itc2Vjb25kYXJ5OiAjY2NjO1xcblxcbiRncmlkLWJyZWFrcG9pbnRzOiAoXFxuICB4czogMCxcXG4gIHNtOiA1NzZweCxcXG4gIG1kOiA3NjhweCxcXG4gIGxnOiA5OTJweCxcXG4gIHhsOiAxMjAwcHgsXFxuICB4eGw6IDE0MDBweCxcXG4pO1xcblxcbkBtaXhpbiBib3JkZXItc29saWQoJHdpZHRoOiAycHgsICRjb2xvcjogJHByaW1hcnktY29sb3IpIHtcXG4gIGJvcmRlcjogc29saWQgJHdpZHRoICRjb2xvcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkxheW91dF9yb290X18xbDhodlwiLFxuXHRcImhlYWRlclwiOiBcIkxheW91dF9oZWFkZXJfXzJpc1ZoXCIsXG5cdFwibmF2YmFyXCI6IFwiTGF5b3V0X25hdmJhcl9fMUtGVGZcIixcblx0XCJicmFuZFwiOiBcIkxheW91dF9icmFuZF9fMWVtWWJcIixcblx0XCJuYXZcIjogXCJMYXlvdXRfbmF2X18yT3RkeFwiLFxuXHRcImFjdGl2ZVwiOiBcIkxheW91dF9hY3RpdmVfX3hTMnh3XCIsXG5cdFwibWFpblwiOiBcIkxheW91dF9tYWluX18ydmpQS1wiLFxuXHRcImZvb3RlclwiOiBcIkxheW91dF9mb290ZXJfX0haRldrXCIsXG5cdFwiY29weXJpZ2h0XCI6IFwiTGF5b3V0X2NvcHlyaWdodF9fMXBwSnZcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./common/layout/Layout.module.scss\n");

/***/ })

})