---
title: What is a web server?
slug: Learn/Common_questions/Web_mechanics/What_is_a_web_server
page-type: learn-faq
---

# What is a web server?

_(Updated: 06/10/2025)_

In this article, we explain what web servers are, how web servers work, and why they are important.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        You should already know
        <a href="../how_the_internet_works"
          >how the Internet works</a
        >, and
        <a
          href="../web_mechanics/pages_sites_servers_and_search_engines/"
          >understand the difference between a web page, a website, a web
          server, and a search engine</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        You will learn what a web server is and gain a general understanding of
        how it works.
      </td>
    </tr>
  </tbody>
</table>

## Summary

The term _web server_ can refer to hardware or software, or both of them working together.

1. On the hardware side, a web server is a computer that stores web server software and a website's component files (for example, HTML documents, images, CSS stylesheets, and JavaScript files). A web server connects to the Internet and supports physical data interchange with other devices connected to the web.

2. On the software side, a web server includes several parts that control how web users access hosted files. At a minimum, this is an _HTTP server_. An HTTP server is software that understands _`URLs*`_ (web addresses) and [HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP) (the protocol your browser uses to view webpages). An HTTP server can be accessed through the domain names of the websites it stores, and it delivers the content of these hosted websites to the end user's device.

> **Uniform Resource Locator** (**URL**) is a text string that specifies where a resource (such as a web page, image, or video) can be found on the Internet.
> 
> In the context of [HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP), URLs are called "Web address" or "link". Your [browser](https://developer.mozilla.org/en-US/docs/Glossary/Browser) displays URLs in its address bar, for example: `https://developer.mozilla.org` Some browsers display only the part of a URL after the "//", that is, the [Domain name](https://developer.mozilla.org/en-US/docs/Glossary/Domain_name).
>
> URLs can also be used for file transfer ([FTP](https://developer.mozilla.org/en-US/docs/Glossary/FTP)), emails ([SMTP](https://developer.mozilla.org/en-US/docs/Glossary/SMTP)), and other applications.

**At the most basic level**, whenever a browser needs a file that is hosted on a web server, the browser requests the file via HTTP. When the request reaches the correct (hardware) web server, the (software) _HTTP server_ accepts the request, finds the requested document, and sends it back to the browser, also through HTTP. (If the server doesn't find the requested document, it returns a [404](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404) response instead.)

![Basic representation of a client/server connection through HTTP](assets/web.client.web.server.png)

To publish a website, you need either a static or a dynamic web server.

A **static web server**, or stack, consists of a computer (hardware) with an HTTP server (software). We call it "static" because the server sends its hosted files as-is to your browser.

A **dynamic web server** consists of a static web server plus extra software, most commonly an _application server_ and a _database_. We call it "dynamic" because the application server updates the hosted files before sending content to your browser via the HTTP server.

For example, to produce the final webpages you see in the browser, the application server might fill an HTML template with content from a database. Sites like MDN or Wikipedia have thousands of webpages. Typically, these kinds of sites are composed of only a few HTML templates and a giant database, rather than thousands of static HTML documents. This setup makes it easier to maintain and deliver the content.

## Deeper dive

**To review:** to fetch a webpage, your browser sends a request to the web server, which searches for the requested file in its own storage space. Upon finding the file, the server reads it, processes it as needed, and sends it to the browser. Let's look at those steps in more detail.

### Hosting files

First, a web server has to store the website's files, namely all HTML documents and their related assets, including images, CSS stylesheets, JavaScript files, fonts, and video.

Technically, you could host all those files on your own computer, but it's far more convenient to store files all on a dedicated web server because:

- A dedicated web server is typically more available (up and running).
- Excluding downtime and system troubles, a dedicated web server is always connected to the Internet.
- A dedicated web server can have the same IP address all the time. This is known as a _dedicated IP address_. (Not all ISPs* provide a fixed IP address for home lines.)
- A dedicated web server is typically maintained by a third party.

> An **ISP** (Internet Service Provider) sells Internet access, and sometimes email, web hosting, and voice over IP, either by a dial-up connection over a phone line (formerly more common), or through a broadband connection such as a cable modem or DSL service.

For all these reasons, finding a good hosting provider is a key part of building your website. Examine the various services companies offer. Choose one that fits your needs and budget. (Services range from free to thousands of dollars per month.) You can find more details [in this article](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost#hosting).

Once you have web hosting service, you must upload your files to your web server using one of the available transfer methods: `FTP`, `SFTP`, `SSH`, `RSync`, etc. If you are using a hosting provider that supports git integration, you can connect your GitHub repository and let the hosting service access your files directly from the repo which is a more convenient way.

### Communicating through HTTP

Second, a web server provides support for [HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP) (**H**yper**t**ext **T**ransfer **P**rotocol). As its name implies, HTTP specifies how to transfer hypertext (linked web documents) between two computers.

A [Protocol](https://developer.mozilla.org/en-US/docs/Glossary/Protocol) is a set of rules for communication between two computers. HTTP is a `textual`, `stateless` protocol.

- **Textual**
  - All commands are plain-text and human-readable.
- **Stateless**
  - Neither the server nor the client remember previous communications. For example, relying on HTTP alone, a server can't remember a password you typed or remember your progress on an incomplete transaction. You need an application server for tasks like that. (We'll cover that sort of technology in other module.)

HTTP provides clear rules for how a client and server communicate: 

- Usually only _clients_ make HTTP requests, and only to _servers_. Servers _respond_ to a _client_'s HTTP request. A server can also populate data into a client cache, in advance of it being requested, through a mechanism called [server push](https://en.wikipedia.org/wiki/HTTP/2_Server_Push).

- When requesting a file via HTTP, clients must provide the file's [URL](../../../resources/glossary/URL.md).
- The web server _must answer_ every HTTP request, at least with an error message.

On a web server, the HTTP server is responsible for processing and answering incoming requests.

1. Upon receiving a request, an HTTP server checks if the requested URL matches an existing file.

2. If so, the web server sends the file content back to the browser. If not, the server will check if it should generate a file dynamically for the request (see [Static vs. dynamic content below](#static_vs._dynamic_content)).

3. If neither of these options are possible, the web server returns an error message to the browser, most commonly [404 Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404).
   The 404 error is so common that some web designers devote considerable time and effort to designing 404 error pages.
   [![The MDN 404 page as an example of such error page](assets/mdn-404.jpg)](/en-US/docs/Web/HTTP/Status/404)

### Static vs. dynamic content

Roughly speaking, **a server can serve either static or dynamic content**. Remember that the term **_static_ means "served as-is"**. Static websites are the easiest to set up, so we suggest you make your first site a static site.

The term **_dynamic_ means that the server processes the content or even generates it on the fly** from a database. This approach provides more flexibility, but the technical stack is more complex, making it dramatically more challenging to build a website.

> It is impossible to suggest a single off-the-shelf application server that will be the right solution for every possible use case. Some application servers are designed to host and manage blogs, wikis, or e-commerce solutions, while others are more generic. If you're building a dynamic website, take the time to research your requirements and find the technology that best fits your needs.

Most website developers won't need to create an application server from scratch, because there are so many off-the-shelf solutions, many of which are highly configurable.
But if you do need to create your own server, then you will probably want to use a server framework, leveraging its existing code and libraries, and extending just the parts that you need in order to meet your use case.
Only a relatively small number of developers should need to develop a server completely from scratch: for example, in order to meet tight resource constraints on an embedded system.

## Hosting

Here are some things you need to know about hosting and hosting providers:

- Understanding bandwidth
- Domain names
- DIY hosting vs packaged hosting
- Free hosting vs Paid hosting

### Understanding bandwidth

Hosting providers charge you according to how much _`bandwidth`_* your website consumes. This depends on how many people, and Web crawling robots, access your content during a given time, and how much server space your content takes up. This is why people usually store their videos on dedicated services such as YouTube, Dailymotion, and Vimeo. For example, your provider may have a plan that includes up to several thousand visitors per day, for "reasonable" bandwidth usage. Be careful, however as this is defined differently from one hosting provider to another. Keep in mind that reliable, paid, personal hosting can cost around ten to fifteen dollars per month.

> **Bandwidth** is the measure of how much information can pass through a data connection in a given amount of time. It is usually measured in multiples of bits-per-second (bps), for example megabits-per-second (Mbps) or gigabits-per-second (Gbps).

> **Note:** There is no such thing as "unlimited" bandwidth. If you consume a huge amount of bandwidth, expect to pay a huge amount of money.

### Domain names

Your domain name has to be purchased through a domain name provider (a registrar). Your hosting provider may also be a registrar ([Ionos](https://www.ionos.com/), [Gandi](https://www.gandi.net/en-US) for instance are at the same time registrars and hosting providers). The domain name usually costs $5-15 per year. This cost varies depending on:

- Local obligations: some country top-level domain names are more costly, as different countries set different prices.
- Services associated with the domain name: some registrars provide spam protection by hiding your postal address and email address behind their own addresses: the postal address can be provided in care of the registrar, and your email address can be obscured via your registrar's alias.

### Do-it-yourself hosting vs. "packaged" hosting

When you want to publish a website, you could do everything by yourself: set up a database (if needed), Content Management System, or `CMS*` (like [Wordpress](https://wordpress.org/), [Dotclear](https://dotclear.org/), [spip](https://www.spip.net/en_rubrique25.html), etc.), upload pre-made or your own templates.

> A **CMS** (Content Management System) is software that allows users to publish, organize, change, or remove various kinds of content, not only text but also embedded images, video, audio, and interactive code. 

You could use your hosting provider's environment, for roughly ten to fifteen dollars per month, or subscribe directly to a dedicated hosting service with pre-packaged CMSs (e.g., [Wordpress](https://wordpress.com/), [Tumblr](https://www.tumblr.com/), [Blogger](https://www.blogger.com/)). For the latter, you won't have to pay anything, but you may have less control over templating and other options.

### Free hosting vs. paid hosting

You might ask, why should I pay for my hosting when there are so many free services?

- You have more freedom when you pay. Your website is yours, and you can migrate seamlessly from one hosting provider to the next.

- Free hosting providers may add advertising to your content, beyond your control.

- Paid hosting will get you constant (24/7) and reliable support from a well-respected hosting provider.

It is better to go for paid hosting rather than relying on free hosting, as it is possible to move your files easily and uptime is guaranteed by most paid sites. Most hosting providers give you a huge discount to start with.

Some people opt for a mixed approach. For example, their main blog on a paid host with a full domain name, and spontaneous, less strategic, content on a free host service.

---

### Sources and Attributions

**Content is based on the following sources:**

- **MDN**
    - [What is a web server?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server) [(Permalink)](https://github.com/mdn/content/blob/3c7e928f332191b153c40a6ade88fb5815c92b99/files/en-us/learn/common_questions/web_mechanics/what_is_a_web_server/index.md)
    - [ISP](https://developer.mozilla.org/en-US/docs/Glossary/ISP) [(Permalink)](https://github.com/mdn/content/blob/3c7e928f332191b153c40a6ade88fb5815c92b99/files/en-us/glossary/isp/index.md)
    - [How much does it cost to do something on the Web?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost#hosting) [(Permalink)](https://github.com/mdn/content/blob/3c7e928f332191b153c40a6ade88fb5815c92b99/files/en-us/learn/common_questions/tools_and_setup/how_much_does_it_cost/index.md)
    - [CMS](https://developer.mozilla.org/en-US/docs/Glossary/CMS) [(Permalink)](https://github.com/mdn/content/blob/3c7e928f332191b153c40a6ade88fb5815c92b99/files/en-us/glossary/cms/index.md)
    - [Bandwidth](https://developer.mozilla.org/en-US/docs/Glossary/Bandwidth) [(Permalink)](https://github.com/mdn/content/blob/3c7e928f332191b153c40a6ade88fb5815c92b99/files/en-us/glossary/bandwidth/index.md)
    - [URL](https://developer.mozilla.org/en-US/docs/Glossary/URL) [(Permalink)](https://github.com/mdn/content/blob/3c7e928f332191b153c40a6ade88fb5815c92b99/files/en-us/glossary/url/index.md)
