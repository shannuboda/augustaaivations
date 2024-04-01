import React from "react";
import im1 from "../assets/coffe.png";
import im2 from "../css/subpagescss/images/coffe1.png";
import im3 from "../css/subpagescss/images/coffe2.png";
import im4 from "../css/subpagescss/images/coffe3.png";
import im5 from "../css/subpagescss/images/coffe4.png";
import { useEffect } from "react";
function CoffePost() {
  useEffect(() => {
    // Scroll to the top of the page when the component is loaded
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="cargobanner">
        <h3>The COFFEE ETIQUETTE</h3>
        <p>Home > Blog > The COFFEE ETIQUETTE</p>
      </div>

      <div className="container ground-head sev">
        <h2>The COFFEE ETIQUETTE, By Ms. Anukriti Sharma</h2>

        <hr />

        <img src={im1} alt="" srcset="" />
        <h4>History</h4>
        <p>
          There are two stories about the discovery of coffee beans and their
          origin.
          <br />
          <br />
          According to one legend, they were discovered by goats in Ethiopia.
          The goats ate those cherries while grazing and became very energized.
          <br />
          <br />
          The second story goes that they were discovered by a sheik named Omar
          in Yemen, who was rejected by society, went to live in a cave, and
          while there, he ate those cherries to make himself feel full for the
          day.
          <br />
          <br />
          Whatever story you choose to believe, the truth is that coffee is a
          very energizing drink that also temporarily suppresses your appetite.
          <br />
          <br />
          Sufis, in fact, used to drink coffee to stay awake during night
          prayers and meditation. Despite its popularity, coffee was still
          regarded as a pagan dream by Christians, so it took some time for
          Europeans to develop a taste for it. In the 16th century, the Dutch
          established the first coffee plantation in Sri Lanka.
          <br />
          <br />
          Over time, more and more coffee shops sprang up in Europe, where
          intellectuals would congregate to share their grand visions and
          discuss brilliant ideas. As a result, coffee shops in the United
          Kingdom were labeled “Penny Universities.” Pennies because that was
          the cost of coffee, and universities because this was a gathering
          place for intellectuals to share their big ideas.
          <br />
          <br />
          Coffee is still the second most consumed beverage after water, and it
          is the second most treated commodity after petroleum. So, having
          written so much about “Coffee”, you might be wondering, “Why do I need
          to read a blog on Coffee when I am applying for a job in the Aviation
          or the Hospitality industry?”
          <br />
          <br />
          Right? Well, here’s your answer: Coffee is a famous beverage that is
          beneficial in boosting our energy level. The cherry on top of the cake
          is that coffee works wonders to increase our energy level, promote
          weight loss, etc.
          <br />
          <br />
          Coffee is considered to be the most profitable item in the hotel
          industry. It will sound ironic because coffee is not included in any
          menu list offered by a hotel. Coffee is cost-effective compared with
          other products sold on the same day at different rates.
          <br />
          <br />
          For instance, bottled water costs twice as much as coffee. If you need
          proof, visit your neighborhood’s nearest hotel restaurant or beverage
          dispensary and ask about the price of a cup of coffee. Coffee
          represents 50% to 80% percent of annual sales in restaurants and 25%
          to 40% in cafeterias. We will mainly discuss two significant reasons
          why coffee is considered an essential commodity in hotels: economic
          profits and health benefits.
          <br />
          <br />
          Hotels use coffee to create social events by providing complimentary
          beverages for guests and visitors. Coffee is the most popular drink
          served in hotels, representing 50% to 80% of annual sales in
          restaurants and 25% to 40% in cafeterias. Many people consider coffee
          a “drinking ritual” that comforts customers during their interaction
          with others. Coffee can also be used to create an intimate environment
          for guests, who are mostly strangers. Perhaps because of its high
          demand within the hospitality industry that comforts customers, coffee
          has become one of the nation’s most significant sources of revenue
          after alcoholic drinks.
          <br />
          <br />
          One of the most important elements of a modern hotel property is its
          coffee service, both within the guestroom and at any restaurant
          outlet. Given this beverage’s significance in everyday life, it’s a
          definite no-no for a hotel that cuts corners in its procurement and
          preparation of this brown elixir. Hardly a drug, though, coffee is not
          only big business but an aspect of our culture that continues to
          evolve. To witness this evolution, look no further than guests’
          expectations for a property’s in-room coffee and tea service. Within
          the past decade, we’ve seen a migration from metal foil sachets, to
          Keurig, Nespresso and a host of other machines capable of delivering a
          more flavorful and bespoke experience. Complementing this, most hotel
          restaurants offer barista levels of services with cappuccinos, lattes
          and espressos the norm along with a few custom creations in tune with
          the local market. Even basic by-the-gallon foodservice grinds like
          what you would find in a breakfast buffet are far better than they
          ever used to be.
          <br />
          <br />
          Coffee is a cherry, and the coffee bean inside is a pit within that
          cherry. Coffee is grown in two regions: the lowlands and the
          highlands. Indonesia is an example of a lowland. Because this is where
          there is a lot of oxygen, the crops that grow here tend to be more
          bitter but less acidic. Starbucks sources a large portion of its
          coffee from the lowlands. Coffee grown in the highlands can be found
          in Ethiopia or Kenya. Because there is less oxygen in the highlands,
          crops require more energy to grow. This is why coffee beans have a
          more acidic taste, but they are less bitter and have a more natural
          taste of coffee, so they taste fruitier.
        </p>

        <h4>Process Methods</h4>
        <hr />
        <div className="ways">
          <h4> 1. Washed method</h4>
          <p>
          As the name implies, the washed method is when these beans are washed with water. First, they are de-pulled, removed, and washed the cherry.
          <ul style={{listStyleType:'disc'}}>
            <li>This is more expensive.</li>
            <li>It preserves the flavor of coffee beans better.</li>
            <li>The natural flavor is retained.</li>
            <li> Beans have wings running through them.</li>
          </ul>
          </p>
        </div>

        <div className="ways">
          <h4>2. Natural method</h4>
          <p>
          In this method, the coffee ferment alongside the cherries.
            <ul style={{listStyleType:'disc'}}>
            <li>The bean has a creamier texture.</li>
            <li>It has a less intense flavor.</li>
            <li>It has a closer resemblance to the cherry taste.</li>
            <li>Beans do not have wings.</li>
          </ul>
           
          </p>
        </div>
        <h2>So, in which cup to serve coffee?</h2>
        <p>It depends on a couple of reasons: type of drink, the occasion or the formality of the event, and the time of the day.</p>
        <hr />
          <div className="sub-depts">
            <h4>1. Mug</h4>
            <p>It has a thick handle, no saucer, and usually comes in a very large size, as seen here. In the morning, you might expect a filtered coffee or an americano served in a mug from a hotel, or this could be your preferred method of enjoying coffee at home.</p>
            <img src={im2} alt="" srcset="" />
          </div>

          <div className="sub-depts">
            <h4>2. Coffe Cup</h4>
            <p>*Tea Cup (left) and Coffee Cup (right)*

The more formal coffee is served in a regular coffee cup that looks like this. The shape and form of a regular coffee cup differ from that of a teacup. Looking at these two, you can tell that a coffee cup is narrower and straight, whereas a teacup has a smaller, narrower bottom and a wider rim, which flares up like a flower.

At the end of a meal at a restaurant, you can expect to get your coffee in a regular coffee cup. You could get a filtered coffee or an americano, or it could be a drink you enjoy, so this would be reserved for that.</p>
            <img src={im3} alt="" srcset="" />

          </div>

          <div className="sub-depts">
            <h4>Turkish Coffe Cup</h4>
            <p>This cup is used to serve Turkish coffee, though you can also get Turkish coffee in a demitasse. The coffee has a wider bottom and narrows as it approaches the top of the cup.</p>
          <img src={im4} alt="" srcset="" />

          </div>

          <div className="sub-depts">
            <h4>Demitasse</h4>
            <p>This is the final cup I’ll show you, and it’s called a demitasse, which means “half cup” in French. When comparing the size of a demitasse and a regular coffee cup, the demitasse is much smaller, almost half the size of a regular coffee cup.
<br />
You might expect to receive your Turkish coffee, espresso, or other strong beverage in a small demitasse cup.
<br />
This cup is typically reserved for more formal occasions, and you can expect to receive your drink at the end of the meal, such as at a wedding reception or other formal gathering.</p>
            <img src={im5} alt="" srcset="" />

          </div>


      </div>
    </div>
  );
}

export default CoffePost;
