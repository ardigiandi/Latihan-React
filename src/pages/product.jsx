import Button from "../components/element/button/button";
import Productcard from "../components/fragment/productcard";

const Product = [
  {
    id: "1",
    title: "Mobil Baru",
    price: "1.000.000.000.000",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ex ea, eius maiores odit magnam fuga impedit numquam quo voluptatum exercitationem officia, eum veniam asperiores ratione voluptates veritatis pariatur error?",
    image: "/public/image/white-offroader-jeep-parking.jpg",
  },
  {
    id: "2",
    title: "Mobil Baru",
    price: "1.000.000.000.000",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ex ea, eius maiores odit magnam fuga impedit numquam quo voluptatum exercitationem officia, eum veniam asperiores ratione voluptates veritatis pariatur error?",
    image: "/public/image/white-offroader-jeep-parking.jpg",
  },
  {
    id: "3",
    title: "Mobil Baru",
    price: "1.000.000.000.000",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ex ea, eius maiores odit magnam fuga impedit numquam quo voluptatum exercitationem officia, eum veniam asperiores ratione voluptates veritatis pariatur error?",
    image: "/public/image/white-offroader-jeep-parking.jpg",
  },
];

const email = localStorage.getItem("email");

const Productpage = () => {

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = "/login";
  };

  return (
    <>
      <div className="bg-blue-600 w-full flex justify-end items-center px-5 text-white py-4 gap-x-5">
        {email}
        <Button className="bg-black px-5 py-3 rounded-full" onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex mx-auto max-w-4xl space-x-4">
        {Product.map((Product) => (
          <Productcard key={Product.id}>
            <Productcard.header image={Product.image} />
            <Productcard.body title="Mobil baru">
              {Product.description}
            </Productcard.body>
            <Productcard.footer>{Product.price}</Productcard.footer>
          </Productcard>
        ))}
      </div>
    </>
  );
};

export default Productpage;
