import { posters } from "../Data";
import { SPDForP, SPDForPP, SPDForPC, SPDForPCP } from "../constants";
import { useParams } from "react-router-dom";
import SingleProduct from "../components/SingleProduct";

const Product = () => {
  const { id, type } = useParams();

  const filteredData = posters.filter((item) => item.id == id);
  const postDesc = type == "poster" ? SPDForP : SPDForPC;
  const paperDesc = type == "poster" ? SPDForPP : SPDForPCP;

  return (
    <section className="w-full py-16 px-2 lg:px-10">
      
      <SingleProduct filteredData={filteredData} data={posters} postDesc={postDesc} paperDesc={paperDesc} id={id} type={type}/>

    </section>
  );
};

export default Product;
