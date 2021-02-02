---
date: "06-08-2020"
---

# Dearborn

I've been thinking about collaborative software and publishing online content for a while now. One of my biggest problems with making online content, is the amount of effort it takes to do so. Even more so when you don't want to use a homogenise social platform and instead want to DIY your own things. When trying to run your own server, putting your files online, and working with databases you end up 10 weekends later with a broken VPS server that you don't trust for the fear of accidentally breaking something you don't understand and losing all that work.

I want to move my data and content online. Work with databases from an excel GUI and write from a text editor that doesn't enforce an A4 shaped metaphor of linear content. We're talking about home-scale publishing, not global VC funded distributed databases and AWS services.

Most of the limitations that software products create are calculated. Free tiers and features are created to introduce people to the service, to make the product important enough so you'll pay for it.  And a lot of the limitations are setup so people can't use the product professionally without handing over money. API's are limited, servers only run temporally.

Like most home projects you won't use your tools professionally. If your personal site is slow, eh it's slow. If you DDOS your own database, so what.  You might need to delete a table, or you might need to reboot but the ability to write a small program, having it run without limitations and without forking over €10,- a month to keep it alive is priceless though.

So many people around me have spent so much time working in and around online media. They have done creative coding workshops. They know some graphic design tools and have wordpress sites. Every single one of them could hack together a phython script, or web scraper, or poop diary, or whatever. Yet none of them has any of that available online. none of them are able to break free from wordpress, social platforms or desktop files. Creating happens, yet only screenshots end up on their own website.

What if their project folder could turn their notes, media, excel sheets and home made programs into public or private websites? Think a blend of Airtable + Notion + Dropbox + Heroku. This is what I think Dearborn should be. Here is how I think it should work:

- Dearborn has an interface similar to a notes app, file explorer or a code editor.
- Entities in Dearborn could be:
    - Data and Databases
        - Databases should work like spreadsheets. Let's be honest most home-scale data isn't that much. Building your own spreadsheets, and populating them with internet data shouldn't involve fighting with oAuth, API rate limits, and Syncing code. I should be able to translate a request-response to a spreadsheet and either keep it synced or poll for updates all from a GUI. The database should make it easy to input data from forms or phones.
    - Media and Files
        - Media can be used or referenced in the database or content. It should be easy to get derivatives of files. Images should be easily cropped, resized or available uncompressed. Video should play and embed easily. Simple actions like trimming and resizing should be possible. You should set access limits easily, private by default but distributed easily.
    - Content
        - Content are notes and writing. All content should focus on non-repeated formatting and writing. Text should be styled with everything markdown offers plus referencing live spreadsheet cells, media files and derivatives. Text should be tagged and marked for extra information. Think custom styling, think versioning, think DIY interactive elements. At [oneacre.online](http://oneacre.online) we call this extra information breadcrumbs. These breadcrumbs are things that start to push writing on Dearborn away from A4 shaped documents. References of documents and links should create footnotes. Footnotes should create downloadable archives of sites and PDF documents to fight linkrot.
    - Programs
        - Running programs should be connecting a git repo and if needed setting a sub-domain name. Either adding build and start commands for front-end projects or including a docker file should be enough to get it running. Sharing recipes for established projects would be pretty simple. Accessing any of the other files types should be possible through an API and simple urls. Reading data should be super simple. Posting data from a program can be more complex. That's okay, if you as a user are at the point of programmatically inputting data it's ok. You should never have to write API's. Simple POST endpoints should be enough to do all you want.

It might feel like all these features are insanely complex products on their own. However I think that with focussing on having a great and extensible content editor. Everything else can have sparse and basic features.