<template>
  <Layout>
    <h1>{{ title }}</h1>
    <MarkdownConverter :md-text="article" />
  </Layout>
</template>

<script>
import MarkdownConverter from '~/components/utils/MarkdownConverter.vue';

const contentful = require('contentful');

const previewClient = () => {
  return contentful.createClient({
    space: process.env.GRIDSOME_CONTENTFUL_SPACE_ID,
    accessToken: process.env.GRIDSOME_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    host: 'preview.contentful.com',
  });
};

const getPreviewEntry = (entryId) => {
  return previewClient().getEntry(entryId);
};

export default {
  components: {
    MarkdownConverter,
  },
  data() {
    return {
      title: '',
      tags: [],
      publishedAt: '',
      article: '',
    };
  },
  async mounted() {
    try {
      const { id } = this.$route.params;
      const res = await getPreviewEntry(id);
      this.title = res.fields.title;
      this.tags = res.fields.tags;
      this.publishedAt = res.fields.publishedAt;
      this.article = res.fields.article;
    } catch (e) {
      console.log({ e });
    }
  },
};
</script>
