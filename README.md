Update version to https://www.npmjs.com/package/neo-design
### `npm init`
### `git commit`
### `npm version [1.0.0]`
### `npm publish`

Добавление новых компонент:
### 1. Создать папку с новым компонентом в /components/
### 2. Создать страницу storybook в /stories/ 
### 3. В папке с новым компонентом создать файл стилей /components/**/styles/index.less
### 4. Добавить файл стилей нового компонента в основной файл /components/neoDesign.less

`@import './../components/button/styles/index';`

### 5. Добавить export нового компонента в /components/index.tsx



## Запуск на cloud2

#### 1. `npm install`
      В mRemoteNG`[root@cloud2 neo-design]# ./neodesign.sh install`
#### 2. `copy gulp file from local project`
      Скопировать папку: icons
#### 3. `run storybook`
      В mRemoteNG`[root@cloud2 neo-design]# ./neodesign.sh start`
#### 4. `stop storybook` 
      В mRemoteNG`[root@cloud2 neo-design]# ./neodesign.sh stop`


