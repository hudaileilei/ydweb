<!doctype html>
{% html lang="en" framework="common:static/js/mod.js" %}
    {% head %}
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="/static/favicon.ico">
        <title>{{ title }}</title>
        {% require "common:static/js/common_libs.js" %}
        {% require "common:static/css/normalize.css" %}
        {% require "common:static/css/ydweb.css" %}
        {% require "common:static/css/swiper.min.css" %}
    {% endhead %}

    {% body %}
        <div class="wrapper">
            <div class="container">
                {% widget "common:widget/header/header.tpl"%}
                {% block content %}
                {% endblock %}
                {% widget "common:widget/footer/footer.tpl"%}
            </div>
        </div>
    {% endbody %}

{% endhtml %}
