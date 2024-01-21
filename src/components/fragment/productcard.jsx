import Button from "../element/button/button";

const productcard = (props) => {
  const { children } = props;

  return (
    <div className="flex justify-center mt-20 ">
      <div className="w-full max-w-sm bg-white border border-gray-500 rounded-lg shadow space-y-4 px-4 py-4">
        {children}
      </div>
    </div>
  );
};

const header = (props) => {
  const { image } = props;

  return (
    <a href="">
      <img src={image} alt="" className="rounded-lg" />
    </a>
  );
};

const body = (props) => {
  const { children, title } = props;

  return (
    <>
      <p>{title}</p>
      <h1>{children}</h1>
    </>
  );
};

const footer = (props) => {
  const { children } = props;

  return (
    <div className="flex justify-between items-center">
      <p>{children}</p>
      <Button className="bg-blue-500 px-8 py-3 text-white rounded-lg">
        buy
      </Button>
    </div>
  );
};

productcard.header = header;
productcard.body = body;
productcard.footer = footer;

export default productcard;
