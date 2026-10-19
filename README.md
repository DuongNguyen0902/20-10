# EONSR 20/10 — React Web V7 (V6 Design Parity)

Website React + TypeScript + Vite, **không phải React Native**. Giữ nguyên CSS, markup, các SVG và animation của HTML V6/V7 để hiển thị gần như giống hệt trên mobile web / Mac / Windows.

## Chạy

```bash
npm install
npm run dev
```

Mở địa chỉ do Vite cung cấp (thường là http://localhost:5173). Điện thoại cùng mạng LAN có thể vào `http://<IP-của-Mac>:5173`.

## Cấu trúc

- `src/App.tsx`: layout chính do React quản lý.
- `src/Markup.tsx`: chuyển static HTML/SVG từ bản thiết kế thành các React elements. Không nhận HTML đầu vào từ người dùng.
- `src/scenes/*.html`: các scene nguyên gốc V6; tiện rà soát pixel parity.
- `src/styles.css`: CSS gốc + tất cả breakpoint mobile/desktop; không thiết kế lại.
- `src/engine.js`: workflow V6 dùng DOM IDs/events, giữ nguyên luồng và tính năng. Có thể dần chuyển sang hooks khi đã chốt parity.
- `public/assets`: `lily-watercolor.webp` mới. Cần thêm `earth-nasa.png` và `eonsr-logo.png` từ folder `assets` gốc để ảnh/branding đúng.

## Điều chỉnh bản V7

- Ảnh lily màu nước thay ảnh hoa chụp trong thư và ảnh thiệp PNG.
- Canvas tự tính chiều cao từ nội dung, không còn khoảng trắng thừa ở cuối.
- Mọi hoạt ảnh, lựa chọn theme, tên riêng, phong thư và mini-game dùng đúng mã gốc HTML V6.
- Nếu sử dụng tính năng **Lưu ảnh thiệp**, Safari/Chrome hỗ trợ xuất PNG; trên một số thiết bị có thể hiện hộp thoại chia sẻ.

## Lưu ý chất lượng

Đây là bản **fidelity-first**: React render DOM, còn event-driven JS V6 nằm riêng trong `engine.js` để không gây regressions khi chuyển giao diện. Chưa phải bản rewrite 100% state sang React hooks. Không chạy trực tiếp bằng Expo / React Native vì CSS và HTML hiệu ứng là web-specific.

Chưa thể chạy `npm run build` trong môi trường tạo file nếu thiếu kết nối npm. Hãy chạy `npm install && npm run build` trên máy phát triển trước khi deploy.
# 20-10
