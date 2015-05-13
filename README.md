# jtranslate 

jtranslate is jquery plugin for translating some text on html page.


# Installation

Installation is easy. 
Include jquery from jquery CDN in header of page:

`<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>`

Include the script jquery.translate.js into footer of your page:

`<script src="/path/to/jquery.translate.js"></script>`

Now, everything installed.

# How to use
You can translate text on page such as in example:

Basic usage:
```javascript
    $(document).ready(function() {
        $("body").find("a,span,div,p,button,label,select,option,li,h1,h2").addClass("jqt");
        $('body').jtranslate({
            lang: "ru",
            dictionary: {
                "HOME": {
                    "ru": "ГЛАВНАЯ"
                },
                "SERVICES": {
                    "ru": "СЕРВИСЫ"
                },
                "WORKS": {
                    "ru": "РАБОТЫ"
                },
                "CONTACT": {
                    "ru": "КОНТАКТЫ"
                },
                "DESIGN AGENCY": {
                    "ru": "АГЕНТСТВО ДИЗАЙНА"
                },
                "You Think, We Deliver": {
                    "ru": "Вы Думаете, Мы Создаем"
                },
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.": {
                    "ru": "тест тест тест тест тест"
                },
                "OUR SERVICES": {
                    "ru": "НАШИ СЕРВИСЫ"
                }
            }
        });

    });
```

Also, you can create dictionary.json file to store json information for translations. Then you can load data from this files, for example:
```javascript
	$.getJSON("/path/to/dictionary.json", function(json) {
        var translator = $('body').jtranslate({
            lang: "ru",
            dictionary: json
        });
```

You can find example in github pages http://pitmov.github.io/jtranslate/
