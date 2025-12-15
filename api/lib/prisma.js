import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;














// Bhai 👍
// ab main **Prisma Client ko zero se hero tak** samjha raha hoon —
// **kya hai, kyu chahiye, kaise kaam karta hai, tumhare project me kya role hai**
// sab **simple + detailed but brief**.

// ---

// # 🧠 Pehle ek one-line idea

// > **Prisma Client ek auto-generated JS object hai jo tumhe database se baat karne deta hai bina raw queries likhe**

// ---

// # 1️⃣ Prisma Client KYA hai?

// ### Simple words me:

// * Prisma Client ek **JavaScript library** hai
// * Jo Prisma tumhare **schema.prisma** se banata hai
// * Aur tumhare code ko **database se connect** karta hai

// 👉 Ye **database ka remote control** hai 🎮

// ---

// # 2️⃣ Prisma Client KAHA se aata hai?

// Tum likhte ho:

// ```bash
// npx prisma generate
// ```

// Prisma:

// * `schema.prisma` padhta hai
// * Models dekhta hai (`User`)
// * Aur ek **custom client** banata hai

// 👉 Isliye ye generic nahi, **tumhare project ke according hota hai**

// ---

// # 3️⃣ Prisma Client FILE ka role

// ```js
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default prisma;
// ```

// ### Ye kya karta hai?

// * DB ke saath connection ready karta hai
// * Query methods deta hai:

//   * `findMany`
//   * `findUnique`
//   * `create`
//   * `update`
//   * `delete`

// ---

// # 4️⃣ Prisma Client aur Schema ka connection 🔗

// ### Schema:

// ```prisma
// model User {
//   username String @unique
// }
// ```

// ### Client:

// ```js
// prisma.user.create({
//   data: { username: "akshay" }
// });
// ```

// 👉 Prisma automatically samajh leta hai:

// * User model kya hai
// * Username unique hona chahiye

// ---

// # 5️⃣ Internally Prisma Client KAISE kaam karta hai?

// ### Step-by-step flow:

// ```
// Your JS code
//    ↓
// Prisma Client
//    ↓
// Prisma Engine
//    ↓
// MongoDB / SQL
// ```

// ### Breakdown:

// 1. Tum JS object dete ho
// 2. Prisma usko DB query me convert karta hai
// 3. DB response laata hai
// 4. Prisma clean JS object return karta hai

// ---

// # 6️⃣ Prisma Client tumhare project me KYA KAAM kar raha hai?

// Tumhare case me:

// * User register
// * User login
// * Username/email unique check
// * Password save
// * User fetch

// Sab jagah:

// ```js
// prisma.user...
// ```

// ---

// # 7️⃣ Prisma Client use karne ke BENEFITS

// | Without Prisma | With Prisma     |
// | -------------- | --------------- |
// | Raw queries    | Clean JS        |
// | Manual checks  | Auto validation |
// | DB specific    | DB agnostic     |
// | Error prone    | Safe            |

// ---

// # 8️⃣ Prisma Client kab DB se connect hota hai?

// ⚠️ Important point:

// > Prisma DB se **server start pe nahi**,
// > **query pe connect hota hai**

// ```js
// await prisma.user.findMany();
// ```

// 👉 Yahin DB connection banta hai

// ---

// # 9️⃣ Common mistakes (VERY IMPORTANT)

// ❌ Har file me `new PrismaClient()`
// ❌ Schema change ke baad `prisma generate` na chalana
// ❌ Error codes handle na karna
// ❌ `.env` galat hona

// ---

// # 🔟 Prisma Client errors example

// ```js
// catch (err) {
//   if (err.code === "P2002") {
//     // unique constraint error
//   }
// }
// ```

// ---

// # 🧠 Interview-ready one-liner

// > **Prisma Client ek auto-generated ORM client hai jo schema ke rules follow karke database operations safe aur easy banata hai**

// ---

// # 🔥 Kab Prisma Client BEST choice hai?

// ✔ Auth systems
// ✔ Medium/large apps
// ✔ Clean architecture
// ✔ Fast development

// ---

// # 🚀 Next natural step

// Ab tum ready ho:

// * Register API likhne ke liye
// * Prisma CRUD master karne ke liye
// * Auth system complete karne ke liye

// Agar bolo bhai to main **register API full code** bana deta hoon 👊
