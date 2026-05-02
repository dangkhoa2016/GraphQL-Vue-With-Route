# Tóm tắt ảnh chụp màn hình

> 🌐 Language / Ngôn ngữ: [English](SCREENSHOTS_SUMMARY.md) | **Tiếng Việt**

Tài liệu này liệt kê các ảnh chụp màn hình trong thư mục `screenshots` của dự án **GraphQL-Vue-With-Route**. Mỗi mục gồm: tên file (link tới ảnh), mô tả ngắn, và các view/component liên quan để tiện tham chiếu khi viết tài liệu hoặc kiểm thử UI.

---

## Danh sách ảnh (chi tiết)

- **[screenshots/app-loading.png](app-loading.png)**
  - Mô tả: Màn hình khởi động ứng dụng với tiêu đề "GraphQL Vue js 3 With vue-router" và hiệu ứng loading ở giữa.
  - Thành phần liên quan: `App.vue`, `LoadingComponent.vue`.

- **[screenshots/cat-detail-page.png](cat-detail-page.png)**
  - Mô tả: Trang chi tiết mèo, hiển thị ảnh đại diện, thông tin mèo, phần About và gallery ảnh.
  - Thành phần liên quan: `CatDetail.vue`, `PhotosBlock.vue`, `PhotoBlock.vue`, `Modal.vue`.

- **[screenshots/cat-detail-page-open-gallery.png](cat-detail-page-open-gallery.png)**
  - Mô tả: Gallery ảnh mèo mở ở chế độ xem lớn (modal/lightbox), có điều hướng trái/phải.
  - Thành phần liên quan: `SimpleGallery.vue`, `Modal.vue`, `PhotoBlock.vue`.

- **[screenshots/cats-page.png](cats-page.png)**
  - Mô tả: Trang danh sách mèo dạng lưới card, có header, intro và phân trang.
  - Thành phần liên quan: `CatsList.vue`, `CatBlock.vue`, `CatsBlock.vue`, `Pagination.vue`.

- **[screenshots/contact-page.png](contact-page.png)**
  - Mô tả: Trang liên hệ với form nhập liệu và thông tin liên hệ bên phải.
  - Thành phần liên quan: `Contact.vue`.

- **[screenshots/failed-to-load-top-users.png](failed-to-load-top-users.png)**
  - Mô tả: Trang có thông báo lỗi khi tải danh sách người dùng, kèm nút Reload.
  - Thành phần liên quan: `TopUsers.vue`, `ErrorLoadUsers.vue`, `MainPage.vue`.

- **[screenshots/feature-page.png](feature-page.png)**
  - Mô tả: Trang Features với các mục nổi bật, gallery nhỏ và phần About.
  - Thành phần liên quan: `Features.vue`.

- **[screenshots/home-page-open-gallery.png](home-page-open-gallery.png)**
  - Mô tả: Trang chủ với gallery mở ở dạng modal/lightbox.
  - Thành phần liên quan: `MainPage.vue`, `SimpleGallery.vue`.

- **[screenshots/home-page-open-preview.png](home-page-open-preview.png)**
  - Mô tả: Trang chủ với modal preview (ví dụ preview user hoặc ảnh).
  - Thành phần liên quan: `MainPage.vue`, `ModalUserSummary.vue`, `Modal.vue`.

- **[screenshots/loading-user-modal-loading-skeleton.png](loading-user-modal-loading-skeleton.png)**
  - Mô tả: Modal người dùng ở trạng thái loading (skeleton placeholder).
  - Thành phần liên quan: `ModalUserSummary.vue`, `LoadingComponent.vue`.

- **[screenshots/require-login-to-follow-user.png](require-login-to-follow-user.png)**
  - Mô tả: Thông báo yêu cầu đăng nhập để theo dõi người dùng.
  - Thành phần liên quan: `ToggleFollowUser.vue`, `Toast.vue`, `ViewUser.vue`.

- **[screenshots/require-login-to-view-user-cats.png](require-login-to-view-user-cats.png)**
  - Mô tả: Thông báo cần đăng nhập để xem danh sách mèo của user.
  - Thành phần liên quan: `ViewUser.vue`, `Toast.vue`, `CatsByUser.vue`.

- **[screenshots/require-login-to-view-user-photos.png](require-login-to-view-user-photos.png)**
  - Mô tả: Thông báo cần đăng nhập để xem ảnh của user.
  - Thành phần liên quan: `ViewUser.vue`, `PhotosByUser.vue`.

- **[screenshots/require-login-when-access-cats-page.png](require-login-when-access-cats-page.png)**
  - Mô tả: Trang danh sách mèo yêu cầu đăng nhập, hiển thị form sign-in.
  - Thành phần liên quan: `Login.vue`, logic route-guard.

- **[screenshots/user-detail-loading-skeleton.png](user-detail-loading-skeleton.png)**
  - Mô tả: Trang chi tiết user ở trạng thái skeleton (avatar rỗng, placeholder).
  - Thành phần liên quan: `ViewUser.vue`, `UsersLoading.vue`, `LoadingComponent.vue`.

- **[screenshots/user-detail-page-tab-about.png](user-detail-page-tab-about.png)**
  - Mô tả: Tab "About" trong trang chi tiết user, hiển thị thông tin cá nhân và mô tả.
  - Thành phần liên quan: `ViewUser.vue`.

- **[screenshots/user-detail-page-tab-cats.png](user-detail-page-tab-cats.png)**
  - Mô tả: Tab "Cats" trong trang chi tiết user, hiển thị danh sách mèo của user.
  - Thành phần liên quan: `ViewUser.vue`, `CatsByUser.vue`, `CatBlock.vue`.

- **[screenshots/user-detail-page-tab-photos.png](user-detail-page-tab-photos.png)**
  - Mô tả: Tab "Photos" trong trang chi tiết user, hiển thị gallery ảnh.
  - Thành phần liên quan: `ViewUser.vue`, `PhotosByUser.vue`, `SimpleGallery.vue`.

- **[screenshots/user-page-open-gallery.png](user-page-open-gallery.png)**
  - Mô tả: Trang user với gallery mở modal/lightbox cho ảnh user.
  - Thành phần liên quan: `SimpleGallery.vue`, `Modal.vue`.

- **[screenshots/users-page.png](users-page.png)**
  - Mô tả: Trang danh sách người dùng dạng lưới card, có avatar, tên, follow/preview, phân trang.
  - Thành phần liên quan: `UsersList.vue`, `UserBlock2.vue`, `UsersBlock.vue`, `Pagination.vue`.

---

## Ghi chú chung
- Phân nhóm ảnh: Pages (cats, users, contact, features), Modals/Galleries, States (loading, error, yêu cầu đăng nhập).
- Tài liệu này hỗ trợ viết README, kiểm thử UI, kiểm tra trạng thái lỗi/loading/modal.
