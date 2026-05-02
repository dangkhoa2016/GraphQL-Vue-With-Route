# Screenshot Summary

> 🌐 Language / Ngôn ngữ: **English** | [Tiếng Việt](SCREENSHOTS_SUMMARY.vi.md)

> Main documentation: [../README.md](../README.md) | [../README.vi.md](../README.vi.md)

This document lists the screenshots in the `screenshots` folder of the **GraphQL-Vue-With-Route** project. Each entry includes: the file name (linked to the image), a short description, and the related views/components for easier reference when writing documentation or performing UI testing.

---

## Screenshot List (Detailed)

- **[screenshots/app-loading.png](app-loading.png)**
  - Description: Application startup screen with the title "GraphQL Vue js 3 With vue-router" and a loading animation in the center.
  - Related components: `App.vue`, `LoadingComponent.vue`.

- **[screenshots/cat-detail-page.png](cat-detail-page.png)**
  - Description: Cat detail page displaying profile image, cat information, About section, and photo gallery.
  - Related components: `CatDetail.vue`, `PhotosBlock.vue`, `PhotoBlock.vue`, `Modal.vue`.

- **[screenshots/cat-detail-page-open-gallery.png](cat-detail-page-open-gallery.png)**
  - Description: Cat photo gallery opened in large-view mode (modal/lightbox) with left/right navigation.
  - Related components: `SimpleGallery.vue`, `Modal.vue`, `PhotoBlock.vue`.

- **[screenshots/cats-page.png](cats-page.png)**
  - Description: Cat listing page in card-grid layout with header, intro section, and pagination.
  - Related components: `CatsList.vue`, `CatBlock.vue`, `CatsBlock.vue`, `Pagination.vue`.

- **[screenshots/contact-page.png](contact-page.png)**
  - Description: Contact page with input form and contact information on the right side.
  - Related components: `Contact.vue`.

- **[screenshots/failed-to-load-top-users.png](failed-to-load-top-users.png)**
  - Description: Page displaying an error message when loading the top users list fails, with a Reload button.
  - Related components: `TopUsers.vue`, `ErrorLoadUsers.vue`, `MainPage.vue`.

- **[screenshots/feature-page.png](feature-page.png)**
  - Description: Features page with highlighted sections, mini gallery, and About section.
  - Related components: `Features.vue`.

- **[screenshots/home-page-open-gallery.png](home-page-open-gallery.png)**
  - Description: Home page with gallery opened in modal/lightbox mode.
  - Related components: `MainPage.vue`, `SimpleGallery.vue`.

- **[screenshots/home-page-open-preview.png](home-page-open-preview.png)**
  - Description: Home page with preview modal open (e.g., user or image preview).
  - Related components: `MainPage.vue`, `ModalUserSummary.vue`, `Modal.vue`.

- **[screenshots/loading-user-modal-loading-skeleton.png](loading-user-modal-loading-skeleton.png)**
  - Description: User modal in loading state with skeleton placeholder.
  - Related components: `ModalUserSummary.vue`, `LoadingComponent.vue`.

- **[screenshots/require-login-to-follow-user.png](require-login-to-follow-user.png)**
  - Description: Notification requiring login to follow a user.
  - Related components: `ToggleFollowUser.vue`, `Toast.vue`, `ViewUser.vue`.

- **[screenshots/require-login-to-view-user-cats.png](require-login-to-view-user-cats.png)**
  - Description: Notification requiring login to view a user’s cat list.
  - Related components: `ViewUser.vue`, `Toast.vue`, `CatsByUser.vue`.

- **[screenshots/require-login-to-view-user-photos.png](require-login-to-view-user-photos.png)**
  - Description: Notification requiring login to view a user’s photos.
  - Related components: `ViewUser.vue`, `PhotosByUser.vue`.

- **[screenshots/require-login-when-access-cats-page.png](require-login-when-access-cats-page.png)**
  - Description: Cat listing page requiring login, displaying the sign-in form.
  - Related components: `Login.vue`, route-guard logic.

- **[screenshots/user-detail-loading-skeleton.png](user-detail-loading-skeleton.png)**
  - Description: User detail page in skeleton state (empty avatar, placeholders).
  - Related components: `ViewUser.vue`, `UsersLoading.vue`, `LoadingComponent.vue`.

- **[screenshots/user-detail-page-tab-about.png](user-detail-page-tab-about.png)**
  - Description: "About" tab on the user detail page displaying personal information and description.
  - Related components: `ViewUser.vue`.

- **[screenshots/user-detail-page-tab-cats.png](user-detail-page-tab-cats.png)**
  - Description: "Cats" tab on the user detail page displaying the user’s cat list.
  - Related components: `ViewUser.vue`, `CatsByUser.vue`, `CatBlock.vue`.

- **[screenshots/user-detail-page-tab-photos.png](user-detail-page-tab-photos.png)**
  - Description: "Photos" tab on the user detail page displaying photo gallery.
  - Related components: `ViewUser.vue`, `PhotosByUser.vue`, `SimpleGallery.vue`.

- **[screenshots/user-page-open-gallery.png](user-page-open-gallery.png)**
  - Description: User page with gallery opened in modal/lightbox mode for user photos.
  - Related components: `SimpleGallery.vue`, `Modal.vue`.

- **[screenshots/users-page.png](users-page.png)**
  - Description: User listing page in card-grid layout with avatar, name, follow/preview actions, and pagination.
  - Related components: `UsersList.vue`, `UserBlock2.vue`, `UsersBlock.vue`, `Pagination.vue`.

---

## General Notes
- Screenshot categories: Pages (cats, users, contact, features), Modals/Galleries, States (loading, error, login required).
- This document supports README writing, UI testing, and validation of error/loading/modal states.
