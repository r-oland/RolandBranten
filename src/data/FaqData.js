// Components==============
import React from "react";
// =========================

export const Title = {
  en:
    "I can imagine you might have some questions.. Your not alone! Here are the most common ones.",
  nl:
    "Ik kan me voorstellen dat je vragen hebt.. Je bent niet alleen! Hier zijn de meest voorkomende."
};

export const QnA = [
  {
    en: {
      Q: "Why should my site be bould with the JAMstack?",
      A: (
        <div>
          <p className="bold" id="firstBold">
            Performance
          </p>
          <p>
            Nowadays, every business can benefit from a website, but a site
            that's clunky, slow and difficult to manage or update can do more
            harm than good. Users trust businesses with clean, well performing,
            professional websites that stand out. If websites take a 'long time'
            to load, long meaning 3 or more seconds, users will quickly bounce
            away from your site to a site that does have decent performance.
            <br />
            <br />
            Well, say hello to the JAMstack. To be more specific, a static site
            generator like Gatsby that is part of the stack. Gatsby converts
            your dynamic site into static files and serves them to a CDN. Next
            to this Gatsby has a bunch of magic tricks that makes your site even
            faster and more performant.
            <br />
            This results in some of the fastest sites online and often leads to
            load times of less than one second and a great user experience.
          </p>
          <p className="bold">Security</p>
          <p>
            JAMstack utilizes a serverless architecture. This means that the
            site is decoupled from the CMS. With other words, your site has no
            direct connection to the database, dependencies, user data or other
            sensitive information.
          </p>
          <br />
          <br />
          <p>
            This way, you don't need to worry about server or database
            vulnerabilities
          </p>
          <p className="bold">Cost</p>
          <p>
            For most projects, the hosting of static files is about ‎€0.-.
            That's right, most of the time hosting will be free! If that isn't
            enough, JAMstack sites don't require any technical maintenance since
            the files are static. An added benefit to this is that your site
            won't break either. this means no unexpected costs that can ad up.
            This way you will only pay to build and upgrade your site, like it
            should be.
          </p>
          <p className="bold">SEO</p>
          <p>
            JAMstack sites are optimized to be found by Google. This is because
            the site is static, for this reason the site will be easy to index.
            Combine this with the performance (Google likes good performing
            sites) and you will have a really solid foundation when it comes to
            search engine optimization.
          </p>
          <p className="bold">Convenience </p>
          <p>
            With a JAMstack site, you as a site owner don't have to spend any
            time or effort monitoring or updating plugins or other components.
            You don't event need to outsource this since non of these actions
            are required with a JAMstack site.
            <br />
            <br />
            Another Convenience is that, just like you would be able to do with
            a Wordpress site, you can manage your own content. This way you can
            tweak your site as it grows with your project.
          </p>
          <p className="bold">Scalability</p>
          <p>
            The JAMstack utilizes the power of React. React is component based
            javascript library. What this means is that your site is very
            developer friendly and therefore cost effective to build upon for
            future expansions.
            <br />
            <br />
            JAMstack sites have the technical capability to scale with your
            projects. Next to that, in the event that your site suddenly goes
            viral and has many active users, the CDN seamlessly compensates.{" "}
          </p>
          <p className="bold">Flexibility </p>
          <p>
            Their are no restrictions when it comes to what kind of content you
            want to display or how you want to display it to your users. There
            are no templates, rules or limitations that are holding back the end
            result of your ideal site. This way, you can realize your site
            exactly how you envisioned it.
          </p>
          <p className="bold">Future proof</p>
          <p>
            Static JAMstack sites are the way to go for a increasing amount of
            developers. One of the reasons for this is that a JAMstack site
            utilizes the most modern web technologies. The nice thing about this
            for you is that, In the unlikely event that something might happen
            where you need another developer to work on your JAMstack site,
            there is and will be a increasing amount of options available to
            take on this function.
          </p>
          <p className="bold">PWA</p>
          <p>
            A JAMstack site is also automatically a PWA (progressive web app).
            At the moment this is still a bit of a upcoming trend but it might
            hold some real potential for the future. What a PWA basically does
            is, it turns your website into a desktop app and a mobile app.
            That's right, with a PWA you have the capability to add your site to
            the home screen of your smartphone, just like you would with a
            regular app. With the PWA functionality, you will be able to turn
            your website into a mobile application.
          </p>
        </div>
      )
    },

    nl: {
      Q: "null",
      A: <div> nl </div>
    }
  },
  {
    en: {
      Q: "How much does a JAMstack site cost? ",
      A: (
        <p>
          I probably got you all exited and you are now wondering how much this
          investment is going to be. I would be to. So let me just start of by
          saying that I can't give an exact price. Not without knowing the
          requirements of the project that you have in mind. There are a lot of
          different factors that should be taken in consideration first. What I
          can do is give you a rough estimation of my rates at the moment.
          <br />
          <br />
          For the average site, It's probably somewhere between ‎
          <span style={{ fontWeight: "600" }}>€750,- and ‎€1500,-</span>
          . These numbers aren't set in stone, it's just a rough ballpark of
          what a typical site would cost. It could be that your site is a bit
          more expensive depending on the features that your project requires.
          On the other hand, it could also be less if the site doesn't require
          much complexity. The best way to find out is to reach out and tell me
          about your project.
          <br />
          <br />
          As you might have noticed, I try to be as transparant as possible.
          This transparantie also applies to the way I handle transactions. My
          preferred method is to not charge by the hour. I like to agree upon a
          single price for the whole project. This way, if there happen to be
          any missteps in the process, you aren't the one who has to make up for
          it.
        </p>
      )
    },

    nl: {
      Q: "null",
      A: <p> nl </p>
    }
  },
  {
    en: {
      Q: "Are you the right choice for my site?",
      A: (
        <p>
          In general the answer will be yes. This isn't a sales pitch, the
          JAMstack is just capable to handle the vast majority of the websites
          on the web. So statistically speaking, yours probably will be to.
          <br />
          <br />
          However just like with any technology, the JAMstack is not perfect.
          Sites with content that has to update constantly would not be a great
          fit. A social media site would be an example of this. Another one is a
          site with a lot of pages that has to update content somewhat less
          frequent. A news site would be an example here. If neither of those
          examples bring up any worries for your project, you're probably good.
          <br />
          <br />
          If you have a large project in mind and are wondering if I'm available
          for longer periods of time, send me a direct message. I'm curious to
          find out what it is. If you still have any doubts weather the JAMstack
          matches your project, don't be afraid to ask. I'm always open for a
          new challenge.
        </p>
      )
    },

    nl: {
      Q: "null",
      A: <p> nl </p>
    }
  },
  {
    en: {
      Q: "Do you only work locally?",
      A: (
        <p>
          Nope. I'm available to work with people all over the globe. If you are
          interested to let me help you with your projects and you are not in
          the area of Eindhoven, do reach out. I'm curious to hear what you have
          in mind.
        </p>
      )
    },

    nl: {
      Q: "null",
      A: <p> nl </p>
    }
  },
  {
    en: {
      Q: "Is my site fully optimized for SEO?",
      A: (
        <p>
          Yes and no. I'm a developer and a designer and I pride myself in being
          quite capable in both of these fields. SEO however, should be seen as
          something that's completely separate from these professions. As a
          developer, I certainly have a lot of experience with optimizing SEO,
          but my programming can only take your SEO performance that far.
          <br />
          <br />
          I will make sure that you're site is technically optimized for Google
          to find you and for a lot of sites this will be more then enough to
          ensure your visibility on Google. But if you are looking to further
          optimize performance, it gets to a more marketing oriented territory
          real fast.
          <br />
          <br />
          So yes your site will technically be fully optimized for SEO, but
          since I'm no marketeer, there will still be a lot of room for
          improvements. This could be outsourced or you could give it a shot
          yourself if you feel brave enough.
        </p>
      )
    },

    nl: {
      Q: "null",
      A: <p> nl </p>
    }
  },
  {
    en: {
      Q: "Does my site support al browsers? ",
      A: (
        <p>
          Your site will support all the modern browsers. This means that your
          site will not support Internet explorer. Why? You might ask. Internet
          explorer is discontinued since 2016. This means that is has strong
          limitations when it comes to the utilization of the modern web
          technologies. Working around these limitations will drastically slow
          down the development process.
          <br />
          <br />
          This would be a waste of resources since new windows pc's come pre
          installed with it's successor Edge. Windows also advices against using
          Internet Explorer since it is becoming increasingly vulnerable to
          attacks and leaks.
          <br />
          <br />
          Luckily, the amount of users that are using Internet Explorer,
          nowadays, is at it's lowest point ever. You can check the most recent
          stats{" "}
          <a
            href="https://gs.statcounter.com/"
            rel="noopener noreferrer"
            target="_blank"
            style={{ fontWeight: 600 }}
          >
            here
          </a>
          . In the rare event that your user is using Internet Explorer, he/she
          will receive a pop up message with a short explanation.
        </p>
      )
    },

    nl: {
      Q: "null",
      A: <p> nl </p>
    }
  },
  {
    en: {
      Q: "Why shouldn't I just go for a Wordpress site?",
      A: (
        <>
          <p>
            Before I go any further, let me just be clear that when I say
            WordPress site, I mean a budget WordPress site. WordPress is capable
            of amazing things (with limitations) in the hands of the right
            developer/designer. That being said, maybe you should, It depends on
            how you answer the following questions,
          </p>
          <br />
          <ul>
            <li>
              1. Do you just want a simple site that doesn't need much
              scalability or flexibility in the future?
            </li>
            <li>
              2. Do you don't mind if you lose a big part of potential users
              because of slow load times?
            </li>
            <li>
              3. Will you be satisfied with a site that will look like any other
              WordPress template site?
            </li>
            <li>
              4. Do you don't mind spending time or resources towards fixing and
              maintaining WordPress plugins?
            </li>
            <li>
              5. Are you not worrying about maximizing the security of your
              site?
            </li>
            <li>
              6. Are you willing to pay for the additional monthly/yearly fees
              that come with a CMS like Wordpress?
            </li>
          </ul>
          <br />
          <p>
            If all these things don't matter for the project that you have in
            mind, by all means, go for it! WordPress has a great CMS and will
            set you up with a fully functional website.
            <br />
            <br />
            However, if you do care about having a site that is ready to grow
            with your projects needs, you might want to look further then the
            current industries 'default option'.
          </p>
        </>
      )
    },

    nl: {
      Q: "null",
      A: <p> nl </p>
    }
  }
];
