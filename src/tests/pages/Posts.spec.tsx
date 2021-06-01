import { render, screen } from "@testing-library/react";
import Posts, { getStaticProps } from "../../pages/posts";
import { mocked } from "ts-jest/utils";
import { getPrismicClient } from "../../services/prismic";

jest.mock("../../services/prismic");

const posts = [
  {
    slug: "my-new-post",
    title: "My New Post",
    excerpt: "Post excerpt",
    updatedAt: "March, 10",
  },
];

describe("Posts Page", () => {
  it("renders correctly", () => {
    render(<Posts posts={posts} />);

    expect(screen.getByText("My New Post")).toBeInTheDocument();
  });

  it("loads initial data", () => {
    const getPrismicClientMocked = mocked(getPrismicClient);

    getPrismicClientMocked.mockReturnValueOnce({
      query: jest.fn().mockResolvedValueOnce({
        results: [
          {
            uid: "my-new-post",
            data: {
              title: [{ type: "heading", text: "My New Post" }],
              content: [{ type: "paragraph", text: "Post excerpt" }],
            },
            last_publication_data: "04-01-2021",
          },
        ],
      }),
    } as any);

    const response = getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: [
            {
              slug: 'my-new-post',
              title: 'My new post',
              excerpt: 'Post excerpt',
              updatedAt: '01 de abril de 20121'
            },
          ],
        },
      })
    );
  });
});
