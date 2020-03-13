<template>
  <Layout>
    <h1>{{ post.title }}</h1>
    <time :datetime="post.publishedAt">{{ post.publishedAt }}</time>
    <MarkdownConverter :md-text="post.article" />
  </Layout>
</template>

<page-query>
  query($path: String!) {
    post: contentfulBlogPosts(path: $path) {
      title
      article
      publishedAt
    }
  }
</page-query>

<script>
import MarkdownConverter from '~/components/utils/MarkdownConverter.vue';

export default {
  components: {
    MarkdownConverter,
  },
  computed: {
    post() {
      return this.$page.post;
    },
  },
};
</script>
