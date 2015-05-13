(function($) {
    $.fn.jtranslate = function(options) {

        var self = this, 
            settings = {
                classVal: "jqt",
                lang: "en",
                dictionary: null
            },
        settings = $.extend(settings, options || {});

        this.lang = function(language) {
            if (language.length) {
                settings.lang = language;
                this.jtranslate(settings);
            }

            return settings.lang;
        };

        this.get = function(index) {
            var res = "";

            try {
                res = settings.dictionary[index][settings.lang];
            } catch (err) {
                res = "";
                return res;
            }

            if (res.length) {
                return res;
            }
            return index;
        };

        //search and translate
        this.find("."+settings.classVal).each(function() {
            var $this = $(this),
                key = "",
                textValue = "",
                textNodes,
                textNodeCount = 0,
                i = 0,
                trnKey = "",
                indexArray = [];

            indexArray = $.data($this, "keyСount");
            if (!indexArray) {
                indexArray = [];
                textNodes = $this.currentNodeText();
                textNodeCount = textNodes.length;
                for (i = 0; i < textNodeCount; i = i + 1) {
                    indexArray.push(textNodes[i].index);
                }
                $.data($this, "keyCount", indexArray);

                if (textNodeCount > 0) {
                    for (i = 0; i < textNodeCount; i = i + 1) {
                        textValue = $.trim($(textNodes[i].textNode).text());
                        trnKey = textValue.replace('&nbsp;', ' ');
                        $.data($this, "key_" + indexArray[i], trnKey); //store key for next time
                    }
                }
            }
            for (i = 0; i < indexArray.length; i = i + 1) {
                trnKey = $.data($this, "key_" + indexArray[i]);
                key = self.get(trnKey);
                if (key !== null) {
                    $this.setCurrentNodeText(key, indexArray[i]);
                }
            }
        });

        return this;
    };

    $.fn.currentNodeText = function() {
        var index = 0,
            textValue = "",
            retObject = [],
            p = $(this.contents().filter(function() {
                if (this.nodeType == 3) {
                    textValue = $.trim($(this).text().replace('&nbsp;', ' '));
                    if (textValue != "" && textValue != null && textValue != "undefined") {
                        //for ie8
                        retObject.push({
                            textNode: this,
                            index: index
                        });
                        //not work in ie8
                        //this.index = index;
                        index = index + 1;
                        return this;
                    }
                }
                index = index + 1;
            }));
        return retObject;
    }

    $.fn.setCurrentNodeText = function(text, index) {
        var domObject = this.get(0),
            text_to_change = domObject.childNodes[index];

        text_to_change.nodeValue = text;
    }
})(jQuery);