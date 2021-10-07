import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";
import NavBar from "../components/NavBar";

export default function Home() {
  const goToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="">
      <NavBar />
      {/* Home */}
      <div id="home" className="py-8 bg-tile_gray ">
        <div className="w-11/12 mx-auto flex flex-col items-center justify-center  md:flex-row-reverse">
          <img
            className="object-cover rounded-lg max-w-xs md:w-96 md:max-w-md"
            src="https://i.imgur.com/qu0Vu2x.jpg"
            alt="Yummy Steak"
          />
          <div className="flex flex-col items-center md:items-end md:ml-10 md:pr-4 md:max-w-sm">
            <h1
              className="block text-sand_stone text-5xl uppercase text-center leading-10 mt-5 md:text-right title"
              style={{ fontWeight: 900 }}>
              Delicious <br />
              Dinners
            </h1>
            <span className="text-white  text-center mt-2 text-sm leading-relaxed md:text-right md:text-lg">
              Our restaurant nests itself in this magical and hidden gem of
              South Goa, “Tanggies” perfectly captures what we are all about and
              awhat our restauarnt believes in. No one can survive this life by
              just being sweet, you have to be spicy at times and a bit tangy at
              times as well to make it through!
            </span>
            <div className="flex mt-3">
              <button
                onClick={goToContact}
                className="px-3 py-2 bg-white rounded-sm text-black text-center hover:scale-105 transition-all">
                Book a Table
              </button>
              <button
                onClick={goToContact}
                className="ml-4 px-2 py-2 rounded-sm text-white border-2 border-white text-center hover:scale-105 transition-all">
                Order a Take Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div id="about_us" className="py-8 bg-off_white">
        <div className="w-11/12 mx-auto flex flex-col items-center justify-center md:flex-row">
          <img
            className="object-cover rounded-lg max-w-xs lg:max-w-sm"
            src="https://i.imgur.com/JhOM23x.png"
            alt="Tanggies Entrance"
          />
          <div className="flex flex-col items-center md:items-start md:px-4 md:max-w-3xl">
            <h1
              className="block text-wood text-5xl uppercase text-center leading-10 mt-5 md:text-left title"
              style={{ fontWeight: 900 }}>
              About Us
            </h1>
            <span className="text-lighter_black text-center mt-2 text-sm leading-normal md:text-left md:text-base">
              Settled in South Goa, overlooking the confluence of the Arabian
              sea and the Sal River, Cavelossim harbors a few of the prettiest
              sights in Goa. With the gorgeous white sands shimmering in the sun
              and the great waves creahing against the golden shores, it is a
              beautiful sight to witness. The calming hillocks in the distance,
              and the views of the sunset add to its peaceful and relaxed charm.
            </span>
            <span className="text-lighter_black text-center mt-2 text-sm leading-normal md:text-left md:text-base">
              Our restaurant has been through a few of its exciting changes in
              our history. We began as a local bar called “Get Down” back in
              1973. Yes, we go way back. In fact, we were one of the very first
              local bars in Mobor, Cavelossim. We also had the pleasure of being
              one of the first restaurants to host and welcome tourists from
              around the world through our doors
            </span>
            <span className="text-lighter_black text-center mt-2 text-sm leading-normal md:text-left md:text-base">
              People came from far and wide to have a taste of this magical
              blend of spices that had all the locals talking, which gave us no
              option but to create the restaurant we are today.
            </span>
          </div>
        </div>
      </div>

      {/* Private Dining */}
      <div id="private_dining" className="p-8 bg-night_blue ">
        <div className="w-11/12 mx-auto flex flex-col items-center justify-center md:flex-row-reverse">
          <img
            className="object-cover rounded-lg max-w-xs lg:max-w-sm md:h-96 lg:max-h-96"
            src="https://i.imgur.com/FpIBZ5C.jpg"
            alt="Tanggies at Night"
          />
          <div className="flex flex-col items-center text-center font-light text-sm md:px-4 md:text-right md:items-end md:text-base md:max-w-3xl">
            <h1
              className="block text-bluish_white text-5xl uppercase leading-10 mt-5 md:mt-0 font-black"
              style={{ fontWeight: 900 }}>
              Private
              <br />
              Dining
            </h1>
            <span className="text-white mt-2 leading-normal">
              These days, restaurants have private spaces within their prmise
              itself that allow to dine privately from the rest of the
              restaurant with guests that have been invited by that party only.
              You have the choice to tailor these private dining rooms to your
              needs and design! Its can be for a particular occasion with a
              specific theme and defined cuisine.
            </span>
            <span className="text-white mt-2 leading-normal">
              Whatever it is, it can be done privately with guests that you
              choose to invite - a little world of your own within paradisee.
              Tanggies has been rebranded and renovated, as mentioned which has
              allowed us to create a niche just for you ad your friends!
            </span>
            <span className="text-white mt-2 leading-normal">
              When a custom setting is needed, or a little more privacy is
              required, private dining can come to your aid. Or even when you
              need something which is a bit different to switch it up from what
              you usually do!
            </span>
            <span className="text-white mt-2 leading-normal">
              South Goa invites you to explore all that Cavelossim offers and to
              discover the magic of Tanggies and Silver Waves Shack!
            </span>
          </div>
        </div>
      </div>

      {/* Beach Shack */}
      <div id="beach_shack" className="p-8 bg-sand ">
        <div className="w-11/12 mx-auto flex flex-col items-center justify-center md:flex-row">
          <img
            className="object-cover rounded-lg max-w-xs lg:max-w-sm md:h-96 lg:max-h-96"
            src="https://i.imgur.com/h33brY7.jpg"
            alt="Silver Waves Beach Shack"
          />
          <div className="flex flex-col items-center text-center text-sm md:text-left md:items-start md:px-4 md:text-base md:max-w-3xl">
            <h1
              className="text-brownish_black text-5xl uppercase leading-10 mt-5 md:mt-0"
              style={{ fontWeight: 900 }}>
              Beach
              <br />
              Shack
            </h1>
            <span
              className="text-black mt-2 text-xl"
              style={{ fontWeight: 500 }}>
              The "Silver Waves" of Mobor!
            </span>
            <span className="text-lighter_black mt-2 leading-normal">
              We first opened the shack in the early 1990s when tourists came to
              the area to stay in the local hotels and immerse themselves in the
              culture of South Goa. It’s a seasonal beach café that also serves
              multi-cuisine dishes, including Goan, Indian, and Indo-Chinese
              food. One of the favourites cuisine is the fresh local seafood
              that will want you to stay in South Goa forever.
            </span>
            <span className="text-lighter_black mt-2 leading-normal">
              Serene, tranquil, and beautiful. Mobor beach. A long and beautiful
              stretch of sand, lined with casuarina and palm trees and
              surrounded by water on three sides. A little slice of heaven to go
              with delicious seafood at our sister café, the Silver Waves Beach
              Shack, which operates from November through April.
            </span>
            <span className="text-lighter_black mt-2 leading-normal">
              It is the place for relaxation and privacy. A cosmopolitan or a
              margarita, you can choose your poison as you take in the beauty of
              the white sand and glow of the shore from the shack. The fireworks
              light up the sky at night once the sun sets, there’s always
              something to admire from here.
            </span>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="p-8 bg-cyan ">
        <div className="w-11/12 mx-auto flex flex-col items-center md:flex-row md:justify-center">
          <Contact />
          <div className="mt-4 md:mt-0 md:ml-4">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="h-14 w-full bg-off_white flex justify-center items-center">
        <span className="font-light text-xs">
          © Copyright 2021 | TanggiesGoa | All Rights Reserved |
        </span>
        <div className="ml-1 flex items-center">
          <a
            style={{ cursor: "pointer" }}
            href="https://www.instagram.com/tanggiesgoa/"
            target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-instagram w-4 h-4 md:w-6 md:h-6"
              viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </a>
          <a
            style={{ cursor: "pointer" }}
            href="https://www.tripadvisor.in/Restaurant_Review-g775971-d3864497-Reviews-Tanggies_Restaurant-Cavelossim_South_Goa_District_Goa.html"
            target="_blank">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 w-4 h-4 md:w-6 md:h-6"
              viewBox="0 0 812.82 729.6">
              <path
                d="M346.87,517.5a71.94,71.94,0,1,0-71.93-71.93A71.94,71.94,0,0,0,346.87,517.5Z"
                transform="translate(-143.89 -143.89)"
              />
              <circle cx="608.53" cy="301.68" r="71.94" />
              <path
                d="M144.1,445.57c0,112,90.78,202.77,202.77,202.77a202,202,0,0,0,137.81-54.05l65,70.73,65-70.69a202,202,0,0,0,137.77,54c112,0,202.86-90.79,202.86-202.77A202.29,202.29,0,0,0,889.13,295.7l66.35-72.19H808.39a459.49,459.49,0,0,0-517,0H143.89l66.35,72.19A202.28,202.28,0,0,0,144.1,445.57Zm745.55,0A137.23,137.23,0,1,1,752.42,308.34,137.23,137.23,0,0,1,889.65,445.57Zm-340-235.33A393.78,393.78,0,0,1,702,240.7c-86.61,33.14-152.28,110.62-152.28,200.91,0-90.3-65.69-167.79-152.31-200.92A393.7,393.7,0,0,1,549.65,210.24Zm-202.78,98.1A137.23,137.23,0,1,1,209.64,445.57,137.23,137.23,0,0,1,346.87,308.34Z"
                transform="translate(-143.89 -143.89)"
              />
              <path
                d="M948.42,833.27a8.29,8.29,0,1,0,8.29,8.29A8.3,8.3,0,0,0,948.42,833.27Zm0,15.28a7,7,0,1,1,7-7A7,7,0,0,1,948.42,848.55Z"
                transform="translate(-143.89 -143.89)"
              />
              <path
                d="M951.11,840.15a2.36,2.36,0,0,0-2.64-2.4h-2.65v7.54h1.3v-2.74h1.41l1.37,2.74h1.41l-1.51-3A2.18,2.18,0,0,0,951.11,840.15Zm-2.7,1.25h-1.29v-2.5h1.29c.87,0,1.4.44,1.4,1.25S949.28,841.4,948.41,841.4Z"
                transform="translate(-143.89 -143.89)"
              />
              <path
                d="M238.87,777.87V763.59H217v85h21.9V797.61c0-9.23,5.92-13.76,15.15-13.76h12V763.59H255.76C247.75,763.59,240.78,767.77,238.87,777.87Z"
                transform="translate(-143.89 -143.89)"
              />
              <path
                d="M286.51,730a13.32,13.32,0,1,0,13.23,13.41A13.15,13.15,0,0,0,286.51,730Z"
                transform="translate(-143.89 -143.89)"
              />
              <rect x="131.7" y="619.7" width="21.84" height="84.95" />
              <path
                d="M357.57,762.16a42.22,42.22,0,0,0-25.78,8.62v-7.19H310V873.48h21.84V841.36A42.28,42.28,0,0,0,357.57,850a43.91,43.91,0,0,0,0-87.82Zm-1.93,67.76a23.86,23.86,0,1,1,23.86-23.85A23.85,23.85,0,0,1,355.64,829.92Z"
                transform="translate(-143.89 -143.89)"
              />
              <path
                d="M781.14,798.62l-12.74-3.5c-8.38-2.18-11.65-4.76-11.65-9.19s4.59-7.33,11.16-7.33c6.26,0,11.16,4.1,11.16,9.33v.49H799.2v-.49c0-15.42-12.57-25.77-31.29-25.77-18.54,0-32,10.35-32,24.61,0,11.09,7.36,19.45,20.18,22.92L768.3,813c9.27,2.57,12.71,5.42,12.71,10.52,0,5.38-5,9-12.39,9-7.74,0-12.93-4.89-12.93-12.16v-.49H734.32v.49c0,17.43,14,29.6,34.12,29.6,19.36,0,33.41-11.89,33.41-28.27C801.85,813.69,798.26,803.18,781.14,798.62Z"
                transform="translate(-143.89 -143.89)"
              />
              <path
                d="M479,770.78a42.22,42.22,0,0,0-25.78-8.62,43.91,43.91,0,0,0,0,87.82A42.28,42.28,0,0,0,479,841.36v7.19h21.84v-85H479Zm0,35.29a23.86,23.86,0,1,1-23.85-23.86A23.85,23.85,0,0,1,479,806.07Z"
                transform="translate(-143.89 -143.89)"
              />
              <path
                d="M579.68,770.78a42.21,42.21,0,0,0-25.77-8.62,43.91,43.91,0,1,0,0,87.82,42.28,42.28,0,0,0,25.77-8.62v7.19h21.84V733.35H579.68Zm-23.85,59.14a23.86,23.86,0,1,1,23.85-23.85A23.85,23.85,0,0,1,555.83,829.92Z"
                transform="translate(-143.89 -143.89)"
              />
              <rect x="559.06" y="619.7" width="21.84" height="84.95" />
              <path
                d="M713.87,730a13.32,13.32,0,1,0,13.23,13.41A13.15,13.15,0,0,0,713.87,730Z"
                transform="translate(-143.89 -143.89)"
              />
              <path
                d="M852.36,762.16a43.91,43.91,0,1,0,43.91,43.91A43.91,43.91,0,0,0,852.36,762.16Zm0,67.76a23.86,23.86,0,1,1,23.85-23.85A23.85,23.85,0,0,1,852.36,829.92Z"
                transform="translate(-143.89 -143.89)"
              />
              <polygon points="83.79 589.46 0 589.46 0 608.95 31.02 608.95 31.02 704.66 52.78 704.66 52.78 608.95 83.79 608.95 83.79 589.46" />
              <polygon points="507.55 681.39 488.13 619.7 465.18 619.7 494.32 704.66 520.61 704.66 549.92 619.7 526.98 619.7 507.55 681.39" />
              <path
                d="M955.4,783.85V763.59H945.17c-8,0-15,4.18-16.89,14.28V763.59H906.39v85h21.89V797.61c0-9.23,5.92-13.76,15.15-13.76Z"
                transform="translate(-143.89 -143.89)"
              />
            </svg>
          </a>
          <a
            style={{ cursor: "pointer" }}
            href="https://www.facebook.com/tanggiesgoa"
            target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="ml-1 bi bi-facebook w-4 h-4 md:w-6 md:h-6"
              viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
