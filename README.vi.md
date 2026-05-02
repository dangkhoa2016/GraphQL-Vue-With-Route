# GraphQL Vue With Route

> 🌐 Language / Ngôn ngữ: [English](README.md) | **Tiếng Việt**

Một ứng dụng đơn trang (SPA) hiện đại được xây dựng bằng **Vue.js 3** và **Vue Router**, minh họa cách xây dựng các ứng dụng web tương tác mà không cần đến các công cụ build (build tools). Ứng dụng tích hợp backend sử dụng GraphQL để quản lý người dùng, thú cưng (mèo), hình ảnh và các tương tác xã hội.

## 📚 Liên kết tài liệu
- **Tài liệu ảnh chụp màn hình**: [screenshots/SCREENSHOTS_SUMMARY.md](screenshots/SCREENSHOTS_SUMMARY.md)
- **Tài liệu ảnh chụp màn hình (Tiếng Việt)**: [screenshots/SCREENSHOTS_SUMMARY.vi.md](screenshots/SCREENSHOTS_SUMMARY.vi.md)

## 🎯 Tổng quan dự án

Dự án này được thiết kế để trình diễn:
- Các kiến thức cơ bản về Vue.js 3 với **Composition API**.
- **Vue Router** để điều hướng và định tuyến phía client.
- Các truy vấn (**Queries**) và đột biến (**Mutations**) của GraphQL để quản lý dữ liệu.
- Xây dựng SPA hiện đại mà không yêu cầu công cụ build (như webpack, vite, v.v.).
- Tải thành phần động (Dynamic component loading) với **vue3-sfc-loader**.
- Quản lý trạng thái (State management) với các store tùy chỉnh.
- Luồng xác thực và phân quyền người dùng.

Ứng dụng mô phỏng một mạng xã hội nơi người dùng có thể:
- Xem và quản lý thông tin về mèo và hình ảnh.
- Theo dõi/bỏ theo dõi (Follow/unfollow) người dùng khác.
- Thích/bỏ thích (Like/unlike) mèo và ảnh.
- Xem hồ sơ người dùng và số liệu thống kê.
- Quản trị viên có thể quản lý nội dung hệ thống và trạng thái người dùng.

