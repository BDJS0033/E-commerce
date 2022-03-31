# 13 Object Relational Mapping (ORM): E-commerce Back End

# Description:

Internet retail, also known as e-commerce, is the largest sector of the electronics industry. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.

This weeks challenge was to build the back end for an e-commerce site, taking a working Express.js API and configure it to use Sequelize to interact with a MySQL database.

# User Story: 
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```
## Acceptance Criteria
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```
## Packages
______________

Packages requried to be installed:

```
npm init --y
npm i express
npm install --save mysql2
```

## Demo Video
________


## Technology:
________________________
<p><a href="https://nodejs.org/">Node.js</a></p>
<p><a href="https://www.npmjs.com/package/express">Express</a></p>
<p><a href="https://www.npmjs.com/package/mysql">MySQL</a></p>


## GitHub
________________

GitHub https://github.com/BDJS0033/E-commerce


<br />
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
