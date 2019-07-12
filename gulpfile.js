const { src, dest, watch, series } = require("gulp")
const ts = require("gulp-typescript")
const tsProject = ts.createProject("tsconfig.json")
const clean = require('gulp-clean')

const browserify = require("browserify")
const source = require("vinyl-source-stream")
const tsify = require("tsify")
const watchify = require("watchify")
const gutil = require("gulp-util")

const from = './ts'
const to = './js'

// 清理 output 目录
const cleanOld = () => {
  return src(to, { allowEmpty: true }).pipe(clean(to))
}

// 复制 html
const html = () => {
  return src(from + '/*.html').pipe(dest(to))
}

// 监听改动及时生成编译包 start
const watchedBrowserify = watchify(
  browserify({
    basedir: ".",
    debug: true,
    entries: ["ts/main.ts"],
    cache: {},
    packageCache: {}
  }).plugin(tsify)
)

function bundle() {
  return watchedBrowserify
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(dest(to))
}
// 监听改动及时生成编译包 end


// 使得浏览器环境能够识别编译模块化
const browser = () => {
  const options = {
    basedir: ".",
    debug: true,
    entries: ["ts/main.ts"],
    cache: {},
    packageCache: {}
  }
  return browserify(options)
    .plugin(tsify)
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(dest(to))
}

// 编译 ts
const tsc = () => {
  return tsProject
  .src()
  .pipe(tsProject())
  .js.pipe(dest(to))
}

const listen = () => {
  return Promise.resolve(watch(from, tsc))
}

exports.default = series(cleanOld, tsc, listen)
// exports.default = series(cleanOld, tsc, html, browser)
// exports.default = series(cleanOld, tsc, html, bundle)
// watchedBrowserify.on("update", bundle)
// watchedBrowserify.on("log", gutil.log)