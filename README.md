# react-sortable-component
# deploy

+ @wwwkimminja/sortable-list@0.1.0


##### npm i -D @babel/cli @babel/preset-react    

  "babel": {
    "presets": [
      "@babel/preset-react"
    ]
  },

    "scripts": {
    "publish": "rm -rf dist && mkdir dist && babel src/lib -d dist --copy-files"
  },

#### npm run publish

    "module": "dist/SortableList.js",
  "main": "dist/SortableList.js",

#### npm login

### npm publish --access public