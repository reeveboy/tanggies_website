import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className="">
      {/* Home */}
      <div className="py-4 bg-tile_gray">
        <div className="w-11/12 mx-auto flex flex-col items-center  md:flex-row-reverse">
          <img
            className="rounded-lg w-72 md:w-96"
            src="/images/steak.jpg"
            alt=""
          />
          <div className="flex flex-col items-center md:items-end md:ml-10 md:pr-4">
            <span
              className="block text-sand_stone text-5xl uppercase text-center leading-10 mt-5 md:text-right title"
              style={{ fontWeight: 900 }}>
              Delicious <br />
              Dinners
            </span>
            <span className="text-white  text-center mt-2 text-sm leading-relaxed md:text-right md:text-lg">
              <p className="md:hidden">
                Our restaurant nests itself in this magical and hidden gem of
                South Goa, “Tanggies” perfectly captures what we are all about
                and awhat our restauarnt believes in. No one can survive this
                life by just being sweet, you have to be spicy at times and a
                bit tangy at times as well to make it through!
              </p>
              <p className="hidden md:block">
                Our restaurant nests itself in this magical and hidden gem of
                <br />
                South Goa, “Tanggies” perfectly captures what we are all about
                and
                <br />
                awhat our restauarnt believes in. No one can survive this life
                by
                <br />
                just being sweet, you have to be spicy at times and a bit tangy
                at
                <br />
                times as well to make it through!
              </p>
            </span>
            <div className="flex mt-3">
              <button className="px-3 py-2 bg-white rounded-sm text-black text-center text-md">
                Book a Table
              </button>
              <button className="ml-4 px-2 py-2 rounded-sm text-white border-2 border-white text-center text-md">
                Order a Take Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="py-4 bg-off_white">
        <div className="w-11/12 mx-auto flex flex-col items-center  md:flex-row">
          <img
            className="rounded-lg w-80 md:w-96"
            src="/images/entrance.png"
            alt=""
          />
          <div className="flex flex-col items-center md:items-start md:px-4">
            <span
              className="block text-wood text-5xl uppercase text-center leading-10 mt-5 md:text-left title"
              style={{ fontWeight: 900 }}>
              About Us
            </span>
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
      <div className="p-4 flex flex-col items-center bg-night_blue">
        <div className="w-11/12 mx-auto flex flex-col items-center  md:flex-row-reverse">
          <img
            className="rounded-lg w-80 md:w-96 md:h-96"
            src="/images/tanggies_night.jpg"
            alt=""
          />
          <div className="flex flex-col items-center text-center text-sm md:px-4 md:text-right md:items-end md:text-base">
            <span
              className="block text-bluish_white text-5xl uppercase leading-10 mt-5"
              style={{ fontWeight: 900 }}>
              Private
              <br />
              Dining
            </span>
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
      <div className="p-4 bg-sand">
        <div className="w-11/12 mx-auto flex flex-col items-center md:flex-row">
          <img
            className="rounded-lg w-80 md:w-96 md:h-96"
            src="/images/beach_shack.jpg"
            alt=""
          />
          <div className="flex flex-col items-center text-center text-sm md:text-left md:items-start md:px-4 md:text-base">
            <span
              className="text-brownish_black text-5xl uppercase leading-10 mt-5"
              style={{ fontWeight: 900 }}>
              Beach
              <br />
              Shack
            </span>
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
      <div className="p-4 bg-cyan">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-instagram"
            viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="ml-1 bi bi-facebook"
            viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
