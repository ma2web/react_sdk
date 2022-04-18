import React from 'react';
import { simplifyPaginatedResult } from '@tribeplatform/react-sdk/utils';
import { Post } from '@tribeplatform/gql-client/types';
import { useFeed } from '@tribeplatform/react-sdk/hooks';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';
import MainLayout from 'layout/MainLayout/MainLayout';
import { useStyles } from './News.styles';
import Loader from 'components/loader/Loader';

const News = () => {
  const classes = useStyles();
  const { data, fetchNextPage, hasNextPage, isLoading } = useFeed({
    fields: {
      reactions: {
        fields: 'all',
        variables: {
          limit: 21,
        },
      },
      authMemberProps: 'all',
      createdBy: {
        member: 'basic',
      },
    },
    variables: {
      limit: 21,
    },
  });
  const { nodes: posts } = simplifyPaginatedResult<Post>(data);

  return (
    <MainLayout>
      {isLoading ? (
        <div className={classes.loading}>
          <Loader />
        </div>
      ) : (
        <div className={classes.root}>
          <InfiniteScroll
            pageStart={0}
            loadMore={fetchNextPage}
            hasMore={hasNextPage}
            loader={<Loader />}
          >
            <div className={classes.cards}>
              {posts.map((post, i) => (
                <div key={post?.id} className={classes.cardContainer}>
                  <div className={classes.card}>
                    <div className={classes.title} title={post.title as any}>
                      <Link to={`/news/${post.id}`}>
                        <div>{post.title}</div>
                      </Link>
                    </div>
                    <div className={classes.meta}>
                      <div>By {post.createdBy?.member?.name}</div>
                      <div>{post.reactionsCount} upvotes</div>
                      <div>{post.repliesCount} comments</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </div>
      )}
    </MainLayout>
  );
};

export default News;
