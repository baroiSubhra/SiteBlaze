# Introduction

In the digital world, the first impression matters. When visitors land on your website, you want to captivate their attention and leave a lasting impression.

SiteBlaze is a web application that enables users to effortlessly create stunning landing pages in just a few clicks. Powered by [Vue.js](https://vuejs.org/) and [Appwrite](https://cloud.appwrite.io/), SiteBlaze empowers users to customize major sections of their websites and provides a seamless content management system for real-time blogging and project updates.

# Inspiration

There are no-code tools available tools like [Webflow](https://webflow.com/) and [Framer](https://www.framer.com/) which are interesting, I have seen developers selling amazing templates online which users can buy and use to customize as per their needs, but the limitations related to bandwidth and the number of cms content make these options expensive and very difficult to manage for users on a long run plus there is an added minute learning curve required to learn the tools and customize the templates.

The inspiration behind creating SiteBlaze stemmed from the desire to simplify website creation and make the process accessible to all, I wanted to provide a tool that eliminates barriers to learning new tools and technology and allows individuals or businesses to create captivating websites that leave a lasting impression which comes with a dedicated CMS using which users can post their projects and blogs in realtime.

# SiteBlaze Details

SiteBlaze landing page consists of a short overview of the product with detailed sections related to all the features of the application, links to login and signup are available using which users can signup or log in.

### Signup

![First Step Of Signup](https://cdn.hashnode.com/res/hashnode/image/upload/v1686675493031/a956fcd3-3bbd-4b7a-b9ff-755f73a3bb9d.png)

**First Step Of Signup**

![Second Step Of Sign Up](https://cdn.hashnode.com/res/hashnode/image/upload/v1686675589258/1140b1e1-f553-454d-8aac-4ece96a1bb6d.png")

**Second Step Of Sign Up**

Signup is fairly simple and standard, after filling in the basic details user will be logged in to the dashboard, it is a two-step process the first stage includes taking the user name and name, and the second stage takes email and password for creating the account

Note that all fields are required especially the username since this is used in generating the personal website link

### Login

![Login](https://cdn.hashnode.com/res/hashnode/image/upload/v1686675645687/835c48bf-cc89-41a5-b579-6f64c2049b87.png)

**Login**

A standard login flow users can log in by filling in the required fields.

### My Templates

![My Templates Section](https://cdn.hashnode.com/res/hashnode/image/upload/v1686675754131/2a122a6c-da0f-4f19-bec5-a2119a282335.png)

**My Templates Section**

This section contains all the templates chosen by the user for customization user can see visit and edit options, visit button opens the custom template in a new tab and edit redirects to the Manage site page where user can customize,

On fresh login, since there are no templates chosen for customization this section is empty by default.

### Active Site Settings

![My Active Site (Read Only Mode)](https://cdn.hashnode.com/res/hashnode/image/upload/v1686675894267/be487c52-1f70-47e6-af8e-ff684f119fb1.png)

**My Active Site (Read Only Mode)**

**Read Only Mode**

This tab opens the currently active website, the user is shown the site in a responsive frame and there are CTAs  
**Delete**:- Used to delete the customized template  
**View**:- Opens the website in a new tab  
**Activate/Deactivate**:- Used to **Activate** or **Deactivate** the Site, by default every site that you choose for customization is in an inactive state

**Edit**:- Used to enter edit mode ( this is where the magic happens )

![My Active Site (Edit Only Mode)](https://cdn.hashnode.com/res/hashnode/image/upload/v1686675933961/47db40b4-c34e-4958-83ef-b5ecf35243d2.png)

**My Active Site (Edit Only Mode)**

**Edit Mode**

Users enter the edit mode by clicking the Edit button.  
On the top, there are two buttons followed by a preview section and the editor section.

**Cancel**:- To exit edit mode  
**Save Changes**:- To save the changes made

The preview section shows the preview of the site,

The last section consists of an accordion containing multiple sections which contain inputs that can be changed, and on changing inputs the real-time preview of the same can be seen in the preview section, after clicking on save the changes will be reflected in your site.

### Template Store

![Template Store](https://cdn.hashnode.com/res/hashnode/image/upload/v1686675965051/a42d75b9-aee8-452f-9cb1-df472f1e48a5.png)

**Template Store**

This is the collection of templates that users can use to customize, as of now there are only a few templates, I will add more in the coming future.  
On each card, there are two buttons

**View**:-launches template in a new tab.  
**Customize**:-Adds a copy of this template to **My templates** for the user to customize.

### Projects

![Projects Section](https://cdn.hashnode.com/res/hashnode/image/upload/v1686675988921/83ab98b3-ca63-4cb8-bcdb-d116eb50b907.png)

**Projects Section**

This is the dedicated section for managing **Projects**, user can easily add, edit and delete projects.  
There are two modes either the user can save the project or choose to save as draft or publish it online

Status meaning  
**online**:- Visible the world  
**draft**:-In drafts invisible to the world

![Content Filling Page To Create Project/Blog](https://cdn.hashnode.com/res/hashnode/image/upload/v1686676209722/78168771-e55b-4225-9c50-f8123377e857.png)

**Content Filling Page To Create Project/Blog**

Users can add Projects using the add Project Button, it opens a page that asks for details which users can simply fill in and watch a preview of the content.  
Once happy, the user can either choose to publish or choose to save it as draft

### Blogs

![Blogs Section](https://cdn.hashnode.com/res/hashnode/image/upload/v1686675998830/513baeff-2ed5-4950-881e-f0b397e9c34c.png)

**Blogs Section**

This is the dedicated section for managing **Blogs** similar to projects, all the operations which can be performed for projects can be performed for blogs.

### CTA Queries

![CTA Querries Section](https://cdn.hashnode.com/res/hashnode/image/upload/v1686676330245/be00e6d0-737f-459b-8125-b28791e183a5.png)

**CTA Querries Section**

This section lists the details gathered from the Contact Us form or CTA section of the users' live website, user can edit and delete the cta queries.

![CTA Edit Page](https://cdn.hashnode.com/res/hashnode/image/upload/v1686676418161/2bebdf02-94f5-49c4-b45e-a2b69b00ec6a.png)

**CTA Edit Page**

edit action opens up a form which the user can edit and save or cancel and go back to the cta queries section.

### Account Settings

![Account Settings](https://cdn.hashnode.com/res/hashnode/image/upload/v1686678269918/8528823f-58c3-41b9-a970-37bbf3cefa98.png)

**Account Settings**

This section shows the user's details which can be edited by the users.

### Change Password

![Change Password Screen](https://cdn.hashnode.com/res/hashnode/image/upload/v1686678287282/0375549f-b38c-4eba-9278-468a0926f767.png)

**Change Password Screen**

Users can change their password from here.

### Logout

Used for logging out.

# Tech Stack

Behind the scenes of SiteBlaze, a powerful and seamless web application, lies a carefully selected tech stack that harnesses the strengths of various technologies which are listed below.

* ### [**Vue**](https://vuejs.org/) for **Frontend**
    
    Vue served as the foundation of SiteBlaze's front-end development.  
    There were two reasons for selecting Vue over any other framework first the framework supports two-way data binding out of the box, virtual dom, template syntax, is flexible, and generates relatively smaller bundle sizes on the build which makes this a suitable candidate for this project, the second reason, I could find only a handful projects made in Vue, so thought of giving it a try.
    
* ### [**Tailwind**](https://tailwindcss.com/) for **Styling**
    
    Two reasons behind using tailwind, it helps in rapid development and its easy to use
    
* ### [**Appwrite**](https://appwrite.io/) for **Authentication**, **Database** and **Storage**
    
    Appwrite's user authentication, database, and storage capabilities provided a solid foundation for managing users and serving dynamic content on the websites.  
    Its robust backend infrastructure ensured the security and efficiency of data storage and retrieval.
    
    My developer experience working with Appwrites is 10 on 10, I was able to integrate everything smoothly, and there was not even a single moment where I was clueless and was not able to debug any error, Appwrite is pure gold, kudos to Appwrite for creating such amazing product and maintaining developer-friendly documentation and making things so easy to work with.
    
* ### [**CloudflarePages**](https://pages.cloudflare.com/) for **Deployment**
    
    The main reason for choosing this is Cloudflare's fast content delivery through its CDN (Content Delivery Network) and additional security features such as DDoS protection and Web Application Firewall (WAF).  
    It simplifies the process of publishing code by allowing users to seamlessly connect their repository to Cloudflare Pages and automatically deploy code whenever changes are pushed to the repository.
    

    

# SiteBlaze Link & Demo Credentials

Here is the [link](https://siteblaze.pages.dev/) to SiteBlaze

Site :- [https://siteblaze.pages.dev](https://siteblaze.pages.dev/)  
Email :- [demo@demo.com](mailto:demo@demo.com)  
Password :- password

# SiteBlaze Demo

Here is the link to the demo of SiteBlaze  
[https://youtu.be/Qjv3Knsq1Lg](https://youtu.be/Qjv3Knsq1Lg)

# How to run
Following are the steps to run the project

[Untitled Database](https://www.notion.so/9f74ecaf940145bb81356855e59c27a0?pvs=21)

Clone repository

```bash
git clone https://github.com/BaroiSubhraJyoti/SiteBlaze.git
```

Navigate inside and run the following command to install packages

```bash
# make sure to use node version > 16
npm install
```

Create appwrite project with the following schema

```bash
...comming soon...

```

Create and Populate a .env file at the root with relevant appwrite cloud ids

```bash
VITE_ENDPOINT =
VITE_PROJECT_ID = 
VITE_DATABASE_ID = 
VITE_COLLECTION_PORTFOLIOS =
VITE_COLLECTION_PROJECTS =
VITE_COLLECTION_PROJECT_COUNT =
VITE_COLLECTION_USER_DETAILS=
VITE_COLLECTION_BLOGS = 
VITE_COLLECTION_BLOG_COUNT = 
VITE_IMAGE_BUCKET_ID = 
VITE_COLLECTION_CTA = 
VITE_COLLECTION_CTA_COUNT =
VITE_PAGINATION_LIMIT=

```

Use the following command to run locally

```bash
npm run dev
```

Use the following command to build the project

```bash
npm run build
```