---
layout: post
title: "Tips for Outsourcing MVP Development. Part II - Runnnig"
headingTitle: "How to Successfully Manage Team, Requirements, Estimation and Communication in Outsourcing"
description: "Manage team, requirements, sprint planning and comms for successful MVP delivery — based on building an MVP in 3.5 mos. for the US automotive startup"
ogDescription: "Manage team, requirements, sprint planning and comms for successful MVP delivery — based on building an MVP in 3.5 mos. for the US automotive startups"
image: "/assets/img/articles/tips-2-920.webp"
altImage:
ogImage: "/assets/img/articles/tips-2-920.webp"
author: "Slava Hraichenko"
redirect_from: "/tpost/m6n0b6l511-tips-for-outsourcing-mvp-development-par"
permalink: "/tpost/how-to-successfully-manage-team-requirements-estimation-and-communication-in-outsourcing"
canonicalLink: "https://implex.dev/tpost/how-to-successfully-manage-team-requirements-estimation-and-communication-in-outsourcing"
category: "Blog"
showOnMainPage: true
showContactForm: true
---

![Time is ticking](/assets/img/articles/tips-2-920.webp)

In the previous part of this article, we talked about the Lean approach, and why successful startups use it to accelerate time to market. We’ve also defined a minimal viable product (MVP) and gave the lowdown on the preparation to be made before the MVP development.

In this part, we’ll get down to the nitty-gritty of the development process, along with practical tips on building a development team through the lens of a project we did for an American startup SmartLane. Read on to get clear instructions on how to realize your product idea in the MVP and make it attractive for potential users.

## Top tips for building a startup team

![Team picture](/assets/img/articles/tips-2/the-team.jpg)

The team of experts in your corner is the backbone of your project. But building your software development team is often challenging. Here are some ideas on how we reduced headaches when working on the SmartLane project.

We started the project at the end of February 2018, with the following team:

- 1.5 full-stack web developer (backend + frontend)
- 1 mobile app developer (iOS)
- 0.5 QA engineer
- 0.5 Project manager / Business analyst

While it doesn’t look like a big team, we still had to structure it properly. Here’s how we did this.

## Merge roles to reduce overwhelming communications

Merging roles leads to two positive changes improving the quality, budget and timeline:

- Information exchange without intermediaries results in more precise development because the team understands your needs and market better
- Faster and more effective communication reduces the product development time

The best roles for merging are backend + frontend developers, backend + mobile developers, PM + BA, QA + BA. In our case, we merged backend and frontend developers, PM and BA to increase communication efficiency.

## Opt for the team of developers experienced in UX

Sometimes, your dedicated team of developers will have to build an MVP when the UX design isn’t completed, as it was in our case. SmartLane had their own designer team, but it hadn’t finished the task by the time the project started.

During the first sprint and at the beginning of the second one, we only worked with clickable wireframes while SmartLane’s team was polishing their design. Our experience allowed us to design UX and develop a web UI using standard Material Components. Along with direct communication with SmartLane’s designer team, this allowed us to smoothly integrate our work with the final design once it was ready.

## Allow the outsourcing development vendor to attract more specialists fast

In some cases, your outsourcing development vendor will need to attract more specialists if the team lacks some expertise. For example, we invited a specialist to configure the .NET Core Starter with Angular 5 in the SmartLane project. We’ve also temporarily involved an architect to build the bidding engine at the first development stage.

Implementing these three principles of the team assembling allowed us to complete the following tasks within a week:

- Set up QA, Staging and Demo environments on Azure DevOps CI/CD and Amazon EC2 Linux
- Configure mobile (iOS Swift), API (.NET Core + Swagger) and web (Angular 5) projects
- Hold a meeting to discuss the product, plan sprints and choose libraries
- Prepare process tools for managing project requirements
- Get ready for the stage of intense development

Now that we’ve laid the groundwork let’s talk about sprint planning specific for an MVP project.

## Sprint planning

The key idea of planning sprints for an MVP is that they shouldn’t be too short: one- or two-week sprints even for three-month MVP development are too short to allow offshore developers to pick up the pace. The first weeks of the project are revolving around the infrastructure since the product is in its infancy. This stage logically takes a while, so developers need time before they can demonstrate some deliverables to you.

Also, until your MVP is ready, you don’t have any real users, can’t collect their feedback on your business idea, and can’t test if there is a product-market fit. So, choosing short sprints over the speed of the development at this stage doesn’t make any sense.

For the SmartLane project, we chose three-week sprints. So we completed four sprints within three months in total. Additionally, we spent one week setting up environments at the beginning of the project and one more week publishing the app on the App Store once the MVP was ready.

We worked in three directions:

- Backend, i.e., the business logic of the auction
- Mobile app development
- Management of auctions, cars and users via the admin panel

After the release, we turned to two-week sprints to reduce the response/cycle time.

For planning the development phases, we used the Waterfall model and Gantt charts. Later, we turned to Scrum to get better control over the scope and meet deadlines.

## Information exchange

![Team sharing ideas](/assets/img/articles/tips-2/team-information-exchange.jpg)

