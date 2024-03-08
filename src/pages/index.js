import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import NodeOverlay from '@/components/NodeOverlay';
import Hero from '@/components/Hero';
import AppLinks from '@/components/AppLinks';


export default function Home() {
  return (
    <>
      <main className={styles.main}>        
        <NodeOverlay />
        
        < Hero 
          title="Last Bottle"
          subtitle="Take the journey that reveals the hidden truths behind recycling"
        />

        < AppLinks />
 
        <div id={styles.section_features}>
          <h2 className="h2-lg my-lg text-center">Experience The Bottle's Journey</h2>

          <div className="container">
            <div className="row justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-4 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phones/bottleLarge.png" 
                  alt="Screenshot of Last Bottle app showing a single use plastic water bottle"
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>

              <div className='col-md-4 offset-md-1 my-auto'>
                <h3>The Plastic Water Bottle</h3>
                  <p>Easy to use, tough to lose! Ever wonder what happens to a plastic water bottle after the last sip? Let's unravel the twisty tale of its not-so-simple journey to recycling.</p>
              </div>
            </div>
            
            <div className="row my-5 justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-4 offset-md-1 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phones/gamePlay.png" 
                  alt="Screenshot of Last Bottle app showing the main game play"
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>
               <div className='col-md-4 my-auto order-md-first'>
                <h3>Avoid The Hazards</h3>
                <p>Guide your plastic bottle to the recycling bin, dodging the all-too-common fates of single-use plastic: incineration, landfills, and the deep blue sea. Can you steer clear and recycle like a pro?</p>
              </div>
            </div>

            <div className="row justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-4 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phones/spinner.png" 
                  alt="Screenshot of Last Bottle app showing the recycle spinner"
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>

              <div className='col-md-4 offset-md-1 my-auto'>
                <h3>The Bin is Not the End</h3>
                <p>Just because you made it to the recycling bin doesn't mean you're plastic bottle will be reused, spin the wheel to find out your fate.</p>
              </div>
            </div>

            <div className="row my-5 justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-4 offset-md-1 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phones/walletTurtle.png" 
                  alt="Screenshot of Last Bottle app showing a turtle hazard trading card"
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>
               <div className='col-md-4 my-auto order-md-first'>
                <h3>Unlock The facts</h3>
                <p>Discover and collect unique trading cards that reveal surprising facts about recycling. Share these enlightening cards with friends to spread valuable knowledge and inspire change.</p>
              </div>
            </div>

            <div className="row justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-4 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phones/menu.png" 
                  alt="Screenshot of Last Bottle app showing the main menu with app stats"
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>

              <div className='col-md-4 offset-md-1 my-auto'>
                <h3>Track Your Success</h3>
                <p>See how many single use bottles you manage to recycle successfully and learn the impact of your efforts along the way.</p>
              </div>
            </div>

            <div className="row my-5 justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-4 offset-md-1 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phones/ja_walletTurtle.png" 
                  alt="Screenshot of Last Bottle app showing a turtle hazard trading card"
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>
               <div className='col-md-4 my-auto order-md-first'>
                <h3>Global Reach</h3>
                <p>Last Bottle has full support for English and Japanese, with more languages coming soon!</p>
              </div>
            </div>

          </div>
        </div>

        <div id={styles.section_wait_list}>
          <h2 className='h2-lg my-lg text-center'>Play Now</h2>
          < AppLinks />
        </div>
      </main>
    </>
  );
}
