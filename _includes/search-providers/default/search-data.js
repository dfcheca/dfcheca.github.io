window.TEXT_SEARCH_DATA = {
  {%- for _collection in site.collections -%}
    {%- unless forloop.first -%},{%- endunless -%}
    '{{ _collection.label }}': [
      {%- for _article in _collection.docs -%}
      {%- unless forloop.first -%},{%- endunless -%}
      {
        'title': {{ _article.title | jsonify }},
        'url': {{ _article.url | jsonify }},
        'content': {{ _article.content | jsonify | strip_newlines }}
      }
      {%- endfor -%}
    ]
  {%- endfor -%},
  'pages': [
    {%- assign _page_count = 0 -%}
    {%- for _page in site.pages -%}
      {%- assign _has_title = false -%}
      {%- if _page.title -%}{%- assign _has_title = true -%}{%- endif -%}
      {%- if _page.titles -%}{%- assign _has_title = true -%}{%- endif -%}
      {%- unless _has_title == false or _page.title == 'Blog' or _page.title == 'Archive' -%}
        {%- if _page_count > 0 -%},{%- endif -%}
        {%- assign _page_count = _page_count | plus: 1 -%}
        {
          'title': {{ _page.title | default: 'Home' | jsonify }},
          'url': {{ _page.url | jsonify }},
          'content': {{ _page.content | jsonify | strip_newlines }}
        }
      {%- endunless -%}
    {%- endfor -%}
  ]
};