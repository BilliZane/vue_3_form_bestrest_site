(function(e){function a(a){for(var d,c,r=a[0],t=a[1],m=a[2],l=0,u=[];l<r.length;l++)c=r[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&u.push(o[c][0]),o[c]=0;for(d in t)Object.prototype.hasOwnProperty.call(t,d)&&(e[d]=t[d]);s&&s(a);while(u.length)u.shift()();return i.push.apply(i,m||[]),n()}function n(){for(var e,a=0;a<i.length;a++){for(var n=i[a],d=!0,r=1;r<n.length;r++){var t=n[r];0!==o[t]&&(d=!1)}d&&(i.splice(a--,1),e=c(c.s=n[0]))}return e}var d={},o={app:0},i=[];function c(a){if(d[a])return d[a].exports;var n=d[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=d,c.d=function(e,a,n){c.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,a){if(1&a&&(e=c(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var d in e)c.d(n,d,function(a){return e[a]}.bind(null,d));return n},c.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(a,"a",a),a},c.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c.p="/vue_3_form_bestrest_site/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],t=r.push.bind(r);r.push=a,r=r.slice();for(var m=0;m<r.length;m++)a(r[m]);var s=t;i.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"27dc":function(e,a,n){},"2ba6":function(e,a,n){e.exports=n.p+"img/form-logo.15a45344.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var d=n("7a23");function o(e,a,n,o,i,c){var r=Object(d["k"])("app-reg-form");return Object(d["i"])(),Object(d["c"])(r,{countries:i.countriesList},null,8,["countries"])}n("b0c0");var i=n("2ba6"),c=n.n(i),r={class:"reg-form"},t={class:"container"},m={class:"reg-form__content"},s=Object(d["f"])("div",{class:"reg-form__logo"},[Object(d["f"])("a",{href:"#"},[Object(d["f"])("img",{class:"reg-form__image",src:c.a,alt:"logo"})])],-1),l={key:0,class:"reg-form__title"},u=Object(d["f"])("span",null,[Object(d["f"])("a",{href:"#"},"Sign Up")],-1),f=Object(d["g"])(" and find the best place to rest while traveling "),b=[u,f],p={key:1,class:"reg-form__title"},g=Object(d["f"])("span",null,"Thank You!",-1),h=Object(d["g"])(" We will contact you soon. "),_=[g,h],j={class:"reg-form__row"},O={class:"reg-form__col"},y={class:"reg-form__label reg-form__label--name"},v={class:"reg-form__label reg-form__label--second-name"},w={class:"reg-form__label reg-form__label--country"},S=Object(d["f"])("option",{class:"reg-form__select-option reg-form__country",hidden:"",value:"Country"}," Country ",-1),C={class:"reg-form__label reg-form__label--phone"},N={class:"reg-form__label reg-form__label--password"},k={class:"reg-form__label reg-form__label--confirm"},I={class:"reg-form__label reg-form__label--email"},P={class:"reg-form__agree reg-form__label--agreement"},M=Object(d["f"])("label",{class:"reg-form__agree-label",for:"agreement"},[Object(d["g"])(" I agree to the  "),Object(d["f"])("span",null,[Object(d["f"])("a",{href:"#",target:"_blank"}," Terms & Conditions")])],-1),A=Object(d["f"])("div",{class:"button__wrapper"},[Object(d["f"])("input",{type:"submit",class:"button",value:"Sign Up",tabindex:"9"})],-1),B=Object(d["f"])("div",{class:"reg-form__login-wrapper"},[Object(d["f"])("div",{class:"reg-form__login"},[Object(d["g"])(" If you have an account, "),Object(d["f"])("a",{href:"#"},[Object(d["f"])("span",null,"Log In")])])],-1);function T(e,a,n,o,i,c){return Object(d["i"])(),Object(d["e"])("div",r,[Object(d["f"])("div",t,[Object(d["f"])("div",m,[s,i.formSuccess?(Object(d["i"])(),Object(d["e"])("div",p,_)):(Object(d["i"])(),Object(d["e"])("div",l,b)),i.formSuccess?Object(d["d"])("",!0):(Object(d["i"])(),Object(d["e"])("form",{key:2,class:"reg-form__body",onSubmit:a[11]||(a[11]=Object(d["q"])((function(){return c.submitHandler&&c.submitHandler.apply(c,arguments)}),["prevent"]))},[Object(d["f"])("div",j,[Object(d["f"])("div",O,[Object(d["f"])("label",y,[Object(d["p"])(Object(d["f"])("input",{class:"reg-form__input",type:"text",placeholder:"First Name",name:"first-name",autocomplete:"off",required:"",tabindex:"1","onUpdate:modelValue":a[0]||(a[0]=function(e){return i.firstName=e})},null,512),[[d["o"],i.firstName,void 0,{trim:!0}]])]),Object(d["f"])("label",v,[Object(d["p"])(Object(d["f"])("input",{class:"reg-form__input",type:"text",placeholder:"Second Name",name:"second-name",autocomplete:"off",tabindex:"2","onUpdate:modelValue":a[1]||(a[1]=function(e){return i.secondName=e})},null,512),[[d["o"],i.secondName,void 0,{trim:!0}]])]),Object(d["f"])("label",w,[Object(d["p"])(Object(d["f"])("select",{class:"reg-form__input reg-form__select",required:"",tabindex:"3","onUpdate:modelValue":a[2]||(a[2]=function(e){return i.country=e}),onChange:a[3]||(a[3]=function(){return c.changeCodeCountry&&c.changeCodeCountry.apply(c,arguments)})},[S,(Object(d["i"])(!0),Object(d["e"])(d["a"],null,Object(d["j"])(n.countries,(function(e){return Object(d["i"])(),Object(d["e"])("option",{class:"reg-form__select-option",key:e.id},Object(d["l"])(e.name),1)})),128))],544),[[d["n"],i.country]])]),Object(d["f"])("label",C,[Object(d["p"])(Object(d["f"])("input",{class:"reg-form__input",type:"text",placeholder:"Phone",name:"phone",autocomplete:"off",tabindex:"4",required:"","onUpdate:modelValue":a[4]||(a[4]=function(e){return i.phone=e}),onInput:a[5]||(a[5]=function(e){return c.validatePhoneNum(e)})},null,544),[[d["o"],i.phone,void 0,{trim:!0}]])]),Object(d["f"])("label",N,[Object(d["p"])(Object(d["f"])("input",{class:"reg-form__input",type:"password",placeholder:"Password",name:"password",tabindex:"5","onUpdate:modelValue":a[6]||(a[6]=function(e){return i.password=e})},null,512),[[d["o"],i.password]])]),Object(d["f"])("label",k,[Object(d["p"])(Object(d["f"])("input",{class:Object(d["h"])(["reg-form__input",{"reg-form__input--alert":i.errors.password}]),type:"password",placeholder:"Confirm password",name:"confirm-password",tabindex:"6","onUpdate:modelValue":a[7]||(a[7]=function(e){return i.confirmPassword=e}),onChange:a[8]||(a[8]=function(e){return c.validatePassword()})},null,34),[[d["o"],i.confirmPassword]])]),Object(d["f"])("label",I,[Object(d["p"])(Object(d["f"])("input",{class:"reg-form__input",type:"email",placeholder:"Email",name:"email",autocomplete:"off",required:"",tabindex:"7","onUpdate:modelValue":a[9]||(a[9]=function(e){return i.email=e})},null,512),[[d["o"],i.email,void 0,{trim:!0}]])]),Object(d["f"])("div",P,[Object(d["p"])(Object(d["f"])("input",{class:"reg-form__agree-check",type:"checkbox",required:"",id:"agreement",tabindex:"8","onUpdate:modelValue":a[10]||(a[10]=function(e){return i.agreement=e})},null,512),[[d["m"],i.agreement]]),M])])]),A],32))])]),B])}n("7db0");var x=n("bc3a"),G=n.n(x),U={props:{countries:Array},data:function(){return{firstName:"",secondName:"",country:"Country",phone:"",password:"",confirmPassword:"",email:"",agreement:!1,errors:{password:null},formSuccess:!1}},methods:{submitHandler:function(){!1===this.errors.password&&(G.a.post("https://best-rest-site-form-default-rtdb.firebaseio.com/user.json",{firstName:this.firstName,lastName:this.secondName,country:this.country,phoneNumber:this.phone,password1:this.password,password2:this.confirmPassword,email:this.email,agreement:this.agreement}).then((function(e){console.log(e.data),console.log("Ok. The data was successfully received.")})).catch((function(e){console.log(e)})),this.formSuccess=!0)},changeCodeCountry:function(){var e=this;if("Country"!==this.country){var a=this.countries.find((function(a){return a.name===e.country})).code;this.phone=a}},validatePhoneNum:function(e){isNaN(+e.data)&&(this.phone=this.phone.substring(0,this.phone.length-1))},validatePassword:function(){this.password===this.confirmPassword?this.errors.password=!1:this.errors.password=!0}}};U.render=T;var L=U,z=[{id:1,code:"+7 840",name:"Abkhazia"},{id:2,code:"+93",name:"Afghanistan"},{id:3,code:"+355",name:"Albania"},{id:4,code:"+213",name:"Algeria"},{id:5,code:"+1 684",name:"American Samoa"},{id:6,code:"+376",name:"Andorra"},{id:7,code:"+244",name:"Angola"},{id:8,code:"+1 264",name:"Anguilla"},{id:9,code:"+1 268",name:"Antigua and Barbuda"},{id:10,code:"+54",name:"Argentina"},{id:11,code:"+374",name:"Armenia"},{id:12,code:"+297",name:"Aruba"},{id:13,code:"+247",name:"Ascension"},{id:14,code:"+61",name:"Australia"},{id:15,code:"+672",name:"Australian External Territories"},{id:16,code:"+43",name:"Austria"},{id:17,code:"+994",name:"Azerbaijan"},{id:18,code:"+1 242",name:"Bahamas"},{id:19,code:"+973",name:"Bahrain"},{id:20,code:"+880",name:"Bangladesh"},{id:21,code:"+1 246",name:"Barbados"},{id:22,code:"+1 268",name:"Barbuda"},{id:23,code:"+375",name:"Belarus"},{id:24,code:"+32",name:"Belgium"},{id:25,code:"+501",name:"Belize"},{id:26,code:"+229",name:"Benin"},{id:27,code:"+1 441",name:"Bermuda"},{id:28,code:"+975",name:"Bhutan"},{id:29,code:"+591",name:"Bolivia"},{id:30,code:"+387",name:"Bosnia and Herzegovina"},{id:31,code:"+267",name:"Botswana"},{id:32,code:"+55",name:"Brazil"},{id:33,code:"+246",name:"British Indian Ocean Territory"},{id:34,code:"+1 284",name:"British Virgin Islands"},{id:35,code:"+673",name:"Brunei"},{id:36,code:"+359",name:"Bulgaria"},{id:37,code:"+226",name:"Burkina Faso"},{id:38,code:"+257",name:"Burundi"},{id:39,code:"+855",name:"Cambodia"},{id:40,code:"+237",name:"Cameroon"},{id:41,code:"+1",name:"Canada"},{id:42,code:"+238",name:"Cape Verde"},{id:43,code:"+ 345",name:"Cayman Islands"},{id:44,code:"+236",name:"Central African Republic"},{id:45,code:"+235",name:"Chad"},{id:46,code:"+56",name:"Chile"},{id:47,code:"+86",name:"China"},{id:48,code:"+61",name:"Christmas Island"},{id:49,code:"+61",name:"Cocos-Keeling Islands"},{id:50,code:"+57",name:"Colombia"},{id:51,code:"+269",name:"Comoros"},{id:52,code:"+242",name:"Congo"},{id:53,code:"+243",name:"Congo, Dem. Rep. of (Zaire)"},{id:54,code:"+682",name:"Cook Islands"},{id:55,code:"+506",name:"Costa Rica"},{id:56,code:"+385",name:"Croatia"},{id:57,code:"+53",name:"Cuba"},{id:58,code:"+599",name:"Curacao"},{id:59,code:"+537",name:"Cyprus"},{id:60,code:"+420",name:"Czech Republic"},{id:61,code:"+45",name:"Denmark"},{id:62,code:"+246",name:"Diego Garcia"},{id:63,code:"+253",name:"Djibouti"},{id:64,code:"+1 767",name:"Dominica"},{id:65,code:"+1 809",name:"Dominican Republic"},{id:66,code:"+670",name:"East Timor"},{id:67,code:"+56",name:"Easter Island"},{id:68,code:"+593",name:"Ecuador"},{id:69,code:"+20",name:"Egypt"},{id:70,code:"+503",name:"El Salvador"},{id:71,code:"+240",name:"Equatorial Guinea"},{id:72,code:"+291",name:"Eritrea"},{id:73,code:"+372",name:"Estonia"},{id:74,code:"+251",name:"Ethiopia"},{id:75,code:"+500",name:"Falkland Islands"},{id:76,code:"+298",name:"Faroe Islands"},{id:77,code:"+679",name:"Fiji"},{id:78,code:"+358",name:"Finland"},{id:79,code:"+33",name:"France"},{id:80,code:"+596",name:"French Antilles"},{id:81,code:"+594",name:"French Guiana"},{id:82,code:"+689",name:"French Polynesia"},{id:83,code:"+241",name:"Gabon"},{id:84,code:"+220",name:"Gambia"},{id:85,code:"+995",name:"Georgia"},{id:86,code:"+49",name:"Germany"},{id:87,code:"+233",name:"Ghana"},{id:88,code:"+350",name:"Gibraltar"},{id:89,code:"+30",name:"Greece"},{id:90,code:"+299",name:"Greenland"},{id:91,code:"+1 473",name:"Grenada"},{id:92,code:"+590",name:"Guadeloupe"},{id:93,code:"+1 671",name:"Guam"},{id:94,code:"+502",name:"Guatemala"},{id:95,code:"+224",name:"Guinea"},{id:96,code:"+245",name:"Guinea-Bissau"},{id:97,code:"+595",name:"Guyana"},{id:98,code:"+509",name:"Haiti"},{id:99,code:"+504",name:"Honduras"},{id:100,code:"+852",name:"Hong Kong SAR China"},{id:101,code:"+36",name:"Hungary"},{id:102,code:"+354",name:"Iceland"},{id:103,code:"+91",name:"India"},{id:104,code:"+62",name:"Indonesia"},{id:105,code:"+98",name:"Iran"},{id:106,code:"+964",name:"Iraq"},{id:107,code:"+353",name:"Ireland"},{id:108,code:"+972",name:"Israel"},{id:109,code:"+39",name:"Italy"},{id:110,code:"+225",name:"Ivory Coast"},{id:111,code:"+1 876",name:"Jamaica"},{id:112,code:"+81",name:"Japan"},{id:113,code:"+962",name:"Jordan"},{id:114,code:"+7 7",name:"Kazakhstan"},{id:115,code:"+254",name:"Kenya"},{id:116,code:"+686",name:"Kiribati"},{id:117,code:"+965",name:"Kuwait"},{id:118,code:"+996",name:"Kyrgyzstan"},{id:119,code:"+856",name:"Laos"},{id:120,code:"+371",name:"Latvia"},{id:121,code:"+961",name:"Lebanon"},{id:122,code:"+266",name:"Lesotho"},{id:123,code:"+231",name:"Liberia"},{id:124,code:"+218",name:"Libya"},{id:125,code:"+423",name:"Liechtenstein"},{id:126,code:"+370",name:"Lithuania"},{id:127,code:"+352",name:"Luxembourg"},{id:128,code:"+853",name:"Macau SAR China"},{id:129,code:"+389",name:"Macedonia"},{id:130,code:"+261",name:"Madagascar"},{id:131,code:"+265",name:"Malawi"},{id:132,code:"+60",name:"Malaysia"},{id:133,code:"+960",name:"Maldives"},{id:134,code:"+223",name:"Mali"},{id:135,code:"+356",name:"Malta"},{id:136,code:"+692",name:"Marshall Islands"},{id:137,code:"+596",name:"Martinique"},{id:138,code:"+222",name:"Mauritania"},{id:139,code:"+230",name:"Mauritius"},{id:140,code:"+262",name:"Mayotte"},{id:141,code:"+52",name:"Mexico"},{id:142,code:"+691",name:"Micronesia"},{id:143,code:"+1 808",name:"Midway Island"},{id:144,code:"+373",name:"Moldova"},{id:145,code:"+377",name:"Monaco"},{id:146,code:"+976",name:"Mongolia"},{id:147,code:"+382",name:"Montenegro"},{id:148,code:"+1664",name:"Montserrat"},{id:149,code:"+212",name:"Morocco"},{id:150,code:"+95",name:"Myanmar"},{id:151,code:"+264",name:"Namibia"},{id:152,code:"+674",name:"Nauru"},{id:153,code:"+977",name:"Nepal"},{id:154,code:"+31",name:"Netherlands"},{id:155,code:"+599",name:"Netherlands Antilles"},{id:156,code:"+1 869",name:"Nevis"},{id:157,code:"+687",name:"New Caledonia"},{id:158,code:"+64",name:"New Zealand"},{id:159,code:"+505",name:"Nicaragua"},{id:160,code:"+227",name:"Niger"},{id:161,code:"+234",name:"Nigeria"},{id:162,code:"+683",name:"Niue"},{id:163,code:"+672",name:"Norfolk Island"},{id:164,code:"+850",name:"North Korea"},{id:165,code:"+1 670",name:"Northern Mariana Islands"},{id:166,code:"+47",name:"Norway"},{id:167,code:"+968",name:"Oman"},{id:168,code:"+92",name:"Pakistan"},{id:169,code:"+680",name:"Palau"},{id:170,code:"+970",name:"Palestinian Territory"},{id:171,code:"+507",name:"Panama"},{id:172,code:"+675",name:"Papua New Guinea"},{id:173,code:"+595",name:"Paraguay"},{id:174,code:"+51",name:"Peru"},{id:175,code:"+63",name:"Philippines"},{id:176,code:"+48",name:"Poland"},{id:177,code:"+351",name:"Portugal"},{id:178,code:"+1 787",name:"Puerto Rico"},{id:179,code:"+974",name:"Qatar"},{id:180,code:"+262",name:"Reunion"},{id:181,code:"+40",name:"Romania"},{id:182,code:"+7",name:"Russia"},{id:183,code:"+250",name:"Rwanda"},{id:184,code:"+685",name:"Samoa"},{id:185,code:"+378",name:"San Marino"},{id:186,code:"+966",name:"Saudi Arabia"},{id:187,code:"+221",name:"Senegal"},{id:188,code:"+381",name:"Serbia"},{id:189,code:"+248",name:"Seychelles"},{id:190,code:"+232",name:"Sierra Leone"},{id:191,code:"+65",name:"Singapore"},{id:192,code:"+421",name:"Slovakia"},{id:193,code:"+386",name:"Slovenia"},{id:194,code:"+677",name:"Solomon Islands"},{id:195,code:"+27",name:"South Africa"},{id:196,code:"+500",name:"South Georgia and the South Sandwich Islands"},{id:197,code:"+82",name:"South Korea"},{id:198,code:"+34",name:"Spain"},{id:199,code:"+94",name:"Sri Lanka"},{id:200,code:"+249",name:"Sudan"},{id:201,code:"+597",name:"Suriname"},{id:202,code:"+268",name:"Swaziland"},{id:203,code:"+46",name:"Sweden"},{id:204,code:"+41",name:"Switzerland"},{id:205,code:"+963",name:"Syria"},{id:206,code:"+886",name:"Taiwan"},{id:207,code:"+992",name:"Tajikistan"},{id:208,code:"+255",name:"Tanzania"},{id:209,code:"+66",name:"Thailand"},{id:210,code:"+670",name:"Timor Leste"},{id:211,code:"+228",name:"Togo"},{id:212,code:"+690",name:"Tokelau"},{id:213,code:"+676",name:"Tonga"},{id:214,code:"+1 868",name:"Trinidad and Tobago"},{id:215,code:"+216",name:"Tunisia"},{id:216,code:"+90",name:"Turkey"},{id:217,code:"+993",name:"Turkmenistan"},{id:218,code:"+1 649",name:"Turks and Caicos Islands"},{id:219,code:"+688",name:"Tuvalu"},{id:220,code:"+1 340",name:"U.S. Virgin Islands"},{id:221,code:"+256",name:"Uganda"},{id:222,code:"+380",name:"Ukraine"},{id:223,code:"+971",name:"United Arab Emirates"},{id:224,code:"+44",name:"United Kingdom"},{id:225,code:"+1",name:"United States"},{id:226,code:"+598",name:"Uruguay"},{id:227,code:"+998",name:"Uzbekistan"},{id:228,code:"+678",name:"Vanuatu"},{id:229,code:"+58",name:"Venezuela"},{id:230,code:"+84",name:"Vietnam"},{id:231,code:"+1 808",name:"Wake Island"},{id:232,code:"+681",name:"Wallis and Futuna"},{id:233,code:"+967",name:"Yemen"},{id:234,code:"+260",name:"Zambia"},{id:235,code:"+255",name:"Zanzibar"},{id:236,code:"+263",name:"Zimbabwe"}],V=z,R={data:function(){return{countriesList:V}},components:{"app-reg-form":L},created:function(){document.title="BestRest site"}};R.render=o;var E=R;n("27dc");Object(d["b"])(E).mount("#app")}});
//# sourceMappingURL=app.db7af38c.js.map