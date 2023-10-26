// アプリ全体で共通利用したいスタイルを設定
import { extendTheme } from "@chakra-ui/react";

// グローバルスタイルの追加・上書きはtheme.styles.globalを更新
const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "orange.50",
        color: "gray: 800",
      },
      p: {
        // sp: md=1rem=16px, PC: lg=1.125rem=18px
        fontSize: { base: "md", md: "lg" },
        lineHeight: "tall",
      },
    },
  },
});

export default theme;
