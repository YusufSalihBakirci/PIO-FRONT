# IframeTarget Module

## Overview

The IframeTarget module is a Vue.js-based system for creating, previewing, and managing interactive website targets (popups, banners, etc.) within an iframe environment.

## Key Components

### Core Components

- `InputPanel.vue`: Main interface for target selection and configuration
- `TargetCreator.vue`: Handles target configuration creation and management
- `BetterTargetPreview.vue`: Enhanced preview component with responsive device views
- `CodeEditor.vue`: Monaco-based code editor for custom JavaScript

### Auxiliary Components

- `PageReader.js`: Analyzes page structure for target placement
- `EcommerceTemplate.js`: Generates template HTML for preview
- `SvgVectors.js`: UI icons for device selection and controls

### State Management

- `previewStore.js`: Manages preview content and target type state
- `iframeStore.js`: Handles iframe content and interactions

## Features

- Responsive preview with desktop/tablet/mobile views
- Real-time code editing with syntax highlighting
- Dynamic target placement analysis
- Template-based preview system
- State management using Pinia

## Technical Stack

- Vue 3
- Pinia for state management
- Monaco Editor for code editing
- Tailwind CSS for styling

## Usage

1. Select target type from InputPanel
2. Configure target settings in TargetCreator
3. Preview changes in BetterTargetPreview
4. Edit custom code using CodeEditor if needed

## Development

## Project Structure

The project follows a modular structure with the following organization:

### Components Directory

- **InputPanel/**

  - `InputPanel.vue` - Handles target selection and creation
  - `TargetCreator.vue` - Creates target configurations. Must be used with TargetCodes.js and TargetConfigs.js and must be target agnostic.
  - `CodeEditor.vue` - Monaco editor for custom code
  - `TargetJSCreator.vue` - Generates target JS code

- **TargetTypes/**

  - `TargetCodes.js` - Generates actual target code
  - `TargetConfigs.js` - Defines target configurations

- **AuxJS/**

  - `PageReader.js` - Reads and analyzes page elements
  - `EcommerceTemplate.js` - Template generation
  - `SvgVectors.js` - UI icons and vectors

- **Preview Components**
  - `BetterTargetPreview.vue` - New preview component
  - `TargetPreview.vue` - Original preview component

### Store Directory

- `previewStore.js` - Preview state management
- `iframeStore.js` - Iframe content management

### Public Directory

- `FoodMart-1.0.0/` - Template assets

## Data Flow

1. User Action triggers InputPanel.vue
2. InputPanel.vue manages target selection
3. TargetCreator.vue handles configuration
4. TargetCodes.js generates the target code
5. Generated code is converted to JSON string
6. previewStore.js receives and manages the JSON
7. BetterTargetPreview.vue renders the final preview

## Key Components

### 1. InputPanel

- Main interface for target creation
- Handles target type selection
- Manages target configuration flow

### 2. CodeEditor

- Monaco-based code editor
- Supports custom JavaScript editing
- Provides syntax highlighting

### 3. PageReader

- Analyzes page structure
- Identifies target placement options
- Handles element selection

### 4. TargetCodes

- Generates various target codes including:
  - Popup-style targets (blocks, modals)
  - Banner-style targets (headers, footers)
  - Inline targets (embedded content)
  - Gamification elements
- Manages target styling and animations
- Handles responsive design across devices
- Supports extensible target type system

### 5. BetterTargetPreview

- Renders preview in template
- Handles device-specific views
- Manages target display

## State Management

### previewStore

- Manages preview content
- Handles target type state
- Controls preview updates

### iframeStore

- Manages iframe content
- Handles iframe interactions
- Controls template state

## Target Containers

The system uses two main containers:

- `#experia-inline` - For banner-type targets
- `#experia-external` - For popup-type targets

## Technical Implementation

### Code Generation

- Target code is generated as stringified JSON
- JSON includes CSS, JS, and HTML components
- Code is executed in preview context

### Preview Rendering

- Styles are injected into document head
- JavaScript is executed in current context
- Target containers are pre-defined in template

### Device Support

- Responsive design handling
- Device-specific preview options
- Mobile-first approach

## Current Development Focus

1. Improving preview rendering
2. Handling code execution in preview
3. Managing target code generation
4. Maintaining clean code structure

## Best Practices

1. Always use stringified JSON for code transfer
2. Clean up existing targets before adding new ones
3. Handle errors gracefully in preview
4. Maintain separation of concerns
5. Use proper container targeting

## Contributing

When contributing to this project:

1. Follow the existing code structure
2. Document any new components
3. Update this README as needed
4. Test thoroughly before submitting changes

## Future Improvements

1. Enhanced error handling
2. Better preview performance
3. Additional target types
4. Improved code editor features
