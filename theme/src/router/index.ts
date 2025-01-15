import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BodyView from "@/layout/BodyView.vue"
import AuthView from "@/components/common/block/auth/AuthView.vue"
import LoginPage from "@/components/common/block/auth/LoginPage.vue"
import IndexDefault from "@/pages/dashboards/IndexDefault.vue"
import IndexEcommerce from "@/pages/dashboards/IndexEcommerce.vue"
import IndexEducation from "@/pages/dashboards/IndexEducation.vue"
import IndexExperience from "@/pages/experiences/IndexExperience.vue"
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
import ListExperience from "@/pages/experiences/ListExperience.vue"
import GamificationExperience from "@/pages/experiences/GamificationExperience.vue"
import InlineExperience from "@/pages/experiences/InlineExperience.vue"
import ExternalExperience from "@/pages/experiences/ExternalExperience.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/dashboards/dashboard_default"
  },
  {
    path: "/",
    name: "home",
    component: BodyView,
    meta: {
      title: 'Experia - Self Service Experiences ',
    },
    children: [
      {
        path: '',
        name: 'defaultRoot',
        component: IndexDefault,
        meta: {
          title: 'Experia - Self Service Experiences ',
        }
      },
      {
        path: "experiences",
        children: [
          {
            path: "create",
            name: "createexperience",
            component: IndexExperience,
            meta: {
              title: 'Create Experience | Vue Admin Template',
            }
          },
          {
            path: "list",
            name: "experiencelist",
            component: ListExperience,
            meta: {
              title: 'Experience List | Vue Admin Template',
            }
          },
          {
            path: "inline",
            name: "inlineexperience",
            component: InlineExperience,
            meta: {
              title: 'Inline Experience | Vue Admin Template',
            }
          },
          {
            path: "external",
            name: "externalexperience",
            component: ExternalExperience,
            meta: {
              title: 'External Experience | Vue Admin Template',
            }
          },
          {
            path: "gamification",
            name: "gamification",
            component: GamificationExperience,
            meta: {
              title: 'Gamification | Vue Admin Template',
            }
          }
        ]
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
          title: 'Experia - Self Service Experiences ',
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
          title: 'Dashboards | Experia - Self Service Experiences ',
        }
      },
      {
        path: "dashboard_education",
        name: "education",
        component: IndexEducation,
        meta: {
          title: 'Dashboards Education | Experia - Self Service Experiences ',
        }
      },
      {
        path: "dashboard_ecommerce",
        name: "ecommerce",
        component: IndexEcommerce,
        meta: {
          title: 'Dashboards Ecommerce | Experia - Self Service Experiences ',
        }
      },
      {
        path: "dashboard_experience",
        name: "experience",
        component: IndexExperience,
        meta: {
          title: 'Create Experience | Vue Admin Template',
        }
      },
      {
        path: "experience_list",
        name: "experienceList",
        component: ListExperience,
        meta: {
          title: 'Experience List | Vue Admin Template',
        }
      },
      {
        path: "gamification",
        name: "GamificationExperience",
        component: GamificationExperience,
        meta: {
          title: 'Gamification | Vue Admin Template',
        }
      },
      {
        path: "inline_experience",
        name: "inlineExperience",
        component: InlineExperience,
        meta: {
          title: 'Inline Experience | Vue Admin Template',
        }
      },
      {
        path: "external_experience",
        name: "externalExperience",
        component: ExternalExperience,
        meta: {
          title: 'External Experience | Vue Admin Template',
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
          title: 'Widgets General | Experia - Self Service Experiences ',
        }
      },
      {
        path: "Chart",
        name: "charts",
        component: IndexChart,
        meta: {
          title: 'Widgets Chart | Experia - Self Service Experiences ',
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
          title: 'Project List| Experia - Self Service Experiences ',
        }
      },
      {
        path: "project_create",
        name: "createProject",
        component: IndexCreateProject,
        meta: {
          title: 'Create Project| Experia - Self Service Experiences ',
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
          title: 'File Manager| Experia - Self Service Experiences ',
        }
      },
      {
        path: "kanban_board",
        name: "kanbanBoard",
        component: IndexKanbanBoard,
        meta: {
          title: 'kanban Board| Experia - Self Service Experiences ',
        }
      },
      {
        path: "letter_box",
        name: "letterbox",
        component: IndexLetterBox,
        meta: {
          title: 'Letter Box| Experia - Self Service Experiences ',
        }
      },
      {
        path: "private_chat",
        name: "Chatapp",
        component: IndexPrivateChat,
        meta: {
          title: 'Private Chat| Experia - Self Service Experiences ',
        }
      },
      {
        path: "group_chat",
        name: "Group Chat",
        component: IndexGroupChat,
        meta: {
          title: 'Group Chat| Experia - Self Service Experiences ',
        }
      },
      {
        path: "bookmark",
        name: "bookmark",
        component: IndexBookmark,
        meta: {
          title: 'Bookmark| Experia - Self Service Experiences ',
        }
      },
      {
        path: "contact",
        name: "contacts",
        component: IndexContact,
        meta: {
          title: 'contact| Experia - Self Service Experiences ',
        }
      },
      {
        path: "todo",
        name: "todo",
        component: IndexTodo,
        meta: {
          title: 'To Do| Experia - Self Service Experiences ',
        }
      },
      {
        path: "task",
        name: "task",
        component: IndexTask,
        meta: {
          title: 'Task| Experia - Self Service Experiences ',
        }
      },
      {
        path: "calendar",
        name: "calendar",
        component: IndexCalendar,
        meta: {
          title: 'Calendar| Experia - Self Service Experiences ',
        }
      },
      {
        path: "buttons",
        name: "button",
        component: IndexButtons,
        meta: {
          title: 'Buttons | Experia - Self Service Experiences ',
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
          title: 'Add Product | Experia - Self Service Experiences ',
        }
      },
      {
        path: "product",
        name: "product",
        component: IndexProduct,
        meta: {
          title: 'Product | Experia - Self Service Experiences ',
        }
      },
      {
        path: "cart",
        name: "cart",
        component: IndexCart,
        meta: {
          title: 'Cart | Experia - Self Service Experiences ',
        }
      },
      {
        path: "details/:id",
        name: "productPage",
        component: IndexProductPage,
        meta: {
          title: 'Product Page | Experia - Self Service Experiences ',
        }
      },

      {
        path: "payment_details",
        name: "paymentDetail",
        component: IndexPaymentDetail,
        meta: {
          title: 'Payment Detail | Experia - Self Service Experiences ',
        }
      },
      {
        path: "invoice_1",
        name: "Invoice_1",
        component: IndexInvoiceOne,
        meta: {
          title: 'Invoice | Experia - Self Service Experiences ',
        }
      },
      {
        path: "invoice_2",
        name: "Invoice_2",
        component: IndexInvoiceTwo,
        meta: {
          title: 'Invoice Two | Experia - Self Service Experiences ',
        }
      },
      {
        path: "invoice_3",
        name: "Invoice_3",
        component: IndexInvoiceThree,
        meta: {
          title: 'Invoice Three | Experia - Self Service Experiences ',
        }
      },
      {
        path: "invoice_4",
        name: "Invoice_4",
        component: IndexInvoiceFour,
        meta: {
          title: 'Invoice Four | Experia - Self Service Experiences ',
        }
      },
      {
        path: "invoice_5",
        name: "Invoice_5",
        component: IndexInvoiceFive,
        meta: {
          title: 'Invoice Five | Experia - Self Service Experiences ',
        }
      },
      {
        path: "invoice_6",
        name: "Invoice_6",
        component: IndexInvoiceSix,
        meta: {
          title: 'Invoice Six | Experia - Self Service Experiences ',
        }
      },
      {
        path: "checkout",
        name: "Checkout",
        component: IndexCheckout,
        meta: {
          title: 'Checkout | Experia - Self Service Experiences ',
        }
      },
      {
        path: "pricing",
        name: "pricing",
        component: IndexPricing,
        meta: {
          title: 'Pricing | Experia - Self Service Experiences ',
        }
      },
      {
        path: "wishlist",
        name: "Wishlist",
        component: IndexWishlist,
        meta: {
          title: 'Wish List | Experia - Self Service Experiences ',
        }
      },
      {
        path: "order_history",
        name: "Orderhistory",
        component: IndexOrder,
        meta: {
          title: 'Order History | Experia - Self Service Experiences ',
        }
      },
      {
        path: "product_list",
        name: "productlist",
        component: IndexProductList,
        meta: {
          title: 'Product list | Experia - Self Service Experiences ',
        }
      },
      {
        path: "category",
        name: "category page",
        component: IndexCategory,
        meta: {
          title: 'Category Page | Experia - Self Service Experiences ',
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
          title: 'User Profile| Experia - Self Service Experiences ',
        }
      },
      {
        path: "edit",
        name: "indexEdit",
        component: IndexEdit,
        meta: {
          title: 'User Edit| Experia - Self Service Experiences ',
        }
      },
      {
        path: "cards",
        name: "usercard",
        component: IndexCard,
        meta: {
          title: 'User Cards| Experia - Self Service Experiences ',
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
          title: 'Social App| Experia - Self Service Experiences ',
        }
      },
      {
        path: "search",
        name: "searchresult",
        component: IndexSearch,
        meta: {
          title: 'Search| Experia - Self Service Experiences ',
        }
      },
      {
        path: "sample_page",
        name: "samplepage",
        component: IndexSample,
        meta: {
          title: 'Simple Page| Experia - Self Service Experiences ',
        }
      },
      {
        path: "internationalization",
        name: "Internationalization",
        component: IndexInternationalization,
        meta: {
          title: 'Internationalization| Experia - Self Service Experiences ',
        }
      },
      {
        path: "faq",
        name: "faq",
        component: IndexFaq,
        meta: {
          title: 'Faq| Experia - Self Service Experiences ',
        }
      },
      {
        path: "support",
        name: "Support",
        component: IndexSupport,
        meta: {
          title: 'Support | Experia - Self Service Experiences ',
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
          title: 'Uikits Typography | Experia - Self Service Experiences ',
        }
      },
      {
        path: "avatars",
        name: "Avatars",
        component: IndexAvatars,
        meta: {
          title: 'Uikits Avatars | Experia - Self Service Experiences ',
        }
      },
      {
        path: "helper_classes",
        name: "Helper",
        component: IndexHelper,
        meta: {
          title: 'Uikits Helper Classes | Experia - Self Service Experiences ',
        }
      },
      {
        path: "grid",
        name: "Grid",
        component: IndexGrid,
        meta: {
          title: 'Uikits Grid | Experia - Self Service Experiences ',
        }
      },
      {
        path: "tag_pills",
        name: "TagPills",
        component: IndexTagPills,
        meta: {
          title: 'Uikits Tag & Pills | Experia - Self Service Experiences ',
        }
      },
      {
        path: "progress_bar",
        name: "Progress",
        component: IndexProgress,
        meta: {
          title: 'Uikits Progressbar | Experia - Self Service Experiences ',
        }
      },
      {
        path: "modal",
        name: "model",
        component: IndexModal,
        meta: {
          title: 'Uikits Modal | Experia - Self Service Experiences ',
        }
      },
      {
        path: "alert",
        name: "alert",
        component: IndexAlert,
        meta: {
          title: 'Uikits Alert | Experia - Self Service Experiences ',
        }
      },
      {
        path: "popover",
        name: "popover",
        component: IndexPopover,
        meta: {
          title: 'Uikits popover | Experia - Self Service Experiences ',
        }
      },
      {
        path: "tooltip",
        name: "tooltip",
        component: IndexTooltip,
        meta: {
          title: 'Uikits Tooltip | Experia - Self Service Experiences ',
        }
      },
      {
        path: "dropdown",
        name: "Dropdown",
        component: IndexDropdown,
        meta: {
          title: 'Uikits Dropdown | Experia - Self Service Experiences ',
        }
      },
      {
        path: "accordion",
        name: "Accordion",
        component: IndexAccordion,
        meta: {
          title: 'Uikits Accordion | Experia - Self Service Experiences ',
        }
      },
      {
        path: "tabs",
        name: "Tabs",
        component: IndexTabs,
        meta: {
          title: 'Uikits Tabs | Experia - Self Service Experiences ',
        }
      },
      {
        path: "lists",
        name: "lists",
        component: IndexLists,
        meta: {
          title: 'Uikits Lists | Experia - Self Service Experiences ',
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
          title: 'Bonus UI  Scrollable | Experia - Self Service Experiences ',
        }
      },
      {
        path: "tree",
        name: "tree",
        component: IndexTree,
        meta: {
          title: 'Bonus UI  Tree | Experia - Self Service Experiences ',
        }
      },
      {
        path: "toasts",
        name: "Toasts",
        component: IndexToasts,
        meta: {
          title: 'Bonus UI  Toasts | Experia - Self Service Experiences ',
        }
      },
      {
        path: "rating",
        name: "rating",
        component: IndexRating,
        meta: {
          title: 'Bonus UI  Rating | Experia - Self Service Experiences ',
        }
      },
      {
        path: "dropzone",
        name: "Dropzone",
        component: IndexDropzone,
        meta: {
          title: 'Bonus UI  Dropzone | Experia - Self Service Experiences ',
        }
      },
      {
        path: "tour",
        name: "tour",
        component: IndexTour,
        meta: {
          title: 'Bonus UI  Tour | Experia - Self Service Experiences ',
        }
      },
      {
        path: "sweetalert",
        name: "sweetalert",
        component: IndexSweetalert,
        meta: {
          title: 'Bonus UI  SweetAlert | Experia - Self Service Experiences ',
        }
      },
      {
        path: "animated_modal",
        name: "animationModal",
        component: AnimationModal,
        meta: {
          title: 'Bonus UI  Animated Modal | Experia - Self Service Experiences ',
        }
      },
      {
        path: "slider",
        name: "slider",
        component: IndexSlider,
        meta: {
          title: 'Bonus UI  Slider | Experia - Self Service Experiences ',
        }
      },
      {
        path: "ribbons",
        name: "ribbon",
        component: IndexRibbon,
        meta: {
          title: 'Bonus UI  Ribbons | Experia - Self Service Experiences ',
        }
      },
      {
        path: "pagination",
        name: "pagenation",
        component: IndexPagenation,
        meta: {
          title: 'Bonus UI  Pagenation | Experia - Self Service Experiences ',
        }
      },
      {
        path: "breadcrumb",
        name: "Breadcrumb",
        component: IndexBreadcrumb,
        meta: {
          title: 'Bonus UI  Breadcrumb | Experia - Self Service Experiences ',
        }
      },
      {
        path: "range_slider",
        name: "Range",
        component: IndexRange,
        meta: {
          title: 'Bonus UI  Range | Experia - Self Service Experiences ',
        }
      },
      {
        path: "image_cropper",
        name: "imageCropper",
        component: IndexCropper,
        meta: {
          title: 'Bonus UI  imageCropper | Experia - Self Service Experiences ',
        }
      },
      {
        path: "basic_card",
        name: "Basiccard",
        component: IndexBasiccard,
        meta: {
          title: 'Bonus UI  Basic Card | Experia - Self Service Experiences ',
        }
      },
      {
        path: "creative_card",
        name: "Creative",
        component: IndexCreative,
        meta: {
          title: 'Bonus UI  Creative Card | Experia - Self Service Experiences ',
        }
      },
      {
        path: "draggable_card",
        name: "Draggable",
        component: IndexDraggable,
        meta: {
          title: 'Bonus UI  Draggable Card | Experia - Self Service Experiences ',
        }
      },
      {
        path: "timeline",
        name: "indexTimeline",
        component: IndexTimeline,
        meta: {
          title: 'Bonus UI  Timeline | Experia - Self Service Experiences ',
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
          title: 'Animate | Experia - Self Service Experiences ',
        }
      },
      {
        path: "aos_animation",
        name: "aos",
        component: IndexAos,
        meta: {
          title: 'Aos Animation | Experia - Self Service Experiences ',
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
          title: 'Icons Fontawesome | Experia - Self Service Experiences ',
        }
      },
      {
        path: "themify",
        name: "Themify",
        component: IndexThemify,
        meta: {
          title: 'Icons Themify | Experia - Self Service Experiences ',
        }
      },
      {
        path: "feather_icon",
        name: "Feather",
        component: IndexFeather,
        meta: {
          title: 'Icons Feather | Experia - Self Service Experiences ',
        }
      },
      {
        path: "iconly_icon",
        name: "Iconlys",
        component: IndexIconly,
        meta: {
          title: 'Icons Iconly | Experia - Self Service Experiences ',
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
          title: 'Chart Apex Chart | Experia - Self Service Experiences ',
        }
      },
      {
        path: "google",
        name: "google",
        component: IndexGoogle,
        meta: {
          title: 'Chart Google Chart | Experia - Self Service Experiences ',
        }
      },
      {
        path: "chartist",
        name: "chartist",
        component: IndexChartist,
        meta: {
          title: 'Chart Chartist Chart | Experia - Self Service Experiences ',
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
          title: 'Form Controls Form Validation | Experia - Self Service Experiences ',
        }
      },
      {
        path: "base_inputs",
        name: "indexInputs",
        component: IndexInputs,
        meta: {
          title: 'Form Controls Base Input | Experia - Self Service Experiences ',
        }
      },
      {
        path: "checkbox_radio",
        name: "indexCheckbox",
        component: IndexCheckbox,
        meta: {
          title: 'Form Controls Checkbox & Radio | Experia - Self Service Experiences ',
        }
      },
      {
        path: "select2",
        name: "Select",
        component: IndexSelect,
        meta: {
          title: 'Form Widgets Select | Experia - Self Service Experiences ',
        }
      },
      {
        path: "input_groups",
        name: "indexGroups",
        component: IndexGroups,
        meta: {
          title: 'Form Controls Input Groups | Experia - Self Service Experiences ',
        }
      },
      {
        path: "input_mask",
        name: "indexMask",
        component: IndexMask,
        meta: {
          title: 'Form Controls Input Mask | Experia - Self Service Experiences ',
        }
      },
      {
        path: "mega_options",
        name: "indexMega",
        component: IndexMega,
        meta: {
          title: 'Form Controls Mega Options | Experia - Self Service Experiences ',
        }
      },
      {
        path: "datepicker",
        name: "datapicker",
        component: IndexDatapicker,
        meta: {
          title: 'Form Widgets Datepicker | Experia - Self Service Experiences ',
        }
      },
      {
        path: "touchspin",
        name: "indexTouchspin",
        component: IndexTouchspin,
        meta: {
          title: 'Form Widgets Touchspin | Experia - Self Service Experiences ',
        }
      },
      {
        path: "switch",
        name: "indexSwitch",
        component: IndexSwitch,
        meta: {
          title: 'Form Widgets Switch| Experia - Self Service Experiences ',
        }
      },
      {
        path: "typeahead",
        name: "indexTypeahead",
        component: IndexTypeahead,
        meta: {
          title: 'Form Widgets Typeahead | Experia - Self Service Experiences ',
        }
      },
      {
        path: "clipboard",
        name: "indexClipboard",
        component: IndexClipboard,
        meta: {
          title: 'Form Widgets Clipboard | Experia - Self Service Experiences ',
        }
      },
      {
        path: "form_wizard_two",
        name: "formWizardtwo",
        component: FormWizard2,
        meta: {
          title: 'Form Layout Form Wizard 2 | Experia - Self Service Experiences ',
        }
      },
      {
        path: "two_actor",
        name: "Two Factor",
        component: IndexTwofactor,
        meta: {
          title: 'Form Layout Two Factor| Experia - Self Service Experiences ',
        }
      },
      {
        path: "form_wizard",
        name: "formWizard",
        component: FormWizard,
        meta: {
          title: 'Form Layout Form Wizard 2| Experia - Self Service Experiences ',
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
          title: 'Table Bootstrap Table | Experia - Self Service Experiences ',
        }
      },
      {
        path: "table_components",
        name: "tablecomponent",
        component: IndexComponent,
        meta: {
          title: 'Table Table Components | Experia - Self Service Experiences ',
        }
      },
      {
        path: "datatable_basic",
        name: "basicinit",
        component: IndexInit,
        meta: {
          title: 'Table Basic Init | Experia - Self Service Experiences ',
        }
      }
    ]
  },
  {
    path: "/error_page1",
    name: "errorPage1",
    component: IndexErrorPage1,
    meta: {
      title: 'Error Page1 | Experia - Self Service Experiences ',
    }
  },
  {
    path: "/error_page2",
    name: "errorPage2",
    component: IndexErrorPage2,
    meta: {
      title: 'Error Page2 | Experia - Self Service Experiences ',
    }
  },
  {
    path: "/error_page3",
    name: "errorPage3",
    component: IndexErrorPage3,
    meta: {
      title: 'Error Page3 | Experia - Self Service Experiences ',
    }
  },
  {
    path: "/error_page4",
    name: "errorPage4",
    component: IndexErrorPage4,
    meta: {
      title: 'Error Page4 | Experia - Self Service Experiences ',
    }
  },
  {
    path: "/error_page5",
    name: "errorPage5",
    component: IndexErrorPage5,
    meta: {
      title: 'Error Page5 | Experia - Self Service Experiences ',
    }
  },
  {
    path: "/error_page6",
    name: "errorPage6",
    component: IndexErrorPage6,
    meta: {
      title: 'Error Page6 | Experia - Self Service Experiences ',
    }
  },
  {
    path: "/comingsoon/comingsoon_simple",
    name: "comingsoonPage",
    component: IndexComingsoonSimple,
    meta: {
      title: 'Comingsoon Page | Experia - Self Service Experiences ',
    }
  },
  {
    path: "/comingsoon/comingsoon_video",
    name: "comingsoonVideo",
    component: IndexComingsoonVideo,
    meta: {
      title: 'Comingsoon Video | Experia - Self Service Experiences ',
    }
  },
  {
    path: "/comingsoon/comingsoon_image",
    name: "comingsoonImage",
    component: IndexComingsoonImage,
    meta: {
      title: 'Comingsoon Image | Experia - Self Service Experiences ',
    }
  },
  {
    path: "/authentication/simple",
    name: "loginsimple",
    component: LoginSimple,
    meta: {
      title: 'Login Simple | Experia - Self Service Experiences ',
    }
  },
  {
    path: "/authentication/login/one",
    name: "visuallogin",
    component: LoginImage,
    meta: {
      title: 'Visual Login| Experia - Self Service Experiences ',
    }
  },
  {
    path: "/authentication/login/two",
    name: "loginImagetwo",
    component: LoginImageTwo,
    meta: {
      title: 'Visual Login Two | Experia - Self Service Experiences ',
    }
  },
  {
    path: "/authentication/login/validate",
    name: "loginValidation",
    component: LoginValidation,
    meta: {
      title: ' Validation Login | Experia - Self Service Experiences ',
    }
  },
  {
    path: "/authentication/login/tooltip",
    name: "loginTooltip",
    component: LoginTooltip,
    meta: {
      title: 'Tooltip Login | Experia - Self Service Experiences ',
    }
  },
  {
    path: "/authentication/login/sweetalert",
    name: "loginSweetalert",
    component: LoginSweetalert,
    meta: {
      title: 'Login Sweetalert | Experia - Self Service Experiences ',
    }
  },
  {
    path: "/authentication/register/two",
    name: "registerImagetwo",
    component: RegisterImageTwo,
    meta: {
      title: 'Visual Register Image Two | Experia - Self Service Experiences ',
    }
  },
  {
    path: "/auth/register",
    name: "registerSimple",
    component: RegisterSimple,
    meta: {
      title: 'Register | Experia - Self Service Experiences ',
    }
  },
  {
    path: "/authentication/register/one",
    name: "registerImage",
    component: RegisterImage,
    meta: {
      title: 'Register Image | Experia - Self Service Experiences ',
    }
  },
  {
    path: "/authentication/register/wizard",
    name: "registerWizard",
    component: RegisterWizard,
    meta: {
      title: 'Register Wizard | Experia - Self Service Experiences ',
    }
  },
  {
    path: "/authentication/unlock_user",
    name: "unlockUser",
    component: UnlockUser,
    meta: {
      title: 'Unlock User | Experia - Self Service Experiences ',
    }
  },

  {
    path: "/authentication/forget_password",
    name: "forgetPassword",
    component: ForgetPassword,
    meta: {
      title: 'Forget Password | Experia - Self Service Experiences ',
    }
  },
  {
    path: "/authentication/reset_password",
    name: "resetPassword",
    component: ResetPassword,
    meta: {
      title: 'Reset Password | Experia - Self Service Experiences ',
    }
  },
  {
    path: "/authentication/maintenance",
    name: "maintenanceView",
    component: MaintenanceView,
    meta: {
      title: 'Maintenance | Experia - Self Service Experiences ',
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
          title: 'Grid Gallery | Experia - Self Service Experiences ',
        }
      },
      {
        path: "gallery_desc",
        name: "griddesc",
        component: IndexGriddesc,
        meta: {
          title: 'Grid Gallery With Desc | Experia - Self Service Experiences ',
        }
      },
      {
        path: "gallery_masonary",
        name: "Masonry",
        component: IndexMasonry,
        meta: {
          title: 'Masonry | Experia - Self Service Experiences ',
        }
      },
      {
        path: "gallery_masonary_desc",
        name: "Masonarydesc",
        component: IndexMasonarydesc,
        meta: {
          title: 'Masonry Desc | Experia - Self Service Experiences ',
        }
      },
      {
        path: "hover_effect",
        name: "hovergallery",
        component: IndexHoverGallery,
        meta: {
          title: 'Hover Gallery | Experia - Self Service Experiences ',
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
          title: 'Blog Single | Experia - Self Service Experiences ',
        }
      },
      {
        path: "details",
        name: "blogdetails",
        component: IndexDetails,
        meta: {
          title: 'Blog Details | Experia - Self Service Experiences ',
        }
      },
      {
        path: "add_post",
        name: "addpost",
        component: IndexAdd,
        meta: {
          title: 'Add Post | Experia - Self Service Experiences ',
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
          title: 'Job Card | Experia - Self Service Experiences ',
        }
      },
      {
        path: "/job/details/:id",
        name: "jobdetails",
        component: IndexDetail,
        props: true,
        meta: {
          title: 'Job Details | Experia - Self Service Experiences ',
        }
      },
      {
        path: "apply/:id",
        name: "jobapply",
        component: IndexApply,
        meta: {
          title: 'Job Apply | Experia - Self Service Experiences ',
        }
      },
      {
        path: "list",
        name: "joblist",
        component: IndexList,
        meta: {
          title: 'Job List | Experia - Self Service Experiences ',
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
          title: 'Learning List | Experia - Self Service Experiences ',
        }
      },
      {
        path: "details/:id",
        name: "coursedetailed",
        component: IndexCourse,
        meta: {
          title: 'course Detailed | Experia - Self Service Experiences ',
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
          title: 'Google Map | Experia - Self Service Experiences ',
        }
      },
      {
        path: "vue_leaflet_maps",
        name: "mapLeaflet",
        component: IndexLeaflet,
        meta: {
          title: 'Leaflet Map | Experia - Self Service Experiences ',
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
          title: 'Simple Editor | Experia - Self Service Experiences ',
        }
      },
      {
        path: "ck_editor",
        name: "ckeditor",
        component: IndexCk,
        meta: {
          title: 'Ck Editor | Experia - Self Service Experiences ',
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
          title: 'Knowledgebase | Experia - Self Service Experiences ',
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
