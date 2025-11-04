npm i prisma --dev -> installing prisma as a dev dependency

npm i @prisma/client -> for making and initialising connection pools

npx prisma init -> then add the schema in schema.
<!-- 
model User{
  id String @id @default(cuid())@map("_id) @id-> marks id as primary key
  name String? ->generates unique string ID
  email String @unique -> map this field to mongo native _id
} -->
prisma then-> npx prisma generate -> npx prisma db push.   Prisma connected to the MongoDb and created a user collection

# authentication using auth.js using docs of auth.js with prisma adapter
->pm install next-auth@beta
-> npx auth secret // it created the env.local with a secret code-> copy into .env and delete the env.local
->create auth.ts in root directory and copy from docs,then create folders->app->api->[...nextauth]-> route.ts and paste from docs.
-> npm i @auth/prisma-adapter and follow the docs

-> then create auth.config.ts and write the code of google and github auth and add the .env
