import { render, screen } from "@testing-library/react";
import { ProductItem } from "@/entities/Product";

jest.mock("next/image", () => {
  return ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  );
});

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 100,
  description: "Test Description",
  image: "https://example.com/image.jpg",
  category: "men's clothing",
};

describe("ProductItem", () => {
  it("renders product details correctly", () => {
    render(<ProductItem product={mockProduct} />);

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.price} $`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockProduct.image);
    expect(image).toHaveAttribute("alt", `product ${mockProduct.id} image`);
  });
});
