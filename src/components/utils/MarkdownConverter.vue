<template>
  <div class="markdown-converter" v-html="convertedTemplate"></div>
</template>

<script>
import marked from 'marked';
import sanitizeHtml from 'sanitize-html';

export default {
  props: {
    mdText: {
      type: String,
      default: '',
    },
  },
  computed: {
    convertedTemplate() {
      return sanitizeHtml(marked(this.mdText), {
        allowedTags: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'blockquote',
          'p',
          'a',
          'ul',
          'ol',
          'nl',
          'li',
          'b',
          'i',
          'strong',
          'em',
          'strike',
          'code',
          'hr',
          'br',
          'div',
          'table',
          'thead',
          'caption',
          'tbody',
          'tr',
          'th',
          'td',
          'pre',
          'iframe',
        ],
        allowedAttributes: {
          '*': ['class', 'style', 'width', 'height'],
          a: ['href', 'name', 'target', 'class', 'style', 'width', 'height'],
          img: ['src', 'class', 'style', 'width', 'height'],
        },
      });
    },
  },
};
</script>
