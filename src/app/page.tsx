"use client";
import { useState } from "react";
import CTAButton from "./components/CTAButton";
import WaitlistForm from "./components/WaitlistForm";
import Image from 'next/image';
import founderImage from '@/assets/images/founder.jpg';


export default function Home() {
  const [showForm, setShowForm] = useState(false);
  return (
   
   <>
{/*
<header className="w-full sticky top-0 bg-white z-50 shadow-sm py-3">
  <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
    <img src="/logo.svg" alt="Lessgo Logo" className="h-48 -my-20" />
  </div>
</header> 
*/}

   
   <main className="flex flex-col items-center justify-center px-6 py-20 text-center">
    
   
      {/* Heading*/}
      <h1 className="text-headline font-heading font-extrabold text-brand-text leading-tight max-w-[70rem]">
      F*ck Launch Anxiety <span className="underline text-brand-accentPrimary"></span>
      </h1>

      {/* Subheading */}
      <p className="text-subheadline font-semibold font-body italic text-brand-text max-w-[60rem] mt-10 mb-2">
      35 year old indie hacker from Amsterdam combines his coding and copywriting skills to create breakthrough landing page builder which will generate revenue while you sleep.
      </p>
      
      {!showForm && (
        <CTAButton
          gaLabel="01 hero-section"
          onClick={(e) => {
            e.preventDefault(); // If you're still using <a> in CTAButton
            setShowForm(true); // ✅ Toggle the form
          }}
        />
      )}

      {showForm && <WaitlistForm />}

      
      <div className="text-brand-text text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
        

          {/* Intro Section */}
          <div className="mb-4 max-w-3xl mx-auto text-body space-y-6 leading-relaxed">
            <p className="text-xl font-bold">Dear Friend,</p>
            <p>If you are a SaaS founder… and you’re reading this right now…</p>
            <p>Then one thing is probably true:</p>
            <p className="underline">You’re stuck with a landing page that won’t convert.</p>
            <p>Listen, if you're anything like me, you've probably already tried your luck with some of the more "popular" solutions...</p>
            <p>Like freelancers.</p>
            <p>They're good when they're good, but there's always a handful that's not.</p>
            <p>And nine times out of ten, most freelancers you hire will usually end up disappointing you.</p>
            <p>It could be something simple -- like misplacing a dot or a comma... or it could be something much worse -- like you paid $600 to end up with a clunky mess that looks like it was built in Dreamweaver by a sleep-deprived IT student in 2003 — and somehow no one told them we’ve moved on.</p>
            <p>Or maybe you’ve tried no-code tools.</p>
            <p>They say it’s plug-and-play — but only if you’ve got the instincts of a designer and the patience of a monk.</p>
            <p>Most founders?</p>
            <p>They start with a “simple” template…</p>
            <p>Then spend six hours obsessing over font sizes, button shadows, and spacing that never quite aligns.</p>
            <p>Suddenly, it’s 2 a.m. and your “quick landing page” still doesn’t feel launch-ready.</p>
            <p>(I know because I've been there.)</p>
            <p>Maybe you’ve even tried one of those AI-powered landing page builders — hoping for a quick win.</p>
            <p>But the best thing you could get was a lot of soulless, cookie-cutter copy that reads like ChatGPT got stuck in marketing school.</p>
            <p>Looks decent.</p>
            <p>Sounds... kinda okay.</p>
            <p>Does it convert though? Not really.</p>
            <p>It’s like AI helped you write something —</p>
            <p>Just not something you’d actually publish.</p>
            <p>Because, let’s face it…</p>
            <p className="font-bold underline">Pretty landing pages don’t sell SaaS.</p>
            <p>They might work for:</p>
            <ul className="pl-8 mb-6 text-body">
            <li className="mb-2"> <span> ▸ </span> <span> Instagram lifestyle coaches </span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> Design portfolios </span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> Personal blogs </span> </li>
          </ul>
            <p>But for a SaaS product in 2025?</p>
            <p>Looks nice ≠ converts.</p>
            <p>You need clarity, copy that speaks to real pain, and structure that moves people to act. </p>
          </div>

          <div className="mb-20">
          {!showForm && (
        <CTAButton
          gaLabel="02 problem-section"
          onClick={(e) => {
            e.preventDefault(); // If you're still using <a> in CTAButton
            setShowForm(true); // ✅ Toggle the form
          }}
        />
      )}

      {showForm && <WaitlistForm />}

      </div>

          {/* Problem Section */}
          <div className="mb-4 max-w-3xl mx-auto text-body space-y-6 leading-relaxed">
            <p className="text-subheadline font-bold text-center"> You see, things are going to be different from 2025.</p>
            <p>We’re not talking about the AI tools of 2023 anymore that spat out generic headlines and lorem ipsum-level content.</p>
            <p>With the launch of GPT-4.5, multi-turn reasoning, and context-aware generation, AI can now:</p>

            <ul className="pl-8 mb-6 text-body">
            <li className="mb-2"> <span> ▸ </span> <span> Analyze entire subreddits, review threads, and user interviews </span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> Distill actual pain points and buyer language from live data </span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> Write copy that reflects what users want to hear, not just what sounds nice </span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> Suggest layouts that mirror proven high-conversion frameworks — and adapt them to the message </span> </li>
          </ul>


            <p>Do you see the common thread here?</p>
            <p>I’m talking about how AI isn’t producing “garbage content” anymore.    </p>
            <p> This thing can now produce copy and content fueled to the brim with persuasion tactics of the likes of Dan Kennedy and design layouts that could give Russell Brunson nightmares.
            </p>
            <p> And guess what? I bet even Russell Brunson uses AI for some of his work these days.   </p>
            <p> Does this make him “lazy”?
            </p>
            <p> No.   </p>
            <p> This makes him smart.   </p>
            <p> AND THAT SHOULD SCARE YOU.   </p>
            <p> Why?   </p>
            <p> Because it’s not just Russell—but nearly 80% of your competition—that’s using AI like this to move up the ladder and push out content after content these days.   </p>
            <p> This means they’re making all the moolah while you sit there twiddling your thumbs trying to push out the next big landing page out of your mental poophole.   </p>
            <p> But it’s not your fault.   </p>
            <p> It’s just that they’re too clever to advertise this super-weapon in front of the rest of the world.   </p>
            <p>  The only problem with their use of AI?  </p>
            <p>  (AKA <span className="font-bold">good news for you…</span> )  </p>
            <p className="underline"> Is that most of their tools are still not able to make THE BEST use of this new version of  AI. </p>
            <p> Because one thing they’ve never quite been able to do… <span className="font-bold"> is combine research, copy, and design into one single conversion system. </span> </p>
            <p> And that’s where we step in. </p>
           





          </div>

          <div className="mb-20">
          {!showForm && (
        <CTAButton
          gaLabel="03 2025 different-section"
          onClick={(e) => {
            e.preventDefault(); // If you're still using <a> in CTAButton
            setShowForm(true); // ✅ Toggle the form
          }}
        />
      )}

      {showForm && <WaitlistForm />}

      </div>

      <div className="mb-4 max-w-3xl mx-auto text-body space-y-6 leading-relaxed">
      <p className="text-subheadline font-semibold text-center"> 14 Years.</p>
      <p className="text-subheadline font-semibold text-center max-w-[70rem]"> 14 Frustrating Years… Before I Finally Realized This ONE Thing That Changed Everything </p>
      
      <p> Let me tell you a quick story.   </p>
      <p> It’s not pretty. It’s not polished. But it’s the real, raw, gut-wrenching truth.   </p>
      <p> My name is Sushant. I’m a Software Engineer… and a SaaS founder.</p>
      <div className="flex justify-center mb-6">
        <Image
          src={founderImage}
          alt="Founder Sushant Jain"
          className="rounded-xl shadow-lg object-cover mx-auto "
        />
      </div>
      <p> And for 14 long years… I did what every blog, guru, and podcast told me to do.   </p>
      <p> I focused on the product… Then the product some more... And then some more product…   </p>
      <p> Why? Because I believed—like every other engineer—that if I just built something amazing, the customers would come running.   </p>
      <p> Spoiler alert: They didn’t.   </p>
      <p>  Nobody showed up.  </p>
      <p>  Nobody cared.  </p>
      <p> And the worst part?   </p>
      <p> Even the ones who did click… didn’t convert.   </p>
      <p> “Okay.” I thought, “Maybe it’s the landing page.”   </p>
      <p>  So I checked that box. Slapped together a ‘decent’ one. Maybe even made it look pretty.  </p>
      <p> But the results? Nothing. </p>
      <p>Turns out, people can come kiss your landing page…  </p>
      <p> But making them subscribe is a whole different ball game. </p>
      <p> And so… I got frustrated. Exhausted. On the edge of burnout. </p>
      <p>I tried all  the fancy tools.  </p>
      <p> I spent hours  wrestling with templates. </p>
      <p> Letting AI spit the same bland garbage everyone else was using. </p>
      <p> And hoping—praying—that maybe someone would click that damn button. </p>
      <p> But guess what? </p>
      <p> I hated every… damn… second. </p>
      <p>And so, I did what I always do when I’m cornered.  </p>
      <p className="text-subheadline font-bold text-center">I locked myself in my room one fine day… and began building the tool I wished existed.  </p>
      <p> And that’s when the solution finally started to materialize right in front of me… </p>
      <p> I felt like Bradley Cooper in the movie Limitless. </p>
      <p> Listen, if you’re anything like most founders I know… </p>
      <p> Then you’ve been sold enough shiny garbage to build a landfill. </p>
      <p>You’ve tried the AI page builders.  </p>
      <p> You’ve bought the overpriced Notion templates. </p>
      <p>You’ve wrestled with Webflow until 2AM wondering why the damn mobile version is broken again.  </p>
      <p> And still… your conversion rate sucks harder than a dyson vacuum. </p>
      <p> MRR? Stagnant. </p>
      <p> Launch? Delayed. </p>
      <p>Traffic? Ghost town.  </p>
      <p className="font-bold"> And none of it’s your fault. </p>
      <p> You’re a founder - not a designer, not a copywriter, not a funnel architect.    </p>
      <p> You solve real problems, not pixel puzzles.  </p>
      <p>Yet here you are, burning midnight oil on a page that still might not convert.  </p>
      <p> Meanwhile, you see these “growth experts” on X bragging about their million-dollar funnels all day and all night. </p>
      <p className="underline" > But what they don’t say out loud? </p>
      <p> They are secretly spending $10K+ per month on agencies filled with shirtless broccoli-headed teens and a battalion of freelancers. </p>
      <p>They are secretly spending $10K+ per month on agencies filled with shirtless broccoli-headed teens and a battalion of freelancers.  </p>
      <p> And hey — if you’ve got the budget, go for it. </p>
      <p>Agencies can work. I’m not here to say they don't work. At all.  </p>
      <p>But if you’re still here, I’m assuming you’re someone like me — someone who likes to do things their own way… and have complete control of time, creativity, efficiency and freedom… at the most minimal expense possible.     </p>
      <p> Someone who doesn’t just want “a landing page”...
      You want a potent, conversion-ready, cash-magnet of a page that does its damn job: </p>
      <p className="font-bold"> Get fans. Get users. Get sales. </p>
      <p> And honestly? I think that’s a perfectly reasonable thing to want. </p>
      <p> You don’t need to “just deal with it” anymore. </p>
      <p> The game has changed — and now you get to build like it. </p>
      
      </div>

      <div className="mb-20">
          {!showForm && (
        <CTAButton
          gaLabel="04 founder-section"
          onClick={(e) => {
            e.preventDefault(); // If you're still using <a> in CTAButton
            setShowForm(true); // ✅ Toggle the form
          }}
        />
      )}

      {showForm && <WaitlistForm />}

      </div>
      
      <div className="mb-4 max-w-3xl mx-auto text-body space-y-6 leading-relaxed">
      <p className="text-headline font-extrabold text-center"> Meet Lessgo.ai</p>
      <p>  For founders like me and you who want to build landing pages that actually make money…  </p>
      <p>   …without writing a single line of copy </p>
      <p> …without spending 12 hours moving buttons around   </p>
      <p> …without sounding like every other ChatGPT template zombie out there   </p>
      <p>  In four simple steps.  </p>
      <p> Using zero guesswork.   </p>
      <p> With actual persuasive copy that sells.   </p>
      <p className="text-subheadline font-bold text-center"> The Reason This Works When Everything Else Fails</p>
      <p> If you’ve built SaaS for longer than 5 minutes, you already know:  </p>


      <ul className="pl-8 mb-6 text-body">
            <li className="mb-2"> <span> ▸ </span> <span>Templates that look, feel, work and smell the same </span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> Drag-and-drop turns into drag-and-doubt </span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> Copy feels flat -whether its AI, or a 2-month-experience copywriter </span> </li>
            
          </ul>



      <p> This is why we have built something entirely different.  </p>
      <p> Something I wish existed before… when I was stuck trying to make those “pretty” pages make me money.  </p>
      <p> It’s called the Conversion Intelligence Engine… and it’s what powers every page built with Lessgo.ai  </p>
      <p> It’s the entire core of the system.  </p>
      <p>  Something that knows how to translate your naked idea into a presentable, professional, high-quality pitch that gets paid. </p>
      <p> Here’s how it works:  </p>
      <p> Step 1: You drop one simple line about your product.  </p>
      <p> Step 2: The engine asks a few intuitive questions.  </p>
      <p>  Step 3: It runs deep market research + positioning logic in the background. </p>
      <p>  Step 4: It builds the entire page — layout, copy, story, flow — like a cofounder who gets it. </p>
      <p>  And it doesn’t just generate copy. It builds: </p>

      <ul className="pl-8 mb-6 text-body">
            <li className="mb-2"> <span> ▸ </span> <span>Layouts designed to “slide” users to action</span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> Headlines, pitch structure, body copy, story, structure, CTA framing — all in one </span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> Psychological triggers baked into every scroll: urgency, proof, clarity, momentum </span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> Pages that <span className="font-bold"> actually convert signups or subscribers </span> </span> </li>
          </ul>



      <p> You can tweak it if you want. Or just publish, and go live — while others are still picking fonts.  </p>
      <p> Now, all that said, it's important to understand that…  </p>
      <p> This isn’t “Instant AI” and it will not give results “in seconds”.
      </p>
      <p>  This is intelligent conversion copy + layout built on modern AI done right. </p>
      <p> The engine will need to take its required time --- for the proper market research, briefing the gathered information, forming the unique mechanism... and then punching out the copy.   </p>
      <p>It will definitely take few minutes (and not “seconds”)   </p>
      <p> If that’s something that gets you off—by all means, head back to Carrd and spend time figuring out hooks and layout by yourself.  </p>
      <p> Or, you could stick to LessGo AI… where the Conversion Intelligence Engine will do the work for you.  </p>
      <p> Think 5 minutes for one page of hard-hitting, high converting copy.    </p>
      <p> Listen, hiring your typical copywriter will cost you $1000 at the least.    </p>
      <p>Throw in a designer and you've got an extra $5000 or more added to your card.     </p>
      <p>  AI tools go lower. About 50 bucks a month.   </p>
      <p> The good news?    </p>
      <p>  You don’t need to do any of that.   </p>
      <p>  As an early user of Lessgo.ai you will get 1 year of pro features for free.   </p>



      </div>
      <div className="mb-20">
          {!showForm && (
        <CTAButton
          gaLabel="05 solution-section"
          onClick={(e) => {
            e.preventDefault(); // If you're still using <a> in CTAButton
            setShowForm(true); // ✅ Toggle the form
          }}
        />
      )}

      {showForm && <WaitlistForm />}

      </div>
          

          {/* Footer */}
          <footer className="text-center text-gray-600">
            <p>© 2025 Lessgo.AI. All rights reserved.</p>
          </footer>
          
        </div>
      </div>
    

  
    </main>
    </>
  );
}