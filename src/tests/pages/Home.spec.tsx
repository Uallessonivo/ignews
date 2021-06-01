import { render, screen } from "@testing-library/react";
import Home, { getStaticProps } from "../../pages";
import { stripe } from "../../services/stripe";
import { mocked } from "ts-jest/utils";

jest.mock("next/router");
jest.mock("next-auth/client", () => {
  return {
    useSession: () => [null, false],
  };
});
jest.mock("../../services/stripe");

describe("Home Page", () => {
  it("renders correctly", () => {
    render(<Home product={{ priceId: "fake-price-id", amount: "$10.00" }} />);

    expect(screen.getByText("for $10.00 month")).toBeInTheDocument();
  });

  it("loads initial data", () => {
    const retrieveStripePricesMocked = mocked(stripe.prices.retrieve);

    retrieveStripePricesMocked.mockResolvedValueOnce({
      id: "fake-price-id",
      unit_amount: 1000,
    } as any);

    const response = getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceId: "fake-price-id",
            amount: "$10.00",
          },
        },
      })
    );
  });
});
