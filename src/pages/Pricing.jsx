// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $4.99/month.
          </h2>
          <p>
            Explore Premium Features with RoamRift - Pricing Plans Unlock the
            full potential of RoamRift with our premium features. <br /> ✅
            Choose a plan that suits your needs and enhances your travel
            experience. <br /> 😁 Basic Plan - Free Forever Track and document
            your travels. Personalized notes and memories. Photo gallery to
            showcase your adventures. <br /> 💵 Premium Plan ($4.99/month)-
            <br />
            😊 Memorable Moments: Highlight and cherish your favorite memories.
            Plan Future Adventures: Explore and add to your wishlist. 🥰 Ad-free
            experience for uninterrupted travel journaling. <br />
            ⚡Embark on a seamless journey with RoamRift's premium features.
            Upgrade today and make your travel diary truly unforgettable!
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
