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
  {%- endfor -%}
};
