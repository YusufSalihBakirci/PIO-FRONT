import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BodyView from "@/layout/BodyView.vue"
import AuthView from "@/components/common/block/auth/AuthView.vue"
import LoginPage from "@/components/common/block/auth/LoginPage.vue"
import IndexDefault from "@/pages/dashboards/IndexDefault.vue"
import IndexEcommerce from "@/pages/dashboards/IndexEcommerce.vue"
import IndexEducation from "@/pages/dashboards/IndexEducation.vue"
import IndexGeneral from "@/pages/widgets/IndexGeneral.vue"
import IndexChart from "@/pages/widgets/IndexChart.vue"
import IndexProjectlist from "@/pages/project/IndexProjectlist.vue"
import IndexCreateProject from "@/pages/project/IndexCreateProject.vue"
import IndexFileManeger from "@/pages/filemaneger/IndexFileManeger.vue"
import IndexKanbanBoard from "@/pages/kanban/IndexKanbanBoard.vue"
import IndexAddProduct from "@/pages/ecommerce/IndexAddProduct.vue"
import IndexProduct from "@/pages/ecommerce/IndexProduct.vue"
import IndexProductPage from "@/pages/ecommerce/IndexProductPage.vue"
import IndexCart from "@/pages/ecommerce/IndexCart.vue"
import IndexCategory from "@/pages/ecommerce/IndexCategory.vue"
import IndexProductList from "@/pages/ecommerce/IndexProductList.vue"
import IndexPaymentDetail from "@/pages/ecommerce/IndexPaymentDetail.vue"
import IndexOrder from "@/pages/ecommerce/IndexOrder.vue"
import IndexWishlist from "@/pages/ecommerce/IndexWishlist.vue"
import IndexCheckout from "@/pages/ecommerce/IndexCheckout.vue"
import IndexPricing from "@/pages/ecommerce/IndexPricing.vue"
import IndexInvoiceOne from "@/pages/ecommerce/IndexInvoiceOne.vue"
import IndexInvoiceTwo from "@/pages/ecommerce/IndexInvoiceTwo.vue"
import IndexInvoiceThree from "@/pages/ecommerce/IndexInvoiceThree.vue"
import IndexInvoiceFour from "@/pages/ecommerce/IndexInvoiceFour.vue"
import IndexInvoiceFive from "@/pages/ecommerce/IndexInvoiceFive.vue"
import IndexInvoiceSix from "@/pages/ecommerce/IndexInvoiceSix.vue"
import IndexLetterBox from "@/pages/letterbox/IndexLetterBox.vue"
import IndexPrivateChat from "@/pages/chat/IndexPrivateChat.vue"
import IndexGroupChat from "@/pages/chat/IndexGroupChat.vue"
import IndexProfile from "@/pages/user/IndexProfile.vue"
import IndexEdit from "@/pages/user/IndexEdit.vue"
import IndexCard from "@/pages/user/IndexCard.vue"
import IndexBookmark from "@/pages/bookmark/IndexBookmark.vue"
import IndexContact from "@/pages/contacts/IndexContact.vue"
import IndexTask from "@/pages/task/IndexTask.vue"
import IndexCalendar from "@/pages/calendar/IndexCalendar.vue"
import IndexSoical from "@/pages/socialapp/IndexSoical.vue"
import IndexTodo from "@/pages/todo/IndexTodo.vue"
import IndexSearch from "@/pages/search/IndexSearch.vue"
import IndexButtons from "@/pages/buttons/IndexButtons.vue"
import IndexTypography from "@/pages/uikits/IndexTypography.vue"
import IndexAvatars from "@/pages/uikits/IndexAvatars.vue"
import IndexAlert from "@/pages/uikits/IndexAlert.vue"
import IndexHelper from "@/pages/uikits/IndexHelper.vue"
import IndexGrid from "@/pages/uikits/IndexGrid.vue"
import IndexAccordion from "@/pages/uikits/IndexAccordion.vue"
import IndexTagPills from "@/pages/uikits/IndexTagPills.vue"
import IndexModal from "@/pages/uikits/IndexModal.vue"
import IndexPopover from "@/pages/uikits/IndexPopover.vue"
import IndexProgress from "@/pages/uikits/IndexProgress.vue"
import IndexTabs from "@/pages/uikits/IndexTabs.vue"
import IndexTooltip from "@/pages/uikits/IndexTooltip.vue"
import IndexDropdown from "@/pages/uikits/IndexDropdown.vue"
import IndexLists from "@/pages/uikits/IndexLists.vue"
import IndexScrollable from "@/pages/advance/IndexScrollable.vue"
import IndexTree from "@/pages/advance/IndexTree.vue"
import IndexToasts from "@/pages/advance/IndexToasts.vue"
import IndexRating from "@/pages/advance/IndexRating.vue"
import IndexDropzone from "@/pages/advance/IndexDropzone.vue"
import IndexTour from "@/pages/advance/IndexTour.vue"
import IndexSweetalert from "@/pages/advance/IndexSweetalert.vue"
import AnimationModal from "@/pages/advance/AnimationModal.vue"
import IndexSlider from "@/pages/advance/IndexSlider.vue"
import IndexRibbon from "@/pages/advance/IndexRibbon.vue"
import IndexPagenation from "@/pages/advance/IndexPagenation.vue"
import IndexBreadcrumb from "@/pages/advance/IndexBreadcrumb.vue"
import IndexRange from "@/pages/advance/IndexRange.vue"
import IndexCropper from "@/pages/advance/IndexCropper.vue"
import IndexBasiccard from "@/pages/advance/IndexBasiccard.vue"
import IndexCreative from "@/pages/advance/IndexCreative.vue"
import IndexDraggable from "@/pages/advance/IndexDraggable.vue"
import IndexTimeline from "@/pages/advance/IndexTimeline.vue"
import IndexAnimate from "@/pages/animation/IndexAnimate.vue"
import IndexAos from "@/pages/animation/IndexAos.vue"
import IndexFontawesome from "@/pages/icons/IndexFontawesome.vue"
import IndexFeather from "@/pages/icons/IndexFeather.vue"
import IndexIconly from "@/pages/icons/IndexIconly.vue"
import IndexThemify from "@/pages/icons/IndexThemify.vue"
import IndexApexchart from "@/pages/charts/IndexApexchart.vue"
import IndexGoogle from "@/pages/charts/IndexGoogle.vue"
import IndexChartist from "@/pages/charts/IndexChartist.vue"
import IndexValidation from "@/pages/forms/formcontrols/IndexValidation.vue"
import IndexInputs from "@/pages/forms/formcontrols/IndexInputs.vue"
import IndexCheckbox from "@/pages/forms/formcontrols/IndexCheckbox.vue"
import IndexGroups from "@/pages/forms/formcontrols/IndexGroups.vue"
import IndexMask from "@/pages/forms/formcontrols/IndexMask.vue"
import IndexMega from "@/pages/forms/formcontrols/IndexMega.vue"
import IndexDatapicker from "@/pages/forms/formwidgets/IndexDatapicker.vue"
import IndexTouchspin from "@/pages/forms/formwidgets/IndexTouchspin.vue"
import IndexSelect from "@/pages/forms/formwidgets/IndexSelect.vue"
import IndexSwitch from "@/pages/forms/formwidgets/IndexSwitch.vue"
import IndexTypeahead from "@/pages/forms/formwidgets/IndexTypeahead.vue"
import IndexClipboard from "@/pages/forms/formwidgets/IndexClipboard.vue"
import FormWizard from "@/pages/forms/formlayout/FormWizard.vue"
import FormWizard2 from "@/pages/forms/formlayout/FormWizard2.vue"
import IndexTwofactor from "@/pages/forms/formlayout/IndexTwofactor.vue"
import IndexBootstrap from "@/pages/table/IndexBootstrap.vue"
import IndexComponent from "@/pages/table/IndexComponent.vue"
import IndexInit from "@/pages/table/IndexInit.vue"
import IndexSample from "@/pages/samplepage/IndexSample.vue"
import IndexInternationalization from "@/pages/internationalization/IndexInternationalization.vue"
import IndexErrorPage1 from "@/pages/error/IndexErrorPage1.vue"
import IndexErrorPage2 from "@/pages/error/IndexErrorPage2.vue"
import IndexErrorPage3 from "@/pages/error/IndexErrorPage3.vue"
import IndexErrorPage4 from "@/pages/error/IndexErrorPage4.vue"
import IndexErrorPage5 from "@/pages/error/IndexErrorPage5.vue"
import IndexErrorPage6 from "@/pages/error/IndexErrorPage6.vue"
import IndexComingsoonSimple from "@/pages/comingsoon/IndexComingsoonSimple.vue"
import IndexComingsoonVideo from "@/pages/comingsoon/IndexComingsoonVideo.vue"
import IndexComingsoonImage from "@/pages/comingsoon/IndexComingsoonImage.vue"
import LoginSimple from "@/pages/authentication/LoginSimple.vue"
import LoginImage from "@/pages/authentication/LoginImage.vue"
import LoginImageTwo from "@/pages/authentication/LoginImageTwo.vue"
import LoginValidation from "@/pages/authentication/LoginValidation.vue"
import LoginTooltip from "@/pages/authentication/LoginTooltip.vue"
import LoginSweetalert from "@/pages/authentication/LoginSweetalert.vue"
import RegisterSimple from "@/pages/authentication/RegisterSimple.vue"
import RegisterImage from "@/pages/authentication/RegisterImage.vue"
import RegisterImageTwo from "@/pages/authentication/RegisterImageTwo.vue"
import UnlockUser from "@/pages/authentication/UnlockUser.vue"
import ForgetPassword from "@/pages/authentication/ForgetPassword.vue"
import ResetPassword from "@/pages/authentication/ResetPassword.vue"
import MaintenanceView from "@/pages/authentication/MaintenanceView.vue"
import RegisterWizard from "@/pages/authentication/RegisterWizard.vue"
import IndexGallery from "@/pages/gallery/IndexGallery.vue"
import IndexGriddesc from "@/pages/gallery/IndexGriddesc.vue"
import IndexMasonry from "@/pages/gallery/IndexMasonry.vue"
import IndexMasonarydesc from "@/pages/gallery/IndexMasonarydesc.vue"
import IndexHoverGallery from "@/pages/gallery/IndexHoverGallery.vue"
import IndexDetails from "@/pages/blog/IndexDetails.vue"
import IndexSingle from "@/pages/blog/IndexSingle.vue"
import IndexAdd from "@/pages/blog/IndexAdd.vue"
import IndexFaq from "@/pages/faq/IndexFaq.vue"
import IndexCards from "@/pages/job/IndexCard.vue"
import IndexDetail from "@/pages/job/IndexDetails.vue"
import IndexList from "@/pages/job/IndexList.vue"
import IndexApply from "@/pages/job/IndexApply.vue"
import IndexLearning from "@/pages/learning/IndexLearning.vue"
import IndexCourse from "@/pages/learning/IndexCourse.vue"
import IndexGoogleMap from "@/pages/maps/IndexGoogle.vue"
import IndexLeaflet from "@/pages/maps/IndexLeaflet.vue"
import IndexCk from "@/pages/editor/IndexCk.vue"
import SimpleEditor from "@/pages/editor/SimpleEditor.vue"
import IndexKnowledgebase from "@/pages/knowledgebase/IndexKnowledgebase.vue"
import IndexSupport from "@/pages/support/IndexSupport.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/dashboards/dashboard_default"
  },
  {
    path: '/',
    name: 'home',
    component: BodyView,
    meta: {
      title: 'Admiro - Premium Vue Admin Template',
    },
    children: [
      {
        path: '',
        name: 'defaultRoot',
        component: IndexDefault,
        meta: {
          title: 'Admiro - Premium Vue Admin Template',
        }
      }
    ]
  },
  {
    path: "/auth",
    component: AuthView,
    children: [
      {
        path: "login",
        name: "login",
        component: LoginPage,
        meta: {
          title: 'Admiro - Premium Vue Admin Template',
        }
      }
    ]
  },
  {
    path: "/dashboards",
    component: BodyView,
    children: [
      {
        path: "dashboard_default",
        name: "default",
        component: IndexDefault,
        meta: {
          title: 'Dashboards | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "dashboard_education",
        name: "education",
        component: IndexEducation,
        meta: {
          title: 'Dashboards Education | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "dashboard_ecommerce",
        name: "ecommerce",
        component: IndexEcommerce,
        meta: {
          title: 'Dashboards Ecommerce | Admiro - Premium Vue Admin Template',
        }
      }

    ]
  },
  {
    path: "/widgets",
    component: BodyView,
    children: [
      {
        path: "general",
        name: "General",
        component: IndexGeneral,
        meta: {
          title: 'Widgets General | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "Chart",
        name: "charts",
        component: IndexChart,
        meta: {
          title: 'Widgets Chart | Admiro - Premium Vue Admin Template',
        }
      }
    ]
  },
  {
    path: "/project",
    component: BodyView,
    children: [
      {
        path: "project_list",
        name: "projectList",
        component: IndexProjectlist,
        meta: {
          title: 'Project List| Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "project_create",
        name: "createProject",
        component: IndexCreateProject,
        meta: {
          title: 'Create Project| Admiro - Premium Vue Admin Template',
        }
      }
    ]
  },
  {
    path: "/app",
    component: BodyView,
    children: [
      {
        path: "file_manager",
        name: "fileManager",
        component: IndexFileManeger,
        meta: {
          title: 'File Manager| Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "kanban_board",
        name: "kanbanBoard",
        component: IndexKanbanBoard,
        meta: {
          title: 'kanban Board| Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "letter_box",
        name: "letterbox",
        component: IndexLetterBox,
        meta: {
          title: 'Letter Box| Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "private_chat",
        name: "Chatapp",
        component: IndexPrivateChat,
        meta: {
          title: 'Private Chat| Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "group_chat",
        name: "Group Chat",
        component: IndexGroupChat,
        meta: {
          title: 'Group Chat| Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "bookmark",
        name: "bookmark",
        component: IndexBookmark,
        meta: {
          title: 'Bookmark| Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "contact",
        name: "contacts",
        component: IndexContact,
        meta: {
          title: 'contact| Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "todo",
        name: "todo",
        component: IndexTodo,
        meta: {
          title: 'To Do| Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "task",
        name: "task",
        component: IndexTask,
        meta: {
          title: 'Task| Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "calendar",
        name: "calendar",
        component: IndexCalendar,
        meta: {
          title: 'Calendar| Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "buttons",
        name: "button",
        component: IndexButtons,
        meta: {
          title: 'Buttons | Admiro - Premium Vue Admin Template',
        }
      },

    ]
  },
  {
    path: "/ecommerce",
    component: BodyView,
    children: [
      {
        path: "add_product",
        name: "addporduct",
        component: IndexAddProduct,
        meta: {
          title: 'Add Product | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "product",
        name: "product",
        component: IndexProduct,
        meta: {
          title: 'Product | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "cart",
        name: "cart",
        component: IndexCart,
        meta: {
          title: 'Cart | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "details/:id",
        name: "productPage",
        component: IndexProductPage,
        meta: {
          title: 'Product Page | Admiro - Premium Vue Admin Template',
        }
      },

      {
        path: "payment_details",
        name: "paymentDetail",
        component: IndexPaymentDetail,
        meta: {
          title: 'Payment Detail | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "invoice_1",
        name: "Invoice_1",
        component: IndexInvoiceOne,
        meta: {
          title: 'Invoice | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "invoice_2",
        name: "Invoice_2",
        component: IndexInvoiceTwo,
        meta: {
          title: 'Invoice Two | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "invoice_3",
        name: "Invoice_3",
        component: IndexInvoiceThree,
        meta: {
          title: 'Invoice Three | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "invoice_4",
        name: "Invoice_4",
        component: IndexInvoiceFour,
        meta: {
          title: 'Invoice Four | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "invoice_5",
        name: "Invoice_5",
        component: IndexInvoiceFive,
        meta: {
          title: 'Invoice Five | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "invoice_6",
        name: "Invoice_6",
        component: IndexInvoiceSix,
        meta: {
          title: 'Invoice Six | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "checkout",
        name: "Checkout",
        component: IndexCheckout,
        meta: {
          title: 'Checkout | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "pricing",
        name: "pricing",
        component: IndexPricing,
        meta: {
          title: 'Pricing | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "wishlist",
        name: "Wishlist",
        component: IndexWishlist,
        meta: {
          title: 'Wish List | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "order_history",
        name: "Orderhistory",
        component: IndexOrder,
        meta: {
          title: 'Order History | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "product_list",
        name: "productlist",
        component: IndexProductList,
        meta: {
          title: 'Product list | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "category",
        name: "category page",
        component: IndexCategory,
        meta: {
          title: 'Category Page | Admiro - Premium Vue Admin Template',
        }
      }
    ]
  },

  {
    path: "/users",
    component: BodyView,
    children: [
      {
        path: "profile",
        name: "userProfile",
        component: IndexProfile,
        meta: {
          title: 'User Profile| Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "edit",
        name: "indexEdit",
        component: IndexEdit,
        meta: {
          title: 'User Edit| Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "cards",
        name: "usercard",
        component: IndexCard,
        meta: {
          title: 'User Cards| Admiro - Premium Vue Admin Template',
        }
      }
    ]
  },
  {
    path: "/pages",
    component: BodyView,
    children: [
      {
        path: "social_app",
        name: "socialapp",
        component: IndexSoical,
        meta: {
          title: 'Social App| Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "search",
        name: "searchresult",
        component: IndexSearch,
        meta: {
          title: 'Search| Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "sample_page",
        name: "samplepage",
        component: IndexSample,
        meta: {
          title: 'Simple Page| Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "internationalization",
        name: "Internationalization",
        component: IndexInternationalization,
        meta: {
          title: 'Internationalization| Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "faq",
        name: "faq",
        component: IndexFaq,
        meta: {
          title: 'Faq| Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "support",
        name: "Support",
        component: IndexSupport,
        meta: {
          title: 'Support | Admiro - Premium Vue Admin Template',
        }
      }
    ]
  },
  {
    path: "/uikits",
    component: BodyView,
    children: [
      {
        path: "typography",
        name: "Typography",
        component: IndexTypography,
        meta: {
          title: 'Uikits Typography | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "avatars",
        name: "Avatars",
        component: IndexAvatars,
        meta: {
          title: 'Uikits Avatars | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "helper_classes",
        name: "Helper",
        component: IndexHelper,
        meta: {
          title: 'Uikits Helper Classes | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "grid",
        name: "Grid",
        component: IndexGrid,
        meta: {
          title: 'Uikits Grid | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "tag_pills",
        name: "TagPills",
        component: IndexTagPills,
        meta: {
          title: 'Uikits Tag & Pills | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "progress_bar",
        name: "Progress",
        component: IndexProgress,
        meta: {
          title: 'Uikits Progressbar | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "modal",
        name: "model",
        component: IndexModal,
        meta: {
          title: 'Uikits Modal | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "alert",
        name: "alert",
        component: IndexAlert,
        meta: {
          title: 'Uikits Alert | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "popover",
        name: "popover",
        component: IndexPopover,
        meta: {
          title: 'Uikits popover | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "tooltip",
        name: "tooltip",
        component: IndexTooltip,
        meta: {
          title: 'Uikits Tooltip | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "dropdown",
        name: "Dropdown",
        component: IndexDropdown,
        meta: {
          title: 'Uikits Dropdown | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "accordion",
        name: "Accordion",
        component: IndexAccordion,
        meta: {
          title: 'Uikits Accordion | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "tabs",
        name: "Tabs",
        component: IndexTabs,
        meta: {
          title: 'Uikits Tabs | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "lists",
        name: "lists",
        component: IndexLists,
        meta: {
          title: 'Uikits Lists | Admiro - Premium Vue Admin Template',
        }
      }
    ]
  },
  {
    path: "/advance",
    component: BodyView,
    children: [
      {
        path: "scrollable",
        name: "Scrollable",
        component: IndexScrollable,
        meta: {
          title: 'Bonus UI  Scrollable | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "tree",
        name: "tree",
        component: IndexTree,
        meta: {
          title: 'Bonus UI  Tree | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "toasts",
        name: "Toasts",
        component: IndexToasts,
        meta: {
          title: 'Bonus UI  Toasts | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "rating",
        name: "rating",
        component: IndexRating,
        meta: {
          title: 'Bonus UI  Rating | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "dropzone",
        name: "Dropzone",
        component: IndexDropzone,
        meta: {
          title: 'Bonus UI  Dropzone | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "tour",
        name: "tour",
        component: IndexTour,
        meta: {
          title: 'Bonus UI  Tour | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "sweetalert",
        name: "sweetalert",
        component: IndexSweetalert,
        meta: {
          title: 'Bonus UI  SweetAlert | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "animated_modal",
        name: "animationModal",
        component: AnimationModal,
        meta: {
          title: 'Bonus UI  Animated Modal | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "slider",
        name: "slider",
        component: IndexSlider,
        meta: {
          title: 'Bonus UI  Slider | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "ribbons",
        name: "ribbon",
        component: IndexRibbon,
        meta: {
          title: 'Bonus UI  Ribbons | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "pagination",
        name: "pagenation",
        component: IndexPagenation,
        meta: {
          title: 'Bonus UI  Pagenation | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "breadcrumb",
        name: "Breadcrumb",
        component: IndexBreadcrumb,
        meta: {
          title: 'Bonus UI  Breadcrumb | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "range_slider",
        name: "Range",
        component: IndexRange,
        meta: {
          title: 'Bonus UI  Range | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "image_cropper",
        name: "imageCropper",
        component: IndexCropper,
        meta: {
          title: 'Bonus UI  imageCropper | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "basic_card",
        name: "Basiccard",
        component: IndexBasiccard,
        meta: {
          title: 'Bonus UI  Basic Card | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "creative_card",
        name: "Creative",
        component: IndexCreative,
        meta: {
          title: 'Bonus UI  Creative Card | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "draggable_card",
        name: "Draggable",
        component: IndexDraggable,
        meta: {
          title: 'Bonus UI  Draggable Card | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "timeline",
        name: "indexTimeline",
        component: IndexTimeline,
        meta: {
          title: 'Bonus UI  Timeline | Admiro - Premium Vue Admin Template',
        }
      }
    ]
  },
  {
    path: "/animation",
    component: BodyView,
    children: [
      {
        path: "animate",
        name: "animate",
        component: IndexAnimate,
        meta: {
          title: 'Animate | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "aos_animation",
        name: "aos",
        component: IndexAos,
        meta: {
          title: 'Aos Animation | Admiro - Premium Vue Admin Template',
        }
      }
    ]
  },
  {
    path: "/icons",
    component: BodyView,
    children: [
      {
        path: "fontawesome",
        name: "Fontawesome",
        component: IndexFontawesome,
        meta: {
          title: 'Icons Fontawesome | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "themify",
        name: "Themify",
        component: IndexThemify,
        meta: {
          title: 'Icons Themify | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "feather_icon",
        name: "Feather",
        component: IndexFeather,
        meta: {
          title: 'Icons Feather | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "iconly_icon",
        name: "Iconlys",
        component: IndexIconly,
        meta: {
          title: 'Icons Iconly | Admiro - Premium Vue Admin Template',
        }
      },

    ]
  },
  {
    path: "/chart",
    component: BodyView,
    children: [
      {
        path: "apexChart",
        name: "Apexchart",
        component: IndexApexchart,
        meta: {
          title: 'Chart Apex Chart | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "google",
        name: "google",
        component: IndexGoogle,
        meta: {
          title: 'Chart Google Chart | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "chartist",
        name: "chartist",
        component: IndexChartist,
        meta: {
          title: 'Chart Chartist Chart | Admiro - Premium Vue Admin Template',
        }
      }
    ]
  },
  {
    path: "/form",
    component: BodyView,
    children: [
      {
        path: "validation",
        name: "formValidation",
        component: IndexValidation,
        meta: {
          title: 'Form Controls Form Validation | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "base_inputs",
        name: "indexInputs",
        component: IndexInputs,
        meta: {
          title: 'Form Controls Base Input | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "checkbox_radio",
        name: "indexCheckbox",
        component: IndexCheckbox,
        meta: {
          title: 'Form Controls Checkbox & Radio | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "select2",
        name: "Select",
        component: IndexSelect,
        meta: {
          title: 'Form Widgets Select | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "input_groups",
        name: "indexGroups",
        component: IndexGroups,
        meta: {
          title: 'Form Controls Input Groups | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "input_mask",
        name: "indexMask",
        component: IndexMask,
        meta: {
          title: 'Form Controls Input Mask | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "mega_options",
        name: "indexMega",
        component: IndexMega,
        meta: {
          title: 'Form Controls Mega Options | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "datepicker",
        name: "datapicker",
        component: IndexDatapicker,
        meta: {
          title: 'Form Widgets Datepicker | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "touchspin",
        name: "indexTouchspin",
        component: IndexTouchspin,
        meta: {
          title: 'Form Widgets Touchspin | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "switch",
        name: "indexSwitch",
        component: IndexSwitch,
        meta: {
          title: 'Form Widgets Switch| Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "typeahead",
        name: "indexTypeahead",
        component: IndexTypeahead,
        meta: {
          title: 'Form Widgets Typeahead | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "clipboard",
        name: "indexClipboard",
        component: IndexClipboard,
        meta: {
          title: 'Form Widgets Clipboard | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "form_wizard_two",
        name: "formWizardtwo",
        component: FormWizard2,
        meta: {
          title: 'Form Layout Form Wizard 2 | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "two_actor",
        name: "Two Factor",
        component: IndexTwofactor,
        meta: {
          title: 'Form Layout Two Factor| Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "form_wizard",
        name: "formWizard",
        component: FormWizard,
        meta: {
          title: 'Form Layout Form Wizard 2| Admiro - Premium Vue Admin Template',
        }
      },
    ]
  },
  {
    path: "/table",
    component: BodyView,
    children: [
      {
        path: "basic",
        name: "bootstrp",
        component: IndexBootstrap,
        meta: {
          title: 'Table Bootstrap Table | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "table_components",
        name: "tablecomponent",
        component: IndexComponent,
        meta: {
          title: 'Table Table Components | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "datatable_basic",
        name: "basicinit",
        component: IndexInit,
        meta: {
          title: 'Table Basic Init | Admiro - Premium Vue Admin Template',
        }
      }
    ]
  },
  {
    path: "/error_page1",
    name: "errorPage1",
    component: IndexErrorPage1,
    meta: {
      title: 'Error Page1 | Admiro - Premium Vue Admin Template',
    }
  },
  {
    path: "/error_page2",
    name: "errorPage2",
    component: IndexErrorPage2,
    meta: {
      title: 'Error Page2 | Admiro - Premium Vue Admin Template',
    }
  },
  {
    path: "/error_page3",
    name: "errorPage3",
    component: IndexErrorPage3,
    meta: {
      title: 'Error Page3 | Admiro - Premium Vue Admin Template',
    }
  },
  {
    path: "/error_page4",
    name: "errorPage4",
    component: IndexErrorPage4,
    meta: {
      title: 'Error Page4 | Admiro - Premium Vue Admin Template',
    }
  },
  {
    path: "/error_page5",
    name: "errorPage5",
    component: IndexErrorPage5,
    meta: {
      title: 'Error Page5 | Admiro - Premium Vue Admin Template',
    }
  },
  {
    path: "/error_page6",
    name: "errorPage6",
    component: IndexErrorPage6,
    meta: {
      title: 'Error Page6 | Admiro - Premium Vue Admin Template',
    }
  },
  {
    path: "/comingsoon/comingsoon_simple",
    name: "comingsoonPage",
    component: IndexComingsoonSimple,
    meta: {
      title: 'Comingsoon Page | Admiro - Premium Vue Admin Template',
    }
  },
  {
    path: "/comingsoon/comingsoon_video",
    name: "comingsoonVideo",
    component: IndexComingsoonVideo,
    meta: {
      title: 'Comingsoon Video | Admiro - Premium Vue Admin Template',
    }
  },
  {
    path: "/comingsoon/comingsoon_image",
    name: "comingsoonImage",
    component: IndexComingsoonImage,
    meta: {
      title: 'Comingsoon Image | Admiro - Premium Vue Admin Template',
    }
  },
  {
    path: "/authentication/simple",
    name: "loginsimple",
    component: LoginSimple,
    meta: {
      title: 'Login Simple | Admiro - Premium Vue Admin Template',
    }
  },
  {
    path: "/authentication/login/one",
    name: "visuallogin",
    component: LoginImage,
    meta: {
      title: 'Visual Login| Admiro - Premium Vue Admin Template',
    }
  },
  {
    path: "/authentication/login/two",
    name: "loginImagetwo",
    component: LoginImageTwo,
    meta: {
      title: 'Visual Login Two | Admiro - Premium Vue Admin Template',
    }
  },
  {
    path: "/authentication/login/validate",
    name: "loginValidation",
    component: LoginValidation,
    meta: {
      title: ' Validation Login | Admiro - Premium Vue Admin Template',
    }
  },
  {
    path: "/authentication/login/tooltip",
    name: "loginTooltip",
    component: LoginTooltip,
    meta: {
      title: 'Tooltip Login | Admiro - Premium Vue Admin Template',
    }
  },
  {
    path: "/authentication/login/sweetalert",
    name: "loginSweetalert",
    component: LoginSweetalert,
    meta: {
      title: 'Login Sweetalert | Admiro - Premium Vue Admin Template',
    }
  },
  {
    path: "/authentication/register/two",
    name: "registerImagetwo",
    component: RegisterImageTwo,
    meta: {
      title: 'Visual Register Image Two | Admiro - Premium Vue Admin Template',
    }
  },
  {
    path: "/auth/register",
    name: "registerSimple",
    component: RegisterSimple,
    meta: {
      title: 'Register | Admiro - Premium Vue Admin Template',
    }
  },
  {
    path: "/authentication/register/one",
    name: "registerImage",
    component: RegisterImage,
    meta: {
      title: 'Register Image | Admiro - Premium Vue Admin Template',
    }
  },
  {
    path: "/authentication/register/wizard",
    name: "registerWizard",
    component: RegisterWizard,
    meta: {
      title: 'Register Wizard | Admiro - Premium Vue Admin Template',
    }
  },
  {
    path: "/authentication/unlock_user",
    name: "unlockUser",
    component: UnlockUser,
    meta: {
      title: 'Unlock User | Admiro - Premium Vue Admin Template',
    }
  },

  {
    path: "/authentication/forget_password",
    name: "forgetPassword",
    component: ForgetPassword,
    meta: {
      title: 'Forget Password | Admiro - Premium Vue Admin Template',
    }
  },
  {
    path: "/authentication/reset_password",
    name: "resetPassword",
    component: ResetPassword,
    meta: {
      title: 'Reset Password | Admiro - Premium Vue Admin Template',
    }
  },
  {
    path: "/authentication/maintenance",
    name: "maintenanceView",
    component: MaintenanceView,
    meta: {
      title: 'Maintenance | Admiro - Premium Vue Admin Template',
    }
  },
  {
    path: "/gallery",
    component: BodyView,
    children: [
      {
        path: "grid_gallery",
        name: "Gallerygrid",
        component: IndexGallery,
        meta: {
          title: 'Grid Gallery | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "gallery_desc",
        name: "griddesc",
        component: IndexGriddesc,
        meta: {
          title: 'Grid Gallery With Desc | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "gallery_masonary",
        name: "Masonry",
        component: IndexMasonry,
        meta: {
          title: 'Masonry | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "gallery_masonary_desc",
        name: "Masonarydesc",
        component: IndexMasonarydesc,
        meta: {
          title: 'Masonry Desc | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "hover_effect",
        name: "hovergallery",
        component: IndexHoverGallery,
        meta: {
          title: 'Hover Gallery | Admiro - Premium Vue Admin Template',
        }
      }
    ]
  },
  {
    path: "/blog",
    component: BodyView,
    children: [
      {
        path: "single",
        name: "blogsingle",
        component: IndexSingle,
        meta: {
          title: 'Blog Single | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "details",
        name: "blogdetails",
        component: IndexDetails,
        meta: {
          title: 'Blog Details | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "add_post",
        name: "addpost",
        component: IndexAdd,
        meta: {
          title: 'Add Post | Admiro - Premium Vue Admin Template',
        }
      }
    ]
  },
  {
    path: "/job",
    component: BodyView,
    children: [
      {
        path: "card",
        name: "jobcard",
        component: IndexCards,
        meta: {
          title: 'Job Card | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "/job/details/:id",
        name: "jobdetails",
        component: IndexDetail,
        props: true,
        meta: {
          title: 'Job Details | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "apply/:id",
        name: "jobapply",
        component: IndexApply,
        meta: {
          title: 'Job Apply | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "list",
        name: "joblist",
        component: IndexList,
        meta: {
          title: 'Job List | Admiro - Premium Vue Admin Template',
        }
      }
    ]
  },
  {
    path: "/learning",
    component: BodyView,
    children: [
      {
        path: "list",
        name: "Learninglist",
        component: IndexLearning,
        meta: {
          title: 'Learning List | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "details/:id",
        name: "coursedetailed",
        component: IndexCourse,
        meta: {
          title: 'course Detailed | Admiro - Premium Vue Admin Template',
        }
      }
    ]
  },
  {
    path: "/maps",
    component: BodyView,
    children: [
      {
        path: "vue_google_maps",
        name: "googlemaps",
        component: IndexGoogleMap,
        meta: {
          title: 'Google Map | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "vue_leaflet_maps",
        name: "mapLeaflet",
        component: IndexLeaflet,
        meta: {
          title: 'Leaflet Map | Admiro - Premium Vue Admin Template',
        }
      },

    ]
  },
  {
    path: "/editor",
    component: BodyView,
    children: [
      {
        path: "simple_editor",
        name: "simpleEditor",
        component: SimpleEditor,
        meta: {
          title: 'Simple Editor | Admiro - Premium Vue Admin Template',
        }
      },
      {
        path: "ck_editor",
        name: "ckeditor",
        component: IndexCk,
        meta: {
          title: 'Ck Editor | Admiro - Premium Vue Admin Template',
        }
      }
    ]
  },
  {
    path: "/knowledgebase",
    component: BodyView,
    children: [
      {
        path: "knowledgebase",
        name: "Knowledgebase",
        component: IndexKnowledgebase,
        meta: {
          title: 'Knowledgebase | Admiro - Premium Vue Admin Template',
        }
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (typeof (to.meta.title) === 'string') {
    document.title = to.meta.title;
  }
  const path = ['/auth/login', '/auth/register'];
  if (path.includes(to.path) || localStorage.getItem('user')) {
    return next();
  }
  next('/auth/login');
});

export default router
