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
      return sanitizeHtml(marked(this.mdText));
    },
  },
};
</script>
