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