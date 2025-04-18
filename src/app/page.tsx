"use client";
import { useState } from "react";
import CTAButton from "./components/CTAButton";
import WaitlistForm from "./components/WaitlistForm";
import Image from 'next/image';
import founderImage from '@/assets/images/founder.jpg';
import { Check } from 'lucide-react';

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
    
   
      {/* Heading1*/}
      <h1 className="text-heading1 font-heading text-brand-text leading-tight max-w-[70rem] mt-4">
      F*ck Launch Anxiety <span className="underline text-brand-accentPrimary"></span>
      </h1>

      {/* Heading2 */}
      <p className="text-heading2 text-brand-text max-w-[60rem] mt-12 mb-2">
      Get <span className=" text-brand-accentPrimary">High-Converting</span> Landing Page in 5 Minutes 
      </p>
      
      {/* Heading4 */}
      <p className="text-heading4 text-brand-text max-w-[40rem] mt-10 mb-2">
      Describe your idea <span className=" text-brand-accentPrimary"> → </span> Chat with AI <span className=" text-brand-accentPrimary"> → </span> Get a ready-to-launch landing page (both <span className=" text-brand-accentPrimary">copy and design</span>)
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

      <p className="text-lg md:text-base font-body italic text-brand-text max-w-[60rem] mt-8 md:mt-6 mb-16">
      [Launching May 7 — <span className= "font-bold"> Only 20 Spots </span> — <span className=" text-brand-accentPrimary"> 1 Year Free </span> Pro] <span className="underline text-brand-accentPrimary"></span>
      </p>


      
      <div className="text-brand-text text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          
        

          {/* Intro Section */}
          <div className="mb-4 max-w-3xl mx-auto text-body space-y-6 leading-relaxed">

          <p className="text-heading3 text-center mb-10">The Real Reason Launching Feels So Hard (And It's Not Your Product)</p>

            <p className=" font-bold">Dear Friend,</p>
            <p>If you are a SaaS founder… Then you will probably agree that…</p>
            <p>"Launching isn't hard because the product isn’t ready.</p>
            <p className="font-normal">
              It’s hard because you're not sure  
              <span className="inline-block bg-brand-highlightText font-semibold rounded px-1 py-0.5 ml-1">
              if your message is right.
              </span>
            </p>
            <p>You got the perfect idea.</p>
            <p>You solved a real problem.</p>
            <p>But one question is bothering you:</p>
            <p className="inline-block bg-brand-highlightText font-semibold rounded px-2 py-1 ml-1">Will anyone even get it?</p>
            <p>And you are not alone…</p>
            <p>CB Insights did a post-mortem of 110+ failed startups</p>
            <p> And results were shocking…   </p>
            <p className="italic">  “Poor communication of product value” leading to “No market need” was the #1 non-financial reason.  </p>



            <p className="text-heading3 text-center pt-12 pb-2"> Clear Messaging: The Hidden Secret Behind Every Blockbuster Launch  </p>
            <div className = "bg-brand-highlightBG">
            <p> Dropbox - "Put your stuff in this folder. Access it anywhere."   </p>
            <p>  Slack - "Be less busy."   </p>
            <p> Airbnb. - "Live like a local."   </p>
            <p>  Superhuman. - "The fastest email experience ever made."  </p>

          </div>
            <p>  They didn’t just build amazing products.  </p>
            <p className="font-medium"> They made their messaging so clear, the world couldn’t ignore them.   </p>




            <p className="text-heading3 text-center pt-12 pb-2">  Quick Reality Check: Will Your Page Pass the 10-Second Test?  </p>
            <p>  And if you’re wondering if your messaging is clear enough,  </p>
            <p className="font-semibold">  Run this 10-second founder self-test:  </p>

            <ul className="pl-8 mb-6 text-body">
            <li className="mb-2"> <span> ▸ </span> <span>Can a stranger understand what your product does in 10 seconds?</span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> Can they tell who it's for — and why they should care — just from your headline? </span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> If you removed your brand name, would your page still sound different? </span> </li>
           
          </ul>

            <p> If you’re even a little unsure...   </p>
            <p className="inline-block bg-brand-highlightText font-semibold rounded px-2 py-1 ml-1"> Your messaging needs help — before you need more traffic.   </p>
            
            
            {/* <div>
            <p className="text-heading3 text-center pt-12">Launch Messy? Yes.     </p>
            <p className="text-heading3 text-center  pb-2">  Launch Confusing? Never.  </p>
            </div> */}

    
            <p className="text-heading3 text-center pt-12 pb-2 ">Launch Messy? Yes.  Launch Confusing? Never.    </p>
            

            <p> Now, you might be thinking...   </p>
            <div>
            <p className="italic mb-1"> "Isn't some confusion normal early on?"   </p>
            <p className="italic">  "Shouldn't I just launch messy and figure it out later?"  </p>
            </div>
            <p>  And honestly?  </p>
            <p> You're right —    </p>
            <p>  Look — messy is fine.  </p>
            <p>  Your design can be messy.  </p>
            <p> Your features can be messy.   </p>
            <p>  Even your onboarding can be messy.  </p>
            <p>  But your message can't be.  </p>
            <p>  If people don’t “get it” in the<span className="inline-block bg-brand-highlightText font-semibold rounded px-1 py-0.5 ml-1">first 10 seconds </span>,  </p>

            <p>  They<span className="inline-block bg-brand-highlightText font-semibold rounded px-1 py-0.5 ml-1">won't stick around</span> long enough to see what you built.  </p>
            <p> And the worst part?   </p>


            <p className="text-heading3 text-center pt-12 pb-2 ">  The Tools You Tried Were Never Built to Truly Help You  </p>
            <p>  Even when you try to fix it...  </p>
            <p>  The tools you’re given don’t fix it.  </p>
            <p> They make it worse.   </p>
            <p> You already know the story — you've tried tool after tool:   </p>

            <ul className="pl-8 mb-6 text-body">
            <li className="mb-2"> <span> ▸ </span> <span>AI headline generators</span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> Drag-and-drop site builders </span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> Pretty templates </span> </li>
           
          </ul>

            <p>  They helped you build a page.  </p>
            <p> But they didn’t help you find your true message.   </p>
            <p>  They skipped the hard part —  </p>

            <ul className="pl-8 mb-6 text-body">
            <li className="mb-2"> <span> ▸ </span> <span>Understanding your customer.</span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> Clarifying your value. </span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> Crafting a real narrative. </span> </li>
           
          </ul>


            <p>  And without that…  </p>
            <p>  No headline or hero image will save you.  </p>

            <div className="mb-20">
          {!showForm && (
        <CTAButton
          gaLabel="02 problem-section"
          text = 'Get Early Beta Access!'
          onClick={(e) => {
            e.preventDefault(); // If you're still using <a> in CTAButton
            setShowForm(true); // ✅ Toggle the form
          }}
        />
      )}

      {showForm && <WaitlistForm />}
      
      <p className="text-lg md:text-base text-center font-body italic text-brand-text max-w-[60rem] mt-8 md:mt-6 mb-16">
      [Launching May 7 — <span className= "font-bold"> Only 20 Spots </span> — <span className=" text-brand-accentPrimary"> 1 Year Free </span> Pro] <span className="underline text-brand-accentPrimary"></span>
      </p>

          </div>

      </div>

          {/* Problem Section */}
          <div className="mb-4 max-w-3xl mx-auto text-body space-y-6 leading-relaxed">


          <p className="text-heading3 text-center pt-12 pb-2">   Lessgo.ai: Built to Solve the Right Problem </p>
            <p> Lessgo.ai was built to fix this gap.   </p>
            <p> It doesn’t just generate "stuff."   </p>
            <p>  It digs deep into your<span className= "font-bold"> product</span> , your <span className= "font-bold">market</span> , and your <span className= "font-bold">user psychology</span>  —  </p>
            <p className="inline-block bg-brand-highlightText font-semibold rounded px-2 py-1 ml-1"> And builds a page that actually sells.   </p>
            
            
            <p className="pt-6"> Now, you might still wonder...   </p>

            <div>
            <p className="italic mb-2"> "Come on, does messaging really make that big of a difference?"   </p>
            <p className="italic">   "If the product is good enough, won't people eventually figure it out?"  </p>
            
            </div>
            <p> Let’s be real:   </p>
            <p> The world isn't fair to great products.   </p>
            <p>  It rewards clear ones.   </p>
            <p> If people don’t understand your value in 10 seconds,   </p>
            <p>   it doesn’t matter how good your product is.  </p>
            <p className="font-semibold"> Confusion kills momentum.   </p>
            <p className="inline-block bg-brand-highlightText font-semibold rounded px-2 py-1 ml-1"> Clarity creates it.  </p>
            <p> The best SaaS companies don’t win because they built the best tech.   </p>
            <p> They win because they <span className="font-bold"> explain it better, faster, sharper. </span>  </p>


            <p className="pt-6"> Still not convinced?   </p>
            <p> Paul Graham (Y Combinator founder) said it best:   </p>
            <div>
            <p className="italic mb-2"> "Startups rarely die because they don't build something good.   </p>
            <p className="italic"> They die because they can't get users."   </p>
            </div>
            <p>  Users don’t just convert.  </p>
            <p> They have to understand — fast.   </p>
            <p>  April Dunford calls this "positioning failure."  </p>
            <p>  First Round Review calls it "message-market fit."  </p>
            <p>  No matter who you listen to...  </p>
            <p> The message is clear:   </p>
            <p className="inline-block bg-brand-highlightText font-semibold rounded px-2 py-1 ml-1">  If they don’t get it, you don’t get them.  </p>
            
            
            <p className="pt-6"> Now, maybe you're thinking:   </p>
           
            <div>
            <p className="italic mb-2"> "Okay, fine... I get it.   </p>
            <p className="italic mb-2"> Messaging is critical.   </p>
            <p className="italic mb-2">   But I'm not a copywriter.  </p>
            <p className="italic"> I wouldn’t even know where to start."   </p>
            </div>
            
            <p> And you know what?   </p>
            <p> You’re absolutely right.   </p>
            <p>  Look — nobody becomes a founder because they dream of writing landing page copy.  </p>
            <p>  You’re a builder.  </p>
            <p>You solve real problems.    </p>
            <p> You create new things from nothing.   </p>
            <p>  You’re not supposed to be a copywriter.  </p>
            <p> And honestly?   </p>
            <p>  Even good copywriters struggle to write about their own products clearly.  </p>
            <p> And that's exactly why I built Lessgo.ai.   </p>



            <p className="text-heading3 text-center pt-12 pb-2"> How Lessgo.ai Turns Your Ideas Into Pages That Sell   </p>
            <p> It’s not just “another AI page builder.”   </p>
            <p> It’s powered by something different.  </p>
            <p>  Something I call the <span className="inline-block bg-brand-highlightText font-bold rounded px-2 py-1 ml-1">Conversion Intelligence Engine. </span> </p>
            
            
            <p>  Here’s how it works:  </p>
            <p>  Instead of asking you to pick a template...   </p>
            <p>  It asks you a few smart, intuitive questions —  </p>
            <p>  Like a real cofounder would.  </p>
            
            <p>  It digs into <span className="font-semibold">your product’s true angles: </span> </p>
            <ul className="pl-8 mb-6 text-body">
            <li className="mb-2"> <span> ▸ </span> <span>Who it's for.</span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> Why it matters </span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> What problem it crushes  </span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> What emotions it triggers </span> </li>
          </ul>

           
            <p> Then it does the heavy lifting for you:   </p>

            <p> It crafts your copy, layout, and flow   </p>
            
            <p> — based on real psychological triggers that actually convert —  </p>
            
            <p>  Not based on pretty templates that look good but don't sell.  </p>
            <p> You don’t just get words.   </p>
            <p>  You get a<span className="inline-block bg-brand-highlightText font-semibold rounded px-1 py-0.5 ml-1">clear, structured argument for why your product matters — </span> </p>
            <p> Framed perfectly for your ideal customer.   </p>
            <p>  All you have to do...  </p>
            <p> is answer a few simple prompts.   </p>
            <p>  And let the engine translate your ideas into momentum.  </p>
            <p>  Because launching isn’t about looking pretty.  </p>
            <p> It’s about being understood.   </p>
            <p> And when you're understood...   </p>
            <p>  you don't just launch.  </p>
            <p>  You take off.  </p>

            <div className="mb-20">
          {!showForm && (
        <CTAButton
          gaLabel="03 Solution-section"
          text="Get Early Access Now!"
          onClick={(e) => {
            e.preventDefault(); // If you're still using <a> in CTAButton
            setShowForm(true); // ✅ Toggle the form
          }}
        />
      )}

      {showForm && <WaitlistForm />}
      
      <p className="text-lg md:text-base text-center font-body italic text-brand-text max-w-[60rem] mt-8 md:mt-6 mb-16">
      [Launching May 7 — <span className= "font-bold"> Only 20 Spots </span> — <span className=" text-brand-accentPrimary"> 1 Year Free </span> Pro] <span className="underline text-brand-accentPrimary"></span>
      </p>

          </div>




      </div>

      <div className="mb-4 max-w-3xl mx-auto text-body space-y-6 leading-relaxed">

      <section className="bg-brand-highlightBG pb-8">
      <p className="text-heading3 text-center pt-6 pb-8"> Why I Had to Build This — And Why It Matters To You  </p>

   
      
      
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">

    {/* Image Section */}
    <div className="w-full lg:w-1/2">
      <Image
        src={founderImage}
        alt="Founder Sushant Jain"
        className="rounded-xl shadow-lg object-cover mx-auto"
      />
    </div>

    {/* Text Section */}
    <div className="w-full lg:w-1/2 space-y-6 italic text-left text-[1.1rem] text-body leading-relaxed">
      <p>Hi, I’m Sushant.<br/>A 35-year-old indie hacker from Amsterdam.</p>

      <p>I didn’t build Lessgo.ai because it was trendy.</p>

      <p>I built it after spending 14 years in tech — and realizing a brutal truth:</p>

      <p>Brilliant builders fail every day.</p>

      <p>Not because their products suck.</p>

      <p>But because nobody understands what they built.</p>
      </div>

</div>
<div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-6 italic text-[1.1rem] text-body leading-relaxed">
      <p>I lived that pain.</p>

      <p>So I bet my career on solving it.

      <br />(Yes — I even quit my $150K job to do this full-time.)</p>

      <p>Lessgo.ai is not just a tool.</p>

      <p>It’s a promise:</p>

      <p className="font-bold not-italic text-brand-accentPrimary border-b-2 border-brand-accentPrimary inline-block pb-1">
  Never again.
</p>


      {/* Optional: Signature */}
      <p className="mt-4 font-semibold">– Sushant</p>
   </div>
</section>
      
      <p className="text-heading3 text-center pt-12 pb-2"> Your Product is Unique. Your Page Should Be Too.  </p>
      <p>  Now you might be thinking: </p>
      
      <div>
      <p className="italic mb-2"> "Sounds great...  </p>
      
      <p className="italic mb-2">  But my product is different. </p>
      <p className="italic mb-2"> Will this really work for me?"  </p>
      </div>
      <p className="italic">  "Will Lessgo.ai actually get my weird product?"  </p>
      
     
      <p> Fair question.  </p>
      
      <p> Here’s the short answer:  </p>
      <p> Lessgo.ai doesn’t write FOR you.  </p>
      <p>  It writes FROM you.  </p>
      <p>  It doesn’t start with a generic template. </p>
      <p>  It starts by pulling your own insights out of your head —  </p>
      <p>  and then sharpening them into clear, powerful messaging.  </p>
      
      <ul className="pl-8 mb-6 text-body">
            <li className="mb-2"> <span> ▸ </span> <span>If your product is complex? Perfect.</span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> If your audience is niche? Even better. </span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> If your story is messy? Welcome home. </span> </li>
           
          </ul>



      <p> The more real you are in answering the few smart questions we ask,  </p>
      <p>  the sharper your final landing page will be. </p>
      <p> No guessing.  </p>
      <p> No second-guessing.  </p>
      <p> Just real clarity — built from your real product.  </p>
      <p> "Your product is unique.  </p>
      
      <p>  Your story is unique. </p>
      <p>Your landing page should be too.   </p>
      <p>Lessgo.ai makes sure of it."   </p>

      <div className="mb-20">
          {!showForm && (
        <CTAButton
          gaLabel="04 Founder-section"
          text="Get Early Access Now!"
          onClick={(e) => {
            e.preventDefault(); // If you're still using <a> in CTAButton
            setShowForm(true); // ✅ Toggle the form
          }}
        />
      )}

      {showForm && <WaitlistForm />}
      
      <p className="text-lg md:text-base text-center font-body italic text-brand-text max-w-[60rem] mt-8 md:mt-6 mb-16">
      [Launching May 7 — <span className= "font-bold"> Only 20 Spots </span> — <span className=" text-brand-accentPrimary"> 1 Year Free </span> Pro] <span className="underline text-brand-accentPrimary"></span>
      </p>

          </div>

          </div>





  
      
      <div className="mb-4 max-w-3xl mx-auto text-body space-y-6 leading-relaxed">


      <p className="text-heading3 text-center pt-12 pb-2"> Build Faster. Sell Sharper. Launch Without Doubt  </p>
      <p> The founders who win aren’t always the ones who build better.  </p>
      <p> They're the ones who communicate better — faster.  </p>
      
      <p> You’ve built something real.  </p>
      <p>  Now it’s time to make the world see it. </p>


      <p className="text-heading3 text-center pt-12 pb-2"> Grab Your Early Access — Before The First 20 Spots Are Gone  </p>
      <p> Here is what you get if you sign up now  </p>

      <ul className="pl-8 mb-6 text-body space-y-3">
  <li className="flex items-start gap-2">
    <Check className="w-5 h-5 text-green-600 mt-1" />
    <span>1 Year of Pro Features — Free</span>
  </li>
  <li className="flex items-start gap-2">
    <Check className="w-5 h-5 text-green-600 mt-1" />
    <span>Lifetime discount up to 60%</span>
  </li>
  <li className="flex items-start gap-2">
    <Check className="w-5 h-5 text-green-600 mt-1" />
    <span>Priority support when we launch</span>
  </li>
  <li className="flex items-start gap-2">
    <Check className="w-5 h-5 text-green-600 mt-1" />
    <span>Only for the first 20 founders</span>
  </li>
</ul>

          <div className="mb-20">
          {!showForm && (
        <CTAButton
          gaLabel="02 problem-section"
          text="Lock My Early Bird Spot!"
          onClick={(e) => {
            e.preventDefault(); // If you're still using <a> in CTAButton
            setShowForm(true); // ✅ Toggle the form
          }}
        />
      )}

      {showForm && <WaitlistForm />}
      
      <p className="text-lg md:text-base text-center font-body italic text-brand-text max-w-[60rem] mt-8 md:mt-6 mb-16">
      [Launching May 7 — <span className= "font-bold"> Only 20 Spots </span> — <span className=" text-brand-accentPrimary"> 1 Year Free </span> Pro] <span className="underline text-brand-accentPrimary"></span>
      </p>
  

      </div>
   
      </div>

          {/* Footer */}
          <footer className="text-center text-gray-600 ">
            <p>© 2025 Lessgo.AI. All rights reserved.</p>
          </footer>
          
        </div>
      </div>
    

  
    </main>
    </>
  );
}