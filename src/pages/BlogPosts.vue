<template>
  <Layout>
    <ul>
      <template v-for="post in $page.posts.edges">
        <li :key="post.node.slug">
          <g-link :to="`/blog-posts/${post.node.slug}`">{{
            post.node.title
          }}</g-link>
        </li>
      </template>
    </ul>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Blog list',
  },
};
</script>

<page-query>
  query {
    posts: allContentfulBlogPosts {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
</page-query>