Soft skills such as communication, collaboration, and accountability are vital for professional developers, so make sure that all specialists in your team have them. Opt for face-to-face or real-time communication using tools built for collaboration like Figma or Miro. They allow multiple active users to work together on the same document or design and share comments.

According to the research on computer-mediated communication, the "question and answer" approach has proved to be the most effective way of communication. It also improves relationships between team members.

![Communication effectiveness chart](/assets/img/articles/tips-2/communication-effectiveness.png)

That’s why, at Implex, we encourage verbal discussions instead of the “read and confirm” principle and detailed written specifications. We do this by inviting another team member to look through the document together and discuss everything that isn’t clear.

If you work with designers outside your dedicated team, you should allow them to communicate with developers directly. This will speed up the process and make it more effective.

Having a technical product owner is also a great idea. This person will help you maintain the pace and eliminate bottlenecks that can slow down the team’s progress.

In the SmartLane case, we had a 10-hour difference between our Ukrainian team and California, where the client lived. So to discuss the project, we had to spare a couple of hours in the evening, after 6 P.M. We didn’t stay up late often, but had daily standup meetings and occasionally used that time for scheduling calls. Thanks to this and the fact that both the client’s product owner and the designer were ready to start their day earlier, our time difference didn’t affect the development process.

## How to plan and manage requirements: estimations and team’s responsibilities

Setting requirements for your team is often a mixed blessing. While they allow you to keep track of progress for some cases, they can also lead to worse development decisions and slow down the process. The good news is that you can avoid drawbacks by following four simple recommendations:

**Find a project manager with big-picture thinking for your team.** This person should be experienced in working with startup ecosystem and have a corresponding mindset. Some teams have a separate BA for this, but we think that a PM or a QA engineer suits it best for MVP.

**Let your software development team solely decide on the issues that don’t affect critical aspects of user experience.** It will save you time and let your team solve ongoing tasks related to both the development aspect and user experience. But make sure the team really understands the target audience and potential customers. For example, for the SmartLane project, we suggested building a web admin panel based on the standard Angular Material library and implemented this idea without any requirement description from the startup founder or product owner.

**Provide developers with a UI component library.** Along with direct communication between developers and designers, this will allow your team to solve urgent tasks quickly. You can even expect developers to complete your app twice faster with this approach (as it was in our case), compared to a standard “request-confirm” procedure when the product owner reviews every change in the UI design.

**Guesstimate instead of estimating.** Estimations are good, but they’re made by people who do the work and not the ones who will use the product. At the MVP stage, opt for rough but right rather than precise but wrong assessments.

In the SmartLane case, the product owner and PM were constantly managing the scope to release the MVP in time. They were assessing every sprint to limit the scope for it and define the required level of detail for every epic and user story. If the product owner and PM are experienced enough, this approach allows the team to accelerate the development process with no additional costs.

Now that we’ve discussed how to plan and set requirements let's get the lowdown on those specific to an MVP.

## Successful MVP delivery: key things to keep in mind

From the software development perspective, when you develop an MVP, you have to apply the following best practices:

- Don’t make your minimum viable product a one-size-fits-all solution. It should have one or two features carrying value to users.
- Don’t focus on high availability, localization and high load support at the MVP stage. Of course, developers should keep all this in mind for future iterations in case the product succeeds, but not more than this.
- Make sure that MVP features work flawlessly and fast. If not, the MVP won’t retain users and won’t collect adequate feedback.

When creating the MVP for SmartLane, we followed all three recommendations. Our team completed the work within three and a half months. The MVP’s characteristics we received at the end allowed us to use it for further iterations during the development of a full-fledged product. Here’s why:

- Thanks to the bidding engine developed with the help of Mongo.Watch(), the bid response was almost equal to the ping time between the customer and the server.
- Stateless application servers enabled linear horizontal scalability. For continuous support of the “mobile user-auction engine” channel, we had to implement our own WebSocket protocols for the server and the customer (Microsoft hadn’t released a stable SignalR library for .NET Core by that time yet).
- The mobile iOS app worked flawlessly with several auctions that have the lists of hundreds of cars and run simultaneously. We used Swift to achieve this level of performance.

In order to conduct market validation of the business model, the MVP had only two functions for the target audience — buying and selling cars. However, even these minimum features were enough to let SmartLane meet their needs and demonstrate a real product to their customers and investors in a demo environment (we wrote a script running demo auctions right from the mobile app). You can read what SmartLane has to say about our work here.

## To sum up

With the right approach, team and an expert PO, it’s possible to build an adjustable minimum viable product within three and a half months. For this, you’ll need a team that has experience in completing similar projects. Along with broad tech expertise and understanding of startup environments, the team must be able to guide you through hard technical decisions and make these decisions themselves.

We can become this team for you, just like we did for SmartLane and a number of other startups. Whether you need advice, professional support at the project kick-off stage or help with MVP planning, leave us a message, and we’ll get back to you shortly. You can also find us on LinkedIn or write directly to contact@implex.dev.

If you want to learn what happened to the SmartLane project, read the next article. There, we’ll focus on what comes after an MVP and discuss the mistakes business often make at this stage.
