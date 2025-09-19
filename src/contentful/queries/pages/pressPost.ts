import fetchGraphql from '@/contentful/client';

export async function getLatestPressPost(slug: string, locale: string): Promise<any> {
  const selectedLocale = locale =='en'? 'en-US' : locale;
  const { data } = await fetchGraphql({
    query: `{
        pressPostCollection(where: {slug : "${slug}"},locale: "${selectedLocale}" limit: 1) {
          items {
            title
            slug
            body{
              json
            }
            author{
              ... on Author{
                avatar{
                  url
                }
                name
                bio
              }
            }
            heroImage {
              url
              title
            }
          }
        }
      }`,
    tag: 'press-post'
  });

  return data?.pressPostCollection?.items?.[0];
}
