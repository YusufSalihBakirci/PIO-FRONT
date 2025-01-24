<template>
  <div class="code-editor-wrapper h-[80vh]" :class="editorTheme">
    <!-- Settings Menu -->
    <div class="editor-settings mb-3 flex items-center justify-between gap-3">
      <!-- Left side with title -->
      <h2 class="font-medium" :class="getLabelClasses">Experia Code Editor</h2>

      <!-- All controls on the right -->
      <div class="flex items-center gap-3">
        <select v-model="editorFont" class="px-3 py-1.5 rounded border text-sm" :class="getThemeClasses" @change="updateEditorOptions">
          <option value="Consolas">Consolas</option>
          <option value="'Victor Mono'">Victor Mono</option>
          <option value="Monaco">Monaco</option>
        </select>

        <select v-model="editorTheme" class="px-3 py-1.5 rounded border text-sm" :class="getThemeClasses" @change="updateEditorOptions">
          <option value="vs-dark">Dark Theme</option>
          <option value="vs-light">Light Theme</option>
          <option value="one-dark">One Dark</option>
          <option value="hc-black">High Contrast</option>
        </select>

        <select v-model="fontSize" class="px-3 py-1.5 rounded border text-sm" :class="getThemeClasses" @change="updateEditorOptions">
          <option v-for="size in [12, 14, 16, 18, 20]" :key="size" :value="size">{{ size }}px</option>
        </select>

        <div class="flex items-center gap-2">
          <label :class="getLabelClasses">Word Wrap</label>
          <input type="checkbox" v-model="wordWrap" @change="updateEditorOptions" class="form-checkbox h-4 w-4 text-[#308e87] rounded border-gray-600" :class="getCheckboxClasses" />
        </div>

        <div class="flex items-center gap-2">
          <label :class="getLabelClasses">Minimap</label>
          <input type="checkbox" v-model="minimap" @change="updateEditorOptions" class="form-checkbox h-4 w-4 text-[#308e87] rounded border-gray-600" :class="getCheckboxClasses" />
        </div>
      </div>
    </div>

    <div class="code-editor-container" :class="editorTheme">
      <div ref="editorContainer" class="editor-instance"></div>
    </div>

    <div class="editor-controls">
      <div class="flex justify-end w-full">
        <button @click="runCode" class="run-code-btn px-4 py-2 bg-[#308e87] text-white rounded hover:bg-[#277571] transition-colors flex items-center gap-2">
          <span>Preview Code</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import loader from "@monaco-editor/loader";
import "@fontsource/victor-mono/400.css"; // Regular weight
import "@fontsource/victor-mono/500.css"; // Medium weight