## 🔗 Server Backend
Dự án frontend này được thiết kế để hoạt động với server backend **[Fastify-Mercurius-GraphQL](https://github.com/dangkhoa2016/Fastify-Mercurius-GraphQL)**. Backend cung cấp tất cả các API GraphQL để quản lý người dùng, mèo, ảnh và các tương tác xã hội. Hãy đảm bảo rằng server backend đang chạy trước khi sử dụng ứng dụng frontend.

## ✨ Các tính năng chính

### Tính năng người dùng
- **Quản lý người dùng**: Xem hồ sơ, khám phá danh sách người theo dõi và đang theo dõi.
- **Quản lý mèo**: Duyệt danh sách mèo, xem chi tiết và tải lên hình ảnh của mèo.
- **Quản lý hình ảnh**: Duyệt và quản lý ảnh cho từng chú mèo.
- **Tương tác xã hội**: 
  - Thích/bỏ thích mèo và ảnh.
  - Theo dõi/bỏ theo dõi người dùng.
  - Xem thống kê người dùng và bảng xếp hạng người dùng hàng đầu.
- **Xác thực**: Hệ thống đăng nhập với quản lý token người dùng.
- **Bảng điều khiển (Dashboard)**: Xem thống kê cá nhân và các tương tác.

### Tính năng quản trị (Admin)
- **Kiểm duyệt nội dung**: Kích hoạt/vô hiệu hóa người dùng, mèo và hình ảnh.
- **Quản lý trạng thái người dùng**: Thay đổi trạng thái tài khoản người dùng.
- **Quản lý nội dung**: Quản lý toàn bộ nội dung trên nền tảng.

### Tính năng UI/UX
- **Thiết kế đáp ứng (Responsive)**: Sử dụng Bootstrap 5 cho giao diện thân thiện với di động.
- **Tải động**: Chuyển đổi giữa các thành phần mượt mà.
- **Cập nhật thời gian thực**: Thông báo (Toast) cho các hành động của người dùng.
- **Hộp thoại (Modal)**: Dùng cho tóm tắt thông tin người dùng và quản lý trạng thái.
- **Phân trang**: Duyệt các tập dữ liệu lớn một cách hiệu quả.
- **Xử lý lỗi**: Các trang báo lỗi và thông điệp lỗi thân thiện.
- **Trạng thái tải (Loading)**: Phản hồi thị giác trong quá trình truy xuất dữ liệu.

## 🏗️ Kiến trúc dự án

### Cấu trúc thư mục
```
src/
├── app.js              # Điểm khởi đầu của ứng dụng (Entry point)
├── router.mjs          # Cấu hình Vue Router
├── components/         # Các thành phần Vue có thể tái sử dụng
├── views/              # Các thành phần cấp trang (Pages)
├── stores/             # Các module quản lý trạng thái
├── libs/               # Thư viện tiện ích và trình hỗ trợ
├── assets/             # Stylesheet và hình ảnh
└── sample-data/        # Dữ liệu mẫu phục vụ phát triển
```

### Các thành phần chính
- **AppHeader/AppFooter**: Các thành phần bố cục chính.
- **CatsBlock/PhotosBlock/UsersBlock**: Các thành phần hiển thị nội dung.
- **Modal**: Hộp thoại hiển thị thông tin người dùng và thay đổi trạng thái.
- **Toast**: Hệ thống thông báo.
- **Pagination**: Bộ điều khiển phân trang.
- **Loading/Error Components**: Hiển thị trạng thái tải và lỗi.

### Stores (Quản lý trạng thái)
- `authStore.mjs`: Trạng thái xác thực và thông tin người dùng.
- `catsStore.mjs`: Dữ liệu về mèo và quản lý bộ nhớ đệm (cache).
- `photosStore.mjs`: Dữ liệu ảnh và bộ nhớ đệm.
- `usersStore.mjs`: Dữ liệu người dùng và các mối quan hệ.
- `toggleLikesStore.mjs`: Tương tác thích/bỏ thích.
- `toggleFollowsStore.mjs`: Tương tác theo dõi/bỏ theo dõi.
- `toggleStatusesStore.mjs`: Quản lý trạng thái dành cho admin.
- `graphQLStore.mjs`: Lưu trữ bộ nhớ đệm kết quả truy vấn GraphQL.

### Trang / Giao diện (Views)
- **MainPage**: Trang chủ với các nội dung nổi bật.
- **CatsList**: Duyệt và lọc danh sách mèo.
- **CatDetail**: Xem chi tiết một chú mèo kèm hình ảnh.
- **UsersList**: Xem danh sách tất cả người dùng và hồ sơ của họ.
- **UserProfile**: Hồ sơ chi tiết người dùng kèm thống kê.
- **Login**: Trang đăng nhập.
- **About**: Trang giới thiệu.
- **Features**: Giới thiệu tính năng.
- **Pricing**: Thông tin giá cả.
- **FAQs**: Các câu hỏi thường gặp.
- **NotFound**: Trang lỗi 404.

## 🛠️ Công nghệ sử dụng

### Frontend Framework & Thư viện
- **[Vue.js 3](https://v3.vuejs.org/)** - Framework UI phản hồi (reactive).
- **[Vue Router](https://router.vuejs.org/)** - Bộ định tuyến chính thức cho SPA.
- **[vue3-sfc-loader v0.8.4](https://github.com/FranckFreiburger/vue3-sfc-loader)** - Trình tải Vue SFC động không cần build tools.
- **[Axios](https://axios-http.com/)** - HTTP client dựa trên Promise cho các yêu cầu GraphQL.
- **[Bootstrap 5](https://getbootstrap.com/)** - Framework CSS phổ biến.
- **[PhotoSwipe v5.4.3](https://photoswipe.com/)** - Thư viện bộ sưu tập ảnh đáp ứng.

### Công cụ phát triển
- **Không yêu cầu công cụ build**: Mọi thứ chạy trực tiếp trên trình duyệt sử dụng ES modules.
- **Phụ thuộc qua CDN**: Bootstrap và PhotoSwipe được tải từ CDN.

### GraphQL
- **GraphQL**: Ngôn ngữ truy vấn để giao tiếp API.
- **Mock Adapter**: Trình giả lập server phát triển sử dụng dữ liệu mẫu.

## 📋 Yêu cầu hệ thống

- **Trình duyệt web hiện đại** hỗ trợ ES Module (Chrome, Firefox, Safari, Edge).
- **Kết nối Internet** để tải tài nguyên từ CDN và API GraphQL.
- **Máy chủ HTTP cục bộ (Local HTTP server)** để chạy file (yêu cầu cho CORS và ES Modules).

## 🚀 Bắt đầu sử dụng

### Cài đặt & Khởi chạy

1. **Clone repository**:
   ```bash
   git clone <repository-url>
   cd GraphQL-Vue-With-Route
   ```

2. **Chạy ứng dụng** bằng bất kỳ máy chủ tệp tĩnh nào:
   
   **Cách 1: Sử dụng gói npm `serve`**
   ```bash
   npm install -g serve
   serve
   # Mở http://localhost:3000 trên trình duyệt
   ```

   **Cách 2: Sử dụng Python**
   ```bash
   # Python 3
   python -m http.server 8000
   # Mở http://localhost:8000 trên trình duyệt
   ```

   **Cách 3: Sử dụng `zrok` (chia sẻ công khai)**
   ```bash
   zrok share public --backend-mode web .
   ```

   **Cách 4: Sử dụng bất kỳ máy chủ HTTP nào**
   - Bất kỳ máy chủ web nào cung cấp tệp tĩnh đều hoạt động (nginx, Apache, Node.js http-server, v.v.)

3. **Truy cập ứng dụng**:
   - Mở trình duyệt và truy cập `http://localhost:8000` (hoặc cổng server của bạn).
   - Ứng dụng sẽ tải tất cả các phụ thuộc từ CDN và các tệp cục bộ.

### Lưu ý khi phát triển
- Mặc định, dự án sử dụng các phản hồi GraphQL giả lập được lưu trong `src/sample-data/`.
- Để kết nối với backend GraphQL thực tế, hãy chỉnh sửa biến `endpoint` trong `src/libs/api.mjs`.
- Các thành phần được tải động bằng `vue3-sfc-loader`, cho phép bạn chỉnh sửa tệp `.vue` mà không cần build lại.
- Toàn bộ trạng thái được quản lý ở phía client thông qua các store tùy chỉnh với dữ liệu phản hồi (reactive).

## 📝 Ví dụ sử dụng

### Duyệt danh sách mèo
1. Điều hướng đến mục "Cats" từ menu chính.
2. Xem danh sách các chú mèo hiện có.
3. Nhấp vào một chú mèo để xem thông tin chi tiết và ảnh liên quan.

### Theo dõi người dùng
1. Truy cập phần "Users".
2. Nhấp vào bất kỳ người dùng nào để xem hồ sơ.
3. Nhấn nút "Follow" để theo dõi.
4. Truy cập "Following list" của bạn để quản lý những người đang theo dõi.

### Thích nội dung
1. Duyệt mèo hoặc hình ảnh.
2. Nhấn vào biểu tượng trái tim để thích.
3. Số lượng lượt thích sẽ cập nhật theo thời gian thực.
4. Truy cập hồ sơ cá nhân để xem tất cả các mục đã thích.

### Chức năng quản trị (Yêu cầu tài khoản admin)
1. Đăng nhập với thông tin quản trị viên.
2. Sử dụng các hộp thoại modal để kích hoạt/vô hiệu hóa người dùng, mèo hoặc ảnh.
3. Quản lý trực tiếp nội dung trên nền tảng.

## 🎓 Tài liệu học tập

Dự án này là nguồn tài liệu tuyệt vời để học về:
- Vue 3 Composition API và dữ liệu phản hồi.
- Định tuyến phía máy khách với Vue Router.
- Kiến thức cơ bản về GraphQL và cấu trúc truy vấn.
- Các mô hình quản lý trạng thái không cần Vuex/Pinia.
- Kỹ thuật tải thành phần động.
- Xây dựng SPA không cần công cụ build.
- Thiết kế đáp ứng với Bootstrap.
- ES Modules và JavaScript hiện đại.

## 📦 Phụ thuộc (Dependencies)

### Phụ thuộc chính (Production)
- **Vue 3** - Framework UI.
- **Vue Router** - Thư viện định tuyến.
- **Axios** - HTTP client với trình giả lập (mock adapter).
- **Bootstrap 5** - Framework CSS từ CDN.
- **PhotoSwipe** - Thư viện bộ sưu tập ảnh từ CDN.

### Phát triển (Development)
- Không yêu cầu công cụ build.
- Mọi hoạt động phát triển được thực hiện trực tiếp trên tệp .vue.
- Cần một máy chủ HTTP đơn giản để phát triển tại cục bộ.

## 🔧 Cấu hình

### Cấu hình API
Chỉnh sửa `src/libs/api.mjs` để cấu hình:
- `endpoint` - Điểm cuối API GraphQL (mặc định: `/` cho dữ liệu giả lập).
- Ánh xạ dữ liệu mẫu cho các truy vấn GraphQL khác nhau.

### Cấu hình Router
Chỉnh sửa `src/router.mjs` để:
- Thêm các tuyến đường (routes) mới.
- Cấu hình các lớp bảo vệ tuyến đường (route guards).
- Thiết lập metadata cho tuyến đường và yêu cầu xác thực.

### Style của thành phần
- Style toàn cục trong `src/assets/style.css`.
- Style khởi động trong `src/assets/start.css`.
- Sử dụng các lớp Bootstrap cho thiết kế đáp ứng.

## 🔗 Dự án liên quan

* [github.com/dangkhoa2016/GraphQL-Vue-With-Route-Vite](https://github.com/dangkhoa2016/GraphQL-Vue-With-Route-Vite) - Phiên bản Vite có routing
* [github.com/dangkhoa2016/GraphQL-Vue-Without-Route](https://github.com/dangkhoa2016/GraphQL-Vue-Without-Route) - Phiên bản không dùng Vue Router

## 📄 Bản quyền

Dự án này được cấp phép theo **MIT License** - xem tệp [LICENSE](LICENSE) để biết thêm chi tiết.

## 👨‍💻 Tác giả

- **Đặng Khoa** - [dangkhoa2016](https://github.com/dangkhoa2016)

## 🤝 Đóng góp

Mọi đóng góp đều được hoan nghênh! Bạn có thể:
- Báo cáo lỗi và vấn đề.
- Đề xuất tính năng mới.
- Gửi pull request với các cải tiến.
- Cải thiện tài liệu.

## 📞 Hỗ trợ

Nếu có câu hỏi hoặc vấn đề:
1. Kiểm tra trang FAQs trong ứng dụng.
2. Xem lại các chú thích mã và cấu trúc thư mục.
3. Tham khảo [Tài liệu Vue.js](https://v3.vuejs.org/).
4. Tham khảo [Tài liệu GraphQL](https://graphql.org/).

---

**Chúc bạn lập trình vui vẻ! 🚀**
