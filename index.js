const ts = require("typescript");

module.exports = {
  rules: {
    format: {
      meta: {
        type: "layout",
        fixable: "code",
        schema: [
          {
            type: "object",
            additionalProperties: true,
          }
        ],
      },
      create: (context) => {
        const sourceCode = context.getSourceCode();

        const fileName = context.getFilename();

        const tsLanguageService = ts.createLanguageService({
          files: {
            [fileName]: ts.ScriptSnapshot.fromString(sourceCode.text),
          },
          getCompilationSettings() {
            return ts.getDefaultCompilerOptions();
          },
          getScriptFileNames() {
            return Object.keys(this.files);
          },
          getScriptVersion() {
            return "0";
          },
          getScriptSnapshot(fileName) {
            return this.files[fileName];
          },
          getCurrentDirectory() {
            return context.getCwd();
          },
          getDefaultLibFileName(options) {
            return ts.getDefaultLibFilePath(options);
          },
        });

        const tsSourceCodeEdits = tsLanguageService.getFormattingEditsForDocument(
          fileName,
          context.options[0],
        );

        const getSourceCodeLocFromTextPos = (sourceCodeTextPos) => {
          const sourceCodeTextLines = sourceCode.text.slice(0, sourceCodeTextPos).split("\n");
          const sourceCodeTextLastLine = sourceCodeTextLines[sourceCodeTextLines.length - 1];

          return {
            line: sourceCodeTextLines.length,
            column: sourceCodeTextLastLine.length,
          };
        };

        for (const tsSourceCodeEdit of tsSourceCodeEdits) {
          const tsSourceCodeEditOldText = sourceCode.text.slice(
            tsSourceCodeEdit.span.start,
            tsSourceCodeEdit.span.start + tsSourceCodeEdit.span.length,
          );

          if (tsSourceCodeEditOldText !== tsSourceCodeEdit.newText) {
            context.report({
              message: "Invalid formatting",
              loc: {
                start: getSourceCodeLocFromTextPos(tsSourceCodeEdit.span.start),
                end: getSourceCodeLocFromTextPos(tsSourceCodeEdit.span.start + tsSourceCodeEdit.span.length),
              },
              fix: function (fixer) {
                return fixer.replaceTextRange(
                  [
                    tsSourceCodeEdit.span.start,
                    tsSourceCodeEdit.span.start + tsSourceCodeEdit.span.length,
                  ],
                  tsSourceCodeEdit.newText,
                );
              },
            });
          }
        };

        return {};
      },
    },
  },
};
