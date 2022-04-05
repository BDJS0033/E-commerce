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
## Packages Required

```
npm i express
npm i mysql2
npm i sequelize
npm i dotenv
```
<p><a href="https://nodejs.org/">Node.js</a></p>
<p><a href="https://www.npmjs.com/package/express">Express</a></p>
<p><a href="https://www.npmjs.com/package/mysql">MySQL</a></p>
<p><a href="https://www.npmjs.com/package/dotenv">Dotenv</a></p>
<p><a href="https://www.npmjs.com/package/sequelize">MySQL</a></p>

## Deployment:

When deplpoying this application, start by adding a .env file to the root of the application:

```
DB_NAME='ecommerce_db'
DB_USER='root'
DB_PW='root'
```
* Start MySQL with `mysql -u root -p`
* Type `source db/schema.sql` to initiate database
* Once source database runs, exit MySQL and run `npm run seed`
* To start the application run `npm start`

## Demo Video
________

## GitHub

GitHub https://github.com/BDJS0033/E-commerce


<br />
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
