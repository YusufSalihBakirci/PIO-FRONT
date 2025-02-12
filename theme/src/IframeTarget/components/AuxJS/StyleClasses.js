export const StyleClasses = {
  // Container styles
  container: "w-full bg-white p-6 rounded-lg shadow-lg",
  spaceY: "w-full space-y-4",
  stepContainer: "w-full border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200",

  // Header styles
  headerContainer: "flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-t-lg border-b border-gray-200",
  headerTitle: "text-lg font-medium text-gray-800",
  rotate180: "rotate-180",

  // Slide styles
  slideContainer: "border border-gray-200 rounded-lg mb-4",
  slideHeader: "flex justify-between items-center p-3 cursor-pointer bg-gray-100",
  slideTitle: "font-medium",
  slideContent: "p-4 bg-white",

  // Form styles
  formGroup: "form-group",
  formLabel: "block text-sm font-medium text-gray-700 mb-2",
  input: "w-full p-3 border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent",

  // Color picker styles
  colorPickerTrigger: "color-picker-trigger flex items-center p-3 border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-lg cursor-pointer transition-all duration-200",
  colorSwatch: "w-6 h-6 rounded-full border-2 border-white shadow-sm mr-3",

  // Grid styles
  grid: "grid grid-cols-1 gap-6",
  fullWidth: "md:col-span-2",

  // Button styles
  button: "px-6 py-2.5 bg-[#308e87] text-white rounded-lg hover:bg-[#277571] transition-colors duration-200 flex items-center gap-2 shadow-md hover:shadow-lg active:shadow-md",
  removeButton: "text-red-500 hover:text-red-700",

  // Footer styles
  footer: "flex justify-end mt-8 pt-4 border-t border-gray-200",

  // Utility styles
  srOnly: "sr-only",
  flexCenter: "flex items-center space-x-2",
  iconBase: "w-5 h-5",

  // Array item styles
  arrayContainer: "w-full space-y-4",
  itemWrapper: "w-full border border-gray-200 rounded-lg shadow-sm",
  itemHeader: "w-full flex justify-between items-center p-3 bg-gray-50 hover:bg-gray-100 cursor-pointer rounded-t-lg",
  itemTitle: "font-medium text-gray-700",
  itemControls: "flex items-center space-x-2",
  itemContent: "w-full p-4 border-t bg-white rounded-b-lg",
  toggleButton: "p-1 hover:bg-gray-200 rounded-full",
  addButton: "w-full mt-4 px-4 py-2 bg-[#308e87] text-white rounded-lg hover:bg-[#277571] transition-colors duration-200 flex items-center justify-center gap-2",

  // Grid layouts
  gridOneColumn: "grid grid-cols-1 gap-6",
  gridTwoColumns: "grid grid-cols-1 md:grid-cols-2 gap-6 [&_.form-group:has(textarea)]:md:col-span-2",
};