export default {
  name: "CodeEditor",

  props: {
    modelValue: {
      type: String,
      default: '// Write your JavaScript code here\n// Example:\n// console.log("Hello World!");',
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["update:modelValue", "run-code"],

  setup(props, { emit }) {
    const editorContainer = ref(null);
    const statusMessage = ref("Editor ready");
    const editorTheme = ref("one-dark");
    const fontSize = ref(14);
    const wordWrap = ref(true);
    const minimap = ref(false);
    const editorFont = ref("'Victor Mono'");
    let monacoEditor = null;

    const getThemeClasses = computed(() => ({
      "bg-[#2d2d2d] text-white border-gray-600": editorTheme.value === "vs-dark" || editorTheme.value === "hc-black" || editorTheme.value === "one-dark",
      "bg-white text-gray-800 border-gray-300": editorTheme.value === "vs-light",
    }));

    const getLabelClasses = computed(() => ({
      "text-white": editorTheme.value === "vs-dark" || editorTheme.value === "hc-black" || editorTheme.value === "one-dark",
      "text-gray-800": editorTheme.value === "vs-light",
    }));

    const getCheckboxClasses = computed(() => ({
      "bg-[#2d2d2d] border-gray-600": editorTheme.value === "vs-dark" || editorTheme.value === "hc-black" || editorTheme.value === "one-dark",
      "bg-white border-gray-300": editorTheme.value === "vs-light",
    }));

    const getStatusClasses = computed(() => ({
      "text-gray-400": editorTheme.value === "vs-dark" || editorTheme.value === "hc-black" || editorTheme.value === "one-dark",
      "text-gray-600": editorTheme.value === "vs-light",
    }));

    const getHeaderClasses = computed(() => ({
      "bg-[#2d2d2d] text-white border-b border-[#454545]": editorTheme.value === "vs-dark",
      "bg-[#ffffff] text-gray-800 border-b border-[#d4d4d4]": editorTheme.value === "vs-light",
      "bg-black text-white border-b border-white": editorTheme.value === "hc-black" || editorTheme.value === "one-dark",
    }));

    const updateEditorOptions = () => {
      if (!monacoEditor) return;

      monacoEditor.updateOptions({
        theme: editorTheme.value,
        fontSize: fontSize.value,
        fontFamily: editorFont.value + ", Consolas, 'Courier New', monospace",
        fontLigatures: editorFont.value.includes("Victor Mono"),
        letterSpacing: editorFont.value.includes("Victor Mono") ? 0 : undefined,
        lineHeight: editorFont.value.includes("Victor Mono") ? 1.5 : undefined,
        wordWrap: wordWrap.value ? "on" : "off",
        minimap: {
          enabled: minimap.value,
        },
      });

      // Force a layout update after font change
      setTimeout(() => {
        if (monacoEditor) {
          monacoEditor.layout();
        }
      }, 100);
    };

    const defineOneDarkTheme = (monaco) => {
      monaco.editor.defineTheme("one-dark", {
        base: "vs-dark",
        inherit: true,
        rules: [
          { token: "comment", foreground: "5C6370", fontStyle: "italic" },
          { token: "keyword", foreground: "C678DD" },
          { token: "string", foreground: "98C379" },
          { token: "number", foreground: "D19A66" },
          { token: "operator", foreground: "56B6C2" },
          { token: "function", foreground: "61AFEF" },
          { token: "variable", foreground: "E06C75" },
          { token: "type", foreground: "56B6C2" },
          { token: "class", foreground: "E5C07B" },
          { token: "interface", foreground: "E5C07B" },
        ],
        colors: {
          "editor.background": "#282C34",
          "editor.foreground": "#ABB2BF",
          "editor.lineHighlightBackground": "#2C313C",
          "editor.selectionBackground": "#3E4451",
          "editor.inactiveSelectionBackground": "#3E4451",
          "editorCursor.foreground": "#528BFF",
          "editorWhitespace.foreground": "#3B4048",
          "editorIndentGuide.background": "#3B4048",
          "editor.selectionHighlightBackground": "#3E4451",
          "editor.wordHighlightBackground": "#3E4451",
          "editor.wordHighlightStrongBackground": "#3E4451",
          "editor.findMatchBackground": "#42557B",
          "editor.findMatchHighlightBackground": "#314365",
          "editorBracketMatch.background": "#3E4451",
          "editorBracketMatch.border": "#528BFF",
          "editorGutter.background": "#282C34",
          "editorLineNumber.foreground": "#495162",
          "editorActiveLineNumber.foreground": "#737984",
          "editorRuler.foreground": "#3B4048",
          "editorError.foreground": "#E06C75",
          "editorWarning.foreground": "#E5C07B",
          "editorInfo.foreground": "#61AFEF",
          "editorHint.foreground": "#98C379",
        },
      });
    };

    const initializeEditor = async () => {
      try {
        // Ensure font is loaded before initializing editor
        await document.fonts.load('1em "Victor Mono"');

        statusMessage.value = "Initializing editor...";
        const monaco = await loader.init();

        defineOneDarkTheme(monaco);

        const editorOptions = {
          value: props.modelValue,
          language: "javascript",
          theme: "one-dark",
          fontFamily: "'Victor Mono', Consolas, 'Courier New', monospace",
          fontLigatures: true, // Enable font ligatures
          fontSize: fontSize.value,
          letterSpacing: 0, // Adjust letter spacing
          lineHeight: 1.5, // Adjust line height for better readability
          automaticLayout: true,
          minimap: { enabled: minimap.value },
          scrollBeyondLastLine: false,
          lineNumbers: "on",
          roundedSelection: false,
          scrollBars: "vertical",
          folding: true,
          lineDecorationsWidth: 0,
          lineNumbersMinChars: 3,
          readOnly: props.readOnly,
          contextmenu: true,
          quickSuggestions: true,
          suggestOnTriggerCharacters: true,
          parameterHints: true,
          formatOnPaste: true,
          formatOnType: true,
        };

        monacoEditor = monaco.editor.create(editorContainer.value, editorOptions);

        // Force a layout update after creation
        setTimeout(() => {
          if (monacoEditor) {
            monacoEditor.layout();
          }
        }, 100);

        monacoEditor.onDidChangeModelContent(() => {
          const code = monacoEditor.getValue();
          emit("update:modelValue", code);
        });

        statusMessage.value = "Editor ready";
      } catch (error) {
        console.error("Failed to initialize Monaco Editor:", error);
        statusMessage.value = "Failed to initialize editor";
      }
    };

    const runCode = () => {
      if (!monacoEditor) return;

      const code = monacoEditor.getValue();
      statusMessage.value = "Code preview generated";

      console.log("=== Custom Code Preview ===");
      console.log(code);

      emit("run-code", code);
    };

    onMounted(() => {
      initializeEditor();
    });

    onBeforeUnmount(() => {
      if (monacoEditor) {
        monacoEditor.dispose();
      }
    });

    return {
      editorContainer,
      statusMessage,
      runCode,
      editorTheme,
      fontSize,
      wordWrap,
      minimap,
      editorFont,
      updateEditorOptions,
      getThemeClasses,
      getLabelClasses,
      getCheckboxClasses,
      getStatusClasses,
      getHeaderClasses,
    };
  },
};
</script>

<style scoped>
/* Preload Victor Mono font */
@font-face {
  font-family: "Victor Mono";
  font-display: swap;
  src: local("Victor Mono"), url("@fontsource/victor-mono/files/victor-mono-latin-400-normal.woff2") format("woff2");
  font-weight: 400;
}

@font-face {
  font-family: "Victor Mono";
  font-display: swap;
  src: local("Victor Mono"), url("@fontsource/victor-mono/files/victor-mono-latin-500-normal.woff2") format("woff2");
  font-weight: 500;
}

/* Optimize font rendering */
.monaco-editor {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

.code-editor-wrapper {
  background: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.code-editor-wrapper.vs-light {
  background: #f3f3f3;
}

.code-editor-wrapper.hc-black {
  background: #000000;
}

.code-editor-wrapper.one-dark {
  background: #21252b;
}

.editor-header {
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
}

.code-editor-container {
  flex: 1;
  min-height: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

.editor-instance {
  flex: 1;
  min-height: 0;
}

.code-editor-container.vs-dark {
  border: 1px solid #454545;
}

.code-editor-container.vs-light {
  border: 1px solid #d4d4d4;
}

.code-editor-container.hc-black {
  border: 1px solid #fff;
}

.code-editor-container.one-dark {
  border: 1px solid #181a1f;
}

.vs-light .editor-settings select option {
  background: #ffffff;
  color: #000000;
}

.vs-light .form-checkbox:checked {
  background-color: #308e87;
  border-color: #308e87;
}

.vs-dark .form-checkbox:checked,
.hc-black .form-checkbox:checked {
  background-color: #308e87;
  border-color: #308e87;
}

.editor-controls {
  margin-top: 0.5rem;
}
</style>
