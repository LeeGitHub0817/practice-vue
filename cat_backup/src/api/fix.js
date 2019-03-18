define(function() {
    var hexcase = 0;
    var b64pad = "";
    var chrsz = 8;

    function hex_fix(s) {
        return binl2hex(core_fix(str2binl(s), s.length * chrsz))
    }

    function core_fix(x, len) {
        x[len >> 5] |= 128 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;
        for (var i = 0; i < x.length; i += 16) {
            var olda = a;
            var oldb = b;
            var oldc = c;
            var oldd = d;
            a = fix_ff(a, b, c, d, x[i + 0], 7, -680876936);
            d = fix_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = fix_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = fix_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = fix_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = fix_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = fix_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = fix_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = fix_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = fix_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = fix_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = fix_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = fix_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = fix_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = fix_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = fix_ff(b, c, d, a, x[i + 15], 22, 1236535329);
            a = fix_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = fix_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = fix_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = fix_gg(b, c, d, a, x[i + 0], 20, -373897302);
            a = fix_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = fix_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = fix_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = fix_gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = fix_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = fix_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = fix_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = fix_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = fix_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = fix_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = fix_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = fix_gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = fix_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = fix_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = fix_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = fix_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = fix_hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = fix_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = fix_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = fix_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = fix_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = fix_hh(d, a, b, c, x[i + 0], 11, -358537222);
            c = fix_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = fix_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = fix_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = fix_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = fix_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = fix_hh(b, c, d, a, x[i + 2], 23, -995338651);
            a = fix_ii(a, b, c, d, x[i + 0], 6, -198630844);
            d = fix_ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = fix_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = fix_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = fix_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = fix_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = fix_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = fix_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = fix_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = fix_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = fix_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = fix_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = fix_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = fix_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = fix_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = fix_ii(b, c, d, a, x[i + 9], 21, -343485551);
            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd)
        }
        return Array(a, b, c, d)
    }

    function fix_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b)
    }

    function fix_ff(a, b, c, d, x, s, t) {
        return fix_cmn((b & c) | ((~b) & d), a, b, x, s, t)
    }

    function fix_gg(a, b, c, d, x, s, t) {
        return fix_cmn((b & d) | (c & (~d)), a, b, x, s, t)
    }

    function fix_hh(a, b, c, d, x, s, t) {
        return fix_cmn(b ^ c ^ d, a, b, x, s, t)
    }

    function fix_ii(a, b, c, d, x, s, t) {
        return fix_cmn(c ^ (b | (~d)), a, b, x, s, t)
    }

    function core_hmac_fix(key, data) {
        var bkey = str2binl(key);
        if (bkey.length > 16) {
            bkey = core_fix(bkey, key.length * chrsz)
        }
        var ipad = Array(16),
            opad = Array(16);
        for (var i = 0; i < 16; i++) {
            ipad[i] = bkey[i] ^ 909522486;
            opad[i] = bkey[i] ^ 1549556828
        }
        var hash = core_fix(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
        return core_fix(opad.concat(hash), 512 + 128)
    }

    function safe_add(x, y) {
        var lsw = (x & 65535) + (y & 65535);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 65535)
    }

    function bit_rol(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt))
    }

    function str2binl(str) {
        var bin = Array();
        var mask = (1 << chrsz) - 1;
        for (var i = 0; i < str.length * chrsz; i += chrsz) {
            bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32)
        }
        return bin
    }

    function binl2str(bin) {
        var str = "";
        var mask = (1 << chrsz) - 1;
        for (var i = 0; i < bin.length * 32; i += chrsz) {
            str += String.fromCharCode((bin[i >> 5] >>> (i % 32)) & mask)
        }
        return str
    }

    function binl2hex(binarray) {
        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for (var i = 0; i < binarray.length * 4; i++) {
            str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 15) + hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 15)
        }
        return str
    }

    function binl2b64(binarray) {
        var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var str = "";
        for (var i = 0; i < binarray.length * 4; i += 3) {
            var triplet = (((binarray[i >> 2] >> 8 * (i % 4)) & 255) << 16) | (((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 255) << 8) | ((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 255);
            for (var j = 0; j < 4; j++) {
                if (i * 8 + j * 6 > binarray.length * 32) {
                    str += b64pad
                } else {
                    str += tab.charAt((triplet >> 6 * (3 - j)) & 63)
                }
            }
        }
        return str
    }

    function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            return unescape(arr[2])
        } else {
            return null
        }
    }
    var fix = {
        fix: function(s) {
            s = getCookie("PHPSESSID") + s;
            return hex_fix(s)
        }
    };
    return fix
});