import React from "react";
import "../css/postscss/sevenways.css";
import im1 from '../assets/7-Ways-to-Stay-Motivated_v3-01-1-e1662622687609-555x400.jpg'
import { useEffect } from "react";

export default function Sevenwayspost() {
  useEffect(() => {
    // Scroll to the top of the page when the component is loaded
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="cargobanner">
        <h3>How To Be Motivated</h3>
        <p>Home > Blog > How To Be Motivated</p>
      </div>
      <div className="container ground-head sev">
        <h2>How to be Motivated, By Ms. Anukriti Sharma</h2>
        
        <hr />
       
        <img src={im1} alt="" srcset="" />
        <h4>How to Get Motivated | 10 Essential Rules that Work</h4>
        <p>
          Where can I find more motivation? How can I maintain my motivation?
          Here are 10 essential tips for feeling more motivated than I’d like to
          share:
        </p>
        <div className="ways">
          <h4> Tip #1 | LEARN HOW TO BE INSPIRED AND MOTIVATED</h4>
          <p>
          When you eat yourself up over the success of others, when you look for reasons to blame them for their success, believing that these are not valid reasons to be successful, you are actually wasting your energy on something negative rather than positive. As we all know, only positive energy drives motivation, so I recommend surrounding yourself with successful people or people who inspire you in some way. 

          </p>
        </div>

        <div className="ways">
          <h4>Tip #2 | LIST DOWN YOUR GOALS IN A NOTEBOOK</h4>
          <p>
          This may sound old-fashioned or cliche, but many motivational speakers recommend journaling or writing down your dreams on paper, and I find this to be a very powerful exercise. Putting your goals on paper, in ink, gives that goal a lot of energy. Taking a glance every now and then keeps you on track and in the right mindset to pursue that goal. There’s something about the power of ink that makes it magical and allows dreams to come true.

I saw a quote that said, “Life is like writing with a pen. You can cross out the past, but you can’t erase it.” It stuck with me not because of the concept of a past, but because of the power of ink. It truly resonates with me that you can erase something written in ink. Even if the goal is still there and you no longer want to achieve it, you can cross it out but not erase it. It will be in front of you in that paper, it will be in your mind, and one day you may aspire to have it all. Handwriting your goals and dreams has a special power, and you should definitely try it.
          </p>
        </div>

        <div className="ways">
          <h4>Tip #3 | PLAN YOUR GOAL WITH CONCRETE STEPS</h4>
          <p>
          This is critical in getting you ready to start acting on your bigger dream or bigger goal. What are three concrete steps you’re going to take to get closer to your goal if you want to be the best artist or calligraphist? That could mean purchasing pencils, purchasing an album, or searching for videos on how to get started or into a drawing. 
          </p>
        </div>

        <div className="ways">
          <h4>Tip #4 | VISUALIZE: IMAGINE AND FEEL</h4>
          <p>
          I’ve been doing it since I was a child, and I had no idea it was called visualization. I just assumed it was called daydreaming or being a child who imagined and felt things. We ended up losing this as we grew older and were told to be more realistic. 
We’re told to live in the present and know what we’re capable of, but visualization really helps you imagine and picture things. It’s not just about seeing the image; it’s about the sense and feeling you get from seeing it. This provides genuine emotions and feelings that will keep you going for days. The more colorful and brighter the images in your mind, the stronger the feeling in your gut, and the more likely it is to elicit an action.
          </p>
        </div>

        <div className="ways">
          <h4>Tip #5 | DISTINGUISH LACK OF ENERGY FROM LACK OF DESIRE</h4>
          <p>
          Lack of desire is a mental state in which you do not feel inspired or motivated. You can work on it by visualizing or doing something that will inspire and motivate you. If you are physically or emotionally exhausted, you are depleted of energy.           </p>
        </div>

        <div className="ways">
          <h4>Tip #6 | ACKNOWLEDGE AND APPLAUD YOUR LITTLE STEPS</h4>
          <p>
          Recognize and applaud your small steps as building blocks for the ladder that will lead you to your goal. We can use visual images to help us remember this, but we get so focused on the goal that we forget to acknowledge and appreciate ourselves for all of the small steps we’ve taken to get closer to our goals. 
          </p>
        </div>

        <div className="ways">
          <h4>Tip #7 | SHARE YOUR PROGRESS WITH OTHERS</h4>
          <p>
          Share your dream or progress with someone close to you who can help guide you through the process or hold you accountable for your idea, goal, or aspiration. In our culture, we believe that unless you do something, you should not talk about it because you may jinx it or attract an evil eye. I only partially believe this because I would rather talk about it. rather than simply talking about my dreams without taking the first step. However, I discovered that sharing my goals with someone I trust works well for me. When an idea is just in our heads and no one knows about it, it can take us a long time to get started. However, once we say it aloud, it occurs to us to begin and motivate you toward your goal.
          </p>
        </div>

        </div>
    </div>
  );
}
