{% extends 'common:page/layout.tpl' %}
{% block content %}
	{% widget "index:widget/slide/slide.tpl"%}
	{% widget "index:widget/classtype/classtype.tpl"%}
	{% widget "index:widget/exCourse/exCourse.tpl"%}
	{% widget "index:widget/technology/technology.tpl"%}
	{% widget "index:widget/test/test.tpl"%}
{% endblock %}