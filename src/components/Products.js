import React from "react";
import "../styles/Products.css";
import Butter from "../assets/butter.jpeg";
import Yogurt from "../assets/curd.jpg";
import Ghee from "../assets/ghee.jpg";
import Cheese from "../assets/cheese.jpg";
import ButterMilk from "../assets/buttermilk.jpg";
import Cream from "../assets/cream.jpg";
import ReadMore from "./ReadMore";

const Products = () => {
  return (
    <div>
      <title>Products</title>
      <section id="products">
        <div className="product-heading">
          <h3>Products</h3>
        </div>
        <div className="product-container">
          <div className="product-box">
            <div className="product-img">
              <img src={Butter} alt="" />
            </div>
            <div className="product-text">
              <h2>Butter</h2>
              {/* <a href="#">Read More</a> */}
              <ReadMore limit={298}>
                Made by churning fresh and fermented cream and milk. It is
                generally used as a spread and a condiment, as well as in
                cooking, such as baking, sauce making, and pan frying.
                Commercial butter is about 80% butterfat and 15% water;
                traditionally made butter may have as little as 65% fat and 30%
                water. As butter is essentially just the milk fat, it contains
                only traces of lactose, so moderate consumption of butter is not
                a problem for lactose intolerant people. People with milk
                allergies may still need to avoid butter, which contains enough
                of the allergy-causing proteins to cause reactions. Whole milk,
                butter and cream have high levels of saturated fat
              </ReadMore>
            </div>
          </div>
          <div className="product-box">
            <div className="product-img">
              <img src={Ghee} alt="" />
            </div>
            <div className="product-text">
              <h2>Ghee</h2>
              <ReadMore limit={304}>
                Refers to a number of dairy drinks. Originally, buttermilk was
                the liquid left behind after churning butter out of cream. This
                type of buttermilk is called traditional buttermilk. When butter
                is made from fermented cream, the residual is a low-fat,
                flavorful milk with a viscosity greater than fresh milk.
                Commercially produced buttermilk is comparable to regular milk
                in terms of food energy and fat. One cup (237 mL) of whole milk
                contains 660 kilojoules (157 kilocalories) and 8.9 grams of fat.
                One cup of whole buttermilk contains 640 kJ (152 kcal) and 8.1
                grams of total fat. Low-fat buttermilk is also
                available.Buttermilk contains vitamins, potassium, calcium, and
                traces of phosphorus.
              </ReadMore>
            </div>
          </div>
          <div className="product-box">
            <div className="product-img">
              <img src={Yogurt} alt="" />
            </div>
            <div className="product-text">
              {/* <a href="#" className="product-title">Yogurt</a> */}
              <h2>Yogurt</h2>
              <ReadMore limit={227}>
                Yogurt is produced using a culture of Lactobacillus delbrueckii
                subsp. bulgaricus and Streptococcus thermophilus bacteria. In
                addition, other lactobacilli and bifidobacteria are sometimes
                added during or after culturing yogurt. Some countries require
                yogurt to contain a specific amount of colony-forming units
                (CFU) of bacteria; in China, for example, the requirement for
                the number of lactobacillus bacteria is at least 1 million CFU
                per milliliter.
              </ReadMore>
            </div>
          </div>
          <div className="product-box">
            <div className="product-img">
              <img src={Cheese} alt="" />
            </div>
            <div className="product-text">
              {/* <a href="#" className="product-title">Cheese</a> */}
              <h2>Cheese</h2>
              <ReadMore limit={362}>
                A food derived form milk which is produced in wide range of
                flavors , textures , and forms of coagulation of milk protein
                casein. Cheese is valued for its portability and long shelf
                life. The nutritional composition of cheese depends upon the
                type of cheese. However, we have taken the examples of cheddar
                and mozzarella to mention the base components of cheese.For
                healthy brain activity, our body uses the fats it derives from
                the food we eat. Being rich in omega 3 and six fatty acids,
                cheese is a delicious way to keep that mind working.
              </ReadMore>
            </div>
          </div>
          <div className="product-box">
            <div className="product-img">
              <img src={ButterMilk} alt="" />
            </div>
            <div className="product-text">
              <h2>Buttermilk</h2>
              <ReadMore limit={409}>
                Refers to a number of dairy drinks. Originally, buttermilk was
                the liquid left behind after churning butter out of cream. This
                type of buttermilk is called traditional buttermilk. Buttermilk
                has probiotic which can help in digestion. This bacteria will
                keep the intestine and the digestion tract stay healthy and
                prevent it from any infection that caused by pathogen
                microorganism such as Helycobacter pilory.
              </ReadMore>
            </div>
          </div>
          <div className="product-box">
            <div className="blog-img">
              <img
                src="https://www.sharmispassions.com/wp-content/uploads/2013/02/FreshCream4-500x375.jpg"
                alt=""
              />
            </div>
            <div className="product-text">
              {/* <a href="#" className="product-title">Cream</a> */}
              <h2>Cream</h2>
              <ReadMore limit={168}>
                Composed of higher butterfat layer skimmed from top of milk
                before homogenisation. In un homogenised milk, the fat, which id
                less dense will eventually rise to the top. Heavy whipping cream
                is high in calories but also rich in healthy fat and several
                vitamins and minerals. It's generally used in small amounts,
                such as in coffee or recipes that need a bit of creaminess, so
                it's unlikely to add significant calories to your diet.
              </ReadMore>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
