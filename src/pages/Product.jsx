import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img src="img-1.jpg" alt="aesthetic aeroplane" />
        <div>
          <h2>About RoamRift.</h2>
          <p>
            Welcome to RoamRift - Your Travel Companion Capture your adventures
            with RoamRift, the perfect travel diary. <br /> <br />
            🌍 Track Your Travels: Pin places on an interactive map. <br /> 📝
            Personalized Notes: Document experiences and emotions. <br /> 📸
            Photo Gallery: Create a visual journey. <br />
            🌟 Memorable Moments: Highlight your favorite memories. <br /> 🗺️
            Plan Future Adventures: Explore and add to your wishlist. <br /> ✨
            User-Friendly: Intuitive design for easy navigation. <br /> 🔒
            Privacy and Security: Your data is safe with us. <br />
            🌐 Sync Across Devices: Access your diary anywhere, anytime.
            <br />
          </p>
        </div>
      </section>
    </main>
  );
}
