# Curriculum App
Here is Everything about Curriculum App<br> 
This repository holds whole Content management system.

Your contribution is more than welcomed :)
## Project setup
- Clone the repo `git clone https://github.com/navgurukul/Currriculam.git`
- Change the directory `cd Currriculam`and then Install dependencies `npm install`  


## 🚀 Getting started 

### develop

Start our Curriculum application with autoReload enabled.<br>
through run command in Developement. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### start

Start your Strapi application with autoReload disabled. <br>
through run command in Production. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### build

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```
### Tech Stack
- **NodeJS** : We share a love-hate relationship with JavaScript, but our love for it outweighs the hate . 
- **PostgreSQL** : One of the good things about Postgres is that it is ORDBMS (O for object) rather than just RDMS.
    #### Strapi Plugin
    - [@strapi/strapi](https://strapi.io/) : Strapi is the leading open-source headless Content Management System (CMS).
    - [@strapi/provider-upload-aws-s3](https://strapi.io/blog/how-to-set-up-amazon-s3-upload-provider-plugin-for-our-strapi-app) : Amazon AWS is the biggest cloud provider.
    - [@strapi/plugin-i18n](https://strapi.io/blog/i18n-implementation-and-best-practices-in-strapi) : Content in different languages.

    - [react-quill](https://strapi.io/blog/how-to-change-the-default-wysiwy-to-quill-editor) : Content editor.
## Strapi Features

### Content Manager
- Quick way to see, edit and delete the data in your database.
    
### Content Type Builder
- Modelize the data structure of your API. Create new fields and relations in just a minute. The files are automatically created and updated in your project.
###  wysiwyg(Quill editor)
- Quill is a powerful, free and open source WYSIWYG editor made for the modern web. Equipped with modern architecture and an expressive API, it’s highly compatible, extensible and customizable to fit any need.
### Internationalization
- This plugin enables to create, to read and to update content in different languages, both from the     Admin Panel and from the API.


## Code Structure

```
├──── .cache # files used to build the admin panel
├──── config # API configurations
│     ├ api.ts
│     ├ admin.ts
│     ├ cron-tasks.ts
│     ├ database.ts
│     ├ middlewares.ts
│     ├ plugins.ts
│     └ server.ts
├──── database
│     └──── migrations
├──── dist # build of the backend
│     └──── build # build of the admin panel
├──── node_modules # npm packages used by the project
├──── public # files accessible to the outside world
│     └──── uploads
├──── src
│     ├──── admin # admin customization files
│     │     ├──── extensions # files to extend the admin panel
│     │     ├ app.example.tsx
│     │     ├ webpack.config.ts
|     |     └ tsconfig.json
│     ├──── api # business logic of the project split into subfolders per API
│     │     ├──── course
│     │     │     ├─ (content-type)
│     │     │     │      └─ course
│     │     │     │            └ schema.json
│     │     │     ├─ controllers
│     │     │     │      └─ course.ts
│     │     │     ├─ routes
│     │     │     │      └─ course.ts
│     │     │     └─ services
│     │     │            └─ course.ts
│     │     └──── exercise
│     │           ├─ (content-type)
│     │           │      └─ exercise
│     │           │            └ schema.json
│     │           ├─ controllers
│     │           │      └─ exercise.ts
│     │           ├─ routes
│     │           │      └─ exercise.ts
│     │           └─ services
│     │                  └─ exercise.ts
│     ├──── extensions
│     │
│     ├──── plugins # local plugins files
│     │     └─ wysiwyg
│     │        ├─ admin
│     │        │  └─ src
│     │        │      ├─ components
│     │        │      │    ├─ Intitilizer
│     │        │      │    │   └─ index.js
│     │        │      │    ├─ PluginIcon
│     │        │      │    │   └─ index.js 
│     │        │      │    ├─ QuillEditor
│     │        │      │    │   └─ index.js
│     │        │      │    └─ Wysiwyg
│     │        │      │        └─ index.js
│     │        │      │
│     │        │      ├─ pages
│     │        │      │    ├─ App
│     │        │      │    │   └─ index.js 
│     │        │      │    └─ HomePage
│     │        │      │        └─ index.js
│     │        │      │
│     │        │      ├─ translaions
│     │        │      ├─ utils
│     │        │      │    ├─ axiosInstance.js
│     │        │      │    └─ getTrad.js
│     │        │      ├─ index.tsx
│     │        │      └─ pluginId.ts
│     │        │ 
│     │        ├─ node_modules # npm packages used by the quill editor
│     │        │ 
│     │        ├─ server 
│     │        │  ├─ config 
│     │        │  │    └─ index.js
│     │        │  ├─ content-type
│     │        │  │    └─ index.js
│     │        │  ├─ controllers
│     │        │  │    ├─ index.js
│     │        │  │    └─ my-controller.js
│     │        │  ├─ middlewares
│     │        │  │    └─ index.js
│     │        │  ├─ policies
│     │        │  │    └─ index.js
│     │        │  ├─ routes
│     │        │  │    └─ index.js
│     │        │  ├─ services
│     │        │  │    ├─ index.js
│     │        │  │    └─ my-controller.js
│     │        │  ├─ bootstrap.js
│     │        │  ├─ destroy.js
│     │        │  ├─ index,js
│     │        │  └─ register.js
│     │        │
│     │        ├─ package.json
│     │        ├─ strapi-admin.js
│     │        └─ strapi-server.js
│     │    
│     └ index.ts # include register(), bootstrap() and destroy() functions
│     
├ .env
├ tsconfig.json
└ package.json
```