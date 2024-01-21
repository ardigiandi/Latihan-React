import Productcard from "../components/fragment/productcard";

const Product = () => {
  return (
    <Productcard>
      <Productcard.header image='/public/image/white-offroader-jeep-parking.jpg'/>
      <Productcard.body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ex ea, eius maiores odit magnam fuga impedit numquam quo voluptatum exercitationem officia, eum veniam asperiores ratione voluptates veritatis pariatur error?
      </Productcard.body>
      <Productcard.footer>
        Rp.1.000.000.000
      </Productcard.footer>
    </Productcard>
  );
};

export default Product;
