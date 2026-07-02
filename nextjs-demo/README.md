# drizzle
- tạo file migration từ schema hiện tại: `npx drizzle-kit generate`
- apply file SQL đã generate: `npx drizzle-kit migrate`
- Đẩy schema trực tiếp vào DB, không tạo migration file: `npx drizzle-kit push`
- Kéo schema từ DB về code: `npx drizzle-kit pull`
- Mở GUI quản lý DB: `npx drizzle-kit studio`
- Check xem schema code và migration có lệch nhau không: `npx drizzle-kit check`

# env
```.env
DATABASE_URL=mysql://root:123123a@127.0.0.1:3306/nextjs-demo
NEXTAUTH_SECRET=thienph
```