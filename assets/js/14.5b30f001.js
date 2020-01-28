(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{209:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#requirements"}},[e._v("Requirements")])]),a("li",[a("a",{attrs:{href:"#installing-laravel-restify"}},[e._v("Installing Laravel Restify")])]),a("li",[a("a",{attrs:{href:"#setup-laravel-restify"}},[e._v("Setup Laravel Restify")])]),a("li",[a("a",{attrs:{href:"#quick-start"}},[e._v("Quick start")])]),a("li",[a("a",{attrs:{href:"#generate-repository"}},[e._v("Generate repository")])]),a("li",[a("a",{attrs:{href:"#generate-policy"}},[e._v("Generate policy")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v("Laravel Restify has a few requirements you should be aware of before installing:")]),e._v(" "),a("ul",[a("li",[e._v("Composer")]),e._v(" "),a("li",[e._v("Laravel Framework 5.5+")])]),e._v(" "),a("h2",{attrs:{id:"installing-laravel-restify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-laravel-restify"}},[e._v("#")]),e._v(" Installing Laravel Restify")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("composer require binaryk/laravel-restify\n")])])]),a("h2",{attrs:{id:"setup-laravel-restify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-laravel-restify"}},[e._v("#")]),e._v(" Setup Laravel Restify")]),e._v(" "),a("p",[e._v("After the instalation, the package requires a setup process, this will publish configuration, provider and will create the\n"),a("code",[e._v("app/Restify")]),e._v(" directory with an abstract "),a("code",[e._v("Repository")]),e._v(" and scaffolding a "),a("code",[e._v("User")]),e._v(" repository you can play with:")]),e._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("php artisan restify:setup\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Package Stability")]),e._v(" "),a("p",[e._v("If you are not able to install Restify into your application because of your "),a("code",[e._v("minimum-stability")]),e._v(" setting,\nconsider setting your "),a("code",[e._v("minimum-stability")]),e._v(" option to "),a("code",[e._v("dev")]),e._v(" and your "),a("code",[e._v("prefer-stable")]),e._v(" option to "),a("code",[e._v("true")]),e._v(".\nThis will allow you to install Laravel Restify while still preferring stable package\nreleases for your application.")])]),e._v(" "),a("h2",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[e._v("#")]),e._v(" Quick start")]),e._v(" "),a("p",[e._v("Having the package setup and users table migrated, you should be good to perform the first API request:")]),e._v(" "),a("div",{staticClass:"language-http request extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("GET:")]),e._v(" /restify-api/users?perPage=10\n")])])]),a("p",[e._v("This should return the users list paginated and formatted according to "),a("a",{attrs:{href:"https://jsonapi.org/format/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON:API"),a("OutboundLink")],1),e._v(" standard.")]),e._v(" "),a("h2",{attrs:{id:"generate-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-repository"}},[e._v("#")]),e._v(" Generate repository")]),e._v(" "),a("p",[e._v("Creating a new repository can be done via restify command:")]),e._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("php artisan restify:repository Post\n")])])]),a("p",[e._v("If you want to generate the Policy, Model and migration as well, then you can use the "),a("code",[e._v("--all")]),e._v(" option:")]),e._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("php artisan restify:repository Post --all\n")])])]),a("h2",{attrs:{id:"generate-policy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-policy"}},[e._v("#")]),e._v(" Generate policy")]),e._v(" "),a("p",[e._v("Since the authorization is done through the Laravel Policies, a good way of generating a complete policy for an entity\nis by using the restify command:")]),e._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("php artisan restify:policy Post\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);