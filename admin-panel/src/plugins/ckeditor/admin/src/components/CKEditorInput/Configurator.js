import ckeditor5Dll from "ckeditor5/build/ckeditor5-dll.js";

import ckeditor5BasicStylesDll from "@ckeditor/ckeditor5-basic-styles/build/basic-styles.js";
import ckeditor5EssentialsDll from "@ckeditor/ckeditor5-essentials/build/essentials.js";
import ckeditor5MarkdownDll from '@ckeditor/ckeditor5-markdown-gfm/build/markdown-gfm';
import ckeditor5LinkDll from "@ckeditor/ckeditor5-link/build/link.js";
import ckeditor5WordCountDll from "@ckeditor/ckeditor5-word-count/build/word-count.js";
import { StrapiMediaLib } from "./plugins/StrapiMediaLib";

const CKEDITOR_BASE_CONFIG_FOR_PRESETS = {
  customa: {
    plugins: [
      window.CKEditor5.essentials.Essentials,
      window.CKEditor5.basicStyles.Bold,
      window.CKEditor5.basicStyles.Italic,
      window.CKEditor5.basicStyles.Underline,
      window.CKEditor5.basicStyles.Subscript,
      window.CKEditor5.basicStyles.Superscript,
      window.CKEditor5.paragraph.Paragraph,
      window.CKEditor5.link.Link,
      window.CKEditor5.wordCount.WordCount,
      StrapiMediaLib
    ],
    toolbar: {
      items: [
        'undo', 'redo',
        '|',
        'selectAll',
        '|',
        'bold', 'italic', 'link', 'superscript', 'subscript'
      ],
      shouldNotGroupWhenFull: true
    },
    link: {
      decorators: {
        openInNewTab: {
            mode: 'manual',
            label: 'Открывать в новой вкладке',
            attributes: {
                target: '_blank',
                rel: 'noopener noreferrer'
            }
        }
      }
    },
    heading: {
      options: []
    },
    list: {
      properties: {
          styles: true,
          startIndex: true,
          reversed: true
      }
    }
  }
};

export default class Configurator {
  constructor ( fieldConfig ) {
    this.fieldConfig = fieldConfig;
  }

  getEditorConfig() {
    const config = this._getBaseConfig();

    const outputOption = this.fieldConfig.options.output;

    if ( outputOption === 'Markdown' ) {
      config.plugins.push( window.CKEditor5.markdownGfm.Markdown );
    }

    return config;
  }

  _getBaseConfig() {
    const presetName = this.fieldConfig.options.preset;

    switch ( presetName ) {
      case 'customa':
        return CKEDITOR_BASE_CONFIG_FOR_PRESETS.customa;
      default:
        throw new Error('Invalid preset name ' + presetName);
    }
  }
}
